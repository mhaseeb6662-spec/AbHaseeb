export const siteConfig = {
  name: "Abdul Haseeb",
  shortName: "Ab Haseeb",
  role: "Software Engineer · Generative AI, Full-Stack & Python Bot Developer",
  email: "developerweb351@gmail.com",
  phone: "+92 304 3537341",
  location: "Khanewal, Punjab, Pakistan",
  locationMapUrl:
    "https://www.google.com/maps/place/Khanewal,+Pakistan/@30.2949813,71.9360589,13z",
  github: "https://github.com/mhaseeb6662-spec",
  linkedin: "#",
  whatsapp: "https://wa.me/923043537341",
  facebook: "https://web.facebook.com/abdu.haseeb.75/",
  resumeUrl: "/Abhaseebcv.pdf",
  description:
    "Full-Stack Software Engineer & Generative AI Developer with deep expertise in LLM applications, Agentic AI systems, Python automation bots, React.js, Next.js, React Native, Node.js, Express.js, Three.js, WebGL, NestJS, and PostgreSQL. Passionate about engineering autonomous agents, high-efficiency Python visa agency automation bots, and modern 3D web experiences.",
};

export const skills = [
  "Generative AI & LLMs",
  "Agentic AI & LangChain",
  "Python & Automation Bots",
  "Selenium & Playwright",
  "OpenAI & Gemini APIs",
  "Prompt Engineering",
  "Three.js & WebGL",
  "GSAP Animations",
  "React Native",
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "NestJS (Learning)",
  "PostgreSQL (Learning)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
  "Lenis Smooth Scroll",
  "RESTful APIs",
  "Socket.io (Real-Time)",
  "JWT Authentication",
  "MySQL",
  "SQLite",
  "HTML5 & CSS3",
  "Git & GitHub",
  "Vercel & Cloud Deployment",
  "Postman",
  "Figma (UI/UX Basics)",
  "Problem Solving",
  "English Communication",
];

export const highlights = [
  {
    title: "Clean Code",
    description: "Clean, reusable & maintainable code with best practices.",
    icon: "code",
  },
  {
    title: "Performance",
    description: "Fast, optimized & scalable web applications.",
    icon: "rocket",
  },
  {
    title: "Collaboration",
    description: "Teamwork to turn ideas into real solutions.",
    icon: "users",
  },
  {
    title: "Innovation",
    description: "Using modern tech to build better products.",
    icon: "lightbulb",
  },
];

export type Project = {
  title: string;
  description: string;
  image: string;
  video?: string;
  tags: string[];
  link?: string;
  github?: string;
  confidential?: boolean;
  category?: "3d" | "ai" | "fullstack" | "mobile";
  badge?: string;
  is3D?: boolean;
  isAI?: boolean;
  hasVideo?: boolean;
  featured?: boolean;
  impact?: string;
};

