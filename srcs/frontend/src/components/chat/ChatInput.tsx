import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { CHAT_MESSAGE_MAX_LENGTH } from '../../types/chat';
import { mainService } from '@/utils/Api';
import Icon from '../ui/Icon';

const MAX_RECORDING_SECONDS = 30;

const formatRecordingTime = (seconds: number) => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

interface SelectedFilePreviewProps {
  readonly selectedFile: File;
  readonly onClear: () => void;
}

function SelectedFilePreview({ selectedFile, onClear }: SelectedFilePreviewProps) {
  return (
    <div className="flex items-center gap-3 mb-3 p-3 bg-primary/5 dark:bg-primary/10 border border-primary/20 rounded-xl transition-all animate-in fade-in slide-in-from-bottom-2">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
        <Icon name="File" size={20} />
      </div>
      <div className="flex-1 min-width-0">
        <p className="text-sm font-bold text-slate-900 dark:text-white truncate">{selectedFile.name}</p>
        <p className="text-[10px] text-slate-500 uppercase font-semibold">Ready to send</p>
      </div>
      <button
        type="button"
        onClick={onClear}
        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-all"
      >
        <Icon name="X" size={18} />
      </button>
    </div>
  );
}

interface ChatInputProps {
  readonly onSendMessage: (content: string) => void;
  readonly onSendFile: (file: File) => void;
  readonly onStartTyping: () => void;
  readonly onStopTyping: () => void;
  readonly disabled?: boolean;
}

