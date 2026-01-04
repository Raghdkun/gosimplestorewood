'use client';

interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
}

export default function AuthButton({ 
  children, 
  isLoading, 
  variant = 'primary',
  ...props 
}: AuthButtonProps) {
  const baseStyles = `
    w-full py-3.5 px-6 
    rounded-xl font-medium 
    flex items-center justify-center gap-2
    transition-all duration-200
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-primary hover:bg-primary/90 
      text-white 
      shadow-lg shadow-primary/25
    `,
    secondary: `
      bg-white/5 hover:bg-white/10 
      text-white 
      border border-white/10
    `,
  };

  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {isLoading ? (
        <>
          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          <span>Please wait...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
}