export const projects: Project[] = [
  // ==========================================
  // TIER 1: FLAGSHIP ENTERPRISE & PRODUCTION SYSTEMS
  // ==========================================
  {
    title: "Aqua Fishing Hub — Enterprise Supply Chain & Cold Storage ERP",
    description:
      "End-to-end Enterprise Resource Planning (ERP) platform architected for commercial fishery supply chains, cold storage inventory management, bulk seafood order dispatching, and real-time financial ledger auditing.",
    image: "/projects/aqua-fishing.png",
    tags: [
      "React",
      "Node.js",
      "Express.js",
      "Enterprise ERP",
      "PostgreSQL",
      "MongoDB",
      "Supply Chain",
      "Tailwind CSS",
    ],
    link: "https://aquafishinghub.com",
    confidential: false,
    github: undefined,
    category: "fullstack",
    badge: "Flagship Enterprise ERP",
    impact: "Multi-Module Production ERP",
    featured: true,
  },
  {
    title: "Usama Vet Surgical — Production eCommerce & Operations Portal",
    description:
      "Global eCommerce platform and operations hub for veterinary surgical instruments. Engineered with a custom content control architecture, high-concurrency order pipeline, real-time shipment telemetry, and full-featured administrative control.",
    image: "/projects/usama-vet.png",
    tags: [
      "Next.js",
      "React",
      "Node.js",
      "eCommerce Architecture",
      "Admin Dashboard",
      "Tailwind CSS",
      "RESTful API",
    ],
    link: "https://usamavetsurgical.com/",
    github: "https://github.com/mhaseeb6662-spec/Usama-vet",
    confidential: false,
    category: "fullstack",
    badge: "Global eCommerce Portal",
    impact: "Live in Production",
    featured: true,
  },
  {
    title: "Basharat Higher Secondary School — Official Institutional Web Portal",
    description:
      "Comprehensive web platform for Basharat Higher Secondary School (BHSS) integrating 15+ institutional sub-portals including academic pathways, admissions desk, fee structures, board examination records, and real-time WhatsApp inquiry routing.",
    image: "/projects/bhss.png",
    tags: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "Responsive Web",
      "WhatsApp Desk API",
      "SEO Architecture",
      "Vercel Deployment",
    ],
    link: "https://bhss.ac.pk/",
    github: "https://github.com/mhaseeb6662-spec/school-web",
    category: "fullstack",
    badge: "Official Institutional Portal",
    impact: "Live Institutional Client",
    featured: true,
  },
  {
    title: "Visa Agency Automation Bot — Autonomous Client Intake & Processing Engine",
    description:
      "High-efficiency automated visa application & client appointment processing bot engineered for visa consultancy agencies. Implements automated form submission, document verification pipelines, appointment slot detection, and end-to-end workflow automation.",
    image: "/projects/visa-bot.png",
    video: "/projects/visa-bot.mp4",
    tags: [
      "Python",
      "Selenium",
      "Workflow Automation",
      "Bot Engine",
      "Visa Processing",
      "Video Demo",
    ],
    category: "ai",
    badge: "Python Bot · Video Demo",
    impact: "Autonomous Zero-Touch Bot",
    isAI: true,
    hasVideo: true,
    featured: true,
  },
  {
    title: "Pak Motors — Multi-Branch Dealership ERP & Biometric Suite",
    description:
      "Enterprise vehicle dealership management system featuring multi-branch inventory tracking, customer vehicle financing, biometric face and fingerprint authentication, live camera stream capture, and digital legal signature verification.",
    image: "/projects/motors.png",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Biometric Authentication",
      "Role-Based Access (RBAC)",
      "REST API",
    ],
    confidential: true,
    github: undefined,
    category: "fullstack",
    badge: "Enterprise Dealership ERP",
    impact: "Biometric Security System",
    featured: true,
  },
  {
    title: "Relay — 3D Cinematic Workflow Platform",
    description:
      "High-fidelity 3D web platform featuring custom WebGL interactive energy ribbons, fluid GSAP animation choreographies, micro-interactions, responsive typography, and modern creative technology architecture.",
    image: "/projects/gallery-1.png",
    tags: [
      "Three.js",
      "WebGL",
      "GSAP Motion",
      "Interactive 3D",
      "Cinematic UI",
      "Tailwind CSS",
    ],
    link: "https://gallary1.vercel.app/",
    category: "3d",
    badge: "3D WebGL Flagship",
    impact: "Creative Tech Architecture",
    is3D: true,
    featured: true,
  },

  // ==========================================
  // TIER 2: SPECIALIZED ENTERPRISE CLIENT SYSTEMS & MOBILE APPS
  // ==========================================
  {
    title: "International Quran Academy App — Global EdTech Mobile Platform",
    description:
      "Scalable cross-platform mobile application for an international educational academy. Features live virtual audio/video classrooms, real-time Socket.io messaging, student-teacher academic tracking, and automated multi-channel push notifications.",
    image: "/projects/quran-academy.jpg",
    tags: [
      "React Native",
      "Android",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Live Classroom",
      "Role-Based Access",
    ],
    confidential: true,
    github: undefined,
    category: "mobile",
    badge: "EdTech Mobile App",
    impact: "Global LMS Platform",
  },
  {
    title: "Pharmacy Management System — Multi-Branch Clinical & Inventory ERP",
    description:
      "Enterprise healthcare inventory and retail prescription dispensing platform engineered for multi-branch pharmacy networks. Features batch stock tracking, expiry alerts, prescription records, automated billing, and PDF analytics reporting.",
    image: "/projects/pharmacy.png",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Multi-Branch Architecture",
      "Inventory Management",
      "PDF Reports",
    ],
    confidential: true,
    github: undefined,
    category: "fullstack",
    badge: "Healthcare & Pharma ERP",
    impact: "Multi-Branch Network ERP",
  },
  {
    title: "Steel POS & Inventory Management System — Industrial Manufacturing ERP",
    description:
      "Industrial steel manufacturing POS and inventory tracking system handling mill-weight measurements, custom multi-tier pricing, vendor ledger reconciliations, invoice dispatching, and executive analytics.",
    image: "/projects/steel-pos.png",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
      "Industrial ERP",
      "Inventory Ledger",
      "Analytics Dashboard",
    ],
    confidential: true,
    github: undefined,
    category: "fullstack",
    badge: "Industrial Steel ERP",
    impact: "Heavy Industry Solution",
  },
  {
    title: "Haseeb AI — Generative Desktop Engineering Assistant",
    description:
      "Cross-platform desktop application built with Electron.js, React, and Google Gemini API. Offers real-time streaming LLM responses, multimodal prompt engineering, codebase syntax highlighting, and local vector context memory.",
    image: "/projects/genai-assistant.png",
    tags: [
      "Generative AI",
      "Gemini API",
      "Electron.js",
      "React",
      "Prompt Engineering",
      "TypeScript",
      "Desktop Native",
    ],
    github: "https://github.com/mhaseeb6662-spec/chatgpt",
    category: "ai",
    badge: "Generative AI Desktop Suite",
    impact: "Cross-Platform LLM App",
    isAI: true,
  },
  {
    title: "Marriage Bureau Dashboard — Matrimonial CRM & Client Management Portal",
    description:
      "Full-stack customer relationship management (CRM) platform for matrimonial agencies, featuring verified profile onboarding, membership tiers, automated matching criteria, and appointment scheduling.",
    image: "/projects/marriage.png",
    tags: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "Express.js",
      "JWT Authentication",
      "CRM Workflow",
      "REST API",
    ],
    link: "https://ikhlasrishtacenters.com/",
    github: "https://github.com/mhaseeb6662-spec/NikkahFullstack",
    category: "fullstack",
    badge: "Matrimonial CRM Platform",
  },
  {
    title: "Uplintix — Creative & Technology Agency Platform",
    description:
      "Technology agency showcase platform featuring 3D Three.js visual assets, custom component design, high-performance page routing, and responsive typography.",
    image: "/projects/uplintix.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Three.js",
      "React Router",
      "Framer Motion",
      "Creative Agency UI",
    ],
    link: "https://uplintix.com",
    github: "https://github.com/mhaseeb6662-spec/Uplintix",
    category: "3d",
    badge: "Creative Agency Portal",
    is3D: true,
  },
  {
    title: "Cloud POS & Retail Billing Engine",
    description:
      "Modern retail point-of-sale system featuring product catalog management, barcode billing, multi-tender transactions, expense tracking, and sales analytics records.",
    image: "/projects/pos.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Real-Time POS",
      "Sales Telemetry",
      "Inventory Tracking",
    ],
    link: "https://sunny-pasca-9d6cd2.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/POS-React-js",
    category: "mobile",
    badge: "Cloud POS Engine",
  },
  {
    title: "Automated Invoicing & Financial Accounting Suite",
    description:
      "Financial billing utility with custom tax and discount calculations, client ledger management, dynamic PDF invoice generation, and organized payment history record-keeping.",
    image: "/projects/invoice.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Financial Accounting",
      "Invoice Engine",
      "Client Ledgers",
    ],
    link: "https://spiffy-bombolone-0ccece.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/invoicegenerating-app-react-js",
    category: "mobile",
    badge: "FinTech Invoicing Suite",
  },
  {
    title: "Web3 Decentralized Asset & Analytics Terminal",
    description:
      "Decentralized digital asset dashboard with live market telemetry, simulated token swapping mechanics, liquidity tracking, and clean analytical charting.",
    image: "/projects/trading.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Web3 Terminal",
      "Market Analytics",
      "Token Swaps",
    ],
    link: "https://majestic-bubblegum-e59f83.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/Trading-web-app-react-js",
    category: "mobile",
    badge: "Web3 Asset Terminal",
  },
  {
    title: "Multimodal Generative AI Conversational Assistant",
    description:
      "Interactive AI chat platform powered by Google Gemini API. Implements real-time token streaming, prompt engineering, code syntax rendering, and conversational context retention.",
    image: "/projects/gemini-chat.png",
    tags: [
      "Generative AI",
      "Gemini API",
      "React",
      "Tailwind CSS",
      "Streaming Responses",
      "Prompt Engineering",
    ],
    link: "https://lively-seahorse-77ba91.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/chatapp",
    category: "ai",
    badge: "Generative AI Assistant",
    isAI: true,
  },
  {
    title: "JM Falcon Rise — Corporate Digital Platform",
    description:
      "Corporate enterprise website showcasing global services and brand identity with modern responsive typography, SEO architecture, and fluid Framer Motion animations.",
    image: "/projects/jm.png",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
      "SEO Architecture",
    ],
    link: "https://jmfalconrise.com/",
    github: "https://github.com/mhaseeb6662-spec/jmfalconrise",
    category: "fullstack",
    badge: "Corporate Enterprise Web",
  },

  // ==========================================
  // TIER 3: ADVANCED 3D WEBGL SHOWCASES & CREATIVE TECH
  // ==========================================
  {
    title: "Brewnns — Interactive 3D Coffee World (Gallery #2)",
    description:
      "Immersive 3D interactive coffee world featuring a custom WebGL 3D cup model with dynamic mouse camera physics, GSAP ScrollTrigger timeline, and buttery-smooth Lenis scrolling.",
    image: "/projects/gallery-2.png",
    tags: [
      "Three.js",
      "WebGL",
      "3D Modeling",
      "GSAP ScrollTrigger",
      "Lenis Scroll",
      "Interactive Physics",
    ],
    link: "https://gallary-secound.vercel.app/",
    category: "3d",
    badge: "3D WebGL World",
    is3D: true,
  },
  {
    title: "Voltara — 3D Depth Ribbons & Metallic Lighting (Gallery #9)",
    description:
      "High-impact 3D brand environment engineered with Three.js RoomEnvironment lighting, multi-layered depth ribbons, metallic 3D emblem rendering, and sharp kinetic animation choreography.",
    image: "/projects/gallery-9.png",
    tags: [
      "Three.js",
      "WebGL",
      "RoomEnvironment",
      "3D Ribbons",
      "Metallic Shaders",
      "Cinematic UI",
    ],
    link: "https://gallary-9th.vercel.app",
    category: "3d",
    badge: "3D Emblem & Shaders",
    is3D: true,
  },
  {
    title: "Virell — 3D Particle Morphing Field (Gallery #8)",
    description:
      "High-concept cinematic identity field featuring continuous Three.js particle morphing through multi-stage geometric transformations (crescent, cloud, triangle, starburst) with dynamic viewport responsiveness.",
    image: "/projects/gallery-8.png",
    tags: [
      "Three.js",
      "WebGL",
      "Particle Morphing",
      "3D Shaders",
      "GSAP Motion",
      "Creative Dev",
    ],
    link: "https://gallary-8th.vercel.app",
    category: "3d",
    badge: "3D Particle Field",
    is3D: true,
  },
  {
    title: "Ferro Room — 3D Interactive Print Shelf (Gallery #6)",
    description:
      "Architectural private print shelf experience built with real-time Three.js WebGL lighting, interactive spatial room coordinates, smooth momentum physics, and curated tactile typography.",
    image: "/projects/gallery-6.png",
    tags: [
      "Three.js",
      "WebGL",
      "3D Room Scene",
      "Spatial Motion",
      "Interactive 3D",
      "GSAP",
    ],
    link: "https://gallary-6th.vercel.app",
    category: "3d",
    badge: "3D Spatial Room",
    is3D: true,
  },
  {
    title: "Ridgeline Roofing — 3D Architectural Showcase (Gallery #3)",
    description:
      "Architectural & roofing services website crafted with interactive scroll physics, GSAP smooth timeline reveals, dynamic cards, responsive typography, and tactile UI interactions.",
    image: "/projects/gallery-3.png",
    tags: [
      "GSAP ScrollTrigger",
      "Lenis Scroll",
      "3D Motion",
      "Interactive UI",
      "Web Performance",
    ],
    link: "https://gallary-3rd.vercel.app/",
    category: "3d",
    badge: "3D Architectural UI",
    is3D: true,
  },
  {
    title: "Halden — 3D Luxury Furniture Gallery (Gallery #4)",
    description:
      "High-end luxury furniture digital showroom with tactile 3D perspective hover cards, micro-interactions, smooth kinetic momentum scrolling, and minimalist Swiss design aesthetics.",
    image: "/projects/gallery-4.png",
    tags: [
      "Three.js",
      "3D Tilt Cards",
      "GSAP",
      "Lenis Momentum",
      "Minimalist Design",
    ],
    link: "https://gallary-4th.vercel.app/",
    category: "3d",
    badge: "3D Interactive Cards",
    is3D: true,
  },
  {
    title: "Stemline — 3D Cinematic Storytelling (Gallery #5)",
    description:
      "High-concept 'Send first, be seen later' digital experience featuring cinematic pacing, immersive sound/motion cues, fluid WebGL transitions, and responsive GSAP choreography.",
    image: "/projects/gallery-5.png",
    tags: [
      "Three.js",
      "WebGL",
      "3D Animation",
      "GSAP Storytelling",
      "Cinematic Motion",
    ],
    link: "https://gallary-5th.vercel.app/",
    category: "3d",
    badge: "3D Storytelling",
    is3D: true,
  },

  // ==========================================
  // TIER 4: COMMERCIAL & AGENCY PLATFORMS
  // ==========================================
  {
    title: "Kharan Mobile Parts — B2B/B2C WooCommerce Platform",
    description:
      "Custom WooCommerce store with structured catalog management, high-efficiency checkout flow, and payment gateway integration.",
    image: "/projects/kharan.png",
    tags: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Custom Theme Development",
      "JavaScript",
      "SEO & Performance",
    ],
    link: "https://kharanmobileparts.com/",
    confidential: false,
    github: undefined,
    category: "fullstack",
    badge: "eCommerce Platform",
  },
  {
    title: "Sale Marketo — Digital Marketing Agency Web Platform",
    description:
      "High-conversion digital marketing agency platform featuring custom responsive landing pages, dynamic lead generation forms, and search engine optimization.",
    image: "/projects/sale.png",
    tags: [
      "WordPress",
      "Elementor",
      "PHP",
      "JavaScript",
      "Responsive Design",
      "Lead Generation",
    ],
    link: "https://salemarketo.com/",
    confidential: false,
    github: undefined,
    category: "fullstack",
    badge: "Agency Platform",
  },
];

