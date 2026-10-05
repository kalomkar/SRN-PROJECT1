export interface InstitutionInfo {
  name: string;
  shortName: string;
  tagline: string;
  motto: string;
  trustName: string;
  establishedYear: number;
  cbseAffiliationNo: string;
  schoolCode: string;
  location: {
    city: string;
    state: string;
    pincode: string;
    country: string;
    address: string;
    landmark: string;
    googleMapsEmbedUrl: string;
  };
  contact: {
    phone: string;
    alternatePhone: string;
    email: string;
    officeHours: string;
    admissionsHelpline: string;
  };
  accreditations: Array<{
    title: string;
    authority: string;
    year: string;
    badgeUrl?: string;
  }>;
}

export interface MetricItem {
  id: string;
  label: string;
  value: string;
  suffix?: string;
  description: string;
}

export interface AcademicWing {
  id: string;
  title: string;
  code: string;
  subtitle: string;
  description: string;
  gradeSpan: string;
  affiliation: string;
  highlights: string[];
  imageUrl: string;
  curriculumOverview: string;
  programsOffered: Array<{
    name: string;
    focus: string;
    eligibility: string;
    duration: string;
  }>;
  keyFeatures: string[];
}

export interface FacilityItem {
  id: string;
  title: string;
  category: 'Laboratories' | 'Sports & Fitness' | 'Campus Life' | 'Digital Infrastructure' | 'Safety & Wellness';
  shortDesc: string;
  fullDesc: string;
  imageUrl: string;
  keySpecs: string[];
  equipmentHighlights: string[];
  safetyFeatures?: string[];
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  category: 'Academic' | 'Cultural' | 'Sports' | 'Civic & Leadership' | 'Excursion' | 'Community Service';
  date: string;
  formattedDate: string;
  time?: string;
  location: string;
  imageUrl: string;
  galleryImages?: string[];
  summary: string;
  fullDescription: string;
  outcomes?: string[];
  targetAudience: string;
  featured?: boolean;
}

export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  category: 'Board Results' | 'Accolades' | 'Admissions' | 'Circular' | 'Careers';
  publishDate: string;
  formattedDate: string;
  imageUrl: string;
  summary: string;
  fullContent: string[];
  author: string;
  featured?: boolean;
  documentDownloadUrl?: string;
}

export interface GalleryMedia {
  id: string;
  title: string;
  category: 'Campus & Infrastructure' | 'Laboratories' | 'Science & Tech' | 'Sports & Swimming' | 'Cultural & Events' | 'Civic & Field Visits';
  imageUrl: string;
  caption: string;
  altText: string;
  aspectRatio?: 'landscape' | 'portrait' | 'square';
}

export interface TestimonialItem {
  id: string;
  parentName: string;
  childGrade: string;
  videoUrl?: string;
  posterUrl: string;
  quote: string;
  transcript: string;
  focusArea: string;
}

export interface FacultyProfile {
  id: string;
  name: string;
  designation: string;
  department: string;
  qualification: string;
  experience: string;
  imageUrl: string;
  message?: string;
}

export interface AdmissionInquiry {
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  targetWing: 'CBSE School' | 'State Board School' | 'PU College Science' | 'PU College Commerce' | 'Degree College';
  currentGrade: string;
  city: string;
  message?: string;
}
