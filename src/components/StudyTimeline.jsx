import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaBrain, 
  FaNetworkWired,
  FaChartLine,
  FaDatabase,
  FaPython,
  FaJava,
  FaCheckCircle
} from "react-icons/fa";
import { 
  SiTensorflow, 
  SiScikitlearn, 
  SiPandas,
  SiMongodb,
  SiSpringboot,
  SiReact
} from "react-icons/si";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";

function StudyTimeline() {
  const { darkMode } = useTheme();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);

  const education = [
    {
      period: "Jun 2023 - Jan 2024",
      title: "Java Full Stack Development",
      institution: "Qspiders, Bangalore",
      icon: <FaJava />,
      description: "Comprehensive training in enterprise-level Java development and modern full-stack technologies.",
      achievements: [
        "Mastered Java, Spring Boot, and Hibernate frameworks",
        "Built 5+ full-stack projects with React and MySQL",
        "Advanced database design and REST API development",
        "Agile methodology and version control with Git"
      ],
      tech: [<FaJava />, <SiSpringboot />, <SiReact />, <SiMongodb />],
      techNames: ["Java", "Spring Boot", "React", "MongoDB"],
      color: "from-orange-600/30 to-red-500/20",
      badge: "Professional Certification"
    },
    {
      period: "2020 - 2024",
      title: "Bachelor of Technology - CSE",
      institution: "Dhanekula Institute of Engineering and Technology",
      icon: <FaGraduationCap />,
      description: "Specialized in Computer Science with focus on Artificial Intelligence and Cybersecurity.",
      achievements: [
        "CGPA: 8.5/10 - Top 15% of class",
        "Completed advanced courses in Machine Learning & Network Security",
        "Led university coding club and organized hackathons",
        "Published research paper on intrusion detection"
      ],
      tech: [<FaPython />, <SiTensorflow />, <SiScikitlearn />, <FaNetworkWired />],
      techNames: ["Python", "TensorFlow", "Scikit-learn", "Networking"],
      color: "from-blue-600/30 to-cyan-500/20",
      badge: "Bachelor's Degree"
    }
  ];

  return (
    <section ref={containerRef} className={`relative overflow-hidden transition-colors duration-300 ${
      darkMode ? "bg-[#0A0A0F] text-white" : "bg-gray-50 text-gray-900"
    } py-24 md:py-32 px-6 md:px-16`}>
      {/* Animated Code Background */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${
        darkMode ? "opacity-[0.03]" : "opacity-[0.01]"
      }`}>
        <div className="absolute inset-0 font-mono text-xs">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute whitespace-pre"
              style={{
                right: `${i * 20}%`,
                bottom: 0,
              }}
              animate={{
                y: ["0%", "-100%"],
              }}
              transition={{
                duration: 25 + i * 8,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
            >
              {[...Array(15)].map((_, j) => (
                <div key={j} className={`py-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {`> education.add_course("Full Stack", ${2023 + j});`}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Header */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative max-w-7xl mx-auto mb-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
              darkMode
                ? "bg-violet-500/10 border-violet-500/20"
                : "bg-violet-100 border-violet-200"
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className={`text-sm font-mono ${darkMode ? "text-cyan-300" : "text-cyan-700"}`}>
              cat education_history.log
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
          >
            Learning
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400">
              Journey
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-lg max-w-2xl mx-auto font-mono ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            &lt; From academic excellence to professional expertise /&gt;
          </motion.p>
        </div>
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-6xl mx-auto">
        {/* Central Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-transparent hidden lg:block" />
        
        <div className="space-y-20">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative lg:grid lg:grid-cols-2 gap-12 items-center ${
                index === 0 ? '' : 'lg:mt-20'
              }`}
            >
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 hidden lg:block">
                <div className="absolute inset-0 rounded-full bg-cyan-400 animate-ping opacity-75" />
              </div>

              {/* Left Side - Period Badge & Content */}
              <div className={`lg:text-right ${index === 1 ? 'lg:order-2' : ''}`}>
                <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full mb-6 lg:inline-flex ${
                  darkMode
                    ? "bg-white/5 border border-white/10"
                    : "bg-gray-100 border border-gray-200"
                }`}>
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className={`text-sm font-mono ${darkMode ? "text-cyan-300" : "text-cyan-700"}`}>
                    {item.period}
                  </span>
                </div>

                <div className="lg:flex lg:justify-end">
                  <div className="relative group max-w-md">
                    {/* Card Glow */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`} />
                    
                    {/* Main Card */}
                    <div className={`relative rounded-2xl border p-6 transition-all duration-500 ${
                      darkMode
                        ? "bg-black/40 backdrop-blur-xl border-white/10 hover:border-violet-500/30"
                        : "bg-white border-gray-200 shadow-sm hover:border-violet-400/50"
                    }`}>
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`w-12 h-12 rounded-xl border flex items-center justify-center text-2xl ${
                          darkMode
                            ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20 text-cyan-300"
                            : "bg-gradient-to-br from-gray-100 to-gray-50 border-gray-200 text-cyan-600"
                        }`}>
                          {item.icon}
                        </div>
                        <div>
                          <h3 className={`text-xl font-bold transition-colors ${
                            darkMode
                              ? "group-hover:text-cyan-300"
                              : "group-hover:text-cyan-600"
                          }`}>
                            {item.title}
                          </h3>
                          <p className={`text-sm font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                            {item.institution}
                          </p>
                        </div>
                      </div>

                      <p className={`text-sm leading-relaxed mb-4 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {item.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className={`flex flex-wrap gap-2 pt-3 border-t ${darkMode ? "border-white/10" : "border-gray-200"}`}>
                        {item.tech.map((tech, techIndex) => (
                          <div key={techIndex} className="group/tech relative">
                            <div className={`w-8 h-8 rounded-lg border flex items-center justify-center text-sm transition-all duration-300 ${
                              darkMode
                                ? "bg-white/5 border-white/10 hover:bg-cyan-500/20 hover:border-cyan-500/40"
                                : "bg-gray-100 border-gray-200 hover:bg-cyan-100 hover:border-cyan-300"
                            }`}>
                              {tech}
                            </div>
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                              {item.techNames[techIndex]}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Badge */}
                      <div className={`absolute -top-3 -right-3 px-3 py-1 rounded-full text-xs font-mono ${
                        darkMode
                          ? "bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-cyan-300"
                          : "bg-gradient-to-r from-cyan-100 to-violet-100 border border-cyan-300 text-cyan-700"
                      }`}>
                        {item.badge}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Empty for alignment */}
              <div className={index === 1 ? 'lg:order-1' : ''} />
            </motion.div>
          ))}
        </div>

        
      </div>

      {/* Decorative Terminal */}
      <div className={`absolute top-20 right-10 opacity-5 pointer-events-none hidden xl:block ${
        darkMode ? "" : "opacity-10"
      }`}>
        <div className={`w-72 rounded-lg border overflow-hidden ${
          darkMode
            ? "bg-black border-white/20"
            : "bg-white border-gray-200"
        }`}>
          <div className={`flex items-center gap-2 px-3 py-2 border-b ${
            darkMode
              ? "bg-white/5 border-white/10"
              : "bg-gray-50 border-gray-200"
          }`}>
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className={`text-xs ml-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>education@portfolio:~</span>
          </div>
          <div className="p-3 font-mono text-[10px]">
            <div className="text-green-400">$ echo $EDUCATION_STATUS</div>
            <div className="text-cyan-400">"Full Stack Developer"</div>
            <div className="text-green-400 mt-1">$ cat skills.txt</div>
            <div className={darkMode ? "text-gray-400" : "text-gray-600"}>Java • Spring Boot • React </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudyTimeline;