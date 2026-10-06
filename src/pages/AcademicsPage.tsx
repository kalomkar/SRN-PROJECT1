import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link, useLocation } from 'react-router-dom';
import { 
  GraduationCap, BookOpen, CheckCircle2, Award, Laptop, Clock, 
  ArrowRight, ShieldCheck, Star, Users, BrainCircuit, ChevronRight,
  Briefcase, Cpu, Microscope, School, Building2, Trophy, HelpCircle,
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

  useEffect(() => {
    setActiveTab(getInitialTab());
  }, [wingId, location.search]);

  const handleTabChange = (tab: AcademicTabKey) => {
    setActiveTab(tab);
    navigate(`/academics/${tab}`, { replace: true });
  };

  const currentTabDef = TABS.find((t) => t.key === activeTab) || TABS[0];
  const currentWing = ACADEMIC_WINGS.find((w) => w.id === currentTabDef.wingId) || ACADEMIC_WINGS[0];
  const activeDept = DEPARTMENTS_DATA.find((d) => d.id === activeDeptTab) || DEPARTMENTS_DATA[0];

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      {/* 1. Header Banner */}
      <section className="bg-[#0a1120] text-white relative overflow-hidden border-b border-slate-800">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              S.R.N. Mehta Institutions · Academic Framework
            </span>
            
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Academic Curricula & Wings
            </h1>
            
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans max-w-2xl">
              From foundational primary education to national entrance examinations (NEET / IIT-JEE) and university degrees (BCA & B.Com). Select an academic wing below.
            </p>
          </div>
        </div>

        {/* 2. Segmented Academic Tabs Bar */}
        <div className="bg-[#0f172a] border-t border-slate-800 sticky top-[69px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2.5">
              {TABS.map((tab) => {
                const isActive = activeTab === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() => handleTabChange(tab.key)}
                    className={`px-4 py-2 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 shadow-xs'
                        : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 hover:text-white border border-slate-700'
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

      {/* Degree College Header Sub-bar */}
      {activeTab === 'degree-college' && (
        <DegreeCollegeHeaderBar onOpenAdmissionModal={onOpenAdmissionModal} />
      )}

      {/* 3. Active Tab Content Dossier */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* TAB 1: CBSE SCHOOL */}
          {activeTab === 'cbse' && (
            <div className="space-y-10">
              <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                      <span>CBSE Affiliation No: 830349</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-600 font-mono">School Code: 45308</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                      S.R.N. Mehta CBSE Public School
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Affiliated with the Central Board of Secondary Education (CBSE), New Delhi, our CBSE wing empowers learners from Pre-KG to Class 10 with NEP 2020 inquiry-based pedagogy, NCERT curriculum, hands-on science laboratories, communicative fluency, smart classroom technology, and character-building ethics.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        onClick={() => onOpenAdmissionModal('CBSE School')}
                        className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <GraduationCap className="w-4 h-4 text-amber-400" />
                        <span>Admissions 2026-27 (Pre-KG to Class 10)</span>
                      </button>

                      <Link
                        to="/facilities#computer-lab"
                        className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center gap-1.5"
                      >
                        <span>View Smart Labs</span>
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
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
                  <span className="text-xs uppercase tracking-widest text-blue-950 font-bold block mb-1">
                    Graded Academic Structure
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    CBSE Program Tiers & Syllabus
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {currentWing.programsOffered.map((prog, idx) => (
                    <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-mono font-bold text-amber-800">
                            {prog.duration}
                          </span>
                          <span className="text-slate-400">{prog.eligibility}</span>
                        </div>
                        <h4 className="font-display font-bold text-base text-slate-900">{prog.name}</h4>
                        <p className="text-xs text-slate-600 leading-relaxed">{prog.focus}</p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 text-[11px] text-blue-950 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>NCERT Framework Aligned</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-4">
                  <h4 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
                    <Trophy className="w-4 h-4 text-amber-500" />
                    <span>Academic Highlights & Board Records</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentWing.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-100">
                        <span className="text-blue-950 font-bold">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-4">
                  <h4 className="font-display text-base font-bold text-slate-900 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-950" />
                    <span>Holistic Co-Curricular & Care</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {currentWing.keyFeatures.map((f, i) => (
                      <li key={i} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-100">
                        <span className="text-blue-950 font-bold">•</span>
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
            <div className="space-y-10">
              <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-2">
                      <span>KSEAB Karnataka State Board</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-600">English & Regional Medium</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                      S.R.N. Mehta Karnataka State Board School
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Delivering the rigorous Karnataka State Syllabus with strong foundations in science, mathematics, regional culture, and state languages. Consistently ranked among the top state board schools in India by Education Today with 100% SSLC board examination pass records.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        onClick={() => onOpenAdmissionModal('State Board School')}
                        className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <GraduationCap className="w-4 h-4 text-amber-400" />
                        <span>Admissions 2026-27 (Grade 1 to SSLC)</span>
                      </button>

                      <Link
                        to="/contact"
                        className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-md transition-colors"
                      >
                        <span>Inquire for State Wing</span>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                      <OptimizedImage
                        src="https://srnmehtaschool.com/wp-content/uploads/2024/08/state-board-campus.jpg"
                        alt="Karnataka State Board School Wing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* State Programs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-4">
                  <h3 className="font-display text-base font-bold text-slate-900">
                    State Curriculum Programs
                  </h3>
                  <div className="space-y-3">
                    {ACADEMIC_WINGS[1].programsOffered.map((prog, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-50 rounded border border-slate-200/80 space-y-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-blue-950">{prog.name}</span>
                          <span className="text-[11px] font-mono text-slate-500">{prog.duration}</span>
                        </div>
                        <p className="text-xs text-slate-600">{prog.focus}</p>
                        <div className="text-[11px] text-slate-400">Eligibility: {prog.eligibility}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-4">
                  <h3 className="font-display text-base font-bold text-slate-900">
                    Key Features & Merit System
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-700">
                    {ACADEMIC_WINGS[1].highlights.concat(ACADEMIC_WINGS[1].keyFeatures).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-100">
                        <span className="text-emerald-700 font-bold">•</span>
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
            <div className="space-y-10">
              <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-2">
                      <span>Department of Pre-University Education (DUE)</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-600">NEET / JEE / KCET / CA-CPT</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                      S.R.N. Mehta Composite Pre-University College
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      The premier launchpad for aspiring medical students, software engineers, chartered accountants, and civil servants in Kalaburagi. Our integrated coaching pairs the NCERT Pre-University syllabus with daily practice problem sets, chapter-wise diagnostic tests, and NTA-pattern computerized test series on 120 dedicated terminals.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        onClick={() => onOpenAdmissionModal('PU College Science')}
                        className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <GraduationCap className="w-4 h-4 text-amber-400" />
                        <span>Admissions 2026-27 (1st & 2nd PUC)</span>
                      </button>

                      <Link
                        to="/facilities#computer-lab"
                        className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs uppercase tracking-wider rounded-md transition-colors flex items-center gap-1.5"
                      >
                        <span>ETutor Testing Terminal Hub</span>
                        <ArrowRight className="w-4 h-4 text-slate-500" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                      <OptimizedImage
                        src="https://srnmehtaschool.com/wp-content/uploads/2024/03/SRN-Mehta-PU-Copy-scaled.jpg"
                        alt="Pre-University College Wing"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* PU Stream Offerings */}
              <div className="space-y-4">
                <div className="border-b border-slate-200 pb-2">
                  <span className="text-xs uppercase tracking-widest text-blue-950 font-bold block mb-1">
                    Science & Commerce Streams
                  </span>
                  <h3 className="font-display text-xl font-bold text-slate-900">
                    Pre-University Course Offerings
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ACADEMIC_WINGS[2].programsOffered.map((prog, idx) => (
                    <div key={idx} className="bg-white rounded-lg border border-slate-200 p-6 space-y-4 flex flex-col justify-between">
                      <div className="space-y-3">
                        <span className="text-[11px] font-mono font-bold text-blue-950">
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
              <div className="bg-[#0a1120] text-white rounded-lg p-6 sm:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-2">
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
                  <div className="lg:col-span-5 aspect-[16/10] rounded overflow-hidden border border-slate-700 bg-slate-900">
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

          {/* TAB 4: DEGREE COLLEGE */}
          {activeTab === 'degree-college' && (
            <div className="space-y-10">
              <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-7 space-y-4">
                    <div className="text-xs font-bold uppercase tracking-wider text-blue-950 flex items-center gap-2">
                      <span>Affiliated to Gulbarga University, Kalaburagi</span>
                      <span className="text-slate-300">·</span>
                      <span className="text-slate-600">NEP 2020 Multi-Disciplinary</span>
                    </div>

                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-slate-900">
                      S.R.N. Mehta Degree College
                    </h2>

                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                      Offering specialized bachelor degrees in <strong>Bachelor of Computer Applications (BCA)</strong> and <strong>Bachelor of Commerce (B.Com)</strong>, supported by dedicated academic departments in <strong>Commerce, Mathematics, English, Kannada, Hindi, and Computer Applications</strong>.
                    </p>

                    <div className="pt-2 flex flex-wrap gap-3">
                      <button
                        onClick={() => onOpenAdmissionModal('Degree College')}
                        className="px-5 py-2.5 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2"
                      >
                        <GraduationCap className="w-4 h-4 text-amber-400" />
                        <span>Admissions 2026-27 (BCA & B.Com)</span>
                      </button>

                      <Link
                        to="/departments/computer-applications"
                        className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md transition-colors"
                      >
                        <span>Explore BCA Department</span>
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden border border-slate-200 bg-slate-100">
                      <OptimizedImage
                        src="https://srnmehtaschool.com/wp-content/uploads/2025/02/Master-image-college-3-scaled.jpg"
                        alt="S.R.N. Mehta Degree College"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Department Tabs Bar */}
              <div className="space-y-6">
                <div className="border-b border-slate-200 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-blue-950 font-bold block mb-1">
                      Academic Departments
                    </span>
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      Degree College Subject Departments
                    </h3>
                  </div>
                  <span className="text-xs text-slate-500">
                    Click any department to view curriculum & faculty roster
                  </span>
                </div>

                {/* 6 Subject Department Tabs */}
                <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
                  {DEPARTMENTS_DATA.map((dept) => {
                    const isDeptActive = activeDeptTab === dept.id;
                    return (
                      <button
                        key={dept.id}
                        onClick={() => setActiveDeptTab(dept.id)}
                        className={`px-3.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                          isDeptActive
                            ? 'bg-blue-950 text-white shadow-xs'
                            : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                        }`}
                      >
                        <span>{dept.shortName}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Department Spotlight Dossier */}
                <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-10 space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block mb-0.5">
                        {activeDept.badge}
                      </span>
                      <h4 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                        {activeDept.name}
                      </h4>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {activeDept.affiliation} · Duration: {activeDept.duration}
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <Link
                        to={`/departments/${activeDept.id}`}
                        className="px-3.5 py-1.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5"
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
                  <div className="space-y-3 pt-3 border-t border-slate-100">
                    <h5 className="font-display font-bold text-xs text-slate-900 uppercase tracking-wider">
                      Department Objectives
                    </h5>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      {activeDept.objectives.map((obj, oIdx) => (
                        <li key={oIdx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded border border-slate-100">
                          <span className="text-blue-950 font-bold">•</span>
                          <span>{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Faculty Table */}
                  {activeDept.facultyList && activeDept.facultyList.length > 0 && (
                    <div className="pt-4 border-t border-slate-100 space-y-3">
                      <div className="flex items-center justify-between">
                        <h5 className="font-display font-bold text-xs text-slate-900 uppercase tracking-wider">
                          Department Faculty Roster
                        </h5>
                        <span className="text-[11px] text-slate-500">Qualified Postgraduate Faculty</span>
                      </div>

                      <div className="overflow-x-auto rounded border border-slate-200">
                        <table className="w-full text-left border-collapse text-xs">
                          <thead>
                            <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold text-center">
                              <th className="py-2 px-3 border-r border-slate-200 w-16">Sl. No</th>
                              <th className="py-2 px-4 border-r border-slate-200 text-left">Faculty Name</th>
                              <th className="py-2 px-4 border-r border-slate-200">Designation</th>
                              <th className="py-2 px-4">Qualification</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-200 text-center">
                            {activeDept.facultyList.map((f) => (
                              <tr key={f.slNo} className="hover:bg-slate-50/70">
                                <td className="py-2 px-3 border-r border-slate-200 font-mono text-slate-600">{f.slNo}</td>
                                <td className="py-2 px-4 border-r border-slate-200 font-bold text-slate-900 text-left">{f.name}</td>
                                <td className="py-2 px-4 border-r border-slate-200 text-slate-700">{f.designation}</td>
                                <td className="py-2 px-4 font-semibold text-blue-950">{f.qualification}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  )}

                  {/* Facilities & Outcomes */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-3 border-t border-slate-100">
                    <div className="space-y-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-900 block">
                        Department Facilities & Labs:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {activeDept.labFacilities.map((lab, lIdx) => (
                          <li key={lIdx} className="flex items-start gap-1.5">
                            <span className="text-blue-950 font-bold">•</span>
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
                            <span className="text-amber-600 font-bold">•</span>
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
