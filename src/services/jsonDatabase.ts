import defaultDatabase from '../data/db/database.json';

export interface AdmissionInquiryRecord {
  id: string;
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  targetWing: 'CBSE School' | 'State Board School' | 'PU College Science' | 'PU College Commerce' | 'Degree College';
  currentGrade: string;
  city: string;
  message?: string;
  status: 'New' | 'Contacted' | 'Enrolled' | 'Archived';
  createdAt: string;
}

export interface ContactMessageRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'Unread' | 'Responded' | 'Archived';
  createdAt: string;
}

export interface JsonDatabaseSchema {
  version: string;
  lastUpdated: string;
  institution: typeof defaultDatabase.institution;
  academic_wings: typeof defaultDatabase.academic_wings;
  departments: typeof defaultDatabase.departments;
  admissions_inquiries: AdmissionInquiryRecord[];
  contact_messages: ContactMessageRecord[];
}

const STORAGE_KEY = 'srn_mehta_json_database_v1';

class JsonDatabaseService {
  private cache: JsonDatabaseSchema | null = null;

  constructor() {
    this.init();
  }

  private init(): JsonDatabaseSchema {
    if (typeof window === 'undefined') {
      return defaultDatabase as unknown as JsonDatabaseSchema;
    }

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        this.cache = JSON.parse(stored);
        return this.cache!;
      }
    } catch (e) {
      console.warn('Failed to read database from localStorage, using seed JSON:', e);
    }

    // Default to seed JSON
    this.cache = JSON.parse(JSON.stringify(defaultDatabase)) as JsonDatabaseSchema;
    this.saveToStorage();
    return this.cache;
  }

  private saveToStorage(): void {
    if (typeof window === 'undefined' || !this.cache) return;
    try {
      this.cache.lastUpdated = new Date().toISOString();
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.cache, null, 2));
      // Dispatch storage event for real-time reactivity in open tabs
      window.dispatchEvent(new Event('srn_database_updated'));
    } catch (e) {
      console.error('Failed to write JSON database to storage:', e);
    }
  }

  public getDatabase(): JsonDatabaseSchema {
    if (!this.cache) {
      this.init();
    }
    return JSON.parse(JSON.stringify(this.cache));
  }

  // --- ADMISSION INQUIRIES CRUD ---
  public getInquiries(): AdmissionInquiryRecord[] {
    return this.getDatabase().admissions_inquiries || [];
  }

  public addInquiry(data: Omit<AdmissionInquiryRecord, 'id' | 'createdAt' | 'status'>): AdmissionInquiryRecord {
    const db = this.getDatabase();
    const newRecord: AdmissionInquiryRecord = {
      ...data,
      id: `INQ-${new Date().getFullYear()}-${String(Math.floor(100 + Math.random() * 900))}`,
      status: 'New',
      createdAt: new Date().toISOString()
    };

    if (!db.admissions_inquiries) {
      db.admissions_inquiries = [];
    }

    db.admissions_inquiries.unshift(newRecord);
    this.cache = db;
    this.saveToStorage();
    return newRecord;
  }

  public updateInquiryStatus(id: string, status: AdmissionInquiryRecord['status']): boolean {
    const db = this.getDatabase();
    const idx = db.admissions_inquiries.findIndex((item) => item.id === id);
    if (idx !== -1) {
      db.admissions_inquiries[idx].status = status;
      this.cache = db;
      this.saveToStorage();
      return true;
    }
    return false;
  }

  public deleteInquiry(id: string): boolean {
    const db = this.getDatabase();
    const prevLen = db.admissions_inquiries.length;
    db.admissions_inquiries = db.admissions_inquiries.filter((item) => item.id !== id);
    if (db.admissions_inquiries.length !== prevLen) {
      this.cache = db;
      this.saveToStorage();
      return true;
    }
    return false;
  }

  // --- CONTACT MESSAGES CRUD ---
  public getContactMessages(): ContactMessageRecord[] {
    return this.getDatabase().contact_messages || [];
  }

  public addContactMessage(data: Omit<ContactMessageRecord, 'id' | 'createdAt' | 'status'>): ContactMessageRecord {
    const db = this.getDatabase();
    const newRecord: ContactMessageRecord = {
      ...data,
      id: `MSG-${new Date().getFullYear()}-${String(Math.floor(100 + Math.random() * 900))}`,
      status: 'Unread',
      createdAt: new Date().toISOString()
    };

    if (!db.contact_messages) {
      db.contact_messages = [];
    }

    db.contact_messages.unshift(newRecord);
    this.cache = db;
    this.saveToStorage();
    return newRecord;
  }

  public updateContactStatus(id: string, status: ContactMessageRecord['status']): boolean {
    const db = this.getDatabase();
    const idx = db.contact_messages.findIndex((item) => item.id === id);
    if (idx !== -1) {
      db.contact_messages[idx].status = status;
      this.cache = db;
      this.saveToStorage();
      return true;
    }
    return false;
  }

  public deleteContactMessage(id: string): boolean {
    const db = this.getDatabase();
    const prevLen = db.contact_messages.length;
    db.contact_messages = db.contact_messages.filter((item) => item.id !== id);
    if (db.contact_messages.length !== prevLen) {
      this.cache = db;
      this.saveToStorage();
      return true;
    }
    return false;
  }

  // --- EXPORT / IMPORT JSON ---
  public exportDatabaseAsJSONFile(): void {
    if (typeof window === 'undefined') return;
    const dbData = this.getDatabase();
    const jsonString = JSON.stringify(dbData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().split('T')[0];
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `srn_mehta_database_${dateStr}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  public exportInquiriesAsCSV(): void {
    if (typeof window === 'undefined') return;
    const inquiries = this.getInquiries();
    if (inquiries.length === 0) return;

    const headers = ['ID', 'Student Name', 'Parent Name', 'Phone', 'Email', 'Target Wing', 'Grade', 'City', 'Status', 'Date', 'Message'];
    const rows = inquiries.map((inq) => [
      inq.id,
      `"${inq.studentName.replace(/"/g, '""')}"`,
      `"${inq.parentName.replace(/"/g, '""')}"`,
      `"${inq.phone}"`,
      `"${inq.email}"`,
      `"${inq.targetWing}"`,
      `"${inq.currentGrade}"`,
      `"${inq.city}"`,
      `"${inq.status}"`,
      `"${new Date(inq.createdAt).toLocaleDateString()}"`,
      `"${(inq.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().split('T')[0];
    
    const a = document.createElement('a');
    a.href = url;
    a.download = `admission_inquiries_${dateStr}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  public importDatabaseFromJSON(jsonText: string): boolean {
    try {
      const parsed = JSON.parse(jsonText) as JsonDatabaseSchema;
      if (parsed && parsed.institution && parsed.academic_wings) {
        this.cache = parsed;
        this.saveToStorage();
        return true;
      }
    } catch (e) {
      console.error('Invalid JSON database format:', e);
    }
    return false;
  }

  public resetDatabase(): void {
    this.cache = JSON.parse(JSON.stringify(defaultDatabase)) as JsonDatabaseSchema;
    this.saveToStorage();
  }
}

export const jsonDatabase = new JsonDatabaseService();
