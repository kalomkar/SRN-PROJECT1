import { InstitutionInfo, MetricItem } from '../types/institution';

export const INSTITUTION: InstitutionInfo = {
  name: "S.R.N. Mehta Institutions",
  shortName: "SRN Mehta",
  tagline: "Empowering Minds, Serving the Nation with Academic Excellence",
  motto: "Teach Them, They Serve The Nation",
  trustName: "Shri S.R.J. Naval Trust",
  establishedYear: 1991,
  cbseAffiliationNo: "830349",
  schoolCode: "45308",
  location: {
    city: "Kalaburagi (Gulbarga)",
    state: "Karnataka",
    pincode: "585105",
    country: "India",
    address: "Near Sedam Ring Road Cross, Old Jewargi Road, Kalaburagi",
    landmark: "Behind High Court Bench, Ring Road",
    googleMapsEmbedUrl: "https://maps.google.com/maps?q=SRN+Mehta+School+Kalaburagi&t=&z=14&ie=UTF8&iwloc=&output=embed"
  },
  contact: {
    phone: "+91 8472 255555",
    alternatePhone: "+91 94481 23456",
    email: "srnmehtacollegekalburgi@gmail.com",
    officeHours: "Monday to Saturday: 8:30 AM – 4:30 PM",
    admissionsHelpline: "+91 8472 277777 / 94481 23456"
  },
  accreditations: [
    {
      title: "Ranked #1 in India for Community Services",
      authority: "EducationToday CBSE Category National Survey",
      year: "2023-24",
      badgeUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/SRN-Mehta-CBSE-School-has-achieved-the-remarkable-distinction-of-being-ranked-No.1-in-India-for-Community-Ser-1.png"
    },
    {
      title: "ET TECH X School Excellence Award",
      authority: "ET TECH X National Educational Summit",
      year: "2023-24",
      badgeUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/S.R.N.-MEHTA-CBSE-School-Clinches-ET-TECH-X-School-Excellence-Award-2023-24-1.png"
    },
    {
      title: "Top 10 State Board Schools in India",
      authority: "Education Today Survey Group",
      year: "2024",
      badgeUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/06/Indias-Top-10-state-board-school-by-eduction-today-group-scaled.jpg"
    },
    {
      title: "MSME Heroes Institutional Honor",
      authority: "Chamber of Commerce & CA Association",
      year: "2024-25",
      badgeUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/08/%C2%B7An-award-from-Chamber-of-commerce-and-CA-association-as-MSME-HEROES.png"
    }
  ]
};

export const KEY_METRICS: MetricItem[] = [
  {
    id: "years",
    label: "Years of Educational Heritage",
    value: "33",
    suffix: "+",
    description: "Nurturing generations since 1991 under Shri S.R.J. Naval Trust"
  },
  {
    id: "board-results",
    label: "Board Exam Distinction Rate",
    value: "100",
    suffix: "%",
    description: "Consistent 100% pass record in Class 10 CBSE & SSLC Board Exams"
  },
  {
    id: "labs-amenities",
    label: "Dedicated Labs & Learning Hubs",
    value: "18",
    suffix: "+",
    description: "Physics, Chem, Bio, Electronics, Math, ETutor, and Digital Libraries"
  },
  {
    id: "alumni-strength",
    label: "Graduated Alumni Serving Nation",
    value: "15,000",
    suffix: "+",
    description: "Doctors, engineers, civil servants, armed forces officers, and entrepreneurs"
  }
];
