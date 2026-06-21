export const stats = [
  { value: "120+", label: "Digital products delivered" },
  { value: "38%", label: "Average conversion lift" },
  { value: "15+", label: "Industries supported" },
  { value: "24/7", label: "Monitoring and care" }
];

export const services = [
  { icon: "WD", title: "Full Stack Web Development", summary: "Fast, secure, SEO-ready web platforms built with modern frontend, backend, and database architecture." },
  { icon: "UX", title: "Website Design & Development", summary: "Premium responsive websites that communicate authority, trust, and conversion intent." },
  { icon: "APP", title: "Mobile App Development", summary: "Android and iOS applications with clean user journeys, scalable APIs, and release support." },
  { icon: "API", title: "API Development & Integration", summary: "Robust REST and GraphQL services, payment integrations, CRM syncs, and workflow automation." },
  { icon: "CLD", title: "Cloud Hosting & Server Management", summary: "Managed deployment, monitoring, backups, security hardening, and performance tuning." },
  { icon: "SEO", title: "SEO Optimization", summary: "Technical SEO, content strategy, search visibility improvements, and performance tracking." },
  { icon: "ADS", title: "Digital Marketing", summary: "Paid ads, funnels, landing pages, lead generation, and campaign optimization." },
  { icon: "SOC", title: "Social Media Management", summary: "Strategic calendars, creative production, community management, and brand consistency." },
  { icon: "BR", title: "Branding & Creative Design", summary: "Identity systems, campaign visuals, UI kits, presentation assets, and brand guidelines." },
  { icon: "AN", title: "Audience Analytics & Performance Tracking", summary: "Dashboards, attribution, reporting, user behavior insights, and executive summaries." },
  { icon: "BA", title: "Business Automation Solutions", summary: "Automated operations across sales, support, finance, marketing, and internal workflows." },
  { icon: "TS", title: "Maintenance & Technical Support", summary: "Ongoing updates, bug fixes, incident response, security checks, and improvement plans." }
];

