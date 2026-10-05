import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryMedia } from '../../types/institution';

interface LightboxProps {
  mediaList: GalleryMedia[];
  currentIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  mediaList,
  currentIndex,
  onClose,
  onNavigate
}) => {
  // Keyboard navigation listeners (ESC to close, Arrow Left/Right to paginate)
  // MUST be called at top-level unconditionally
  useEffect(() => {
    if (currentIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) onNavigate(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < mediaList.length - 1) onNavigate(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, mediaList.length, onClose, onNavigate]);

  if (currentIndex === null || !mediaList[currentIndex]) {
    return null;
  }

  const currentItem = mediaList[currentIndex];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 backdrop-blur-md p-4 sm:p-6"
    >
      {/* Top Toolbar */}
      <div className="absolute top-0 inset-x-0 p-4 sm:px-8 flex items-center justify-between z-10 bg-gradient-to-b from-black/80 to-transparent text-white">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono tracking-wider text-amber-400 font-semibold">
            {currentIndex + 1} / {mediaList.length}
          </span>
          <span className="text-slate-600">|</span>
          <span className="text-xs uppercase tracking-wider text-slate-300 font-medium">
            {currentItem.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={currentItem.imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            title="Open Original Image"
          >
            <Maximize2 className="w-4 h-4" />
          </a>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Container */}
      <div className="relative max-w-5xl max-h-[80vh] w-full flex items-center justify-center">
        <img
          src={currentItem.imageUrl}
          alt={currentItem.altText || currentItem.title}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl transition-transform duration-300 select-none"
        />

        {/* Previous Button */}
        {currentIndex > 0 && (
          <button
            onClick={() => onNavigate(currentIndex - 1)}
            className="absolute left-2 sm:-left-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all cursor-pointer shadow-lg border border-white/10"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}

        {/* Next Button */}
        {currentIndex < mediaList.length - 1 && (
          <button
            onClick={() => onNavigate(currentIndex + 1)}
            className="absolute right-2 sm:-right-12 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-black/90 text-white transition-all cursor-pointer shadow-lg border border-white/10"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}
      </div>

      {/* Caption Bar */}
      <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 text-center bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
        <h4 className="font-display text-base sm:text-lg font-bold text-white tracking-wide">
          {currentItem.title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl mx-auto leading-relaxed">
          {currentItem.caption}
        </p>
      </div>
    </div>
  );
};
