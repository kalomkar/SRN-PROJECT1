import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Award, GraduationCap, Microscope, BookOpen, ShieldCheck, 
  CheckCircle2, ChevronRight, Phone, Calendar, Newspaper,
  Building2, Users, Compass, Eye, Trophy, Star
} from 'lucide-react';
import { INSTITUTION, KEY_METRICS } from '../data/institution';
import { ACADEMIC_WINGS } from '../data/academics';
import { FACILITIES } from '../data/facilities';
import { EVENTS } from '../data/events';
import { NEWS_ITEMS } from '../data/news';
import { OptimizedImage } from '../components/media/OptimizedImage';
import { VideoShowcase } from '../components/media/VideoShowcase';
import { MaskRevealText } from '../components/motion/MaskRevealText';
import { AnimatedCounter } from '../components/motion/AnimatedCounter';
import { ScrollReveal } from '../components/motion/ScrollReveal';

interface HomePageProps {
  onOpenAdmissionModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onOpenAdmissionModal }) => {
  const [selectedWingTab, setSelectedWingTab] = useState(0);

  return (
    <div className="space-y-0">
      {/* 1. CINEMATIC INSTITUTIONAL HERO SECTION (Level 3 Motion) */}
      <section aria-label="Institutional Hero" className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center bg-[#0a1120] text-white overflow-hidden">
        {/* Real Campus Photography Backdrop with Measured Contrast Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://srnmehtaschool.com/wp-content/uploads/2024/05/Master-image-school-2.jpeg"
            alt="SRN Mehta Institutional Campus Facade"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-102 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1120]/95 via-[#0a1120]/80 to-[#0a1120]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1120] via-transparent to-black/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Step 1: Eyebrow (0ms) */}
            <ScrollReveal direction="down" delay={0}>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Ranked #1 in India for Community Services (CBSE Category)</span>
              </div>
            </ScrollReveal>

            {/* Step 2: Masked Display Headline (120ms) */}
            <MaskRevealText delay={120} as="h1" className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12]">
              Teach Them, <br />
              <span className="text-amber-400 italic font-editorial font-medium">They Serve The Nation.</span>
            </MaskRevealText>

            {/* Step 3: Value Proposition Deck (260ms) */}
            <ScrollReveal direction="up" delay={260}>
              <p className="text-sm sm:text-base lg:text-lg text-slate-200 leading-relaxed font-sans max-w-2xl">
                Established by <strong className="text-white">Shri S.R.J. Naval Trust</strong>, S.R.N. Mehta Institutions in Kalaburagi nurtures academic distinction, state-of-the-art STEM laboratories, athletic discipline, and character-driven leadership from Pre-KG to Degree College.
              </p>
            </ScrollReveal>

            {/* Step 4: Call to Action Row (380ms) */}
            <ScrollReveal direction="up" delay={380}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenAdmissionModal}
                  className="px-6 py-3 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md transition-all shadow-sm flex items-center gap-2 cursor-pointer"
                >
                  <GraduationCap className="w-4 h-4" />
                  <span>Admissions Open 2026-27</span>
                </button>

                <Link
                  to="/facilities"
                  className="px-6 py-3 bg-white/10 hover:bg-white/15 active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-all backdrop-blur-xs border border-white/20 flex items-center gap-2"
                >
                  <span>Explore Campus & Labs</span>
                  <ArrowRight className="w-4 h-4 text-slate-300" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Step 5: Affiliation & Trust Strip (500ms) */}
            <ScrollReveal direction="none" delay={500}>
              <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-medium">CBSE Affiliation:</span>
                  <span className="font-mono text-slate-300">830349</span>
                </div>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-300">Karnataka State Board</span>
                </div>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-300">Integrated NEET / IIT-JEE / CA-CPT</span>
                </div>
                <span className="text-slate-700" aria-hidden="true">·</span>
                <div className="flex items-center gap-1.5">
                  <span className="text-slate-300">BCA & B.Com (Gulbarga Univ)</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. KEY QUANTITATIVE ANCHORS STRIP (Animated Counter) */}
      <section aria-label="Key Institutional Metrics" className="bg-[#0f172a] border-y border-slate-800 text-white py-9">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {KEY_METRICS.map((metric, idx) => (
              <ScrollReveal key={metric.id} delay={idx * 100} direction="up" className="border-l border-slate-700 pl-4 sm:pl-6 py-1">
                <div className="font-display text-2xl sm:text-4xl font-bold text-white tracking-tight">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1 uppercase tracking-wider">
                  {metric.label}
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5 hidden sm:block leading-normal">
                  {metric.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CURATORIAL EDITORIAL STATEMENT (Asymmetric 70/30 Split) */}
      <section aria-label="Institutional Foundation" className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 7 Columns: Editorial narrative */}
            <ScrollReveal direction="up" className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-blue-950 font-bold block">
                Foundational Heritage · Established 1991
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Three Decades of Educational Leadership in Kalyana Karnataka
              </h2>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed drop-cap">
                Administered by the venerable <strong>Shri S.R.J. Naval Trust</strong>, S.R.N. Mehta Institutions was founded with an unyielding conviction: that world-class academic infrastructure, high-caliber faculty, and patriotic values should be accessible to every student in Kalaburagi.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Today, our integrated campus encompasses comprehensive schooling under the Central Board of Secondary Education (CBSE), the Karnataka State Board, Pre-University courses with specialized competitive coaching, and undergraduate degree programs in Computer Applications (BCA) and Commerce (B.Com).
              </p>

              <div className="pt-3 flex items-center gap-6 text-xs font-semibold text-blue-950">
                <Link to="/about" className="flex items-center gap-1.5 hover:text-amber-600 transition-colors group">
                  <span>Read Institutional History</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <span className="text-slate-300" aria-hidden="true">|</span>
                <Link to="/faculty" className="flex items-center gap-1.5 hover:text-amber-600 transition-colors group">
                  <span>View Academic Faculty Roster</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </ScrollReveal>

            {/* Right 5 Columns: Verified Institutional Accreditations */}
            <ScrollReveal direction="up" delay={150} className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-lg p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-[11px] uppercase tracking-widest text-slate-500 font-bold block">
                  Official Affiliations
                </span>
                <h3 className="font-display text-base font-bold text-slate-900 mt-1">
                  Accrediting Authorities
                </h3>
              </div>

              <div className="space-y-4">
                {INSTITUTION.accreditations.slice(0, 3).map((acc, idx) => (
                  <div key={idx} className="flex items-start gap-3.5">
                    <div className="w-8 h-8 rounded bg-blue-950 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Trophy className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs text-slate-900">{acc.title}</h4>
                      <p className="text-[11px] text-slate-600 mt-0.5">{acc.authority}</p>
                      <span className="text-[10px] text-slate-400 font-mono">Conferred {acc.year}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2 border-t border-slate-200">
                <div className="text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Campus Area: <strong>4.5+ Acres</strong></span>
                  <span>Alumni: <strong>15,000+</strong></span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. ACADEMIC WINGS EXPLORER */}
      <section aria-label="Academic Wings" className="py-16 lg:py-24 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs uppercase tracking-widest text-blue-950 font-bold block mb-2">
              Integrated Academic Framework
            </span>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
              Four Specialized Educational Wings
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              Structured streams ensuring seamless intellectual, ethical, and professional continuity from kindergarten to university degrees.
            </p>
          </ScrollReveal>

          {/* Interactive Wing Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 mb-10 p-1 bg-slate-200/80 rounded-lg max-w-xl mx-auto">
            {ACADEMIC_WINGS.map((wing, idx) => (
              <button
                key={wing.id}
                onClick={() => setSelectedWingTab(idx)}
                className={`px-3.5 py-2 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                  selectedWingTab === idx
                    ? 'bg-white text-slate-950 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {wing.title.split(' ')[2] || wing.title.split(' ')[1]} Wing
              </button>
            ))}
          </div>

          {/* Active Wing Dossier */}
          {ACADEMIC_WINGS[selectedWingTab] && (
            <ScrollReveal direction="up" key={ACADEMIC_WINGS[selectedWingTab].id} className="bg-white border border-slate-200 rounded-lg p-6 sm:p-10 shadow-xs">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="text-xs text-blue-950 font-bold uppercase tracking-wider flex items-center gap-2">
                    <span>{ACADEMIC_WINGS[selectedWingTab].gradeSpan}</span>
                    <span className="text-slate-300">·</span>
                    <span>{ACADEMIC_WINGS[selectedWingTab].affiliation}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                    {ACADEMIC_WINGS[selectedWingTab].title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {ACADEMIC_WINGS[selectedWingTab].description}
                  </p>

                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <span className="text-xs uppercase tracking-wider font-bold text-slate-900 block">
                      Curricular Hallmarks:
                    </span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {ACADEMIC_WINGS[selectedWingTab].highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-950 font-bold mt-0.5">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-3">
                    <Link
                      to="/academics"
                      className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 active:scale-[0.98] text-white text-xs font-semibold rounded-md transition-all flex items-center gap-1.5"
                    >
                      <span>Explore Detailed Curriculum</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                    <button
                      onClick={onOpenAdmissionModal}
                      className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 text-xs font-bold rounded-md transition-all cursor-pointer"
                    >
                      Inquire for this Wing
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                    <OptimizedImage
                      src={ACADEMIC_WINGS[selectedWingTab].imageUrl}
                      alt={ACADEMIC_WINGS[selectedWingTab].title}
                      className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* 5. INFRASTRUCTURE & LABORATORIES SHOWCASE */}
      <section aria-label="Campus Infrastructure" className="py-16 lg:py-24 bg-[#0a1120] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">
                Laboratories & Arenas
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-white">
                World-Class Scientific & Computing Infrastructure
              </h2>
            </div>
            <Link
              to="/facilities"
              className="text-xs font-semibold uppercase tracking-wider text-amber-400 hover:text-amber-300 flex items-center gap-1 shrink-0 group"
            >
              <span>View All 16+ Facilities</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.slice(0, 6).map((facility, fIdx) => (
              <ScrollReveal
                key={facility.id}
                delay={fIdx * 80}
                direction="up"
                className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden group hover:border-slate-700 transition-colors flex flex-col"
              >
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-950">
                  <OptimizedImage
                    src={facility.imageUrl}
                    alt={facility.title}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-black/80 text-[10px] uppercase tracking-wider text-amber-300 font-semibold px-2 py-0.5 rounded">
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

                  <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-slate-400 text-[11px]">{facility.keySpecs[0]}</span>
                    <Link
                      to={`/facilities#${facility.id}`}
                      className="text-amber-400 hover:text-white font-medium flex items-center gap-0.5 text-xs"
                    >
                      <span>Specifications</span>
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PARENT TESTIMONIAL VIDEO SHOWCASE */}
      <VideoShowcase />

      {/* 7. EXPERIENTIAL CAMPUS EVENTS */}
      <section aria-label="Campus Events" className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-100 pb-6">
            <div>
              <span className="text-xs uppercase tracking-widest text-blue-950 font-bold block mb-2">
                Experiential Pedagogy
              </span>
              <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                Recent Campus Chronicles & Civic Exposure
              </h2>
            </div>
            <Link
              to="/events"
              className="text-xs font-semibold uppercase tracking-wider text-blue-950 hover:text-blue-800 flex items-center gap-1 shrink-0 group"
            >
              <span>Explore All Events</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Lead Story (7 cols) */}
            {EVENTS[0] && (
              <ScrollReveal direction="up" className="lg:col-span-7 bg-slate-50 border border-slate-200 rounded-lg overflow-hidden group">
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                  <OptimizedImage
                    src={EVENTS[0].imageUrl}
                    alt={EVENTS[0].title}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/80 text-white text-[11px] font-mono px-2.5 py-1 rounded">
                    {EVENTS[0].formattedDate}
                  </div>
                </div>
                <div className="p-6 sm:p-8 space-y-3">
                  <div className="text-xs uppercase tracking-wider text-blue-950 font-bold">
                    Featured Event · {EVENTS[0].category}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-950 transition-colors">
                    {EVENTS[0].title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {EVENTS[0].summary}
                  </p>
                  <div className="pt-2">
                    <Link
                      to={`/events/${EVENTS[0].slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-950 hover:text-amber-600 transition-colors group/link"
                    >
                      <span>Read Complete Event Report</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            )}

            {/* Secondary Stories (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {EVENTS.slice(1, 3).map((event, idx) => (
                <ScrollReveal
                  key={event.id}
                  delay={idx * 120}
                  direction="up"
                  className="bg-white border border-slate-200 rounded-lg p-5 sm:p-6 space-y-3 hover:border-slate-400 transition-colors group"
                >
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                    <span>{event.category}</span>
                    <span className="font-mono">{event.formattedDate}</span>
                  </div>
                  <h4 className="font-display text-base font-bold text-slate-900 group-hover:text-blue-950 transition-colors">
                    {event.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {event.summary}
                  </p>
                  <Link
                    to={`/events/${event.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-950 hover:text-amber-600 transition-colors pt-1 group/btn"
                  >
                    <span>Read Details</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </Link>
                </ScrollReveal>
              ))}

              {/* Inquiry Highlight Box */}
              <ScrollReveal direction="up" delay={250} className="bg-[#0f172a] text-white p-6 rounded-lg space-y-3">
                <div className="font-display font-bold text-sm text-amber-400 uppercase tracking-wider">
                  Guided Campus Visits
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Parents and prospective students are welcome to tour our laboratories, smart classrooms, and sports facilities with our academic coordinators.
                </p>
                <div className="pt-1">
                  <button
                    onClick={onOpenAdmissionModal}
                    className="w-full py-2 bg-amber-500 hover:bg-amber-400 active:scale-[0.98] text-slate-950 text-xs font-bold rounded-md uppercase tracking-wider transition-all cursor-pointer"
                  >
                    Schedule an Academic Visit
                  </button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 8. NEWS BULLETIN & ACADEMIC BOARD RESULTS */}
      <section aria-label="Official Announcements" className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left 7 Cols: Lead Circular */}
            <ScrollReveal direction="up" className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-lg border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                <Trophy className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Academic Board Distinction</span>
                <span className="text-slate-400">·</span>
                <span className="font-mono text-slate-500">{NEWS_ITEMS[0].formattedDate}</span>
              </div>

              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                {NEWS_ITEMS[0].title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {NEWS_ITEMS[0].summary}
              </p>

              <div className="aspect-[21/9] rounded overflow-hidden border border-slate-200 bg-slate-100">
                <OptimizedImage
                  src={NEWS_ITEMS[0].imageUrl}
                  alt="Board Result Announcement"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-slate-100 text-xs">
                <Link
                  to={`/news/${NEWS_ITEMS[0].slug}`}
                  className="font-bold text-blue-950 hover:text-amber-600 flex items-center gap-1 group"
                >
                  <span>Read Official Circular</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <span className="text-[11px] text-slate-400">Issued by: {NEWS_ITEMS[0].author}</span>
              </div>
            </ScrollReveal>

            {/* Right 5 Cols: Compact Circulars */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <h4 className="font-display text-sm font-bold text-slate-900 uppercase tracking-wider">
                  Official Notices & Press
                </h4>
                <Link to="/news" className="text-xs font-semibold text-blue-950 hover:underline">
                  View All
                </Link>
              </div>

              <div className="space-y-3">
                {NEWS_ITEMS.slice(1, 4).map((item, idx) => (
                  <ScrollReveal
                    key={item.id}
                    delay={idx * 90}
                    direction="up"
                    className="block bg-white p-4 rounded-md border border-slate-200 hover:border-blue-950 transition-colors group"
                  >
                    <Link to={`/news/${item.slug}`}>
                      <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 mb-1">
                        {item.category} · <span className="font-mono">{item.formattedDate}</span>
                      </div>
                      <div className="font-display font-semibold text-xs sm:text-sm text-slate-900 group-hover:text-blue-950 line-clamp-2">
                        {item.title}
                      </div>
                    </Link>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
