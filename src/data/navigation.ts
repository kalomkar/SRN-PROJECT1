export interface NavLinkItem {
  label: string;
  path: string;
  badge?: string;
  children?: Array<{
    label: string;
    path: string;
    description?: string;
  }>;
}

export const MAIN_NAV_LINKS: NavLinkItem[] = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { 
    label: "Academics", 
    path: "/academics",
    children: [
      { label: "CBSE", path: "/academics/cbse", description: "Pre-KG to Class 10 · CBSE Affiliation No. 830349" },
      { label: "STATE BOARD", path: "/academics/state-board", description: "Grade 1 to 10 SSLC · KSEAB Board" },
      { label: "PU COLLEGE", path: "/academics/pu-college", description: "Science (NEET/JEE) & Commerce (CA-CPT)" },
      { label: "DEGREE COLLEGE", path: "/academics/degree-college", description: "BCA & B.Com · Gulbarga University" }
    ]
  },
  {
    label: "Departments",
    path: "/departments/computer-applications",
    children: [
      { label: "Computer Applications (BCA)", path: "/departments/computer-applications", description: "AI, Full-Stack, Cloud & Computing Labs" },
      { label: "Commerce (B.Com)", path: "/departments/commerce", description: "Corporate Accounting, Taxation & Fintech" },
      { label: "Mathematics", path: "/departments/mathematics", description: "Discrete Math, Numerical Methods & Logic" },
      { label: "English", path: "/departments/english", description: "Communicative Competence & Business English" },
      { label: "Kannada (ಕನ್ನಡ)", path: "/departments/kannada", description: "Vachana Sahitya, Heritage & Admin Kannada" },
      { label: "Hindi (हिंदी)", path: "/departments/hindi", description: "National Language, Literature & Translation" }
    ]
  },
  { label: "Facilities", path: "/facilities" },
  { label: "Faculty", path: "/faculty" },
  { label: "Events", path: "/events" },
  { label: "Gallery", path: "/gallery" },
  { label: "News", path: "/news" },
  { label: "Contact", path: "/contact" }
];

export const ACADEMIC_QUICK_LINKS = [
  { label: "CBSE School (Pre-KG to X)", path: "/academics/cbse" },
  { label: "Karnataka State Board High School", path: "/academics/state-board" },
  { label: "PU College (NEET / JEE / CA-CPT)", path: "/academics/pu-college" },
  { label: "S.R.N. Mehta Degree College (BCA & B.Com)", path: "/academics/degree-college" },
  { label: "Department of Computer Applications (BCA)", path: "/departments/computer-applications" },
  { label: "Department of Commerce (B.Com)", path: "/departments/commerce" },
  { label: "Department of Mathematics", path: "/departments/mathematics" },
  { label: "Department of English", path: "/departments/english" },
  { label: "Department of Kannada", path: "/departments/kannada" },
  { label: "Department of Hindi", path: "/departments/hindi" }
];

export const CAMPUS_FACILITY_LINKS = [
  { label: "Advanced Physics & Chem Labs", path: "/facilities#physics-lab" },
  { label: "Biology & Life Sciences Lab", path: "/facilities#biology-lab" },
  { label: "Central Knowledge Library", path: "/facilities#central-library" },
  { label: "NCC Cadets Parade Unit", path: "/facilities#ncc-unit" },
  { label: "Splash Pool & Aquatic Area", path: "/facilities#splash-pool" },
  { label: "Solar Powered Green Campus", path: "/facilities#green-campus" }
];
