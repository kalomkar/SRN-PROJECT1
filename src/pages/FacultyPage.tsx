import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Award, GraduationCap, ChevronRight, BookOpen, ShieldCheck } from 'lucide-react';
import { FACULTY_MEMBERS } from '../data/faculty';
import { DEPARTMENTS_DATA } from '../data/departments';
import { INSTITUTION } from '../data/institution';
import { OptimizedImage } from '../components/media/OptimizedImage';

const WINGS = [
  { id: 'degree', label: 'Degree College Faculty' },
  { id: 'pu', label: 'PU College Faculty' },
  { id: 'school', label: 'CBSE & High School Faculty' },
  { id: 'leadership', label: 'Institutional Leadership' }
];

export const FacultyPage: React.FC = () => {
  const [selectedWing, setSelectedWing] = useState('degree');

  return (
    <div className="space-y-0">
      {/* 1. Header Banner */}
      <section className="bg-[#0a1120] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Academic Roster & Pedagogical Mentors
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Faculty & Academic Leadership
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
              Dedicated educators, university-affiliated professors, doctorate scholars, and competitive exam mentors across CBSE, State Board, Pre-University, and Degree College wings in Kalaburagi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Content & Wing Roster Filter */}
      <section className="py-12 lg:py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {/* Wing Selector Tabs */}
          <div className="flex items-center justify-between flex-wrap gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block">
                Academic Wing Roster
              </span>
              <h2 className="font-display text-xl font-bold text-slate-900 mt-0.5">
                Select Department or Academic Wing
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-1.5 bg-slate-200/80 p-1 rounded-lg">
              {WINGS.map((w) => (
                <button
                  key={w.id}
                  onClick={() => setSelectedWing(w.id)}
                  className={`px-3.5 py-1.5 rounded-md text-xs font-semibold transition-colors cursor-pointer ${
                    selectedWing === w.id
                      ? 'bg-white text-slate-950 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {w.label}
                </button>
              ))}
            </div>
          </div>

          {/* Wing: DEGREE COLLEGE (Only verified departments) */}
          {selectedWing === 'degree' && (
            <div className="space-y-8">
              <div className="bg-blue-950 text-white p-5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-amber-400 block">
                    Undergraduate Programs (Affiliated to Gulbarga University)
                  </span>
                  <h3 className="font-display text-lg font-bold text-white mt-0.5">
                    S.R.N. Mehta Degree College Faculty Roster
                  </h3>
                </div>
                <Link
                  to="/academics/degree-college"
                  className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-md whitespace-nowrap transition-colors flex items-center gap-1.5 self-start sm:self-center"
                >
                  <span>Explore Degree Wing</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="space-y-6">
                {DEPARTMENTS_DATA.filter((dept) => dept.facultyList && dept.facultyList.length > 0).map((dept) => (
                  <div key={dept.id} className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700 block">
                          {dept.badge}
                        </span>
                        <h4 className="font-display text-lg font-bold text-blue-950">
                          {dept.name}
                        </h4>
                      </div>
                      <Link
                        to={`/departments/${dept.id}`}
                        className="text-xs text-blue-950 font-bold hover:text-amber-600 flex items-center gap-1"
                      >
                        <span>View Department Curriculum</span>
                        <ChevronRight className="w-3 h-3" />
                      </Link>
                    </div>

                    <div className="overflow-x-auto rounded border border-slate-200">
                      <table className="w-full text-left border-collapse text-xs sm:text-sm">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold text-center">
                            <th className="py-2.5 px-4 border-r border-slate-200 w-16">Sl. No</th>
                            <th className="py-2.5 px-6 border-r border-slate-200 text-left">Faculty Name</th>
                            <th className="py-2.5 px-6 border-r border-slate-200">Designation</th>
                            <th className="py-2.5 px-6">Qualification</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-center">
                          {dept.facultyList!.map((f) => (
                            <tr key={f.slNo} className="hover:bg-slate-50/70 transition-colors">
                              <td className="py-2.5 px-4 border-r border-slate-200 font-mono text-slate-600">{f.slNo}</td>
                              <td className="py-2.5 px-6 border-r border-slate-200 font-bold text-slate-900 text-left">{f.name}</td>
                              <td className="py-2.5 px-6 border-r border-slate-200 font-medium text-slate-700">{f.designation}</td>
                              <td className="py-2.5 px-6 font-semibold text-blue-950">{f.qualification}</td>
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
            <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                  Karnataka School Examination and Assessment Board (KSEAB)
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                  Pre-University & Competitive Exam Faculty (Science & Commerce)
                </h3>
                <p className="text-xs text-slate-600 mt-1">
                  Experienced lecturers with proven track record in securing top ranks in NEET, IIT-JEE (Mains & Advanced), KCET, and CA Foundation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FACULTY_MEMBERS.filter((m) => m.department.includes('PU') || m.department.includes('Science') || m.department.includes('Mathematics')).map((member) => (
                  <div key={member.id} className="p-4 rounded border border-slate-200 bg-slate-50/50 flex items-start gap-4">
                    <div className="w-14 h-14 rounded overflow-hidden border border-slate-300 shrink-0 bg-slate-200">
                      <OptimizedImage
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-900">{member.name}</h4>
                      <p className="text-xs text-blue-950 font-semibold">{member.designation}</p>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">{member.qualification} · {member.experience}</p>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{member.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wing: CBSE & HIGH SCHOOL */}
          {selectedWing === 'school' && (
            <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-950 block">
                  CBSE Affiliation No: 830349 & Karnataka State Board
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                  School Wing Teachers & Pedagogical Mentors
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {FACULTY_MEMBERS.filter((m) => m.department.includes('School') || m.department.includes('Academics') || m.department.includes('Primary') || m.department.includes('High')).map((member) => (
                  <div key={member.id} className="p-4 rounded border border-slate-200 bg-slate-50/50 flex items-start gap-4">
                    <div className="w-14 h-14 rounded overflow-hidden border border-slate-300 shrink-0 bg-slate-200">
                      <OptimizedImage
                        src={member.imageUrl}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-sm text-slate-900">{member.name}</h4>
                      <p className="text-xs text-blue-950 font-semibold">{member.designation}</p>
                      <p className="text-[11px] text-slate-500 font-mono mt-0.5">{member.qualification} · {member.experience}</p>
                      <p className="text-xs text-slate-600 mt-1 line-clamp-2">{member.message}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Wing: LEADERSHIP */}
          {selectedWing === 'leadership' && (
            <div className="bg-white rounded-lg border border-slate-200 p-6 sm:p-8 space-y-6">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                  Shri S.R.J. Naval Trust Administration
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                  Institutional Leadership & Trustees
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {FACULTY_MEMBERS.slice(0, 4).map((leader) => (
                  <div key={leader.id} className="p-5 rounded border border-slate-200 bg-slate-50/70 space-y-3">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded overflow-hidden border border-slate-300 shrink-0 bg-slate-200">
                        <OptimizedImage
                          src={leader.imageUrl}
                          alt={leader.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-display font-bold text-base text-slate-900">{leader.name}</h4>
                        <p className="text-xs text-blue-950 font-semibold">{leader.designation}</p>
                        <p className="text-[11px] text-slate-500 font-mono">{leader.qualification}</p>
                      </div>
                    </div>
                    <blockquote className="font-editorial text-xs sm:text-sm text-slate-700 italic border-l-2 border-blue-950 pl-3">
                      "{leader.message}"
                    </blockquote>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
