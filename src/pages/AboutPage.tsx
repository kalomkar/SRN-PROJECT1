import React from 'react';
import { Award, ShieldCheck, HeartHandshake, Target, Compass, BookOpen, Users, CheckCircle2, ChevronRight } from 'lucide-react';
import { INSTITUTION, KEY_METRICS } from '../data/institution';
import { FACULTY_MEMBERS } from '../data/faculty';
import { OptimizedImage } from '../components/media/OptimizedImage';
import { ScrollReveal } from '../components/motion/ScrollReveal';
import { AnimatedCounter } from '../components/motion/AnimatedCounter';
import { MaskRevealText } from '../components/motion/MaskRevealText';

export const AboutPage: React.FC = () => {
  return (
    <div className="space-y-0">
      {/* 1. Page Hero Banner */}
      <section className="bg-[#0a1120] text-white py-16 lg:py-24 border-b border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <ScrollReveal direction="down" delay={0}>
              <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
                Institutional Heritage & Governance
              </span>
            </ScrollReveal>
            
            <MaskRevealText delay={100} as="h1" className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              About S.R.N. Mehta Institutions
            </MaskRevealText>

            <ScrollReveal direction="up" delay={200}>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
                Founded under the visionary stewardship of <strong className="text-white">Shri S.R.J. Naval Trust</strong> with the enduring national creed <em>"Teach Them, They Serve The Nation"</em>.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Trust Genesis & Archival History (Asymmetric 70/30 Editorial Layout) */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <ScrollReveal direction="up" className="lg:col-span-7 space-y-5">
              <span className="text-xs uppercase tracking-widest text-blue-950 font-bold block">
                Founding History · 1991 to Present
              </span>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900 leading-tight">
                A Philanthropic Mission to Democratize Quality Education
              </h2>
              <p className="text-sm text-slate-700 leading-relaxed drop-cap">
                In 1991, Shri S.R.J. Naval Trust laid the foundation of S.R.N. Mehta Institutions in Kalaburagi, Karnataka, with a singular visionary mandate: to provide world-class, rigorous, and value-based education accessible to all families in the Kalyana Karnataka region.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Over the past three decades, the institution has evolved into a premier multi-disciplinary campus spanning CBSE School (Affiliation No. 830349), Karnataka State High School, Pre-University College with dedicated NEET/IIT-JEE coaching tracks, and S.R.N. Mehta Degree College.
              </p>
              
              {/* Historical Milestones Strip with AnimatedCounter */}
              <div className="pt-4 grid grid-cols-3 gap-6 border-t border-slate-200">
                <div>
                  <div className="text-2xl font-display font-bold text-blue-950">
                    <AnimatedCounter value={1991} duration={1200} />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Founding Year</p>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-amber-600">
                    <AnimatedCounter value={15000} suffix="+" duration={1400} />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Global Alumni Network</p>
                </div>
                <div>
                  <div className="text-2xl font-display font-bold text-blue-950">
                    <AnimatedCounter value={33} suffix="+" duration={1000} />
                  </div>
                  <p className="text-[11px] text-slate-500 mt-0.5">Years of Distinction</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={150} className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden border border-slate-200 aspect-[4/3] bg-slate-100">
                <OptimizedImage
                  src="https://srnmehtaschool.com/wp-content/uploads/2024/05/Master-image-school-2.jpeg"
                  alt="SRN Mehta Campus Chronicle"
                  className="w-full h-full object-cover hover:scale-[1.02] transition-transform duration-500"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <ScrollReveal direction="up" className="space-y-4">
              <div className="border-b border-slate-300 pb-2">
                <span className="text-xs uppercase tracking-widest text-blue-950 font-bold block">
                  Guiding Philosophy
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                  Our Institutional Vision
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                To stand as an exemplary citadel of learning where academic rigor, moral integrity, patriotic service, and progressive scientific curiosity blend seamlessly, empowering every young learner to contribute constructively to nation-building and humanity.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={120} className="space-y-4">
              <div className="border-b border-slate-300 pb-2">
                <span className="text-xs uppercase tracking-widest text-amber-700 font-bold block">
                  Core Commitment
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                  Our Sacred Mission
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                To deliver child-centric, research-grounded pedagogy supported by modern STEM laboratories, athletic training, digital literacy, and civic exposure. We cultivate empathy, leadership, critical inquiry, and environmental stewardship in every student.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Leadership Messages */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <ScrollReveal direction="up" className="max-w-2xl">
            <span className="text-xs uppercase tracking-widest text-blue-950 font-bold block mb-1">
              Guiding Custodians
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-slate-900">
              Messages from Academic Leadership
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {FACULTY_MEMBERS.slice(0, 2).map((leader, idx) => (
              <ScrollReveal
                key={leader.id}
                delay={idx * 120}
                direction="up"
                className="bg-slate-50/70 border border-slate-200 rounded-lg p-6 sm:p-8 space-y-5"
              >
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
                    <p className="text-xs text-amber-800 font-semibold">{leader.designation}</p>
                    <p className="text-[11px] text-slate-500 font-mono">{leader.qualification}</p>
                  </div>
                </div>

                <blockquote className="font-editorial text-sm sm:text-base text-slate-700 italic leading-relaxed border-l-2 border-blue-950 pl-4 py-0.5">
                  "{leader.message}"
                </blockquote>

                <div className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider pt-2 border-t border-slate-200">
                  {leader.department} · {leader.experience}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Accreditations & Honors */}
      <section className="py-16 bg-[#0a1120] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up" className="max-w-2xl mb-10">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block mb-1">
              National Honors
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Official Institutional Accreditations
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTITUTION.accreditations.map((item, idx) => (
              <ScrollReveal
                key={idx}
                delay={idx * 80}
                direction="up"
                className="bg-slate-900 border border-slate-800 p-5 rounded-lg space-y-2"
              >
                <div className="text-amber-400 font-mono text-xs font-bold uppercase">
                  Conferred: {item.year}
                </div>
                <h4 className="font-display font-bold text-sm text-white">{item.title}</h4>
                <p className="text-xs text-slate-400">{item.authority}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
