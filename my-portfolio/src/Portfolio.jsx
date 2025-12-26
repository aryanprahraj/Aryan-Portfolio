import React, { useEffect, useState } from "react";

/**
 * Portfolio.jsx
 *
 * Drop into src/ and import into App.jsx:
 *   import Portfolio from "./Portfolio";
 *   export default function App(){ return <Portfolio /> }
 *
 * Replace placeholder arrays (education, experience, skills, projects) with real data.
 * Tailwind must be configured in the project (we used Tailwind v3 config).
 */

/* --------------------------
  Placeholder data — replace these!
  Keep same shapes: arrays of objects used below.
----------------------------*/
const EDUCATION = [
  { school: "Pace University", degree: "M.S. Computer Science", years: "2024 - 2026", note: "Specialization: Cloud & Web" },
  { school: "ABC University", degree: "B.Tech Computer Science", years: "2019 - 2023", note: "CGPA: 8.6/10" },
  { school: "High School", degree: "Class XII", years: "2018 - 2019", note: "Science stream" },
  { school: "Certifications", degree: "Various", years: "2021 - 2024", note: "AWS, React, DSA" },
];

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Company A",
    range: "2023 - Present",
    bullets: ["Built microservices using Node.js and Express", "Improved API latency by 40% using caching & profiling"],
  },
  {
    role: "Frontend Intern",
    company: "Company B",
    range: "2022 - 2023",
    bullets: ["Implemented responsive UI in React", "Reduced bundle size by 25%"],
  },
  {
    role: "Teaching Assistant",
    company: "University X",
    range: "2021 - 2022",
    bullets: ["Assisted DSA labs and graded assignments", "Held weekly problem-solving sessions"],
  },
];

const SKILLS = {
  Frontend: ["React", "Tailwind", "HTML", "CSS", "TypeScript (basics)"],
  Backend: ["Node.js", "Express", "REST", "GraphQL"],
  Cloud: ["AWS (EC2, S3, Lambda)", "GCP basics"],
  Databases: ["Postgres", "MongoDB"],
  Libraries: ["Redux", "React Query", "Formik"],
  Tools: ["Git", "Docker", "Vercel", "CI/CD"],
};

const PROJECTS = [
  {
    name: "Realtime Chat",
    description: "Websocket-based chat with rooms, typing indicators and presence.",
    techStack: ["React", "Node.js", "Socket.io", "Redis"],
    liveLink: "#", // replace with real deployment link
    repoLink: "#", // replace with repo
  },
  {
    name: "Ecommerce Demo",
    description: "Server-side rendered product pages with cart and payment demo.",
    techStack: ["Next.js", "Stripe", "Postgres"],
    liveLink: "#",
    repoLink: "#",
  },
  {
      name: "Analytics Dashboard",
      description: "Data visualizations with charts and export features.",
      techStack: ["React", "Chart.js", "D3.js"],
      liveLink: "#",
      repoLink: "#",
  },
  {
      name: "Resume Parser",
      description: "Small NLP service to extract structured info from resumes.",
      techStack: ["Python", "spaCy", "Flask"],
      liveLink: "#",
      repoLink: "#",
  },
];

/* --------------------------
  Utility subcomponents
----------------------------*/
// ...existing code...

