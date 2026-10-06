import React, { useState } from 'react';
import { 
  Microscope, Dumbbell, Laptop, ShieldCheck, 
  CheckCircle2, Compass, Waves, Bus, Sun, ShieldAlert, Cpu
} from 'lucide-react';
import { FACILITIES } from '../data/facilities';
import { OptimizedImage } from '../components/media/OptimizedImage';

const CATEGORIES = [
  'All',
  'Laboratories',
  'Sports & Fitness',
  'Digital Infrastructure',
  'Campus Life',
  'Safety & Wellness'
];

export const FacilitiesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredFacilities = selectedCategory === 'All'
    ? FACILITIES
    : FACILITIES.filter((f) => f.category === selectedCategory);

  return (
    <div className="space-y-0">
      {/* 1. Header Banner */}
      <section className="bg-[#0a1120] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Infrastructure & Research Facilities
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Campus Facilities & Laboratories
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
              Equipped with specialized STEM labs, tournament-grade athletic arenas, junior splash pool, solar power generation, digital libraries, and 24/7 guarded security in Kalaburagi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Category Filter Tabs */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-0.5">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-md text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-950 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Facilities Dossier Grid */}
      <section className="py-16 lg:py-24 bg-slate-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {filteredFacilities.map((facility) => (
              <div
                key={facility.id}
                id={facility.id}
                className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                    <OptimizedImage
                      src={facility.imageUrl}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 text-amber-300 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded">
                      {facility.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-8 space-y-4">
                    <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                      {facility.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {facility.fullDesc}
                    </p>

                    {/* Technical Specifications */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-slate-900 block">
                        Technical Specifications & Capacity:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {facility.keySpecs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-start gap-2">
                            <span className="text-blue-950 font-bold">•</span>
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Equipment Tags (Unboxed / Clean Chips) */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-slate-900 block">
                        Key Equipment & Resources:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {facility.equipmentHighlights.map((eq, eIdx) => (
                          <span
                            key={eIdx}
                            className="bg-slate-100 text-slate-700 px-2 py-0.5 rounded text-[11px] font-medium"
                          >
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:px-8 pt-0 pb-6">
                  <div className="text-[11px] text-slate-400 border-t border-slate-100 pt-3">
                    Maintained by SRN Mehta Campus Administration
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