export const detailedServices = [
  {
    slug: "web-development",
    title: "Web Development",
    intro: "Enterprise-grade websites, portals, SaaS products, dashboards, and commerce experiences.",
    features: ["Custom frontend and backend engineering", "CMS and commerce integrations", "Performance and accessibility optimization", "Secure database-backed workflows"],
    benefits: ["Higher conversion confidence", "Scalable codebase", "Improved search visibility", "Reduced operational friction"],
    tech: ["Next.js", "React", "Node.js", "Express", "PostgreSQL", "MongoDB"],
    workflow: ["Discovery", "UX architecture", "Agile development", "QA and launch", "Optimization"],
    pricing: "Project-based, retainer, or dedicated team engagement.",
    faqs: ["Can you redesign an existing website?", "Yes. We audit, re-architect, redesign, and migrate carefully.", "Do you build admin panels?", "Yes. We build secure dashboards, CMS flows, and internal tools."]
  },
  {
    slug: "app-development",
    title: "App Development",
    intro: "Native-feeling Android and iOS products supported by secure APIs and release operations.",
    features: ["Product strategy", "Cross-platform builds", "Push notifications", "App store readiness"],
    benefits: ["Faster launch cycles", "Consistent user experience", "Measurable adoption", "Lower maintenance overhead"],
    tech: ["React Native", "Flutter", "Firebase", "Node.js", "PostgreSQL"],
    workflow: ["Prototype", "Design system", "Sprint delivery", "Testing", "Release"],
    pricing: "Milestone-based app delivery or continuous product team support.",
    faqs: ["Do you handle app publishing?", "Yes. We prepare assets, builds, store listings, and release notes.", "Can apps connect to existing systems?", "Yes. We integrate CRMs, ERPs, payment gateways, and custom APIs."]
  },
  {
    slug: "api-services",
    title: "API Services",
    intro: "Reliable APIs and integrations that connect your platforms, data, and business processes.",
    features: ["REST and GraphQL APIs", "Third-party integrations", "Authentication and authorization", "Documentation and monitoring"],
    benefits: ["Cleaner operations", "Reduced manual work", "Better data integrity", "Future-ready systems"],
    tech: ["Node.js", "Express", "PostgreSQL", "MongoDB", "JWT", "OpenAPI"],
    workflow: ["System mapping", "Contract design", "Development", "Security testing", "Monitoring"],
    pricing: "Scoped integration packages or monthly platform engineering retainers.",
    faqs: ["Do you integrate payment systems?", "Yes. We support payment, CRM, marketing, and analytics integrations.", "Do you document APIs?", "Yes. We provide clear API contracts and handover materials."]
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    intro: "Technical, content, and authority strategies that help qualified buyers find your business.",
    features: ["Technical audits", "Keyword strategy", "On-page optimization", "Content planning"],
    benefits: ["More qualified traffic", "Better site health", "Stronger organic visibility", "Compounding demand"],
    tech: ["Search Console", "GA4", "Schema", "PageSpeed", "SEO audit suites"],
    workflow: ["Audit", "Roadmap", "Implementation", "Content expansion", "Reporting"],
    pricing: "Monthly SEO retainers with clear deliverables and reporting.",
    faqs: ["How long does SEO take?", "Most programs show directional movement in 60 to 120 days.", "Do you include technical fixes?", "Yes. Technical SEO is part of our core delivery model."]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    intro: "Campaign strategy, paid acquisition, landing pages, and conversion systems for measurable growth.",
    features: ["Paid ads management", "Campaign creative", "Landing page funnels", "Lead nurturing"],
    benefits: ["Predictable pipeline", "Sharper targeting", "Improved CAC", "Better sales alignment"],
    tech: ["Google Ads", "Meta Ads", "LinkedIn Ads", "HubSpot", "GA4"],
    workflow: ["Offer strategy", "Campaign setup", "Creative testing", "Optimization", "Reporting"],
    pricing: "Monthly management fee plus optional creative and landing page packages.",
    faqs: ["Can you manage ad spend?", "Yes. We manage budgets, testing, tracking, and optimization.", "Do you create landing pages?", "Yes. We build conversion-focused landing pages and forms."]
  },
  {
    slug: "social-media-handling",
    title: "Social Media Handling",
    intro: "Consistent, professional social presence that supports authority, trust, and community.",
    features: ["Content calendars", "Creative production", "Account optimization", "Community response workflows"],
    benefits: ["Brand consistency", "Better engagement", "More trust signals", "Content efficiency"],
    tech: ["Meta Business Suite", "LinkedIn", "Canva", "Buffer", "Analytics tools"],
    workflow: ["Brand audit", "Calendar planning", "Creative production", "Publishing", "Insights"],
    pricing: "Monthly social management plans by channel count and content volume.",
    faqs: ["Do you design posts?", "Yes. We create branded static, carousel, and short-form content assets.", "Can you handle B2B social?", "Yes. LinkedIn and thought-leadership content are core strengths."]
  },
  {
    slug: "hosting-maintenance",
    title: "Hosting & Maintenance",
    intro: "Managed cloud hosting, server operations, website care, security monitoring, and technical support.",
    features: ["Cloud deployment", "Backups", "Security updates", "Uptime monitoring"],
    benefits: ["Reliable operations", "Lower downtime risk", "Faster incident response", "Peace of mind"],
    tech: ["AWS", "Vercel", "Docker", "Nginx", "Cloudflare", "GitHub Actions"],
    workflow: ["Infrastructure review", "Deployment", "Monitoring", "Maintenance", "Monthly reporting"],
    pricing: "Monthly maintenance retainers with response-time options.",
    faqs: ["Do you offer emergency support?", "Yes. Priority support can be included in maintenance plans.", "Can you migrate hosting?", "Yes. We plan DNS, backups, migration, and validation."]
  },
  {
    slug: "analytics-reporting",
    title: "Analytics & Reporting",
    intro: "Executive dashboards and performance intelligence for product, marketing, and operations.",
    features: ["GA4 setup", "Event tracking", "Dashboard design", "Monthly performance reviews"],
    benefits: ["Better decisions", "Clear ROI visibility", "Funnel clarity", "Faster optimization"],
    tech: ["GA4", "Looker Studio", "Tag Manager", "PostgreSQL", "Power BI"],
    workflow: ["Measurement plan", "Tracking setup", "Dashboard build", "QA", "Insights review"],
    pricing: "One-time analytics setup or monthly reporting partnership.",
    faqs: ["Can you fix broken tracking?", "Yes. We audit tags, events, conversions, and reports.", "Do you make dashboards?", "Yes. We build executive, marketing, sales, and product dashboards."]
  }
];

