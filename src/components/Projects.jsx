    import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaReact, 
  FaNodeJs, 
  FaJava,
  FaDatabase ,
  FaArrowRight
} from "react-icons/fa";
import { 
  SiMongodb, 
  SiTailwindcss, 
  SiSpringboot, 
  SiExpress,
  SiTypescript,
  SiFirebase,
  SiRedux,
  SiDocker
} from "react-icons/si";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Projects() {
  const projects = [
    {
      title: "AI-Powered Code Assistant",
      description: "Intelligent code completion and debugging assistant using OpenAI API with real-time syntax analysis and error prediction.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      tech: [<FaReact />, <SiTypescript />, <FaNodeJs />, <SiMongodb />, <SiExpress />],
      techNames: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-blue-600/30 to-cyan-500/20"
    },
    {
      title: "Enterprise E-Commerce Platform",
      description: "Full-featured e-commerce solution with payment integration, inventory management, and real-time order tracking.",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1200&q=80",
      tech: [<FaJava />, <SiSpringboot />, <FaDatabase />, <SiMongodb />, <FaReact />],
      techNames: ["Java", "Spring Boot", "MySQL", "MongoDB", "React"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-emerald-600/30 to-teal-500/20"
    },
    {
      title: "TaskFlow - Project Management",
      description: "Collaborative task management tool with real-time updates, file attachments, and team analytics dashboard.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
      tech: [<FaReact />, <SiRedux />, <FaNodeJs />, <SiExpress />, <SiMongodb />],
      techNames: ["React", "Redux", "Node.js", "Express", "MongoDB"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-purple-600/30 to-pink-500/20"
    },
    {
      title: "DevOps Monitoring Dashboard",
      description: "Real-time server monitoring with metrics visualization, alert system, and automated deployment tracking.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      tech: [<FaNodeJs />, <SiExpress />, <SiDocker />, <SiMongodb />, <FaReact />],
      techNames: ["Node.js", "Express", "Docker", "MongoDB", "React"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-orange-600/30 to-red-500/20"
    },
    {
      title: "Social Media Analytics Tool",
      description: "Instagram and Twitter analytics platform with sentiment analysis, engagement tracking, and content scheduling.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80",
      tech: [<FaReact />, <FaNodeJs />, <SiMongodb />, <SiFirebase />, <SiTailwindcss />],
      techNames: ["React", "Node.js", "MongoDB", "Firebase", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-rose-600/30 to-pink-500/20"
    },
    {
      title: "Portfolio Generator CMS",
      description: "Drag-and-drop portfolio builder with customizable templates, SEO optimization, and one-click deployment.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
      tech: [<FaReact />, <SiTypescript />, <FaNodeJs />, <SiMongodb />, <SiExpress />],
      techNames: ["React", "TypeScript", "Node.js", "MongoDB", "Express"],
      github: "https://github.com",
      live: "https://example.com",
      gradient: "from-indigo-600/30 to-violet-500/20"
    }
  ];

  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <section ref={containerRef} className="relative overflow-hidden bg-[#0A0A0F] text-white py-24 md:py-32 px-6 md:px-16">
      {/* Animated Code Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
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
                <div key={j} className="py-1">
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
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-violet-300 text-sm font-mono">git push --projects</span>
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
            className="text-gray-400 text-lg max-w-2xl mx-auto font-mono"
          >
            &lt; Building real-world solutions with modern tech stack /&gt;
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
              className="group relative"
            >
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl hover:border-violet-500/30 transition-all duration-500 h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
                  
                  {/* Image Overlay Code */}
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm rounded-lg px-2 py-1 font-mono text-[10px] text-green-400">
                    &lt;image src="{project.title.toLowerCase().replace(/\s+/g, '_')}.png" /&gt;
                  </div>

                  {/* Links Overlay */}
                  <div className="absolute bottom-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/80 backdrop-blur-sm hover:bg-violet-500 transition-colors"
                    >
                      <FaGithub className="text-white text-sm" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-black/80 backdrop-blur-sm hover:bg-violet-500 transition-colors"
                    >
                      <FaExternalLinkAlt className="text-white text-sm" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <div
                        key={techIndex}
                        className="group/tech relative"
                      >
                        <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-sm hover:bg-violet-500/20 hover:border-violet-500/40 transition-all duration-300">
                          {tech}
                        </div>
                        <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                          {project.techNames[techIndex]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-violet-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Code-like Footer */}
                  <div className="pt-4 border-t border-white/10">
                    <div className="flex items-center justify-between text-[10px] font-mono">
                      <span className="text-green-400">
                        $&gt; npm run build
                      </span>
                      <span className="text-gray-500">
                        {`v${index + 1}.0.0`}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Animated Border on Hover */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-violet-500/50 transition-all duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-violet-600/20 to-fuchsia-600/20 border border-violet-500/40 hover:border-violet-500/80 transition-all duration-300 font-mono"
          >
            <span className="text-violet-300">$&gt;</span>
            <span className="font-medium">View All Projects</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform text-violet-300" />
          </a>
        </motion.div>
      </div>

      {/* Decorative Terminal Window */}
      <div className="absolute bottom-10 left-10 opacity-5 pointer-events-none hidden lg:block">
        <div className="w-80 bg-black rounded-lg border border-white/20 overflow-hidden">
          <div className="flex items-center gap-2 px-3 py-2 bg-white/5 border-b border-white/10">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-xs text-gray-400 ml-2">projects@portfolio:~</span>
          </div>
          <div className="p-3 font-mono text-[10px]">
            <div className="text-green-400">$ ls -la projects/</div>
            <div className="text-gray-400">total 6</div>
            <div className="text-gray-400">drwxr-xr-x 6 dev dev 4096 Apr 19 12:00 .</div>
            <div className="text-gray-400">drwxr-xr-x 3 dev dev 4096 Apr 19 12:00 ..</div>
            <div className="text-cyan-400">-rw-r--r-- 1 dev dev 2048 Apr 19 12:00 ecommerce</div>
            <div className="text-cyan-400">-rw-r--r-- 1 dev dev 2048 Apr 19 12:00 ai-assistant</div>
            <div className="text-cyan-400">-rw-r--r-- 1 dev dev 2048 Apr 19 12:00 taskflow</div>
            <div className="text-green-400 mt-1">$&gt; cat README.md</div>
            <div className="text-gray-400">Building innovative solutions...</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;