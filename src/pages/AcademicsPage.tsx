import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  GraduationCap, BookOpen, CheckCircle2, Award, Laptop, Clock, 
  ArrowRight, ShieldCheck, Star, Users, BrainCircuit, ChevronRight,
  Briefcase, Cpu, Microscope, School, Sparkles, Building2, Trophy, HelpCircle,
  Calculator, Languages, FileText
} from 'lucide-react';
import { ACADEMIC_WINGS } from '../data/academics';
import { DEPARTMENTS_DATA, DepartmentInfo } from '../data/departments';
import { INSTITUTION } from '../data/institution';
import { OptimizedImage } from '../components/media/OptimizedImage';
import { DegreeCollegeHeaderBar } from '../components/layout/DegreeCollegeHeaderBar';

interface AcademicsPageProps {
  onOpenAdmissionModal: (wing?: string) => void;
}

// 4 Exact Academic Tabs Matching Institutional Structure
export type AcademicTabKey = 'cbse' | 'state-board' | 'pu-college' | 'degree-college';

interface TabDefinition {
  key: AcademicTabKey;
  label: string;
  badge: string;
  wingId: string;
}

const TABS: TabDefinition[] = [
  { key: 'cbse', label: 'CBSE', badge: 'Pre-KG to Class X · Affil: 830349', wingId: 'cbse-wing' },
  { key: 'state-board', label: 'STATE BOARD', badge: 'Grade 1 to 10 (SSLC) · KSEAB', wingId: 'state-wing' },
  { key: 'pu-college', label: 'PU COLLEGE', badge: 'NEET · IIT-JEE · KCET · CA-CPT', wingId: 'pu-college' },
  { key: 'degree-college', label: 'DEGREE COLLEGE', badge: 'BCA & B.Com · Gulbarga Univ', wingId: 'degree-college' }
];

