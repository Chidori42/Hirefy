import { useState } from 'react';
import { useChat } from '../hooks/useChat';
import { ChatSidebar } from './chat/ChatSidebar';
import { RHProfileSidebar } from './chat/RHProfileSidebar';
import { ChatHeader } from './chat/ChatHeader';
import { ChatMessages } from './chat/ChatMessages';
import { ChatInput } from './chat/ChatInput';
import { ToastContainer } from "react-toastify";
import { AiChatButton } from '@/components/ui/AiChatButton';
import { Loading } from './Loading';
import Icon from './ui/Icon';

export function Chat() {
  const {
    user,
    conversations,
    currentConversation,
    messages,
    onlineUsers,
    typingUsers,
    isConnected,
    hasConnectedOnce,
    isLoading,
    isLoadingMessages,
    recruiter,
    isLoadingRecruiter,
    messagesEndRef,
    selectConversation,
    sendMessage,
    sendFile,
    startTyping,
    stopTyping,
    getOtherParticipant,
    moderationAlert,
  } = useChat();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const isAdminOrRecruiter = ["admin", "recruiter"].includes((user as any)?.role ?? "");
  const BACKEND_URL = import.meta.env.VITE_SERVICE_URL;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-120px)] bg-slate-50 dark:bg-slate-900/50">
        <Loading label="Preparing your workspace..." />
      </div>
    );
  }

  const isCandidate = user?.role?.toLowerCase() === 'candidate';
  const otherParticipant = currentConversation ? getOtherParticipant(currentConversation) : null;

  let isOtherUserOnline = false;
  if (isCandidate && recruiter?.id) {
    isOtherUserOnline = onlineUsers.has(recruiter.id);
  } else if (otherParticipant?.userId) {
    isOtherUserOnline = onlineUsers.has(otherParticipant.userId);
  }

  const handleSelectConversation = (id: string) => {
    selectConversation(id);
    if (window.innerWidth < 768) {
      setSidebarOpen(false);
    }
  };

  const recruiterName = recruiter
    ? `${recruiter.firstName || ''} ${recruiter.lastName || ''}`.trim() || 'Recruiter'
    : 'Loading...';
  
  const recruiterAvatarUrl = recruiter?.avatarUrl
    ? (recruiter.avatarUrl.startsWith('http') ? recruiter.avatarUrl : `${BACKEND_URL}${recruiter.avatarUrl}`)
    : null;

  return (
    <div className="flex h-[calc(100vh-80px)] md:h-[calc(100vh-100px)] w-full bg-white dark:bg-slate-900 overflow-hidden md:rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm transition-colors duration-300">
      <ToastContainer />
      
      {/* Sidebar - Hidden on mobile when a conversation is open */}
      <aside className={`
        ${sidebarOpen ? 'flex' : 'hidden md:flex'} 
        w-full md:w-80 lg:w-96 flex-shrink-0 flex-col
      `}>
        {isCandidate ? (
          <RHProfileSidebar
            recruiter={recruiter}
            isOnline={isOtherUserOnline}
            isLoading={isLoadingRecruiter}
          />
        ) : (
          <ChatSidebar
            conversations={conversations}
            currentConversation={currentConversation}
            onlineUsers={onlineUsers}
            onSelectConversation={handleSelectConversation}
            getOtherParticipant={getOtherParticipant}
          />
        )}
      </aside>

      {/* Main Chat Area */}
      <main className={`
        ${!sidebarOpen ? 'flex' : 'hidden md:flex'} 
        flex-1 flex-col relative min-w-0 bg-slate-50 dark:bg-slate-900/50
      `}>
        {currentConversation ? (
          <div className="flex flex-col h-full animate-in fade-in duration-300">
            {/* Mobile Recruiter Header for Candidate */}
            {isCandidate && (
              <div className="md:hidden flex items-center gap-3 p-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <div className="relative w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-800">
                  {recruiterAvatarUrl ? (
                    <img src={recruiterAvatarUrl} alt={recruiterName} className="w-full h-full object-cover" />
                  ) : (
                    <Icon name="User" size={20} className="text-primary" />
                  )}
                </div>
                <div className="flex-1 min-width-0">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">{recruiterName}</h3>
                  <div className="flex items-center gap-1.5">
                    <span className={`text-[10px] font-bold uppercase tracking-widest ${isOtherUserOnline ? 'text-green-500' : 'text-slate-400'}`}>
                      {isOtherUserOnline ? 'Online' : 'Offline'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            <ChatHeader
              conversation={currentConversation}
              otherParticipant={isCandidate ? { user: recruiter } : otherParticipant}
              isOnline={isOtherUserOnline}
              onBack={() => setSidebarOpen(true)}
            />

            <ChatMessages
              messages={messages}
              currentUser={user}
              typingUsers={typingUsers}
              messagesEndRef={messagesEndRef}
              isLoading={isLoadingMessages}
            />

            <ChatInput
              onSendMessage={sendMessage}
              onSendFile={sendFile}
              onStartTyping={startTyping}
              onStopTyping={stopTyping}
              disabled={!isConnected}
            />
          </div>
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center p-8 text-center animate-in fade-in zoom-in-95 duration-500">
            <div className="w-24 h-24 bg-white dark:bg-slate-800 rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-primary/5 ring-1 ring-slate-100 dark:ring-slate-700">
              <Icon name="MessageCircle" className="text-primary/40" size={48} />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">Your Inbox</h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-sm mx-auto leading-relaxed">
              Select a conversation from the sidebar to start chatting with recruiters or candidates.
            </p>
          </div>
        )}

        {/* Connection Banner */}
        {hasConnectedOnce && !isConnected && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-50 px-4 py-2 bg-amber-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-2 animate-bounce">
            <Icon name="RefreshCw" size={14} className="animate-spin" />
            Reconnecting to server...
          </div>
        )}

        {/* Moderation Alert */}
        {moderationAlert && (
          <div className={`
            absolute top-20 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md p-4 rounded-2xl border-2 shadow-2xl animate-in slide-in-from-top-4
            ${moderationAlert.action === 'Block' 
              ? 'bg-red-50 border-red-200 text-red-700 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400' 
              : 'bg-amber-50 border-amber-200 text-amber-700 dark:bg-amber-900/20 dark:border-amber-800 dark:text-amber-400'}
          `}>
            <div className="flex gap-4">
              <div className={`
                flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center
                ${moderationAlert.action === 'Block' ? 'bg-red-100 dark:bg-red-900/40' : 'bg-amber-100 dark:bg-amber-900/40'}
              `}>
                <Icon name={moderationAlert.action === 'Block' ? "ShieldAlert" : "AlertTriangle"} size={20} />
              </div>
              <div>
                <h4 className="font-bold mb-1">
                  {moderationAlert.action === 'Block' ? 'Message Blocked' : 'Action Warning'}
                </h4>
                <p className="text-sm opacity-90 leading-relaxed">
                  {moderationAlert.reason.length > 0
                    ? `Reason: ${moderationAlert.reason.join(', ')}`
                    : 'Your message was flagged by our automated moderation system.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {!isAdminOrRecruiter && (
          <div className="fixed bottom-6 right-6 md:absolute md:bottom-8 md:right-8 z-40">
            <AiChatButton />
          </div>
        )}
      </main>
    </div>
  );
}

