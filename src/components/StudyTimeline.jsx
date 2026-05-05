import {
  FaGraduationCap,
  FaLaptopCode,
  FaBrain,
  FaNetworkWired,
  FaChartLine,
  FaDatabase,
  FaPython,
  FaJava,
  FaCheckCircle,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaTrophy,
  FaStar,
} from "react-icons/fa";
import {
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  SiMongodb,
  SiSpringboot,
  SiReact,
  SiMysql,
  SiGit,
} from "react-icons/si";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";

function StudyTimeline() {
  const { darkMode } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const headerScale = useTransform(scrollYProgress, [0, 0.3], [0.95, 1]);

  const education = [
    {
      period: "Jun 2023 - Jan 2024",
      title: "Java Full Stack Development",
      institution: "Qspiders, Bangalore",
      location: "Bangalore, India",
      icon: <FaJava />,
      description:
        "Comprehensive training in enterprise-level Java development and modern full-stack technologies. Intensive hands-on program focused on building production-ready applications.",
      achievements: [
        "Mastered Java, Spring Boot, and Hibernate frameworks",
        "Built 5+ full-stack projects with React and MySQL",
        "Advanced database design and REST API development",
        "Agile methodology and version control with Git",
      ],
      tech: [
        { icon: <FaJava />, name: "Java", color: "#E76F00" },
        { icon: <SiSpringboot />, name: "Spring Boot", color: "#6DB33F" },
        { icon: <SiReact />, name: "React", color: "#61DBFB" },
        { icon: <SiMysql />, name: "MySQL", color: "#00758F" },
        { icon: <SiGit />, name: "Git", color: "#F05032" },
      ],
     color: "from-violet-500/30 to-purple-500/20",  // Added /30 and /20 for opacity
    bgGradient: "from-violet-500/5 to-purple-500/5",
      badge: "Professional Certification",
      grade: "A+",
      projects: 5,
    },
    {
      period: "2020 - 2024",
      title: "Bachelor of Technology - CSE",
      institution: "Dhanekula Institute of Engineering and Technology",
      location: "Vijayawada, India",
      icon: <FaGraduationCap />,
      description:
        "Specialized in Computer Science with focus on Artificial Intelligence and Cybersecurity. Active participant in research and development activities.",
      achievements: [
        "CGPA: 8.5/10 - Top 15% of class",
        "Completed advanced courses in Machine Learning & Network Security",
        "Led university coding club and organized hackathons",
        "Published research paper on intrusion detection",
      ],
      tech: [
        { icon: <FaPython />, name: "Python", color: "#3776AB" },
        { icon: <SiTensorflow />, name: "TensorFlow", color: "#FF6F00" },
        { icon: <SiScikitlearn />, name: "Scikit-learn", color: "#F7931E" },
        { icon: <FaNetworkWired />, name: "Networking", color: "#00A86B" },
      ],
      color: "from-blue-500/30 to-cyan-500/20",  // Added /30 and /20 for opacity
      bgGradient: "from-blue-500/5 to-cyan-500/5",
      badge: "Bachelor's Degree",
      grade: "8.5 CGPA",
      projects: 8,
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      ref={containerRef}
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
              ? "bg-[radial-gradient(ellipse_at_top_center,_#06b6d4_0%,_transparent_60%)]"
              : "bg-[radial-gradient(ellipse_at_top_center,_#22d3ee_0%,_transparent_60%)]"
          }`}
        />
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 opacity-15 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_bottom_right,_#8b5cf6_0%,_transparent_70%)]"
              : "bg-[radial-gradient(ellipse_at_bottom_right,_#c084fc_0%,_transparent_70%)]"
          }`}
        />
      </div>

      {/* 🔥 Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode ? "bg-cyan-500/5" : "bg-cyan-400/8"
            }`}
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 40, 0],
              x: [0, 25, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
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
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 mx-auto w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <p
              className={`text-sm tracking-[0.3em] font-mono transition-colors duration-300 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              cat education_history.log
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
          >
            Learning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 mt-3">
              Journey
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className={`mt-6 max-w-2xl mx-auto text-lg font-mono ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            &lt; From academic excellence to professional expertise /&gt;
          </motion.p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative max-w-6xl mx-auto">
          {/* Desktop Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-cyan-500 via-violet-500 to-transparent hidden lg:block" />

          <div className="space-y-20 lg:space-y-28">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className={`relative lg:grid lg:grid-cols-2 gap-12 items-center ${
                  index === 1 ? "lg:mt-20" : ""
                }`}
              >
                {/* Desktop Timeline Node */}
                <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center justify-center">
                  <div className="relative">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 shadow-lg shadow-cyan-500/50" />
                    <div className="absolute inset-0 w-5 h-5 rounded-full bg-cyan-400 animate-ping opacity-75" />
                  </div>
                </div>

                {/* Content */}
                <div className={index === 1 ? "lg:order-2" : ""}>
                  <motion.div
                    variants={index === 0 ? slideInLeft : slideInRight}
                    className="relative group"
                  >
                    {/* Card Glow Effect */}
                    <div
                      className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`}
                    />

                    {/* Main Card */}
                    <div
                      className={`relative rounded-2xl lg:rounded-3xl border p-6 md:p-8 transition-all duration-500 ${
                        darkMode
                          ? "bg-black/40 backdrop-blur-xl border-white/10 hover:border-cyan-500/40"
                          : "bg-white/80 backdrop-blur-xl border-gray-200 hover:border-cyan-400/50 shadow-lg"
                      }`}
                    >
                      {/* Top gradient bar */}
                      <div
                        className={`absolute top-0 left-6 right-6 h-1 bg-gradient-to-r ${item.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
                      />

                      {/* Header */}
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                        <div className="flex items-center gap-4">
                          <div
                            className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${
                              darkMode
                                ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-cyan-300"
                                : "bg-gradient-to-br from-gray-100 to-gray-50 border border-gray-200 text-cyan-600"
                            }`}
                          >
                            {item.icon}
                          </div>
                          <div>
                            <h3
                              className={`text-xl md:text-2xl font-bold transition-colors ${
                                darkMode
                                  ? "text-white group-hover:text-cyan-300"
                                  : "text-gray-900 group-hover:text-cyan-700"
                              }`}
                            >
                              {item.title}
                            </h3>
                            <p
                              className={`text-sm font-mono ${
                                darkMode ? "text-gray-400" : "text-gray-500"
                              }`}
                            >
                              {item.institution}
                            </p>
                          </div>
                        </div>

                        {/* Grade Badge */}
                        <div
                          className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-mono self-start ${
                            darkMode
                              ? "bg-white/5 border border-white/10"
                              : "bg-gray-100 border border-gray-200"
                          }`}
                        >
                          <FaStar className="text-amber-400 text-xs" />
                          <span>{item.grade}</span>
                        </div>
                      </div>

                      {/* Period & Location */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex items-center gap-2 text-xs">
                          <FaCalendarAlt className="text-cyan-400" />
                          <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                            {item.period}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                          <FaMapMarkerAlt className="text-cyan-400" />
                          <span className={darkMode ? "text-gray-400" : "text-gray-500"}>
                            {item.location}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p
                        className={`leading-relaxed mb-5 ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {item.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 mb-5">
                        <h4
                          className={`text-xs font-mono ${
                            darkMode ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          // key-achievements
                        </h4>
                        {item.achievements.map((achievement, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.05 }}
                            className="flex items-start gap-2 text-sm"
                          >
                            <FaCheckCircle className="text-cyan-400 mt-0.5 text-xs shrink-0" />
                            <span
                              className={darkMode ? "text-gray-400" : "text-gray-600"}
                            >
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-4 border-t">
                        <h4
                          className={`text-xs font-mono w-full mb-2 ${
                            darkMode ? "text-gray-500" : "text-gray-400"
                          }`}
                        >
                          // tech-stack
                        </h4>
                        {item.tech.map((tech, techIndex) => (
                          <motion.div
                            key={techIndex}
                            className="group/tech relative"
                            whileHover={{ y: -2 }}
                          >
                            <div
                              className={`w-8 h-8 rounded-lg border flex items-center justify-center text-sm transition-all duration-300 ${
                                darkMode
                                  ? "bg-white/5 border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/40"
                                  : "bg-gray-100 border-gray-200 hover:bg-cyan-100 hover:border-cyan-300"
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

                      {/* Project Count */}
                      <div className="flex items-center gap-2 mt-4">
                        <div className="flex items-center gap-1 text-xs">
                          <FaLaptopCode className="text-cyan-400" />
                          <span className={darkMode ? "text-gray-500" : "text-gray-400"}>
                            {item.projects}+ Projects Completed
                          </span>
                        </div>
                      </div>

                      {/* Badge */}
                      <div
                        className={`absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-[10px] font-mono ${
                          darkMode
                            ? `bg-gradient-to-r ${item.bgGradient} border border-${item.color.split("-")[1]}-500/30`
                            : `bg-gradient-to-r ${item.bgGradient} border`
                        }`}
                        style={
                          !darkMode
                            ? {
                                background: `linear-gradient(135deg, ${item.color.split(" ")[1]}10, ${item.color.split(" ")[2]}10)`,
                                borderColor: `${item.color.split(" ")[1]}30`,
                              }
                            : {}
                        }
                      >
                        {item.badge}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Empty column for alignment */}
                <div className={index === 1 ? "lg:order-1" : ""} />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 pt-8 border-t border-dashed"
        >
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {[
              { icon: <FaGraduationCap />, label: "Degrees", value: "1" },
              { icon: <FaTrophy />, label: "Projects", value: "13+" },
              { icon: <FaBrain />, label: "Technologies", value: "10+" },
              { icon: <FaChartLine />, label: "CGPA", value: "7.4" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.7 + idx * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div
                  className={`text-3xl mb-2 ${
                    darkMode ? "text-cyan-400" : "text-cyan-600"
                  }`}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div
                  className={`text-xs font-mono ${
                    darkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Terminal Decoration */}
        <div
          className={`absolute -top-20 -right-10 opacity-5 pointer-events-none hidden xl:block ${
            darkMode ? "" : "opacity-10"
          }`}
        >
          <div
            className={`w-64 rounded-lg border overflow-hidden ${
              darkMode
                ? "bg-black border-white/20"
                : "bg-white border-gray-200"
            }`}
          >
            <div
              className={`flex items-center gap-2 px-3 py-2 border-b ${
                darkMode
                  ? "bg-white/5 border-white/10"
                  : "bg-gray-50 border-gray-200"
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span
                className={`text-[10px] ml-2 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                education@portfolio:~
              </span>
            </div>
            <div className="p-3 font-mono text-[10px]">
              <div className="text-green-400">$ echo $EDUCATION_STATUS</div>
              <div className="text-cyan-400">"Full Stack Developer"</div>
              <div className="text-green-400 mt-1">$ cat skills.txt</div>
              <div className="text-gray-400">Java • Spring Boot • React • Python</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudyTimeline;