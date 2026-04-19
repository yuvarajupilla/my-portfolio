import { 
  FaGraduationCap, 
  FaLaptopCode, 
  FaBrain, 
  FaNetworkWired,
  FaChartLine,
  FaDatabase,
  FaPython,
  FaJava
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

function StudyTimeline() {
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
    <section ref={containerRef} className="relative overflow-hidden bg-[#0A0A0F] text-white py-24 md:py-32 px-6 md:px-16">
      {/* Animated Code Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
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
                <div key={j} className="py-1">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-cyan-300 text-sm font-mono">cat education_history.log</span>
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
            className="text-gray-400 text-lg max-w-2xl mx-auto font-mono"
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
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 lg:inline-flex">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-mono text-cyan-300">{item.period}</span>
                </div>

                <div className="lg:flex lg:justify-end">
                  <div className="relative group max-w-md">
                    {/* Card Glow */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition duration-500`} />
                    
                    {/* Main Card */}
                    <div className="relative bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-500">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-2xl text-cyan-300">
                          {item.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold group-hover:text-cyan-300 transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-gray-400 text-sm font-mono">{item.institution}</p>
                        </div>
                      </div>

                      <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2 mb-4">
                        {item.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <span className="text-cyan-400 mt-1">▹</span>
                            <span className="text-gray-400">{achievement}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 pt-3 border-t border-white/10">
                        {item.tech.map((tech, techIndex) => (
                          <div key={techIndex} className="group/tech relative">
                            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm hover:bg-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                              {tech}
                            </div>
                            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                              {item.techNames[techIndex]}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Badge */}
                      <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 text-xs font-mono text-cyan-300">
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

        {/* Final Year Project Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-violet-600/10 to-cyan-600/10 rounded-3xl blur-3xl" />
          
          <div className="relative bg-gradient-to-br from-violet-900/20 to-purple-900/20 backdrop-blur-xl border border-violet-500/30 rounded-3xl p-8 md:p-10 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-8 mb-8">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 w-fit">
                  <FaBrain className="text-purple-400" />
                  <span className="text-purple-300 font-mono text-sm">Final Year Project</span>
                </div>
                <div className="flex gap-2">
                  {[<SiTensorflow />, <SiScikitlearn />, <FaPython />, <FaNetworkWired />].map((icon, i) => (
                    <div key={i} className="w-10 h-10 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center text-lg">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
                Detection of Intrusions in Network Using Machine Learning Algorithms
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaDatabase className="text-cyan-400" />
                    <span className="text-sm font-mono text-gray-400">Dataset</span>
                  </div>
                  <p className="text-gray-300 font-mono text-sm">
                    CICIDS2017 - Comprehensive intrusion detection evaluation dataset
                  </p>
                  <div className="mt-2 flex gap-2">
                    <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300">80+ Features</span>
                    <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300">2.5M Records</span>
                    <span className="px-2 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded text-xs text-cyan-300">14 Attack Types</span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <FaChartLine className="text-purple-400" />
                    <span className="text-sm font-mono text-gray-400">Key Achievements</span>
                  </div>
                  <ul className="space-y-1">
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-400">✓</span> 98.5% accuracy on binary classification
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-400">✓</span> Ensemble learning with Random Forest & XGBoost
                    </li>
                    <li className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="text-green-400">✓</span> Real-time packet analysis simulation
                    </li>
                  </ul>
                </div>
              </div>

              {/* Code Snippet */}
              <div className="bg-black/50 rounded-xl p-4 border border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-500 ml-2">intrusion_detection.py</span>
                </div>
                <pre className="text-gray-300 overflow-x-auto">
                  <code>{`# Load CICIDS2017 dataset
df = pd.read_csv('cicids2017.csv')

# Feature engineering & preprocessing
X_train, X_test, y_train, y_test = train_test_split(X, y)

# Random Forest Classifier
rf_model = RandomForestClassifier(n_estimators=100)
rf_model.fit(X_train, y_train)

# Accuracy: 98.5% | Precision: 0.97 | Recall: 0.96`}</code>
                </pre>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-cyan-400">98.5%</div>
                  <div className="text-xs text-gray-400 font-mono">Accuracy</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-purple-400">0.97</div>
                  <div className="text-xs text-gray-400 font-mono">Precision</div>
                </div>
                <div className="text-center p-3 rounded-xl bg-white/5 border border-white/10">
                  <div className="text-2xl font-bold text-violet-400">0.96</div>
                  <div className="text-xs text-gray-400 font-mono">Recall</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-mono text-gray-400">
              Currently seeking opportunities in Full Stack Development & ML Engineering
            </span>
          </div>
        </motion.div>
      </div>

      {/* Decorative Terminal */}
      <div className="absolute top-20 right-10 opacity-5 pointer-events-none hidden xl:block">
        <div className="w-72 bg-black rounded-lg border border-white/20 overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-400 ml-2">education@portfolio:~</span>
          </div>
          <div className="p-3 font-mono text-[10px]">
            <div className="text-green-400">$ echo $EDUCATION_STATUS</div>
            <div className="text-cyan-400">"Full Stack Developer"</div>
            <div className="text-green-400 mt-1">$ cat skills.txt</div>
            <div className="text-gray-400">Java • Spring Boot • React </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StudyTimeline;