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
};

export const projects: Project[] = [
  {
    title: "Visa Agency Automation Bot",
    description:
      "High-performance automated visa application & client appointment processing bot engineered for visa consultancy agencies. Features automated form filling, document verification pipelines, appointment slot detection, and end-to-end workflow automation.",
    image: "/projects/visa-bot.png",
    video: "/projects/visa-bot.mp4",
    tags: [
      "Python",
      "Automation Bot",
      "Selenium",
      "Workflow Automation",
      "Visa Processing",
      "Video Demo",
    ],
    category: "ai",
    badge: "Visa Agency Bot",
    isAI: true,
    hasVideo: true,
  },
  {
    title: "Haseeb AI — Generative Desktop Assistant",
    description:
      "Cross-platform Generative AI desktop application engineered with Electron.js, React, and Google Gemini API. Offers streaming LLM responses, multimodal prompt engineering, local codebase comprehension, syntax-highlighted code generation, and vector memory buffers.",
    image: "/projects/genai-assistant.png",
    tags: [
      "Generative AI",
      "Gemini API",
      "Electron.js",
      "React",
      "Prompt Engineering",
      "TypeScript",
    ],
    github: "https://github.com/mhaseeb6662-spec/chatgpt",
    category: "ai",
    badge: "Generative AI",
    isAI: true,
  },
  {
    title: "Relay — 3D Cinematic Workflow Platform",
    description:
      "Advanced cinematic workflow landing platform recreation featuring dynamic 3D energy ribbons, interactive motion design, smooth fluid micro-interactions, and responsive typography.",
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
    badge: "3D Cinematic",
    is3D: true,
  },
  {
    title: "Brewnns — Interactive 3D Coffee World",
    description:
      "Immersive 3D interactive coffee world featuring a real-time WebGL 3D cup model with dynamic mouse camera physics, GSAP ScrollTrigger timeline, and buttery-smooth Lenis scrolling.",
    image: "/projects/gallery-2.png",
    tags: [
      "Three.js",
      "WebGL",
      "3D Modeling",
      "GSAP ScrollTrigger",
      "Lenis Scroll",
      "Interactive",
    ],
    link: "https://gallary-secound.vercel.app/",
    category: "3d",
    badge: "3D WebGL World",
    is3D: true,
  },
  {
    title: "Ridgeline Roofing — 3D Architectural Showcase",
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
    badge: "3D Scroll Motion",
    is3D: true,
  },
  {
    title: "Halden — 3D Luxury Furniture Gallery",
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
    title: "Stemline — 3D Cinematic Storytelling",
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
  {
    title: "Basharat Higher Secondary School — Official Web Portal",
    description:
      "Comprehensive official web platform for Basharat Higher Secondary School (BHSS) covering 15+ standardized portals including academic curricula, admissions desk, fee structure, boarding wings, live WhatsApp integration, and optimized responsive performance.",
    image: "/projects/bhss.png",
    tags: [
      "HTML5 & CSS3",
      "JavaScript (ES6+)",
      "Responsive Web",
      "WhatsApp Desk API",
      "SEO & Performance",
      "Vercel Deployment",
    ],
    link: "https://bhss.ac.pk/",
    github: "https://github.com/mhaseeb6662-spec/school-web",
    category: "fullstack",
    badge: "Official Portal",
  },
  {
    title: "8111c — Betting Game Platform",
    description:
      "A high-performance online betting and gaming platform. Built with a robust full-stack architecture to handle real-time interactions, secure data management, and scalable server deployments.",
    image: "/projects/8111c.jpg",
    tags: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Server Deployment",
      "WebSockets",
      "Full Stack",
    ],
    link: "https://8111c.com/",
    category: "fullstack",
  },
  {
    title: "Usama Vet Surgical — eCommerce & Admin Dashboard",
    description:
      "Comprehensive eCommerce platform with a fully functional admin dashboard. Features complete product management, dynamic content control, and robust order tracking, all manageable directly from the admin panel.",
    image: "/projects/usama-vet.png",
    tags: [
      "Full Stack",
      "eCommerce",
      "Admin Panel",
      "React",
      "Next.js",
      "Tailwind CSS",
      "API Integration",
    ],
    link: "https://usamavetsurgical.com/",
    github: "https://github.com/mhaseeb6662-spec/Usama-vet",
    confidential: false,
    category: "fullstack",
  },
  {
    title: "International Quran Academy App",
    description:
      "Full-featured mobile application for an International Quran Academy featuring live virtual classes, student & teacher management, real-time messaging, bulk notifications, and complete academic tracking.",
    image: "/projects/quran-academy.jpg",
    tags: [
      "React Native",
      "Android",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.io",
      "Live Classes",
      "Real-Time Chat",
      "Role-Based Access",
    ],
    confidential: true,
    github: undefined,
    category: "mobile",
  },
  {
    title: "Aqua Fishing Hub — Full-Stack Enterprise ERP",
    description:
      "End-to-end Enterprise Resource Planning (ERP) platform with complete multi-module integration for fisheries supply chain, cold storage inventory, fish stock orders, and real-time financial tracking.",
    image: "/projects/aqua-fishing.png",
    tags: [
      "Full Stack",
      "React",
      "Node.js",
      "Express.js",
      "ERP System",
      "Inventory Management",
      "PostgreSQL / MongoDB",
      "Tailwind CSS",
      "Analytics",
    ],
    link: "https://aquafishinghub.com",
    confidential: false,
    github: undefined,
    category: "fullstack",
  },
  {
    title: "POS",
    description:
      "Modern POS system with product admin, billing, expense tracking, and sales records.",
    image: "/projects/pos.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "https://sunny-pasca-9d6cd2.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/POS-React-js",
    category: "mobile",
  },

  {
    title: "Invoice Generating App",
    description:
      "Invoice tool with client management, automatic calculations, and organized record keeping.",
    image: "/projects/invoice.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "https://spiffy-bombolone-0ccece.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/invoicegenerating-app-react-js",
    category: "mobile",
  },
  {
    title: "Trading Web App",
    description:
      "Decentralized trading platform with live market tracking, token swaps, and analytics.",
    image: "/projects/trading.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "https://majestic-bubblegum-e59f83.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/Trading-web-app-react-js",
    category: "mobile",
  },
  {
    title: "Gemini AI Chat Assistant",
    description:
      "Interactive Generative AI chat platform inspired by Google Gemini. Features real-time streaming AI responses, prompt engineering, clean UI, and responsive conversation handling.",
    image: "/projects/gemini-chat.png",
    tags: [
      "Generative AI",
      "Gemini API",
      "React",
      "Tailwind CSS",
      "Prompt Engineering",
    ],
    link: "https://lively-seahorse-77ba91.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/chatapp",
    category: "ai",
    badge: "AI Chat Assistant",
    isAI: true,
  },

  {
    title: "Marriage Bureau Dashboard (Full Stack)",
    description:
      "Full-stack matchmaking system for managing profiles, requests, memberships, and appointments.",
    image: "/projects/marriage.png",
    tags: [
      "Next.js",
      "React",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Tailwind CSS",
      "JWT Authentication",
      "REST API",
    ],
    link: "https://ikhlasrishtacenters.com/",
    github: "https://github.com/mhaseeb6662-spec/NikkahFullstack",
    category: "fullstack",
  },

  {
    title: "Uplintix — Creative & Technology Solutions",
    description:
      "Premium creative and technology company website showcasing content, web, software, AI, automation, and digital solutions through a modern responsive experience.",
    image: "/projects/uplintix.png",
    tags: [
      "React",
      "Tailwind CSS",
      "Three.js",
      "React Router",
      "Framer Motion",
      "Modern UI/UX"
    ],
    link: "https://uplintix.com",
    github: "https://github.com/mhaseeb6662-spec/Uplintix",
    category: "3d",
    badge: "3D Web / Three.js",
    is3D: true,
  },
  {
    title: "JM Falcon Rise",
    description:
      "Corporate website showcasing services and brand identity with premium responsive design.",
    image: "/projects/jm.png",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "JavaScript",
      "Responsive Design",
      "SEO",
      "Framer Motion",
      "Vercel",
    ],
    link: "https://jmfalconrise.com/",
    github: "https://github.com/mhaseeb6662-spec/jmfalconrise", // Replace with the actual repository
    category: "fullstack",
  },
  {
    title: "Pak Motors — Dealership Management System",
    description:
      "Dealership system with role-based access, inventory, sales, face and fingerprint verification.",
    image: "/projects/motors.png",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Authentication",
      "Role-Based Access",
      "Face Verification",
      "Fingerprint",
      "Live Camera",
      "Digital Signature",
      "REST API",
    ],
    confidential: true,
    github: undefined,
    category: "fullstack",
  },

  {
    title: "Pharmacy Management System",
    description:
      "Multi-branch pharmacy system with inventory, prescriptions, billing, and analytics.",
    image: "/projects/pharmacy.png",
    tags: [
      "React",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "JWT Authentication",
      "Role-Based Access",
      "Inventory Management",
      "Multi-Branch",
      "PDF Reports",
      "Railway",
    ],
    confidential: true,
    github: undefined,
    category: "fullstack",
  },
  {
    title: "Steel POS & Inventory Management System",
    description:
      "Steel POS system with inventory tracking, sales, invoicing, and financial reporting.",
    image: "/projects/steel-pos.png",
    tags: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Tailwind CSS",
      "TypeScript",
      "JWT Authentication",
      "REST API",
      "Role-Based Access",
      "Inventory Management",
      "Invoice System",
      "Analytics Dashboard",
    ],
    confidential: true,
    github: undefined,
    category: "fullstack",
  },

  {
    title: "Kharan Mobile Parts — WooCommerce Store",
    description:
      "Custom WooCommerce store with catalog, secure checkout, and payment gateway integration.",
    image: "/projects/kharan.png",
    tags: [
      "WordPress",
      "WooCommerce",
      "PHP",
      "Custom Theme Development",
      "Elementor",
      "JavaScript",
      "CSS3",
      "Responsive Design",
      "SEO",
      "Performance Optimization",
    ],
    link: "https://kharanmobileparts.com/",
    confidential: false,
    github: undefined,
    category: "fullstack",
  },

  {
    title: "Sale Marketo — Digital Marketing Agency Website",
    description:
      "Agency website with custom landing pages, lead forms, and SEO-friendly structure.",
    image: "/projects/sale.png",
    tags: [
      "WordPress",
      "Elementor",
      "PHP",
      "JavaScript",
      "CSS3",
      "Responsive Design",
      "SEO",
      "Performance Optimization",
      "Landing Pages",
    ],
    link: "https://salemarketo.com/",
    confidential: false,
    github: undefined,
    category: "fullstack",
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
    role: "MERN Stack Developer (Remote)",
    company: "Norleads — Poland (International Company)",
    description:
      "Contributed as a remote MERN Stack Developer for an international client based in Poland, building and maintaining full-stack features across the React frontend and Node.js/Express backend, working with a distributed team in a fully remote setup.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    current: false,
  },
  {
    period: "2024 — Present",
    role: "MERN Stack Developer",
    company: "Okiiee Software House, Multan",
    description:
      "Working as a MERN Stack Developer, building and maintaining full-stack web applications. Developing scalable backend APIs with Node.js and Express, managing databases with MongoDB, and creating responsive frontend interfaces using React. Focused on authentication, CRUD operations, and performance optimization.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    current: true,
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