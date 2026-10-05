import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, GraduationCap, Building2, BookOpen, Users, 
  Award, Sparkles, CheckCircle2, ShieldCheck, Phone, X, Menu,
  Laptop, Calculator, Languages, FileText
} from 'lucide-react';
import { DEPARTMENTS_DATA } from '../../data/departments';

interface DegreeCollegeHeaderBarProps {
  onOpenAdmissionModal?: (wing?: string) => void;
  activeSection?: string;
}

export const DegreeCollegeHeaderBar: React.FC<DegreeCollegeHeaderBarProps> = ({ 
  onOpenAdmissionModal,
  activeSection
}) => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="w-full bg-[#162d59] text-white shadow-lg border-b border-blue-900/50 sticky top-[69px] z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 sm:py-3 gap-4">
            {/* 1. Official White Badge Lockup matching the screenshot */}
            <Link 
              to="/academics/degree-college"
              className="bg-white rounded-lg px-3.5 py-1.5 sm:px-4 sm:py-2 shadow-sm flex flex-col items-start hover:opacity-95 transition-opacity shrink-0"
              aria-label="S.R.N. Mehta Degree College"
            >
              <span className="font-display font-black text-sm sm:text-base tracking-tight text-[#162d59] leading-tight">
                S.R.N. MEHTA
              </span>
              <span className="text-[10px] sm:text-xs font-bold tracking-wider text-emerald-700 uppercase leading-none mt-0.5">
                DEGREE COLLEGE
              </span>
            </Link>

            {/* 2. Desktop Navigation Menu matching the screenshot */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs font-semibold" aria-label="Degree College Navigation">
              {/* Home */}
              <Link 
                to="/academics/degree-college" 
                className="text-white hover:text-amber-400 transition-colors py-1 whitespace-nowrap"
              >
                Home
              </Link>

              {/* About Us Dropdown */}
              <div 
                className="relative group py-1"
                onMouseEnter={() => setOpenDropdown('about')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 text-white hover:text-amber-400 transition-colors cursor-pointer"
                  onClick={() => setActiveModal('about')}
                >
                  <span>About Us</span>
                  <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white text-slate-900 rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                    <button 
                      onClick={() => setActiveModal('about')}
                      className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-xs font-medium text-slate-800 hover:text-blue-900 transition-colors"
                    >
                      Institutional Vision & Mission
                    </button>
                    <button 
                      onClick={() => setActiveModal('about')}
                      className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-xs font-medium text-slate-800 hover:text-blue-900 transition-colors"
                    >
                      Principal's Message & Leadership
                    </button>
                    <button 
                      onClick={() => setActiveModal('about')}
                      className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-xs font-medium text-slate-800 hover:text-blue-900 transition-colors"
                    >
                      University Affiliation (Gulbarga Univ)
                    </button>
                  </div>
                </div>
              </div>

              {/* Departments Dropdown (6 Departments: Commerce, Mathematics, English, Kannada, Hindi, Computer Applications) */}
              <div 
                className="relative group py-1"
                onMouseEnter={() => setOpenDropdown('departments')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button className="flex items-center gap-1 text-white hover:text-amber-400 transition-colors cursor-pointer">
                  <span>Departments</span>
                  <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 w-80 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white text-slate-900 rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                    {DEPARTMENTS_DATA.map((dept) => (
                      <Link
                        key={dept.id}
                        to={`/departments/${dept.id}`}
                        className="block p-2 rounded-lg hover:bg-blue-50 transition-colors group/item"
                      >
                        <div className="text-xs font-bold text-slate-900 group-hover/item:text-blue-900 flex items-center justify-between">
                          <span>{dept.name}</span>
                          <span className="text-[10px] text-amber-600 font-mono font-semibold">{dept.shortName}</span>
                        </div>
                        <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">
                          {dept.overviewParagraphs[0]}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Admissions Dropdown */}
              <div 
                className="relative group py-1"
                onMouseEnter={() => setOpenDropdown('admissions')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 text-white hover:text-amber-400 transition-colors cursor-pointer"
                  onClick={() => onOpenAdmissionModal && onOpenAdmissionModal('Degree College')}
                >
                  <span>Admissions</span>
                  <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white text-slate-900 rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                    <button
                      onClick={() => onOpenAdmissionModal && onOpenAdmissionModal('Degree College')}
                      className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-xs font-bold text-blue-900"
                    >
                      Apply for Degree 2026-27
                    </button>
                    <button
                      onClick={() => setActiveModal('admissions-criteria')}
                      className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-xs font-medium text-slate-700"
                    >
                      Eligibility & Document Checklist
                    </button>
                    <button
                      onClick={() => setActiveModal('scholarships')}
                      className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-xs font-medium text-slate-700"
                    >
                      Merit Scholarships & Concessions
                    </button>
                  </div>
                </div>
              </div>

              {/* Facilities */}
              <Link 
                to="/facilities" 
                className="text-white hover:text-amber-400 transition-colors py-1 whitespace-nowrap"
              >
                Facilities
              </Link>

              {/* Students Welfare Dropdown */}
              <div 
                className="relative group py-1"
                onMouseEnter={() => setOpenDropdown('welfare')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 text-white hover:text-amber-400 transition-colors cursor-pointer"
                  onClick={() => setActiveModal('welfare')}
                >
                  <span>Students Welfare</span>
                  <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white text-slate-900 rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                    <button
                      onClick={() => setActiveModal('placement')}
                      className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-xs font-medium text-slate-800"
                    >
                      Training & Placement Cell
                    </button>
                    <button
                      onClick={() => setActiveModal('scholarships')}
                      className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-xs font-medium text-slate-800"
                    >
                      Government & Trust Scholarships
                    </button>
                    <button
                      onClick={() => setActiveModal('anti-ragging')}
                      className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-xs font-medium text-slate-800"
                    >
                      Anti-Ragging & Grievance Cell
                    </button>
                  </div>
                </div>
              </div>

              {/* IQAC/NAAC */}
              <button
                onClick={() => setActiveModal('iqac')}
                className="text-white hover:text-amber-400 transition-colors py-1 whitespace-nowrap cursor-pointer"
              >
                IQAC/NAAC
              </button>

              {/* Activities Dropdown */}
              <div 
                className="relative group py-1"
                onMouseEnter={() => setOpenDropdown('activities')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button 
                  className="flex items-center gap-1 text-white hover:text-amber-400 transition-colors cursor-pointer"
                  onClick={() => setActiveModal('activities')}
                >
                  <span>Activities</span>
                  <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                </button>
                <div className="absolute top-full right-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="bg-white text-slate-900 rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                    <Link
                      to="/events"
                      className="block p-2 rounded-lg hover:bg-blue-50 text-xs font-medium text-slate-800"
                    >
                      College Annual Events & Fests
                    </Link>
                    <button
                      onClick={() => setActiveModal('industrial-visits')}
                      className="w-full text-left p-2 rounded-lg hover:bg-blue-50 text-xs font-medium text-slate-800"
                    >
                      Industrial Visits & Bank Internships
                    </button>
                    <Link
                      to="/gallery"
                      className="block p-2 rounded-lg hover:bg-blue-50 text-xs font-medium text-slate-800"
                    >
                      Degree Photo Archive
                    </Link>
                  </div>
                </div>
              </div>
            </nav>

            {/* Mobile Hamburger toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => onOpenAdmissionModal && onOpenAdmissionModal('Degree College')}
                className="px-3 py-1 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-[11px] rounded-lg"
              >
                Apply
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg bg-white/10 text-white"
                aria-label="Toggle Degree Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0e1e3d] border-t border-blue-900/80 px-4 py-4 space-y-3 text-xs">
            <div className="text-[10px] uppercase font-bold text-amber-400 tracking-wider">
              Degree College Departments
            </div>
            <div className="grid grid-cols-2 gap-2">
              {DEPARTMENTS_DATA.map((dept) => (
                <Link
                  key={dept.id}
                  to={`/departments/${dept.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 bg-white/10 rounded-lg text-white font-medium text-[11px] hover:bg-white/20 transition-colors"
                >
                  {dept.shortName}
                </Link>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveModal('about');
                }}
                className="px-3 py-1.5 bg-white/5 rounded text-slate-200"
              >
                About Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveModal('placement');
                }}
                className="px-3 py-1.5 bg-white/5 rounded text-slate-200"
              >
                Placement Cell
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveModal('iqac');
                }}
                className="px-3 py-1.5 bg-white/5 rounded text-slate-200"
              >
                IQAC/NAAC
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveModal('activities');
                }}
                className="px-3 py-1.5 bg-white/5 rounded text-slate-200"
              >
                Activities
              </button>
              <Link
                to="/facilities"
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-1.5 bg-white/5 rounded text-slate-200"
              >
                Facilities
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Interactive Modal Details for IQAC, Welfare, About, etc. */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
            {/* Modal Header */}
            <div className="bg-[#162d59] text-white px-6 py-4 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-2">
                <div className="bg-white rounded px-2 py-0.5 text-[#162d59] font-bold text-xs">
                  S.R.N. MEHTA
                </div>
                <h3 className="font-display font-bold text-base text-white">
                  {activeModal === 'about' && 'About S.R.N. Mehta Degree College'}
                  {activeModal === 'iqac' && 'Internal Quality Assurance Cell (IQAC / NAAC)'}
                  {activeModal === 'placement' && 'Training, Placement & Career Cell'}
                  {activeModal === 'welfare' && 'Students Welfare & Mentorship Cell'}
                  {activeModal === 'scholarships' && 'Scholarships & Financial Aid'}
                  {activeModal === 'anti-ragging' && 'Anti-Ragging & Student Grievance Redressal'}
                  {activeModal === 'activities' && 'Degree College Activities & Industrial Visits'}
                  {activeModal === 'industrial-visits' && 'Industrial Visits & Banking Internships'}
                  {activeModal === 'admissions-criteria' && 'Degree College Admission Eligibility & Process'}
                </h3>
              </div>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 overflow-y-auto space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
              {activeModal === 'about' && (
                <div className="space-y-4">
                  <p>
                    <strong>S.R.N. Mehta Degree College</strong> is a premier undergraduate institution in Kalaburagi, affiliated with <strong>Gulbarga University</strong>. We offer specialized Bachelor of Computer Applications (BCA) and Bachelor of Commerce (B.Com) programs aligned with the National Education Policy (NEP 2020), supported by strong departments in Commerce, Mathematics, English, Kannada, Hindi, and Computer Applications.
                  </p>
                  <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <h5 className="font-bold text-slate-900">Institutional Objectives:</h5>
                    <ul className="space-y-1.5 text-xs text-slate-600 list-disc pl-4">
                      <li>Deliver industry-ready technical education in computer science, software engineering, and artificial intelligence.</li>
                      <li>Foster professional competence in corporate accounting, taxation, banking operations, and financial analysis.</li>
                      <li>Nurture communicative excellence in English, Hindi, and Kannada, alongside quantitative rigor in Mathematics.</li>
                      <li>Provide real-world internship opportunities, soft-skill workshops, and campus placement training.</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'iqac' && (
                <div className="space-y-4">
                  <p>
                    The <strong>Internal Quality Assurance Cell (IQAC)</strong> at S.R.N. Mehta Degree College works continuously to sustain academic standards, curriculum enhancement, faculty development, and transparent evaluation practices in accordance with NAAC quality parameters.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                      <strong className="text-blue-900 block text-xs">Curriculum Modernization</strong>
                      <span className="text-[11px] text-slate-600">Continuous integration of value-added computing, language labs, and fintech modules.</span>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                      <strong className="text-blue-900 block text-xs">Faculty Development</strong>
                      <span className="text-[11px] text-slate-600">Research seminars, publication support, and pedagogical workshops.</span>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                      <strong className="text-blue-900 block text-xs">Feedback Mechanisms</strong>
                      <span className="text-[11px] text-slate-600">Structured student, alumni, and employer feedback cycles.</span>
                    </div>
                    <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg">
                      <strong className="text-blue-900 block text-xs">Quality Benchmarking</strong>
                      <span className="text-[11px] text-slate-600">Systematic documentation and institutional quality audits.</span>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'placement' && (
                <div className="space-y-4">
                  <p>
                    Our dedicated <strong>Placement and Career Guidance Cell</strong> bridges classroom learning with industry hiring. We conduct technical training, mock interviews, aptitude drills, resume workshops, and campus placement drives.
                  </p>
                  <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl space-y-2">
                    <strong className="text-emerald-900 text-xs uppercase tracking-wider block">Career Pathways for BCA & B.Com:</strong>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Software Engineer / Web Developer</li>
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Data Analyst / Cloud Associate</li>
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Corporate Accountant / Tax Consultant</li>
                      <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Banking & Insurance Officer</li>
                    </ul>
                  </div>
                </div>
              )}

              {activeModal === 'activities' && (
                <div className="space-y-4">
                  <p>
                    College life at S.R.N. Mehta Degree College extends beyond textbooks through technical hackathons, cultural festivals, guest lectures by industry leaders, commerce exhibitions, and community outreach.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      <strong className="text-slate-900 block text-xs">Coding Hackathons & IT Fests</strong>
                      <span className="text-[11px] text-slate-600">Speed programming, web design challenges, and tech quizzes.</span>
                    </div>
                    <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                      <strong className="text-slate-900 block text-xs">Commerce Shark Tank & Biz-Quiz</strong>
                      <span className="text-[11px] text-slate-600">Business plan competitions, case analysis, and financial quizzes.</span>
                    </div>
                  </div>
                </div>
              )}

              {activeModal === 'scholarships' && (
                <div className="space-y-4">
                  <p>
                    S.R.N. Mehta Degree College supports meritorious and economically deserving candidates through government scholarship facilitation (SSP, Post-Matric) and Trust-sponsored merit fee waivers.
                  </p>
                </div>
              )}

              {activeModal === 'anti-ragging' && (
                <div className="space-y-4">
                  <p>
                    Our campus maintains a strict <strong>Zero-Tolerance Policy</strong> against ragging in accordance with UGC guidelines. A dedicated faculty committee and student grievance cell ensure a safe, inclusive, and welcoming environment.
                  </p>
                </div>
              )}

              {activeModal === 'industrial-visits' && (
                <div className="space-y-4">
                  <p>
                    Mandatory industrial visits to IT software parks, manufacturing facilities, agricultural research centers, and commercial banks provide students with direct exposure to operational environments and modern corporate workflows.
                  </p>
                </div>
              )}

              {activeModal === 'admissions-criteria' && (
                <div className="space-y-4">
                  <h5 className="font-bold text-slate-900">Eligibility Criteria:</h5>
                  <div className="space-y-2 text-xs">
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <strong>BCA (Computer Applications):</strong> 10+2 / 2nd PUC in Science or Commerce (with Mathematics / Statistics / Computer Science preferred) or equivalent.
                    </div>
                    <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                      <strong>B.Com (Commerce):</strong> 10+2 / 2nd PUC in Commerce, Arts, or Science with qualifying marks.
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
              <span className="text-xs text-slate-500">Admissions Helpline: 9845012345</span>
              <button
                onClick={() => {
                  setActiveModal(null);
                  onOpenAdmissionModal && onOpenAdmissionModal('Degree College');
                }}
                className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-semibold text-xs rounded-lg uppercase tracking-wider"
              >
                Inquire for Admission
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
