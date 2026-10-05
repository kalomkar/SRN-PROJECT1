import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowRight, Tag, Users } from 'lucide-react';
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
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Campus Life & Activity Calendar
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Institutional Events & Celebrations
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              From annual science expos, youth mock parliaments, and entrepreneurship challenges to athletic meets and civic community outreach.
            </p>
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {EVENT_CATEGORIES.map((cat) => (
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

      {/* Events Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <OptimizedImage
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-amber-300 text-[10px] font-semibold uppercase px-2.5 py-1 rounded">
                      {event.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-medium">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-blue-900" />
                        <span>{event.formattedDate}</span>
                      </div>
                      <span>·</span>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-slate-400" />
                        <span className="truncate max-w-[120px]">{event.location}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                      {event.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {event.summary}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/events/${event.slug}`}
                    className="w-full py-2.5 bg-slate-100 group-hover:bg-blue-900 text-slate-800 group-hover:text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Event Dossier</span>
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