export const industries = ["SaaS", "Healthcare", "Education", "Finance", "Real Estate", "Retail", "Logistics", "Manufacturing", "Hospitality", "Professional Services"];
export const technologies = ["React", "Next.js", "Node.js", "Express", "PostgreSQL", "MongoDB", "AWS", "Vercel", "Docker", "Firebase", "GA4", "HubSpot"];

export const testimonials = [
  { quote: "Nexora brought product thinking, engineering discipline, and marketing clarity into one operating rhythm.", name: "Aarav Mehta", role: "CEO, FinEdge Labs" },
  { quote: "Our new platform loads faster, converts better, and gives the team real visibility into performance.", name: "Priya Raman", role: "COO, MedNova" },
  { quote: "They feel like a senior digital team, not a vendor. Strategy, delivery, and support were all excellent.", name: "Daniel Brooks", role: "Founder, ScaleNorth" }
];

export const projects = [
  {
    title: "JobSphere AI – Intelligent Job Aggregation & Market Analytics Platform",
    category: "AI & Analytics",
    summary: "A full-stack job intelligence platform that aggregates job listings from multiple sources into a unified interface with live market trend visualizations.",
    tags: ["React.js", "FastAPI", "PostgreSQL", "Tailwind CSS", "Recharts", "Framer Motion"],
    metrics: ["Unified aggregator", "Market trend analyzer"],
    features: [
      "Job Aggregation from Naukri, LinkedIn, Indeed, etc.",
      "Smart filters (experience, location, work-mode, salary)",
      "Job Market Analyzer: charts for skill demand, company hiring rate, work-mode",
      "Market Intelligence with trending roles and competition scoring"
    ],
    techStack: {
      frontend: ["React.js", "Vite", "React Query", "React Router", "Tailwind CSS", "Recharts", "Framer Motion"],
      backend: ["FastAPI", "SQLAlchemy", "Pydantic", "Async APIs"],
      database: ["PostgreSQL (Indexed search, aggregated reporting)"],
      dataCollection: ["Job APIs", "Custom scrapers", "Scheduled synchronization"]
    },
    objective: "To help job seekers make data-driven career choices by combining job aggregation with market intelligence."
  },
  {
    title: "Smart Billing & WhatsApp Invoice Management System",
    category: "Business Automation",
    summary: "A web-based paperless billing application for retail stores that generates invoices, stores them securely, and sends them via the WhatsApp Business API.",
    tags: ["React.js", "Django REST Framework", "PostgreSQL", "WhatsApp API", "JWT"],
    metrics: ["100% paperless billing", "Automated WhatsApp sends"],
    features: [
      "Bill creation and checkout by cashiers",
      "Automated WhatsApp invoice delivery to customers and copy to owner",
      "Role-based permission: Cashiers create bills, Admins edit and manage history",
      "Paperless digital invoice tracking & JWT secure authentication"
    ],
    techStack: {
      frontend: ["React.js", "HTML", "CSS", "JavaScript"],
      backend: ["Django REST Framework"],
      database: ["PostgreSQL"],
      messaging: ["WhatsApp Business Cloud API"],
      auth: ["JWT Authentication"]
    },
    objective: "To automate retail billing and customer communications with instant paperless invoices."
  },
  {
    title: "SmartPay PrintHub – IoT-Based Self-Service Printing Kiosk",
    category: "IoT & Self-Service",
    summary: "A web-based printing kiosk system where users upload documents via QR or local device, pay via UPI/Razorpay, and print automatically without manual help.",
    tags: ["Django", "PostgreSQL", "UPI QR / Razorpay", "PDF.js", "QRCode.js", "Bootstrap"],
    metrics: ["Fully automated printing", "Instant UPI payment"],
    features: [
      "Document upload via device, USB, or mobile QR scan",
      "PDF page count detection & preview with PDF.js",
      "Custom print configurations & automatic cost calculation",
      "Seamless Razorpay and UPI QR payment integrations"
    ],
    techStack: {
      frontend: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      backend: ["Django"],
      database: ["PostgreSQL"],
      payment: ["UPI QR", "Razorpay"],
      libraries: ["PDF.js", "QRCode.js"]
    },
    objective: "To automate the printing process, reducing manual labor and increasing customer convenience in schools, offices, and libraries."
  },
  {
    title: "Security Assessment of a Native App AI Generated Android APK",
    category: "Cybersecurity",
    summary: "A security assessment evaluating an Android APK generated by Native App AI, analyzing network traffic, HTTPS interception, permissions, and malware flags.",
    tags: ["Android Security", "VirusTotal", "HTTP Toolkit", "APK Auditing", "Static/Dynamic Analysis"],
    metrics: ["0 malware detections", "Network interception tested"],
    features: [
      "Malware scanning of generated APK through VirusTotal API",
      "Network traffic monitoring with HTTP Toolkit",
      "HTTPS interception testing & runtime vulnerability audit",
      "WebView behavior verification & permissions check"
    ],
    techStack: {
      assessmentTools: ["VirusTotal", "HTTP Toolkit", "Apktool"],
      platformUnderTest: ["Native App AI (WebView wrapper)"],
      techniques: ["Static malware analysis", "Dynamic network analysis", "Runtime permission auditing"]
    },
    objective: "To verify the security of WebView-based APKs generated by AI platforms before release to production."
  },
  {
    title: "Social Media Comment Section Analyzer",
    category: "AI & NLP",
    summary: "An automated sentiment and bot detection system that scrapes comment feeds from YouTube, Facebook, and Instagram to extract user sentiments and topic patterns.",
    tags: ["Python", "YouTube Data API", "Selenium / Playwright", "NLP / VADER", "React"],
    metrics: ["Spam/bot identification", "Multi-platform scraping"],
    features: [
      "Comment collection from YouTube, Facebook, Instagram APIs & bots",
      "Sentiment classification (Positive, Negative, Neutral)",
      "Interactive data visualizations & word cloud extraction",
      "Bot detection & spam user identification"
    ],
    techStack: {
      frontend: ["React.js", "CSS"],
      scraping: ["YouTube Data API", "Facebook Graph API", "Selenium", "Playwright"],
      nlp: ["Python (NLTK, VADER, transformers)"],
      database: ["PostgreSQL / SQLite"]
    },
    objective: "To extract target audience sentiments and detect spam/bot activity across social media channels automatically."
  }
];


