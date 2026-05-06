import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaArrowRight,
  FaCloud,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiCanva,
  SiSpringboot,
  SiMysql,
  SiTailwindcss,
  SiDocker,
  SiGraphql,
} from "react-icons/si";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTheme } from "../context/ThemeContext";

function Services() {
  const { darkMode } = useTheme();
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  // 🔥 Parallax background effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

const services = [
  {
    title: "Frontend Development",
    desc: "Creating responsive, interactive, and high-performance user interfaces with modern frontend technologies.",
    longDesc:
      "Building modern web interfaces using React.js, Tailwind CSS, and advanced animations with focus on performance, accessibility, and user experience.",
    icon: <FaReact />,
    gradient: "from-cyan-600/40 to-blue-500/20",
    borderGradient: "from-cyan-500 to-blue-500",
    tech: [
      { icon: <FaReact color='#61DBFB' />, name: "React" },
      { icon: <SiTailwindcss color='#06B6D4' />, name: "Tailwind" },
    ],
    metrics: [
      { label: "UI Projects", value: "10+" },
      { label: "Responsive Apps", value: "15+" },
    ],
  },

  {
    title: "Backend Development",
    desc: "Developing scalable APIs, authentication systems, and secure server-side applications.",
    longDesc:
      "Backend development using Node.js, Express.js, MongoDB, and Spring Boot with REST APIs, authentication, and database architecture.",
    icon: <FaNodeJs />,
    gradient: "from-emerald-600/40 to-green-500/20",
    borderGradient: "from-emerald-500 to-green-500",
    tech: [
      { icon: <FaNodeJs color='#68A063' />, name: "Node.js" },
      { icon: <SiExpress color='#ffffff' />, name: "Express" },
      { icon: <SiMongodb color='#4DB33D' />, name: "MongoDB" },
      { icon: <SiSpringboot color='#6DB33F' />, name: "Spring Boot" },
    ],
    metrics: [
      { label: "APIs Built", value: "20+" },
      { label: "Databases", value: "10+" },
    ],
  },

  {
    title: "Deployment & DevOps",
    desc: "Deploying and managing scalable applications with cloud and container technologies.",
    longDesc:
      "Application deployment using Docker, cloud hosting platforms, CI/CD workflows, and production optimization for scalable applications.",
    icon: <FaCloud />,
    gradient: "from-orange-600/40 to-amber-500/20",
    borderGradient: "from-orange-500 to-amber-500",
    tech: [
      { icon: <SiDocker color='#2496ED' />, name: "Docker" },
      { icon: <FaRocket className='text-orange-400' />, name: "Deployment" },
    ],
    metrics: [
      { label: "Deployments", value: "12+" },
      { label: "Cloud Apps", value: "8+" },
    ],
  },

  {
    title: "UI / UX & Canva Design",
    desc: "Designing modern interfaces, branding assets, and engaging visual experiences.",
    longDesc:
      "Creating clean and user-friendly designs, social media assets, presentations, and UI concepts using Canva and Figma.",
    icon: <SiCanva />,
    gradient: "from-pink-600/40 to-rose-500/20",
    borderGradient: "from-pink-500 to-rose-500",
    tech: [
      { icon: <SiCanva color='#00C4CC' />, name: "Canva" },
      { icon: "🎨", name: "Figma" },
    ],
    metrics: [
      { label: "Designs", value: "30+" },
      { label: "Brand Assets", value: "20+" },
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
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardHoverAnimation = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-[#0A0A0F] text-white"
          : "bg-gradient-to-br from-white via-gray-50 to-violet-50/30 text-gray-900"
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
          className={`absolute inset-0 opacity-40 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_top_center,_#4f46e5_0%,_transparent_60%)]"
              : "bg-[radial-gradient(ellipse_at_top_center,_#8b5cf6_0%,_transparent_60%)]"
          }`}
        />
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 opacity-20 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_bottom_right,_#7c3aed_0%,_transparent_70%)]"
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
              darkMode ? "bg-violet-500/10" : "bg-violet-300/20"
            }`}
            style={{
              width: Math.random() * 300 + 100,
              height: Math.random() * 300 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 30, 0],
              x: [0, 20, 0],
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mb-20"
        >
          <motion.div variants={fadeUp} custom={0} className="text-center lg:text-left">
            {/* 🔥 Animated badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
              </span>
              <p
                className={`text-sm tracking-[0.3em] font-mono transition-colors duration-300 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                &lt; What I Do /&gt;
              </p>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight">
              Services That
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 mt-3">
                Build Real Products
              </span>
            </h2>

            <p
              className={`mt-6 max-w-2xl mx-auto lg:mx-0 text-lg ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              End-to-end development solutions tailored to your business needs.
              From concept to deployment, I deliver high-quality, scalable applications.
            </p>
          </motion.div>

          {/* 🔥 Stats Row */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12"
          >
            {[
              { value: "10+", label: "Projects Completed" },
              { value: "15+", label: "Happy Clients" },
              { value: "2", label: "Years Experience" },
              { value: "24/7", label: "Support" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <div className="text-3xl font-bold text-violet-500">{stat.value}</div>
                <div className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* CARDS GRID */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              custom={index + 2}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className={`group relative overflow-hidden rounded-3xl transition-all duration-500 ${
                darkMode
                  ? "bg-black/40 backdrop-blur-xl"
                  : "bg-white/80 backdrop-blur-xl shadow-lg"
              }`}
              style={{
                border: darkMode
                  ? "1px solid rgba(255,255,255,0.08)"
                  : "1px solid rgba(139,92,246,0.15)",
              }}
            >
              {/* 🔥 Animated gradient border on hover */}
              <div
                className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br ${service.gradient}`}
              />

              {/* 🔥 Top accent line */}
              <motion.div
                className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.borderGradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}
              />

              <div className="relative z-10 p-6 lg:p-8 flex flex-col h-full">
                {/* ICON + TECH ROW */}
                <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                  <motion.div
                    whileHover={{ rotate: 5, scale: 1.05 }}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl transition-all duration-300 ${
                      darkMode
                        ? "bg-gradient-to-br from-white/10 to-white/5 border border-white/20 text-violet-300"
                        : "bg-gradient-to-br from-violet-100 to-purple-50 border border-violet-200 text-violet-600 shadow-md"
                    }`}
                  >
                    {service.icon}
                  </motion.div>

                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ y: -3, scale: 1.1 }}
                        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-200 ${
                          darkMode
                            ? "bg-black/50 border border-white/10 hover:border-violet-500/50"
                            : "bg-white border border-gray-200 shadow-sm hover:border-violet-400"
                        }`}
                        title={tech.name}
                      >
                        {typeof tech.icon === "string" ? (
                          <span className="text-xl">{tech.icon}</span>
                        ) : (
                          tech.icon
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-3 font-mono tracking-tight">
                  {service.title}
                </h3>

                {/* SHORT DESC */}
                <p
                  className={`leading-relaxed text-sm md:text-base ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {service.desc}
                </p>

                {/* 🔥 METRICS BADGES */}
                <div className="flex gap-4 mt-4 mb-4">
                  {service.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-1 text-xs px-2 py-1 rounded-full ${
                        darkMode
                          ? "bg-violet-500/10 text-violet-400"
                          : "bg-violet-100 text-violet-600"
                      }`}
                    >
                      <span className="font-bold">{metric.value}</span>
                      <span>{metric.label}</span>
                    </div>
                  ))}
                </div>

                {/* 🔥 LONG DESC (reveal on hover) */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  whileHover={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p
                    className={`text-sm leading-relaxed mt-4 pt-4 border-t ${
                      darkMode ? "border-white/10 text-gray-300" : "border-gray-200 text-gray-700"
                    }`}
                  >
                    {service.longDesc}
                  </p>
                </motion.div>

                {/* CALL TO ACTION */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`mt-6 flex items-center gap-2 text-sm font-medium ${
                    darkMode ? "text-violet-400" : "text-violet-600"
                  }`}
                >
                  <span className="font-mono text-xs">$&gt;</span>
                  <span>Let's discuss your project</span>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <FaArrowRight className="text-xs" />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 🔥 BOTTOM CALL TO ACTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div
            className={`inline-flex items-center gap-4 px-6 py-3 rounded-full ${
              darkMode ? "bg-white/5" : "bg-gray-100"
            }`}
          >
            <span className="text-sm">Looking for a specific service?</span>
            <a
              href="#contact"
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                darkMode
                  ? "bg-violet-500 hover:bg-violet-600 text-white"
                  : "bg-violet-500 hover:bg-violet-600 text-white"
              }`}
            >
              Contact Me
              <FaArrowRight className="inline ml-2 text-xs" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;