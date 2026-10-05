import React, { useState } from 'react';
import { 
  MapPin, Phone, Mail, Clock, Send, CheckCircle, 
  Building2, MessageSquare, User, ShieldCheck, Sparkles 
} from 'lucide-react';
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
      {/* Banner */}
      <section className="bg-slate-900 text-white py-16 lg:py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold block">
              Direct Communication & Campus Desk
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Contact S.R.N. Mehta Institutions
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
              Connect with our admissions desk, administrative office, principal's secretariat, or schedule an in-person guided campus visit in Kalaburagi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Coordinates & Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <span className="text-xs uppercase tracking-widest text-blue-900 font-bold block mb-1">
                  Institutional Headquarters
                </span>
                <h2 className="font-display text-2xl font-bold text-slate-900">
                  Campus Office & Visiting Hours
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Located strategically near the High Court Bench and Ring Road in Kalaburagi, offering easy transit connectivity from all parts of the city.
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <MapPin className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Campus Address:</strong>
                    <span className="text-slate-600 leading-relaxed block mt-0.5">
                      {INSTITUTION.location.address}, {INSTITUTION.location.landmark}, {INSTITUTION.location.city}, {INSTITUTION.location.state} - {INSTITUTION.location.pincode}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <Phone className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Direct Telephone Lines:</strong>
                    <div className="text-slate-600 space-y-0.5 mt-0.5">
                      <div>Administrative Desk: {INSTITUTION.contact.phone}</div>
                      <div>Admissions Hotline: {INSTITUTION.contact.alternatePhone}</div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <Mail className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Official Email Address:</strong>
                    <a href={`mailto:${INSTITUTION.contact.email}`} className="text-blue-900 hover:underline block mt-0.5">
                      {INSTITUTION.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-slate-50 border border-slate-200 rounded-xl">
                  <Clock className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-semibold">Office Timings:</strong>
                    <span className="text-slate-600 block mt-0.5">{INSTITUTION.contact.officeHours}</span>
                  </div>
                </div>
              </div>

              {/* Trust Information */}
              <div className="p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl text-xs text-amber-950 space-y-1">
                <div className="font-bold flex items-center gap-1 text-amber-900">
                  <Building2 className="w-4 h-4" />
                  <span>Governing Trust: {INSTITUTION.trustName}</span>
                </div>
                <p className="text-amber-800">
                  CBSE Affiliation Code: 830349 · School Code: 45308
                </p>
              </div>
            </div>

            {/* Right Column: Interactive Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Send an Inquiry / Message
                </h3>
                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  Have questions about student admissions, curriculum, bus routes, or fee structures? Fill out the form below for an official reply.
                </p>

                {submitted ? (
                  <div className="py-8 text-center space-y-4 bg-white rounded-xl border border-emerald-200 p-6">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h4 className="font-display font-bold text-lg text-slate-900">
                      Message Dispatched Successfully!
                    </h4>
                    <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                      Thank you for contacting SRN Mehta Institutions. Our administrative front desk will review your inquiry regarding <strong>{formData.subject}</strong> and reach back promptly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-5 py-2 bg-blue-900 text-white text-xs font-semibold rounded-lg hover:bg-blue-800 transition-colors cursor-pointer"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Your Full Name *
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                          <input
                            type="text"
                            required
                            placeholder="e.g. Ramesh Kulkarni"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Phone Number *
                        </label>
                        <div className="relative">
                          <Phone className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                          <input
                            type="tel"
                            required
                            pattern="[0-9]{10}"
                            placeholder="e.g. 9448123456"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none bg-white"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                          <input
                            type="email"
                            required
                            placeholder="name@domain.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none bg-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          Subject / Nature of Inquiry *
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none bg-white"
                        >
                          <option value="General Inquiry">General Campus Inquiry</option>
                          <option value="CBSE School Admission">CBSE School Admission (Pre-KG - Class 10)</option>
                          <option value="State Board School">Karnataka State Board School</option>
                          <option value="PU College Science NEET/JEE">PU College (Science - NEET / IIT-JEE)</option>
                          <option value="PU College Commerce">PU College (Commerce - CA-CPT)</option>
                          <option value="Degree College">Degree College Admissions</option>
                          <option value="Transport & Bus Route">Transport / Bus Route Query</option>
                          <option value="Faculty Application">Faculty / Career Application</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">
                        Your Detailed Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="Please write your detailed query here..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-3 py-2 text-xs border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 outline-none bg-white"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-3 bg-blue-900 hover:bg-blue-800 text-white font-semibold rounded-lg text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-md disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <span>Transmitting Message...</span>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-amber-400" />
                            <span>Dispatch Inquiry to Campus Desk</span>
                          </>
                        )}
                      </button>
                    </div>

                    <p className="text-[11px] text-slate-500 text-center">
                      Official communication verified. No promotional spam will be sent.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Section */}
      <section aria-label="Campus Location Map" className="bg-slate-100 py-12 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-blue-900 font-bold uppercase tracking-wider">
                <MapPin className="w-4 h-4 text-amber-600" />
                <span>Google Maps Location · Kalaburagi, Karnataka</span>
              </div>
              <span className="text-[11px] text-slate-500">Coordinates: Sedam Ring Road Cross</span>
            </div>
            <div className="aspect-[21/9] sm:aspect-[24/8] w-full rounded-xl overflow-hidden border border-slate-200">
              <iframe
                title="SRN Mehta Institutions Location Map"
                src="https://maps.google.com/maps?q=SRN+Mehta+School+Kalaburagi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
