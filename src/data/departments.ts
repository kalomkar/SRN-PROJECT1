export interface DepartmentFaculty {
  slNo: number;
  name: string;
  designation: string;
  qualification: string;
  experience?: string;
  specialization?: string;
}

export interface DepartmentInfo {
  id: string;
  name: string;
  degreeName: string;
  shortName: string;
  wingId: string;
  badge: string;
  duration: string;
  affiliation: string;
  eligibility: string;
  overviewParagraphs: string[];
  objectives: string[];
  facultyList?: DepartmentFaculty[];
  curriculumHighlights: Array<{
    category: string;
    topics: string[];
  }>;
  emergingTechnologies?: string[];
  careerProspects: string[];
  labFacilities: string[];
  heroImageUrl: string;
}

export const DEPARTMENTS_DATA: DepartmentInfo[] = [
  {
    id: "computer-applications",
    name: "Department of BCA",
    degreeName: "Bachelor of Computer Applications (BCA)",
    shortName: "Computer Applications",
    wingId: "degree-college",
    badge: "Undergraduate IT Degree (NEP 2020)",
    duration: "3 - 4 Years (As per NEP guidelines)",
    affiliation: "Affiliated to Gulbarga University, Kalaburagi",
    eligibility: "10+2 / 2nd PUC in Science or Commerce (with Mathematics/Statistics/Computer Science preferred) or equivalent.",
    heroImageUrl: "https://srnmehtaschool.com/wp-content/uploads/2025/02/Master-image-college-3-scaled.jpg",
    overviewParagraphs: [
      "The Department of Bachelor of Computer Applications (BCA) aims to create skilled, innovative, and socially responsible computing professionals capable of addressing the challenges of the digital era. The department provides an academic environment that encourages curiosity, creativity, critical thinking, and continuous learning while maintaining high standards of professional ethics.",
      "The BCA programme is carefully designed to provide students with a comprehensive understanding of computer applications and modern software technologies. The curriculum combines theoretical concepts with practical implementation, enabling students to gain proficiency in programming, software design, database systems, networking, web technologies, operating systems, and application development. Learning is enriched through laboratory practice, project-based learning, technical activities, and collaborative assignments that strengthen problem-solving and decision-making abilities.",
      "Recognizing the rapidly changing technological landscape, the department exposes students to contemporary areas such as Artificial Intelligence, Cloud Computing, Cyber Security, Data Science, Internet of Things (IoT), Mobile Computing, and emerging digital technologies. Students are encouraged to explore these domains through value-added courses, technical workshops, certification programmes, and innovation-driven activities.",
      "The department believes that academic excellence extends beyond classroom learning. Regular interactions with industry professionals, technical experts, alumni, and researchers provide students with insights into current industry trends and professional expectations. Participation in seminars, coding competitions, hackathons, internships, and community outreach programmes helps students develop confidence, leadership qualities, and teamwork skills.",
      "The faculty members are committed to excellence in teaching, research, and mentoring. They actively engage in research publications, professional development programmes, and academic collaborations to ensure that students receive education aligned with current technological advancements and industry requirements.",
      "Graduates of the programme are equipped with the knowledge, technical competence, and professional skills required for careers in software development, application support, systems administration, cloud services, data management, cyber security, and emerging IT domains. The programme also lays a strong foundation for higher education, research, entrepreneurship, and lifelong professional growth."
    ],
    objectives: [
      "To provide a strong foundation in computer applications through quality teaching and practical learning.",
      "To develop analytical, logical, and computational thinking required to solve real-world problems.",
      "To equip students with contemporary technical skills that meet the evolving needs of the IT industry.",
      "To encourage innovation, creativity, research, and entrepreneurial thinking.",
      "To promote professional ethics, effective communication, teamwork, and leadership qualities.",
      "To strengthen industry readiness through projects, internships, technical training, and skill development programmes.",
      "To prepare students for higher education, research, competitive examinations, and successful professional careers."
    ],
    facultyList: [
      {
        slNo: 1,
        name: "Mr. Virupaksha M. Shastri",
        designation: "Professor - HOD",
        qualification: "MCA",
        experience: "15+ Years",
        specialization: "Data Structures, Database Management Systems, Cloud Computing"
      },
      {
        slNo: 2,
        name: "Smt. Ambika Ganapur",
        designation: "Asst. Prof",
        qualification: "MCA",
        experience: "8+ Years",
        specialization: "Java Programming, Web Technologies, Software Engineering"
      },
      {
        slNo: 3,
        name: "Mr. Sourabh Kulkarni",
        designation: "Asst. Prof",
        qualification: "MCA",
        experience: "6+ Years",
        specialization: "Python, Artificial Intelligence, Operating Systems"
      }
    ],
    curriculumHighlights: [
      {
        category: "Programming & Core Computing",
        topics: ["C / C++ Programming", "Java & Advanced Java", "Python for Data Science", "Data Structures & Algorithms"]
      },
      {
        category: "Software Design & Web Tech",
        topics: ["Full-Stack Web Development (HTML/CSS/JS/React)", "Database Management Systems (SQL / MongoDB)", "Software Engineering & Agile", "Object-Oriented System Design"]
      },
      {
        category: "Systems & Infrastructure",
        topics: ["Computer Networks & Protocols", "Operating Systems (Linux / Windows)", "Cloud Computing (AWS / Azure)", "Cyber Security & Cryptography"]
      },
      {
        category: "Emerging & Applied AI",
        topics: ["Machine Learning Basics", "Internet of Things (IoT)", "Mobile Application Development (Android/Flutter)", "Capstone Industrial Project"]
      }
    ],
    emergingTechnologies: [
      "Artificial Intelligence & Machine Learning",
      "Cloud Infrastructure & Virtualization",
      "Data Analytics & Big Data",
      "Cyber Defense & Ethical Hacking",
      "Internet of Things (IoT) & Smart Systems",
      "Mobile & Cross-Platform App Development"
    ],
    careerProspects: [
      "Software Engineer / Full-Stack Developer",
      "Data Analyst & Business Intelligence Specialist",
      "Cloud Support & DevOps Associate",
      "Database Administrator (DBA)",
      "Cyber Security & Network Administrator",
      "Quality Assurance & Test Automation Engineer",
      "Postgraduate Pathways: MCA, M.Sc (CS/IT), MBA (IT/Analytics)"
    ],
    labFacilities: [
      "120+ Intel Core high-performance computing workstations",
      "High-speed 200 Mbps dedicated optical fiber connectivity",
      "Linux and Windows dual-boot environments with Python, Java, SQL, and Node.js SDKs",
      "Dedicated server room with cloud virtualization testbed"
    ]
  },
  {
    id: "english",
    name: "Department of English",
    degreeName: "English & Communicative Competence",
    shortName: "English",
    wingId: "degree-college",
    badge: "Language, Literature & Corporate Communication",
    duration: "Integrated NEP Language Tracks",
    affiliation: "Affiliated to Gulbarga University, Kalaburagi",
    eligibility: "10+2 / 2nd PUC in any stream with English as a primary/compulsory subject.",
    heroImageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/06/2nd-CCA-Shark-Tank-India-was-conducted-for-10th-1.jpeg",
    overviewParagraphs: [
      "The Department of English plays a vital role in enhancing students' communication skills, language proficiency, and overall personality development. The department is committed to fostering effective communication, critical thinking, creativity, and ethical values, enabling students to succeed in academic, professional, and global environments. The department offers courses designed to strengthen students' abilities in listening, speaking, reading, and writing while developing confidence in the use of English as a medium of communication. The curriculum emphasizes grammar, vocabulary, academic writing, business communication, technical communication, presentation skills, and interpersonal communication, ensuring that students acquire the language competencies required for higher education and professional careers.",
      "Beyond classroom instruction, the department encourages students to participate in seminars, group discussions, debates, presentations, literary activities, language laboratories, workshops, and soft skills training programmes. These activities help students improve their communication abilities, leadership qualities, teamwork, and self-confidence.",
      "The department has dynamic dedicated faculty members, who employ learner-centered teaching methodologies and innovative pedagogical practices to create an engaging learning environment. Faculty members continuously update their knowledge through research, faculty development programmes, conferences, and academic collaborations to provide students with quality education aligned with contemporary educational standards."
    ],
    objectives: [
      "To develop proficiency in listening, speaking, reading, and writing skills.",
      "To enhance communication, presentation, and interpersonal skills for academic and professional success.",
      "To cultivate critical thinking, creativity, and analytical abilities through language and literature.",
      "To strengthen grammar, vocabulary, and academic writing skills.",
      "To promote confidence, leadership, teamwork, and professional ethics.",
      "To prepare students for higher education, competitive examinations, and global career opportunities through effective communication.",
      "To encourage lifelong learning and appreciation for language, literature, and cultural diversity."
    ],
    facultyList: [
      {
        slNo: 1,
        name: "Prabha G. Hugar",
        designation: "Asst. Prof.",
        qualification: "MA, B.Ed"
      }
    ],
    curriculumHighlights: [
      {
        category: "Corporate & Technical Communication",
        topics: ["Business Letter Writing & Email Etiquette", "Technical Report Writing & Documentation", "Public Speaking & Presentation Skills", "Group Discussions & Mock Interviews"]
      },
      {
        category: "Literature & Language Fundamentals",
        topics: ["Phonetics & Accent Neutralization", "Functional English Grammar & Vocabulary", "Indian & Global English Literature", "Critical Analysis & Essay Writing"]
      }
    ],
    emergingTechnologies: [
      "Digital Audio-Visual Language Lab Training",
      "AI-Assisted Writing & Editing Diagnostics",
      "Podcast & Digital Audio Presentation",
      "Professional Resume & LinkedIn Profile Optimization"
    ],
    careerProspects: [
      "Corporate Communications Specialist",
      "Content Strategist & Technical Writer",
      "Public Relations & Media Coordinator",
      "Human Resource & Training Associate",
      "Publishing, Journalism & Translation Executive"
    ],
    labFacilities: [
      "Digital English Language Audio-Visual Lab",
      "Interactive Acoustic Seminar & Debate Pods",
      "English Reference Library with Global Classics & Periodicals"
    ]
  },
  {
    id: "commerce",
    name: "Department of Commerce",
    degreeName: "Bachelor of Commerce (B.Com)",
    shortName: "Commerce",
    wingId: "degree-college",
    badge: "Undergraduate Commerce (NEP 2020)",
    duration: "3 - 4 Years (NEP)",
    affiliation: "Affiliated to Gulbarga University, Kalaburagi",
    eligibility: "10+2 / 2nd PUC in Commerce, Arts, or Science with qualifying marks.",
    heroImageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/06/Bank-Visit-1.jpeg",
    overviewParagraphs: [
      "The Department of Commerce is dedicated to cultivating dynamic financial leaders, accountants, tax consultants, and entrepreneurs equipped to thrive in today's globalized economy.",
      "The curriculum integrates advanced corporate accounting, GST taxation laws, banking and insurance operations, financial markets, digital marketing, and business analytics with practical computer accounting software (Tally ERP and Excel Analytics).",
      "Students participate in regular commercial bank internships, stock market simulations, industrial visits, and CA Foundation coaching tracks."
    ],
    objectives: [
      "To impart comprehensive knowledge of accounting standards, taxation laws, and auditing principles.",
      "To build proficiency in computerized accounting, fintech tools, and financial modeling.",
      "To bridge academic learning with practical industrial visits and banking internships.",
      "To prepare students for competitive certifications (CA, CS, CMA, ACCA, CFA, MBA)."
    ],
    curriculumHighlights: [
      {
        category: "Financial & Corporate Accounting",
        topics: ["Advanced Financial Accounting", "Corporate Accounting", "Cost & Management Accounting", "Auditing & Corporate Governance"]
      },
      {
        category: "Taxation & Commercial Law",
        topics: ["Income Tax Law & Practice", "Goods & Services Tax (GST)", "Company Law & Secretarial Practice", "Business Regulations"]
      }
    ],
    emergingTechnologies: [
      "Fintech & Digital Banking",
      "Computerized Accounting (Tally Prime / ERP)",
      "Data Analytics for Finance",
      "E-Commerce & Digital Marketing"
    ],
    careerProspects: [
      "Chartered Accountant / Tax Consultant",
      "Financial Analyst & Investment Advisor",
      "Banking Officer & Insurance Manager",
      "Corporate Accountant & Auditor",
      "Business Entrepreneur & Trade Executive"
    ],
    labFacilities: [
      "Digital Commerce & Tally Accounting Computer Lab",
      "E-filing and GST simulation software access",
      "Reference library with national financial journals"
    ]
  },
  {
    id: "mathematics",
    name: "Department of Mathematics",
    degreeName: "Mathematics (BCA / B.Com Curricular & Analytical Studies)",
    shortName: "Mathematics",
    wingId: "degree-college",
    badge: "Core Analytical & Quantitative Sciences",
    duration: "Integrated NEP Semester Modules",
    affiliation: "Affiliated to Gulbarga University, Kalaburagi",
    eligibility: "10+2 / 2nd PUC with Mathematics, Statistics, or Basic Commercial Arithmetic.",
    heroImageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/Master-image-school-2.jpeg",
    overviewParagraphs: [
      "The Department of Mathematics provides foundational and applied mathematical education, developing quantitative reasoning, discrete structures, numerical methods, and algorithmic logic essential for modern computer science and business analytics.",
      "Mathematics forms the intellectual backbone of computer programming, artificial intelligence, cryptographic algorithms, financial modeling, operations research, and statistical hypothesis testing.",
      "The department conducts regular problem-solving workshops, mathematical Olympiad coaching, logic competitions, and hands-on computational modeling sessions using Python and MATLAB tools."
    ],
    objectives: [
      "To develop logical reasoning, deductive rigor, and abstract problem-solving capabilities.",
      "To master discrete mathematical structures, graph theory, and matrix algebra powering computing algorithms.",
      "To apply statistical and numerical techniques to real-world financial, commercial, and engineering data.",
      "To prepare students for competitive examinations (JAM, NIMCET, CAT, Banking Quantitative Aptitude)."
    ],
    facultyList: [
      {
        slNo: 1,
        name: "Mr. Nikhil Nandikol",
        designation: "Asst. Prof.",
        qualification: "M.Sc, B.Ed"
      }
    ],
    curriculumHighlights: [
      {
        category: "Discrete & Computational Mathematics",
        topics: ["Set Theory & Logic Gates", "Graph Theory & Trees", "Combinatorics & Recurrence Relations", "Boolean Algebra"]
      },
      {
        category: "Applied Numerical & Statistical Methods",
        topics: ["Differential & Integral Calculus", "Linear Algebra & Vector Spaces", "Probability Distributions & Hypothesis Testing", "Optimization & Operations Research"]
      }
    ],
    emergingTechnologies: [
      "Computational Mathematics in Python",
      "Cryptography & Prime Theory",
      "Statistical Machine Learning Foundations",
      "Financial Quantitative Modeling"
    ],
    careerProspects: [
      "Data Scientist / Quantitative Analyst",
      "Algorithm Engineer & Cryptanalyst",
      "Actuarial Science & Risk Assessment Associate",
      "Operations Research Analyst",
      "Academic & Research Mathematician"
    ],
    labFacilities: [
      "Mathematical Computational Lab with Python/Scipy & GeoGebra",
      "Dedicated Quantitative Aptitude Library & Problem Solving Corner"
    ]
  },
  {
    id: "kannada",
    name: "Department of Kannada",
    degreeName: "Kannada Sahitya & Regional Heritage (ಕನ್ನಡ ಸಾಹಿತ್ಯ ಮತ್ತು ಭಾಷೆ)",
    shortName: "Kannada",
    wingId: "degree-college",
    badge: "Classical Language & Regional Literature",
    duration: "Integrated NEP Regional Language Tracks",
    affiliation: "Affiliated to Gulbarga University, Kalaburagi",
    eligibility: "10+2 / 2nd PUC with Kannada as first or second language.",
    heroImageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/08/state-board-campus.jpg",
    overviewParagraphs: [
      "ಕನ್ನಡ ವಿಭಾಗವು ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಶ್ರೀಮಂತ ಕನ್ನಡ ಸಾಹಿತ್ಯ, ಸಂಸ್ಕೃತಿ ಮತ್ತು ವಚನ ಸಾಹಿತ್ಯದ ಆಳವಾದ ಅಧ್ಯಯನವನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುತ್ತದೆ. (The Department of Kannada promotes deep appreciation for the rich heritage of Kannada literature, Vachana Sahitya, and cultural history).",
      "ಕಲ್ಯಾಣ ಕರ್ನಾಟಕ ಪ್ರದೇಶದ ಸಾಂಸ್ಕೃತಿಕ ಮಹತ್ವ, ಶಾಸನ ಶಾಸ್ತ್ರ, ಆಧುನಿಕ ಗದ್ಯ ಮತ್ತು ಪದ್ಯ ಸಾಹಿತ್ಯ, ಪತ್ರಿಕೋದ್ಯಮ ಮತ್ತು ಆಡಳಿತಾತ್ಮಕ ಕನ್ನಡ ಭಾಷಾ ಪ್ರಯೋಗಗಳನ್ನು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕಲಿಸಲಾಗುತ್ತದೆ.",
      "The department organizes annual Kannada Rajyotsava celebrations, Kavi Goshti (poets' meets), theatre performances, folk music events, and literary essay competitions."
    ],
    objectives: [
      "To impart deep understanding of ancient, medieval (Vachana/Dasa Sahitya), and modern Kannada literature.",
      "To build proficiency in administrative Kannada (ಆಡಳಿತ ಕನ್ನಡ) and functional journalism.",
      "To celebrate the rich cultural heritage and history of Kalyana Karnataka.",
      "To prepare students for state competitive examinations (KPSC, FDA, SDA, Police Sub-Inspector, Teachers' Eligibility)."
    ],
    facultyList: [
      {
        slNo: 1,
        name: "Smt. Tulasi Kumari",
        designation: "Asst. Prof.",
        qualification: "M.A, M.Ed, M.Phil"
      }
    ],
    curriculumHighlights: [
      {
        category: "ಪ್ರಾಚೀನ ಮತ್ತು ಮಧ್ಯಕಾಲೀನ ಸಾಹಿತ್ಯ (Classical Literature)",
        topics: ["ವಚನ ಸಾಹಿತ್ಯ ಮತ್ತು ಬಸವ ತತ್ವ (Vachana Sahitya)", "ಕೀರ್ತನ ಸಾಹಿತ್ಯ (Dasa Sahitya)", "ಪಂಪ, ರನ್ನ, ಜನ್ನ ಕೃತಿ ಪರಿಚಯ", "ಹಳಗನ್ನಡ ಮತ್ತು ನಡುಗನ್ನಡ ವ್ಯಾಕರಣ"]
      },
      {
        category: "ಆಧುನಿಕ ಸಾಹಿತ್ಯ ಮತ್ತು ಆಡಳಿತ ಕನ್ನಡ (Modern & Functional Kannada)",
        topics: ["ನವೋದಯ, ಪ್ರಗತಿಶೀಲ ಮತ್ತು ಬಂಡಾಯ ಸಾಹಿತ್ಯ", "ಆಡಳಿತ ಕನ್ನಡ ಮತ್ತು ಪತ್ರವ್ಯವಹಾರ (Administrative Kannada)", "ಕನ್ನಡ ಪತ್ರಿಕೋದ್ಯಮ ಮತ್ತು ಮಾಧ್ಯಮ ಲೇಖನ", "ಕನ್ನಡ ಕಂಪ್ಯೂಟಿಂಗ್ ಮತ್ತು ಯುನಿಕೋಡ್ ತಂತ್ರಜ್ಞಾನ"]
      }
    ],
    emergingTechnologies: [
      "ಕನ್ನಡ ಕಂಪ್ಯೂಟರ್ ಟೈಪಿಂಗ್ & ಯುನಿಕೋಡ್ ಸಾಫ್ಟ್‌ವೇರ್ (Kannada Computing)",
      "ಡಿಜಿಟಲ್ ಕನ್ನಡ ಈ-ಪುಸ್ತಕ ಸಂಗ್ರಹ (Digital Kannada E-Library)",
      "ಆನ್‌ಲೈನ್ ಕನ್ನಡ ನಿಘಂಟು ಮತ್ತು ಶಬ್ದಕೋಶ ಬಳಕೆ"
    ],
    careerProspects: [
      "Karnataka State Civil Services (KPSC / KAS / FDA / SDA)",
      "Kannada Media Journalist, News Anchor & Content Creator",
      "Government Administrative Officer & Translation Specialist",
      "Teacher / Lecturer in Kannada Language & Literature",
      "Public Relations & Regional Community Officer"
    ],
    labFacilities: [
      "ಕನ್ನಡ ಸಾಹಿತ್ಯ ಅಧ್ಯಯನ ಗ್ರಂಥಾಲಯ (Kannada Literary Reference Library)",
      "ಕನ್ನಡ ಕಂಪ್ಯೂಟರ್ ಟೈಪಿಂಗ್ ಪ್ರಯೋಗಾಲಯ (Kannada Computing Unit)",
      "ಸಾಂಸ್ಕೃತಿಕ ಮತ್ತು ಕವಿಗೋಷ್ಠಿ ಸಭಾಂಗಣ (Cultural Stage)"
    ]
  },
  {
    id: "hindi",
    name: "Department of Hindi",
    degreeName: "Hindi Bhasha & Sahitya (हिंदी भाषा एवं साहित्य)",
    shortName: "Hindi",
    wingId: "degree-college",
    badge: "National Language & Functional Hindi",
    duration: "Integrated NEP National Language Tracks",
    affiliation: "Affiliated to Gulbarga University, Kalaburagi",
    eligibility: "10+2 / 2nd PUC in any stream with Hindi as a language option.",
    heroImageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/Master-image-school-2.jpeg",
    overviewParagraphs: [
      "हिंदी विभाग छात्रों में राष्ट्रभाषा हिंदी के प्रति रुचि, साहित्यिक समझ और व्यावहारिक संप्रेषण कौशल का विकास करता है। (The Department of Hindi fosters linguistic fluency, literary appreciation, and functional Hindi communication skills).",
      "The curriculum balances classical poetry (Kabir, Tulsi, Surdas), modern prose (Premchand, Mahadevi Varma), commercial correspondence, translation techniques, and official Hindi (राजभाषा हिंदी) used in central government offices, banks, and PSUs.",
      "The department actively organizes Hindi Diwas celebrations, recitation competitions, debates, and translation workshops."
    ],
    objectives: [
      "To develop proficiency in spoken, written, and administrative Hindi.",
      "To introduce students to major literary eras, poetry, novels, and drama of Hindi literature.",
      "To train students in official Hindi translation (अनुवाद) and banking commercial correspondence.",
      "To prepare students for central government examinations (SSC, Railway, IBPS Hindi Officer, Central Staff Selection)."
    ],
    facultyList: [
      {
        slNo: 1,
        name: "Dr. Vaishali Mahajan",
        designation: "Asst. Prof.",
        qualification: "M.A, M.Phil, Ph.D"
      }
    ],
    curriculumHighlights: [
      {
        category: "प्राचीन एवं आधुनिक साहित्य (Classical & Modern Literature)",
        topics: ["भक्तिकाल एवं रीतिकाल (कबीर, तुलसी, सूरदास)", "आधुनिक गद्य साहित्य (उपन्यास, कहानी, नाटक)", "प्रेमचंद, जयशंकर प्रसाद, महादेवी वर्मा की रचनाएं", "हिंदी कविता एवं आलोचना"]
      },
      {
        category: "प्रयोजनमूलक एवं व्यावहारिक हिंदी (Functional & Official Hindi)",
        topics: ["राजभाषा हिंदी एवं सरकारी पत्राचार (Official Correspondence)", "पारिभाषिक शब्दावली एवं अनुवाद सिद्धांत (Translation Studies)", "व्यावसायिक संप्रेषण एवं मीडिया लेखन", "कंप्यूटर में हिंदी टाइपिंग एवं यूनिकोड टूल्स"]
      }
    ],
    emergingTechnologies: [
      "हिंदी कंप्यूटर टाइपिंग एवं यूनिकोड टूल्स (Hindi Computing)",
      "डिजिटल हिंदी अनुवाद एवं ट्रांसलेशन सॉफ्टवेयर",
      "ऑनलाइन हिंदी ई-लाइब्रेरी एवं शोध पत्रिकाएं"
    ],
    careerProspects: [
      "Official Language Officer (राजभाषा अधिकारी) in Nationalized Banks & PSUs",
      "Hindi Translator & Translation Specialist in Central Ministries",
      "Content Writer, Sub-Editor & Journalist in Hindi Media Houses",
      "Hindi Educator / Lecturer / Academician",
      "Corporate Hindi Customer Relation & Communication Officer"
    ],
    labFacilities: [
      "हिंदी साहित्य एवं संदर्भ वाचनालय (Hindi Reference Library)",
      "प्रयोजनमूलक हिंदी एवं अनुवाद प्रकोष्ठ (Functional Hindi & Translation Cell)",
      "ऑडियो-विजुअल भाषा अभिव्यक्ति मंच (AV Language Studio)"
    ]
  }
];
