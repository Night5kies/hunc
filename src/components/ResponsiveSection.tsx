import React from 'react';
import { cn } from '@/lib/utils';

interface ResponsiveSectionProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  background?: 'white' | 'gray' | 'black' | 'green';
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  alignment?: 'left' | 'center' | 'right';
  fullWidth?: boolean;
}

const ResponsiveSection: React.FC<ResponsiveSectionProps> = ({
  children,
  className,
  as: Component = 'section',
  background = 'white',
  padding = 'sm',
  alignment = 'left',
  fullWidth = false,
}) => {
  const backgroundClasses = {
    white: 'bg-white text-black',
    gray: 'bg-gray-100 text-black',
    black: 'bg-black text-white',
    green: 'bg-green-600 text-white',
  };

  const paddingClasses = {
    none: '',
    sm: 'py-6 md:py-8',
    md: 'py-8 md:py-10',
    lg: 'py-10 md:py-12',
    xl: 'py-12 md:py-14',
  };

  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <Component
      className={cn(
        'w-full',
        backgroundClasses[background],
        paddingClasses[padding],
        alignmentClasses[alignment],
        fullWidth ? 'px-4 sm:px-6 lg:px-8' : 'px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </Component>
  );
};

export default ResponsiveSection; 