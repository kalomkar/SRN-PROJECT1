import React from 'react';
import { ShieldCheck, Lock, Eye, FileText, CheckCircle2 } from 'lucide-react';
import { INSTITUTION } from '../data/institution';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
            Institutional Governance & Compliance
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Privacy Policy & Media Rights Protocol
          </h1>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            S.R.N. Mehta Institutions, Kalaburagi, Karnataka (Managed by Shri S.R.J. Naval Trust).
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 sm:p-12 space-y-8 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans shadow-sm">
            <div className="space-y-3">
              <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-blue-900" />
                <span>1. Institutional Data Collection & Usage</span>
              </h2>
              <p>
                When parents or prospective students fill out online inquiry forms, admission registrations, or contact forms on our website, we collect necessary contact information (student name, parent name, telephone number, email, target academic stream, and residential area).
              </p>
              <p>
                This information is utilized strictly by the S.R.N. Mehta Institutional Admissions Cell for counseling, campus tour coordination, syllabus guidance, and statutory educational registration. We do not sell, rent, or lease applicant data to third-party marketing entities.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Eye className="w-5 h-5 text-blue-900" />
                <span>2. Student Photography & Campus Media Policy</span>
              </h2>
              <p>
                Photographs and video clips displayed in our institutional galleries, event archives, and annual chronicle capture authorized co-curricular events (Science Expos, Mock Parliament, NCC Parades, Investiture Ceremonies, Annual Sports Days, Field Excursions).
              </p>
              <p>
                Parents and legal guardians provide institutional media consent at the time of academic enrollment for constructive promotional and educational documentation. Any parent requesting the withdrawal or blur of specific media may submit a formal written request to the Principal's Secretariat.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-900" />
                <span>3. Digital Security & Campus Surveillance</span>
              </h2>
              <p>
                The physical campus is monitored 24/7 by closed-circuit television (CCTV) cameras located in common corridors, athletic fields, parking gates, and laboratories to maintain student safety. Surveillance recordings are securely stored and accessible only to authorized campus security administrators and law enforcement as required by law.
              </p>
            </div>

            <div className="space-y-3 pt-4 border-t border-slate-100">
              <h2 className="font-display text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-900" />
                <span>4. Inquiries & Contact Protocol</span>
              </h2>
              <p>
                For questions regarding this privacy statement, institutional policies, or academic records, please write to:
              </p>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-slate-800 font-medium">
                <div>The Administrative Officer</div>
                <div>S.R.N. Mehta Institutions, Near Sedam Ring Road Cross, Kalaburagi, Karnataka - 585105</div>
                <div>Email: {INSTITUTION.contact.email}</div>
                <div>Phone: {INSTITUTION.contact.phone}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
