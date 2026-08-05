import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'outline';
  href?: string;
  target?: string;
  className?: string;
}

export function Button({
  children,
  variant = 'primary',
  href,
  target,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-colors rounded-lg text-sm py-2.5 px-4';
  const variants = {
    primary: 'bg-cyan-600 hover:bg-cyan-500 text-white',
    outline: 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        rel={target === '_blank' ? 'noreferrer' : undefined} 
        className={combinedClasses}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
