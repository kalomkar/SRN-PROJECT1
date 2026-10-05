import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Calendar, User, ArrowRight, Trophy, Tag } from 'lucide-react';
import { NEWS_ITEMS } from '../data/news';
import { OptimizedImage } from '../components/media/OptimizedImage';

const NEWS_CATEGORIES = [
  'All',
  'Board Results',
  'Accolades',
  'Admissions',
  'Careers'
];

export const NewsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredNews = selectedCategory === 'All'
    ? NEWS_ITEMS
    : NEWS_ITEMS.filter((n) => n.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Official Bulletins & Press
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Institutional News & Circulars
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Class 10 CBSE & SSLC 100% board examination distinctions, national recognition awards, admission circulars, and academic notifications.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {NEWS_CATEGORIES.map((cat) => (
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

      {/* News Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <OptimizedImage
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-amber-300 text-[10px] font-semibold uppercase px-2.5 py-1 rounded">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-blue-900" />
                      <span>{item.formattedDate}</span>
                      <span>·</span>
                      <span>{item.author}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/news/${item.slug}`}
                    className="w-full py-2.5 bg-slate-100 group-hover:bg-blue-900 text-slate-800 group-hover:text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>Read Complete Announcement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
