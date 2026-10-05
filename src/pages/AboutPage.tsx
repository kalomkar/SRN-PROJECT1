import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Target, Compass, BookOpen, Users, CheckCircle2, ChevronRight } from 'lucide-react';
import { INSTITUTION, KEY_METRICS } from '../data/institution';
import { FACULTY_MEMBERS } from '../data/faculty';
import { OptimizedImage } from '../components/media/OptimizedImage';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* Page Hero Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-24 border-b border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Institutional Heritage & Governance
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              About S.R.N. Mehta Institutions
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Founded under the aegis of <strong className="text-white">Shri S.R.J. Naval Trust</strong> with the enduring motto <em>"Teach Them, They Serve The Nation"</em>, nurturing generations of ethical leaders, scientists, civil servants, and professionals in Kalaburagi.
            </p>
          </div>
        </div>
      </section>

      {/* Trust Genesis & History */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs uppercase tracking-widest text-blue-900 font-bold block">
                The Founding Legacy
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
                A Philanthropic Mission to Democratize Quality Education
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                In 1991, Shri S.R.J. Naval Trust laid the cornerstone of S.R.N. Mehta Institutions in Kalaburagi (then Gulbarga), Karnataka, with a singular visionary mandate: to provide world-class, rigorous, and value-based education accessible to all strata of society in the Kalyana Karnataka region.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over the past three decades, the institution has blossomed into a comprehensive multi-disciplinary academic ecosystem spanning CBSE School (Affiliation No. 830349), Karnataka State High School, Pre-University College with specialized NEET/IIT-JEE coaching, and S.R.N. Mehta Degree College.
              </p>
              <div className="pt-2 grid grid-cols-2 gap-4 border-t border-slate-100">
                <div>
                  <span className="text-xl font-display font-bold text-blue-900">1991</span>
                  <p className="text-[11px] text-slate-500">Year of Establishment</p>
                </div>
                <div>
                  <span className="text-xl font-display font-bold text-amber-600">15,000+</span>
                  <p className="text-[11px] text-slate-500">Alumni Across the Globe</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-[4/3]">
                <OptimizedImage
                  src="https://srnmehtaschool.com/wp-content/uploads/2024/05/Master-image-school-2.jpeg"
                  alt="Campus Archive View"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Pillars */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-900 text-amber-400 flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">Our Institutional Vision</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To stand as an exemplary citadel of learning where academic rigor, moral integrity, patriotic service, and progressive scientific curiosity blend seamlessly, empowering every young learner to contribute constructively to nation-building and humanity.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="font-display text-xl font-bold text-slate-900">Our Sacred Mission</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                To deliver child-centric, research-grounded pedagogy supported by modern STEM laboratories, sports arenas, digital literacy, and civic exposure. We cultivate empathy, leadership, critical thinking, and environmental stewardship in every student.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Messages */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-widest text-blue-900 font-bold block mb-2">
              Guiding Custodians
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Messages from Institutional Leadership
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {FACULTY_MEMBERS.slice(0, 2).map((leader) => (
              <div
                key={leader.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden border border-slate-300 shadow-sm shrink-0">
                      <OptimizedImage
                        src={leader.imageUrl}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-display font-bold text-lg text-slate-900">{leader.name}</h4>
                      <p className="text-xs text-amber-700 font-semibold">{leader.designation}</p>
                      <p className="text-[11px] text-slate-500">{leader.qualification}</p>
                    </div>
                  </div>
                  <blockquote className="font-editorial text-sm sm:text-base text-slate-700 italic leading-relaxed border-l-2 border-blue-900 pl-4 py-1">
                    "{leader.message}"
                  </blockquote>
                </div>
                <div className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                  {leader.department} · {leader.experience}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accolades & Recognition Showcase */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-2">
              National Honors
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Verified Institutional Accolades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTITUTION.accreditations.map((item, idx) => (
              <div key={idx} className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl space-y-3">
                <Award className="w-8 h-8 text-amber-400" />
                <div className="font-display font-bold text-sm text-white">{item.title}</div>
                <p className="text-xs text-slate-400">{item.authority}</p>
                <span className="inline-block text-[10px] font-mono text-amber-300 font-semibold uppercase">
                  Conferred: {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
