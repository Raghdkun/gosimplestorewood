'use client';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: string;
  error?: string;
}

export default function AuthInput({ label, icon, error, ...props }: AuthInputProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-text-muted">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-4 top-1/2 -translate-y-1/2">
          <span className="material-symbols-outlined text-text-muted text-xl">
            {icon}
          </span>
        </div>
        <input
          {...props}
          className={`
            w-full pl-12 pr-4 py-3.5 
            bg-surface-dark/50 
            border ${error ? 'border-red-500' : 'border-white/10'} 
            rounded-xl 
            text-white 
            placeholder:text-text-muted/50
            focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary
            transition-all duration-200
          `}
        />
      </div>
      {error && (
        <p className="text-red-400 text-sm flex items-center gap-1">
          <span className="material-symbols-outlined text-sm">error</span>
          {error}
        </p>
      )}
    </div>
  );
}
