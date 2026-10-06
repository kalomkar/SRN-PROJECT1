import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight, Tag, Users, ChevronRight } from 'lucide-react';
import { EVENTS } from '../data/events';
import { OptimizedImage } from '../components/media/OptimizedImage';

const EVENT_CATEGORIES = [
  'All',
  'Academic',
  'Cultural',
  'Civic & Leadership',
  'Community Service',
  'Excursion'
];

export const EventsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = selectedCategory === 'All'
    ? EVENTS
    : EVENTS.filter((e) => e.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* 1. Header Banner */}
      <section className="bg-[#0a1120] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Campus Chronicles & Experiential Activity Calendar
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Institutional Events & Civic Initiatives
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
              From annual science and technology expos, youth mock parliaments, and entrepreneurship challenges to inter-collegiate athletics and community service drives in Kalaburagi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Selector */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
            {EVENT_CATEGORIES.map((cat) => (
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

      {/* 3. Editorial Events Grid */}
      <section className="py-16 lg:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between group hover:border-slate-400 transition-colors"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                    <OptimizedImage
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-black/80 text-amber-300 text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded">
                      {event.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-slate-500">
                      <span className="font-mono text-slate-700 font-medium">{event.formattedDate}</span>
                      <span>·</span>
                      <span className="truncate">{event.location}</span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-950 transition-colors line-clamp-2">
                      {event.title}
                    </h3>

                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {event.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                  <Link
                    to={`/events/${event.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-950 hover:text-amber-600 transition-colors pt-3"
                  >
                    <span>Read Event Report</span>
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