export function ChatInput({
  onSendMessage,
  onSendFile,
  onStartTyping,
  onStopTyping,
  disabled = false,
}: ChatInputProps) {
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [validationError, setValidationError] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [isTranscribing, setIsTranscribing] = useState(false);
  const [recordingSeconds, setRecordingSeconds] = useState(0);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const typingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const recordedChunksRef = useRef<Blob[]>([]);
  const recordingIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const env_ai_api = import.meta.env.VITE_AI_API_URL;

  useEffect(() => {
    return () => {
      if (recordingIntervalRef.current) {
        clearInterval(recordingIntervalRef.current);
      }
      mediaRecorderRef.current?.stream.getTracks().forEach((track) => track.stop());
    };
  }, []);

  useEffect(() => {
    if (isRecording && recordingSeconds >= MAX_RECORDING_SECONDS) {
      stopRecording();
    }
  }, [isRecording, recordingSeconds]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nextValue = e.target.value;
    setMessage(nextValue);

    if (nextValue.trim().length > CHAT_MESSAGE_MAX_LENGTH) {
      setValidationError(`Max ${CHAT_MESSAGE_MAX_LENGTH} characters allowed`);
    } else {
      setValidationError('');
    }

    onStartTyping();
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
    typingTimeoutRef.current = setTimeout(() => onStopTyping(), 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedFile) {
      onSendFile(selectedFile);
      setSelectedFile(null);
      setMessage('');
      setValidationError('');
    } else if (message.trim()) {
      const trimmed = message.trim();
      if (trimmed.length > CHAT_MESSAGE_MAX_LENGTH) {
        setValidationError(`Max ${CHAT_MESSAGE_MAX_LENGTH} characters allowed`);
        return;
      }

      onSendMessage(trimmed);
      setMessage('');
      setValidationError('');
    }
    onStopTyping();
    if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  const handleFileClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setMessage('');
      setValidationError('');
    }
  };

  const stopMediaTracks = () => {
    mediaStreamRef.current?.getTracks().forEach((track) => track.stop());
    mediaStreamRef.current = null;
  };

  const resetRecordingState = () => {
    if (recordingIntervalRef.current) {
      clearInterval(recordingIntervalRef.current);
      recordingIntervalRef.current = null;
    }
    setIsRecording(false);
    setRecordingSeconds(0);
  };

  const pickRecordingMimeType = () => {
    const candidates = ['audio/webm;codecs=opus', 'audio/webm', 'audio/mp4', 'audio/ogg;codecs=opus'];
    return candidates.find((mimeType) => typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(mimeType)) || '';
  };

  const sendAudioForTranscription = async (blob: Blob) => {
    setIsTranscribing(true);
    try {
      const formData = new FormData();
      formData.append('audio', blob, 'recording.mp3');
      const response = await mainService.post(`${env_ai_api}/recognate`, formData);
      const data = response.data;
      if (data.text) {
        setMessage((prev) => (prev ? prev + ' ' + data.text : data.text));
      }
    } catch {
      toast.error('Failed to transcribe audio');
    } finally {
      setIsTranscribing(false);
    }
  };

  const startRecording = async () => {
    if (disabled || isRecording || isTranscribing) return;

    if (typeof navigator === 'undefined' || !navigator.mediaDevices?.getUserMedia || typeof MediaRecorder === 'undefined') {
      toast.error('Recording not supported');
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = pickRecordingMimeType();
      const recorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);

      mediaStreamRef.current = stream;
      mediaRecorderRef.current = recorder;
      recordedChunksRef.current = [];
      setValidationError('');
      setIsRecording(true);
      setRecordingSeconds(0);

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          recordedChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        if (recordedChunksRef.current.length > 0) {
          const chunkType = recordedChunksRef.current[0]?.type || recorder.mimeType || 'audio/webm';
          const audioBlob = new Blob(recordedChunksRef.current, { type: chunkType });
          sendAudioForTranscription(audioBlob);
        }
        recordedChunksRef.current = [];
        resetRecordingState();
        stopMediaTracks();
      };

      recorder.start();
      recordingIntervalRef.current = setInterval(() => {
        setRecordingSeconds((current) => current + 1);
      }, 1000);
    } catch {
      toast.error('Microphone access required');
      resetRecordingState();
      stopMediaTracks();
    }
  };

  const stopRecording = () => {
    const recorder = mediaRecorderRef.current;
    if (!recorder || recorder.state === 'inactive') {
      resetRecordingState();
      stopMediaTracks();
      return;
    }
    recorder.stop();
  };

  const clearFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const canSend = !disabled && !validationError && (!!message.trim() || !!selectedFile);
  const messageLength = message.trim().length;

  return (
    <div className="px-4 py-4 md:px-8 md:pb-8 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {selectedFile && <SelectedFilePreview selectedFile={selectedFile} onClear={clearFile} />}

        <form onSubmit={handleSubmit} className="relative">
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />

          <div className={`flex items-center gap-2 p-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl transition-all focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary ${
            isRecording ? 'border-red-500 ring-2 ring-red-500/20' : ''
          }`}>
            <button
              type="button"
              onClick={handleFileClick}
              disabled={disabled || isRecording || isTranscribing}
              className="p-2.5 text-slate-400 hover:text-primary hover:bg-white dark:hover:bg-slate-700 rounded-xl transition-all disabled:opacity-50"
            >
              <Icon name="Plus" size={20} />
            </button>

            <input
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-slate-900 dark:text-white placeholder:text-slate-400 py-2 px-1"
              type="text"
              value={message}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={
                isTranscribing ? 'Processing audio...' : 
                isRecording ? 'Recording your voice...' : 
                'Type your message here...'
              }
              disabled={disabled || isRecording || isTranscribing}
            />

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={isRecording ? stopRecording : startRecording}
                disabled={disabled || isTranscribing}
                className={`p-2.5 rounded-xl transition-all flex items-center justify-center ${
                  isRecording 
                    ? 'bg-red-500 text-white animate-pulse' 
                    : isTranscribing
                      ? 'bg-primary/10 text-primary animate-spin'
                      : 'text-slate-400 hover:text-primary hover:bg-white dark:hover:bg-slate-700'
                }`}
              >
                {isTranscribing ? (
                   <Icon name="Loader2" size={20} />
                ) : (
                  <Icon name={isRecording ? "Square" : "Mic"} size={20} />
                )}
              </button>

              <button
                type="submit"
                disabled={!canSend}
                className={`p-2.5 rounded-xl transition-all flex items-center justify-center ${
                  canSend 
                    ? 'bg-primary text-white shadow-lg shadow-primary/25 hover:scale-105 active:scale-95' 
                    : 'bg-slate-200 dark:bg-slate-700 text-slate-400 cursor-not-allowed'
                }`}
              >
                <Icon name="Send" size={20} />
              </button>
            </div>
          </div>

          {/* Feedback Area */}
          <div className="flex justify-between items-center mt-2 px-1">
            <div className="flex items-center gap-2">
              {isRecording && (
                <div className="flex items-center gap-2 text-[10px] font-bold text-red-500 uppercase tracking-widest animate-pulse">
                  <span className="w-2 h-2 rounded-full bg-red-500" />
                  Recording {formatRecordingTime(recordingSeconds)}
                </div>
              )}
              {validationError && (
                <span className="text-[10px] font-bold text-red-500 uppercase tracking-tight">
                  {validationError}
                </span>
              )}
            </div>
            <div className={`text-[10px] font-bold uppercase tracking-widest ${
              messageLength > CHAT_MESSAGE_MAX_LENGTH ? 'text-red-500' : 'text-slate-400'
            }`}>
              {messageLength} / {CHAT_MESSAGE_MAX_LENGTH}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

