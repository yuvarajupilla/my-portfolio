import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaMapMarkerAlt,
  FaBriefcase,
  FaCode,
  FaUsers,
  FaClock,
  FaArrowRight,
  FaCalendarAlt,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTailwindcss,
  SiDocker,
  SiWordpress,
  SiExpress,
  SiGraphql,
  SiTypescript,
} from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

function CurrentWork() {
  const { darkMode } = useTheme();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  // 🔥 Parallax background effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const currentRole = {
    company: "AVIES",
    position: "Full Stack Developer",
    location: "Vijayawada, India",
    startDate: "Jan 2024",
    duration: "Present",
    description:
      "Building scalable full-stack applications with React, Node.js, and MongoDB. Creating custom WordPress solutions with optimized performance and enterprise-grade architecture.",
    responsibilities: [
      "Architecting full-stack MERN applications with microservices pattern",
      "Developing RESTful APIs & database design with MongoDB aggregation pipelines",
      "Custom WordPress theme development with ACF and custom post types",
      "Containerized deployment with Docker and CI/CD pipelines",
      "UI implementation with Tailwind CSS and Framer Motion animations",
      "Code reviews, mentorship, and technical documentation",
    ],
    techStack: [
      { name: "React.js", icon: <SiReact />, color: "#61DBFB", level: 90 },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#68A063", level: 85 },
      { name: "Express", icon: <SiExpress />, color: "#ffffff", level: 88 },
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D", level: 85 },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4", level: 92 },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED", level: 80 },
      { name: "WordPress", icon: <SiWordpress />, color: "#21759B", level: 85 },
      { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6", level: 82 },
    ],
    achievements: [
      { metric: "10+", label: "Projects Delivered" },
      { metric: "98%", label: "Client Satisfaction" },
      { metric: "35%", label: "Performance Boost" },
      { metric: "24/7", label: "Support Available" },
    ],
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: (custom = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const fadeRight = {
    hidden: { opacity: 0, x: 40 },
    visible: (custom = 0) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const cardHoverAnimation = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#0A0A0F] text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900"
      } py-24 md:py-32 px-6 md:px-16`}
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {/* 🔥 Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 opacity-30 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_top_center,_#06b6d4_0%,_transparent_60%)]"
              : "bg-[radial-gradient(ellipse_at_top_center,_#22d3ee_0%,_transparent_60%)]"
          }`}
        />
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 opacity-20 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_bottom_right,_#8b5cf6_0%,_transparent_70%)]"
              : "bg-[radial-gradient(ellipse_at_bottom_right,_#c084fc_0%,_transparent_70%)]"
          }`}
        />
      </div>

      {/* 🔥 Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode ? "bg-cyan-500/5" : "bg-cyan-400/10"
            }`}
            style={{
              width: Math.random() * 200 + 80,
              height: Math.random() * 200 + 80,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 40, 0],
              x: [0, 25, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 25 + 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* HEADER SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeUp} custom={0} className="text-center lg:text-left">
            {/* 🔥 Animated badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <p
                className={`text-sm tracking-[0.3em] font-mono transition-colors duration-300 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                &lt; Current Role /&gt;
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              Working At
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 mt-3">
                {currentRole.company}
              </span>
            </h2>

            <p
              className={`mt-6 max-w-2xl mx-auto lg:mx-0 text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Currently building scalable web applications and leading technical
              initiatives to deliver high-performance solutions.
            </p>
          </motion.div>

          {/* 🔥 Timeline indicator */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                <FaCalendarAlt className="text-cyan-400 text-lg" />
              </div>
              <div>
                <div className="text-sm text-gray-500">Started</div>
                <div className="font-semibold">{currentRole.startDate}</div>
              </div>
              <FaArrowRight className="text-cyan-400 text-xs" />
              <div>
                <div className="text-sm text-gray-500">Present</div>
                <div className="font-semibold text-green-500">
                  {currentRole.duration}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT COLUMN - Company Info & Responsibilities */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeLeft}
              custom={0}
              className={`relative rounded-3xl overflow-hidden border p-6 md:p-8 transition-all duration-500 ${
                darkMode
                  ? "border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-500/40"
                  : "border-gray-200 bg-white/80 backdrop-blur-xl hover:border-cyan-400/50 shadow-lg"
              }`}
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10">
                {/* Role Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                    darkMode
                      ? "bg-cyan-500/10 border border-cyan-500/20"
                      : "bg-cyan-100 border border-cyan-200"
                  }`}
                >
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span
                    className={`text-xs font-mono ${
                      darkMode ? "text-cyan-400" : "text-cyan-700"
                    }`}
                  >
                    ACTIVE ROLE
                  </span>
                </div>

                {/* Position */}
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {currentRole.position}
                </h3>

                {/* Details Grid */}
                <div
                  className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 pb-6 border-b ${
                    darkMode ? "border-white/10" : "border-gray-200"
                  }`}
                >
                  <div
                    className={`flex items-center gap-3 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <FaBriefcase className="text-cyan-400" />
                    <span className="text-sm">{currentRole.company}</span>
                  </div>
                  <div
                    className={`flex items-center gap-3 ${
                      darkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    <FaMapMarkerAlt className="text-cyan-400" />
                    <span className="text-sm">{currentRole.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`leading-relaxed mb-6 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {currentRole.description}
                </p>

                {/* Responsibilities */}
                <div className="space-y-3">
                  <h4
                    className={`text-sm font-semibold font-mono ${
                      darkMode ? "text-cyan-400" : "text-cyan-700"
                    }`}
                  >
                    // key-responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {currentRole.responsibilities.map((item, idx) => (
                      <motion.li
                        key={idx}
                        variants={fadeLeft}
                        custom={idx + 1}
                        className={`flex items-start gap-2 text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        <FaCheckCircle className="text-cyan-400 mt-0.5 text-xs" />
                        <span>{item}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN - Tech Stack & Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            {/* Tech Stack Card */}
            <motion.div
              variants={fadeRight}
              custom={0}
              className={`relative rounded-3xl overflow-hidden border p-6 md:p-8 transition-all duration-500 ${
                darkMode
                  ? "border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-500/40"
                  : "border-gray-200 bg-white/80 backdrop-blur-xl hover:border-cyan-400/50 shadow-lg"
              }`}
            >
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <FaCode className="text-cyan-400" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentRole.techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeRight}
                    custom={idx + 1}
                    whileHover={{ scale: 1.02, x: 2 }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      darkMode
                        ? "bg-white/5 border border-white/10 hover:border-cyan-500/30 hover:bg-white/10"
                        : "bg-gray-100 border border-gray-200 hover:border-cyan-400/50 hover:bg-gray-50"
                    }`}
                  >
                    <div className="text-xl" style={{ color: tech.color }}>
                      {tech.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span
                          className={`text-sm ${
                            darkMode ? "text-gray-300" : "text-gray-700"
                          }`}
                        >
                          {tech.name}
                        </span>
                        <span className="text-xs text-cyan-400">{tech.level}%</span>
                      </div>
                      <div className="w-full h-1 bg-gray-700 rounded-full mt-1 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${tech.level}%` }}
                          transition={{ duration: 1, delay: idx * 0.05 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-teal-400"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Grid */}
            <motion.div
              variants={fadeRight}
              custom={1}
              className={`relative rounded-3xl overflow-hidden border p-6 md:p-8 transition-all duration-500 ${
                darkMode
                  ? "border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-500/40"
                  : "border-gray-200 bg-white/80 backdrop-blur-xl hover:border-cyan-400/50 shadow-lg"
              }`}
            >
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <FaRocket className="text-cyan-400" />
                Key Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {currentRole.achievements.map((achievement, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeRight}
                    custom={idx + 2}
                    whileHover={{ y: -5 }}
                    className={`rounded-2xl border p-4 text-center transition-all ${
                      darkMode
                        ? "bg-white/5 border-white/10 hover:bg-cyan-500/10"
                        : "bg-gray-100 border-gray-200 hover:bg-cyan-50"
                    }`}
                  >
                    <div className="text-3xl font-bold text-cyan-400 mb-1">
                      {achievement.metric}
                    </div>
                    <div
                      className={`text-xs font-mono ${
                        darkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              variants={fadeRight}
              custom={2}
              className={`relative rounded-3xl overflow-hidden border p-6 transition-all duration-500 ${
                darkMode
                  ? "border-white/10 bg-gradient-to-r from-cyan-500/10 to-teal-500/10 backdrop-blur-xl"
                  : "border-gray-200 bg-gradient-to-r from-cyan-100 to-teal-100 backdrop-blur-xl"
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div
                    className={`text-sm font-mono mb-1 ${
                      darkMode ? "text-cyan-400" : "text-cyan-700"
                    }`}
                  >
                    $&gt; developer.status
                  </div>
                  <div
                    className={`font-semibold ${
                      darkMode ? "text-white" : "text-gray-800"
                    }`}
                  >
                    Available for freelance opportunities
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span
                    className={`text-xs font-mono ${
                      darkMode ? "text-green-400" : "text-green-700"
                    }`}
                  >
                    Open for Work
                  </span>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeRight} custom={3}>
              <a
                href="#contact"
                className={`group w-full inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl border transition-all duration-300 font-mono ${
                  darkMode
                    ? "border-cyan-500/40 bg-white/5 backdrop-blur-xl hover:bg-cyan-500 hover:border-cyan-500"
                    : "border-cyan-400/40 bg-gray-100/80 backdrop-blur-xl hover:bg-cyan-500 hover:border-cyan-500 hover:text-white"
                }`}
              >
                <span className="font-medium">Let's Work Together</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWork;