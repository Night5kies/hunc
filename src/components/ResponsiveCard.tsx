import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveCardProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  variant?: 'default' | 'elevated' | 'outlined' | 'filled';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hover?: boolean;
  onClick?: () => void;
}

const ResponsiveCard: React.FC<ResponsiveCardProps> = ({
  children,
  className,
  as: Component = 'div',
  variant = 'default',
  padding = 'md',
  hover = false,
  onClick,
}) => {
  const variantClasses = {
    default: 'bg-white border border-gray-200',
    elevated: 'bg-white shadow-lg border border-gray-200',
    outlined: 'bg-transparent border-2 border-gray-300',
    filled: 'bg-gray-50 border border-gray-200',
  };

  const paddingClasses = {
    none: '',
    sm: 'p-4 md:p-6',
    md: 'p-6 md:p-8',
    lg: 'p-8 md:p-10',
  };

  const hoverClasses = hover
    ? 'transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer'
    : '';

  return (
    <Component
      className={cn(
        'rounded-lg transition-all duration-300',
        variantClasses[variant],
        paddingClasses[padding],
        hoverClasses,
        onClick && 'cursor-pointer',
        className
      )}
      onClick={onClick}
    >
      {children}
    </Component>
  );
};

export default ResponsiveCard; 