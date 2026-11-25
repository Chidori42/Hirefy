import { User } from '../../types/chat';
import { Loading } from '@/components/Loading';
import Icon from '../ui/Icon';

interface RHProfileSidebarProps {
  recruiter: User | null;
  isOnline: boolean;
  isLoading?: boolean;
}

export function RHProfileSidebar({ recruiter, isOnline, isLoading = false }: RHProfileSidebarProps) {
  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center p-8">
        <Loading compact />
      </div>
    );
  }

  const getInitials = () => {
    if (recruiter?.firstName && recruiter?.lastName)
      return (recruiter.firstName.charAt(0) + recruiter.lastName.charAt(0)).toUpperCase();
    return 'RH';
  };

  const getAvatarUrl = () => {
    const BACKEND_URL = import.meta.env.VITE_SERVICE_URL;
    if (recruiter?.avatarUrl) {
      return recruiter.avatarUrl.startsWith('http')
        ? recruiter.avatarUrl
        : `${BACKEND_URL}${recruiter.avatarUrl}`;
    }
    return null;
  };

  const recruiterName = recruiter
    ? `${recruiter.firstName || ''} ${recruiter.lastName || ''}`.trim() || 'Recruiter'
    : 'Loading...';
  const avatarUrl = getAvatarUrl();
  const initials = getInitials();

  return (
    <div className="flex flex-col h-full bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 transition-colors duration-300">
      {/* Profile Header Section */}
      <div className="relative pt-12 pb-8 px-6 flex flex-col items-center border-b border-slate-100 dark:border-slate-800">
        {/* Avatar Wrapper */}
        <div className="relative mb-6 group">
          <div className="w-28 h-28 rounded-3xl bg-primary/10 flex items-center justify-center text-3xl font-bold text-primary border-4 border-white dark:border-slate-800 shadow-xl overflow-hidden transition-transform group-hover:scale-105 duration-500">
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt={recruiterName}
                className="w-full h-full object-cover"
              />
            ) : (
              initials
            )}
          </div>
          {/* Online Indicator */}
          <div className={`absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-4 border-white dark:border-slate-800 shadow-sm transition-colors ${
            isOnline ? 'bg-green-500' : 'bg-slate-300 dark:bg-slate-600'
          }`} />
        </div>

        {/* Info */}
        <div className="text-center space-y-1">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white uppercase tracking-tight">
            {recruiterName}
          </h2>
          <div className="flex items-center justify-center gap-2">
             <span className="text-[10px] font-bold text-primary uppercase tracking-widest bg-primary/10 px-2 py-0.5 rounded-full">
              Recruiter
            </span>
            <span className={`text-[10px] font-bold uppercase tracking-widest ${isOnline ? 'text-green-500' : 'text-slate-400'}`}>
              • {isOnline ? 'Online' : 'Offline'}
            </span>
          </div>
        </div>
      </div>

      {/* Profile Details Section */}
      <div className="flex-1 p-6 space-y-6 overflow-y-auto custom-scrollbar">
        <div className="space-y-4">
          <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] px-1">Details</h4>
          
          <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 shadow-sm">
              <Icon name="Briefcase" size={16} />
            </div>
            <div className="flex-1 min-width-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Company</p>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">
                {recruiter?.company || "Company's HR"}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-700">
            <div className="w-8 h-8 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center text-slate-400 shadow-sm">
              <Icon name="Mail" size={16} />
            </div>
            <div className="flex-1 min-width-0">
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Email</p>
              <p className="text-xs font-bold text-slate-700 dark:text-slate-200 truncate">
                {recruiter?.email || "Not available"}
              </p>
            </div>
          </div>
        </div>

        <div className="p-4 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/10">
          <div className="flex items-start gap-3">
            <Icon name="ShieldCheck" className="text-primary mt-0.5" size={18} />
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white mb-1">Verified Recruiter</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed">
                This recruiter is verified by Hirefy and can help you with your career goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Branding */}
      <div className="p-6 text-center border-t border-slate-100 dark:border-slate-800">
        <div className="inline-flex items-center gap-2 opacity-30 grayscale hover:opacity-60 transition-opacity">
          <img src="/logo.svg" alt="Hirefy" className="w-4 h-4" />
          <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">
            Hirefy Talent
          </span>
        </div>
      </div>
    </div>
  );
}


