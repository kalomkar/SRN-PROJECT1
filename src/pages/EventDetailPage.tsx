import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, MapPin, Clock, ArrowLeft, CheckCircle2, Share2, Tag } from 'lucide-react';
import { EVENTS } from '../data/events';
import { OptimizedImage } from '../components/media/OptimizedImage';

export const EventDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const event = EVENTS.find((e) => e.slug === slug);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/events"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Events</span>
          </Link>

          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 font-semibold">
            <span className="text-amber-400 font-bold">{event.category}</span>
            <span>·</span>
            <span>{event.formattedDate}</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {event.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>{event.formattedDate}</span>
            </div>
            {event.time && (
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span>{event.time}</span>
              </div>
            )}
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>{event.location}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm p-6 sm:p-10 space-y-8">
            {/* Primary Featured Visual */}
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow border border-slate-200">
              <OptimizedImage
                src={event.imageUrl}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Narrative Prose */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
              <h2 className="font-display text-xl font-bold text-slate-900">
                Event Overview & Context
              </h2>
              <p>{event.fullDescription}</p>
            </div>

            {/* Outcomes & Accreditations */}
            {event.outcomes && event.outcomes.length > 0 && (
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <h3 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Key Outcomes & Educational Impact
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {event.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Visuals */}
            {event.galleryImages && event.galleryImages.length > 0 && (
              <div className="space-y-3 pt-4 border-t border-slate-200">
                <h3 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Event Photo Archive
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {event.galleryImages.map((img, idx) => (
                    <div key={idx} className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200">
                      <OptimizedImage
                        src={img}
                        alt={`${event.title} archive photo ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};
