export interface BentoItem {
  image: string;
  title: string;
  colSpan?: string;
  caption?: string;
  aspectRatio?: string;
}

export interface ProjectTestimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export interface KeyMetric {
  value: string;
  label: string;
}

export interface ScopeDeliverable {
  title: string;
  description: string;
  deliverables: string[];
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  oneLiner: string;
  tagline: string;
  client: string;
  year: string;
  timeline: string;
  role: string;
  category: string;
  featured: boolean;
  coverImage: string;
  heroImage: string;
  services: string[];
  tags: string[];
  liveUrl?: string;
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  keyMetrics: KeyMetric[];
  scopeItems: ScopeDeliverable[];
  bentoGallery: BentoItem[];
  testimonial?: ProjectTestimonial;
  techStack: string[];
}

export const projectsData: Project[] = [
  {
    id: "02",
    slug: "clinod",
    title: "Clinod",
    subtitle: "All-in-One Patient Booking & Clinical Workflow Dashboard",
    oneLiner: "Clinical workflow and patient booking dashboard.",
    tagline: "Helping busy medical practices manage bookings, patient progress, and automated follow-ups without administrative burnout.",
    client: "Clinod Health Systems",
    year: "2024",
    timeline: "5 Weeks",
    role: "Lead Healthcare UX & Systems Specialist",
    category: "Practice Management & Clinic Operations Dashboard",
    featured: true,
    coverImage: "/optimized/ChatGPT-Image-Aug-22_-2026_-01_21_14-PM.webp",
    heroImage: "/optimized/ChatGPT-Image-Aug-22_-2026_-01_21_14-PM.webp",
    services: [
      "Product & UI/UX Design",
      "Healthcare Dashboard Architecture",
      "Design Systems & Tokenization",
      "Workflow Simplification"
    ],
    tags: ["HealthTech", "Clinic Dashboard", "Patient Booking", "Workflow UX", "SaaS"],
    liveUrl: "https://clinod.example.com",
    overview: "Clinod is a clinical practice management dashboard designed for doctors and clinic receptionists. I engineered a high-efficiency schedule grid, real-time patient progress trackers, and automated follow-up pipelines that eliminate hours of front-desk chaos.",
    challenge: "<p>Running a private clinic is chaotic enough without software fighting your staff. Clinod's backend was packed with medical features, but doctors and receptionists were juggling four different screens just to check in a patient, log visit notes, and schedule a follow-up.</p><p>When clinical software is cluttered, appointment slots get missed, patient records get delayed, and staff burn out on repetitive admin work.</p>",
    solution: "<p>I consolidated their fragmented workflows into a clean, single-screen patient cockpit built for speed and calm focus.</p><ul><li><strong>30-second patient check-in:</strong> Quick-search patient profiles with immediate access to appointment history and upcoming care plans.</li><li><strong>Timeline progress tracker:</strong> Visual patient health cards showing treatment milestones, visit notes, and medication updates at a glance.</li><li><strong>Automated follow-up pipeline:</strong> Built-in WhatsApp and SMS reminder triggers that cut down patient no-shows.</li></ul>",
    result: "<ul><li><strong>-45%</strong> reduction in daily administrative logging time for front-desk staff</li><li><strong>-31%</strong> drop in patient appointment no-shows within 60 days</li><li><strong>99.2%</strong> on-time consultation flow across partner clinics</li></ul>",
    keyMetrics: [
      { value: "-45%", label: "Admin Logging Time" },
      { value: "-31%", label: "Appointment No-Shows" },
      { value: "99.2%", label: "On-Time Consultation Flow" },
      { value: "< 2m", label: "Front-Desk Staff Onboarding" }
    ],
    scopeItems: [
      {
        title: "Front-Desk Workflow Audit",
        description: "Observing real receptionists and doctors during busy clinic mornings to cut out repetitive paperwork and wasted clicks.",
        deliverables: [
          "Check-in time breakdown",
          "Patient booking flow redesign",
          "Clean screen navigation map",
          "Privacy-safe record layouts"
        ]
      },
      {
        title: "Single-Screen Patient Dashboard",
        description: "Designing a calm, high-efficiency desktop interface where staff can manage schedules, check-ins, and doctor notes in one place.",
        deliverables: [
          "Quick-access patient overview screen",
          "Color-coded appointment calendar",
          "Treatment timeline & visit notes",
          "Automated WhatsApp and SMS reminders"
        ]
      },
      {
        title: "Frontend System & Component Code",
        description: "Delivering responsive UI specifications and reusable dashboard components so developers could ship without bugs.",
        deliverables: [
          "Modern UI component library",
          "Desktop and tablet screen layouts",
          "Fast table filters and search states",
          "Developer implementation guide"
        ]
      }
    ],
    bentoGallery: [
      {
        image: "/optimized/ChatGPT-Image-Aug-22_-2026_-01_21_14-PM.webp",
        title: "Patient Cockpit & Booking Schedule",
        colSpan: "col-span-8 lg:col-span-4",
        caption: "Live clinic dashboard tracking daily appointments, patient check-ins, and follow-ups",
        aspectRatio: "1254 / 1254"
      },
      {
        image: "/optimized/ChatGPT-Image-Aug-22_-2026_-04_42_06-PM.webp",
        title: "Quick-Access Patient Profile",
        colSpan: "col-span-4 lg:col-span-2",
        caption: "Instant view of treatment history, medication logs, and doctor notes",
        aspectRatio: "1122 / 1402"
      },
      {
        image: "/optimized/17874013837d71.webp",
        title: "Appointment Management Ecosystem",
        colSpan: "col-span-8 lg:col-span-4",
        caption: "Comprehensive booking schedule and patient queue management",
        aspectRatio: "2352 / 1760"
      },
      {
        image: "/optimized/ChatGPT-Image-Aug-22_-2026_-06_10_24-PM.webp",
        title: "Doctor Daily Schedule & Follow-Ups",
        colSpan: "col-span-4 lg:col-span-2",
        caption: "One-tap appointment updates and automated patient reminder triggers",
        aspectRatio: "1024 / 1536"
      },
      {
        image: "/optimized/178740156130f0.webp",
        title: "Patient Progress Tracker",
        colSpan: "col-span-8 lg:col-span-4",
        caption: "Treatment timeline showing consultation outcomes and upcoming checkups",
        aspectRatio: "2352 / 1760"
      },
      {
        image: "/optimized/ChatGPT-Image-Aug-22_-2026_-06_29_18-PM.webp",
        title: "Prescription & Follow-Up Hub",
        colSpan: "col-span-4 lg:col-span-2",
        caption: "Digital prescription records with integrated follow-up status",
        aspectRatio: "1254 / 1254"
      },
      {
        image: "/optimized/178720370955eb.webp",
        title: "Mobile Clinic Companion",
        colSpan: "col-span-4 lg:col-span-2",
        caption: "Responsive mobile views for doctors reviewing schedules on the go",
        aspectRatio: "1632 / 2544"
      }
    ],
    testimonial: {
      quote: "Our front desk staff used to stay an hour late just catching up on paperwork and follow-up calls. Saif turned Clinod into a clean, intuitive cockpit that keeps our practice running on time with zero headaches.",
      author: "Dr. Alistair Thorne, MD",
      role: "Medical Director",
      company: "Clinod Health Systems"
    },
    techStack: ["React", "TypeScript", "TailwindCSS", "shadcn/ui", "PostgreSQL", "Vite"]
  }

];

export function getProjectBySlug(slug?: string): Project {
  return projectsData[0];
}

export function getAdjacentProjects(): { prev?: Project; next?: Project } {
  return { prev: projectsData[0], next: projectsData[0] };
}

export function getNextTwoProjects(): Project[] {
  return [];
}
