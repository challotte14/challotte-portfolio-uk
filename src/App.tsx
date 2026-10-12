import {
  useEffect,
  useState,
  type FormEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import profileImage from "./assets/images/challotte.webp";
import aboutImage from "./assets/images/challotte-about.webp";
import sheForHerImage from "./assets/images/sheforher.png";
import shiftWiseImage from "./assets/images/shiftwise.png";
import empowerHerImage from "./assets/images/empowerher.png";
import opsTrackImage from "./assets/images/opstrack.png";
import cvFile from "./assets/docs/challotte-maahlamela-cv.pdf";

const market = {
  "location": "Johannesburg, South Africa • Open to UK relocation",
  "contact": "I’m looking for UK-based Software Engineer, Backend .NET Engineer and Full-Stack .NET roles. I bring 5+ years of enterprise delivery and production support at SigniFlow, alongside independently deployed .NET and React products. I require Skilled Worker sponsorship and am open to relocation.",
  "footer": "Open to UK relocation • Skilled Worker sponsorship required."
};

import netCoreMasteryCert from "./assets/certificates/net-core-mastery.pdf";
import csharpDotnetCert from "./assets/certificates/csharp-dotnet-developers.pdf";
import cryptographyCert from "./assets/certificates/cryptography.pdf";
import operatingSystemsCert from "./assets/certificates/operating-systems.pdf";
import softwareSecurityCert from "./assets/certificates/software-security.pdf";
import hardwareSecurityCert from "./assets/certificates/hardware-security.pdf";
import javaProgrammingCert from "./assets/certificates/java-programming-principles.pdf";

type CaseStudyKey = "sheforher" | "opstrack" | "shiftwise";

type Metric = {
  value: string;
  label: string;
};

type Project = {
  title: string;
  eyebrow: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  caseStudyKey?: CaseStudyKey;
  isFlagship?: boolean;
  isProprietary?: boolean;
  codeAccessNote?: string;
  liveArchitecture?: string[];
  aiNote?: string;
  problemHook?: string;
  systemLabel?: string;
  systemSteps?: string[];
  signals?: string[];
  metrics?: Metric[];
};

type FeaturedProject = Project &
  Required<Pick<Project, "caseStudyKey" | "systemLabel" | "systemSteps" | "signals">>;

type CaseStudyPanel = {
  label: string;
  title: string;
  text: string;
  points: string[];
};

type CaseStudy = {
  title: string;
  badge: string;
  summary: string;
  liveUrl?: string;
  architecturePanel?: string;
  architectureSequence?: [string, string][];
  quickFacts?: Metric[];
  panels: CaseStudyPanel[];
};

type Certification = {
  title: string;
  provider: string;
  year: string;
  preview: string | null;
};

type PreviewableCertification = Certification & { preview: string };

export default function Portfolio() {
  const projects: Project[] = [
    {
      title: "She for Her",
      eyebrow: "Backend-Heavy Mobile Safety Platform",
      description:
        "A governed women’s safety platform with authenticated reporting, evidence and AI-assisted analysis, separate community and external-source review processes, audited publication, and member-facing safety updates.",
      aiNote:
        "AI assists with analysis; authorised moderators review evidence and control publication.",
      stack: [
        "ASP.NET Core",
        "React",
        "TypeScript",
        "Entity Framework Core",
        "SQL Server",
        "JWT Authentication",
        "Capacitor",
        "AI Moderation",
        "xUnit",
        "Coverlet",
      ],
      image: sheForHerImage,
      liveUrl:"https://sheforher.netlify.app",
      isProprietary: true,
      codeAccessNote:
        "Proprietary commercial codebase. Technical architecture and testing walkthrough available during interview.",
      liveArchitecture: [
        "API: ASP.NET Core · Render",
        "Database: SQL Server · MonsterASP.NET",
        "Client: React + TypeScript · Netlify",
      ],
      caseStudyKey: "sheforher",
      isFlagship: true,
      systemLabel: "Governed information flow",
      systemSteps: [
        "Submit / Import",
        "Analyse",
        "Human Review",
        "Publish",
        "Discover",
      ],
      signals: [
        "Separate community and source moderation",
        "Checklist-gated human publication",
        "Structured provenance and audit history",
        "Typed web, Android, and iOS delivery",
      ],
      metrics: [
        { value: "38", label: "business API operations" },
        { value: "8", label: "report states" },
        { value: "84", label: "passing tests" },
        { value: "3", label: "delivery targets" },
      ],
    },
    {
      title: "OpsTrack",
      eyebrow: "Operations Workflow Platform",
      description:
        "An operations workflow platform featuring state-machine-enforced ticket lifecycles, rigorous role-based authorisation boundaries, and automated assignment rules that prevent invalid or unauthorised state transitions.",
      problemHook:
        "Built to replace fragile, unaudited email ticketing with a strict server-side state machine.",
      stack: [
        "ASP.NET Core",
        "React",
        "TypeScript",
        "Entity Framework Core",
        "SQL Server",
        "JWT Authentication",
        "Workflow Engine",
        "REST APIs",
      ],
      image: opsTrackImage,
      liveUrl: "https://opstrack.netlify.app",
      sourceUrl: "https://github.com/challotte14/OpsTrack",
      liveArchitecture: [
        "API: ASP.NET Core · Render",
        "Database: SQL Server · MonsterASP.NET",
        "Client: React + TypeScript · Netlify",
        "BFF: Netlify Functions",
      ],
      caseStudyKey: "opstrack",
      systemLabel: "Ticket lifecycle",
      systemSteps: [
        "Logged",
        "Assigned",
        "In Progress",
        "Resolved",
        "Cancelled",
        "Abandoned",
      ],
      signals: [
        "Server-side workflow enforcement",
        "Role-based authorisation",
        "Audit-safe lifecycle management",
        "Operational dashboards and notifications",
      ],
      metrics: [
        { value: "20", label: "API operations" },
        { value: "18", label: "passing tests" },
        { value: "8", label: "ticket states" },
        { value: "2", label: "privileged roles" },
      ],
    },
    {
      title: "ShiftWise",
      eyebrow: "Workforce Scheduling Platform",
      description:
        "An end-to-end workforce scheduling engine that evaluates volatile staff availability against skills, coverage and overtime rules, with coverage, fairness and skill-match scoring plus containerised deployment for reliable test environments.",
      problemHook:
        "Designed to match shifting staff availability against skills, coverage targets, and strict operational rules.",
      stack: [
        "ASP.NET Core",
        "React",
        "TypeScript",
        "Entity Framework Core",
        "SQL Server",
        "JWT Authentication",
        "Docker",
        "REST APIs",
      ],
      image: shiftWiseImage,
      liveUrl: "https://shiftwise-workforce.netlify.app",
      sourceUrl: "https://github.com/challotte14/ShiftWise",
      liveArchitecture: [
        "API: ASP.NET Core · Render",
        "Database: SQL Server · MonsterASP.NET",
        "Client: React + TypeScript · Netlify",
      ],
      caseStudyKey: "shiftwise",
      systemLabel: "Scheduling pipeline",
      systemSteps: [
        "Workforce",
        "Availability",
        "Requirements",
        "Generation",
        "Coverage",
        "Violations",
      ],
      signals: [
        "Rules-based schedule generation",
        "Availability and skills matching",
        "Coverage analytics and exception reporting",
        "Containerised full-stack deployment",
      ],
      metrics: [
        { value: "29", label: "business API operations" },
        { value: "23", label: "passing tests" },
        { value: "4", label: "schedule scores" },
        { value: "4", label: "rule policies" },
      ],
    },
    {
      title: "Empower Her",
      eyebrow: "Supporting Product Prototype",
      description:
        "Responsive resource-discovery platform that provides structured access to safety, legal, and support information through clear user journeys.",
      stack: ["React", "Tailwind CSS", "JavaScript", "Responsive UI"],
      image: empowerHerImage,
      liveUrl: "https://empowerhersupport.netlify.app",
      sourceUrl: "https://github.com/challotte14/EmpoweHer",
    },
  ];

const clientProjects = [
  {
    title: "Ndivhuwo Mathoma Portfolio",
    type: "Client Portfolio Website",
    description:
      "Built a fast, mobile-first portfolio that turns Ndivhuwo’s experience and project work into a clear recruiter journey, with streamlined assets and responsive content delivery for quick loading across devices.",
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
      "Netlify",
    ],
    capabilities: [
      "Requirements gathering",
      "UI/UX design",
      "Responsive development",
      "Mobile performance",
      "Deployment",
    ],
    liveUrl: "https://ndivhuwo-mathoma.netlify.app",
  },
  {
    title: "Phillip Baloyi Portfolio",
    type: "Client Portfolio Website",
    description:
      "Translated Phillip’s professional identity and multi-format career content into a distinctive, typography-led portfolio with an intuitive narrative that guides visitors from expertise to evidence and contact.",
    stack: [
      "React",
      "JavaScript",
      "Tailwind CSS",
      "Responsive Design",
      "Netlify",
    ],
    capabilities: [
      "Requirements gathering",
      "UI/UX design",
      "Responsive development",
      "Brand translation",
      "Deployment",
    ],
    liveUrl: "https://philip-baloyi.netlify.app",
  },
];

  const featuredProjects = projects.filter(
    (project): project is FeaturedProject =>
      Boolean(
        project.caseStudyKey &&
          project.systemLabel &&
          project.systemSteps &&
          project.signals
      )
  );
  const supportingProjects = projects.filter((project) => !project.caseStudyKey);

  const caseStudies: Record<CaseStudyKey, CaseStudy> = {
    sheforher: {
      title: "She for Her",
      badge: "Flagship backend system",
      liveUrl: "https://sheforher.netlify.app",
      architecturePanel: "Architecture",
      architectureSequence: [
        ["React + TypeScript apps", "Authenticated web, Android, and iOS journeys"],
        ["ASP.NET Core API", "Validation, JWT roles, state rules, and public DTO boundaries"],
        ["Moderation services", "Durable AI jobs, evidence checks, and human decisions"],
        ["SQL Server", "Reports, provenance, row versions, and immutable audit history"],
      ],
      quickFacts: [
        { value: "38", label: "business API operations" },
        { value: "84", label: "passing tests" },
        { value: "3", label: "platform targets" },
      ],
      summary:
        "A governed, mobile-first safety platform built as a full .NET product system: authenticated reporting, evidence and asynchronous AI assistance, distinct moderation processes, immutable audit history, structured external-source review, and published member updates.",
      panels: [
        {
          label: "Problem & Scope",
          title: "A governed safety platform—not a public blacklist.",
          text:
            "Authenticated users submit encounter reports, authorised moderators review them, and search exposes only approved information. The system deliberately avoids guilt scoring, public shaming, facial recognition, and unrestricted scraping.",
          points: [
            "Authenticated community reporting",
            "Clear allegation disclaimers",
            "No guilt or credibility scoring",
            "Deliberately constrained product scope",
          ],
        },
        {
          label: "Architecture",
          title: "Domain rules stay behind the API boundary.",
          text:
            "Core domain logic, EF Core persistence, secured ASP.NET APIs, the React and TypeScript client, and tests are separated cleanly. Authentication, validation, state transitions, and visibility rules remain server-controlled.",
          points: [
            "SheForHer.Core domain layer",
            "EF Core and SQL Server data layer",
            "ASP.NET Core secured API",
            "React and TypeScript client, xUnit tests, and Coverlet coverage",
          ],
        },
        {
          label: "Community Moderation",
          title: "Community reports have their own governed review process.",
          text:
            "Community reports remain private through analysis and human review. Starting and completing a review requires stage-specific checklists; related-report matches are reviewed independently, decisions require reasons, and concurrency tokens prevent one moderator from overwriting another’s work.",
          points: [
            "Start-review and publication checklists",
            "Potential-match review without guilt inference",
            "Role and concurrency enforcement",
            "Immutable decisions and rejection categories",
          ],
        },
        {
          label: "AI & Evidence",
          title: "AI assists. A human always decides.",
          text:
            "Reports support multiple image or PDF evidence files with validated formats, generated storage names, hashes, and publication controls. Durable background jobs run writing, sensitive-content, duplicate, and image-authenticity analysis with retry and dead-letter handling; findings remain advisory and moderator-only. The provider abstraction and human-in-the-loop safety model apply Azure AI application patterns I am actively developing through AI-103 preparation.",
          points: [
            "Up to five evidence files",
            "Asynchronous moderation jobs",
            "Retry and dead-letter handling",
            "Human-in-the-loop decisions",
          ],
        },
        {
          label: "External Sources",
          title: "External records follow a separate provenance-first review process.",
          text:
            "Official notices, court judgments, scam alerts, and news mentions are imported into their own review queue. Moderators verify source details through structured checklists before publication, while corrections, rechecks, associations, rejection reasons, and every status change remain auditable.",
          points: [
            "Separate import and review lifecycle",
            "Publisher and source attribution",
            "Correction and recheck history",
            "No automatic same-name association",
          ],
        },
        {
          label: "Member Discovery",
          title: "Published safety information reaches members with context.",
          text:
            "The member dashboard now combines recent published community reports and reviewed external records into a safety-update feed. Search results preserve their source category, publication date, evidence status, legal wording, ambiguity warnings, and original attribution instead of flattening everything into one risk score.",
          points: [
            "Recent published safety updates",
            "Accurate publication counts",
            "Clearly separated result categories",
            "Context-rich source presentation",
          ],
        },
        {
          label: "Privacy & Security",
          title: "Sensitive data is protected by explicit engineering guardrails.",
          text:
            "SheForHer applies data-minimisation and defence-in-depth controls relevant to GDPR review and OWASP-aligned engineering. This is implementation evidence—not a claim of formal legal certification—and production launch would still require qualified privacy, security, and legal review.",
          points: [
            "JWT roles and protected moderator endpoints",
            "Private reporter identity and minimal public DTOs",
            "MIME, extension, size, and generated-name file controls",
            "Row-version concurrency and immutable audit records",
          ],
        },
        {
          label: "Mobile Delivery",
          title: "One codebase. Web, Android, and iOS.",
          text:
            "Capacitor packages the mobile-first client as native Android and iOS apps. Native access tokens use encrypted secure storage, refresh tokens remain in HttpOnly cookies, lifecycle events revalidate sessions, and platform-specific Google authentication is verified by the backend before SheForHer JWTs are issued.",
          points: [
            "Web, Android, and iOS targets",
            "Encrypted native token storage",
            "Backend-verified Google identity",
            "Mobile lifecycle handling",
          ],
        },
        {
          label: "Engineering Outcome",
          title: "A production-minded safety platform.",
          text:
            "SheForHer is the portfolio’s flagship because it now combines backend architecture, two governed moderation domains, authentication, evidence processing, resilient background work, human-governed AI, source provenance, member discovery, native packaging, and 84 passing automated test cases in one cohesive system.",
          points: [
            "38 business API operations",
            "84 passing automated tests",
            "Community and external-source governance",
            "Web, Android, and iOS delivery",
          ],
        },
      ],
    },
    opstrack: {
      title: "OpsTrack",
      badge: "Backend-first workflow system",
      architecturePanel: "Backend Design",
      architectureSequence: [
        ["React + TypeScript client", "Role-specific operational actions"],
        ["ASP.NET Core API", "JWT authentication and request validation"],
        ["Domain actions", "Assignment, transition, comment, and notification rules"],
        ["EF Core + SQL", "Ticket state, history, and dashboard persistence"],
      ],
      quickFacts: [
        { value: "20", label: "business API operations" },
        { value: "18", label: "passing tests" },
        { value: "8", label: "ticket states" },
      ],
      summary:
        "Role-based incident operations platform with server-side workflow enforcement, audit-safe ticket lifecycles, assignment logic, notifications, and operational reporting.",
      liveUrl: "https://opstrack.netlify.app",
      panels: [
        {
          label: "Problem",
          title: "Support teams need controlled workflows, not just ticket lists.",
          text:
            "OpsTrack was designed around real support operations where incidents must be logged, assigned, worked, resolved, cancelled, or abandoned without losing accountability or operational history.",
          points: [
            "Centralised incident visibility",
            "Controlled ticket ownership",
            "Preserved ticket history",
            "Operational workload tracking",
          ],
        },
        {
          label: "Workflow Enforcement",
          title: "Business rules are enforced server-side.",
          text:
            "The ASP.NET Core API validates workflow rules so invalid ticket transitions, unauthorised actions, and destructive record deletion are blocked by the backend rather than relying on frontend button visibility.",
          points: [
            "Backend-controlled state transitions",
            "Role permission checks",
            "Cancellation reason enforcement",
            "No destructive ticket deletion",
          ],
        },
        {
          label: "Ticket Lifecycle",
          title: "Tickets move through controlled operational states.",
          text:
            "The platform models ticket progress as a lifecycle instead of basic CRUD. Each state change represents a domain action with different rules depending on the user role and the current ticket state.",
          points: [
            "Logged",
            "Assigned",
            "In Progress",
            "Resolved",
            "Cancelled",
            "Abandoned",
          ],
        },
        {
          label: "Permissions",
          title: "Each role has explicit workflow boundaries.",
          text:
            "Employees, support agents, and administrators have different operational responsibilities. Permissions are validated by the API so restricted actions cannot be executed by bypassing the interface.",
          points: [
            "Employees manage their own tickets",
            "Agents self-assign and action tickets",
            "Administrators assign and terminate workflows",
            "Role-specific transition restrictions",
          ],
        },
        {
          label: "Backend Design",
          title: "The API is structured around domain actions.",
          text:
            "OpsTrack exposes dedicated endpoints for assignment, status changes, comments, notifications, dashboard summaries, and support-agent lookup instead of treating every operation as generic record management.",
          points: [
            "ASP.NET Core REST API",
            "React + TypeScript client",
            "Entity Framework Core",
            "SQL Server persistence",
            "JWT authentication",
            "Dashboard and notification services",
          ],
        },
        {
          label: "Outcome",
          title: "A production-style internal operations platform.",
          text:
            "OpsTrack demonstrates backend-heavy full-stack engineering across business-rule enforcement, authorisation, workflow state management, persistence, reporting, and a polished operational interface.",
          points: [
            "Workflow-driven architecture",
            "Audit-friendly data model",
            "Enterprise-style support tooling",
            "Strong backend engineering signal",
          ],
        },
      ],
    },
    shiftwise: {
      title: "ShiftWise",
      badge: "Scheduling and optimisation system",
      architecturePanel: "Security & API",
      architectureSequence: [
        ["React + TypeScript client", "Workforce, availability, and demand inputs"],
        ["Secured .NET API", "JWT validation and application services"],
        ["Scheduling engine", "Eligibility, coverage, fairness, and overtime rules"],
        ["EF Core + SQL", "Requirements, assignments, and analytics persistence"],
      ],
      quickFacts: [
        { value: "29", label: "business API operations" },
        { value: "23", label: "passing tests" },
        { value: "4", label: "schedule scores" },
      ],
      summary:
        "Workforce scheduling platform that combines employee data, availability, skills, staffing requirements, schedule generation, coverage analytics, and rule-violation detection.",
      liveUrl: "https://shiftwise-workforce.netlify.app",
      panels: [
        {
          label: "Problem",
          title: "Manual workforce planning does not scale reliably.",
          text:
            "Spreadsheet-based scheduling makes it difficult to balance staff availability, skills, shift requirements, and coverage targets. ShiftWise centralises those inputs and turns them into a structured scheduling workflow.",
          points: [
            "Staffing shortages",
            "Coverage gaps",
            "Skills mismatches",
            "Manual planning overhead",
          ],
        },
        {
          label: "Workforce Model",
          title: "Scheduling begins with structured workforce data.",
          text:
            "Employees are represented with the information required for scheduling decisions, including skills, availability, and assignment eligibility. This creates a consistent foundation for automated planning.",
          points: [
            "Employee profiles",
            "Skills management",
            "Availability records",
            "Assignment eligibility",
          ],
        },
        {
          label: "Requirements",
          title: "Operational demand is modelled before assignments are made.",
          text:
            "Shift requirements define when staff are needed, how many employees are required, and which skills must be present. The scheduling process evaluates employees against those constraints.",
          points: [
            "Shift definitions",
            "Required headcount",
            "Required skills",
            "Coverage targets",
          ],
        },
        {
          label: "Scheduling Engine",
          title: "Schedule generation is driven by business rules.",
          text:
            "The scheduling engine evaluates availability, employee skills, staffing requirements, and assignment constraints before producing schedule results. Invalid combinations are rejected rather than silently accepted.",
          points: [
            "Availability validation",
            "Skills matching",
            "Requirement evaluation",
            "Assignment generation",
          ],
        },
        {
          label: "Coverage Analytics",
          title: "Workforce readiness becomes measurable.",
          text:
            "The dashboard surfaces coverage percentages, assignment totals, staffing demand, and unfilled requirements so planners can identify operational gaps before schedules are finalised.",
          points: [
            "Coverage percentage",
            "Unfilled requirements",
            "Assignment totals",
            "Staffing demand",
          ],
        },
        {
          label: "Violation Detection",
          title: "Scheduling risks are identified automatically.",
          text:
            "ShiftWise records and surfaces rule violations such as coverage shortages, assignment conflicts, unavailable employees, and skills mismatches instead of allowing invalid schedules to pass unnoticed.",
          points: [
            "Coverage shortages",
            "Availability conflicts",
            "Skills mismatches",
            "Invalid assignments",
          ],
        },
        {
          label: "Security & API",
          title: "The platform uses a secured, layered backend.",
          text:
            "The React and TypeScript client communicates with an ASP.NET Core API secured with JWT authentication. Entity Framework Core and SQL Server provide persistence while scheduling rules remain isolated from the interface.",
          points: [
            "JWT authentication",
            "ASP.NET Core REST API",
            "Entity Framework Core",
            "SQL Server persistence",
          ],
        },
        {
          label: "Outcome",
          title: "A production-style workforce planning platform.",
          text:
            "ShiftWise demonstrates business-rule modelling, scheduling logic, API design, authentication, persistence, analytics, and operational exception handling in one cohesive enterprise-style system.",
          points: [
            "Scheduling engine",
            "Constraint evaluation",
            "Operational analytics",
            "Layered architecture",
            "Containerised deployment",
          ],
        },
      ],
    },
  };

  const stats = [
    { value: "5+", label: "Years delivering enterprise software" },
    { value: "End to End", label: "Requirements, architecture, build, and release" },
    { value: ".NET", label: "Primary backend engineering ecosystem" },
    { value: "3 Live", label: "Full-stack products deployed end to end" },
  ];

  const skills = {
    "Backend & API Engineering": [
      "C#",
      ".NET",
      "ASP.NET Core",
      "REST API Design",
      "Entity Framework Core",
      "Dependency Injection",
      "Middleware",
      "JWT Authentication",
      "Role-Based Authorisation",
    ],
    "Data & System Design": [
      "SQL Server",
      "Relational Data Modelling",
      "Entity Relationship Diagrams",
      "Database Design",
      "Stored Procedures",
      "Query Optimisation",
      "Workflow Modelling",
      "Business-Rule Enforcement",
    ],
    "Frontend & Product Delivery": [
      "React",
      "TypeScript",
      "JavaScript",
      "Blazor",
      "MudBlazor",
      "Tailwind CSS",
      "Responsive UI",
      "UI/UX Implementation",
      "Accessible Interfaces",
    ],
    "DevOps & Deployment": [
      "Docker",
      "Azure DevOps",
      "CI/CD",
      "Git",
      "GitHub Actions",
      "Netlify",
      "Netlify Functions",
      "Render",
      "MonsterASP.NET SQL Hosting",
      "IIS",
      "Environment Configuration",
      "Production Support",
    ],
    "Testing & Quality Engineering": [
      "xUnit",
      "Coverlet",
      "Unit Testing",
      "API Integration Testing",
      "Persistence Testing",
      "Protected Endpoint Testing",
      "TypeScript Type Checking",
      "Regression Testing",
    ],
    "Enterprise & Legacy Systems": [
      "VB.NET",
      "ASP.NET Web Forms",
      "ASPX",
      "PHP Custom Systems",
      "Laravel",
      "Event Handlers",
      "System Integrations",
      "Production Issue Investigation",
    ],
  };

  const certifications: Certification[] = [
  {
    title: ".NET Core Mastery: Advanced Techniques for Experienced Developers",
    provider: "EDUCBA / Coursera",
    year: "2026",
    preview: netCoreMasteryCert,
  },
  {
    title: "AI-103: Azure AI Apps and Agents Developer Associate",
    provider: "Microsoft certification preparation",
    year: "In progress — 2026",
    preview: null,
  },
  {
    title: "C# for .NET Developers",
    provider: "Board Infinity / Coursera",
    year: "2026",
    preview: csharpDotnetCert,
  },
  {
    title: "Cryptography",
    provider: "University of Maryland / Coursera",
    year: "2020",
    preview: cryptographyCert,
  },
  {
    title: "Operating Systems: Overview, Administration, and Security",
    provider: "IBM / Coursera",
    year: "2020",
    preview: operatingSystemsCert,
  },
  {
    title: "Software Security",
    provider: "University of Maryland / Coursera",
    year: "2020",
    preview: softwareSecurityCert,
  },
  {
    title: "Hardware Security",
    provider: "University of Maryland / Coursera",
    year: "2020",
    preview: hardwareSecurityCert,
  },
  {
    title: "Java Programming: Principles of Software Design",
    provider: "Duke University / Coursera",
    year: "2020",
    preview: javaProgrammingCert,
  },
  ];

  const navItems: [string, string][] = [
    ["Approach", "about"],
    ["Track Record", "experience"],
    ["Product Story", "projects"],
    ["Client Delivery", "client-work"],
    ["Capabilities", "skills"],
    ["Credentials", "certifications"],
    ["Let’s Talk", "contact"],
  ];

  const [activeSkillIndex, setActiveSkillIndex] = useState(0);
  const [formStatus, setFormStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedCaseStudyKey, setSelectedCaseStudyKey] =
    useState<CaseStudyKey | null>(null);
  const [activeCaseStudyPanel, setActiveCaseStudyPanel] = useState(0);
  const [selectedCertificate, setSelectedCertificate] =
    useState<PreviewableCertification | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!selectedCaseStudyKey && !selectedCertificate) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedCaseStudyKey, selectedCertificate]);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(scrollable > 0 ? window.scrollY / scrollable : 0);
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const updateSpotlight = (event: ReactPointerEvent<HTMLElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - bounds.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - bounds.top}px`);
  };

  const selectedCaseStudy = selectedCaseStudyKey
    ? caseStudies[selectedCaseStudyKey]
    : null;

  const openCaseStudy = (caseStudyKey: CaseStudyKey) => {
    setActiveCaseStudyPanel(0);
    setSelectedCaseStudyKey(caseStudyKey);
  };

  const closeCaseStudy = () => {
    setSelectedCaseStudyKey(null);
    setActiveCaseStudyPanel(0);
  };


  const fadeUp = {
    hidden: { opacity: 0, y: 34 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.11,
      },
    },
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setIsMobileMenuOpen(false);
    window.history.replaceState(null, "", window.location.pathname);
  };

  const handleContactSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    setIsSubmitting(true);
    setFormStatus("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setFormStatus("Message sent successfully. Thank you for reaching out.");
      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      setFormStatus(
        "Message could not be sent. Please email me directly at challottemaahlamela@gmail.com."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="portfolio-shell min-h-screen scroll-smooth overflow-x-hidden bg-[#F8F3EF] pt-[86px] text-[#161316] sm:pt-[92px]">
      <nav className="fixed left-0 right-0 top-0 z-[999] border-b border-[#E8DDD6] bg-[#F8F3EF]/95 shadow-sm backdrop-blur-xl">
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] origin-left bg-[#A66B4F]"
          style={{ width: `${scrollProgress * 100}%` }}
          aria-hidden="true"
        />
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:py-5">
          <motion.button
            type="button"
            onClick={() => scrollToSection("home")}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-left"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#161316] text-sm font-bold text-white shadow-lg shadow-black/10">
              CM
            </div>

            <div>
              <h1 className="text-base font-semibold sm:text-lg">
                Challotte Maahlamela
              </h1>
              <p className="text-xs text-[#6F6670] sm:text-sm">
                Software Engineer • .NET & React
              </p>
            </div>
          </motion.button>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            {navItems.map(([label, sectionId]) => (
              <button
                key={label}
                type="button"
                onClick={() => scrollToSection(sectionId)}
                className="relative transition hover:text-[#A66B4F] after:absolute after:-bottom-2 after:left-0 after:h-0.5 after:w-0 after:bg-[#A66B4F] after:transition-all hover:after:w-full"
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#161316] text-xl font-semibold text-white shadow-sm md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? "×" : "☰"}
          </button>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="border-t border-[#E8DDD6] bg-[#F8F3EF] px-4 pb-5 pt-2 shadow-xl md:hidden"
          >
            <div className="mx-auto grid max-w-7xl gap-3">
              {navItems.map(([label, sectionId]) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => scrollToSection(sectionId)}
                  className="rounded-2xl border border-[#E8DDD6] bg-white/80 px-5 py-4 text-left text-sm font-semibold text-[#161316] shadow-sm transition hover:bg-white hover:text-[#A66B4F]"
                >
                  {label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      <section
        id="home"
        className="relative scroll-mt-28 overflow-hidden bg-[#F8F3EF] py-16 lg:py-24"
      >
        <div className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-[#D6A85C]/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-[#C08497]/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[#7B2D86]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:min-h-[calc(100vh-120px)] lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#E8DDD6] bg-white/70 px-4 py-2 text-sm text-[#6F6670] shadow-sm backdrop-blur-xl"
            >
              <span className="h-2 w-2 rounded-full bg-[#A66B4F]" />
              {market.location}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.75 }}
              className="max-w-3xl text-4xl font-semibold leading-[1.04] tracking-tight text-[#161316] sm:text-5xl md:text-6xl xl:text-7xl"
            >
              .NET engineer with 5+ years in enterprise software.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-2xl text-lg leading-8 text-[#5F5861] sm:mt-8 sm:text-xl sm:leading-9"
            >
              I build and support ASP.NET Core APIs, SQL Server workflows and React/Blazor applications. At SigniFlow, I deliver document and digital-signing features, investigate production failures and take fixes through release validation.
              <br />
              <br />
              Explore my production achievements and three deployed full-stack projects below.
              <span className="mt-3 block text-base">UK opportunities: Skilled Worker sponsorship required.</span>
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap"
            >
              <button
                type="button"
                onClick={() => scrollToSection("projects")}
                className="rounded-2xl bg-[#161316] px-7 py-4 font-semibold text-white shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:shadow-2xl"
              >
                View Projects
              </button>
              <a
                href={cvFile}
                download="Challotte-Maahlamela-CV-UK.pdf"
                className="rounded-2xl border border-[#D8CCC4] bg-white/40 px-7 py-4 text-center font-semibold text-[#161316] transition hover:-translate-y-1 hover:bg-white"
              >
                Download CV
              </a>
              <button
                type="button"
                onClick={() => scrollToSection("contact")}
                className="rounded-2xl border border-[#D8CCC4] bg-white/70 px-7 py-4 font-semibold text-[#161316] backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                Let’s Talk
              </button>

            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-12 grid max-w-3xl gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, rotate: -0.4 }}
                  onPointerMove={updateSpotlight}
                  className="spotlight-card rounded-3xl border border-[#E8DDD6] bg-white/70 p-5 shadow-sm backdrop-blur-xl"
                >
                  <div className="text-3xl font-semibold text-[#161316]">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm leading-5 text-[#6F6670]">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.25 }}
            className="relative mx-auto mt-4 w-full max-w-sm sm:max-w-md lg:mt-10"
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-2 top-5 z-10 rounded-3xl border border-white/70 bg-white/70 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:-left-10 sm:top-8 sm:p-5"
            >
              <div className="text-xs text-[#6F6670] sm:text-sm">
                Production experience
              </div>
              <div className="mt-1 text-sm font-semibold text-[#161316] sm:text-lg">
                Secure APIs + document workflows
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{
                duration: 5.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -right-2 bottom-10 z-10 rounded-3xl border border-white/70 bg-white/70 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:-right-8 sm:bottom-14 sm:p-5"
            >
              <div className="text-xs text-[#6F6670] sm:text-sm">
                Core strength
              </div>
              <div className="mt-1 text-sm font-semibold text-[#161316] sm:text-lg">
                Enterprise product delivery
              </div>
            </motion.div>

            <div className="absolute inset-0 rotate-6 rounded-[2.5rem] bg-gradient-to-br from-[#D6A85C] to-[#A66B4F] opacity-60 blur-sm" />

            <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-3 shadow-2xl shadow-black/10">
              <img
                src={profileImage}
                alt="Professional portrait of Challotte Maahlamela"
                className="h-[430px] w-full rounded-[2rem] object-cover sm:h-[540px]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative border-y border-[#E8DDD6] bg-white px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[#A66B4F]">
              The story in 30 seconds
            </span>
            <span className="h-px flex-1 bg-[#E8DDD6]" />
          </div>

          <div className="grid gap-3 md:grid-cols-4">
            {[
              ["01", "Problem", "Find the operational risk worth solving."],
              ["02", "Product", "Turn rules and users into one clear journey."],
              ["03", "Engineering", "Build the trust boundary behind the interface."],
              ["04", "Outcome", "Ship, support, learn, and improve."],
            ].map(([number, title, copy], index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group flex gap-3 rounded-2xl border border-[#E8DDD6] bg-[#FBF7F2] p-4 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="font-mono text-xs font-semibold text-[#A66B4F]">
                  {number}
                </span>
                <div>
                  <h2 className="text-sm font-semibold text-[#161316]">{title}</h2>
                  <p className="mt-1 text-xs leading-5 text-[#6F6670]">{copy}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24"
      >
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#D6A85C]/20 to-transparent" />
            <img
              src={aboutImage}
              alt="Challotte Maahlamela"
              className="relative w-full rounded-[2rem] shadow-2xl shadow-black/10"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#A66B4F]">
              The Product Mindset
            </div>

            <h2 className="text-3xl font-semibold leading-tight text-[#161316] sm:text-4xl md:text-5xl">
              Good software starts with the decision the user needs to make.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#5F5861] sm:mt-8 sm:text-lg sm:leading-9">
              I begin with the operating problem: who is involved, what can go wrong, which decisions need guardrails, and what must remain auditable. Only then do I choose the architecture.
            </p>

            <p className="mt-6 text-base leading-8 text-[#5F5861] sm:text-lg sm:leading-9">
              My strongest technical depth is C#/.NET, REST APIs, Entity Framework Core, SQL Server, authentication, and workflow orchestration. React and Blazor turn those rules into clear product experiences.
            </p>

            <p className="mt-6 text-base leading-8 text-[#5F5861] sm:text-lg sm:leading-9">
              I stay with the product through data modelling, implementation, testing, deployment, and production support—because real quality appears after the happy path ends.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                "End-to-End Product Delivery",
                "REST API & Workflow Design",
                "ERDs & Relational Data Modelling",
                "React & Blazor Interfaces",
                "Docker & Production Deployment",
                "Enterprise & Legacy Systems",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="rounded-2xl border border-[#E8DDD6] bg-white p-5 shadow-sm transition hover:shadow-xl"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="experience"
        className="relative scroll-mt-28 overflow-hidden bg-white py-16 lg:py-24"
      >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D6A85C]/10 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto max-w-6xl px-4 sm:px-6"
        >
          <div className="mb-12 text-center lg:mb-16">
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#A66B4F]">
              Proof in Production
            </div>
            <h2 className="text-3xl font-semibold text-[#161316] sm:text-4xl lg:text-5xl">
              Five years of turning business rules into reliable production systems.
            </h2>
          </div>

          <div className="rounded-[2rem] border border-[#E8DDD6] bg-[#FBF7F2] p-6 shadow-xl shadow-black/5 sm:p-8 lg:rounded-[2.5rem] lg:p-10">
            <div className="flex flex-col justify-between gap-4 border-b border-[#E8DDD6] pb-8 md:flex-row md:items-center">
              <div>
                <h3 className="text-2xl font-semibold text-[#161316] sm:text-3xl">
                  Software Engineer — SigniFlow Pty Ltd
                </h3>
                <p className="mt-2 text-[#6F6670]">February 2021 – Present</p>
              </div>

              <div className="w-fit rounded-full bg-[#E8D9CF] px-5 py-2 text-sm font-medium text-[#6E4638]">
                Production Enterprise Systems
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2" aria-label="Commercial engineering outcomes">
              {[
                "Document signing",
                "API security",
                "Workflow correctness",
                "Production support",
              ].map((outcome) => (
                <span
                  key={outcome}
                  className="rounded-full border border-[#D8CCC4] bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-[#6E4638]"
                >
                  {outcome}
                </span>
              ))}
            </div>

            <div className="mt-10 grid gap-5 text-base leading-8 text-[#5F5861] md:grid-cols-2 lg:text-lg">
              {[
                "Scoped mobile-signing OTP validation to the document context, addressing the risk of matching six-digit OTP values globally.",
                "Corrected workflow-state inconsistencies where signatures were applied but database fields were not updated, restoring completion behaviour and accurate user messages.",
                "Extended document processing with mandatory and optional date tags, checkbox groups, responsive signing interactions and reporting outputs.",
                "Average 15–20 merged pull requests per month and close 10–15 support tickets per week during assigned rotations alongside planned engineering work.",
                "Build secure REST APIs, authentication flows, SQL Server stored procedures and business rules for document lifecycles and integrations.",
                "Trace production failures across browser behaviour, application code, database state and external services, then validate fixes through release.",
              ].map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ x: 6 }}
                  className="rounded-2xl bg-white p-5 shadow-sm"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        className="technical-grid relative scroll-mt-28 overflow-hidden bg-[#F8F3EF] px-4 pb-24 pt-14 sm:px-6 sm:pb-28 lg:pb-32 lg:pt-16"
      >
        <div className="absolute left-[-10%] top-10 h-80 w-80 rounded-full bg-[#D6A85C]/20 blur-3xl" />
        <div className="absolute right-[-10%] top-40 h-80 w-80 rounded-full bg-[#C08497]/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
          >
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#A66B4F]">
                The Flagship Product Story
              </div>

              <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-[#161316] sm:text-5xl">
                Three deployed .NET products. Explore the implementation.
              </h2>
            </div>

            <div className="rounded-[1.5rem] border border-[#E8DDD6] bg-white/80 p-5 shadow-lg shadow-black/5 backdrop-blur-xl">
              <p className="text-base leading-7 text-[#5F5861]">
               SheForHer combines reporting, evidence review and human-controlled publication. OpsTrack enforces ticket workflows; ShiftWise evaluates staffing and scheduling rules. Open a live app, inspect public source, or explore the architecture.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project, projectIndex) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: projectIndex * 0.08 }}
                whileHover={{ y: -6 }}
                onPointerMove={updateSpotlight}
                className={`spotlight-card group overflow-hidden rounded-[1.8rem] border bg-white shadow-xl shadow-black/10 transition hover:shadow-2xl ${
                  project.isFlagship
                    ? "flagship-card border-[#D6A85C] lg:col-span-2"
                    : "border-[#E8DDD6]"
                }`}
              >
                <div className={project.isFlagship ? "grid lg:grid-cols-[0.9fr_1.1fr]" : "grid"}>
                  <div className={`relative overflow-hidden bg-[#161316] ${project.isFlagship ? "aspect-[16/10] lg:aspect-auto lg:h-auto lg:min-h-full" : "h-[240px]"}`}>
                    <img
                      src={project.image}
                      alt={`${project.title} application interface`}
                      className={`${project.isFlagship ? "absolute inset-0" : ""} h-full w-full object-cover object-center opacity-80 transition duration-700 group-hover:scale-105 group-hover:opacity-95`}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#161316]/80 via-[#161316]/20 to-transparent" />

                    {project.isFlagship && (
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-[#161316]/85 via-[#161316]/35 to-transparent" />
                    )}

                    <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/10 bg-black/45 p-4 text-white shadow-xl backdrop-blur-md">
                      <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-[#D6A85C]">
                        {project.systemLabel}
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {project.systemSteps.map((step) => (
                          <span
                            key={step}
                            className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90"
                          >
                            {step}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 sm:p-7 lg:p-8">
                    <div className="mb-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-[#E8D9CF] px-4 py-2 text-sm font-semibold text-[#6E4638]">
                        {project.isFlagship
                          ? "The Main Story · Flagship Product"
                          : "Supporting Proof · Repeatable Engineering"}
                      </span>

                      <span className="rounded-full border border-[#D8CCC4] bg-white px-4 py-2 text-sm font-semibold text-[#161316]">
                        {project.eyebrow}
                      </span>

                      {project.isProprietary && (
                        <span className="rounded-full border border-[#D6A85C] bg-[#FBF7F2] px-4 py-2 text-sm font-semibold text-[#6E4638]">
                          Proprietary · Private codebase
                        </span>
                      )}
                    </div>

                    <h3 className="text-3xl font-semibold leading-tight tracking-tight text-[#161316] sm:text-4xl">
                      {project.title}
                    </h3>

                    {project.problemHook && (
                      <p className="mt-3 border-l-2 border-[#A66B4F] pl-4 text-sm font-semibold leading-6 text-[#161316]">
                        {project.problemHook}
                      </p>
                    )}

                    <p className="mt-4 max-w-2xl text-base leading-7 text-[#5F5861]">
                      {project.description}
                    </p>

                    {project.aiNote && (
                      <p className="mt-3 rounded-xl border border-[#D8CCC4] bg-[#FBF7F2] px-4 py-3 text-sm font-medium leading-6 text-[#6E4638]">
                        {project.aiNote}
                      </p>
                    )}

                    {project.codeAccessNote && (
                      <p className="mt-3 text-sm font-medium leading-6 text-[#6F6670]">
                        {project.codeAccessNote}
                      </p>
                    )}

                    {project.liveArchitecture && (
                      <div className="mt-4 rounded-2xl border border-[#D8CCC4] bg-[#FBF7F2] px-4 py-3">
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6E4638]">
                          Live architecture · Multi-provider deployment
                        </p>
                        <div className="mt-2 flex flex-wrap gap-x-2 gap-y-1 text-xs font-semibold leading-5 text-[#161316]">
                          {project.liveArchitecture.map((item, index) => (
                            <span key={item} className="inline-flex items-center gap-2">
                              {index > 0 && (
                                <span aria-hidden="true" className="text-[#A66B4F]">
                                  •
                                </span>
                              )}
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {project.metrics && (
                      <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: metricIndex * 0.07 }}
                            className="rounded-2xl border border-[#E8DDD6] bg-white p-3 text-center shadow-sm"
                          >
                            <div className="text-xl font-semibold text-[#161316]">
                              {metric.value}
                            </div>
                            <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#6F6670]">
                              {metric.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    )}

                    <div className="mt-5 grid gap-3 sm:grid-cols-2">
                      {project.signals.map((item, index) => (
                        <motion.div
                          key={item}
                          whileHover={{ y: -3, scale: 1.01 }}
                          className="rounded-2xl border border-[#E8DDD6] bg-[#FBF7F2] p-4 shadow-sm transition hover:shadow-lg"
                        >
                          <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-xl bg-[#161316] text-xs font-bold text-white">
                            {index + 1}
                          </div>

                          <p className="text-sm font-semibold leading-6 text-[#161316]">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[#E8D9CF] px-3 py-1.5 text-xs font-medium text-[#6E4638]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl bg-[#161316] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                        >
                          View Live Project
                        </a>
                      ) : (
                        <span className="rounded-2xl bg-[#E8D9CF] px-5 py-3 text-sm font-semibold text-[#6E4638]">
                          Deployment in progress
                        </span>
                      )}

                      {project.sourceUrl && (
                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-2xl border border-[#D8CCC4] bg-[#FBF7F2] px-5 py-3 text-sm font-semibold text-[#161316] transition hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                        >
                          View Source
                        </a>
                      )}

                      {project.isProprietary && (
                        <span className="rounded-2xl border border-[#D8CCC4] bg-[#FBF7F2] px-5 py-3 text-sm font-semibold text-[#6E4638]">
                          Private Codebase
                        </span>
                      )}

                      <button
                        type="button"
                        onClick={() => openCaseStudy(project.caseStudyKey)}
                        className="rounded-2xl border border-[#D8CCC4] bg-white px-5 py-3 text-sm font-semibold text-[#161316] transition hover:-translate-y-1 hover:bg-[#F8F3EF] hover:shadow-lg"
                      >
                        {project.isFlagship ? "Follow the Product Story" : "See the Engineering Proof"}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mb-7 mt-16 grid gap-4 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <div className="mb-3 text-sm font-semibold uppercase tracking-[0.28em] text-[#A66B4F]">
                Earlier Product Exploration
              </div>

              <h3 className="max-w-xl text-3xl font-semibold leading-tight text-[#161316]">
                The ideas that shaped the flagship product.
              </h3>
            </div>

            <p className="max-w-3xl text-base leading-7 text-[#5F5861]">
              Earlier work explored fast access to safety resources and structured user journeys. SheForHer carries those lessons into a governed, backend-heavy product system.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {supportingProjects.map((project, index) => (
              <motion.article
                key={project.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ y: -7 }}
                onPointerMove={updateSpotlight}
                className="spotlight-card group overflow-hidden rounded-[1.6rem] border border-[#E8DDD6] bg-white shadow-lg shadow-black/5 transition duration-300 hover:shadow-2xl"
              >
                <div className="grid md:grid-cols-[0.85fr_1.15fr]">
                  <div className="relative h-52 overflow-hidden md:h-full md:min-h-[300px]">
                    <img
                      src={project.image}
                      alt={`${project.title} application interface`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#161316]/65 via-[#161316]/10 to-transparent" />

                    <div className="absolute bottom-4 left-4 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-[#161316] shadow-lg backdrop-blur">
                      {project.stack[0]}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-3 w-fit rounded-full bg-[#E8D9CF] px-4 py-2 text-xs font-semibold text-[#6E4638]">
                      {project.eyebrow}
                    </div>

                    <h3 className="text-2xl font-semibold text-[#161316]">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-[#5F5861]">
                      {project.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-[#E8D9CF] px-3 py-1.5 text-xs font-medium text-[#6E4638]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex rounded-2xl bg-[#161316] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                      >
                        View Site
                      </a>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="mt-20 h-px w-full bg-gradient-to-r from-transparent via-[#D8CCC4] to-transparent" />
        </div>
      </section>
    <section
  id="client-work"
  className="relative scroll-mt-28 overflow-hidden bg-[#161316] px-4 py-16 text-white sm:px-6 lg:py-24"
>
  <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-[#D6A85C]/20 blur-3xl" />
  <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-[#C08497]/20 blur-3xl" />

  <div className="relative mx-auto max-w-7xl">
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
    >
      <div>
        <div className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#D6A85C]">
          From Product to Client Outcome
        </div>

        <h2 className="max-w-3xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
          The same delivery discipline, applied to real client goals.
        </h2>
      </div>

      <p className="max-w-3xl text-base leading-8 text-white/70 sm:text-lg">
        Each engagement began with the client’s audience and career objective, then moved through visual direction, responsive implementation, deployment, and post-launch refinement.
      </p>
    </motion.div>

    <div className="grid gap-6 md:grid-cols-2">
      {clientProjects.map((project, index) => (
        <motion.article
          key={project.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ y: -6 }}
          className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8"
        >
          <div className="flex-1">
            <div className="w-fit rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#D6A85C]">
              {project.type}
            </div>

            <h3 className="mt-5 text-2xl font-semibold sm:text-3xl">
              {project.title}
            </h3>

            <p className="mt-4 text-base leading-8 text-white/70">
              {project.description}
            </p>

            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D6A85C]">
                Technology
              </p>

              <div className="flex flex-wrap gap-2">
                {project.stack.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-white/90"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#D6A85C]">
                Delivery
              </p>

              <div className="flex flex-wrap gap-2">
                {project.capabilities.map((capability) => (
                  <span
                    key={capability}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-2 text-sm font-medium text-white/90"
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {project.liveUrl && (
            <div className="mt-8">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-[#161316] shadow-lg transition hover:-translate-y-1 hover:bg-[#F8F3EF] hover:shadow-xl"
              >
                View Live Website
              </a>
            </div>
          )}
        </motion.article>
      ))}
    </div>
  </div>
</section>

      <section
        id="skills"
        className="relative scroll-mt-28 overflow-hidden bg-white px-4 pb-16 pt-10 text-[#161316] sm:px-6 lg:pb-24 lg:pt-14"
      >
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#D6A85C]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center lg:mb-14"
          >
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#A66B4F]">
              The Delivery System
            </div>

            <h2 className="text-3xl font-semibold sm:text-4xl md:text-5xl">
              Capabilities organised around outcomes—not a keyword wall.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-[#5F5861] sm:text-lg">
              These are the tools I use to move from a business problem to a secure, maintainable product in production.
            </p>
          </motion.div>

          <div className="mx-auto flex max-w-6xl flex-col gap-4">
            {Object.entries(skills).map(([category, items], index) => {
              const isActive = activeSkillIndex === index;

              return (
                <motion.button
                  key={category}
                  type="button"
                  onMouseEnter={() => setActiveSkillIndex(index)}
                  onFocus={() => setActiveSkillIndex(index)}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                  animate={{
                    scale: isActive ? 1 : 0.965,
                    opacity: isActive ? 1 : 0.72,
                  }}
                  className={`w-full rounded-[2rem] border text-left shadow-sm transition-all duration-300 ${
                    isActive
                      ? "border-[#D8CCC4] bg-white p-5 shadow-2xl shadow-black/10 sm:p-8"
                      : "border-[#E8DDD6] bg-white/55 p-5 hover:bg-white/80"
                  }`}
                >
                  <div className="grid gap-5 md:grid-cols-[220px_1fr] md:items-start">
                    <div className="flex items-center gap-4">
                      <div
                        className={`flex shrink-0 items-center justify-center rounded-2xl font-bold transition-all duration-300 ${
                          isActive
                            ? "h-14 w-14 bg-[#161316] text-base text-white"
                            : "h-10 w-10 bg-[#E8D9CF] text-sm text-[#6E4638]"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3
                        className={`font-semibold text-[#161316] transition-all duration-300 ${
                          isActive ? "text-3xl" : "text-2xl"
                        }`}
                      >
                        {category}
                      </h3>
                    </div>

                    <motion.div
                      animate={{ y: isActive ? 0 : 2 }}
                      className="flex flex-wrap gap-3 md:justify-end md:pt-1"
                    >
                      {items.map((item, itemIndex) => (
                        <motion.span
                          key={item}
                          initial={{ opacity: 0, y: 8 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.08 + itemIndex * 0.02,
                            ease: "easeOut",
                          }}
                          className={`rounded-full border px-4 py-2.5 font-medium transition-all duration-300 ${
                            isActive
                              ? "border-[#D8CCC4] bg-[#F8F3EF] text-sm text-[#161316] md:text-base"
                              : "border-[#E8DDD6] bg-[#FBF7F2] text-xs text-[#6F6670] md:text-sm"
                          }`}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="certifications"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24"
      >
        <div className="mb-12 text-center lg:mb-16">
          <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#A66B4F]">
            Continuous Improvement
          </div>
          <h2 className="text-3xl font-semibold text-[#161316] sm:text-4xl lg:text-5xl">
            Credentials that reinforce the way I build.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((certification, index) => (
            <motion.button
              key={certification.title}
              type="button"
              onClick={() => {
                if (certification.preview) {
                  setSelectedCertificate({
                    ...certification,
                    preview: certification.preview,
                  });
                }
              }}
              disabled={!certification.preview}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              whileHover={certification.preview ? { x: 8, scale: 1.01 } : {}}
              className={`group rounded-[2rem] border border-[#E8DDD6] bg-white p-6 text-left shadow-sm transition sm:p-8 ${
                certification.preview
                  ? "hover:shadow-xl"
                  : "cursor-default"
              }`}
            >
              <div className="mb-5 h-1 w-16 rounded-full bg-gradient-to-r from-[#A66B4F] to-[#D6A85C] transition group-hover:w-24" />
              <h3 className="text-xl font-semibold text-[#161316] sm:text-2xl">
                {certification.title}
              </h3>
              <p className="mt-4 text-[#6F6670]">
                {certification.provider} • {certification.year}
              </p>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#A66B4F]">
                {certification.preview
                  ? "View certificate"
                  : "Currently studying"}
              </p>
            </motion.button>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl scroll-mt-28 px-4 py-16 sm:px-6 lg:py-24"
      >
        <div className="grid gap-10 rounded-[2rem] bg-[#161316] p-6 text-white shadow-2xl shadow-black/20 sm:p-8 md:grid-cols-2 md:p-12 lg:gap-16 lg:rounded-[2.5rem] lg:p-16">
          <div>
            <div className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#D6A85C]">
              The Next Product Story
            </div>

            <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              Let’s discuss your engineering role.
            </h2>

            <p className="mt-6 text-base leading-8 text-[#E9DED7] sm:text-lg lg:mt-8 lg:leading-9">
              {market.contact}
            </p>

            <div className="mt-8 flex flex-col gap-4 break-words text-base sm:text-lg lg:mt-10">
              <a
                href="mailto:challottemaahlamela@gmail.com"
                className="break-all hover:text-[#D6A85C]"
              >
                challottemaahlamela@gmail.com
              </a>

              <a
                href="https://github.com/challotte14"
                target="_blank"
                rel="noreferrer"
                className="break-all hover:text-[#D6A85C]"
              >
                github.com/challotte14
              </a>

              <a
                href="https://linkedin.com/in/challottem"
                target="_blank"
                rel="noreferrer"
                className="break-all hover:text-[#D6A85C]"
              >
                linkedin.com/in/challottem
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={handleContactSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full rounded-[1.5rem] bg-white/10 p-5 backdrop-blur sm:p-6 lg:rounded-[2rem] lg:p-8"
          >
            <div className="grid gap-4 sm:gap-5">
              <input type="hidden" name="title" value="Portfolio enquiry" />

              <input
                name="name"
                required
                placeholder="Name"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-[#D6C6BD] focus:outline-none focus:ring-2 focus:ring-[#D6A85C]/50 sm:px-5"
              />

              <input
                name="email"
                type="email"
                required
                placeholder="Email"
                className="w-full rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-[#D6C6BD] focus:outline-none focus:ring-2 focus:ring-[#D6A85C]/50 sm:px-5"
              />

              <textarea
                name="message"
                required
                rows={6}
                placeholder="Tell me about the role, team, or opportunity..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/10 px-4 py-4 text-white placeholder:text-[#D6C6BD] focus:outline-none focus:ring-2 focus:ring-[#D6A85C]/50 sm:px-5"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-[#F8F3EF] px-7 py-4 font-semibold text-[#161316] shadow-xl transition hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {formStatus && (
                <p className="text-sm leading-6 text-[#E9DED7]">
                  {formStatus}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </section>

      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1000] bg-[#161316]/80 px-3 py-3 backdrop-blur-xl sm:px-5 sm:py-6"
            onClick={closeCaseStudy}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative mx-auto flex h-[calc(100dvh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.8rem] border border-white/20 bg-[#F8F3EF] shadow-2xl shadow-black/40 sm:h-[calc(100dvh-3rem)] sm:rounded-[2.2rem] lg:grid lg:h-[82vh] lg:grid-cols-[0.27fr_0.73fr]"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="case-study-title"
            >
              <div className="absolute left-0 right-0 top-0 z-40 h-1 bg-[#E8DDD6]">
                <motion.div
                  className="h-full bg-[#A66B4F]"
                  initial={false}
                  animate={{
                    width: `${
                      ((activeCaseStudyPanel + 1) /
                        selectedCaseStudy.panels.length) *
                      100
                    }%`,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                />
              </div>
              <button
                type="button"
                onClick={closeCaseStudy}
                className="absolute right-4 top-4 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-white text-2xl font-semibold text-[#161316] shadow-lg transition hover:scale-105 hover:bg-[#E8D9CF] sm:right-5 sm:top-5 sm:h-12 sm:w-12"
                aria-label="Close case study"
              >
                ×
              </button>

              <aside className="relative shrink-0 overflow-hidden bg-[#161316] p-5 text-white sm:p-6 lg:h-full lg:overflow-y-auto lg:p-6">
                <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-[#D6A85C]/25 blur-3xl" />
                <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#C08497]/25 blur-3xl" />

                <div className="relative pr-14 lg:pr-0">
                  <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#D6A85C] sm:text-[11px]">
                    Technical case study
                  </div>

                  <div className="mb-3 font-mono text-xs text-white/50">
                    {String(activeCaseStudyPanel + 1).padStart(2, "0")} / {String(selectedCaseStudy.panels.length).padStart(2, "0")}
                  </div>

                  <h2
                    id="case-study-title"
                    className="max-w-md text-3xl font-semibold leading-tight sm:text-4xl lg:text-3xl"
                  >
                    {selectedCaseStudy.title}
                  </h2>

                  <p className="mt-3 line-clamp-3 max-w-xl text-sm leading-6 text-white/65">
                    {selectedCaseStudy.summary}
                  </p>

                  <div className="-mx-1 mt-5 flex gap-2 overflow-x-auto px-1 pb-2 lg:mx-0 lg:grid lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0">
                    {selectedCaseStudy.panels.map((panel, index) => {
                      const isActive = activeCaseStudyPanel === index;

                      return (
                        <button
                          key={panel.label}
                          type="button"
                          onClick={() => setActiveCaseStudyPanel(index)}
                          className={`group flex shrink-0 items-center gap-2 rounded-xl border px-3 py-2 text-left transition lg:w-full ${
                            isActive
                              ? "border-[#D6A85C]/60 bg-white text-[#161316] shadow-xl"
                              : "border-white/10 bg-white/5 text-white hover:bg-white/10"
                          }`}
                        >
                          <span
                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold transition ${
                              isActive
                                ? "bg-[#161316] text-white"
                                : "bg-white/10 text-white"
                            }`}
                          >
                            {index + 1}
                          </span>

                          <span className="whitespace-nowrap text-xs font-semibold lg:whitespace-normal">
                            {panel.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </aside>

              <section className="relative min-h-0 flex-1 overflow-y-auto bg-white p-5 sm:p-6 lg:h-full lg:p-7">
                <div className="absolute right-[-80px] top-[-80px] h-64 w-64 rounded-full bg-[#D6A85C]/15 blur-3xl" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedCaseStudyKey}-${activeCaseStudyPanel}`}
                    initial={{ opacity: 0, x: 28, filter: "blur(6px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, x: -28, filter: "blur(6px)" }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative pb-4"
                  >
                    <div className="mb-4 flex flex-wrap items-center gap-2 pr-12 sm:pr-14">
                      <span className="rounded-full bg-[#E8D9CF] px-4 py-2 text-sm font-semibold text-[#6E4638]">
                        {selectedCaseStudy.panels[activeCaseStudyPanel].label}
                      </span>

                      <span className="rounded-full border border-[#E8DDD6] bg-[#F8F3EF] px-4 py-2 text-sm font-semibold text-[#161316]">
                        {selectedCaseStudy.badge}
                      </span>
                    </div>

                    <h3 className="max-w-3xl text-2xl font-semibold leading-tight text-[#161316] sm:text-3xl lg:text-4xl">
                      {selectedCaseStudy.panels[activeCaseStudyPanel].title}
                    </h3>

                    <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5F5861] sm:text-base sm:leading-7">
                      {selectedCaseStudy.panels[activeCaseStudyPanel].text}
                    </p>

                    {selectedCaseStudy.quickFacts && (
                      <div className="mt-5 grid grid-cols-3 gap-2">
                        {selectedCaseStudy.quickFacts.map((fact) => (
                          <div
                            key={fact.label}
                            className="rounded-xl bg-[#161316] px-3 py-3 text-white shadow-sm"
                          >
                            <div className="text-lg font-semibold text-[#D6A85C] sm:text-xl">
                              {fact.value}
                            </div>
                            <div className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-white/60 sm:text-[10px]">
                              {fact.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}

                    {selectedCaseStudy.architectureSequence &&
                      selectedCaseStudy.panels[activeCaseStudyPanel].label ===
                        selectedCaseStudy.architecturePanel && (
                        <div className="mt-5 rounded-2xl border border-[#E8DDD6] bg-[#161316] p-4 text-white shadow-lg sm:p-5">
                          <div className="mb-4 flex items-center gap-3">
                            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#D6A85C]">
                              System sequence
                            </span>
                            <span className="h-px flex-1 bg-white/10" />
                          </div>

                          <div className="grid gap-2 sm:grid-cols-4">
                            {selectedCaseStudy.architectureSequence.map(
                              ([title, detail], index) => (
                                <div
                                  key={title}
                                  className="relative rounded-xl border border-white/10 bg-white/5 p-3"
                                >
                                  <div className="text-[10px] font-semibold text-[#D6A85C]">
                                    {String(index + 1).padStart(2, "0")}
                                  </div>
                                  <div className="mt-1 text-sm font-semibold">
                                    {title}
                                  </div>
                                  <p className="mt-1 text-[11px] leading-4 text-white/60">
                                    {detail}
                                  </p>
                                  {index <
                                    selectedCaseStudy.architectureSequence!.length -
                                      1 && (
                                    <span className="absolute -right-2.5 top-1/2 z-10 hidden -translate-y-1/2 text-[#D6A85C] sm:block">
                                      →
                                    </span>
                                  )}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      )}

                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {selectedCaseStudy.panels[
                        activeCaseStudyPanel
                      ].points.map((point, index) => (
                        <motion.div
                          key={point}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            duration: 0.25,
                            delay: index * 0.06,
                            ease: "easeOut",
                          }}
                          className="group rounded-xl border border-[#E8DDD6] bg-[#FBF7F2] p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        >
                          <p className="flex items-center gap-2 text-sm font-semibold leading-5 text-[#161316]">
                            <span className="text-[#A66B4F]">✓</span>
                            {point}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-5 flex flex-col gap-3 border-t border-[#E8DDD6] pt-4 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex flex-wrap gap-2">
                        {selectedCaseStudy.panels.map((panel, index) => (
                          <button
                            key={panel.label}
                            type="button"
                            onClick={() => setActiveCaseStudyPanel(index)}
                            className={`h-2.5 rounded-full transition-all ${
                              activeCaseStudyPanel === index
                                ? "w-9 bg-[#161316]"
                                : "w-2.5 bg-[#D8CCC4]"
                            }`}
                            aria-label={`Go to ${panel.label}`}
                          />
                        ))}
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-end">
                        {activeCaseStudyPanel > 0 ? (
                          <button
                            type="button"
                            onClick={() =>
                              setActiveCaseStudyPanel((current) => current - 1)
                            }
                            className="rounded-2xl border border-[#D8CCC4] bg-white px-5 py-3 text-sm font-semibold text-[#161316] transition hover:-translate-y-1 hover:bg-[#F8F3EF]"
                          >
                            Previous
                          </button>
                        ) : (
                          <span className="hidden sm:block" />
                        )}

                        {activeCaseStudyPanel <
                        selectedCaseStudy.panels.length - 1 ? (
                          <button
                            type="button"
                            onClick={() =>
                              setActiveCaseStudyPanel((current) => current + 1)
                            }
                            className="rounded-2xl bg-[#161316] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                          >
                            Next
                          </button>
                        ) : selectedCaseStudy.liveUrl ? (
                          <a
                            href={selectedCaseStudy.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-2xl bg-[#161316] px-5 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                          >
                            View Live Project
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={closeCaseStudy}
                            className="rounded-2xl bg-[#161316] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                          >
                            Close Case Study
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </section>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[1001] bg-[#161316]/80 px-3 py-3 backdrop-blur-xl sm:px-5 sm:py-6"
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 28, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative mx-auto flex h-[calc(100dvh-1.5rem)] w-full max-w-6xl flex-col overflow-hidden rounded-[1.8rem] border border-white/20 bg-white shadow-2xl shadow-black/40 sm:h-[calc(100dvh-3rem)] sm:rounded-[2.2rem]"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="certificate-preview-title"
            >
              <div className="flex items-start justify-between gap-4 border-b border-[#E8DDD6] bg-[#F8F3EF] p-5 sm:p-6">
                <div className="pr-12">
                  <div className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#A66B4F]">
                    Certificate Preview
                  </div>

                  <h3
                    id="certificate-preview-title"
                    className="text-2xl font-semibold leading-tight text-[#161316] sm:text-3xl"
                  >
                    {selectedCertificate.title}
                  </h3>

                  <p className="mt-2 text-sm text-[#6F6670] sm:text-base">
                    {selectedCertificate.provider} • {selectedCertificate.year}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedCertificate(null)}
                  className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#161316] text-2xl font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#A66B4F] sm:right-5 sm:top-5"
                  aria-label="Close certificate preview"
                >
                  ×
                </button>
              </div>

              <div className="min-h-0 flex-1 bg-[#F8F3EF] p-3 sm:p-5">
                <iframe
                  src={selectedCertificate.preview}
                  title={`${selectedCertificate.title} certificate preview`}
                  className="h-full w-full rounded-2xl border border-[#E8DDD6] bg-white"
                />
              </div>

              <div className="flex flex-col gap-3 border-t border-[#E8DDD6] bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                <p className="text-sm text-[#6F6670]">
                  If the PDF does not display in the browser, open it in a new tab.
                </p>

                <a
                  href={selectedCertificate.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-[#161316] px-5 py-3 text-center text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#A66B4F] hover:shadow-xl"
                >
                  Open PDF
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <footer className="border-t border-[#E8DDD6] bg-white px-4 py-10 text-center text-sm leading-7 text-[#6F6670] sm:text-base">
        <p>
          © 2026 Challotte Maahlamela — Software Engineer specialising in
          enterprise .NET applications, workflow systems, APIs, and end-to-end
          product delivery. {market.footer}
        </p>
      </footer>
    </div>
  );
}
