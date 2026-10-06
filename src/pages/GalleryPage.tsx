import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/gallery';
import { OptimizedImage } from '../components/media/OptimizedImage';
import { Lightbox } from '../components/gallery/Lightbox';

const GALLERY_CATEGORIES = [
  'All',
  'Campus & Infrastructure',
  'Laboratories',
  'Science & Tech',
  'Sports & Swimming',
  'Cultural & Events',
  'Civic & Field Visits'
];

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeLightboxIdx, setActiveLightboxIdx] = useState<number | null>(null);

  const filteredMedia = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* 1. Header Banner */}
      <section className="bg-[#0a1120] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Visual Archives & Campus Chronicle
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Institutional Photographic Archive
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
              Photographic documentation of our multi-acre campus, science and computing laboratories, sports arenas, splash pool, youth parliament assemblies, and student achievements in Kalaburagi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Selector */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-950 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Curated Archive Grid */}
      <section className="py-16 lg:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((media, idx) => (
              <div
                key={media.id}
                onClick={() => setActiveLightboxIdx(idx)}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden cursor-pointer group flex flex-col justify-between hover:border-slate-400 transition-colors"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-slate-100">
                  <OptimizedImage
                    src={media.imageUrl}
                    alt={media.altText}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-400"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-2.5 rounded-full bg-white/25 backdrop-blur-xs text-white">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div className="absolute top-2.5 left-2.5 bg-black/80 text-amber-300 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                    {media.category}
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-950 transition-colors truncate">
                    {media.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {media.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Lightbox Modal */}
      <Lightbox
        mediaList={filteredMedia}
        currentIndex={activeLightboxIdx}
        onClose={() => setActiveLightboxIdx(null)}
        onNavigate={(idx) => setActiveLightboxIdx(idx)}
      />
    </div>
  );
};
