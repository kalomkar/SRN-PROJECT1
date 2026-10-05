import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { TopBar } from './components/layout/TopBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AdmissionModal } from './components/forms/AdmissionModal';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademicsPage } from './pages/AcademicsPage';
import { DepartmentDetailPage } from './pages/DepartmentDetailPage';
import { FacilitiesPage } from './pages/FacilitiesPage';
import { FacultyPage } from './pages/FacultyPage';
import { EventsPage } from './pages/EventsPage';
import { EventDetailPage } from './pages/EventDetailPage';
import { NewsPage } from './pages/NewsPage';
import { NewsDetailPage } from './pages/NewsDetailPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Scroll Restoration Component
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [isAdmissionModalOpen, setIsAdmissionModalOpen] = useState(false);
  const [targetAdmissionWing, setTargetAdmissionWing] = useState<any>('CBSE School');

  const handleOpenAdmissionModal = (wing?: string) => {
    if (wing) {
      setTargetAdmissionWing(wing);
    }
    setIsAdmissionModalOpen(true);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased selection:bg-blue-900 selection:text-white">
        {/* Top Operational Announcement & Hotline Bar */}
        <TopBar onOpenAdmissionModal={() => handleOpenAdmissionModal()} />

        {/* Primary Sticky Header Navigation */}
        <Navbar onOpenAdmissionModal={() => handleOpenAdmissionModal()} />

        {/* Main Routed Page Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenAdmissionModal={() => handleOpenAdmissionModal()} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/academics" element={<AcademicsPage onOpenAdmissionModal={() => handleOpenAdmissionModal()} />} />
            <Route path="/academics/:wingId" element={<AcademicsPage onOpenAdmissionModal={() => handleOpenAdmissionModal()} />} />
            <Route path="/departments/:deptId" element={<DepartmentDetailPage onOpenAdmissionModal={handleOpenAdmissionModal} />} />
            <Route path="/computer-applications" element={<DepartmentDetailPage onOpenAdmissionModal={handleOpenAdmissionModal} />} />
            <Route path="/bca" element={<DepartmentDetailPage onOpenAdmissionModal={handleOpenAdmissionModal} />} />
            <Route path="/commerce" element={<DepartmentDetailPage onOpenAdmissionModal={handleOpenAdmissionModal} />} />
            <Route path="/bcom" element={<DepartmentDetailPage onOpenAdmissionModal={handleOpenAdmissionModal} />} />
            <Route path="/english" element={<DepartmentDetailPage onOpenAdmissionModal={handleOpenAdmissionModal} />} />
            <Route path="/mathematics" element={<DepartmentDetailPage onOpenAdmissionModal={handleOpenAdmissionModal} />} />
            <Route path="/kannada" element={<DepartmentDetailPage onOpenAdmissionModal={handleOpenAdmissionModal} />} />
            <Route path="/hindi" element={<DepartmentDetailPage onOpenAdmissionModal={handleOpenAdmissionModal} />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/faculty" element={<FacultyPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/events/:slug" element={<EventDetailPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/news/:slug" element={<NewsDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Institutional Global Footer */}
        <Footer />

        {/* Global Interactive Admission Modal */}
        {isAdmissionModalOpen && (
          <AdmissionModal
            isOpen={true}
            defaultWing={targetAdmissionWing}
            onClose={() => setIsAdmissionModalOpen(false)}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
