import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import herobg from "../assets/herobg.png";

function Hero() {
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(0.7, 0.3 + scrollY / 600);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      className="relative min-h-screen w-full overflow-hidden bg-black pb-20 md:pb-0"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${herobg})` }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
            to right,
            rgba(0,0,0,0.95),
            rgba(0,0,0,${opacity}),
            rgba(0,0,0,0.9)
          )`,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex items-center min-h-screen pt-20">

        <div className="grid md:grid-cols-3 gap-10 w-full items-center">

          {/* LEFT TEXT */}
          <div>
            <motion.h1 variants={fadeUp} className="text-[48px] sm:text-[70px] md:text-[120px] font-bold text-white leading-none">
              Build
            </motion.h1>

            <motion.h1
              variants={fadeUp}
              className="text-[48px] sm:text-[70px] md:text-[120px] font-bold leading-none bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent"
            >
              Digital
            </motion.h1>

            <motion.h1 variants={fadeUp} className="text-[48px] sm:text-[70px] md:text-[120px] font-bold text-white leading-none">
              Futures
            </motion.h1>
          </div>

          {/* CENTER SPACE */}
          <div className="hidden md:block"></div>

          {/* RIGHT CONTENT */}
          <div>
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-6"
            >
              Innovate. Develop. <br />
              Succeed. Fast.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-gray-400 mb-8 max-w-md"
            >
              I'm a Full Stack Developer focused on building scalable,
              high-performance web applications using modern technologies.
            </motion.p>

            {/* BUTTONS */}
            <motion.div variants={fadeUp} className="flex gap-4 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-violet-500 text-violet-400 rounded-full hover:bg-violet-500 hover:text-white transition-all duration-300 hover:scale-105"
              >
                My Work
              </a>
            </motion.div>

            {/* NAME */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2 text-gray-400 text-sm mb-6"
            >
              <span className="w-2 h-2 bg-violet-500 rounded-full animate-pulse"></span>
              Yuvaraju — Full Stack Developer
            </motion.div>

            {/* SOCIAL */}
            <motion.div variants={fadeUp} className="flex gap-6 text-gray-400 text-xl">

              <a href="https://github.com/yuvarajupilla" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition hover:scale-110">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/yuvarajupilla/" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition hover:scale-110">
                <FaLinkedin />
              </a>

              <a href="https://www.instagram.com/yuvaraju___p" target="_blank" rel="noopener noreferrer" className="hover:text-violet-400 transition hover:scale-110">
                <FaInstagram />
              </a>

              <a href="https://wa.me/919885988059" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition hover:scale-110">
                <FaWhatsapp />
              </a>

            </motion.div>
          </div>

        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-b from-transparent to-black" />
    </motion.section>
  );
}

export default Hero;