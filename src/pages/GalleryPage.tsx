import React, { useState } from 'react';
import { Maximize2, Tag, Filter, Sparkles, Image as ImageIcon } from 'lucide-react';
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
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Visual Archives & Campus Chronicle
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Institutional Photographic Gallery
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Explore our architectural campus, cutting-edge science and computing labs, sports complexes, splash pool, youth parliament sessions, and student life in Kalaburagi.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {GALLERY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Media Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMedia.map((media, idx) => (
              <div
                key={media.id}
                onClick={() => setActiveLightboxIdx(idx)}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="aspect-[4/3] overflow-hidden relative bg-slate-100">
                  <OptimizedImage
                    src={media.imageUrl}
                    alt={media.altText}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="p-3 rounded-full bg-white/20 backdrop-blur-md text-white">
                      <Maximize2 className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-amber-300 text-[10px] font-semibold uppercase px-2.5 py-1 rounded">
                    {media.category}
                  </div>
                </div>

                <div className="p-4 bg-white">
                  <h3 className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-900 transition-colors truncate">
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

      {/* Lightbox Modal */}
      <Lightbox
        mediaList={filteredMedia}
        currentIndex={activeLightboxIdx}
        onClose={() => setActiveLightboxIdx(null)}
        onNavigate={(newIdx) => setActiveLightboxIdx(newIdx)}
      />
    </div>
  );
};
