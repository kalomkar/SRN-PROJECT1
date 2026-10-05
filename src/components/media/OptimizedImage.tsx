import React, { useState } from 'react';
import { School } from 'lucide-react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
  aspectRatioClass?: string;
  fallbackTitle?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  aspectRatioClass = '',
  fallbackTitle,
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  if (hasError || !src) {
    return (
      <div
        className={`bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-slate-200 flex flex-col items-center justify-center p-6 text-center border border-slate-700/40 relative overflow-hidden ${aspectRatioClass} ${className}`}
      >
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        <School className="w-10 h-10 text-amber-400 mb-2 opacity-80" />
        <span className="text-xs uppercase tracking-widest text-amber-200/80 font-medium">SRN Mehta Institutions</span>
        {fallbackTitle && (
          <p className="text-xs text-slate-300 mt-1 max-w-[200px] truncate">{fallbackTitle}</p>
        )}
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${aspectRatioClass} ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse flex items-center justify-center">
          <School className="w-8 h-8 text-slate-400 opacity-40" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        referrerPolicy="no-referrer"
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-cover transition-all duration-500 ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`}
        {...props}
      />
    </div>
  );
};
