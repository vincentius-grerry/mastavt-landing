'use client';
import type {ReactNode} from 'react';

type BackgroundProps = {
  children: ReactNode;
  className?: string;
  image?: string;
};

const Background = ({children, className = '', image}: BackgroundProps) => {
  return (
    <div
      className={`relative w-full ${className}`}
      style={
        image
          ? {
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }
          : undefined
      }
    >
      {children}
    </div>
  );
};

export default Background;
