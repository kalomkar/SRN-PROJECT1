import React from 'react';
import { Phone, Mail, MapPin, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { INSTITUTION } from '../../data/institution';

interface TopBarProps {
  onOpenAdmissionModal?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onOpenAdmissionModal }) => {
  return (
    <aside aria-label="Institutional Announcement" className="bg-slate-900 text-slate-200 border-b border-slate-800 text-xs py-2 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Urgent Announcement / Accreditation Ticker */}
        <div className="flex items-center gap-2 overflow-hidden w-full md:w-auto">
          <div className="flex items-center gap-1.5 text-amber-400 font-semibold shrink-0">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span className="uppercase tracking-wider text-[11px]">Ranked #1 in India</span>
          </div>
          <span className="text-slate-500 hidden sm:inline" aria-hidden="true">·</span>
          <p className="text-slate-300 truncate text-[11px] sm:text-xs">
            Community Services (CBSE Category) · Admissions Open for 2026-27 (Pre-KG to Degree)
          </p>
        </div>

        {/* Quick Contact & Admissions Trigger */}
        <div className="flex items-center gap-4 text-slate-300 text-[11px] sm:text-xs shrink-0">
          <a
            href={`tel:${INSTITUTION.contact.phone.replace(/\s+/g, '')}`}
            className="hover:text-amber-400 transition-colors flex items-center gap-1"
          >
            <Phone className="w-3 h-3 text-slate-400" />
            <span className="hidden sm:inline">{INSTITUTION.contact.phone}</span>
            <span className="sm:hidden">Call Desk</span>
          </a>
          <span className="text-slate-700" aria-hidden="true">|</span>
          <div className="flex items-center gap-1 text-slate-400 hidden lg:flex">
            <MapPin className="w-3 h-3 text-slate-400" />
            <span>Kalaburagi, Karnataka</span>
          </div>
          {onOpenAdmissionModal && (
            <button
              onClick={onOpenAdmissionModal}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-2.5 py-0.5 rounded text-[11px] font-semibold flex items-center gap-1 transition-colors cursor-pointer shadow-sm ml-1"
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
