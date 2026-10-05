import { AcademicWing } from '../types/institution';

export const ACADEMIC_WINGS: AcademicWing[] = [
  {
    id: "cbse-wing",
    title: "S.R.N. Mehta CBSE Public School",
    code: "CBSE-830349",
    subtitle: "National Curriculum with Global Competence (Pre-KG to Grade X)",
    description: "Affiliated with the Central Board of Secondary Education (CBSE), New Delhi. Focuses on conceptual clarity, experiential science experiments, English communicative mastery, mathematics labs, coding literacy, and holistic life-skill integration.",
    gradeSpan: "Pre-KG to Grade 10",
    affiliation: "CBSE Affiliation No. 830349 (School Code: 45308)",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/Master-image-school-2.jpeg",
    curriculumOverview: "National Education Policy (NEP 2020) aligned framework integrating STEM inquiry, continuous comprehensive evaluation, coding, life skills, sports training, and moral ethics.",
    programsOffered: [
      {
        name: "Early Childhood (Pre-KG, LKG, UKG)",
        focus: "Montessori-inspired activity lab, phonics, sensory splash pool, motor skill development",
        eligibility: "Age 3+ as of June 1st",
        duration: "3 Years"
      },
      {
        name: "Primary & Middle School (Grades 1 to 8)",
        focus: "NCERT core curriculum, mental arithmetic, robotics/science expo participation, second language options (Kannada/Hindi), NCC orientation",
        eligibility: "Previous grade completion",
        duration: "8 Years"
      },
      {
        name: "Secondary School (Grades 9 & 10)",
        focus: "CBSE Board exam mastery, ETutor computerized test simulations, intensive science practicals, leadership CCA (Mock Parliament, Shark Tank)",
        eligibility: "Grade 8 completion from recognized board",
        duration: "2 Years"
      }
    ],
    highlights: [
      "100% CBSE Class X Board distinction rate with multiple state toppers",
      "Interactive Smart Classrooms with digital AV curriculum modules",
      "Dedicated ETutor Computer Examination Terminal Lab",
      "Specialized Kindergarten Activity Lab and safe Splash Pool",
      "Compulsory physical education, Karate, Skating, Table Tennis, and Chess"
    ],
    keyFeatures: [
      "Individual student mentorship & remedial support",
      "Annual Science Expo & Model United Nations / Mock Parliament",
      "Regular Parent-Teacher Interaction & digital progress monitoring",
      "Spacious reading library with 10,000+ titles and educational periodicals"
    ]
  },
  {
    id: "state-wing",
    title: "S.R.N. Mehta Karnataka State Board School",
    code: "KSEEB-HIGH",
    subtitle: "Karnataka Secondary Education Board (English & Regional Medium)",
    description: "Delivering rigorous Karnataka State Syllabus with strong foundations in science, regional cultural values, languages, mathematics, and high SSLC merit track records.",
    gradeSpan: "Grade 1 to Grade 10 (SSLC)",
    affiliation: "Karnataka School Examination and Assessment Board (KSEAB)",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/08/state-board-campus.jpg",
    curriculumOverview: "Karnataka State Textbook Society syllabus enhanced with modern laboratory experiments, digital smart boards, and continuous competitive examination practice.",
    programsOffered: [
      {
        name: "State Primary & Higher Primary",
        focus: "Foundational literacy, numeracy, Karnataka cultural heritage, environmental science",
        eligibility: "Direct admission as per state norms",
        duration: "7 Years"
      },
      {
        name: "SSLC Secondary Wing (Grades 8 to 10)",
        focus: "State Board SSLC examination preparation, special focus on English fluency, Science labs",
        eligibility: "Pass in Grade 7 / Transfer certificate",
        duration: "3 Years"
      }
    ],
    highlights: [
      "Consistently ranked among Top 10 State Board Schools in India by Education Today",
      "100% SSLC pass percentage with high distinction rates year after year",
      "Full access to specialized central science labs and sports infrastructure",
      "Affordable fee structure with generous merit-based scholarships"
    ],
    keyFeatures: [
      "Daily revision modules and state model question bank solving",
      "Co-curricular music, drama, Kannada Rajyotsava celebrations, and sports meets",
      "Free remedial evening classes for board exam candidates"
    ]
  },
  {
    id: "pu-college",
    title: "S.R.N. Mehta Composite Pre-University College",
    code: "PUC-SCIENCE-COMMERCE",
    subtitle: "Two-Year Pre-University with Integrated NEET / IIT-JEE / KCET / CA-CPT Coaching",
    description: "The premier launchpad for aspiring doctors, engineers, chartered accountants, and civil servants in North Karnataka. Offers specialized Science (PCMB, PCMC, PCME) and Commerce (EBAC, HEBA) streams paired with national entrance exam coaching.",
    gradeSpan: "1st & 2nd PUC (Class 11 & 12)",
    affiliation: "Department of Pre-University Education, Government of Karnataka",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/03/SRN-Mehta-PU-Copy-scaled.jpg",
    curriculumOverview: "NCERT-aligned Pre-University syllabus coupled with rigorous dual-track competitive coaching by senior faculty specialists from top coaching centers.",
    programsOffered: [
      {
        name: "Science Stream (PCMB - Physics, Chem, Math, Bio)",
        focus: "Targeted NEET (Medical) & KCET preparation with daily practice problem sets and OMR mock tests",
        eligibility: "SSLC / Class 10 with high Science & Math percentage",
        duration: "2 Years"
      },
      {
        name: "Science Stream (PCMC / PCME - Comp. Sci / Electronics)",
        focus: "Targeted IIT-JEE Mains & Advanced, KCET engineering entrance mastery, coding labs",
        eligibility: "SSLC / Class 10 with Math & Science aptitude",
        duration: "2 Years"
      },
      {
        name: "Commerce Stream (EBAC - Economics, Bus. Studies, Accountancy, Comp. Sci)",
        focus: "Integrated CA-CPT / Foundation, CS, CMA, CUET preparation, and digital accounting tally labs",
        eligibility: "SSLC / Class 10 pass in any stream",
        duration: "2 Years"
      }
    ],
    highlights: [
      "Proven track record of MBBS and premier engineering government seat allotments",
      "Air-conditioned computer terminal room for online test series (NTA pattern)",
      "Experienced postgraduate faculty with over 15+ years coaching pedigree",
      "Special counseling, doubt clearance hours, and mental wellness guidance"
    ],
    keyFeatures: [
      "Weekly All-India ranking mock exams with detailed analytics",
      "Air-conditioned study halls and rich reference library",
      "Separate campus environment with strict academic discipline"
    ]
  },
  {
    id: "degree-college",
    title: "S.R.N. Mehta Degree College (BCA & B.Com)",
    code: "DEGREE-GUG",
    subtitle: "Undergraduate IT & Commerce Excellence in Kalaburagi",
    description: "Affiliated with Gulbarga University, Kalaburagi. Provides specialized bachelor degree education in Computer Applications (BCA) and Commerce (B.Com) with 120+ workstation computing labs, Tally ERP software, soft-skills workshops, placement training, and bank internships.",
    gradeSpan: "Undergraduate (3 & 4 Year NEP Degree)",
    affiliation: "Affiliated to Gulbarga University, Kalaburagi",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2025/02/Master-image-college-3-scaled.jpg",
    curriculumOverview: "National Education Policy (NEP) multi-disciplinary undergraduate curriculum with mandatory internship projects, coding hackathons, accounting simulation software, and corporate campus placement training.",
    programsOffered: [
      {
        name: "Bachelor of Computer Applications (BCA)",
        focus: "Full-stack development, Python, Java, Artificial Intelligence, Cloud Computing, DBMS, Networking, Cyber Security",
        eligibility: "10+2 / 2nd PUC in Science or Commerce",
        duration: "3-4 Years (NEP)"
      },
      {
        name: "Bachelor of Commerce (B.Com)",
        focus: "Advanced financial accounting, taxation, GST laws, banking operations, corporate law, Tally ERP",
        eligibility: "10+2 / 2nd PUC in any discipline (Commerce preferred)",
        duration: "3-4 Years (NEP)"
      }
    ],
    highlights: [
      "Specialized 120-workstation high-speed computer programming and AI testing lab",
      "MoU with leading financial and IT companies for student internships",
      "Dedicated Placement & Career Guidance Cell with personality development sessions",
      "Regular Industrial Visits to software companies, manufacturing units, and commercial banks"
    ],
    keyFeatures: [
      "High university examination pass percentages with distinction merit ranks",
      "State-of-the-art computer labs with 200 Mbps fiber connectivity",
      "Active alumni network supporting campus mentorship and job opportunities"
    ]
  }
];
