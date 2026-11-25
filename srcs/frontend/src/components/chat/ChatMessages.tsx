import { Message, User } from '../../types/chat';
import { Loading } from '@/components/Loading';
import Icon from '../ui/Icon';

interface ChatMessagesProps {
  readonly messages: Message[];
  readonly currentUser: User | null;
  readonly typingUsers: Map<string, any>;
  readonly messagesEndRef: React.RefObject<HTMLDivElement | null>;
  readonly isLoading?: boolean;
}

const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
};

const formatFileSize = (bytes: number) => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const isImageFile = (mimeType?: string) => mimeType?.startsWith('image/');
const isVideoFile = (mimeType?: string) => mimeType?.startsWith('video/');
const isAudioFile = (mimeType?: string) => mimeType?.startsWith('audio/');

const buildFileUrl = (fileUrl?: string) => {
  const BACKEND_URL = import.meta.env.VITE_SERVICE_URL;
  if (!fileUrl) return null;
  if (fileUrl.startsWith('http')) return fileUrl;
  return `${BACKEND_URL}${fileUrl}`;
};

interface MediaAttachmentProps {
  readonly message: Message;
  readonly fileUrl: string;
}

function ImageAttachment({ message, fileUrl }: Readonly<MediaAttachmentProps>) {
  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => window.open(fileUrl, '_blank', 'noopener,noreferrer')}
        className="group relative block rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-all"
      >
        <img
          src={fileUrl}
          alt={message.fileName || 'Image'}
          className="max-w-full md:max-w-[400px] max-h-[300px] object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <Icon name="Maximize2" className="text-white" size={24} />
        </div>
      </button>
      {message.content && <p className="text-sm leading-relaxed">{message.content}</p>}
    </div>
  );
}

function VideoAttachment({ fileUrl }: Readonly<MediaAttachmentProps>) {
  return (
    <div className="rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 bg-black">
      <video
        src={fileUrl}
        controls
        className="max-w-full md:max-w-[400px] max-h-[300px] block"
      >
        <track kind="captions" />
      </video>
    </div>
  );
}

function AudioAttachment({ message, fileUrl }: Readonly<MediaAttachmentProps>) {
  return (
    <div className="min-w-[280px] space-y-2">
      <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-2 border border-slate-200 dark:border-slate-700">
        <audio
          src={fileUrl}
          controls
          preload="metadata"
          className="w-full h-10"
        >
          <track kind="captions" />
        </audio>
      </div>
      {message.fileName && (
        <div className="flex items-center gap-2 px-1 text-[10px] text-slate-400 font-medium">
          <Icon name="Music" size={10} />
          <span>{message.fileName}</span>
        </div>
      )}
    </div>
  );
}

interface FileAttachmentProps {
  readonly message: Message;
  readonly fileUrl: string;
  readonly isSent: boolean;
}

function FileAttachment({ message, fileUrl, isSent }: Readonly<FileAttachmentProps>) {
  return (
    <a
      href={fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex items-center gap-3 p-3 rounded-xl border transition-all ${
        isSent 
          ? 'bg-white/10 border-white/20 hover:bg-white/20 text-white' 
          : 'bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-primary/50 text-slate-700 dark:text-slate-300'
      }`}
    >
      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
        isSent ? 'bg-white/20' : 'bg-primary/10 text-primary'
      }`}>
        <Icon name="FileText" size={20} />
      </div>
      <div className="flex-1 min-width-0">
        <p className="text-sm font-bold truncate">{message.fileName || 'File'}</p>
        {message.fileSize && (
          <p className={`text-[10px] ${isSent ? 'text-white/60' : 'text-slate-400'}`}>
            {formatFileSize(message.fileSize)}
          </p>
        )}
      </div>
      <Icon name="Download" size={16} className={isSent ? 'text-white/60' : 'text-slate-400'} />
    </a>
  );
}

interface AttachmentContentProps {
  readonly message: Message;
  readonly fileUrl: string;
  readonly isSent: boolean;
}