export const processSteps = [
  { title: "Discover", text: "Clarify goals, users, systems, competitors, risks, and measurable outcomes." },
  { title: "Design", text: "Create conversion-focused UX, brand language, information architecture, and prototypes." },
  { title: "Build", text: "Engineer secure, scalable frontend, backend, database, and integration layers." },
  { title: "Launch", text: "Validate quality, deploy infrastructure, set tracking, and manage rollout." },
  { title: "Optimize", text: "Use analytics, experiments, support signals, and SEO data to improve results." }
];

export const values = ["Clarity", "Ownership", "Security", "Performance", "Innovation", "Measurable growth"];
export const milestones = ["2019: Product design studio founded", "2020: Expanded into full-stack engineering", "2022: Added cloud and automation practice", "2024: Launched performance marketing unit", "2026: Serving international growth teams"];
export const blogPosts = [
  { category: "Strategy", title: "How enterprise websites become growth infrastructure", excerpt: "A practical look at strategy, UX, engineering, SEO, and analytics as one connected system." },
  { category: "Automation", title: "Where business automation creates the fastest ROI", excerpt: "Sales, support, reporting, operations, and marketing workflows that usually pay back first." },
  { category: "Marketing", title: "The modern SEO stack for high-intent demand", excerpt: "Technical foundations, content depth, performance, schema, and conversion tracking." }
];
