"use client";

import { useEffect, useState } from "react";

const KISAN_MITRA_LIVE_URL =
  "https://kisan-mitra-six-kappa.vercel.app/";

const KISAN_MITRA_GITHUB_URL =
  "https://github.com/atharva-029/kisan-mitra";

const INSTAGRAM_URL = "https://www.instagram.com/atharvasharma029/";

const skillIcons: Record<string, string> = {
  C: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg",

  "C++":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",

  Java:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",

  Python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",

  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",

  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",

  HTML:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",

  CSS:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",

  React:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",

  "Next.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",

  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",

  "Node.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",

  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",

  Supabase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",

  Git:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",

  GitHub:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",

  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",

  Vite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",

  "Three.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",

  "Chart.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg",
};

const projectIcons: Record<string, string> = {
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",

  Vite:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",

  "Three.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg",

  "Chart.js":
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chartjs/chartjs-original.svg",
};

function SkillItem({
  name,
  icon,
}: {
  name: string;
  icon?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3 transition hover:border-white/[0.18] hover:bg-white/[0.045]">
      {icon ? (
        <img
          src={icon}
          alt=""
          className="h-7 w-7 object-contain"
        />
      ) : (
        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-white/10 text-[10px] font-semibold text-white/50">
          {name === "REST APIs"
            ? "API"
            : name === "Edge Functions"
              ? "λ"
              : name === "Data Structures"
                ? "DS"
                : name === "Algorithms"
                  ? "A"
                  : name === "Problem Solving"
                    ? "PS"
                    : "OOP"}
        </span>
      )}

      <span className="text-[13px] text-white/65">
        {name}
      </span>
    </div>
  );
}

