import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2, Tag, ShieldCheck } from 'lucide-react';
import { NEWS_ITEMS } from '../data/news';
import { OptimizedImage } from '../components/media/OptimizedImage';

export const NewsDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const item = NEWS_ITEMS.find((n) => n.slug === slug);

  if (!item) {
    return <Navigate to="/news" replace />;
  }

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link
            to="/news"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Bulletins</span>
          </Link>

          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-slate-400 font-semibold">
            <span className="text-amber-400 font-bold">{item.category}</span>
            <span>·</span>
            <span>{item.formattedDate}</span>
          </div>

          <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight">
            {item.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-slate-300 pt-2">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-amber-400" />
              <span>Published: {item.formattedDate}</span>
            </div>
            <span>·</span>
            <div className="flex items-center gap-1.5">
              <User className="w-4 h-4 text-amber-400" />
              <span>Issued by: {item.author}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm p-6 sm:p-10 space-y-8">
            {/* Visual Attachment */}
            <div className="aspect-[16/9] rounded-xl overflow-hidden shadow border border-slate-200">
              <OptimizedImage
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Paragraphs */}
            <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed font-sans">
              {item.fullContent.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Official Footer Verification */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Verified Official Institutional Circular · S.R.N. Mehta Institutions</span>
              </div>
              <span className="font-mono text-[11px] text-slate-400">Kalaburagi</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
