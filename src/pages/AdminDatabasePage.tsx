import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Database, Download, FileText, RefreshCw, Trash2, 
  CheckCircle, Search, Filter, Phone, Mail, User, 
  GraduationCap, Building2, Copy, Check, Eye, ChevronRight,
  ShieldCheck, AlertCircle
} from 'lucide-react';
import { jsonDatabase, AdmissionInquiryRecord, ContactMessageRecord, JsonDatabaseSchema } from '../services/jsonDatabase';
import { INSTITUTION } from '../data/institution';

export const AdminDatabasePage: React.FC = () => {
  const [dbState, setDbState] = useState<JsonDatabaseSchema>(() => jsonDatabase.getDatabase());
  const [activeTab, setActiveTab] = useState<'inquiries' | 'messages' | 'raw_json' | 'collections'>('inquiries');
  const [searchQuery, setSearchQuery] = useState('');
  const [wingFilter, setWingFilter] = useState('All');
  const [copied, setCopied] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);

  // Sync state when storage changes
  useEffect(() => {
    const handleUpdate = () => {
      setDbState(jsonDatabase.getDatabase());
    };
    window.addEventListener('srn_database_updated', handleUpdate);
    return () => window.removeEventListener('srn_database_updated', handleUpdate);
  }, []);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleInquiryStatusChange = (id: string, newStatus: AdmissionInquiryRecord['status']) => {
    jsonDatabase.updateInquiryStatus(id, newStatus);
    setDbState(jsonDatabase.getDatabase());
    showNotification(`Inquiry status updated to ${newStatus}`);
  };

  const handleDeleteInquiry = (id: string) => {
    if (window.confirm('Are you sure you want to remove this admission inquiry record?')) {
      jsonDatabase.deleteInquiry(id);
      setDbState(jsonDatabase.getDatabase());
      showNotification('Inquiry record deleted.');
    }
  };

  const handleMessageStatusChange = (id: string, newStatus: ContactMessageRecord['status']) => {
    jsonDatabase.updateContactStatus(id, newStatus);
    setDbState(jsonDatabase.getDatabase());
    showNotification(`Message marked as ${newStatus}`);
  };

  const handleDeleteMessage = (id: string) => {
    if (window.confirm('Delete this contact message?')) {
      jsonDatabase.deleteContactMessage(id);
      setDbState(jsonDatabase.getDatabase());
      showNotification('Contact message removed.');
    }
  };

  const handleCopyJSON = () => {
    navigator.clipboard.writeText(JSON.stringify(dbState, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    showNotification('JSON database copied to clipboard.');
  };

  const handleResetDatabase = () => {
    if (window.confirm('Reset database to default seed state? Any new test inquiries will be cleared.')) {
      jsonDatabase.resetDatabase();
      setDbState(jsonDatabase.getDatabase());
      showNotification('Database reset to default seed records.');
    }
  };

  // Filtered Inquiries
  const inquiries = dbState.admissions_inquiries || [];
  const filteredInquiries = inquiries.filter((inq) => {
    const matchesSearch = 
      inq.studentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.parentName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      inq.phone.includes(searchQuery) ||
      inq.id.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesWing = wingFilter === 'All' || inq.targetWing === wingFilter;
    return matchesSearch && matchesWing;
  });

  const messages = dbState.contact_messages || [];

  return (
    <div className="space-y-0 bg-slate-50 min-h-screen">
      {/* 1. Admin Header Banner */}
      <section className="bg-[#0a1120] text-white py-12 lg:py-16 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <Database className="w-4 h-4" />
                <span>JSON Database Engine & Lead Portal</span>
              </div>
              <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white">
                SRN Mehta Institutional Database
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 font-sans">
                JSON-backed data storage for admissions, contact queries, academic curricula, verified faculty, and accreditations.
              </p>
            </div>

            {/* Top Action Buttons */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => jsonDatabase.exportDatabaseAsJSONFile()}
                className="px-4 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider rounded-md transition-colors shadow-sm flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Export database.json</span>
              </button>

              <button
                onClick={() => jsonDatabase.exportInquiriesAsCSV()}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded-md transition-colors border border-white/20 flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Export CSV</span>
              </button>

              <button
                onClick={handleResetDatabase}
                className="p-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-md transition-colors border border-slate-700 cursor-pointer"
                title="Reset Database to Seed State"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Notification Toast */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-lg shadow-xl border border-slate-700 flex items-center gap-2 text-xs font-medium animate-fade-in">
          <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{notification}</span>
        </div>
      )}

      {/* 2. Database KPI Metrics Strip */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block">
                Total Admissions Leads
              </span>
              <div className="text-2xl font-bold font-mono text-blue-950 mt-1">
                {inquiries.length}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block">
                Contact Messages
              </span>
              <div className="text-2xl font-bold font-mono text-amber-600 mt-1">
                {messages.length}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block">
                Academic Wings
              </span>
              <div className="text-2xl font-bold font-mono text-slate-900 mt-1">
                {dbState.academic_wings?.length || 4}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block">
                Degree Departments
              </span>
              <div className="text-2xl font-bold font-mono text-slate-900 mt-1">
                {dbState.departments?.length || 6}
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 col-span-2 md:col-span-1">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500 block">
                Storage Engine
              </span>
              <div className="text-xs font-bold text-emerald-700 mt-1 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>JSON LocalDB (Live)</span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono block mt-0.5">
                v{dbState.version}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Main Database Navigation & Records View */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Navigation Tabs */}
          <div className="flex items-center gap-2 border-b border-slate-200 pb-3 overflow-x-auto no-scrollbar">
            <button
              onClick={() => setActiveTab('inquiries')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'inquiries'
                  ? 'bg-blue-950 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Admission Inquiries ({inquiries.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('messages')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'messages'
                  ? 'bg-blue-950 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Mail className="w-4 h-4" />
              <span>Contact Messages ({messages.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('raw_json')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'raw_json'
                  ? 'bg-blue-950 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>Raw JSON Database</span>
            </button>

            <button
              onClick={() => setActiveTab('collections')}
              className={`px-4 py-2 rounded-md text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-2 ${
                activeTab === 'collections'
                  ? 'bg-blue-950 text-white'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>Institutional Entities</span>
            </button>
          </div>

          {/* TAB 1: ADMISSION INQUIRIES */}
          {activeTab === 'inquiries' && (
            <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-xs space-y-4 p-6">
              {/* Filter & Search Bar */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="relative flex-1 max-w-md">
                  <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    placeholder="Search by student, parent, phone, or ID..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-xs focus:ring-2 focus:ring-blue-950 outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <Filter className="w-4 h-4 text-slate-500" />
                  <span className="text-xs text-slate-600 font-medium">Wing:</span>
                  <select
                    value={wingFilter}
                    onChange={(e) => setWingFilter(e.target.value)}
                    className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-md text-xs text-slate-800 outline-none focus:ring-2 focus:ring-blue-950"
                  >
                    <option value="All">All Wings ({inquiries.length})</option>
                    <option value="CBSE School">CBSE School</option>
                    <option value="State Board School">State Board School</option>
                    <option value="PU College Science">PU College Science</option>
                    <option value="PU College Commerce">PU College Commerce</option>
                    <option value="Degree College">Degree College</option>
                  </select>
                </div>
              </div>

              {/* Inquiries Table */}
              {filteredInquiries.length === 0 ? (
                <div className="py-12 text-center text-slate-500 space-y-2">
                  <GraduationCap className="w-10 h-10 text-slate-300 mx-auto" />
                  <p className="text-sm font-semibold">No admission inquiries match your search.</p>
                  <p className="text-xs text-slate-400">New applications submitted through the Admission Modal will appear here in real-time.</p>
                </div>
              ) : (
                <div className="overflow-x-auto rounded border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-900 font-bold">
                        <th className="py-3 px-3 w-28">Inquiry ID</th>
                        <th className="py-3 px-4">Student & Parent</th>
                        <th className="py-3 px-4">Target Wing & Grade</th>
                        <th className="py-3 px-4">Contact Coordinates</th>
                        <th className="py-3 px-3">Date</th>
                        <th className="py-3 px-3">Status</th>
                        <th className="py-3 px-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {filteredInquiries.map((inq) => (
                        <tr key={inq.id} className="hover:bg-slate-50/80 transition-colors">
                          <td className="py-3 px-3 font-mono font-bold text-blue-950">
                            {inq.id}
                          </td>
                          <td className="py-3 px-4 space-y-0.5">
                            <div className="font-bold text-slate-900">{inq.studentName}</div>
                            <div className="text-[11px] text-slate-500">Parent: {inq.parentName}</div>
                          </td>
                          <td className="py-3 px-4 space-y-0.5">
                            <span className="font-semibold text-amber-800">{inq.targetWing}</span>
                            <div className="text-[11px] text-slate-500">Grade: {inq.currentGrade}</div>
                          </td>
                          <td className="py-3 px-4 space-y-0.5">
                            <a
                              href={`tel:${inq.phone}`}
                              className="font-mono text-blue-950 hover:underline flex items-center gap-1"
                            >
                              <Phone className="w-3 h-3 text-amber-600" />
                              <span>{inq.phone}</span>
                            </a>
                            <div className="text-[11px] text-slate-500 truncate max-w-[160px]">{inq.email}</div>
                          </td>
                          <td className="py-3 px-3 font-mono text-[11px] text-slate-500 whitespace-nowrap">
                            {new Date(inq.createdAt).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-3">
                            <select
                              value={inq.status}
                              onChange={(e) => handleInquiryStatusChange(inq.id, e.target.value as any)}
                              className={`px-2 py-1 rounded text-[11px] font-bold outline-none border cursor-pointer ${
                                inq.status === 'New'
                                  ? 'bg-blue-50 text-blue-900 border-blue-200'
                                  : inq.status === 'Contacted'
                                  ? 'bg-amber-50 text-amber-900 border-amber-200'
                                  : inq.status === 'Enrolled'
                                  ? 'bg-emerald-50 text-emerald-900 border-emerald-200'
                                  : 'bg-slate-100 text-slate-700 border-slate-200'
                              }`}
                            >
                              <option value="New">New</option>
                              <option value="Contacted">Contacted</option>
                              <option value="Enrolled">Enrolled</option>
                              <option value="Archived">Archived</option>
                            </select>
                          </td>
                          <td className="py-3 px-3 text-right">
                            <button
                              onClick={() => handleDeleteInquiry(inq.id)}
                              className="p-1.5 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded transition-colors cursor-pointer"
                              title="Delete inquiry"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: CONTACT MESSAGES */}
          {activeTab === 'messages' && (
            <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-display font-bold text-base text-slate-900">
                  Campus Communications & Desk Queries
                </h3>
                <span className="text-xs text-slate-500 font-mono">Total: {messages.length} messages</span>
              </div>

              {messages.length === 0 ? (
                <div className="py-12 text-center text-slate-500">
                  <Mail className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                  <p className="text-sm font-semibold">No contact desk messages yet.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className="p-4 rounded-lg border border-slate-200 bg-slate-50/50 hover:bg-slate-50 space-y-2"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono font-bold text-xs text-blue-950">{msg.id}</span>
                          <span className="text-slate-300">·</span>
                          <span className="font-bold text-xs text-slate-900">{msg.name}</span>
                          <span className="text-slate-300">·</span>
                          <span className="text-xs text-amber-800 font-semibold">{msg.subject}</span>
                        </div>

                        <div className="flex items-center gap-3">
                          <span className="text-[11px] font-mono text-slate-400">
                            {new Date(msg.createdAt).toLocaleString()}
                          </span>
                          <select
                            value={msg.status}
                            onChange={(e) => handleMessageStatusChange(msg.id, e.target.value as any)}
                            className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                              msg.status === 'Unread'
                                ? 'bg-amber-50 text-amber-900 border-amber-200'
                                : 'bg-emerald-50 text-emerald-900 border-emerald-200'
                            }`}
                          >
                            <option value="Unread">Unread</option>
                            <option value="Responded">Responded</option>
                            <option value="Archived">Archived</option>
                          </select>
                          <button
                            onClick={() => handleDeleteMessage(msg.id)}
                            className="text-slate-400 hover:text-red-600"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-slate-700 bg-white p-3 rounded border border-slate-200/80 leading-relaxed font-sans">
                        "{msg.message}"
                      </p>

                      <div className="text-[11px] text-slate-500 flex items-center gap-4">
                        <span>Phone: <strong className="font-mono text-slate-800">{msg.phone}</strong></span>
                        <span>Email: <strong className="text-slate-800">{msg.email}</strong></span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 3: RAW JSON DATABASE VIEW & EXPORT */}
          {activeTab === 'raw_json' && (
            <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900">
                    Live JSON Database Record
                  </h3>
                  <p className="text-xs text-slate-500">
                    Real-time JSON serialization of all institutional entities, admissions, and inquiries.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyJSON}
                    className="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied to Clipboard' : 'Copy JSON'}</span>
                  </button>

                  <button
                    onClick={() => jsonDatabase.exportDatabaseAsJSONFile()}
                    className="px-3.5 py-1.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-400" />
                    <span>Download .json</span>
                  </button>
                </div>
              </div>

              <div className="bg-[#0a1120] text-slate-200 rounded-lg p-4 font-mono text-xs overflow-x-auto max-h-[600px]">
                <pre>{JSON.stringify(dbState, null, 2)}</pre>
              </div>
            </div>
          )}

          {/* TAB 4: INSTITUTIONAL ENTITIES */}
          {activeTab === 'collections' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
                <h4 className="font-display font-bold text-base text-slate-900">
                  Academic Wings ({dbState.academic_wings?.length || 4})
                </h4>
                <div className="space-y-2">
                  {dbState.academic_wings?.map((wing) => (
                    <div key={wing.id} className="p-3 bg-slate-50 rounded border border-slate-200 text-xs">
                      <div className="font-bold text-blue-950">{wing.title}</div>
                      <div className="text-slate-500 mt-0.5">{wing.affiliation}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-lg border border-slate-200 p-6 space-y-4">
                <h4 className="font-display font-bold text-base text-slate-900">
                  Degree Departments ({dbState.departments?.length || 6})
                </h4>
                <div className="space-y-2">
                  {dbState.departments?.map((dept) => (
                    <div key={dept.id} className="p-3 bg-slate-50 rounded border border-slate-200 text-xs flex items-center justify-between">
                      <div>
                        <div className="font-bold text-slate-900">{dept.name}</div>
                        <div className="text-slate-500 mt-0.5">{dept.badge} · {dept.facultyList?.length || 0} Faculty</div>
                      </div>
                      <Link to={`/departments/${dept.id}`} className="text-blue-950 font-bold hover:underline">
                        View
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
