import React, { useState } from 'react';
import { 
  Microscope, Dumbbell, Laptop, ShieldCheck, Sparkles, 
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
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Infrastructure & Amenities
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Campus Facilities & Laboratories
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              State-of-the-art scientific laboratories, tournament athletic arenas, junior splash pool, solar green energy, digital libraries, and 24/7 guarded campus security.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs (Interactive Functional Controls) */}
      <section className="sticky top-[69px] z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Dossier Grid */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredFacilities.map((facility) => (
              <div
                key={facility.id}
                id={facility.id}
                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="aspect-[16/9] overflow-hidden relative">
                    <OptimizedImage
                      src={facility.imageUrl}
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm text-amber-300 text-[11px] font-semibold uppercase px-3 py-1 rounded">
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

                    {/* Specifications List */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-900 block">
                        Technical Specifications & Capacity:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {facility.keySpecs.map((spec, sIdx) => (
                          <li key={sIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 shrink-0" />
                            <span>{spec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Equipment Highlights */}
                    <div className="pt-2 border-t border-slate-100 space-y-2">
                      <span className="text-xs uppercase tracking-wider font-bold text-slate-900 block">
                        Equipment & Specialized Resources:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {facility.equipmentHighlights.map((eq, eIdx) => (
                          <span
                            key={eIdx}
                            className="bg-slate-100 text-slate-700 px-2.5 py-1 rounded text-[11px] font-medium"
                          >
                            {eq}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 bg-white">
                  <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100 text-[11px] text-blue-900 flex items-center justify-between">
                    <span className="font-medium">Safety Inspected & Regular Maintenance Certified</span>
                    <ShieldCheck className="w-4 h-4 text-blue-900 shrink-0" />
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