export type Experience = {
  period: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
  current: boolean;
};

export const experiences: Experience[] = [
  {
    period: "2026 — Present",
    role: "MERN Stack Developer (Remote / Part-Time)",
    company: "Norleads — Poland (International Company)",
    description:
      "Working as a remote part-time MERN Stack Developer for an international client based in Poland, engineering and maintaining full-stack features across the React frontend and Node.js/Express backend, working with a distributed team in a modern agile environment.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    current: true,
  },
  {
    period: "2024 — July 2026",
    role: "MERN Stack Developer",
    company: "Okiiee Software House, Multan",
    description:
      "Served as a MERN Stack Developer, building and maintaining full-stack web applications. Developed scalable backend APIs with Node.js and Express, managed databases with MongoDB, and created responsive frontend interfaces using React. Focused on authentication, CRUD operations, and performance optimization.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    current: false,
  },
  {
    period: "2023 — 2025",
    role: "WordPress Developer",
    company: "Digital Application Khanewal",
    description:
      "Custom WordPress theme developer — eCommerce theme, Elementor expert, and blogging theme expert.",
    technologies: ["HTML", "CSS", "JS", "PHP", "WordPress", "MySQL"],
    current: false,
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "Ab Haseeb is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Sarah Chen",
    role: "CTO, Tech Innovators Inc.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Working with Ab Haseeb was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Michael Rodriguez",
    role: "Product Manager, Digital Solutions",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Ab Haseeb's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Emily Watson",
    role: "Engineering Lead, StartUp Labs",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
  },
  {
    quote:
      "Not only is Ab Haseeb technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "David Kim",
    role: "CEO, Innovation Hub",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];