function SkillBox({
  title,
  skills,
}: {
  title: string;
  skills: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 sm:p-6">
      <h3 className="mb-5 text-[13px] font-medium uppercase tracking-[0.12em] text-white/35">
        {title}
      </h3>

      <div className="grid gap-3 sm:grid-cols-2">
        {skills.map((skill) => (
          <SkillItem
            key={skill}
            name={skill}
            icon={skillIcons[skill]}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [visitorCount, setVisitorCount] =
    useState<number | null>(null);

  useEffect(() => {
    fetch(
      "https://mnjbxszcybugvtvwzqks.supabase.co/functions/v1/visitor-count",
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === "number") {
          setVisitorCount(data.count);
        }
      })
      .catch((error) => {
        console.error("Visitor counter error:", error);
      });
  }, []);

  return (
    <main className="min-h-screen bg-[#080808] text-[#ededed]">

      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="sticky top-0 z-50 border-b border-white/[0.08] bg-[#080808]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-[1210px] items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:py-5">

          <a
            href="#home"
            className="text-[18px] font-semibold tracking-tight"
          >
            Atharva.
          </a>

          <div className="hidden items-center gap-8 text-[14px] text-white/55 lg:flex">
            <a
              href="#about"
              className="transition hover:text-white"
            >
              About
            </a>

            <a
              href="#projects"
              className="transition hover:text-white"
            >
              Projects
            </a>

            <a
              href="#skills"
              className="transition hover:text-white"
            >
              Skills
            </a>

            <a
              href="#journey"
              className="transition hover:text-white"
            >
              Journey
            </a>

            <a
              href="#connect"
              className="transition hover:text-white"
            >
              Connect
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">

            {/* RESUME */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/[0.12] px-3.5 py-2 text-[12px] transition hover:border-white/25 hover:bg-white/[0.04] sm:px-5 sm:text-[13px]"
            >
              Resume
            </a>

            {/* LET'S TALK */}
            <a
              href="mailto:atharvasharma129@gmail.com"
              className="rounded-full border border-white/[0.12] px-3.5 py-2 text-[12px] transition hover:border-white/25 hover:bg-white/[0.04] sm:px-5 sm:text-[13px]"
            >
              Let&apos;s Talk
            </a>

          </div>
        </div>
      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        id="home"
        className="relative mx-auto flex min-h-[82vh] max-w-[1210px] items-center overflow-hidden px-4 py-16 sm:min-h-[90vh] sm:px-6 sm:py-0"
      >

        {/* Subtle background glow */}
        <div className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-500/[0.035] blur-[120px]" />

        <div className="relative max-w-4xl">

          {/* Positioning line */}
          <div className="mb-6 flex items-center gap-3">

            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-40" />

              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
            </span>

            <p className="text-[13px] font-medium tracking-wide text-blue-400">
              Computer Science Student · Builder · Events Coordinator
            </p>

          </div>

          {/* Main heading */}
          <h1 className="text-[48px] font-semibold leading-[1.02] tracking-[-0.05em] sm:text-[76px] md:text-[92px]">
            Hi, I&apos;m
            <br />
            <span className="text-white">
              Atharva Sharma.
            </span>
          </h1>

          {/* Intro */}
          <p className="mt-7 max-w-[650px] text-[14px] leading-7 text-white/45 sm:mt-8 sm:text-[17px]">
            I&apos;m a Computer Science student at SRM University-AP,
            interested in technology, building things, events and creative
            ideas.
          </p>

          {/* Explore only */}
          <div className="mt-10 flex flex-wrap items-center gap-3">

            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-[13px] font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_8px_25px_rgba(255,255,255,0.1)]"
            >
              Explore

              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                ↗
              </span>
            </a>

          </div>

          {/* Bottom line */}
          <div className="mt-14 flex items-center gap-4 text-[10px] uppercase tracking-[0.18em] text-white/20">
            <span className="h-px w-10 bg-white/10" />

            <span>
              Computer Science · Technology · Creativity
            </span>
          </div>

        </div>
      </section>

      {/* =========================================================
          ABOUT
      ========================================================= */}

      <section
        id="about"
        className="mx-auto max-w-[1210px] scroll-mt-24 px-4 py-20 sm:px-6 sm:py-32"
      >

        <div className="grid gap-16 md:grid-cols-[0.8fr_1.2fr]">

          <div>

            <p className="mb-4 text-[13px] font-medium text-blue-400">
              ABOUT
            </p>

            <h2 className="text-[42px] font-semibold leading-tight tracking-[-0.035em] sm:text-[52px]">
              A little about me.
            </h2>

          </div>

          <div className="space-y-6 text-[15px] leading-8 text-white/45">

            <p>
              I&apos;m currently pursuing B.Tech in Computer Science
              Engineering at SRM University-AP.
            </p>

            <p>
              I enjoy learning about software development, problem solving,
              technology and building useful digital experiences.
            </p>

            <p>
              Outside academics, I&apos;m also involved in music and student
              communities, where I get to work on events and collaborate with
              different people.
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================
          PROJECTS
      ========================================================= */}

      <section
        id="projects"
        className="mx-auto max-w-[1210px] scroll-mt-24 px-4 py-20 sm:px-6 sm:py-32"
      >

        <div className="mb-12">

          <p className="mb-4 text-[13px] font-medium text-blue-400">
            PROJECTS
          </p>

          <h2 className="text-[42px] font-semibold tracking-[-0.035em] sm:text-[52px]">
            Things I&apos;m building.
          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          {/* =====================================================
              KISAN MITRA
          ===================================================== */}

          <div className="group rounded-2xl border border-white/[0.1] bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/30 hover:bg-white/[0.035] hover:shadow-[0_20px_60px_rgba(16,185,129,0.06)]">

            <div className="flex items-start justify-between gap-4">

              <p className="text-[11px] uppercase tracking-[0.15em] text-emerald-400/70">
                Featured Project
              </p>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1 text-[10px] text-emerald-300/80">
                Live
              </span>

            </div>

            <h3 className="mt-6 text-[24px] font-medium tracking-tight">
              Kisan Mitra
            </h3>

            <p className="mt-3 max-w-[500px] text-[14px] leading-7 text-white/40">
              A smart agricultural assistance platform designed to help
              farmers with weather insights, mandi prices, crop guidance,
              government schemes, soil and disease diagnosis, and irrigation
              planning.
            </p>

            {/* TECH STACK */}
            <div className="mt-7 flex flex-wrap gap-2">

              {[
                "JavaScript",
                "Vite",
                "Three.js",
                "Chart.js",
              ].map((tech) => (

                <div
                  key={tech}
                  className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 text-[11px] text-white/45 transition hover:border-white/[0.18] hover:bg-white/[0.05]"
                >

                  <img
                    src={projectIcons[tech]}
                    alt=""
                    className="h-4 w-4 object-contain"
                  />

                  <span>
                    {tech}
                  </span>

                </div>

              ))}

            </div>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap items-center gap-3">

              {/* LIVE PROJECT */}
              <a
                href={KISAN_MITRA_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-[12px] font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/90 hover:shadow-[0_8px_25px_rgba(255,255,255,0.12)]"
              >
                Live Project

                <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                  ↗
                </span>
              </a>

              {/* GITHUB */}
              <a
                href={KISAN_MITRA_GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group/github inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-5 py-2.5 text-[12px] text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.04] hover:text-white"
              >

                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current transition-transform duration-300 group-hover/github:scale-110"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.91.57.1.78-.25.78-.55v-2.13c-3.19.69-3.86-1.35-3.86-1.35-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.52-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.93 10.93 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.41-2.69 5.39-5.25 5.67.41.35.78 1.04.78 2.1v3.11c0 .3.21.65.79.54A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>

                GitHub

                <span className="transition-transform duration-300 group-hover/github:translate-x-0.5">
                  ↗
                </span>

              </a>

            </div>

          </div>


        </div>
      </section>

      {/* =========================================================
          SKILLS
      ========================================================= */}

      <section
        id="skills"
        className="mx-auto max-w-[1210px] scroll-mt-24 px-4 py-20 sm:px-6 sm:py-32"
      >

        <div className="mb-12">

          <p className="mb-4 text-[13px] font-medium text-blue-400">
            SKILLS
          </p>

          <h2 className="text-[42px] font-semibold tracking-[-0.035em] sm:text-[52px]">
            Things I work with.
          </h2>

        </div>

        <div className="grid gap-5 md:grid-cols-2">

          <SkillBox
            title="Languages"
            skills={[
              "C",
              "C++",
              "Java",
              "Python",
              "JavaScript",
              "TypeScript",
            ]}
          />

          <SkillBox
            title="Frontend"
            skills={[
              "HTML",
              "CSS",
              "React",
              "Next.js",
              "Tailwind CSS",
            ]}
          />

          <SkillBox
            title="Backend"
            skills={[
              "Node.js",
              "REST APIs",
              "Edge Functions",
            ]}
          />

          <SkillBox
            title="Database"
            skills={[
              "PostgreSQL",
              "Supabase",
            ]}
          />

          <SkillBox
            title="Tools & Technologies"
            skills={[
              "Git",
              "GitHub",
              "VS Code",
              "Vite",
              "Three.js",
              "Chart.js",
            ]}
          />

          <SkillBox
            title="Core"
            skills={[
              "Data Structures",
              "Algorithms",
              "Problem Solving",
              "OOP",
            ]}
          />

        </div>
      </section>

      {/* =========================================================
          JOURNEY
      ========================================================= */}

      <section
        id="journey"
        className="mx-auto max-w-[1210px] scroll-mt-24 px-4 py-20 sm:px-6 sm:py-32"
      >

        <div className="mb-16">

          <p className="mb-4 text-[13px] font-medium text-blue-400">
            JOURNEY
          </p>

          <h2 className="text-[42px] font-semibold tracking-[-0.035em] sm:text-[52px]">
            Where I&apos;ve been.
          </h2>

        </div>

        <div className="relative ml-2 border-l border-white/[0.1]">

          {/* SRM */}
          <div className="relative pb-14 pl-8">

            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-blue-400" />

            <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-white/30">
              2025
            </p>

            <h3 className="text-[19px] font-medium">
              SRM University-AP
            </h3>

            <p className="mt-2 text-[14px] text-white/40">
              B.Tech Computer Science Engineering
            </p>

          </div>

          {/* ONE HEART */}
          <div className="relative pb-14 pl-8">

            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white/35" />

            <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-white/30">
              August 2025 — Present
            </p>

            <h3 className="text-[19px] font-medium">
              One Heart
            </h3>

            <p className="mt-2 text-[14px] text-white/40">
              Performer · Music Club
            </p>

          </div>

          {/* MICROSOFT STUDENT COMMUNITY */}
          <div className="relative pl-8">

            <span className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-white/35" />

            <p className="mb-2 text-[11px] uppercase tracking-[0.15em] text-white/30">
              August 2026 — Present
            </p>

            <h3 className="text-[19px] font-medium">
              Microsoft Student Community
            </h3>

            <p className="mt-2 text-[14px] text-white/40">
              Events Coordinator
            </p>

          </div>

        </div>
      </section>

      {/* =========================================================
          CONNECT
      ========================================================= */}

      <section
        id="connect"
        className="mx-auto max-w-[1210px] scroll-mt-24 px-6 pt-32"
      >

        <div className="border-t border-white/[0.1]" />

        <div className="relative min-h-[430px] pt-16 sm:min-h-[390px] sm:pt-20">

          <div>

            <p className="mb-5 text-[14px] font-medium text-blue-400">
              CONNECT
            </p>

            <h2 className="text-[48px] font-semibold leading-none tracking-[-0.045em] sm:text-[54px]">
              Connect with me.
            </h2>

            <p className="mt-7 text-[14px] text-white/40">
              Feel free to reach out or follow along.
            </p>

          </div>

          {/* =====================================================
              SOCIAL ICONS
          ===================================================== */}

          <div className="mt-10 flex items-center gap-3 sm:absolute sm:right-0 sm:top-[165px] sm:mt-0">

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/atharva-sharma029"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.02] transition-all duration-300 hover:border-[#0A66C2]/70 hover:bg-[#0A66C2]/[0.05] hover:shadow-[0_0_12px_rgba(10,102,194,0.35),inset_0_0_12px_rgba(10,102,194,0.08)]"
            >

              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-[3px] transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_18px_2px_rgba(10,102,194,0.35)]" />

              <svg
                viewBox="0 0 24 24"
                className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                fill="#0A66C2"
              >
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.62 0 4.29 2.38 4.29 5.48v6.27h-.03ZM5.32 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.1 20.45H3.55V8.99H7.1v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
              </svg>

            </a>

            {/* X */}
            <a
              href="https://x.com/Atharva2529"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X"
              title="X"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.02] transition-all duration-300 hover:border-white/60 hover:bg-white/[0.05] hover:shadow-[0_0_12px_rgba(255,255,255,0.3),inset_0_0_12px_rgba(255,255,255,0.06)]"
            >

              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-[3px] transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_18px_2px_rgba(255,255,255,0.25)]" />

              <svg
                viewBox="0 0 24 24"
                className="relative h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110"
                fill="white"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.657l-5.214-6.817-5.963 6.817H1.683l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.451-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
              </svg>

            </a>

            {/* INSTAGRAM */}
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.02] transition-all duration-300 hover:border-pink-400/70 hover:bg-pink-400/[0.05] hover:shadow-[0_0_12px_rgba(236,72,153,0.35),inset_0_0_12px_rgba(236,72,153,0.08)]"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-[3px] transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_18px_2px_rgba(236,72,153,0.3)]" />

              <svg
                viewBox="0 0 24 24"
                className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                fill="none"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="#E1306C" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" stroke="#E1306C" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1.2" fill="#E1306C" />
              </svg>
            </a>

            {/* EMAIL */}
            <a
              href="mailto:atharvasharma129@gmail.com"
              aria-label="Email"
              title="Email"
              className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.02] transition-all duration-300 hover:border-red-400/70 hover:bg-red-400/[0.05] hover:shadow-[0_0_12px_rgba(234,67,53,0.35),inset_0_0_12px_rgba(234,67,53,0.08)]"
            >

              <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 blur-[3px] transition-opacity duration-300 group-hover:opacity-100 group-hover:shadow-[0_0_18px_2px_rgba(234,67,53,0.3)]" />

              <svg
                viewBox="0 0 24 24"
                className="relative h-5 w-5 transition-transform duration-300 group-hover:scale-110"
              >
                <path
                  fill="#EA4335"
                  d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Z"
                />

                <path
                  fill="#fff"
                  d="m20 6-8 6-8-6v2l8 6 8-6V6Z"
                />
              </svg>

            </a>

          </div>

          {/* VISITOR COUNTER */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">

            <div className="flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.025] px-5 py-3 text-[14px] text-white/45 shadow-[0_0_30px_rgba(255,255,255,0.025)]">

              <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.8)]" />

              <span>
                You are the{" "}

                <span className="font-medium text-white">
                  {visitorCount !== null
                    ? `${visitorCount.toLocaleString()}th`
                    : "—"}
                </span>{" "}

                visitor
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="border-t border-white/[0.1]">

        <div className="mx-auto flex max-w-[1210px] flex-col items-center justify-between gap-3 px-4 py-8 text-center text-[12px] text-white/30 sm:flex-row sm:px-6 sm:py-10 sm:text-left">

          <p>
            © 2026 Atharva Sharma
          </p>

          <p>
            Built with Next.js
          </p>

        </div>

      </footer>

    </main>
  );
}