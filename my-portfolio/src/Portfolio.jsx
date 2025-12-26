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

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("dark");
    root.style.background = "#0f1724";
  }, []);

  useEffect(() => {
    // close modal on Escape
    function onKey(e) {
      if (e.key === "Escape") setProjectOpen(null);
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
        <section className="max-w-3xl mx-auto mt-6 px-4">
          <p className="text-slate-200 text-[16px] leading-relaxed text-justify bg-slate-900/60 rounded-xl p-6 shadow-lg border border-slate-800">
            Hey, I'm Aryan! I build cloud-ready, well-behaved software with a mix of engineering discipline and chaotic curiosity. I'm currently pursuing my master's in Computer Science at Pace University, exploring modern software design while crafting reliable systems that don't panic under load. I previously interned at an MNC, where I shipped real features, broke a few things fixed them fast and loved every moment.
          </p>
        </section>

        {/* =============== HIRE ME (DROPDOWN) ================= */}
        <section className="w-full max-w-4xl mx-auto px-4 mt-3">
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

        {/* LITTLE GAP */}
        <div className="h-4" />

        {/* ================= EDUCATION ================= */}
        <section className="w-full max-w-4xl mx-auto px-4 mt-3">
          <details
            className="group bg-gradient-to-br from-[#23272a]/80 to-[#1a1a1a]/80 border border-slate-700 rounded-2xl p-4 shadow-2xl w-full"
            open
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

        {/* ================= PROFESSIONAL EXPERIENCE (PARAGRAPHS) ================= */}

        <section className="w-full max-w-4xl mx-auto px-4 mt-3">
          <details 
            className="group bg-gradient-to-br from-[#23272a]/80 to-[#1a1a1a]/80 border border-slate-700 rounded-2xl p-4 shadow-2xl w-full"
            open
          >
            <summary className="cursor-pointer list-none flex items-center gap-2">
              <span className="w-3 h-3 bg-slate-500 rounded-sm"></span>
              <h2 className="text-2xl font-semibold text-white font-serif">Professional Experience</h2>
            </summary>

            <div className="mt-6 space-y-8">

              {/* ========== JOB 1 — PITNEY BOWES ========== */}
              <article className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 shadow-xl hover:shadow-slate-400/20 transition">
                <h3 className="text-lg font-semibold text-white">Software Engineering Intern</h3>
                <p className="text-sm text-slate-400">
                  Pitney Bowes • July 2025 – October 2025 • Shelton, Connecticut, U.S.A.
                </p>

                <p className="mt-3 text-slate-300 text-[15px] leading-relaxed text-justify">
                  Worked on fixing 100+ security issues in Java and Spring Boot services, 
                  which noticeably improved API security. I also spent a lot of time containerizing 
                  10+ microservices on AWS using ECS, EKS, and Elastic Beanstalk, helping the team 
                  hit 99.9 percent uptime and reduce deployment delays. I improved our Jenkins and 
                  GitLab CI/CD pipelines with BOM-based dependency management, cutting build failures 
                  and speeding up releases, built Spring Boot APIs that performed better under load, 
                  and helped automate testing and monitoring to reduce repetitive manual checks.
                </p>
              </article>

              {/* ========== JOB 2 — OPTIMEYES.AI ========== */}
              <article className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 shadow-xl hover:shadow-slate-400/20 transition">
                <h3 className="text-lg font-semibold text-white">Full Stack Intern</h3>
                <p className="text-sm text-slate-400">
                  OptimEyes.AI • November 2023 – April 2024 • Pune, Maharashtra, India
                </p>

                <p className="mt-3 text-slate-300 text-[15px] leading-relaxed text-justify">
                  Worked on building new UI features in Angular 8+ and connected them to Spring Boot 
                  services on the backend, which helped speed up page loads by around 20 percent. I also 
                  helped shape parts of our microservices architecture, making deployments smoother, more 
                  modular and noticeably faster. I joined daily sync-ups with the project manager, which 
                  really improved how I planned and prioritized tasks and contributed to hitting milestones 
                  more consistently. Along the way, I spent a lot of time testing and debugging the app, 
                  cutting down bugs by about 30 percent and making the overall system much more stable.
                </p>
              </article>

              {/* ========== JOB 3 — YOUTH INDIA FOUNDATION ========== */}
              <article className="bg-slate-800/60 border border-slate-700 rounded-xl p-5 shadow-xl hover:shadow-slate-400/20 transition">
                <h3 className="text-lg font-semibold text-white">Front End Developer Intern</h3>
                <p className="text-sm text-slate-400">
                  Youth India Foundation • June 2021 – August 2021 • Bhubaneswar, Odisha, India
                </p>

                <p className="mt-3 text-slate-300 text-[15px] leading-relaxed text-justify">
                  I designed and refined user interfaces for the Beyond Threads initiative using Angular 
                  8+ and Canva, which made the visuals more engaging and helped improve page load speed 
                  by about 20 percent. I focused on keeping the UI/UX consistent and accessible, aligning 
                  everything with brand guidelines and usability standards so the experience felt inclusive 
                  for all users. I also worked closely with designers, developers, and other teams to keep our 
                  workflows in sync, making feature delivery smoother and the overall project execution much 
                  more coordinated.
                </p>
              </article>

            </div>

          </details>
        </section>

         {/* ================= RECOMMENDATION ================= */}

        <section className="w-full max-w-4xl mx-auto px-4 mt-3">
          <details 
            className="group bg-gradient-to-br from-[#23272a]/80 to-[#1a1a1a]/80 border border-slate-700 rounded-2xl p-4 shadow-2xl w-full"
          >
            <summary className="cursor-pointer list-none flex items-center gap-2">
              <span className="w-3 h-3 bg-slate-500 rounded-sm"></span>
              <h2 className="text-2xl font-semibold text-white font-serif">Recommendation</h2>
            </summary>

            <div className="mt-6 flex justify-center">
              <img 
                src="/recommendation.png"
                alt="Recommendation Screenshot"
                className="rounded-xl shadow-2xl border-4 border-slate-400/30 max-w-full w-[700px] hover:scale-105 transition"
              />
            </div>

          </details>
        </section>

      {/* ================= SKILLS (DROPDOWN + CIRCLES) ================= */}
<section className="w-full max-w-4xl mx-auto px-4 mt-3">
  <details className="group bg-gradient-to-br from-[#23272a]/80 to-[#1a1a1a]/80 border border-slate-700 rounded-2xl p-4 shadow-2xl w-full">
    <summary className="cursor-pointer list-none flex items-center gap-2">
      <span className="w-3 h-3 bg-slate-500 rounded-sm"></span>
      <h2 className="text-2xl font-semibold text-white font-serif">Skills</h2>
    </summary>

      <div className="mt-6 flex flex-wrap justify-center gap-3 px-2">
        {[
          // Programming Languages
          "Java", "Python", "C", "C++", "C#", "JavaScript", "TypeScript",
          "Rust", "Go", "SQL",
          // Frameworks & Libraries
          "Spring Boot", "Hibernate", "JPA", "React.js", "Angular",
          "Node.js", "Express.js", "REST APIs", "Flask",
          "TensorFlow", "Pandas", "NumPy",
          // Cloud / DevOps / Tools
          "Amazon Web Services", "Docker", "Jenkins", "GitLab", "Maven",
          "CI/CD Pipelines", "Terraform (basic)",
          // Databases
          "MySQL", "PostgreSQL", "MongoDB",
          // IDEs / Tools
          "Eclipse", "IntelliJ IDEA", "Visual Studio", "Jira", "Postman",
        ].map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-gradient-to-br from-slate-700/30 to-slate-900/30 text-slate-100 rounded-full text-sm border border-slate-700 shadow-md hover:bg-slate-700/40 hover:text-white transition select-none font-medium tracking-wide"
          >
            {skill}
          </span>
        ))}
      </div>
  </details>
</section>



        {/* ================= PROJECTS (DROPDOWN + PURPLE CIRCLES) ================= */}
<section className="w-full max-w-4xl mx-auto px-4 mt-3">
  <details 
    className="group bg-gradient-to-br from-[#23272a]/80 to-[#1a1a1a]/80 border border-slate-700 rounded-2xl p-4 shadow-2xl w-full"
  >
    <summary className="cursor-pointer list-none flex items-center gap-2">
      <span className="w-3 h-3 bg-slate-500 rounded-sm"></span>
      <h2 className="text-2xl font-semibold text-white font-serif">Projects</h2>
    </summary>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Guard My Bills */}
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => window.open("https://guard-my-bills.vercel.app/", "_blank")}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] \
                       flex items-center justify-center text-white font-semibold shadow-2xl border-4 border-slate-400/30\
                       hover:scale-110 hover:shadow-slate-400/30 transition-all duration-300"
          >
            Guard My Bills
          </button>
          <p className="mt-3 text-slate-200 text-[15px] leading-relaxed font-medium">
            An ML-powered fraud detection tool for bank statements — private, fast, and accurate.
          </p>
        </div>
        {/* SheeEasy */}
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => window.open("https://sheeeasy.vercel.app/", "_blank")}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] \
                       flex items-center justify-center text-white font-semibold shadow-2xl border-4 border-slate-400/30\
                       hover:scale-110 hover:shadow-slate-400/30 transition-all duration-300"
          >
            SheeEasy
          </button>
          <p className="mt-3 text-slate-200 text-[15px] leading-relaxed font-medium">
            A full-featured spreadsheet app with an AI co-pilot.
          </p>
        </div>
        {/* Freeflix */}
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => window.open("https://freeflix-app.vercel.app/", "_blank")}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] \
                       flex items-center justify-center text-white font-semibold shadow-2xl border-4 border-slate-400/30\
                       hover:scale-110 hover:shadow-slate-400/30 transition-all duration-300"
          >
            Freeflix
          </button>
          <p className="mt-3 text-slate-200 text-[15px] leading-relaxed font-medium">
            A full-stack movie recommendation app with mood filters and multilingual search.
          </p>
        </div>
        {/* AI Detective */}
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => window.open("https://ai-detective-aryanprahraj.streamlit.app", "_blank")}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] \
                       flex items-center justify-center text-white font-semibold shadow-2xl border-4 border-slate-400/30\
                       hover:scale-110 hover:shadow-slate-400/30 transition-all duration-300"
          >
            AI Detective
          </button>
          <p className="mt-3 text-slate-200 text-[15px] leading-relaxed font-medium">
            AI-powered fact-checking assistant.
          </p>
        </div>
        {/* AI Resume Tailor */}
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => window.open("https://ai-resume-tailor-rust.vercel.app/", "_blank")}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] \
                       flex items-center justify-center text-white font-semibold shadow-2xl border-4 border-slate-400/30\
                       hover:scale-110 hover:shadow-slate-400/30 transition-all duration-300"
          >
            Resume Tailor
          </button>
          <p className="mt-3 text-slate-200 text-[15px] leading-relaxed font-medium">
            AI tool that rewrites your resume based on job descriptions.
          </p>
        </div>
        {/* AryanInZombieland */}
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => window.open("https://ap16957n.itch.io/aryaninzombieland", "_blank")}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] \
                       flex items-center justify-center text-white font-semibold shadow-2xl border-4 border-slate-400/30\
                       hover:scale-110 hover:shadow-slate-400/30 transition-all duration-300"
          >
            Zombieland
          </button>
          <p className="mt-3 text-slate-200 text-[15px] leading-relaxed font-medium">
            A 3-level Unity survival-horror game.
          </p>
        </div>
        {/* Ball Game */}
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => window.open("https://ap16957n.itch.io/balls-on-platform", "_blank")}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] \
                       flex items-center justify-center text-white font-semibold shadow-2xl border-4 border-slate-400/30\
                       hover:scale-110 hover:shadow-slate-400/30 transition-all duration-300"
          >
            Ball Game 3D
          </button>
          <p className="mt-3 text-slate-200 text-[15px] leading-relaxed font-medium">
            A 3D color-matching puzzle game built in Unity.
          </p>
        </div>
        {/* VirtualPal */}
        <div className="flex flex-col items-center text-center">
          <button
            onClick={() => window.open("https://virtualpal.vercel.app/", "_blank")}
            className="w-32 h-32 rounded-full bg-gradient-to-br from-[#23272a] via-[#23272a] to-[#23272a] \
                       flex items-center justify-center text-white font-semibold shadow-2xl border-4 border-slate-400/30\
                       hover:scale-110 hover:shadow-slate-400/30 transition-all duration-300"
          >
            VirtualPal
          </button>
          <p className="mt-3 text-slate-200 text-[15px] leading-relaxed font-medium">
            Artificial companion app where different buddies help you vent, learn, laugh, and connect when you need it most.
          </p>
        </div>
    </div>
  </details>
</section>

        {/* ================= FOOTER REMOVED AS REQUESTED ================= */}
        </main>
      </div>
    </div>
  );
}
