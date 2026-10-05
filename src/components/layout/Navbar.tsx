import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, GraduationCap, ChevronRight, ChevronDown, Laptop, BookOpen } from 'lucide-react';
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
      setIsScrolled(window.scrollY > 20);
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
      className={`sticky top-0 z-40 w-full transition-all duration-300 bg-white/95 backdrop-blur-md border-b ${
        isScrolled ? 'border-slate-200 shadow-sm py-2.5' : 'border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Zone 1: Single Brand Entity Lockup (No subtitle tags in DOM) */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-900 rounded-lg p-1"
            aria-label="SRN Mehta Institutions Home"
          >
            <img
              src="https://srnmehtaschool.com/wp-content/uploads/2024/02/logo.png"
              alt="SRN Mehta Emblem"
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-slate-900 leading-none group-hover:text-blue-900 transition-colors">
                S.R.N. MEHTA
              </span>
              <span className="text-[10px] sm:text-[11px] font-medium tracking-widest text-slate-500 uppercase mt-0.5">
                Institutions · Kalaburagi
              </span>
            </div>
          </Link>

          {/* Zone 2: Clean Typography Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6" aria-label="Primary Navigation">
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
                        `text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1 ${
                          isActive || location.pathname.startsWith('/departments')
                            ? 'text-blue-900 font-bold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`
                      }
                    >
                      <span>{link.label}</span>
                      <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                    </NavLink>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-72 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-200 p-2 space-y-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="block p-2.5 rounded-lg hover:bg-slate-50 transition-colors group/item"
                          >
                            <div className="text-xs font-semibold text-slate-900 group-hover/item:text-blue-900">
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
                    `text-xs font-semibold uppercase tracking-wider transition-colors relative py-1 ${
                      isActive
                        ? 'text-blue-900 font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-blue-900'
                        : 'text-slate-600 hover:text-slate-900'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              );
            })}
          </nav>

          {/* Zone 3: Primary Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={onOpenAdmissionModal}
              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-900 hover:bg-blue-800 active:bg-blue-950 rounded-md transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-amber-400" />
              <span>Admissions 2026</span>
            </button>

            {/* Mobile Hamburger Button */}
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

      {/* Mobile Drawer (Accessible overlay with body lock) */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[90px] z-50 bg-slate-900/60 backdrop-blur-sm xl:hidden transition-opacity">
          <div className="bg-white border-b border-slate-200 shadow-xl max-h-[calc(100vh-90px)] overflow-y-auto p-6 space-y-6">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 block px-3 mb-2">
                Main Navigation
              </span>
              {MAIN_NAV_LINKS.map((link) => (
                <div key={link.path}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                        isActive || (link.children && location.pathname.startsWith('/departments'))
                          ? 'bg-blue-50 text-blue-900 font-bold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-900'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </NavLink>

                  {/* Sub-departments if any */}
                  {link.children && (
                    <div className="pl-4 pr-2 py-1 space-y-1 bg-slate-50 rounded-lg my-1">
                      {link.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block px-3 py-2 text-xs font-medium text-slate-600 hover:text-blue-900 hover:bg-white rounded"
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
                className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg text-sm flex items-center justify-center gap-2 cursor-pointer shadow"
              >
                <GraduationCap className="w-4 h-4 text-amber-400" />
                <span>Apply for Admission 2026-27</span>
              </button>

              <a
                href={`tel:${INSTITUTION.contact.phone.replace(/\s+/g, '')}`}
                className="w-full py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-800 font-medium rounded-lg text-sm flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-4 h-4 text-slate-600" />
                <span>Call Admissions: {INSTITUTION.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
