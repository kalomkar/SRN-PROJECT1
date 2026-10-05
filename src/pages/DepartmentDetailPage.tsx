import React from 'react';
import { useParams, Link, Navigate, useLocation } from 'react-router-dom';
import { 
  Laptop, CheckCircle2, ArrowRight, BookOpen, GraduationCap, 
  Cpu, Award, Users, ChevronRight, ShieldCheck, Sparkles, Building2, Briefcase,
  MessageCircle, Phone, Globe, UserCheck
} from 'lucide-react';
import { DEPARTMENTS_DATA } from '../data/departments';
import { INSTITUTION } from '../data/institution';
import { OptimizedImage } from '../components/media/OptimizedImage';
import { DegreeCollegeHeaderBar } from '../components/layout/DegreeCollegeHeaderBar';

interface DepartmentDetailPageProps {
  onOpenAdmissionModal?: (defaultWing?: string) => void;
}

export const DepartmentDetailPage: React.FC<DepartmentDetailPageProps> = ({ onOpenAdmissionModal }) => {
  const { deptId } = useParams<{ deptId: string }>();
  const location = useLocation();

  // Extract from deptId param or direct pathname (/english, /bca, /commerce, etc.)
  const directSlug = location.pathname.replace(/^\//, '').split('/')[0];
  const effectiveId = deptId || directSlug;

  // Map aliases like 'bca' or 'bcom' or 'computer-applications'
  const normalizedId = effectiveId === 'bca' || effectiveId === 'computer-applications'
    ? 'computer-applications' 
    : effectiveId === 'bcom' || effectiveId === 'commerce'
      ? 'commerce' 
      : effectiveId;

  const department = DEPARTMENTS_DATA.find((d) => d.id === (normalizedId || 'computer-applications'));

  if (!department) {
    return <Navigate to="/academics/degree-college" replace />;
  }

  return (
    <div className="space-y-0 bg-white min-h-screen text-slate-800 font-sans relative">
      {/* 1. S.R.N. MEHTA DEGREE COLLEGE Header Bar matching the screenshot */}
      <DegreeCollegeHeaderBar onOpenAdmissionModal={onOpenAdmissionModal} />

      {/* 2. Top Hero Visual Banner with Soft Gradient & Wave */}
      <section className="bg-[#162d59] text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={department.heroImageUrl}
            alt={department.degreeName}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-25 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#162d59]/90 via-[#162d59]/75 to-[#162d59]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 text-center space-y-3">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex items-center justify-center gap-2 text-xs text-slate-300">
            <Link to="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/academics/degree-college" className="hover:text-amber-400 transition-colors">Degree College</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-amber-300 font-semibold">{department.name}</span>
          </nav>

          <h1 className="font-display text-2xl sm:text-4xl font-black tracking-tight text-white uppercase">
            {department.name}
          </h1>

          <p className="text-xs sm:text-sm text-slate-200 max-w-2xl mx-auto">
            {department.affiliation} · {department.badge}
          </p>
        </div>

        {/* Wavy bottom divider */}
        <div className="w-full overflow-hidden leading-none z-10 relative">
          <svg className="relative block w-full h-6 sm:h-10 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,121.31,200.75,108,241.86,100.18,282.88,80.12,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </section>

      {/* 3. MAIN CONTENT CONTAINER (MATCHING THE SCREENSHOT EXACTLY) */}
      <section id="content" className="py-8 sm:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Department Heading */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#162d59] tracking-tight">
              {department.name}
            </h2>
            <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
          </div>

          {/* 6 Editorial Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base text-slate-700 leading-relaxed font-sans text-justify sm:text-left">
            {department.overviewParagraphs.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed text-slate-700 font-normal">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Objectives of the Department Section */}
          <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-100">
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#162d59] tracking-tight">
                Objectives of the Department
              </h3>
              <div className="w-20 h-1 bg-amber-500 mx-auto mt-3 rounded-full" />
            </div>

            <ul className="space-y-4 max-w-4xl mx-auto text-sm sm:text-base text-slate-700">
              {department.objectives.map((objective, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-[#162d59] font-black text-lg leading-none mt-0.5">•</span>
                  <span className="leading-relaxed">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. FACULTY TABLE (MATCHING THE SCREENSHOT EXACTLY) */}
          {department.facultyList && department.facultyList.length > 0 && (
            <div className="mt-14 sm:mt-20 pt-10 border-t border-slate-100">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#162d59] tracking-tight">
                  Faculty
                </h3>
                <div className="w-16 h-1 bg-amber-500 mx-auto mt-2 rounded-full" />
              </div>

              <div className="max-w-4xl mx-auto overflow-hidden rounded-xl border border-slate-300 shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-300 text-slate-900 font-bold text-center">
                        <th className="py-3.5 px-4 border-r border-slate-300 w-16 sm:w-20">Sl. No</th>
                        <th className="py-3.5 px-6 border-r border-slate-300">Faculty Name</th>
                        <th className="py-3.5 px-6 border-r border-slate-300">Designation</th>
                        <th className="py-3.5 px-6">Qualification</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-300">
                      {department.facultyList.map((faculty) => (
                        <tr key={faculty.slNo} className="hover:bg-blue-50/50 transition-colors text-center text-slate-800">
                          <td className="py-3.5 px-4 border-r border-slate-300 font-medium text-slate-600">
                            {faculty.slNo}
                          </td>
                          <td className="py-3.5 px-6 border-r border-slate-300 font-bold text-slate-900">
                            {faculty.name}
                          </td>
                          <td className="py-3.5 px-6 border-r border-slate-300 font-medium text-slate-700">
                            {faculty.designation}
                          </td>
                          <td className="py-3.5 px-6 font-semibold text-blue-900">
                            {faculty.qualification}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Curriculum Structure & Labs */}
          <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
              <h4 className="font-display font-bold text-base text-[#162d59] flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span>Curriculum Matrix & Core Domains</span>
              </h4>
              <div className="space-y-3">
                {department.curriculumHighlights.map((cat, cIdx) => (
                  <div key={cIdx} className="space-y-1">
                    <strong className="text-xs text-slate-900 block">{cat.category}</strong>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.topics.map((top, tIdx) => (
                        <span key={tIdx} className="text-[11px] bg-white px-2 py-0.5 rounded border border-slate-200 text-slate-700">
                          {top}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <h4 className="font-display font-bold text-base text-[#162d59] flex items-center gap-2">
                  <Laptop className="w-4 h-4 text-blue-900" />
                  <span>Computing Laboratories & Infrastructure</span>
                </h4>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {department.labFacilities.map((lab, lIdx) => (
                    <li key={lIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{lab}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={() => onOpenAdmissionModal && onOpenAdmissionModal('Degree College')}
                  className="px-5 py-2.5 bg-[#162d59] hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-md flex items-center gap-2"
                >
                  <GraduationCap className="w-4 h-4 text-amber-400" />
                  <span>Apply for Admission 2026-27</span>
                </button>

                <a
                  href={`tel:${INSTITUTION.contact.phone.replace(/\s+/g, '')}`}
                  className="text-xs text-blue-900 font-semibold hover:underline"
                >
                  Call: {INSTITUTION.contact.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Department Switcher */}
          <div className="mt-14 pt-8 border-t border-slate-200">
            <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block text-center mb-4">
              Explore Other Degree Departments
            </span>
            <div className="flex flex-wrap justify-center gap-2">
              {DEPARTMENTS_DATA.map((d) => (
                <Link
                  key={d.id}
                  to={`/departments/${d.id}`}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    d.id === department.id
                      ? 'bg-[#162d59] text-white shadow-md'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {d.shortName}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. FLOATING SOCIAL SIDEBAR (MATCHING THE SCREENSHOT) */}
      <div className="fixed right-3 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2.5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="w-9 h-9 rounded-full bg-[#1877F2] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <span className="font-bold text-sm">f</span>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <span className="font-bold text-xs">📷</span>
        </a>
        <a
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="w-9 h-9 rounded-full bg-[#FF0000] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        >
          <span className="font-bold text-xs">▶</span>
        </a>
      </div>

      {/* 6. FLOATING "CHAT WITH US" BADGE (MATCHING THE SCREENSHOT) */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
        <button
          onClick={() => onOpenAdmissionModal && onOpenAdmissionModal('Degree College')}
          className="px-4 py-2.5 bg-white text-[#162d59] rounded-full shadow-2xl border border-slate-200 font-bold text-xs flex items-center gap-2 hover:bg-slate-50 transition-all cursor-pointer group"
        >
          <span>Chat with us</span>
          <span className="text-amber-500">👋</span>
        </button>
        <button
          onClick={() => onOpenAdmissionModal && onOpenAdmissionModal('Degree College')}
          aria-label="Open Admissions Chat"
          className="w-12 h-12 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-2xl hover:scale-105 transition-transform cursor-pointer"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};
