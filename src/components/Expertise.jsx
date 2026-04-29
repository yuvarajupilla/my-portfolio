import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

function Expertise() {
  const { darkMode } = useTheme();

  // 🔥 Smooth "butter" animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // smooth easing
      },
    },
  };

  return (
    <section
      className={`py-24 md:py-32 px-6 md:px-16 transition-colors duration-300 will-change-transform ${
        darkMode ? "bg-black" : "bg-gray-50"
      }`}
      style={{
        transform: "translateZ(0)", // 🔥 FIX flicker
        backfaceVisibility: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          className="grid md:grid-cols-2 gap-10 md:gap-20 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }} // triggers early
        >

          {/* 🔵 LEFT SIDE */}
          <motion.div variants={fadeUp} className="flex flex-col gap-6">

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
              <p
                className={`text-sm tracking-wide uppercase transition-colors duration-300 ${
                  darkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                My Core Expertise
              </p>
            </div>

            <h3
              className={`text-xl md:text-2xl font-medium leading-snug max-w-sm transition-colors duration-300 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              Crafting scalable and modern web experiences
            </h3>
          </motion.div>

          {/* 🔴 RIGHT SIDE */}
          <motion.div variants={fadeUp}>
            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed max-w-2xl transition-colors duration-300 ${
                darkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              I build full stack web applications from frontend to backend,
              integrating modern UI with scalable server-side architecture.
              Every project focuses on performance, clean code, and real-world usability.
            </h2>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default Expertise;