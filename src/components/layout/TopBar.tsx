import React from 'react';
import { Phone, Mail, MapPin, Award, ArrowRight } from 'lucide-react';
import { INSTITUTION } from '../../data/institution';

interface TopBarProps {
  onOpenAdmissionModal?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenAdmissionModal }) => {
  return (
    <aside aria-label="Institutional Utility Strip" className="bg-[#0f172a] text-slate-300 border-b border-slate-800 text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Urgent Announcement / Accreditation Info (Zero-Pill) */}
        <div className="flex items-center gap-2 overflow-hidden w-full md:w-auto text-[11px] sm:text-xs">
          <span className="font-semibold text-amber-400 uppercase tracking-wider shrink-0">
            CBSE Rank #1
          </span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="text-slate-300 truncate">
            Excellence in Community Services & Holistic Pedagogy
          </span>
          <span className="text-slate-600 hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-slate-400 hidden sm:inline">
            Admissions 2026-27 Open (Pre-KG to Degree)
          </span>
        </div>

        {/* Quick Contact Coordinates & Action */}
        <div className="flex items-center gap-4 text-slate-300 text-[11px] sm:text-xs shrink-0">
          <a
            href={`tel:${INSTITUTION.contact.phone.replace(/\s+/g, '')}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Phone className="w-3 h-3 text-amber-400" />
            <span className="font-mono">{INSTITUTION.contact.phone}</span>
          </a>
          <span className="text-slate-700" aria-hidden="true">|</span>
          <div className="flex items-center gap-1.5 text-slate-400 hidden lg:flex">
            <MapPin className="w-3 h-3 text-slate-400" />
            <span>Kalaburagi, Karnataka</span>
          </div>
          {onOpenAdmissionModal && (
            <button
              onClick={onOpenAdmissionModal}
              className="text-amber-400 hover:text-amber-300 font-semibold text-[11px] uppercase tracking-wider flex items-center gap-1 transition-colors cursor-pointer ml-1"
            >
              <span>Apply Online</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          )}
        </div>
      </div>
    </aside>
  );
};