function AttachmentContent({ message, fileUrl, isSent }: Readonly<AttachmentContentProps>) {
  if (isImageFile(message.fileMimetype)) {
    return <ImageAttachment message={message} fileUrl={fileUrl} />;
  }

  if (isVideoFile(message.fileMimetype)) {
    return <VideoAttachment message={message} fileUrl={fileUrl} />;
  }

  if (isAudioFile(message.fileMimetype)) {
    return <AudioAttachment message={message} fileUrl={fileUrl} />;
  }

  return <FileAttachment message={message} fileUrl={fileUrl} isSent={isSent} />;
}

interface MessageRowProps {
  readonly message: Message;
  readonly currentUser: User | null;
}

function MessageRow({ message, currentUser }: Readonly<MessageRowProps>) {
  const isSent = message.senderId === currentUser?.id;
  const modAction = message.moderation?.action;

  if (message.messageType === 'system') {
    return (
      <div key={message.id} className="flex justify-center my-4">
        <div className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
          {message.content}
        </div>
      </div>
    );
  }

  const fileUrl = buildFileUrl(message.fileUrl);

  return (
    <div 
      key={message.id} 
      className={`flex flex-col max-w-[85%] md:max-w-[70%] ${isSent ? 'self-end items-end' : 'self-start items-start'}`}
    >
      <div className={`relative px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm transition-all ${
        modAction === 'Block' 
          ? 'bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-400 border-2 border-red-200 dark:border-red-800' 
          : modAction === 'Warn'
            ? 'bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 border-2 border-amber-200 dark:border-amber-800'
            : isSent
              ? 'bg-primary text-white rounded-br-none shadow-primary/10'
              : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-100 dark:border-slate-700 rounded-bl-none'
      }`}>
        {message.messageType === 'file' && fileUrl ? (
          <AttachmentContent message={message} fileUrl={fileUrl} isSent={isSent} />
        ) : (
          <p className="whitespace-pre-wrap break-words">{message.content}</p>
        )}
      </div>

      <div className={`flex items-center gap-2 mt-1.5 px-1 ${isSent ? 'flex-row-reverse' : ''}`}>
        <span className="text-[10px] font-medium text-slate-400">
          {formatTime(message.createdAt)}
        </span>
        {modAction === 'Block' && (
          <span className="flex items-center gap-1 text-[10px] font-bold text-red-500 uppercase tracking-tighter">
            <Icon name="ShieldAlert" size={10} /> Blocked
          </span>
        )}
        {modAction === 'Warn' && (
          <span className="flex items-center gap-1 text-[10px] font-bold text-amber-500 uppercase tracking-tighter">
            <Icon name="AlertTriangle" size={10} /> Warning
          </span>
        )}
      </div>
    </div>
  );
}

export function ChatMessages({
  messages,
  currentUser,
  typingUsers,
  messagesEndRef,
  isLoading = false,
}: Readonly<ChatMessagesProps>) {
  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-slate-50 dark:bg-slate-900/50">
        <Loading compact className="scale-110" />
      </div>
    );
  }

  if (messages.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 bg-slate-50 dark:bg-slate-900/50 text-center">
        <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-2xl flex items-center justify-center mb-4 shadow-sm">
          <Icon name="MessageSquare" className="text-slate-300 dark:text-slate-600" size={32} />
        </div>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Start a conversation</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xs">
          Send a message to begin your professional journey with Hirefy.
        </p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto custom-scrollbar bg-slate-50 dark:bg-slate-900/50 px-4 py-6 md:px-8">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        {messages.map((message) => (
          <MessageRow key={message.id} message={message} currentUser={currentUser} />
        ))}

        {typingUsers.size > 0 && (
          <div className="self-start flex items-center gap-3 bg-white dark:bg-slate-800 px-4 py-2.5 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-700">
            <div className="flex gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:-0.3s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce [animation-delay:-0.15s]" />
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40 animate-bounce" />
            </div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Typing...</span>
          </div>
        )}

        <div ref={messagesEndRef} className="h-2" />
      </div>
    </div>
  );
}

