export const siteConfig = {
  name: "Abdul Haseeb",
  shortName: "Ab Haseeb",
  role: "Software Engineer · Full-Stack & React Native Developer",
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
    "Full-Stack Software Engineer & Mobile App Developer with hands-on experience in React.js, Next.js, React Native, Node.js, Express.js, NestJS, MongoDB, and PostgreSQL. Passionate about AI integration and transitioning into Agentic AI systems to build intelligent, autonomous, and high-performance digital solutions.",
};

export const skills = [
  "React Native",
  "React.js",
  "Next.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "NestJS (Learning)",
  "PostgreSQL (Learning)",
  "Agentic AI (Focus)",
  "Node.js",
  "Express.js",
  "MongoDB",
  "Tailwind CSS",
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
  tags: string[];
  link?: string;
  github?: string;
  confidential?: boolean;
};

export const projects: Project[] = [
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
  },
  {
    title: "Renoviah Talent — HR Management & AI Platform",
    description:
      "Modern full-stack HR & talent management web platform integrated with AI screening, candidate tracking pipeline, smart hiring workflows, and comprehensive analytics dashboard.",
    image: "/projects/renovia-talent.png",
    tags: [
      "Full Stack",
      "Next.js",
      "React",
      "Node.js",
      "AI Integration",
      "Tailwind CSS",
      "MongoDB",
      "REST API",
      "Analytics",
    ],
    link: "https://renoviatalent.in/",
    confidential: false,
    github: undefined,
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
  },
  {
    title: "POS",
    description:
      "Modern POS system with product admin, billing, expense tracking, and sales records.",
    image: "/projects/pos.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "https://sunny-pasca-9d6cd2.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/POS-React-js",
  },

  {
    title: "Invoice Generating App",
    description:
      "Invoice tool with client management, automatic calculations, and organized record keeping.",
    image: "/projects/invoice.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "https://spiffy-bombolone-0ccece.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/invoicegenerating-app-react-js",
  },
  {
    title: "Trading Web App",
    description:
      "Decentralized trading platform with live market tracking, token swaps, and analytics.",
    image: "/projects/trading.png",
    tags: ["React", "Tailwind CSS", "Firebase"],
    link: "https://majestic-bubblegum-e59f83.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/Trading-web-app-react-js",
  },
  {
    title: "Gemini AI Chat Clone",
    description:
      "AI-powered chat app inspired by Gemini with real-time responses and clean UI.",
    image: "/projects/gemini-chat.png",
    tags: ["React", "Tailwind CSS"],
    link: "https://lively-seahorse-77ba91.netlify.app/",
    github: "https://github.com/mhaseeb6662-spec/chatapp",
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