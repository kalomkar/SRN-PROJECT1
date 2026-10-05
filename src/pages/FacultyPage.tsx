import React, { useState } from 'react';
import { Mail, Award, BookOpen, GraduationCap, CheckCircle2, Search, Filter, Building2, UserCheck, ShieldCheck, ChevronRight } from 'lucide-react';
import { FACULTY_MEMBERS } from '../data/faculty';
import { DEPARTMENTS_DATA } from '../data/departments';
import { INSTITUTION } from '../data/institution';
import { OptimizedImage } from '../components/media/OptimizedImage';
import { Link } from 'react-router-dom';

export const FacultyPage: React.FC = () => {
  const [selectedWing, setSelectedWing] = useState<string>('degree');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Pre-University Faculty Roster
  const PU_FACULTY = [
    { slNo: 1, name: "Prof. Raghavendra Deshmukh", designation: "Dean & HOD - Mathematics", qualification: "M.Sc (Maths), B.Ed", experience: "18+ Years", dept: "PU Science (PCMB / PCMCs)" },
    { slNo: 2, name: "Dr. Suresh V. Kulkarni", designation: "Senior Lecturer - Physics", qualification: "M.Sc (Physics), Ph.D", experience: "15+ Years", dept: "PU Science (PCMB / PCMCs)" },
    { slNo: 3, name: "Smt. Manjula Patil", designation: "Senior Lecturer - Chemistry", qualification: "M.Sc (Chemistry), B.Ed", experience: "14+ Years", dept: "PU Science (PCMB / PCMCs)" },
    { slNo: 4, name: "Mr. Basavaraj S.", designation: "Lecturer - Biology", qualification: "M.Sc (Botany), M.Phil", experience: "11+ Years", dept: "PU Science (PCMB)" },
    { slNo: 5, name: "Prof. Mallikarjun Biradar", designation: "HOD - Commerce & Accountancy", qualification: "M.Com, M.Phil, UGC-NET", experience: "20+ Years", dept: "PU Commerce (CEBA / SEBA)" },
    { slNo: 6, name: "Smt. Nagaveni R.", designation: "Lecturer - Economics & Statistics", qualification: "M.A. (Economics), M.Sc (Stats)", experience: "10+ Years", dept: "PU Commerce (CEBA / SEBA)" },
  ];

  // CBSE School Faculty Roster
  const CBSE_FACULTY = [
    { slNo: 1, name: "Dr. S. K. Mehta", designation: "Principal & Head of Institution", qualification: "M.Sc, M.Ed, Ph.D", experience: "25+ Years", dept: "Senior Secondary & Administration" },
    { slNo: 2, name: "Mrs. Anasuya Patil", designation: "Headmistress", qualification: "M.A. (English), B.Ed", experience: "16+ Years", dept: "Middle & Primary Wing" },
    { slNo: 3, name: "Mr. Chandrashekhar H.", designation: "TGT - Science & Robotics", qualification: "M.Sc (Physics), B.Ed", experience: "12+ Years", dept: "High School (Classes 8-10)" },
    { slNo: 4, name: "Smt. Deepa K.", designation: "TGT - Mathematics & Vedic Math", qualification: "M.Sc (Maths), B.Ed", experience: "10+ Years", dept: "High School (Classes 8-10)" },
    { slNo: 5, name: "Mr. Santosh Patil", designation: "TGT - Social Science & Civics", qualification: "M.A. (History), B.Ed", experience: "9+ Years", dept: "Middle School (Classes 6-8)" },
    { slNo: 6, name: "Capt. Suresh Patil", designation: "Physical Education Director & ANO", qualification: "M.P.Ed, ANO Certified", experience: "15+ Years", dept: "Physical Education & NCC" },
  ];

  // State Board Faculty Roster
  const STATE_BOARD_FACULTY = [
    { slNo: 1, name: "Shri Mahadevappa K.", designation: "Headmaster", qualification: "M.A., B.Ed (Gold Medalist)", experience: "22+ Years", dept: "High School Administration" },
    { slNo: 2, name: "Smt. Saraswati S.", designation: "Senior Teacher - Kannada", qualification: "M.A. (Kannada), B.Ed", experience: "18+ Years", dept: "High School Kannada Sahitya" },
    { slNo: 3, name: "Mr. Rajshekhar B.", designation: "Senior Teacher - Physical Science", qualification: "M.Sc (Physics), B.Ed", experience: "14+ Years", dept: "SSLC Board Science" },
    { slNo: 4, name: "Mr. Gururaj Joshi", designation: "Senior Teacher - Mathematics", qualification: "B.Sc, B.Ed", experience: "16+ Years", dept: "SSLC Board Mathematics" },
  ];

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen text-slate-800 font-sans">
      {/* 1. Hero Banner */}
      <section className="bg-[#162d59] text-white py-14 lg:py-20 relative overflow-hidden border-b border-blue-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Academic Council & Faculty Directory
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
              Faculty & Academic Leadership
            </h1>
            <p className="text-xs sm:text-base text-slate-200 leading-relaxed font-sans">
              Distinguished professors, postgraduate researchers, and passionate mentors dedicated to academic rigor, character building, and individual student guidance across all four educational wings.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Executive Academic Leadership Showcase */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block">
              Institutional Leadership
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Board of Governance & Academic Deans
            </h2>
            <div className="w-16 h-1 bg-amber-500 mx-auto rounded-full mt-2" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACULTY_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all space-y-4 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-xl overflow-hidden border-2 border-slate-300 shadow-sm shrink-0 bg-slate-200">
                      <OptimizedImage
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900">
                        {member.name}
                      </h3>
                      <p className="text-xs text-amber-700 font-semibold mt-0.5">
                        {member.designation}
                      </p>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {member.qualification}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-slate-200">
                    <span className="text-[10px] uppercase tracking-wider text-slate-400 font-bold block">
                      Department / Wing:
                    </span>
                    <p className="text-xs text-slate-700 font-medium">{member.department}</p>
                  </div>

                  {member.message && (
                    <blockquote className="font-editorial text-xs text-slate-600 italic bg-white p-3 rounded-lg border border-slate-200/80 leading-relaxed">
                      "{member.message}"
                    </blockquote>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
                  <span>Experience: {member.experience}</span>
                  <span className="text-blue-900 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Academic Council</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Structured Wing-by-Wing Faculty Tables */}
      <section className="py-12 sm:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-900 block mb-1">
                Faculty Rosters by Institution
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                Official Departmental Faculty Tables
              </h2>
            </div>

            {/* Wing Filter Switcher */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: 'degree', label: 'Degree College (All Departments)' },
                { id: 'pu', label: 'PU College' },
                { id: 'cbse', label: 'CBSE School' },
                { id: 'state', label: 'State Board School' }
              ].map((w) => (
                <button
                  key={w.id}
                  onClick={() => setSelectedWing(w.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedWing === w.id
                      ? 'bg-[#162d59] text-white shadow-md'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>

          {/* Wing: DEGREE COLLEGE (All 6 Subject Department Tables) */}
          {selectedWing === 'degree' && (
            <div className="space-y-10">
              <div className="bg-blue-900 text-white p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">
                    Undergraduate Programs (Gulbarga University Affiliated)
                  </span>
                  <h3 className="font-display text-xl font-bold text-white mt-0.5">
                    S.R.N. Mehta Degree College Faculty Roster
                  </h3>
                  <p className="text-xs text-slate-300 mt-1">
                    Complete faculty roster covering BCA (Computer Applications), Commerce (B.Com), Mathematics, English, Kannada, and Hindi departments.
                  </p>
                </div>
                <Link
                  to="/academics/degree-college"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl whitespace-nowrap transition-colors flex items-center gap-1.5 self-start sm:self-center"
                >
                  <span>Explore Degree Wing</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-8">
                {DEPARTMENTS_DATA.filter((dept) => dept.facultyList && dept.facultyList.length > 0).map((dept) => (
                  <div key={dept.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-600 block">
                          {dept.badge}
                        </span>
                        <h4 className="font-display text-xl font-bold text-[#162d59]">
                          {dept.name}
                        </h4>
                      </div>
                      <Link
                        to={`/departments/${dept.id}`}
                        className="text-xs text-blue-900 font-bold hover:underline flex items-center gap-1"
                      >
                        <span>View Department Details</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="overflow-x-auto rounded-xl border border-slate-300">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-300 text-slate-900 font-bold text-center">
                            <th className="py-3 px-4 border-r border-slate-300 w-16 sm:w-20">Sl. No</th>
                            <th className="py-3 px-6 border-r border-slate-300">Faculty Name</th>
                            <th className="py-3 px-6 border-r border-slate-300">Designation</th>
                            <th className="py-3 px-6">Qualification</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-300 text-center">
                          {dept.facultyList!.map((f) => (
                            <tr key={f.slNo} className="hover:bg-blue-50/50 transition-colors">
                              <td className="py-3 px-4 border-r border-slate-300 font-medium text-slate-600">{f.slNo}</td>
                              <td className="py-3 px-6 border-r border-slate-300 font-bold text-slate-900 text-left sm:text-center">{f.name}</td>
                              <td className="py-3 px-6 border-r border-slate-300 font-medium text-slate-700">{f.designation}</td>
                              <td className="py-3 px-6 font-semibold text-blue-900">{f.qualification}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wing: PU COLLEGE */}
          {selectedWing === 'pu' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                  Karnataka School Examination and Assessment Board (KSEAB)
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 mt-0.5">
                  S.R.N. Mehta Pre-University College Faculty Roster
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Science (PCMB, PCMCs) and Commerce (CEBA, SEBA) coaching faculty with integrated KCET, NEET, and CA-Foundation preparation.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-300">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-300 text-slate-900 font-bold text-center">
                      <th className="py-3 px-4 border-r border-slate-300 w-16 sm:w-20">Sl. No</th>
                      <th className="py-3 px-6 border-r border-slate-300">Faculty Name</th>
                      <th className="py-3 px-6 border-r border-slate-300">Designation</th>
                      <th className="py-3 px-6 border-r border-slate-300">Qualification</th>
                      <th className="py-3 px-6">Department & Stream</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 text-center">
                    {PU_FACULTY.map((f) => (
                      <tr key={f.slNo} className="hover:bg-blue-50/50 transition-colors">
                        <td className="py-3 px-4 border-r border-slate-300 font-medium text-slate-600">{f.slNo}</td>
                        <td className="py-3 px-6 border-r border-slate-300 font-bold text-slate-900 text-left sm:text-center">{f.name}</td>
                        <td className="py-3 px-6 border-r border-slate-300 font-medium text-slate-700">{f.designation}</td>
                        <td className="py-3 px-6 border-r border-slate-300 font-semibold text-blue-900">{f.qualification}</td>
                        <td className="py-3 px-6 text-slate-700 text-xs">{f.dept} ({f.experience})</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Wing: CBSE SCHOOL */}
          {selectedWing === 'cbse' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                  Affiliation No. 830349 · School Code: 45308
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 mt-0.5">
                  S.R.N. Mehta CBSE Public School Faculty Roster
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Primary, Middle, and Secondary School educators trained under NCERT & CBSE pedagogical frameworks.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-300">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-300 text-slate-900 font-bold text-center">
                      <th className="py-3 px-4 border-r border-slate-300 w-16 sm:w-20">Sl. No</th>
                      <th className="py-3 px-6 border-r border-slate-300">Faculty Name</th>
                      <th className="py-3 px-6 border-r border-slate-300">Designation</th>
                      <th className="py-3 px-6 border-r border-slate-300">Qualification</th>
                      <th className="py-3 px-6">Wing & Subject Area</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 text-center">
                    {CBSE_FACULTY.map((f) => (
                      <tr key={f.slNo} className="hover:bg-blue-50/50 transition-colors">
                        <td className="py-3 px-4 border-r border-slate-300 font-medium text-slate-600">{f.slNo}</td>
                        <td className="py-3 px-6 border-r border-slate-300 font-bold text-slate-900 text-left sm:text-center">{f.name}</td>
                        <td className="py-3 px-6 border-r border-slate-300 font-medium text-slate-700">{f.designation}</td>
                        <td className="py-3 px-6 border-r border-slate-300 font-semibold text-blue-900">{f.qualification}</td>
                        <td className="py-3 px-6 text-slate-700 text-xs">{f.dept} ({f.experience})</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Wing: STATE BOARD SCHOOL */}
          {selectedWing === 'state' && (
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
                  Karnataka State Board (KSEAB) SSLC High School
                </span>
                <h3 className="font-display text-2xl font-bold text-slate-900 mt-0.5">
                  S.R.N. Mehta High School Faculty Roster
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Experienced teachers specializing in State Board SSLC curriculum with consistent 100% board passing results.
                </p>
              </div>

              <div className="overflow-x-auto rounded-xl border border-slate-300">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-300 text-slate-900 font-bold text-center">
                      <th className="py-3 px-4 border-r border-slate-300 w-16 sm:w-20">Sl. No</th>
                      <th className="py-3 px-6 border-r border-slate-300">Faculty Name</th>
                      <th className="py-3 px-6 border-r border-slate-300">Designation</th>
                      <th className="py-3 px-6 border-r border-slate-300">Qualification</th>
                      <th className="py-3 px-6">Subject Area & Experience</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-300 text-center">
                    {STATE_BOARD_FACULTY.map((f) => (
                      <tr key={f.slNo} className="hover:bg-blue-50/50 transition-colors">
                        <td className="py-3 px-4 border-r border-slate-300 font-medium text-slate-600">{f.slNo}</td>
                        <td className="py-3 px-6 border-r border-slate-300 font-bold text-slate-900 text-left sm:text-center">{f.name}</td>
                        <td className="py-3 px-6 border-r border-slate-300 font-medium text-slate-700">{f.designation}</td>
                        <td className="py-3 px-6 border-r border-slate-300 font-semibold text-blue-900">{f.qualification}</td>
                        <td className="py-3 px-6 text-slate-700 text-xs">{f.dept} ({f.experience})</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
