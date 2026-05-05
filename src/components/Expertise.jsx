import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";

function Expertise() {
  const { darkMode } = useTheme();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  // 🔥 Parallax background effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // 🔥 Gradient border animation
  const gradientBorderVariants = {
    initial: { opacity: 0, scaleX: 0 },
    animate: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] },
    },
  };

  // 🔥 Smooth "butter" animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.15,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // smooth easing
      },
    }),
  };

  // 🔥 Stagger children animation
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  // Expertise cards data
  const expertiseCards = [
    {
      title: "Frontend",
      description: "React, Next.js, TypeScript, Tailwind CSS, Framer Motion",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Backend",
      description: "Node.js, Express, Python, REST APIs, GraphQL, PostgreSQL, MongoDB",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      ),
    },
    {
      title: "DevOps & Tools",
      description: "Docker, Git, CI/CD, AWS, Vercel, Netlify, Performance Optimization",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
        </svg>
      ),
    },
  ];

  // Technology stack badges
  const techBadges = [
    "React", "Next.js", "TypeScript", "Node.js", "Tailwind", "GraphQL", "PostgreSQL", "Docker"
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative py-24 md:py-32 px-6 md:px-16 overflow-hidden transition-colors duration-500 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
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
              ? "bg-[radial-gradient(ellipse_at_top_right,_#4f46e5_0%,_transparent_50%)]"
              : "bg-[radial-gradient(ellipse_at_top_right,_#8b5cf6_0%,_transparent_50%)]"
          }`}
        />
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 opacity-20 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_bottom_left,_#7c3aed_0%,_transparent_50%)]"
              : "bg-[radial-gradient(ellipse_at_bottom_left,_#c084fc_0%,_transparent_50%)]"
          }`}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* 🔥 Top gradient border line */}
        <motion.div
          variants={gradientBorderVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className={`h-[2px] w-full mb-16 ${
            darkMode
              ? "bg-gradient-to-r from-transparent via-violet-500 to-transparent"
              : "bg-gradient-to-r from-transparent via-violet-400 to-transparent"
          }`}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-20"
        >
          {/* 🔵 HEADER SECTION */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
                </span>
                <p
                  className={`text-sm tracking-wide uppercase font-medium transition-colors duration-300 ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  Core Expertise
                </p>
              </div>

              <h3
                className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight max-w-md transition-colors duration-300 ${
                  darkMode ? "text-white" : "text-gray-900"
                }`}
              >
                What I bring to the <span className="text-violet-500">table</span>
              </h3>
            </motion.div>

            {/* 🔴 RIGHT SIDE - Main value proposition */}
            <motion.div variants={fadeUp} custom={1} className="lg:max-w-2xl">
              <div className="relative">
                {/* Quote decoration */}
                <svg
                  className={`absolute -top-6 -left-6 w-12 h-12 opacity-20 ${
                    darkMode ? "text-white" : "text-gray-400"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <h2
                  className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed transition-colors duration-300 relative z-10 ${
                    darkMode ? "text-gray-200" : "text-gray-700"
                  }`}
                >
                  Building full stack web applications with modern UI and scalable
                  architecture. Every project focuses on{" "}
                  <span className="text-violet-500">performance</span>,{" "}
                  <span className="text-violet-500">clean code</span>, and{" "}
                  <span className="text-violet-500">real-world usability</span>.
                </h2>
              </div>
            </motion.div>
          </div>

          {/* 🔥 EXPERTISE CARDS GRID */}
          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6"
          >
            {expertiseCards.map((card, index) => (
              <motion.div
                key={card.title}
                variants={fadeUp}
                custom={index + 2}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`group relative p-6 md:p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                  darkMode
                    ? "bg-white/5 hover:bg-white/10 border border-white/10"
                    : "bg-gray-50 hover:bg-gray-100 border border-gray-200"
                }`}
              >
                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${
                    darkMode
                      ? "shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                      : "shadow-[0_0_30px_rgba(139,92,246,0.1)]"
                  }`}
                />

                {/* Icon container */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${
                    darkMode
                      ? "bg-violet-500/20 text-violet-400 group-hover:bg-violet-500/30"
                      : "bg-violet-100 text-violet-600 group-hover:bg-violet-200"
                  }`}
                >
                  {card.icon}
                </div>

                <h4
                  className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {card.title}
                </h4>
                <p
                  className={`leading-relaxed transition-colors duration-300 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {card.description}
                </p>

                {/* Arrow indicator on hover */}
                <div
                  className={`absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 ${
                    darkMode ? "text-violet-400" : "text-violet-600"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* 🔥 TECH STACK BADGES */}
          <motion.div variants={fadeUp} custom={5}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-8 border-t border-dashed">
              <span
                className={`text-sm font-medium mr-2 ${
                  darkMode ? "text-gray-500" : "text-gray-400"
                }`}
              >
                Tech I work with:
              </span>
              {techBadges.map((tech, idx) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 6.5 + idx * 0.05, duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -2 }}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    darkMode
                      ? "bg-white/5 text-gray-300 hover:bg-violet-500/20 hover:text-violet-400"
                      : "bg-gray-100 text-gray-700 hover:bg-violet-100 hover:text-violet-600"
                  }`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Expertise;