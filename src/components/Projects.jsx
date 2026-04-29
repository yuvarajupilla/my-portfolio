import { 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaArrowRight,
  FaTimes,
  FaExpand,
  FaShoppingCart,
  FaBook,
  FaHeartbeat
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiTailwindcss, 
  SiExpress,
  SiWordpress
} from "react-icons/si";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

import sspfoods from '../assets/projects/sspfoods.png'
import mlb from '../assets/projects/mlb.png'

function Projects() {
  const { darkMode } = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const projects = [
    {
      title: "SSP Foods",
      description: "Dynamic product catalog & enquiry system for a food brand. Built with React for the frontend and a Node.js backend to handle automated email support and contact form submissions.",
      image: sspfoods,
      tech: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiExpress />],
      techNames: ["React", "Node.js", "MongoDB", "Express"],
      liveUrl: "https://sspfoods.in/",
      gradient: "from-orange-600/30 to-amber-500/20",
      category: "React Js",
      icon: <FaShoppingCart />
    },
    {
      title: "Mahalakshmi Binding",
      description: "Complete online presence for Vijayawada's premier notebook manufacturer. Features product showcase, custom enquiry forms, and brand story integration using custom WordPress theme.",
      image: mlb,
      tech: [<SiWordpress />, <FaReact />, <SiTailwindcss />],
      techNames: ["WordPress", "React", "Tailwind CSS"],
      liveUrl: "https://mahalakshmibinding.in/",
      gradient: "from-emerald-600/30 to-teal-500/20",
      category: "E-commerce",
      icon: <FaBook />
    },
    {
      title: "Vamshi Cardiac Centre",
      description: "Healthcare website for cardiac centre with appointment booking, doctor profiles, and patient information system. Built on WordPress with custom theme development.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
      tech: [<SiWordpress />, <SiTailwindcss />, <FaNodeJs />],
      techNames: ["WordPress", "Tailwind CSS", "Node.js"],
      liveUrl: "https://vamshicardiaccentre.in/",
      gradient: "from-rose-600/30 to-pink-500/20",
      category: "Healthcare",
      icon: <FaHeartbeat />
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

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
      if (e.key === 'Escape' && isPopupOpen) {
        closePopup();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isPopupOpen]);

  return (
    <section ref={containerRef} className={`relative overflow-hidden transition-colors duration-300 ${
      darkMode ? "bg-[#0A0A0F] text-white" : "bg-gray-50 text-gray-900"
    } py-24 md:py-32 px-6 md:px-16`}>
      {/* Animated Code Background */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${
        darkMode ? "opacity-[0.02]" : "opacity-[0.01]"
      }`}>
        <div className="absolute top-0 left-0 w-full h-full font-mono text-xs">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute whitespace-pre"
              style={{
                left: `${i * 25}%`,
                top: 0,
              }}
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 30 + i * 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 3,
              }}
            >
              {[...Array(20)].map((_, j) => (
                <div key={j} className={`py-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {`const project_${j} = { status: "completed", tech: "fullstack" };`}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Header with Parallax */}
      <motion.div 
        style={{ scale }}
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
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className={`text-sm font-mono ${darkMode ? "text-violet-300" : "text-violet-700"}`}>git push --projects</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
          >
            Featured
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400">
              Projects
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
            &lt; Click on any project to preview the live website /&gt;
          </motion.p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <div className="relative max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              whileHover={{ y: -10 }}
              className="group relative cursor-pointer"
              onClick={() => openPopup(project)}
            >
              <div className={`relative rounded-2xl overflow-hidden border transition-all duration-500 h-full flex flex-col ${
                darkMode
                  ? "border-white/10 bg-black/40 backdrop-blur-xl hover:border-violet-500/30"
                  : "border-gray-200 bg-white/80 backdrop-blur-xl hover:border-violet-400/50 shadow-sm"
              }`}>
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1 font-mono text-xs text-cyan-400">
                    {project.category}
                  </div>

                  {/* Preview Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-white font-mono text-sm mb-2">Click to Preview</div>
                      <FaExternalLinkAlt className="text-cyan-400 text-2xl mx-auto" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-2xl text-violet-400">
                      {project.icon}
                    </div>
                    <h3 className={`text-xl font-bold transition-colors ${
                      darkMode 
                        ? "group-hover:text-violet-300" 
                        : "group-hover:text-violet-600"
                    }`}>
                      {project.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={`text-sm leading-relaxed mb-4 flex-grow ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}>
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="group/tech relative"
                      >
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center text-sm transition-all duration-300 ${
                          darkMode
                            ? "bg-white/5 border-white/10 hover:bg-violet-500/20 hover:border-violet-500/40"
                            : "bg-gray-100 border-gray-200 hover:bg-violet-100 hover:border-violet-300"
                        }`}>
                          {tech}
                        </div>
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {project.techNames[techIndex]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Click to Preview Text */}
                  <div className={`pt-4 border-t ${darkMode ? "border-white/10" : "border-gray-200"}`}>
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-cyan-400">
                        $&gt; click to preview
                      </span>
                      <FaArrowRight className={`transition-transform ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      } group-hover:translate-x-1`} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Website Preview Popup - Professional Version */}
      <AnimatePresence>
        {isPopupOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
            onClick={closePopup}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className={`relative w-[90vw] h-[85vh] rounded-2xl overflow-hidden border shadow-2xl ${
                darkMode
                  ? "bg-[#0A0A0F] border-violet-500/30"
                  : "bg-white border-violet-300/50"
              }`}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Popup Header */}
              <div className={`absolute top-0 left-0 right-0 backdrop-blur-xl border-b z-10 ${
                darkMode
                  ? "bg-gradient-to-r from-violet-900/95 to-purple-900/95 border-violet-500/30"
                  : "bg-gradient-to-r from-violet-100 to-purple-100 border-violet-200"
              }`}>
                <div className="flex items-center justify-between px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="text-2xl text-violet-400">
                      {selectedProject.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>{selectedProject.title}</h3>
                      <p className={`text-xs font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}>{selectedProject.liveUrl}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode
                          ? "bg-white/10 hover:bg-violet-500"
                          : "bg-gray-100 hover:bg-violet-500 hover:text-white"
                      }`}
                      title="Open in new tab"
                    >
                      <FaExpand className="text-sm" />
                    </a>
                    <button
                      onClick={closePopup}
                      className={`p-2 rounded-lg transition-colors ${
                        darkMode
                          ? "bg-white/10 hover:bg-red-500"
                          : "bg-gray-100 hover:bg-red-500 hover:text-white"
                      }`}
                    >
                      <FaTimes className="text-sm" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Website Iframe */}
              <div className="absolute inset-0 pt-[70px]">
                <iframe
                  src={selectedProject.liveUrl}
                  title={selectedProject.title}
                  className="w-full h-full border-0"
                  sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-modals"
                  loading="lazy"
                />
              </div>

              {/* Professional TV Scan Line Effect (Subtle) */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/3 to-transparent animate-scan"></div>
              </div>

              {/* Bottom Gradient (Clean) */}
              <div className={`absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t pointer-events-none ${
                darkMode ? "from-black/50 to-transparent" : "from-gray-200/50 to-transparent"
              }`}></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Add scan animation CSS */}
      <style jsx>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }
        .animate-scan {
          animation: scan 6s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Projects;