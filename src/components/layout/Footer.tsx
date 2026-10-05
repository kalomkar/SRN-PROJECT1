import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, ShieldCheck, Award, GraduationCap, ChevronRight } from 'lucide-react';
import { INSTITUTION } from '../../data/institution';
import { MAIN_NAV_LINKS, ACADEMIC_QUICK_LINKS, CAMPUS_FACILITY_LINKS } from '../../data/navigation';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 text-sm">
      {/* Top Institutional Trust Banner */}
      <div className="border-b border-slate-800/80 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-900/40 border border-blue-700/30 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-amber-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">National Recognition</h4>
                <p className="text-xs text-slate-400">Ranked #1 for Community Service & ET TECH X Excellence</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-900/40 border border-blue-700/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">Accredited Pedagogy</h4>
                <p className="text-xs text-slate-400">CBSE Affiliation No. 830349 & Karnataka State Board</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-blue-900/40 border border-blue-700/30 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h4 className="font-semibold text-white text-base">Shri S.R.J. Naval Trust</h4>
                <p className="text-xs text-slate-400">33+ Years of Philanthropic Academic Legacy in Kalaburagi</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Institutional Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img
                src="https://srnmehtaschool.com/wp-content/uploads/2024/02/logo.png"
                alt="SRN Mehta Emblem"
                className="h-12 w-auto object-contain bg-white/95 rounded p-1"
              />
              <div>
                <span className="font-display font-bold text-lg text-white block">S.R.N. MEHTA INSTITUTIONS</span>
                <span className="text-xs text-amber-400 font-medium">Teach Them, They Serve The Nation</span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              A premier multi-disciplinary campus fostering academic mastery, character building, scientific temper, and national pride across CBSE School, State High School, Integrated Pre-University (IIT-JEE/NEET), and Degree College wings.
            </p>
            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                Governed By
              </span>
              <p className="text-xs text-slate-300 font-medium">{INSTITUTION.trustName}</p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {MAIN_NAV_LINKS.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Streams */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
              Academic Wings
            </h4>
            <ul className="space-y-2 text-xs">
              {ACADEMIC_QUICK_LINKS.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    className="text-slate-400 hover:text-amber-300 transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-600" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Coordinates */}
          <div className="space-y-3">
            <h4 className="font-display text-sm font-semibold text-white uppercase tracking-wider">
              Campus Office
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{INSTITUTION.location.address}, {INSTITUTION.location.city} - {INSTITUTION.location.pincode}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${INSTITUTION.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {INSTITUTION.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${INSTITUTION.contact.email}`} className="hover:text-white transition-colors truncate">
                  {INSTITUTION.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                <span>{INSTITUTION.contact.officeHours}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="border-t border-slate-900 bg-black/60 text-slate-400 text-xs py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-center sm:text-left text-slate-500">
            © {new Date().getFullYear()} {INSTITUTION.name}. All Rights Reserved. Managed by {INSTITUTION.trustName}.
          </p>

          {/* Developer Credit */}
          <div className="flex items-center gap-2 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800 text-slate-300">
            <span className="text-[11px] text-slate-400">Developed by</span>
            <span className="font-semibold text-amber-400 text-[11px] tracking-wide">Omkar Kalshetti</span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 text-xs">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy & Media Policy</Link>
            <span>·</span>
            <Link to="/contact" className="hover:text-white transition-colors">Campus Map</Link>
            <span>·</span>
            <Link to="/news" className="hover:text-white transition-colors">Circulars</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
