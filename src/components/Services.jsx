import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiCanva,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Services() {
  const { darkMode } = useTheme();

  const services = [
    {
      title: "Full Stack Development",
      desc: "Building complete web applications with responsive frontend architecture and scalable backend systems.",
      icon: <FaCode />,
      gradient: "from-violet-600/30 to-fuchsia-500/10",
      tech: [
        <FaReact color="#61DBFB" />,
        <FaNodeJs color="#68A063" />,
        <SiMongodb color="#4DB33D" />,
        <SiExpress color="#ffffff" />,
      ],
    },
    {
      title: "Java Spring Framework",
      desc: "Robust REST APIs, authentication systems, microservices, and enterprise-grade backend development with Spring Boot.",
      icon: <SiSpringboot />,
      gradient: "from-emerald-500/30 to-lime-400/10",
      tech: [
        <SiSpringboot color="#6DB33F" />,
        <FaNodeJs color="#68A063" />,
        <SiMysql color="#00758F" />,
      ],
    },
    {
      title: "WordPress Development",
      desc: "Custom WordPress themes, dynamic CMS integration, and performance-optimized websites.",
      icon: <FaWordpress />,
      gradient: "from-sky-500/30 to-cyan-400/10",
      tech: [<FaWordpress color="#21759B" />],
    },
    {
      title: "UI / UX & Canva Design",
      desc: "Clean visual systems, user-focused interfaces, and branding assets for modern products.",
      icon: <SiCanva />,
      gradient: "from-pink-500/30 to-purple-500/10",
      tech: [<SiCanva color="#00C4CC" />],
    },
  ];

  return (
    <section
      className={`relative overflow-hidden transition-colors duration-300 ${
        darkMode
          ? "bg-[#0A0A0F] text-white"
          : "bg-gradient-to-br from-white via-gray-50 to-violet-50 text-gray-900"
      } py-24 md:py-32 px-6 md:px-16`}
      style={{
        transform: "translateZ(0)", // ✅ flicker fix
        backfaceVisibility: "hidden",
      }}
    >
      <div className="relative max-w-7xl mx-auto z-10">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div className="max-w-3xl">
            <p className="uppercase tracking-[0.3em] text-sm mb-5 font-mono text-violet-500">
              &lt; What I Do /&gt;
            </p>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none">
              Services That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 mt-2">
                Build Real Products
              </span>
            </h2>
          </div>

          {/* DOWNLOAD RESUME */}
          <a
            href="/yuvaraju_pilla_resume.pdf"
            download
            className={`group inline-flex items-center gap-3 self-start lg:self-auto px-7 py-4 rounded-2xl border transition-all duration-300 font-mono ${
              darkMode
                ? "border-violet-500/40 bg-white/5 backdrop-blur-xl hover:bg-violet-500 hover:border-violet-500"
                : "border-violet-300/40 bg-white/60 backdrop-blur-xl hover:bg-violet-500 hover:border-violet-500 hover:text-white"
            }`}
          >
            <span className="font-medium">Download Resume</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              viewport={{ once: true }}
              className={`group relative overflow-hidden rounded-3xl border p-7 hover:-translate-y-2 transition-all duration-500 ${
                darkMode
                  ? "border-white/10 bg-black/40 backdrop-blur-xl hover:border-violet-500/30"
                  : "border-gray-200 bg-white/80 backdrop-blur-xl hover:border-violet-400/50 shadow-sm"
              }`}
            >
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${service.gradient}`}
              />

              <div className="relative z-10 flex flex-col h-full">

                {/* ICON + TECH */}
                <div className="flex items-start justify-between mb-8">
                  <div className={`w-14 h-14 rounded-2xl border flex items-center justify-center text-2xl ${
                    darkMode
                      ? "bg-gradient-to-br from-white/10 to-white/5 border-white/20 text-violet-300"
                      : "bg-gradient-to-br from-gray-100 to-gray-50 border-gray-200 text-violet-600"
                  }`}>
                    {service.icon}
                  </div>

                  <div className="flex gap-2">
                    {service.tech.map((icon, i) => (
                      <div
                        key={i}
                        className={`w-10 h-10 rounded-xl border flex items-center justify-center ${
                          darkMode
                            ? "bg-black/50 border-white/10"
                            : "bg-white/80 border-gray-200"
                        }`}
                      >
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>

                {/* TEXT */}
                <h3 className="text-2xl font-bold mb-4 font-mono">
                  {service.title}
                </h3>

                <p className={`leading-7 text-sm md:text-base flex-grow ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  {service.desc}
                </p>

                {/* ✅ ONLY TEXT CHANGED */}
                <div className={`mt-8 flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition duration-500 ${
                  darkMode ? "text-violet-300" : "text-violet-600"
                }`}>
                  <span className="font-mono">$&gt;</span> Want to build this project?
                  <FaArrowRight className="text-xs" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Services;