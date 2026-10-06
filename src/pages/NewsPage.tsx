import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Trophy, Clock, ArrowRight, Tag, Bell, ChevronRight } from 'lucide-react';
import { NEWS_ITEMS } from '../data/news';
import { OptimizedImage } from '../components/media/OptimizedImage';

const NEWS_CATEGORIES = [
  'All',
  'Academic',
  'Circular',
  'Admissions',
  'Press Release'
];

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews = selectedCategory === 'All'
    ? NEWS_ITEMS
    : NEWS_ITEMS.filter((n) => n.category === selectedCategory);

  const leadItem = filteredNews[0];
  const secondaryItems = filteredNews.slice(1);

  return (
    <div className="space-y-0">
      {/* 1. Header Banner */}
      <section className="bg-[#0a1120] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Official Gazettes, Circulars & Announcements
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Institutional News & Notices
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
              Official circulars, board examination distinction records, scholarship notifications, academic calendar releases, and institutional press statements.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Selector */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
            {NEWS_CATEGORIES.map((cat) => (
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

      {/* 3. 3-Tier News Layout (Lead Story + List) */}
      <section className="py-16 lg:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Lead Story (7 cols) */}
            {leadItem && (
              <div className="lg:col-span-7 bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="aspect-[16/9] overflow-hidden relative bg-slate-100">
                    <OptimizedImage
                      src={leadItem.imageUrl}
                      alt={leadItem.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 text-amber-300 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded">
                      Featured Circular · {leadItem.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="font-mono font-medium text-slate-700">{leadItem.formattedDate}</span>
                      <span>·</span>
                      <span>Issued by: {leadItem.author}</span>
                    </div>

                    <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900 leading-tight">
                      {leadItem.title}
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {leadItem.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:px-8 pt-0 pb-6 border-t border-slate-100 mt-2">
                  <Link
                    to={`/news/${leadItem.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-950 hover:text-amber-600 transition-colors pt-3"
                  >
                    <span>Read Full Circular Document</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            )}

            {/* Secondary Stories List (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="border-b border-slate-200 pb-2">
                <h3 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Recent Announcements & Press
                </h3>
              </div>

              <div className="space-y-3">
                {secondaryItems.map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.slug}`}
                    className="block bg-white p-5 rounded-lg border border-slate-200 hover:border-blue-950 transition-colors group space-y-2"
                  >
                    <div className="flex items-center justify-between text-[11px] text-slate-500">
                      <span className="font-semibold uppercase tracking-wider text-amber-800">{item.category}</span>
                      <span className="font-mono">{item.formattedDate}</span>
                    </div>

                    <h4 className="font-display font-bold text-sm text-slate-900 group-hover:text-blue-950 leading-snug transition-colors">
                      {item.title}
                    </h4>

                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.summary}
                    </p>

                    <div className="text-[11px] text-blue-950 font-semibold pt-1 flex items-center gap-1">
                      <span>View details</span>
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
