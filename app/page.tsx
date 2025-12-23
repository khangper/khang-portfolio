"use client";


import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, Mail, Phone, Sun, Moon, Download } from "lucide-react";

export default function Portfolio() {
  const [dark, setDark] = useState(true);
  const { scrollY } = useScroll();
  type Lang = "en" | "vi";

const [lang, setLang] = useState<Lang>("en"); 
  const yBg = useTransform(scrollY, [0, 300], [0, -80]);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  const texts: Record<Lang, {
  heroTyping: string;
  viewProjects: string;
  downloadCV: string;
  aboutTitle: string;
  aboutP1: string;
  aboutP2: string;
  projectsTitle: string;
  skillsTitle: string;
  contactTitle: string;
}>  = {
  en: {
    heroTyping:
      "Frontend-focused Fullstack Developer building modern, scalable web and mobile applications.",
    viewProjects: "View Projects ↓",
    downloadCV: "Download CV",
    aboutTitle: "About Me",
    aboutP1:
      "As a Software Engineering graduate from FPT University, I have built a solid foundation in computer science principles and a high-performance engineering mindset.",
    aboutP2:
      "I specialize in architecting scalable web and mobile applications with a strong focus on frontend performance and clean UI/UX.",
    projectsTitle: "Featured Projects",
    skillsTitle: "Skills",
    contactTitle: "Contact",
  },
  vi: {
    heroTyping:
      "Lập trình viên Fullstack thiên về Frontend, xây dựng các ứng dụng web & mobile hiện đại, dễ mở rộng.",
    viewProjects: "Xem dự án ↓",
    downloadCV: "Tải CV",
    aboutTitle: "Giới thiệu",
    aboutP1:
      "Tôi là cử nhân Kỹ thuật Phần mềm tốt nghiệp Đại học FPT, có nền tảng vững chắc về khoa học máy tính và tư duy phát triển sản phẩm.",
    aboutP2:
      "Tôi tập trung xây dựng các ứng dụng web và mobile có khả năng mở rộng cao, tối ưu hiệu năng frontend và trải nghiệm người dùng.",
    projectsTitle: "Dự án tiêu biểu",
    skillsTitle: "Kỹ năng",
    contactTitle: "Liên hệ",
  },
};

const fullText = texts[lang].heroTyping;
const [displayText, setDisplayText] = useState("");
useEffect(() => {
  let i = 0;
  const interval = setInterval(() => {
    setDisplayText(fullText.slice(0, i + 1));
    i++;
    if (i === fullText.length) clearInterval(interval);
  }, 30); // chỉnh tốc độ tại đây

  return () => clearInterval(interval);
}, [fullText]);

  return (
    <div className={dark ? "bg-slate-950 text-white" : "bg-white text-slate-900"}>
      {/* FLOATING CONTROLS */}
<div className="fixed top-6 right-6 z-50 flex items-center gap-1 
  rounded-full border border-white/20 bg-black/30 backdrop-blur-lg p-1 shadow-lg">

  {/* Language toggle */}
  <button
    onClick={() => setLang(lang === "en" ? "vi" : "en")}
    className={`px-4 py-2 rounded-full text-sm font-semibold transition
      ${lang === "en"
        ? "bg-white text-black"
        : "text-white hover:bg-white/10"}`}
  >
    EN
  </button>

  <button
    onClick={() => setLang(lang === "en" ? "vi" : "en")}
    className={`px-4 py-2 rounded-full text-sm font-semibold transition
      ${lang === "vi"
        ? "bg-white text-black"
        : "text-white hover:bg-white/10"}`}
  >
    VI
  </button>

  {/* Divider */}
  <div className="w-px h-6 bg-white/20 mx-1" />

  {/* Dark mode toggle */}
  <button
    onClick={() => setDark(!dark)}
    className="p-2 rounded-full text-white hover:bg-white/10 transition"
  >
    {dark ? <Sun size={18} /> : <Moon size={18} />}
  </button>
</div>


      {/* HERO */}
<section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
  <motion.div
    style={{ y: yBg }}
    className="absolute inset-0 bg-gradient-to-br from-indigo-600/30 via-purple-600/20 to-pink-600/30 blur-3xl"
  />

  <div className="relative text-center max-w-3xl">
    <motion.img
      src="/avatar.png"
      alt="Doan Anh Khang"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mx-auto w-32 h-32 rounded-full border-4 border-white/20 mb-6"
    />

    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-5xl md:text-6xl font-bold"
    >
      Hi, I&apos;m{" "}
      <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
        Khang
      </span>
    </motion.h1>

    <p className="mt-6 text-xl opacity-80 min-h-[3rem]">
      {displayText}
      <span className="animate-pulse">|</span>
    </p>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="flex flex-wrap justify-center gap-4 mt-10"
    >
<motion.a
  href="#projects"
  animate={{ y: [0, 6, 0] }}
  transition={{ repeat: Infinity, duration: 1.5 }}
  onClick={(e) => {
    e.preventDefault();
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="px-6 py-3 rounded-xl bg-white text-black font-semibold"
>
  {texts[lang].viewProjects}

</motion.a>

      <a
        href="/DoanAnhKhang_Developer_CV.pdf"
        download
        className="px-6 py-3 rounded-xl border border-white/30 flex items-center gap-2 hover:bg-white/10 transition"
      >
        <Download size={18} /> {texts[lang].downloadCV}

      </a>
    </motion.div>
  </div>
</section>


      {/* ABOUT */}
<section className="relative max-w-6xl mx-auto px-6 py-24 overflow-hidden">
      {/* Hiệu ứng nền trang trí (Decorative Background) */}
      <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 -right-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Cột 1: Hình ảnh cá nhân với hiệu ứng Frame */}
<motion.div variants={itemVariants} className="relative">
  {/* Gradient Frame */}
  <motion.div
    initial={{ opacity: 0.25 }}
    whileInView={{ opacity: 0.5 }}
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.4 }}
    className="absolute -inset-1 bg-gradient-to-r 
      from-blue-600 to-cyan-500 rounded-2xl blur"
  />

  {/* Image */}
  <div className="relative max-w-sm mx-auto overflow-hidden rounded-2xl 
    bg-gray-900 border border-white/10">
    <motion.img
      src="/your-avatar.jpg"
      alt="Professional Portrait"
      initial={{ filter: "grayscale(100%)", scale: 0.95 }}
      whileInView={{ filter: "grayscale(0%)", scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.4 }}
      className="w-full h-auto object-contain"
    />
  </div>

  {/* Badge */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
    viewport={{ once: true }}
    className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 
      p-4 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700"
  >
    <p className="text-sm font-bold text-blue-600">Software Engineer</p>
    <p className="text-xs opacity-60">FPT University Alumnus</p>
  </motion.div>
</motion.div>


        {/* Cột 2: Nội dung chữ chuyên nghiệp */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
          <h2 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            {texts[lang].aboutTitle}
          </h2>
          
          <div className="space-y-4 text-lg leading-relaxed text-gray-300">
            <p>
              {texts[lang].aboutP1}
            </p>
            
            <p>
              {texts[lang].aboutP2}
            </p>
          </div>

          {/* Các thông số nhanh (Stats/Tech) */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-3 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm">
              <h4 className="text-blue-400 font-bold">Frontend</h4>
              <p className="text-sm opacity-70">React, Next.js, Tailwind</p>
            </div>
            <div className="p-3 rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm">
              <h4 className="text-purple-400 font-bold">Backend</h4>
              <p className="text-sm opacity-70">Node.js, PostgreSQL, APIs</p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 bg-white text-black font-bold rounded-full w-fit hover:bg-blue-500 hover:text-white transition-colors"
          >
            Download Resume
          </motion.button>
        </motion.div>
      </motion.div>
    </section>

      {/* PROJECTS */}
<section id="projects" className="max-w-6xl mx-auto px-6 py-24">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold mb-12"
  >
    {texts[lang].projectsTitle}
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-8">
    {[
      {
        title: "IntelliPM",
        role: "Fullstack Developer",
        desc: "AI-powered project management platform for enterprise teams.",
        features: [
          "AI task allocation & risk alerts",
          "Meeting transcription & summary",
          "EVM dashboard & reporting",
        ],
        tech: ["React", "Flutter", ".NET Core", "PostgreSQL"],
      },
      {
        title: "Learning Management System",
        role: "Frontend Developer",
        desc: "Modern LMS supporting students and instructors with role-based dashboards.",
        features: [
          "Course browsing & enrollment",
          "Role-based dashboards",
          "Real-time notifications",
        ],
        tech: ["React", "TailwindCSS", ".NET Core"],
      },
      {
        title: "Equipment Rental Platform",
        role: "Frontend Developer",
        desc: "Construction equipment rental & booking platform.",
        features: [
          "Equipment catalog & booking",
          "Online payment integration",
          "Real-time booking status",
        ],
        tech: ["React", ".NET Core", "PostgreSQL"],
      },
    ].map((p) => (
      <motion.div
        key={p.title}
        whileHover={{ y: -12, scale: 1.03 }}
        className="p-6 rounded-2xl bg-black/20 backdrop-blur border border-white/10 flex flex-col justify-between"
      >
        {/* Header */}
        <div>
          <h3 className="text-xl font-semibold mb-1">{p.title}</h3>
          <p className="text-sm text-indigo-400 mb-3">{p.role}</p>
          <p className="opacity-80 text-sm mb-4">{p.desc}</p>

          {/* Features */}
          <ul className="space-y-2 text-sm opacity-80 mb-4">
            {p.features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-emerald-400">✔</span>
                {f}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {p.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* SKILLS */}
<section className="max-w-6xl mx-auto px-6 py-24">
  <motion.h2
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold mb-12"
  >
    {texts[lang].skillsTitle}
  </motion.h2>

  <div className="grid md:grid-cols-2 gap-10">
    {/* Frontend */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Frontend</h3>

      {[
        { name: "React / Next.js", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS / MUI", level: 90 },
        { name: "Flutter / React Native", level: 75 },
      ].map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1 text-sm opacity-80">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-2 rounded-full bg-black/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 0.8 }}
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
            />
          </div>
        </div>
      ))}
    </div>

    {/* Backend */}
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Backend & Tools</h3>

      {[
        { name: ".NET Core API", level: 80 },
        { name: "Node.js / Express", level: 75 },
        { name: "PostgreSQL / MongoDB", level: 80 },
        { name: "Git / CI/CD / Azure", level: 70 },
      ].map((skill) => (
        <div key={skill.name}>
          <div className="flex justify-between mb-1 text-sm opacity-80">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-2 rounded-full bg-black/20 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 0.8 }}
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500"
            />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* CONTACT */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-bold mb-6">{texts[lang].contactTitle}</h2>
        <div className="flex justify-center gap-6 opacity-80">
          <a href="mailto:doananhkhang03@gmail.com"><Mail /></a>
          <a href="https://github.com/khangper" target="_blank"><Github /></a>
          <a href="tel:0374277590"><Phone /></a>
        </div>
      </section>

      <footer className="text-center opacity-50 py-6">
        © 2025 Doan Anh Khang
      </footer>
    </div>
  );
}
