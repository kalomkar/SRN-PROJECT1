import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Quote, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';
import { PARENT_TESTIMONIALS } from '../../data/testimonials';

export const VideoShowcase: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const current = PARENT_TESTIMONIALS[activeIdx];

  const handleVideoToggle = (videoEl: HTMLVideoElement | null) => {
    if (!videoEl) return;
    if (videoEl.paused) {
      videoEl.play();
      setIsPlaying(true);
    } else {
      videoEl.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section aria-label="Parent Video Testimonials" className="py-16 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle architectural grid pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex items-center justify-center gap-2 text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Parent Voices & Testimonials</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Trusted by Kalaburagi Families for Decades
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
            Real experiences from parents of SRN Mehta students sharing their perspective on our holistic grooming, administration, sports support, and academic environment.
          </p>
        </div>

        {/* Main Testimonial Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Responsive Video Player */}
          <div className="lg:col-span-6 xl:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black border border-slate-700 aspect-[9/16] sm:aspect-[4/5] max-h-[520px] mx-auto w-full flex items-center justify-center group">
              <video
                key={current.videoUrl}
                src={current.videoUrl}
                poster={current.posterUrl}
                playsInline
                loop
                muted={isMuted}
                id="testimonial-video-player"
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

              {/* Center Play/Pause Trigger */}
              <button
                type="button"
                onClick={() => {
                  const videoEl = document.getElementById('testimonial-video-player') as HTMLVideoElement;
                  handleVideoToggle(videoEl);
                }}
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer focus:outline-none"
                aria-label={isPlaying ? 'Pause Video' : 'Play Video'}
              >
                <div className={`w-16 h-16 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg transition-transform ${isPlaying ? 'opacity-0 group-hover:opacity-90 scale-90' : 'opacity-100 scale-100'}`}>
                  {isPlaying ? <Pause className="w-7 h-7 fill-current" /> : <Play className="w-7 h-7 fill-current ml-1" />}
                </div>
              </button>

              {/* Bottom Audio Toggle & Parent Lockup */}
              <div className="absolute bottom-3 inset-x-4 flex items-center justify-between z-20 text-white">
                <div>
                  <span className="text-xs font-semibold text-white block">{current.parentName}</span>
                  <span className="text-[10px] text-amber-300 font-medium">{current.focusArea}</span>
                </div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    const videoEl = document.getElementById('testimonial-video-player') as HTMLVideoElement;
                    if (videoEl) {
                      videoEl.muted = !isMuted;
                      setIsMuted(!isMuted);
                    }
                  }}
                  className="p-2 rounded-full bg-black/60 hover:bg-black/80 text-white text-xs flex items-center gap-1 transition-colors cursor-pointer border border-white/20"
                  aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-400" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                  <span className="text-[10px]">{isMuted ? 'Unmute' : 'Mute'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Verified Transcript & Tab Selector */}
          <div className="lg:col-span-6 xl:col-span-7 space-y-6">
            {/* Quote Block */}
            <div className="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 sm:p-8 relative">
              <Quote className="w-10 h-10 text-amber-400/20 absolute right-6 top-6" />
              <div className="inline-block px-2.5 py-1 rounded bg-amber-500/10 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-amber-500/20">
                {current.focusArea}
              </div>
              <blockquote className="font-editorial text-lg sm:text-xl text-slate-100 italic leading-relaxed">
                "{current.quote}"
              </blockquote>
              
              <div className="mt-6 pt-6 border-t border-slate-700/60">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-bold block mb-1">
                  Full Synchronized Transcript:
                </span>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-slate-900/60 p-3.5 rounded-lg border border-slate-700/50">
                  {current.transcript}
                </p>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                <UserCheck className="w-4 h-4" />
                <span>Verified Parent Feedback · Annual Campus Exhibition</span>
              </div>
            </div>

            {/* Testimonial Switcher Tabs */}
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block">
                Select Testimonial:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {PARENT_TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setActiveIdx(idx);
                      setIsPlaying(false);
                    }}
                    className={`p-3 rounded-lg text-left transition-all cursor-pointer border ${
                      activeIdx === idx
                        ? 'bg-blue-900/70 border-amber-400/80 text-white shadow-md'
                        : 'bg-slate-800/40 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    <div className="font-semibold text-xs text-white truncate">{t.parentName}</div>
                    <div className="text-[11px] text-slate-400 truncate mt-0.5">{t.focusArea}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
