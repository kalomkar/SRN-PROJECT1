import React, { useState } from 'react';
import { X, CheckCircle, GraduationCap, Phone, User, Mail, BookOpen, Send } from 'lucide-react';
import { AdmissionInquiry } from '../../types/institution';
import { INSTITUTION } from '../../data/institution';

import { jsonDatabase } from '../../services/jsonDatabase';

interface AdmissionModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultWing?: 'CBSE School' | 'State Board School' | 'PU College Science' | 'PU College Commerce' | 'Degree College';
}

export const AdmissionModal: React.FC<AdmissionModalProps> = ({
  isOpen,
  onClose,
  defaultWing = 'CBSE School'
}) => {
  const [formData, setFormData] = useState<AdmissionInquiry>({
    studentName: '',
    parentName: '',
    email: '',
    phone: '',
    targetWing: defaultWing,
    currentGrade: '',
    city: 'Kalaburagi',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save directly to the JSON database
    jsonDatabase.addInquiry({
      studentName: formData.studentName,
      parentName: formData.parentName,
      email: formData.email,
      phone: formData.phone,
      targetWing: formData.targetWing,
      currentGrade: formData.currentGrade,
      city: formData.city,
      message: formData.message
    });

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 400);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header Ribbon */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base sm:text-lg text-white">
                Admissions Inquiry 2026-27
              </h3>
              <p className="text-[11px] text-slate-400">SRN Mehta Institutions · Kalaburagi</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h4 className="font-display font-bold text-xl text-slate-900">
                Inquiry Received Successfully!
              </h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for your interest in <strong>{formData.targetWing}</strong>. Our admissions counselor will connect with parent <strong>{formData.parentName}</strong> at <strong>{formData.phone}</strong> within 24 business hours to assist with campus tours and registration procedures.
              </p>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-600">
                <span>Admissions Desk: {INSTITUTION.contact.admissionsHelpline}</span>
              </div>
              <button
                onClick={handleReset}
                className="px-6 py-2.5 bg-blue-900 text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Student Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Patil"
                      value={formData.studentName}
                      onChange={(e) => setFormData({ ...formData, studentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Parent / Guardian Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Suresh Patil"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none bg-slate-50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9845012345"
                      pattern="[0-9]{10}"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none bg-slate-50"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      required
                      placeholder="parent@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none bg-slate-50"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Select Academic Wing *
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                    <select
                      value={formData.targetWing}
                      onChange={(e) => setFormData({ ...formData, targetWing: e.target.value as any })}
                      className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none bg-slate-50"
                    >
                      <option value="CBSE School">CBSE School (Pre-KG to Class 10)</option>
                      <option value="State Board School">Karnataka State Board School</option>
                      <option value="PU College Science">PU College (Science - PCMB/PCMC)</option>
                      <option value="PU College Commerce">PU College (Commerce - EBAC/HEBA)</option>
                      <option value="Degree College">S.R.N. Mehta Degree College</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Target Class / Grade *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Class 1 / 1st PUC"
                    value={formData.currentGrade}
                    onChange={(e) => setFormData({ ...formData, currentGrade: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none bg-slate-50"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Questions / Additional Notes
                </label>
                <textarea
                  rows={2}
                  placeholder="Inquire regarding hostel facility, school bus route, or fee structure..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent outline-none bg-slate-50"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-2.5 bg-blue-900 hover:bg-blue-800 active:bg-blue-950 text-white font-semibold rounded-lg text-xs tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Registering Inquiry...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 text-amber-400" />
                      <span>Submit Admission Inquiry</span>
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-slate-500 text-center">
                Your details are secure. Submitting this form initiates an official counselor consultation.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