/* --------------------------
  Main Component
----------------------------*/
export default function Portfolio() {

  const [projectOpen, setProjectOpen] = useState(null); // index of open project or null
  const [modalOpen, setModalOpen] = useState(null); // which modal is open: 'experience', 'recommendation', 'skills', 'projects'

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.background = "#0f1724";
  }, []);

  useEffect(() => {
    // close modal on Escape
    function onKey(e) {
      if (e.key === "Escape") {
        setProjectOpen(null);
        setModalOpen(null);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.png')", filter: "brightness(1.15)" }}>
      {/* Soft transparent overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative z-10">
        <main>
        {/* ================= HEADER / NAME ================= */}
        <header className="max-w-4xl mx-auto text-center pt-12 px-4">
          <h1 className="text-6xl font-extrabold tracking-tight drop-shadow-lg animate-fade-in font-serif">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">Aryan</span>
            <span> </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-500">Prahraj</span>
          </h1>
        </header>

        {/* =============== SUMMARY (JUSTIFIED TEXT) ================= */}
        <section className="max-w-5xl mx-auto mt-6 px-4">
          <p className="text-slate-200 text-[16px] leading-relaxed text-justify bg-slate-900/60 rounded-xl p-6 shadow-lg border border-slate-800">
            Hey, I'm Aryan! I build cloud-ready, well-behaved software with a mix of engineering discipline and chaotic curiosity. I'm currently pursuing my master's in Computer Science at Pace University, exploring modern software design while crafting reliable systems that don't panic under load. I previously interned at an MNC, where I shipped real features, broke a few things fixed them fast and loved every moment.
          </p>
        </section>

        {/* =============== TWO COLUMN LAYOUT ================= */}
        <div className="w-full max-w-6xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* LEFT COLUMN: Hire Me, Professional Experience, Recommendation */}
          <div className="space-y-6">
            
            {/* =============== HIRE ME (DROPDOWN) ================= */}
            <section className="w-full">
              <details className="group bg-gradient-to-br from-[#23272a]/80 to-[#1a1a1a]/80 border border-slate-700 rounded-2xl p-4 shadow-2xl w-full">
                <summary className="cursor-pointer list-none flex items-center gap-2">
                  <span className="w-3 h-3 bg-slate-500 rounded-sm"></span>
                  <h2 className="text-xl font-semibold text-white font-serif">Hire Me</h2>
                </summary>

                <div className="mt-4 ml-6 space-y-1 text-slate-200 text-[15px]">
                  <p>
                    Email:
                    <a href="mailto:aryanprahraj@gmail.com" className="text-indigo-400 hover:underline ml-1">
                      aryanprahraj@gmail.com
                    </a>
                  </p>

                  <p>
                    Contact:
                    <a href="tel:+16463823438" className="text-indigo-400 hover:underline ml-1">
                      +1 646-382-3438
                    </a>
                  </p>

                  <p>
                    LinkedIn:
                    <a
                      href="https://www.linkedin.com/in/aryan-prahraj-89545160/"
                      target="_blank"
                      className="text-indigo-400 hover:underline ml-1"
                    >
                      View Profile
                      <span className="w-3 h-3 bg-violet-400 rounded-sm"></span>
                    </a>
                  </p>

                  <p>
                    GitHub:
                    <a
                      href="https://github.com/aryanprahraj"
                      target="_blank"
                      className="text-indigo-400 hover:underline ml-1"
                    >
                      Visit Repo
                    </a>
                  </p>
                </div>

              </details>
            </section>

            {/* ================= PROFESSIONAL EXPERIENCE ================= */}
            <section className="w-full">
              <button
                onClick={() => setModalOpen('experience')}
                className="w-full bg-gradient-to-br from-[#23272a]/80 to-[#1a1a1a]/80 border border-slate-700 rounded-2xl p-4 shadow-2xl hover:shadow-slate-400/30 hover:border-slate-500 transition-all text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-slate-500 rounded-sm"></span>
                  <h2 className="text-2xl font-semibold text-white font-serif">Professional Experience</h2>
                </div>
              </button>
            </section>

            {/* ================= RECOMMENDATION ================= */}
            <section className="w-full">
              <button
                onClick={() => setModalOpen('recommendation')}
                className="w-full bg-gradient-to-br from-[#23272a]/80 to-[#1a1a1a]/80 border border-slate-700 rounded-2xl p-4 shadow-2xl hover:shadow-slate-400/30 hover:border-slate-500 transition-all text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-slate-500 rounded-sm"></span>
                  <h2 className="text-2xl font-semibold text-white font-serif">Recommendation</h2>
                </div>
              </button>
            </section>

          </div>

          {/* RIGHT COLUMN: Education, Skills, Projects */}
          <div className="space-y-6">
            
            {/* ================= EDUCATION ================= */}
            <section className="w-full">
              <details
                className="group bg-gradient-to-br from-[#23272a]/80 to-[#1a1a1a]/80 border border-slate-700 rounded-2xl p-4 shadow-2xl w-full"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <h2 className="text-2xl font-semibold text-white flex items-center gap-2 font-serif">
                    <span className="w-3 h-3 bg-slate-500 rounded-sm"></span>
                    Education
                  </h2>
                </summary>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">

                  {/* Pace University */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] flex items-center justify-center text-white font-semibold shadow-2xl border-4 border-slate-400/30">
                      Pace University
                    </div>

                    <p className="mt-3 text-white font-medium">M.S. in Computer Science</p>
                    <p className="text-slate-400 text-sm">September 2024 – May 2026</p>
                    <p className="text-slate-400 text-sm">New York, New York, U.S.A.</p>
                  </div>

                  {/* SOA University */}
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] flex items-center justify-center text-white font-semibold shadow-2xl border-4 border-slate-400/30">
                      S'O'A University
                    </div>

                    <p className="mt-3 text-white font-medium">B.Tech in Computer Science</p>
                    <p className="text-slate-400 text-sm">June 2019 – July 2023</p>
                    <p className="text-slate-400 text-sm">Bhubaneswar, Odisha, India</p>
                  </div>

                </div>
              </details>
            </section>

            {/* ================= SKILLS ================= */}
            <section className="w-full">
              <button
                onClick={() => setModalOpen('skills')}
                className="w-full bg-gradient-to-br from-[#23272a]/80 to-[#1a1a1a]/80 border border-slate-700 rounded-2xl p-4 shadow-2xl hover:shadow-slate-400/30 hover:border-slate-500 transition-all text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-slate-500 rounded-sm"></span>
                  <h2 className="text-2xl font-semibold text-white font-serif">Skills</h2>
                </div>
              </button>
            </section>

            {/* ================= PROJECTS ================= */}
            <section className="w-full">
              <button
                onClick={() => setModalOpen('projects')}
                className="w-full bg-gradient-to-br from-[#23272a]/80 to-[#1a1a1a]/80 border border-slate-700 rounded-2xl p-4 shadow-2xl hover:shadow-slate-400/30 hover:border-slate-500 transition-all text-left"
              >
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-slate-500 rounded-sm"></span>
                  <h2 className="text-2xl font-semibold text-white font-serif">Projects</h2>
                </div>
              </button>
            </section>

          </div>

        </div>

        {/* ================= MODALS ================= */}

        {/* PROFESSIONAL EXPERIENCE MODAL */}
        {modalOpen === 'experience' && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-[#23272a]/95 to-[#1a1a1a]/95 border border-slate-700 rounded-2xl max-w-[80vw] lg:max-w-6xl shadow-2xl max-h-[90vh] flex flex-col">
              {/* Fixed Header */}
              <div className="flex justify-between items-center px-8 py-6 border-b border-slate-700 flex-shrink-0">
                <h2 className="text-3xl font-semibold text-white font-serif">Professional Experience</h2>
                <button onClick={() => setModalOpen(null)} className="text-slate-400 hover:text-white text-2xl">×</button>
              </div>

              {/* Scrollable Content */}
              <div className="space-y-8 px-8 py-6 overflow-y-auto flex-1">
                {/* ========== JOB 1 — PITNEY BOWES ========== */}
                <article className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 shadow-xl">
                  <h3 className="text-xl font-semibold text-white">Software Engineering Intern</h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Pitney Bowes • July 2025 – October 2025 • Shelton, Connecticut, U.S.A.
                  </p>

                  <p className="mt-4 text-slate-300 text-[15px] leading-relaxed">
                    Worked on fixing 100+ security issues in Java and Spring Boot services, which noticeably improved API security. I also spent a lot of time containerizing 10+ microservices on AWS using ECS, EKS, and Elastic Beanstalk, helping the team hit 99.9 percent uptime and reduce deployment delays. I improved our Jenkins and GitLab CI/CD pipelines with BOM-based dependency management, cutting build failures and speeding up releases, built Spring Boot APIs that performed better under load, and helped automate testing and monitoring to reduce repetitive manual checks.
                  </p>
                </article>

                {/* ========== JOB 2 — OPTIMEYES.AI ========== */}
                <article className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 shadow-xl">
                  <h3 className="text-xl font-semibold text-white">Full Stack Intern</h3>
                  <p className="text-sm text-slate-400 mt-1">
                    OptimEyes.AI • November 2023 – April 2024 • Pune, Maharashtra, India
                  </p>

                  <p className="mt-4 text-slate-300 text-[15px] leading-relaxed">
                    Worked on building new UI features in Angular 8+ and connected them to Spring Boot services on the backend, which helped speed up page loads by around 20 percent. I also helped shape parts of our microservices architecture, making deployments smoother, more modular and noticeably faster. I joined daily sync-ups with the project manager, which really improved how I planned and prioritized tasks and contributed to hitting milestones more consistently. Along the way, I spent a lot of time testing and debugging the app, cutting down bugs by about 30 percent and making the overall system much more stable.
                  </p>
                </article>

                {/* ========== JOB 3 — YOUTH INDIA FOUNDATION ========== */}
                <article className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 shadow-xl">
                  <h3 className="text-xl font-semibold text-white">Front End Developer Intern</h3>
                  <p className="text-sm text-slate-400 mt-1">
                    Youth India Foundation • June 2021 – August 2021 • Bhubaneswar, Odisha, India
                  </p>

                  <p className="mt-4 text-slate-300 text-[15px] leading-relaxed">
                    I designed and refined user interfaces for the Beyond Threads initiative using Angular 8+ and Canva, which made the visuals more engaging and helped improve page load speed by about 20 percent. I focused on keeping the UI/UX consistent and accessible, aligning everything with brand guidelines and usability standards so the experience felt inclusive for all users. I also worked closely with designers, developers, and other teams to keep our workflows in sync, making feature delivery smoother and the overall project execution much more coordinated.
                  </p>
                </article>
              </div>
            </div>
          </div>
        )}

        {/* RECOMMENDATION MODAL */}
        {modalOpen === 'recommendation' && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-[#23272a]/95 to-[#1a1a1a]/95 border border-slate-700 rounded-2xl p-8 max-w-3xl shadow-2xl">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-semibold text-white font-serif">Recommendation</h2>
                <button onClick={() => setModalOpen(null)} className="text-slate-400 hover:text-white text-2xl">×</button>
              </div>

              <div className="flex justify-center">
                <img 
                  src="/recommendation.png"
                  alt="Recommendation Screenshot"
                  className="rounded-xl shadow-2xl border-4 border-slate-400/30 max-w-full w-[800px] hover:scale-105 transition"
                />
              </div>
            </div>
          </div>
        )}

        {/* SKILLS MODAL */}
        {modalOpen === 'skills' && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-[#23272a]/95 to-[#1a1a1a]/95 border border-slate-700 rounded-2xl max-w-[80vw] lg:max-w-6xl shadow-2xl max-h-[80vh] flex flex-col">
              <div className="flex justify-between items-center px-8 py-6 border-b border-slate-700 flex-shrink-0">
                <h2 className="text-3xl font-semibold text-white font-serif">Skills</h2>
                <button onClick={() => setModalOpen(null)} className="text-slate-400 hover:text-white text-2xl">×</button>
              </div>

              <div className="px-8 py-6 overflow-y-auto flex-1 flex flex-wrap justify-center gap-3 items-start content-start">
                {[
                  // Programming Languages
                  "Java", "Python", "C", "C++", "C#", "JavaScript", "TypeScript",
                  "Rust", "Go", "SQL",
                  // Frameworks & Libraries
                  "Spring Boot", "Hibernate", "JPA", "React.js", "Angular",
                  "Node.js", "Express.js", "REST APIs", "Flask",
                  "TensorFlow", "Pandas", "NumPy",
                  // AI/ML
                  "Artificial Intelligence", "Machine Learning",
                  // Cloud / DevOps / Tools
                  "Amazon Web Services", "Docker", "Jenkins", "GitLab", "Maven",
                  "CI/CD Pipelines", "Terraform (basic)",
                  // Databases
                  "MySQL", "PostgreSQL", "MongoDB",
                  // IDEs / Tools
                  "Eclipse", "IntelliJ IDEA", "Visual Studio", "Jira", "Postman",
                ].map((skill, i) => (
                  <div
                    key={i}
                    className="inline-flex items-center h-fit bg-gradient-to-br from-slate-700/30 to-slate-900/30 text-slate-100 rounded text-sm border border-slate-700 shadow-md hover:bg-slate-700/40 hover:text-white transition select-none font-medium tracking-wide whitespace-nowrap"
                    style={{ padding: "0.25rem 0.75rem" }}
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PROJECTS MODAL */}
        {modalOpen === 'projects' && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-[#23272a]/95 to-[#1a1a1a]/95 border border-slate-700 rounded-2xl max-w-[90vw] lg:max-w-7xl shadow-2xl max-h-[85vh] flex flex-col">
              <div className="flex justify-between items-center px-8 py-6 border-b border-slate-700 flex-shrink-0">
                <h2 className="text-3xl font-semibold text-white font-serif">Projects</h2>
                <button onClick={() => setModalOpen(null)} className="text-slate-400 hover:text-white text-2xl">×</button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-6 overflow-y-auto flex-1">
                {/* VirtualPal */}
                <div className="flex flex-col items-center text-center">
                  <button
                    onClick={() => window.open("https://virtualpal.vercel.app/", "_blank")}
                    className="w-40 h-40 rounded-lg bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] flex items-center justify-center shadow-2xl border-2 border-slate-700 hover:scale-105 hover:shadow-slate-400/30 transition-all duration-300 overflow-hidden"
                  >
                    <img src="/virtualpal.png" alt="VirtualPal" className="w-full h-full object-cover" />
                  </button>
                  <p className="mt-3 text-white text-sm font-semibold">VirtualPal</p>
                </div>
                {/* Guard My Bills */}
                <div className="flex flex-col items-center text-center">
                  <button
                    onClick={() => window.open("https://guard-my-bills.vercel.app/", "_blank")}
                    className="w-40 h-40 rounded-lg bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] flex items-center justify-center shadow-2xl border-2 border-slate-700 hover:scale-105 hover:shadow-slate-400/30 transition-all duration-300 overflow-hidden"
                  >
                    <img src="/guardmybills.png" alt="Guard My Bills" className="w-full h-full object-cover" />
                  </button>
                  <p className="mt-3 text-white text-sm font-semibold">Guard My Bills</p>
                </div>
                {/* SheeEasy */}
                <div className="flex flex-col items-center text-center">
                  <button
                    onClick={() => window.open("https://sheeeasy.vercel.app/", "_blank")}
                    className="w-40 h-40 rounded-lg bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] flex items-center justify-center shadow-2xl border-2 border-slate-700 hover:scale-105 hover:shadow-slate-400/30 transition-all duration-300 overflow-hidden"
                  >
                    <img src="/sheeeasy.png" alt="SheeEasy" className="w-full h-full object-cover" />
                  </button>
                  <p className="mt-3 text-white text-sm font-semibold">SheeEasy</p>
                </div>
                {/* Freeflix */}
                <div className="flex flex-col items-center text-center">
                  <button
                    onClick={() => window.open("https://freeflix-app.vercel.app/", "_blank")}
                    className="w-40 h-40 rounded-lg bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] flex items-center justify-center shadow-2xl border-2 border-slate-700 hover:scale-105 hover:shadow-slate-400/30 transition-all duration-300 overflow-hidden"
                  >
                    <img src="/freeflix.png" alt="Freeflix" className="w-full h-full object-cover" />
                  </button>
                  <p className="mt-3 text-white text-sm font-semibold">Freeflix</p>
                </div>
                {/* AI Detective */}
                <div className="flex flex-col items-center text-center">
                  <button
                    onClick={() => window.open("https://ai-detective-aryanprahraj.streamlit.app", "_blank")}
                    className="w-40 h-40 rounded-lg bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] flex items-center justify-center shadow-2xl border-2 border-slate-700 hover:scale-105 hover:shadow-slate-400/30 transition-all duration-300 overflow-hidden"
                  >
                    <img src="/detective.png" alt="AI Detective" className="w-full h-full object-cover" />
                  </button>
                  <p className="mt-3 text-white text-sm font-semibold">AI Detective</p>
                </div>
                {/* AI Resume Tailor */}
                <div className="flex flex-col items-center text-center">
                  <button
                    onClick={() => window.open("https://ai-resume-tailor-rust.vercel.app/", "_blank")}
                    className="w-40 h-40 rounded-lg bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] flex items-center justify-center shadow-2xl border-2 border-slate-700 hover:scale-105 hover:shadow-slate-400/30 transition-all duration-300 overflow-hidden"
                  >
                    <img src="/resumetailor.png" alt="Resume Tailor" className="w-full h-full object-cover" />
                  </button>
                  <p className="mt-3 text-white text-sm font-semibold">Resume Tailor</p>
                </div>
                {/* AryanInZombieland */}
                <div className="flex flex-col items-center text-center">
                  <button
                    onClick={() => window.open("https://ap16957n.itch.io/aryaninzombieland", "_blank")}
                    className="w-40 h-40 rounded-lg bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] flex items-center justify-center shadow-2xl border-2 border-slate-700 hover:scale-105 hover:shadow-slate-400/30 transition-all duration-300 overflow-hidden"
                  >
                    <img src="/zombie.png" alt="Zombieland" className="w-full h-full object-cover" />
                  </button>
                  <p className="mt-3 text-white text-sm font-semibold">Zombieland</p>
                </div>
                {/* Ball Game */}
                <div className="flex flex-col items-center text-center">
                  <button
                    onClick={() => window.open("https://ap16957n.itch.io/balls-on-platform", "_blank")}
                    className="w-40 h-40 rounded-lg bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] flex items-center justify-center shadow-2xl border-2 border-slate-700 hover:scale-105 hover:shadow-slate-400/30 transition-all duration-300 overflow-hidden"
                  >
                    <img src="/3dgame.png" alt="Ball Game 3D" className="w-full h-full object-cover" />
                  </button>
                  <p className="mt-3 text-white text-sm font-semibold">Ball Game 3D</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= FOOTER REMOVED AS REQUESTED ================= */}
        </main>
      </div>
    </div>
  );
}
