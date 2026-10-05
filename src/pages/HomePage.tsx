import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Award, GraduationCap, Microscope, BookOpen, ShieldCheck, 
  Sparkles, CheckCircle2, ChevronRight, Phone, Calendar, Newspaper,
  Building2, Users, Compass, Eye, Trophy, Star
} from 'lucide-react';
import { INSTITUTION, KEY_METRICS } from '../data/institution';
import { ACADEMIC_WINGS } from '../data/academics';
import { FACILITIES } from '../data/facilities';
import { EVENTS } from '../data/events';
import { NEWS_ITEMS } from '../data/news';
import { OptimizedImage } from '../components/media/OptimizedImage';
import { VideoShowcase } from '../components/media/VideoShowcase';

interface HomePageProps {
  onOpenAdmissionModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAdmissionModal }) => {
  const [selectedWingTab, setSelectedWingTab] = useState(0);

  return (
    <div className="space-y-0">
      {/* 1. CINEMATIC HERO SECTION */}
      <section aria-label="Institutional Hero" className="relative min-h-[90vh] flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Background Image with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://srnmehtaschool.com/wp-content/uploads/2024/05/Master-image-school-2.jpeg"
            alt="SRN Mehta Institutional Campus Facade"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-black/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            {/* National Accreditation Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <Award className="w-4 h-4 text-amber-400" />
              <span>Ranked #1 in India for Community Services (CBSE)</span>
            </div>

            {/* Display Headline */}
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.15]">
              Teach Them, <br />
              <span className="text-amber-400 italic font-editorial">They Serve The Nation.</span>
            </h1>

            {/* Value Proposition Deck */}
            <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl">
              Established by <strong className="text-white">Shri S.R.J. Naval Trust</strong>, S.R.N. Mehta Institutions in Kalaburagi empowers students with national curriculum mastery, state-of-the-art STEM laboratories, sports excellence, and character-driven leadership from Pre-KG to Degree College.
            </p>

            {/* Call to Action Row */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAdmissionModal}
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-lg transition-all shadow-lg hover:shadow-amber-500/20 flex items-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4" />
                <span>Admissions Open 2026-27</span>
              </button>

              <Link
                to="/facilities"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all backdrop-blur-sm border border-white/20 flex items-center gap-2"
              >
                <span>Explore Campus & Labs</span>
                <ArrowRight className="w-4 h-4 text-slate-300" />
              </Link>
            </div>

            {/* Affiliation & Trust Strip */}
            <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>CBSE Affiliation No: <strong>830349</strong></span>
              </div>
              <span className="text-slate-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-blue-400" />
                <span>Karnataka State Board</span>
              </div>
              <span className="text-slate-700 hidden sm:inline">·</span>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-amber-400" />
                <span>Integrated NEET / IIT-JEE / CA-CPT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VERIFIED TRUST & QUICK METRICS SECTION */}
      <section aria-label="Key Institutional Metrics" className="bg-slate-900 border-y border-slate-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {KEY_METRICS.map((metric) => (
              <div key={metric.id} className="border-l-2 border-amber-500/80 pl-4 py-1">
                <div className="font-display text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {metric.value}
                  <span className="text-amber-400">{metric.suffix}</span>
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1 uppercase tracking-wider">
                  {metric.label}
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. NATIONAL AWARDS & RECOGNITION STRIP */}
      <section aria-label="Accreditations and Accolades" className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <span className="text-xs uppercase tracking-widest text-blue-900 font-bold block mb-1">
                Institutional Accreditations
              </span>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                Recognized Nationally for Holistic Distinction
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full md:w-auto">
              {INSTITUTION.accreditations.slice(0, 3).map((acc, idx) => (
                <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-50 border border-amber-200 text-amber-700 flex items-center justify-center shrink-0">
                    <Trophy className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-xs text-slate-900 leading-tight">{acc.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{acc.authority} ({acc.year})</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC WINGS EXPLORER */}
      <section aria-label="Academic Wings" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-blue-900 font-bold block mb-2">
              Comprehensive Educational Pathways
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
              Four Specialized Academic Wings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
              From early childhood discovery to undergraduate university degrees, our structured streams ensure seamless intellectual and professional continuity.
            </p>
          </div>

          {/* Wing Selector Tabs (Functional Buttons) */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 p-1.5 bg-slate-100 rounded-xl max-w-2xl mx-auto">
            {ACADEMIC_WINGS.map((wing, idx) => (
              <button
                key={wing.id}
                onClick={() => setSelectedWingTab(idx)}
                className={`px-4 py-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedWingTab === idx
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                }`}
              >
                {wing.title.split(' ')[2] || wing.title.split(' ')[1]} Wing
              </button>
            ))}
          </div>

          {/* Active Wing Spotlight Card */}
          {ACADEMIC_WINGS[selectedWingTab] && (
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-2 text-xs text-blue-900 font-bold uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 text-amber-600" />
                    <span>{ACADEMIC_WINGS[selectedWingTab].gradeSpan}</span>
                    <span>·</span>
                    <span>{ACADEMIC_WINGS[selectedWingTab].affiliation}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    {ACADEMIC_WINGS[selectedWingTab].title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {ACADEMIC_WINGS[selectedWingTab].description}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-900 block">
                      Key Highlights:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {ACADEMIC_WINGS[selectedWingTab].highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex items-center gap-4">
                    <Link
                      to="/academics"
                      className="px-5 py-2.5 bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold rounded-lg transition-colors flex items-center gap-1.5"
                    >
                      <span>Explore Detailed Curriculum</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <button
                      onClick={onOpenAdmissionModal}
                      className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Inquire for this Wing
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-xl overflow-hidden shadow-md border border-slate-200 aspect-[4/3]">
                    <OptimizedImage
                      src={ACADEMIC_WINGS[selectedWingTab].imageUrl}
                      alt={ACADEMIC_WINGS[selectedWingTab].title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 5. INFRASTRUCTURE & LABORATORIES SHOWCASE */}
      <section aria-label="Campus Infrastructure" className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">
                World-Class Learning Arenas
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
                Modern Laboratories & Campus Infrastructure
              </h2>
            </div>
            <Link
              to="/facilities"
              className="text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1 shrink-0"
            >
              <span>View All 16+ Campus Facilities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.slice(0, 6).map((facility) => (
              <div
                key={facility.id}
                className="bg-slate-800/90 border border-slate-700/80 rounded-xl overflow-hidden group hover:border-slate-500 transition-all flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <OptimizedImage
                    src={facility.imageUrl}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-[10px] uppercase tracking-wider text-amber-300 font-semibold px-2.5 py-1 rounded">
                    {facility.category}
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <h3 className="font-display text-base font-bold text-white group-hover:text-amber-300 transition-colors">
                      {facility.title}
                    </h3>
                    <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                      {facility.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between text-xs">
                    <span className="text-slate-400">{facility.keySpecs[0]}</span>
                    <Link
                      to={`/facilities#${facility.id}`}
                      className="text-amber-400 hover:text-white font-medium flex items-center gap-0.5"
                    >
                      <span>Specs</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARENT TESTIMONIAL VIDEO SHOWCASE */}
      <VideoShowcase />

      {/* 7. FEATURED EVENTS & EXPERIENTIAL HIGHLIGHTS */}
      <section aria-label="Campus Events" className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs uppercase tracking-widest text-blue-900 font-bold block mb-2">
                Experiential Pedagogy
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                Recent Campus Events & Civic Initiatives
              </h2>
            </div>
            <Link
              to="/events"
              className="text-xs font-semibold uppercase tracking-wider text-blue-900 hover:text-blue-700 flex items-center gap-1 shrink-0"
            >
              <span>Explore All Events</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {EVENTS.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                <div className="aspect-[16/10] overflow-hidden relative">
                  <OptimizedImage
                    src={event.imageUrl}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-1 rounded">
                    {event.formattedDate}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-blue-900 font-bold mb-1">
                      {event.category}
                    </div>
                    <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-blue-900 transition-colors line-clamp-2">
                      {event.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-3 leading-relaxed">
                      {event.summary}
                    </p>
                  </div>

                  <Link
                    to={`/events/${event.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 hover:text-amber-600 transition-colors pt-2"
                  >
                    <span>Read Full Event Report</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. NEWS BULLETIN & 100% BOARD RESULTS NOTIFICATION */}
      <section aria-label="Official Announcements" className="py-16 bg-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Col: Lead News & 100% Distinction */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Trophy className="w-4 h-4 text-amber-600" />
                <span>Academic Board Distinction</span>
                <span>·</span>
                <span>{NEWS_ITEMS[0].formattedDate}</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                {NEWS_ITEMS[0].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {NEWS_ITEMS[0].summary}
              </p>

              <div className="aspect-[21/9] rounded-lg overflow-hidden border border-slate-200">
                <OptimizedImage
                  src={NEWS_ITEMS[0].imageUrl}
                  alt="Board Result Announcement"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  to={`/news/${NEWS_ITEMS[0].slug}`}
                  className="text-xs font-bold text-blue-900 hover:text-blue-700 flex items-center gap-1"
                >
                  <span>Read Official Circular</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-slate-400">Issued by: {NEWS_ITEMS[0].author}</span>
              </div>
            </div>

            {/* Right Col: Secondary Bulletins */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-display text-base font-bold text-slate-900 uppercase tracking-wider">
                  Latest Notices & Press
                </h4>
                <Link to="/news" className="text-xs font-semibold text-blue-900 hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {NEWS_ITEMS.slice(1, 4).map((item) => (
                  <Link
                    key={item.id}
                    to={`/news/${item.slug}`}
                    className="block bg-white p-4 rounded-xl border border-slate-200 hover:border-blue-900 hover:shadow-sm transition-all group"
                  >
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                      {item.category} · {item.formattedDate}
                    </div>
                    <div className="font-display font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-blue-900 line-clamp-2">
                      {item.title}
                    </div>
                  </Link>
                ))}
              </div>

              {/* Quick Callback Card */}
              <div className="bg-gradient-to-br from-blue-900 to-slate-900 text-white p-6 rounded-2xl space-y-3">
                <div className="font-display font-bold text-base text-amber-400">
                  Ready to Enroll for 2026-27?
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Connect directly with our senior educational counselors for seat availability, syllabus consultation, and scholarship evaluation.
                </p>
                <div className="pt-2">
                  <button
                    onClick={onOpenAdmissionModal}
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-lg uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Quick Admission Request
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
