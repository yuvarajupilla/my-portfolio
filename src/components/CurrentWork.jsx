import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaCode, 
  FaUsers, 
  FaClock,
  FaArrowRight,
  FaCalendarAlt
} from "react-icons/fa";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiDocker, 
  SiWordpress,
  SiExpress
} from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

function CurrentWork() {
  const { darkMode } = useTheme();

  const currentRole = {
    company: "AVIES",
    position: "Full Stack Developer",
    location: "Vijayawada, India",
    startDate: "Jan 2024",
    duration: "Present",
    description: "Building scalable full-stack applications with React, Node.js, and MongoDB. Creating custom WordPress solutions with optimized performance.",
    responsibilities: [
      "Architecting full-stack MERN applications",
      "Developing RESTful APIs & database design",
      "Custom WordPress theme development",
      "Containerized deployment with Docker",
      "UI implementation with Tailwind CSS"
    ],
    techStack: [
      { name: "React.js", icon: <SiReact />, color: "#61DBFB" },
      { name: "Node.js", icon: <SiNodedotjs />, color: "#68A063" },
      { name: "Express", icon: <SiExpress />, color: "#ffffff" },
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "WordPress", icon: <SiWordpress />, color: "#21759B" }
    ]
  };

  // Code lines for background animation (matching Services component style)
  const codeLines = [
    "const developer = {",
    "  role: 'Full Stack',",
    "  company: 'AVIES',",
    "  stack: 'MERN'",
    "}",
    "npm run build",
    "git commit -m 'feat'",
    "app.listen(3000)",
    "db.connect()",
    "// Building products",
    "export default CurrentWork",
  ];

  return (
    <section className={`relative overflow-hidden transition-colors duration-300 ${
      darkMode ? "bg-[#0A0A0F] text-white" : "bg-gray-50 text-gray-900"
    } py-24 md:py-32 px-6 md:px-16`}>
      {/* Animated Code Flow Background - Matching Services component */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${
        darkMode ? "opacity-[0.03]" : "opacity-[0.01]"
      }`}>
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(3)].map((_, columnIndex) => (
            <motion.div
              key={columnIndex}
              className="absolute whitespace-nowrap font-mono text-sm"
              style={{
                left: `${columnIndex * 35}%`,
                top: -100,
              }}
              animate={{
                y: ["0%", "100%"],
              }}
              transition={{
                duration: 40 + columnIndex * 15,
                repeat: Infinity,
                ease: "linear",
                delay: columnIndex * 5,
              }}
            >
              {codeLines.map((line, lineIndex) => (
                <div
                  key={lineIndex}
                  className={`py-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}
                  style={{
                    opacity: 0.3 + Math.random() * 0.3,
                  }}
                >
                  {line}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Horizontal Scrolling Code Bar - Top */}
      <div className={`absolute top-0 left-0 w-full h-8 backdrop-blur-sm border-b overflow-hidden pointer-events-none transition-colors duration-300 ${
        darkMode 
          ? "bg-black/50 border-cyan-500/20" 
          : "bg-white/50 border-cyan-300/30"
      }`}>
        <motion.div
          className={`whitespace-nowrap font-mono text-xs py-1.5 ${
            darkMode ? "text-cyan-400/40" : "text-cyan-500/40"
          }`}
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className="mx-4">
              {codeLines.map((line, idx) => (
                <span key={idx} className="mx-2">
                  {line} <span className={darkMode ? "text-cyan-600" : "text-cyan-300"}>//</span>
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom Scrolling Code Bar */}
      <div className={`absolute bottom-0 left-0 w-full h-8 backdrop-blur-sm border-t overflow-hidden pointer-events-none transition-colors duration-300 ${
        darkMode 
          ? "bg-black/50 border-cyan-500/20" 
          : "bg-white/50 border-cyan-300/30"
      }`}>
        <motion.div
          className={`whitespace-nowrap font-mono text-xs py-1.5 ${
            darkMode ? "text-violet-400/40" : "text-violet-500/40"
          }`}
          animate={{
            x: ["-50%", "0%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className="mx-4">
              {codeLines.map((line, idx) => (
                <span key={idx} className="mx-2">
                  &gt; {line}
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full transition-opacity duration-300 ${
        darkMode ? "bg-cyan-600/5 blur-[180px]" : "bg-cyan-400/10 blur-[180px]"
      }`} />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header - Matching Services style */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className={`uppercase tracking-[0.3em] text-sm mb-5 font-mono ${
                darkMode ? "text-cyan-400" : "text-cyan-600"
              }`}
            >
              &lt; Current Role /&gt;
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none"
            >
              Working At
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-violet-400 to-purple-400 mt-2">
                {currentRole.company}
              </span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            href="#contact"
            className={`group inline-flex items-center gap-3 self-start lg:self-auto px-7 py-4 rounded-2xl border transition-all duration-300 font-mono ${
              darkMode
                ? "border-cyan-500/40 bg-white/5 backdrop-blur-xl hover:bg-cyan-500 hover:border-cyan-500"
                : "border-cyan-400/40 bg-gray-100/80 backdrop-blur-xl hover:bg-cyan-500 hover:border-cyan-500 hover:text-white"
            }`}
          >
            <span className="font-medium">Let's Collaborate</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left Column - Company Info & Responsibilities */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative rounded-3xl overflow-hidden border p-8 transition-all duration-500 ${
              darkMode
                ? "border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-500/30"
                : "border-gray-200 bg-white/80 backdrop-blur-xl hover:border-cyan-400/50 shadow-sm"
            }`}
          >
            <div className="relative z-10">
              {/* Role Badge */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
                darkMode
                  ? "bg-cyan-500/10 border-cyan-500/20"
                  : "bg-cyan-100 border-cyan-200"
              }`}>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className={`text-xs font-mono ${darkMode ? "text-cyan-400" : "text-cyan-700"}`}>ACTIVE ROLE</span>
              </div>

              {/* Position */}
              <h3 className="text-2xl font-bold mb-2">{currentRole.position}</h3>
              
              {/* Details */}
              <div className={`space-y-3 mb-6 pb-6 border-b ${
                darkMode ? "border-white/10" : "border-gray-200"
              }`}>
                <div className={`flex items-center gap-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <FaBriefcase className="text-cyan-400" />
                  <span>{currentRole.company}</span>
                </div>
                <div className={`flex items-center gap-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span>{currentRole.location}</span>
                </div>
                <div className={`flex items-center gap-3 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <FaCalendarAlt className="text-cyan-400" />
                  <span>{currentRole.startDate} - {currentRole.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className={`leading-relaxed mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                {currentRole.description}
              </p>

              {/* Responsibilities */}
              <div className="space-y-3">
                <h4 className={`text-sm font-semibold font-mono ${darkMode ? "text-cyan-400" : "text-cyan-700"}`}>// key-responsibilities</h4>
                <ul className="space-y-2">
                  {currentRole.responsibilities.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className={`flex items-start gap-2 text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      <span className="text-cyan-400 mt-0.5">▹</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Tech Stack & Stats */}
          <div className="space-y-6">
            {/* Tech Stack Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`relative rounded-3xl overflow-hidden border p-8 transition-all duration-500 ${
                darkMode
                  ? "border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-500/30"
                  : "border-gray-200 bg-white/80 backdrop-blur-xl hover:border-cyan-400/50 shadow-sm"
              }`}
            >
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <FaCode className="text-cyan-400" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {currentRole.techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02, x: 2 }}
                    transition={{ duration: 0.2, delay: idx * 0.03 }}
                    className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                      darkMode
                        ? "bg-white/5 border border-white/10 hover:border-cyan-500/30"
                        : "bg-gray-100 border border-gray-200 hover:border-cyan-400/50"
                    }`}
                  >
                    <div className="text-xl" style={{ color: tech.color }}>{tech.icon}</div>
                    <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`relative rounded-3xl overflow-hidden border p-8 transition-all duration-500 ${
                darkMode
                  ? "border-white/10 bg-black/40 backdrop-blur-xl hover:border-cyan-500/30"
                  : "border-gray-200 bg-white/80 backdrop-blur-xl hover:border-cyan-400/50 shadow-sm"
              }`}
            >
              <h3 className="text-xl font-bold mb-5 flex items-center gap-2">
                <FaUsers className="text-cyan-400" />
                Impact
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className={`rounded-2xl border p-4 text-center transition-all ${
                  darkMode
                    ? "bg-white/5 border-white/10 hover:bg-cyan-500/10"
                    : "bg-gray-100 border-gray-200 hover:bg-cyan-50"
                }`}>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">10+</div>
                  <div className={`text-xs font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Projects</div>
                </div>
                <div className={`rounded-2xl border p-4 text-center transition-all ${
                  darkMode
                    ? "bg-white/5 border-white/10 hover:bg-cyan-500/10"
                    : "bg-gray-100 border-gray-200 hover:bg-cyan-50"
                }`}>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">98%</div>
                  <div className={`text-xs font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Success Rate</div>
                </div>
                <div className={`rounded-2xl border p-4 text-center transition-all ${
                  darkMode
                    ? "bg-white/5 border-white/10 hover:bg-cyan-500/10"
                    : "bg-gray-100 border-gray-200 hover:bg-cyan-50"
                }`}>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">35%</div>
                  <div className={`text-xs font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Performance+</div>
                </div>
                <div className={`rounded-2xl border p-4 text-center transition-all ${
                  darkMode
                    ? "bg-white/5 border-white/10 hover:bg-cyan-500/10"
                    : "bg-gray-100 border-gray-200 hover:bg-cyan-50"
                }`}>
                  <div className="text-3xl font-bold text-cyan-400 mb-1">24/7</div>
                  <div className={`text-xs font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}>Support</div>
                </div>
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`relative rounded-3xl overflow-hidden border p-6 transition-colors duration-300 ${
                darkMode
                  ? "border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-xl"
                  : "border-gray-200 bg-gradient-to-r from-cyan-100 to-purple-100 backdrop-blur-xl"
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className={`text-sm font-mono mb-1 ${darkMode ? "text-cyan-400" : "text-cyan-700"}`}>$&gt; status</div>
                  <div className={`font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>Available for opportunities</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className={`text-xs font-mono ${darkMode ? "text-green-400" : "text-green-700"}`}>Open</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CurrentWork;