import { motion } from "framer-motion";
import { 
  FaMapMarkerAlt, 
  FaBriefcase, 
  FaArrowRight, 
  FaCheckCircle, 
  FaCalendarAlt,
  FaCode,
  FaUsers,
  FaClock,
  FaAward,
  FaTerminal,
  FaLaptopCode
} from "react-icons/fa";
import { 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss, 
  SiDocker, 
  SiWordpress,
  SiJavascript
} from "react-icons/si";

function CurrentWork() {
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
      { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
      { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
      { name: "WordPress", icon: <SiWordpress />, color: "#21759B" }
    ],
    stats: [
      { value: "10+", label: "Projects", icon: <FaCode /> },
      { value: "98%", label: "Success Rate", icon: <FaUsers /> },
      { value: "500+", label: "Commits", icon: <FaTerminal /> }
    ]
  };

  // Horizontal floating code lines
  const codeLines = [
    "const developer = { passion: 'coding', stack: 'MERN' };",
    "npm run build && docker compose up",
    "function buildApp() { return 'production-ready'; }",
    "git commit -m 'feat: add awesome feature'",
    "<React.StrictMode><App /></React.StrictMode>",
    "app.get('/api', (req, res) => res.json(data))",
    "db.collection('projects').find({ status: 'active' })",
    "await Promise.all([api1, api2, api3])",
    "const optimizePerformance = () => 'fast'",
    "docker build -t portfolio . && docker run -p 3000:3000"
  ];

  return (
    <section className="relative bg-[#0A0A0F] py-24 px-4 md:px-8 overflow-hidden font-mono">
      {/* Dark grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,213,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,213,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Horizontal floating code animations */}
      {codeLines.map((code, idx) => (
        <div
          key={idx}
          className={`code-flow-horizontal absolute whitespace-nowrap text-[10px] md:text-xs font-mono text-cyan-400/30 pointer-events-none`}
          style={{
            top: `${(idx % 8) * 12 + 5}%`,
            left: '-100%',
            animation: `floatCode ${15 + idx * 2}s linear infinite`,
            animationDelay: `${idx * 1.5}s`,
            opacity: 0.2 + (idx % 3) * 0.1
          }}
        >
          <span className="text-cyan-400">➜</span> {code}
        </div>
      ))}

      {/* Additional reverse flowing code */}
      {codeLines.slice(0, 5).map((code, idx) => (
        <div
          key={`reverse-${idx}`}
          className={`code-flow-horizontal-reverse absolute whitespace-nowrap text-[10px] md:text-xs font-mono text-violet-400/30 pointer-events-none`}
          style={{
            top: `${(idx % 6) * 15 + 55}%`,
            right: '-100%',
            animation: `floatCodeReverse ${18 + idx * 2}s linear infinite`,
            animationDelay: `${idx * 2}s`,
            opacity: 0.15
          }}
        >
          {code} <span className="text-violet-400">➜</span>
        </div>
      ))}

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Terminal-style header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-black/50 border border-cyan-500/30 backdrop-blur-sm mb-6 font-mono">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            </div>
            <span className="text-xs text-cyan-400">developer@avies:~$</span>
            <span className="text-xs text-gray-400">cat current-position</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono">
            <span className="text-cyan-400">$</span> 
            <span className="text-white"> whereami</span>
            <span className="text-cyan-400 animate-pulse">_</span>
          </h2>
          <p className="text-gray-400 font-mono text-sm mt-3">➜ Full Stack Developer @ AVIES</p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* LEFT COLUMN - Company & Responsibilities */}
          <div className="space-y-5">
            {/* Company Card - Terminal Style */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-cyan-500/20 rounded-lg p-5 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-cyan-500/20">
                <FaTerminal className="text-cyan-400 text-xl" />
                <span className="text-cyan-400 font-mono text-sm">./company-info</span>
              </div>
              
              <div className="space-y-2 font-mono text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">name:</span>
                  <span className="text-white font-bold">{currentRole.company}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">role:</span>
                  <span className="text-gray-300">{currentRole.position}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">location:</span>
                  <span className="text-gray-300">{currentRole.location}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-cyan-400">since:</span>
                  <span className="text-gray-300">{currentRole.startDate} → {currentRole.duration}</span>
                </div>
                <div className="flex items-start gap-2 pt-2 border-t border-cyan-500/20 mt-2">
                  <span className="text-cyan-400">bio:</span>
                  <span className="text-gray-400 text-xs leading-relaxed">{currentRole.description}</span>
                </div>
              </div>
            </motion.div>

            {/* Responsibilities - Code Comments Style */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-violet-500/20 rounded-lg p-5"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-violet-500/20">
                <FaCode className="text-violet-400 text-xl" />
                <span className="text-violet-400 font-mono text-sm">// key-responsibilities.ts</span>
              </div>
              <ul className="space-y-2 font-mono text-xs">
                {currentRole.responsibilities.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    <span className="text-cyan-400">→</span>
                    <span>{item}</span>
                    <span className="text-gray-600 text-[10px] ml-auto">✓</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* RIGHT COLUMN - Tech Stack & Achievements */}
          <div className="space-y-5">
            {/* Tech Stack - Matrix Style */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-cyan-500/20 rounded-lg p-5"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-cyan-500/20">
                <FaLaptopCode className="text-cyan-400 text-xl" />
                <span className="text-cyan-400 font-mono text-sm">$ tech --stack</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {currentRole.techStack.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    whileHover={{ scale: 1.02, x: 3 }}
                    transition={{ duration: 0.2, delay: idx * 0.03 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 p-2 rounded bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all"
                  >
                    <div className="text-lg" style={{ color: tech.color }}>{tech.icon}</div>
                    <span className="text-xs text-gray-300 font-mono">{tech.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Stats Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-fuchsia-500/20 rounded-lg p-5"
            >
              <div className="flex items-center gap-3 mb-4 pb-3 border-b border-fuchsia-500/20">
                <FaTerminal className="text-fuchsia-400 text-xl" />
                <span className="text-fuchsia-400 font-mono text-sm">$ stats --dashboard</span>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {currentRole.stats.map((stat, idx) => (
                  <div key={idx} className="text-center p-2 rounded bg-white/5">
                    <div className="text-cyan-400 text-lg mb-1">{stat.icon}</div>
                    <div className="text-white font-bold font-mono">{stat.value}</div>
                    <div className="text-gray-500 text-[10px] font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievement */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/40 border border-emerald-500/20 rounded-lg p-5"
            >
              <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs">
                <FaAward />
                <span>achievements.log</span>
              </div>
              <p className="text-gray-400 text-xs font-mono mt-2">
                ✓ 10+ production apps deployed<br/>
                ✓ 8+ WordPress solutions delivered<br/>
                ✓ 35% avg performance improvement
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA - Command Line Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <div className="inline-block bg-black/60 border border-cyan-500/30 rounded-lg p-1">
            <div className="flex items-center gap-2 px-4 py-2">
              <span className="text-cyan-400 font-mono text-sm">$</span>
              <input 
                type="text" 
                value="npm run collaborate --with=avies" 
                readOnly 
                className="bg-transparent text-white font-mono text-sm outline-none cursor-default"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-1 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-md text-white font-mono text-sm font-semibold"
              >
                Execute →
              </motion.button>
            </div>
          </div>
          <p className="text-gray-500 font-mono text-xs mt-4">
            ➜ Ready for new challenges • Open for freelance & full-time
          </p>
        </motion.div>
      </div>

      {/* Add keyframes to global CSS or use style tag */}
      <style>{`
        @keyframes floatCode {
          0% {
            left: -100%;
            opacity: 0;
          }
          10% {
            opacity: 0.3;
          }
          90% {
            opacity: 0.3;
          }
          100% {
            left: 100%;
            opacity: 0;
          }
        }
        
        @keyframes floatCodeReverse {
          0% {
            right: -100%;
            opacity: 0;
          }
          10% {
            opacity: 0.2;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            right: 100%;
            opacity: 0;
          }
        }
        
        .code-flow-horizontal {
          animation: floatCode 15s linear infinite;
        }
        
        .code-flow-horizontal-reverse {
          animation: floatCodeReverse 18s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default CurrentWork;