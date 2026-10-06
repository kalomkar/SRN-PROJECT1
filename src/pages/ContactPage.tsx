import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Building2, User } from 'lucide-react';
import { INSTITUTION } from '../data/institution';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="space-y-0">
      {/* 1. Header Banner */}
      <section className="bg-[#0a1120] text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Direct Communication & Campus Desk
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Contact S.R.N. Mehta Institutions
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans max-w-2xl">
              Connect with our admissions desk, administrative office, principal's secretariat, or schedule an in-person guided campus visit in Kalaburagi.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Main Two-Column Contact Grid */}
      <section className="py-16 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Column: Coordinates & Information (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="border-b border-slate-200 pb-3">
                <span className="text-xs uppercase tracking-widest text-blue-950 font-bold block">
                  Campus Headquarters
                </span>
                <h2 className="font-display text-2xl font-bold text-slate-900 mt-1">
                  Office & Visiting Hours
                </h2>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <MapPin className="w-4 h-4 text-blue-950" />
                    <span>Campus Address:</span>
                  </div>
                  <p className="text-slate-600 pl-6 leading-relaxed">
                    {INSTITUTION.location.address}, {INSTITUTION.location.landmark}, {INSTITUTION.location.city}, {INSTITUTION.location.state} - {INSTITUTION.location.pincode}
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Phone className="w-4 h-4 text-blue-950" />
                    <span>Direct Telephone Lines:</span>
                  </div>
                  <div className="text-slate-600 pl-6 space-y-0.5 font-mono">
                    <div>Administrative Desk: {INSTITUTION.contact.phone}</div>
                    <div>Admissions Hotline: {INSTITUTION.contact.alternatePhone}</div>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Mail className="w-4 h-4 text-blue-950" />
                    <span>Official Email Address:</span>
                  </div>
                  <a href={`mailto:${INSTITUTION.contact.email}`} className="text-blue-950 hover:underline block pl-6">
                    {INSTITUTION.contact.email}
                  </a>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-md space-y-1">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Clock className="w-4 h-4 text-blue-950" />
                    <span>Office & Inquiry Hours:</span>
                  </div>
                  <p className="text-slate-600 pl-6">
                    {INSTITUTION.contact.officeHours} (Sunday Closed)
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Clean Inquiry Form (7 cols) */}
            <div className="lg:col-span-7 bg-slate-50/70 border border-slate-200 rounded-lg p-6 sm:p-10">
              <div className="border-b border-slate-200 pb-3 mb-6">
                <span className="text-xs uppercase tracking-widest text-slate-500 font-bold block">
                  Online Communications Desk
                </span>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-1">
                  Send an Official Inquiry
                </h3>
              </div>

              {submitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-md text-emerald-900 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-base">
                    <CheckCircle className="w-5 h-5 text-emerald-600" />
                    <span>Inquiry Received Successfully</span>
                  </div>
                  <p className="text-xs text-emerald-800 leading-relaxed">
                    Thank you, <strong>{formData.name}</strong>. Our administrative secretariat will review your inquiry regarding <strong>{formData.subject}</strong> and reach out via phone or email within one working day.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                    }}
                    className="mt-3 text-xs font-semibold text-emerald-950 underline cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anand Patil"
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-950 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 9876543210"
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-950 focus:border-transparent transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. anand@example.com"
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-950 focus:border-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Inquiry Subject / Department
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-950 focus:border-transparent transition-colors"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Admissions: CBSE School">Admissions: CBSE School</option>
                        <option value="Admissions: State High School">Admissions: State High School</option>
                        <option value="Admissions: PU College (Science/Commerce)">Admissions: PU College (Science/Commerce)</option>
                        <option value="Admissions: Degree College (BCA / B.Com)">Admissions: Degree College (BCA / B.Com)</option>
                        <option value="Hostel & Transport Facility">Hostel & Transport Facility</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Message / Specific Question <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention student's current grade, academic background, or specific questions..."
                      className="w-full px-3.5 py-2.5 rounded-md border border-slate-300 bg-white text-slate-900 text-xs focus:ring-2 focus:ring-blue-950 focus:border-transparent transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 bg-blue-950 hover:bg-blue-900 text-white font-bold text-xs uppercase tracking-wider rounded-md transition-colors cursor-pointer flex items-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>{isSubmitting ? 'Submitting...' : 'Submit Official Inquiry'}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
