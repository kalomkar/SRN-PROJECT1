import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, GraduationCap, ChevronRight, ChevronDown } from 'lucide-react';
import { MAIN_NAV_LINKS } from '../../data/navigation';
import { INSTITUTION } from '../../data/institution';

interface NavbarProps {
  onOpenAdmissionModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAdmissionModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  // Scroll listener for sticky elevation
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route transition
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 bg-white/95 backdrop-blur-md border-b ${
        isScrolled ? 'border-slate-200 shadow-sm py-2.5' : 'border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6">
          {/* Zone 1: Single Brand Wordmark Entity */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded p-1 shrink-0"
            aria-label="S.R.N. Mehta Institutions Home"
          >
            <img
              src="https://srnmehtaschool.com/wp-content/uploads/2024/02/logo.png"
              alt="SRN Mehta Emblem"
              className="h-10 sm:h-11 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-slate-900 leading-none">
                S.R.N. MEHTA
              </span>
              <span className="text-[10px] font-medium tracking-wider text-slate-500 uppercase mt-0.5">
                Institutions · Kalaburagi
              </span>
            </div>
          </Link>

          {/* Zone 2: 4-6 Clean Text Navigation Links */}
          <nav className="hidden xl:flex items-center gap-7" aria-label="Primary Navigation">
            {MAIN_NAV_LINKS.map((link) => {
              if (link.children && link.children.length > 0) {
                return (
                  <div
                    key={link.path}
                    className="relative group py-1"
                    onMouseEnter={() => setOpenDropdown(link.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1 py-1 ${
                          isActive || location.pathname.startsWith('/departments')
                            ? 'text-blue-950 font-bold border-b-2 border-blue-950 pb-0.5'
                            : 'text-slate-600 hover:text-slate-900'
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3 h-3 text-slate-400 transition-transform group-hover:rotate-180" />
                    </NavLink>

                    {/* Clean Minimal Dropdown */}
                    <div className="absolute top-full left-0 w-64 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                      <div className="bg-white rounded-lg shadow-lg border border-slate-200 p-2 space-y-0.5">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block px-3 py-2 rounded-md hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="text-xs font-semibold text-slate-900 group-hover/item:text-blue-950">
                              {child.label}
                            </div>
                            {child.description && (
                              <div className="text-[11px] text-slate-500 mt-0.5">
                                {child.description}
                              </div>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs font-semibold uppercase tracking-wider transition-colors py-1 ${
                      isActive
                        ? 'text-blue-950 font-bold border-b-2 border-blue-950 pb-0.5'
                        : 'text-slate-600 hover:text-slate-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action & Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAdmissionModal}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-950 hover:bg-blue-900 active:bg-slate-950 rounded-md transition-colors shadow-sm whitespace-nowrap cursor-pointer flex items-center gap-1.5"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Admissions 2026</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[88px] z-50 bg-slate-900/50 backdrop-blur-xs xl:hidden transition-opacity">
          <div className="bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-88px)] overflow-y-auto p-6 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block px-3 mb-2">
                Campus Navigation
              </span>
              {MAIN_NAV_LINKS.map((link) => (
                <div key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-semibold transition-colors ${
                        isActive || (link.children && location.pathname.startsWith('/departments'))
                          ? 'bg-slate-100 text-blue-950 font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </NavLink>

                  {link.children && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-md my-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-blue-950 hover:bg-white rounded"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAdmissionModal();
                }}
                className="w-full py-3 bg-blue-950 hover:bg-blue-900 text-white font-semibold rounded-md text-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Apply for Admission 2026-27</span>
              </button>

              <a
                href={`tel:${INSTITUTION.contact.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-md text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Call Desk: {INSTITUTION.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
