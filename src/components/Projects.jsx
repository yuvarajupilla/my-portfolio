import {
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
  FaArrowRight,
  FaTimes,
  FaExpand,
  FaShoppingCart,
  FaBook,
  FaHeartbeat,
  FaGithub,
} from "react-icons/fa";
import {
  SiMongodb,
  SiTailwindcss,
  SiExpress,
  SiWordpress,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

import sspfoods from '../assets/projects/sspfoods.png';
import mlb from '../assets/projects/mlb.png';

function Projects() {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const headerScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.98]);

  const projects = [
    {
      title: "SSP Foods",
      description:
        "Dynamic product catalog & enquiry system for a food brand. Built with React for the frontend and a Node.js backend to handle automated email support and contact form submissions.",
      image: sspfoods,
      tech: [
        { icon: <FaReact />, name: "React", color: "#61DBFB" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#68A063" },
        { icon: <SiMongodb />, name: "MongoDB", color: "#4DB33D" },
        { icon: <SiExpress />, name: "Express", color: "#ffffff" },
      ],
      liveUrl: "https://sspfoods.in/",
      gradient: "from-orange-600 to-amber-500",
      gradientBg: "from-orange-600/20 to-amber-500/10",
      category: "Full Stack",
      icon: <FaShoppingCart />,
      features: [
        "Product catalog with filtering",
        "Automated email support system",
        "Contact form with validation",
        "Responsive design",
      ],
    },
    {
      title: "Mahalakshmi Binding",
      description:
        "Complete online presence for Vijayawada's premier notebook manufacturer. Features product showcase, custom enquiry forms, and brand story integration using custom WordPress theme.",
      image: mlb,
      tech: [
        { icon: <SiWordpress />, name: "WordPress", color: "#21759B" },
        { icon: <FaReact />, name: "React", color: "#61DBFB" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
      ],
      liveUrl: "https://mahalakshmibinding.in/",
      gradient: "from-emerald-600 to-teal-500",
      gradientBg: "from-emerald-600/20 to-teal-500/10",
      category: "CMS",
      icon: <FaBook />,
      features: [
        "Custom WordPress theme",
        "Product showcase gallery",
        "Enquiry form integration",
        "Brand story section",
      ],
    },
    {
      title: "Vamshi Cardiac Centre",
      description:
        "Healthcare website for cardiac centre with appointment booking, doctor profiles, and patient information system. Built on WordPress with custom theme development.",
      image:
        "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      tech: [
        { icon: <SiWordpress />, name: "WordPress", color: "#21759B" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", color: "#06B6D4" },
        { icon: <FaNodeJs />, name: "Node.js", color: "#68A063" },
      ],
      liveUrl: "https://vamshicardiaccentre.in/",
      gradient: "from-rose-600 to-pink-500",
      gradientBg: "from-rose-600/20 to-pink-500/10",
      category: "Healthcare",
      icon: <FaHeartbeat />,
      features: [
        "Doctor profiles",
        "Appointment booking",
        "Patient information system",
        "Responsive healthcare layout",
      ],
    },
  ];

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

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const cardHoverAnimation = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.03,
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const openPopup = (project) => {
    setSelectedProject(project);
    setIsPopupOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setTimeout(() => setSelectedProject(null), 300);
    document.body.style.overflow = "auto";
  };

  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && isPopupOpen) {
        closePopup();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isPopupOpen]);

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
          className={`absolute inset-0 opacity-25 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_top_center,_#8b5cf6_0%,_transparent_60%)]"
              : "bg-[radial-gradient(ellipse_at_top_center,_#a855f7_0%,_transparent_60%)]"
          }`}
        />
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 opacity-15 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_bottom_right,_#06b6d4_0%,_transparent_70%)]"
              : "bg-[radial-gradient(ellipse_at_bottom_right,_#22d3ee_0%,_transparent_70%)]"
          }`}
        />
      </div>

      {/* 🔥 Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode ? "bg-violet-500/5" : "bg-violet-400/8"
            }`}
            style={{
              width: Math.random() * 200 + 80,
              height: Math.random() * 200 + 80,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 50, 0],
              x: [0, 30, 0],
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
          style={{ scale: headerScale }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeUp} custom={0} className="text-center">
            {/* 🔥 Animated badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 mx-auto w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <p
                className={`text-sm tracking-[0.3em] font-mono transition-colors duration-300 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                git push --projects
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              Featured
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 mt-3">
                Projects
              </span>
            </h2>

            <p
              className={`mt-6 max-w-2xl mx-auto text-lg font-mono ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              &lt; Click on any project card to preview the live website /&gt;
            </p>
          </motion.div>
        </motion.div>

        {/* PROJECTS GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index + 1}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className="group cursor-pointer"
              onClick={() => openPopup(project)}
            >
              <div
                className={`relative rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col ${
                  darkMode
                    ? "border-white/10 bg-black/40 backdrop-blur-xl hover:border-violet-500/40"
                    : "border-gray-200 bg-white/80 backdrop-blur-xl hover:border-violet-400/50 shadow-lg"
                }`}
              >
                {/* 🔥 Animated gradient overlay on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.gradientBg} pointer-events-none`}
                />

                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent`}
                  />

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md rounded-full px-3 py-1.5 font-mono text-xs text-cyan-400 border border-cyan-500/30">
                    {project.category}
                  </div>

                  {/* Preview Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                    <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="text-white font-mono text-sm mb-2">
                        Click to Preview
                      </div>
                      <div className="w-12 h-12 rounded-full bg-violet-500/30 backdrop-blur-md flex items-center justify-center mx-auto border border-violet-400/50">
                        <FaExternalLinkAlt className="text-violet-400 text-xl" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex-grow flex flex-col">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`text-2xl transition-colors duration-300 ${
                        darkMode
                          ? "text-violet-400 group-hover:text-violet-300"
                          : "text-violet-600 group-hover:text-violet-500"
                      }`}
                    >
                      {project.icon}
                    </div>
                    <h3
                      className={`text-xl font-bold transition-colors duration-300 ${
                        darkMode
                          ? "text-white group-hover:text-violet-300"
                          : "text-gray-900 group-hover:text-violet-700"
                      }`}
                    >
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                    className={`text-sm leading-relaxed mb-4 flex-grow ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <motion.div
                        key={techIndex}
                        className="group/tech relative"
                        whileHover={{ y: -2 }}
                      >
                        <div
                          className={`w-8 h-8 rounded-lg border flex items-center justify-center text-sm transition-all duration-300 ${
                            darkMode
                              ? "bg-white/5 border-white/10 hover:bg-violet-500/20 hover:border-violet-500/40"
                              : "bg-gray-100 border-gray-200 hover:bg-violet-100 hover:border-violet-300"
                          }`}
                          style={{ color: tech.color }}
                        >
                          {tech.icon}
                        </div>
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                          {tech.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div
                    className={`pt-4 border-t ${
                      darkMode ? "border-white/10" : "border-gray-200"
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-violet-400">
                        $&gt; click to preview
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
                      >
                        <FaArrowRight
                          className={`transition-colors ${
                            darkMode ? "text-gray-500" : "text-gray-400"
                          }`}
                        />
                      </motion.div>
                    </div>
                  </div>
                </div>

                {/* 🔥 Bottom accent gradient */}
                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className={`group inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono transition-all duration-300 ${
              darkMode
                ? "bg-white/5 border border-white/10 hover:bg-violet-500 hover:border-violet-500"
                : "bg-gray-100 border border-gray-200 hover:bg-violet-500 hover:text-white"
            }`}
          >
            <span className="text-sm font-medium">View All Projects</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-sm" />
          </a>
        </motion.div>
      </div>

      {/* WEBSITE PREVIEW POPUP */}
      <AnimatePresence>
        {isPopupOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 md:p-8 bg-black/95 backdrop-blur-md"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className={`relative w-full max-w-6xl h-[90vh] rounded-2xl overflow-hidden border shadow-2xl ${
                darkMode
                  ? "bg-[#0A0A0F] border-violet-500/30"
                  : "bg-white border-violet-300/50"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Popup Header */}
              <div
                className={`absolute top-0 left-0 right-0 backdrop-blur-xl border-b z-20 ${
                  darkMode
                    ? "bg-gradient-to-r from-violet-900/95 to-purple-900/95 border-violet-500/30"
                    : "bg-gradient-to-r from-violet-100 to-purple-100 border-violet-200"
                }`}
              >
                <div className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4">
                  <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                    <div className="text-xl sm:text-2xl text-violet-400 shrink-0">
                      {selectedProject.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-bold text-sm sm:text-base truncate ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {selectedProject.title}
                      </h3>
                      <p
                        className={`text-[10px] sm:text-xs font-mono truncate ${
                          darkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {selectedProject.liveUrl}
                      </p>
                    </div>
                  </div>

                  {/* Tech badges in popup header */}
                  <div className="hidden sm:flex items-center gap-1 mr-2">
                    {selectedProject.tech.slice(0, 3).map((tech, idx) => (
                      <div
                        key={idx}
                        className="w-6 h-6 rounded-md bg-white/10 flex items-center justify-center text-xs"
                        style={{ color: tech.color }}
                        title={tech.name}
                      >
                        {tech.icon}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                        darkMode
                          ? "bg-white/10 hover:bg-violet-500"
                          : "bg-gray-100 hover:bg-violet-500 hover:text-white"
                      }`}
                      title="Open in new tab"
                    >
                      <FaExpand className="text-xs sm:text-sm" />
                    </a>
                    <button
                      onClick={closePopup}
                      className={`p-1.5 sm:p-2 rounded-lg transition-colors ${
                        darkMode
                          ? "bg-white/10 hover:bg-red-500"
                          : "bg-gray-100 hover:bg-red-500 hover:text-white"
                      }`}
                      title="Close"
                    >
                      <FaTimes className="text-xs sm:text-sm" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Iframe Container */}
              <div className="absolute inset-0 pt-[56px] sm:pt-[68px]">
                <iframe
                  src={selectedProject.liveUrl}
                  title={selectedProject.title}
                  className="w-full h-full border-0"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
                  loading="lazy"
                />
              </div>

              {/* Subtle Scan Line Effect */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan"></div>
              </div>

              {/* Bottom Gradient */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t pointer-events-none ${
                  darkMode
                    ? "from-black/60 to-transparent"
                    : "from-gray-200/60 to-transparent"
                }`}
              />

              {/* Mobile Swipe Indicator */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 sm:hidden">
                <div className="w-12 h-1 bg-gray-500/50 rounded-full"></div>
              </div>

              {/* Keyboard hint */}
              <div className="absolute bottom-4 right-4 hidden sm:block text-xs text-gray-500 font-mono">
                ESC to close
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS Animations */}
      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 8s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Projects;