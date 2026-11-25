import { Conversation } from '../../types/chat';
import Icon from '../ui/Icon';

interface ChatHeaderProps {
  conversation: Conversation | null;
  otherParticipant: any;
  isOnline: boolean;
  onBack?: () => void;
}

export function ChatHeader({
  conversation,
  otherParticipant,
  isOnline,
  onBack,
}: ChatHeaderProps) {
  const BACKEND_URL = import.meta.env.VITE_SERVICE_URL;
  if (!conversation) return null;

  const getInitials = () => {
    const u = otherParticipant?.user;
    if (u?.firstName && u?.lastName)
      return (u.firstName.charAt(0) + u.lastName.charAt(0)).toUpperCase();
    if (u?.firstName) return u.firstName.charAt(0).toUpperCase();
    if (u?.email) return u.email.charAt(0).toUpperCase();
    return 'U';
  };

  const getAvatarUrl = () => {
    const url = otherParticipant?.user?.avatarUrl;
    if (url) return url.startsWith('http') ? url : `${BACKEND_URL}${url}`;
    return null;
  };

  const name =
    otherParticipant?.user?.firstName && otherParticipant?.user?.lastName
      ? `${otherParticipant.user.firstName} ${otherParticipant.user.lastName}`
      : otherParticipant?.user?.firstName || otherParticipant?.user?.email || 'Unknown User';

  const avatarUrl = getAvatarUrl();
  const initials = getInitials();

  return (
    <div className="flex items-center gap-4 px-4 py-3 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Back button */}
      <button 
        className="md:hidden p-2 -ml-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors" 
        onClick={onBack} 
        aria-label="Back"
      >
        <Icon name="ChevronLeft" size={20} />
      </button>

      {/* Avatar Group */}
      <div className="relative flex-shrink-0">
        <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center font-bold text-primary overflow-hidden border border-slate-100 dark:border-slate-800">
          {avatarUrl ? (
            <img src={avatarUrl} alt={name} className="w-full h-full object-cover" />
          ) : (
            initials
          )}
        </div>
        <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-white dark:border-slate-900 transition-colors ${
          isOnline ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'
        }`} />
      </div>

      {/* Info */}
      <div className="flex-1 min-width-0">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white truncate">{name}</h3>
        <div className="flex items-center gap-1.5">
          <span className={`text-[10px] font-medium uppercase tracking-wider ${
            isOnline ? 'text-green-500' : 'text-slate-400'
          }`}>
            {isOnline ? 'Online' : 'Offline'}
          </span>
          {otherParticipant?.user?.role && (
            <>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="text-[10px] font-semibold text-primary uppercase tracking-wider">
                {otherParticipant.user.role}
              </span>
            </>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-1">
        <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
          <Icon name="Phone" size={18} />
        </button>
        <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
          <Icon name="Video" size={18} />
        </button>
        <button className="p-2 text-slate-400 hover:text-primary hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-all">
          <Icon name="MoreVertical" size={18} />
        </button>
      </div>
    </div>
  );
}


