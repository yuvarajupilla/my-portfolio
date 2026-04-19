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

function Services() {
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

  // Code lines for background animation
  const codeLines = [
    "const App = () => {",
    "  return (",
    "    <div className='container'>",
    "      <h1>Hello World</h1>",
    "      <Component />",
    "    </div>",
    "  )",
    "}",
    "export default App;",
    "function fetchData() {",
    "  return new Promise()",
    "}",
    "import { useState } from 'react'",
    "const [data, setData] = useState()",
    "useEffect(() => {",
    "  fetchData()",
    "}, [])",
    "// Building amazing apps",
    "npm run dev",
    "class Service {",
    "  constructor() {",
    "    this.name = 'Expertise'",
    "  }",
    "}",
  ];

  return (
    <section className="relative overflow-hidden bg-[#0A0A0F] text-white py-24 md:py-32 px-6 md:px-16">
      {/* Animated Code Flow Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
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
                  className="py-1 text-gray-400"
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

      {/* Horizontal Scrolling Code Bar */}
      <div className="absolute top-0 left-0 w-full h-8 bg-black/50 backdrop-blur-sm border-b border-violet-500/20 overflow-hidden pointer-events-none">
        <motion.div
          className="whitespace-nowrap font-mono text-xs text-violet-400/40 py-1.5"
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
              {codeLines.slice(0, 15).map((line, idx) => (
                <span key={idx} className="mx-2">
                  {line} <span className="text-violet-600">//</span>
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Bottom Scrolling Code Bar */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-black/50 backdrop-blur-sm border-t border-violet-500/20 overflow-hidden pointer-events-none">
        <motion.div
          className="whitespace-nowrap font-mono text-xs text-cyan-400/40 py-1.5"
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
              {codeLines.slice(10, 25).map((line, idx) => (
                <span key={idx} className="mx-2">
                  &gt; {line}
                </span>
              ))}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-violet-600/5 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-20">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-violet-400 uppercase tracking-[0.3em] text-sm mb-5 font-mono"
            >
              &lt; What I Do /&gt;
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-none"
            >
              Services That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 mt-2">
                Build Real Products
              </span>
            </motion.h2>
          </div>

          <motion.a
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            href="/resume.pdf"
            download
            className="group inline-flex items-center gap-3 self-start lg:self-auto px-7 py-4 rounded-2xl border border-violet-500/40 bg-white/5 backdrop-blur-xl hover:bg-violet-500 hover:border-violet-500 transition-all duration-300 font-mono"
          >
            <span className="font-medium">Download Resume</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 items-stretch">
          {/* Service Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl p-7 hover:-translate-y-2 transition-all duration-500 hover:border-violet-500/30"
              >
                {/* Gradient Overlay */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${service.gradient}`}
                />

                {/* Code decorator */}
                <div className="absolute top-3 right-3 font-mono text-[10px] text-gray-600 group-hover:text-gray-500 transition-colors">
                  {`{${index + 1}}`}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Row */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20 flex items-center justify-center text-2xl text-violet-300 group-hover:scale-110 transition duration-500">
                      {service.icon}
                    </div>

                    <div className="flex gap-2 opacity-70 group-hover:opacity-100 transition duration-500">
                      {service.tech.map((icon, i) => (
                        <div
                          key={i}
                          className="w-10 h-10 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center text-lg group-hover:-translate-y-1 transition duration-300 backdrop-blur-sm"
                          style={{ transitionDelay: `${i * 80}ms` }}
                        >
                          {icon}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-violet-300 transition-colors duration-300 font-mono">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 leading-7 text-sm md:text-base flex-grow">
                    {service.desc}
                  </p>

                  {/* Bottom CTA */}
                  <div className="mt-8 flex items-center gap-2 text-sm font-medium text-violet-300 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition duration-500">
                    <span className="font-mono">$&gt;</span> Explore Service
                    <FaArrowRight className="text-xs" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl min-h-[620px] group hover:border-violet-500/30 transition-all duration-500"
          >
            {/* Background Image */}
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="developer workspace"
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-all duration-500"
            />

            {/* Code overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/80 to-transparent" />

            {/* Animated cursor in corner */}
            <div className="absolute top-4 right-4 flex items-center gap-2 font-mono text-xs text-green-400/60">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>active_session.exe</span>
            </div>

            <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-10">
              <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm w-fit font-mono">
                <span className="text-green-400">$&gt;</span> Available for Freelance & Full-Time
              </div>

              <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-5 max-w-md">
                Scalable interfaces and backend systems designed for modern businesses.
              </h3>

              <p className="text-gray-400 leading-7 max-w-lg mb-8 font-mono text-sm">
                I combine React, Node.js, MongoDB, and Java Spring Boot to build high-performance applications with clean UI and reliable architecture.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-3xl font-bold text-violet-300 mb-1">10+</h4>
                  <p className="text-gray-400 text-sm font-mono">Projects Completed</p>
                </div>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-5 backdrop-blur-md hover:bg-white/10 transition-all duration-300">
                  <h4 className="text-3xl font-bold text-violet-300 mb-1">4+</h4>
                  <p className="text-gray-400 text-sm font-mono">Core Technologies</p>
                </div>
              </div>

              {/* Code line decorator */}
              <div className="mt-6 font-mono text-[10px] text-gray-600 border-t border-white/10 pt-4">
                <span className="text-green-500/50">const</span>{" "}
                <span className="text-yellow-500/50">expertise</span> ={" "}
                <span className="text-blue-400/50">{`{ fullStack: true, performance: "optimized" }`}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Services;