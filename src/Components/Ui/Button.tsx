import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  target?: string;
}

export function Button({ children, variant = 'primary', href, className, target, ...props }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300";
  
  const variants = {
    primary: "bg-primary hover:bg-blue-500 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]",
    secondary: "bg-secondary hover:bg-violet-500 text-white",
    outline: "border border-white/10 hover:bg-white/5 text-gray-200"
  };

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(baseStyles, variants[variant], className)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}