export const AcademicsPage: React.FC<AcademicsPageProps> = ({ onOpenAdmissionModal }) => {
  const { wingId } = useParams<{ wingId?: string }>();
  const navigate = useNavigate();
  const location = useLocation();

  // Determine active tab from URL param or default to 'cbse'
  const getInitialTab = (): AcademicTabKey => {
    if (wingId) {
      if (wingId === 'cbse' || wingId === 'cbse-wing') return 'cbse';
      if (wingId === 'state-board' || wingId === 'state-wing') return 'state-board';
      if (wingId === 'pu-college') return 'pu-college';
      if (wingId === 'degree-college') return 'degree-college';
    }
    const searchParams = new URLSearchParams(location.search);
    const tabParam = searchParams.get('tab') as AcademicTabKey;
    if (tabParam && ['cbse', 'state-board', 'pu-college', 'degree-college'].includes(tabParam)) {
      return tabParam;
    }
    return 'cbse';
  };

  const [activeTab, setActiveTab] = useState<AcademicTabKey>(getInitialTab);
  const [activeDeptTab, setActiveDeptTab] = useState<string>("computer-applications");

  // Sync tab state when URL changes
  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [wingId, location.search]);

  const handleTabChange = (tab: AcademicTabKey) => {
    setActiveTab(tab);
    navigate(`/academics/${tab}`, { replace: true });
  };

  // Find active wing data
  const currentTabDef = TABS.find((t) => t.key === activeTab) || TABS[0];
  const currentWing = ACADEMIC_WINGS.find((w) => w.id === currentTabDef.wingId) || ACADEMIC_WINGS[0];
  const activeDept = DEPARTMENTS_DATA.find((d) => d.id === activeDeptTab) || DEPARTMENTS_DATA[0];

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      {/* 1. ACADEMICS HEADER BANNER */}
      <section className="bg-slate-950 text-white relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-900/60 border border-blue-700/50 text-amber-400 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <School className="w-4 h-4" />
              <span>S.R.N. Mehta Institutions · Academic Ecosystem</span>
            </div>
            
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Academic Curricula & Wings
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-2xl">
              From early childhood foundation to national competitive entrance examinations (NEET/IIT-JEE) and university undergraduate degrees (BCA & B.Com). Select an academic wing below to view full details.
            </p>
          </div>
        </div>

        {/* 2. THE 4 ACADEMIC TABS BAR (Matching User UI Exactly) */}
        <div className="bg-slate-900/90 border-t border-slate-800/80 backdrop-blur-md sticky top-[69px] z-30 shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2.5">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
                    className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-md scale-[1.02]'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
                    }`}
                  >
                    <GraduationCap className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-amber-400'}`} />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* When in Degree College Tab: Render the Dedicated S.R.N. MEHTA DEGREE COLLEGE Header Bar matching the screenshot */}
      {activeTab === 'degree-college' && (
        <DegreeCollegeHeaderBar onOpenAdmissionModal={onOpenAdmissionModal} />
      )}

      {/* 3. ACTIVE TAB CONTENT DOSSIER */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TAB 1: CBSE SCHOOL */}
          {activeTab === 'cbse' && (
            <div className="space-y-12">
              {/* Lead Card */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                      <span className="bg-blue-50 text-blue-900 px-3 py-1 rounded-md border border-blue-200">
                        CBSE Affiliation No. 830349
                      </span>
                      <span>·</span>
                      <span className="text-slate-600">School Code: 45308</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                      S.R.N. Mehta CBSE Public School
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Affiliated with the Central Board of Secondary Education (CBSE), New Delhi, our CBSE wing empowers learners from Pre-KG to Class 10 with NEP 2020 inquiry-based learning, NCERT curriculum, hands-on scientific experimentation, English communicative fluency, smart classroom technology, and character-building values.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <button
                        onClick={() => onOpenAdmissionModal('CBSE School')}
                        className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-md flex items-center gap-2"
                      >
                        <GraduationCap className="w-4 h-4 text-amber-400" />
                        <span>Admissions 2026-27 (Pre-KG to Class 10)</span>
                      </button>

                      <Link
                        to="/facilities#computer-lab"
                        className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5"
                      >
                        <span>View Smart Labs & ETutor Hub</span>
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                      <OptimizedImage
                        src="https://srnmehtaschool.com/wp-content/uploads/2024/05/Master-image-school-2.jpeg"
                        alt="S.R.N. Mehta CBSE Public School Campus"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* 3-Tier Curricular Levels */}
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <span className="text-xs uppercase tracking-widest text-blue-900 font-bold block mb-1">
                    Graded Academic Structure
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    CBSE Program Tiers & Syllabus
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentWing.programsOffered.map((prog, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-mono font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                            {prog.duration}
                          </span>
                          <span className="text-xs text-slate-400">{prog.eligibility}</span>
                        </div>
                        <h4 className="font-display font-bold text-base text-slate-900">{prog.name}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{prog.focus}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 text-[11px] text-blue-900 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>NCERT Framework Aligned</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights & Accolades */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
                  <h4 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Trophy className="w-5 h-5 text-amber-500" />
                    <span>Academic Highlights & Board Records</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {currentWing.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
                  <h4 className="font-display text-lg font-bold text-slate-900 flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-blue-900" />
                    <span>Holistic Co-Curricular & Child Care</span>
                  </h4>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {currentWing.keyFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STATE BOARD SCHOOL */}
          {activeTab === 'state-board' && (
            <div className="space-y-12">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                      <span className="bg-emerald-50 text-emerald-800 px-3 py-1 rounded-md border border-emerald-200">
                        KSEAB Karnataka State Board
                      </span>
                      <span>·</span>
                      <span className="text-slate-600">English & Regional Medium</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                      S.R.N. Mehta Karnataka State Board School
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Delivering the rigorous Karnataka State Syllabus with strong foundations in science, mathematics, regional culture, and state languages. Consistently ranked among the top state board schools in India by Education Today with 100% SSLC board examination passes and high distinction records.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <button
                        onClick={() => onOpenAdmissionModal('State Board School')}
                        className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-md flex items-center gap-2"
                      >
                        <GraduationCap className="w-4 h-4 text-amber-400" />
                        <span>Admissions 2026-27 (Grade 1 to SSLC)</span>
                      </button>

                      <Link
                        to="/contact"
                        className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors"
                      >
                        <span>Inquire for State Wing</span>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                      <OptimizedImage
                        src="https://srnmehtaschool.com/wp-content/uploads/2024/08/state-board-campus.jpg"
                        alt="Karnataka State Board School Wing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* State Programs & Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    State Curriculum Programs
                  </h3>
                  <div className="space-y-4">
                    {ACADEMIC_WINGS[1].programsOffered.map((prog, idx) => (
                      <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200/80 space-y-1.5">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-blue-900">{prog.name}</span>
                          <span className="text-[11px] font-mono text-slate-500">{prog.duration}</span>
                        </div>
                        <p className="text-xs text-slate-600">{prog.focus}</p>
                        <div className="text-[11px] text-slate-400">Eligibility: {prog.eligibility}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 space-y-4 shadow-sm">
                  <h3 className="font-display text-lg font-bold text-slate-900">
                    Key Features & Merit System
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    {ACADEMIC_WINGS[1].highlights.concat(ACADEMIC_WINGS[1].keyFeatures).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PU COLLEGE */}
          {activeTab === 'pu-college' && (
            <div className="space-y-12">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-700">
                      <span className="bg-amber-50 text-amber-900 px-3 py-1 rounded-md border border-amber-200">
                        Department of Pre-University Education (DUE)
                      </span>
                      <span>·</span>
                      <span className="text-slate-600">Integrated NEET / JEE / KCET / CA-CPT</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                      S.R.N. Mehta Composite Pre-University College
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The premier launchpad for aspiring doctors, software engineers, chartered accountants, and civil servants in Kalaburagi. Our integrated coaching program pairs the NCERT Pre-University syllabus with daily practice problem sets, chapter-wise diagnostic tests, and NTA-pattern computerized test series on 120 dedicated terminals.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <button
                        onClick={() => onOpenAdmissionModal('PU College Science')}
                        className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-md flex items-center gap-2"
                      >
                        <GraduationCap className="w-4 h-4 text-amber-400" />
                        <span>Admissions 2026-27 (1st & 2nd PUC)</span>
                      </button>

                      <Link
                        to="/facilities#computer-lab"
                        className="px-5 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-xl transition-colors flex items-center gap-1.5"
                      >
                        <span>ETutor Testing Terminal Hub</span>
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                      <OptimizedImage
                        src="https://srnmehtaschool.com/wp-content/uploads/2024/03/SRN-Mehta-PU-Copy-scaled.jpg"
                        alt="Pre-University College Wing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* PU Stream Combinations */}
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <span className="text-xs uppercase tracking-widest text-blue-900 font-bold block mb-1">
                    Science & Commerce Streams
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    Pre-University Course Offerings
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ACADEMIC_WINGS[2].programsOffered.map((prog, idx) => (
                    <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4 shadow-sm flex flex-col justify-between">
                      <div className="space-y-3">
                        <span className="text-[10px] font-mono font-bold text-blue-900 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200 inline-block">
                          {prog.duration}
                        </span>
                        <h4 className="font-display font-bold text-base text-slate-900">{prog.name}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{prog.focus}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                        Eligibility: {prog.eligibility}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ETutor Hub Highlight */}
              <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-10 shadow-md">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                      <Cpu className="w-4 h-4" />
                      <span>ETutor Computerized Testing Hub</span>
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">
                      Real NTA-Pattern Examination Simulation
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Equipped with 120 Intel Core computing terminals and dedicated 200 Mbps optical fiber, students take weekly timed mock exams mirroring the exact test screen for NEET, JEE Mains, and KCET. Instant analytics highlight topic-wise strengths and negative mark avoidance.
                    </p>
                  </div>
                  <div className="lg:col-span-5 aspect-[16/10] rounded-xl overflow-hidden border border-slate-700">
                    <OptimizedImage
                      src="https://srnmehtaschool.com/wp-content/uploads/2024/05/ETUTOR-EXAM-COMPUTER-LAB-3.jpg"
                      alt="ETutor Testing Lab"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DEGREE COLLEGE (With 6 Subject Department Tabs: Commerce, Mathematics, English, Kannada, Hindi, Computer Applications) */}
          {activeTab === 'degree-college' && (
            <div className="space-y-12">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-900">
                      <span className="bg-blue-50 text-blue-900 px-3 py-1 rounded-md border border-blue-200">
                        Affiliated to Gulbarga University, Kalaburagi
                      </span>
                      <span>·</span>
                      <span className="text-slate-600">NEP 2020 Multi-Disciplinary</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                      S.R.N. Mehta Degree College
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Offering specialized bachelor degrees in <strong>Bachelor of Computer Applications (BCA)</strong> and <strong>Bachelor of Commerce (B.Com)</strong>, supported by dedicated academic departments in <strong>Commerce, Mathematics, English, Kannada, Hindi, and Computer Applications</strong>.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-4">
                      <button
                        onClick={() => onOpenAdmissionModal('Degree College')}
                        className="px-6 py-3 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer shadow-md flex items-center gap-2"
                      >
                        <GraduationCap className="w-4 h-4 text-amber-400" />
                        <span>Admissions 2026-27 (BCA & B.Com)</span>
                      </button>

                      <Link
                        to="/departments/computer-applications"
                        className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-xl transition-colors"
                      >
                        <span>Explore BCA Department</span>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-md border border-slate-200">
                      <OptimizedImage
                        src="https://srnmehtaschool.com/wp-content/uploads/2025/02/Master-image-college-3-scaled.jpg"
                        alt="S.R.N. Mehta Degree College"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Tabs Bar (Commerce, Mathematics, English, Kannada, Hindi, Computer Applications) */}
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-blue-900 font-bold block mb-1">
                      Academic Departments
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                      Degree College Subject Departments
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500">
                    Click any department tab to view its curriculum & faculty table
                  </span>
                </div>

                {/* 6 Subject Department Tabs */}
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
                  {DEPARTMENTS_DATA.map((dept) => {
                    const isDeptActive = activeDeptTab === dept.id;
                    return (
                      <button
                        key={dept.id}
                        onClick={() => setActiveDeptTab(dept.id)}
                        className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                          isDeptActive
                            ? 'bg-blue-900 text-white shadow-md'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        <span>{dept.shortName}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Department Spotlight Dossier */}
                <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-10 shadow-sm space-y-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-5">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block mb-1">
                        {activeDept.badge}
                      </span>
                      <h4 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                        {activeDept.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {activeDept.affiliation} · Duration: {activeDept.duration}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        to={`/departments/${activeDept.id}`}
                        className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 shadow"
                      >
                        <span>Full Department Page</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                  {/* Overview Text */}
                  <div className="space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
                    {activeDept.overviewParagraphs.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {/* Objectives */}
                  <div className="space-y-4 pt-4 border-t border-slate-100">
                    <h5 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider">
                      Department Objectives
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {activeDept.objectives.map((obj, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2.5 p-2.5 bg-slate-50 rounded-lg border border-slate-100">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Faculty Table (Matching the Screenshot) */}
                  {activeDept.facultyList && activeDept.facultyList.length > 0 && (
                    <div className="pt-6 border-t border-slate-100 space-y-4">
                      <div className="flex items-center justify-between">
                        <h5 className="font-display font-bold text-sm text-slate-900 uppercase tracking-wider">
                          Department Faculty Roster
                        </h5>
                        <span className="text-xs text-slate-500">Qualified Postgraduate Faculty</span>
                      </div>

                      <div className="overflow-x-auto rounded-xl border border-slate-300">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-300 text-slate-900 font-bold text-center">
                              <th className="py-2.5 px-3 border-r border-slate-300 w-16">Sl. No</th>
                              <th className="py-2.5 px-4 border-r border-slate-300">Faculty Name</th>
                              <th className="py-2.5 px-4 border-r border-slate-300">Designation</th>
                              <th className="py-2.5 px-4">Qualification</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-300 text-center">
                            {activeDept.facultyList.map((f) => (
                              <tr key={f.slNo} className="hover:bg-blue-50/50">
                                <td className="py-2.5 px-3 border-r border-slate-300 font-medium text-slate-600">{f.slNo}</td>
                                <td className="py-2.5 px-4 border-r border-slate-300 font-bold text-slate-900">{f.name}</td>
                                <td className="py-2.5 px-4 border-r border-slate-300 text-slate-700">{f.designation}</td>
                                <td className="py-2.5 px-4 font-semibold text-blue-900">{f.qualification}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Facilities & Outcomes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-slate-100">
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Department Facilities & Labs:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {activeDept.labFacilities.map((lab, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                            <span>{lab}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Career Pathways & Outcomes:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {activeDept.careerProspects.map((car, cIdx) => (
                          <li key={cIdx} className="flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0 mt-1.5" />
                            <span>{car}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
