import { FacilityItem } from '../types/institution';

export const FACILITIES: FacilityItem[] = [
  {
    id: "physics-lab",
    title: "Advanced Physics Laboratory",
    category: "Laboratories",
    shortDesc: "Well-equipped optical bench, electromagnetic apparatus, and mechanics stations.",
    fullDesc: "Our Physics Lab is equipped with modern apparatus for optics, mechanics, thermodynamics, and electronics experiments. Designed strictly according to CBSE and State Board specifications, allowing each student to execute individual practicals safely under teacher supervision.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/PHYSICS-LAB-01.jpg",
    keySpecs: ["Capacity: 45 students per session", "Digital multimeters & ray optics benches", "Safety-certified electrical power distribution"],
    equipmentHighlights: ["Optical benches with laser sources", "Spectrometers & prisms", "Sonometer, Vernier Calipers, Screw Gauges", "Wheatstone bridge and potentiometer setups"]
  },
  {
    id: "chemistry-lab",
    title: "Modern Chemistry Laboratory",
    category: "Laboratories",
    shortDesc: "Individual gas burner lines, reagent racks, safety fume hoods, and titration stations.",
    fullDesc: "A safe, well-ventilated laboratory featuring acid-resistant countertops, eyewash stations, centralized gas pipeline, chemical storage hoods, and analytical balances for precise qualitative and quantitative chemical analysis.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/CHEMISTRY-LAB-01.jpg",
    keySpecs: ["Direct water & gas lines at every workstation", "Dedicated chemical storage chamber", "First aid & emergency eyewash station"],
    equipmentHighlights: ["Digital precision analytical balances", "Centrifuge machines and water baths", "Organic and inorganic reagent banks", "Borosilicate glassware inventory"]
  },
  {
    id: "biology-lab",
    title: "Life Sciences & Biology Lab",
    category: "Laboratories",
    shortDesc: "High-magnification compound microscopes, human anatomical models, and botanical specimens.",
    fullDesc: "Offers immersive botanical, zoological, and human physiology explorations. Equipped with high-definition binocular microscopes, permanent slide archives, dissection microscopes, 3D anatomical charts, and preserved specimen jars.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/BIOLOGY-LAB-0.jpg",
    keySpecs: ["40+ compound & dissection microscopes", "Comprehensive specimen collection", "Digital projector for microscopic projection"],
    equipmentHighlights: ["Human skeleton and anatomical torsos", "Microtome and staining apparatus", "Histology & cytological slide collection", "Herbarium collection of Deccan flora"]
  },
  {
    id: "electronics-lab",
    title: "Applied Electronics & Hardware Lab",
    category: "Laboratories",
    shortDesc: "Breadboards, digital logic trainers, oscilloscopes, and circuit design stations.",
    fullDesc: "Designed specifically for Pre-University PCME and Degree College students. Equips young minds with practical digital electronics, logic gates, microprocessors, signal generators, and component soldering techniques.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/ELECTRONICS-LAB-0.jpg",
    keySpecs: ["Digital storage oscilloscopes", "IC testers and regulated power supplies", "Individual circuit assembly stations"],
    equipmentHighlights: ["Function generators & dual power supplies", "Digital logic gate trainer kits", "Microcontroller simulation boards", "Semiconductor characteristic setups"]
  },
  {
    id: "computer-lab",
    title: "Hi-Tech Computer & ETutor Examination Lab",
    category: "Digital Infrastructure",
    shortDesc: "Over 120 high-speed networked computers with ETutor exam software and fiber internet.",
    fullDesc: "A climate-controlled digital hub powered by high-speed fiber internet and dedicated UPS backup. Hosts daily computer science classes, Python/C++ coding curricula, and online simulated test series for IIT-JEE / NEET under the ETutor exam engine.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/COMPUTER-LAB--scaled.jpg",
    keySpecs: ["120+ Intel Core workstations", "Gigabit LAN & dedicated 200 Mbps fiber", "Online ETutor testing server infrastructure"],
    equipmentHighlights: ["Interactive smart display for lectures", "Python, Scratch, Java, and SQL environments", "NTA-pattern online exam simulation software", "Centralized network firewall & antivirus"]
  },
  {
    id: "mathematics-lab",
    title: "Mathematics & Geometrical Modeling Lab",
    category: "Laboratories",
    shortDesc: "Interactive manipulatives, geometric solids, algebraic tiles, and puzzle boards.",
    fullDesc: "Makes abstract mathematical concepts tangible. Students explore geometry, trigonometry, probability, and coordinate geometry through physical manipulatives, abacus tools, and theorem verification models.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/maths-lab1-1.jpg",
    keySpecs: ["Hands-on activity sets for Grades 1 to 10", "Pythagoras theorem proof models", "Trigonometric measurement instruments"],
    equipmentHighlights: ["3D Platonic solids & geometric dissection sets", "Algebraic identity kits", "Clinometer & measurement tapes", "Vedic math calculation charts"]
  },
  {
    id: "central-library",
    title: "Central Digital & Knowledge Library",
    category: "Campus Life",
    shortDesc: "Over 12,000 academic titles, competitive exam journals, periodicals, and quiet reading halls.",
    fullDesc: "A treasure trove of knowledge housing encyclopedias, reference texts, fiction, regional Kannada literature, national daily newspapers, and leading competitive magazines (Competition Science Vision, Yojana, Kurukshetra).",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/LIBRARY-3.jpg",
    keySpecs: ["12,000+ cataloged volumes", "Seating capacity: 150 readers", "Digital OPAC searching kiosk"],
    equipmentHighlights: ["Dedicated competitive exams section (NEET/JEE/UPSC)", "National & international science periodicals", "Quiet study cubicles for senior students", "Audio-visual educational CD/DVD archive"]
  },
  {
    id: "ncc-unit",
    title: "NCC Cadets Parade & Training Ground",
    category: "Safety & Wellness",
    shortDesc: "Active National Cadet Corps wing promoting discipline, patriotism, and leadership.",
    fullDesc: "SRN Mehta hosts a recognized National Cadet Corps (NCC) troop. Cadets undergo regular drill training, obstacle courses, rifle drill simulations, weapon awareness, camp training, and disaster response workshops.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/NCC-1.jpg",
    keySpecs: ["Full parade ground & obstacle course", "Certified Associate NCC Officer (ANO) leadership", "Regular selection for Republic Day (RDC) camps"],
    equipmentHighlights: ["Official uniform & drill accessories", "Tent pitching and obstacle climbing equipment", "Marching band drum set and bugles", "First aid and field survival gear"]
  },
  {
    id: "splash-pool",
    title: "Junior Splash Pool & Aquatic Area",
    category: "Sports & Fitness",
    shortDesc: "Hygienic, temperature-controlled splash pool designed safely for kindergarten and primary children.",
    fullDesc: "A colorful, filtered, shallow water play arena providing safe water confidence and fun physical coordination activities for our youngest learners under trained lifeguard supervision.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/Splash-Pool.jpg",
    keySpecs: ["1.5 to 2 ft safe depth for early learners", "Automated filtration and daily chlorination check", "Non-slip anti-skid safety deck"],
    equipmentHighlights: ["Life jackets and colorful flotation rings", "Fun water fountain features", "Dedicated changing rooms and shower stalls", "Continuous CCTV and staff oversight"]
  },
  {
    id: "sports-complex",
    title: "Outdoor Athletic Ground & Play Arenas",
    category: "Sports & Fitness",
    shortDesc: "Expansive playground with running track, volleyball court, cricket pitch, and basketball hoop.",
    fullDesc: "Promotes physical vitality and team spirit. Offers dedicated playing fields for football, cricket, volleyball, running track, skating track, and throwball, supervised by qualified Physical Education Directors.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/play-ground-1024x472.jpg",
    keySpecs: ["Multi-sport turf and running track", "Full-sized volleyball & throwball courts", "Dedicated concrete skating ring"],
    equipmentHighlights: ["Standard athletics hurdles, shot puts, javelins", "Cricket practice nets with bowling pitch", "Roller skates and protective helmets", "Electronic match scoreboards"]
  },
  {
    id: "indoor-games",
    title: "Indoor Sports: Table Tennis, Karate & Chess",
    category: "Sports & Fitness",
    shortDesc: "Dedicated martial arts dojo, tournament-grade table tennis tables, and quiet chess halls.",
    fullDesc: "Hones mental agility, reflexes, and self-defense skills. Our students compete at state and national levels in Table Tennis, Chess, and Karate tournaments.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/table-teniss-1024x576.jpg",
    keySpecs: ["Stag tournament table tennis boards", "Rubberized martial arts floor mats", "FIDE-standard tournament chess clocks"],
    equipmentHighlights: ["Certified Black Belt Karate instruction", "Digital chess timing clocks", "Safety protective chest guards and pads", "Dedicated tournament viewing gallery"]
  },
  {
    id: "transport-fleet",
    title: "GPS-Monitored School Bus Fleet",
    category: "Safety & Wellness",
    shortDesc: "Fleet of modern buses covering all major routes across Kalaburagi city with CCTV and speed governors.",
    fullDesc: "Safe, punctual, and comfortable daily commuting for students and faculty. Each vehicle is equipped with GPS tracking, speed governors, emergency first aid, fire extinguishers, and verified female attendants.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/Transportation-1.jpg",
    keySpecs: ["30+ buses covering 50+ city routes", "Live GPS tracking and speed limiter compliance", "Trained experienced drivers and female attenders"],
    equipmentHighlights: ["Onboard first aid kits & emergency exits", "Real-time communication with transport desk", "CCTV cameras in all passenger cabins", "Strict sanitized maintenance protocol"]
  },
  {
    id: "green-campus",
    title: "Solar-Powered Eco-Friendly Green Campus",
    category: "Campus Life",
    shortDesc: "Rooftop solar photovoltaic plant, rainwater harvesting, lush tree canopy, and zero-waste policy.",
    fullDesc: "A model green institution generating its own clean solar electricity, conserving groundwater through rainwater percolation pits, and providing clean oxygen-rich shaded gardens for students.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/Solar-Energy.jpg",
    keySpecs: ["Grid-connected rooftop solar installation", "Lush landscaped gardens with native trees", "Rainwater harvesting recharge pits"],
    equipmentHighlights: ["Digital solar generation monitoring dashboard", "Waste segregation and composting pits", "RO purified drinking water coolers", "Energy-efficient LED campus lighting"]
  },
  {
    id: "security-cctv",
    title: "24/7 CCTV Surveillance & Safety Grid",
    category: "Safety & Wellness",
    shortDesc: "High-definition night-vision cameras monitoring all corridors, gates, and perimeters.",
    fullDesc: "Ensures an uncompromised safe haven for every student. Monitored continuously from a centralized security command desk with strict visitor badge authentication.",
    imageUrl: "https://srnmehtaschool.com/wp-content/uploads/2024/05/24-7-CCTV-SURVEILLANCE-1.jpg",
    keySpecs: ["150+ HD CCTV cameras campus-wide", "Gated entry with biometric visitor logs", "Fire hydrants and regular evacuation drills"],
    equipmentHighlights: ["Central security command station", "Fire safety equipment on every floor", "Boundary wall security patrolling", "Medical infirmary with full-time nurse"]
  }
];
