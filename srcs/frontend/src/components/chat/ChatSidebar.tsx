import { useState } from 'react';
import { Conversation } from '../../types/chat';
import Icon from '../ui/Icon';

interface ChatSidebarProps {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  onlineUsers: Set<string>;
  onSelectConversation: (conversationId: string) => void;
  getOtherParticipant: (conversation: Conversation) => any;
}

export function ChatSidebar({
  conversations,
  currentConversation,
  onlineUsers,
  onSelectConversation,
  getOtherParticipant,
}: ChatSidebarProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = conversations.filter((conv) => {
    const p = getOtherParticipant(conv);
    const name = p?.user?.firstName
      ? `${p.user.firstName} ${p.user.lastName || ''}`.trim()
      : p?.user?.email || 'Unknown';
    return name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const getParticipantName = (p: any) => {
    if (p?.user?.firstName && p?.user?.lastName)
      return `${p.user.firstName} ${p.user.lastName}`;
    if (p?.user?.firstName) return p.user.firstName;
    if (p?.user?.email) return p.user.email;
    return 'Unknown User';
  };

  const getInitials = (p: any) => {
    if (p?.user?.firstName && p?.user?.lastName)
      return (p.user.firstName.charAt(0) + p.user.lastName.charAt(0)).toUpperCase();
    if (p?.user?.firstName) return p.user.firstName.charAt(0).toUpperCase();
    if (p?.user?.email) return p.user.email.charAt(0).toUpperCase();
    return '?';
  };

  const getAvatarUrl = (p: any) => {
    const BACKEND_URL = import.meta.env.VITE_SERVICE_URL;
    if (p?.user?.avatarUrl) {
      return p.user.avatarUrl.startsWith('http')
        ? p.user.avatarUrl
        : `${BACKEND_URL}${p.user.avatarUrl}`;
    }
    return null;
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m`;
    if (diffHours < 24) return `${diffHours}h`;
    if (diffDays < 7) return `${diffDays}d`;
    return date.toLocaleDateString();
  };

  return (
    <div className="flex h-full flex-col bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Header */}
      <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Messages</h2>
        <div className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-xs font-semibold">
          {conversations.length}
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative group">
          <Icon 
            name="Search" 
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" 
            size={16} 
          />
          <input
            className="w-full pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            type="text"
            placeholder="Search conversations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-2 space-y-1">
        {filteredConversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
            <div className="w-12 h-12 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center mb-3">
              <Icon name="MessageSquare" className="text-slate-300 dark:text-slate-600" size={24} />
            </div>
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">No conversations found</p>
          </div>
        ) : (
          filteredConversations.map((conversation) => {
            const p = getOtherParticipant(conversation);
            const isUserOnline = p?.userId ? onlineUsers.has(p.userId) : false;
            const avatarUrl = getAvatarUrl(p);
            const initials = getInitials(p);
            const name = getParticipantName(p);
            const isActive = currentConversation?.id === conversation.id;
            const lastMsg = conversation.lastMessage;
            const unread = conversation.unreadCount || 0;

            return (
              <div
                key={conversation.id}
                onClick={() => onSelectConversation(conversation.id)}
                className={`group flex items-center gap-3 p-3 cursor-pointer rounded-xl transition-all duration-200 ${
                  isActive 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20' 
                    : 'hover:bg-slate-50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300'
                }`}
              >
                {/* Avatar */}
                <div className="relative flex-shrink-0">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-base overflow-hidden transition-transform group-hover:scale-105 ${
                    isActive ? 'bg-white/20' : 'bg-slate-100 dark:bg-slate-800'
                  }`}>
                    {avatarUrl ? (
                      <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
                    ) : (
                      <span className={isActive ? 'text-white' : 'text-slate-500'}>{initials}</span>
                    )}
                  </div>
                  {/* Online dot */}
                  <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 ${
                    isActive ? 'border-primary' : 'border-white dark:border-slate-900'
                  } ${isUserOnline ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'}`} />
                </div>

                {/* Info */}
                <div className="flex-1 min-width-0">
                  <div className="flex justify-between items-start mb-0.5">
                    <h3 className={`text-sm font-bold truncate ${isActive ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                      {name}
                    </h3>
                    {lastMsg && (
                      <span className={`text-[10px] whitespace-nowrap ml-2 ${isActive ? 'text-white/70' : 'text-slate-400'}`}>
                        {formatTime(lastMsg.createdAt)}
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center gap-2">
                    <p className={`text-xs truncate ${isActive ? 'text-white/80' : 'text-slate-500 dark:text-slate-400'}`}>
                      {lastMsg?.content || 'No messages yet'}
                    </p>
                    {unread > 0 && !isActive && (
                      <span className="flex-shrink-0 min-w-[18px] h-[18px] px-1 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                        {unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

