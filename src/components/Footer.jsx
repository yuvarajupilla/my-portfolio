import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  FaHeart,
  FaArrowUp,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaFileContract,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

// Import your logos
import darkLogo from "../assets/logo.png"; // Your dark theme logo (light colored logo for dark bg)
import lightLogo from "../assets/wlogo.png"; // Your light theme logo (dark colored logo for light bg)

function Footer() {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();
  const footerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yuvarajupilla", label: "GitHub", color: "#333" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yuvarajupilla", label: "LinkedIn", color: "#0077B5" },
    { icon: <FaInstagram />, url: "https://instagram.com/yuvaraju___p", label: "Instagram", color: "#E1306C" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/yuvadeveloper112002", label: "LeetCode", color: "#FFA116" },
  ];

  const quickLinks = [
    { name: "Home", href: "home", icon: <FaCode className="text-xs" /> },
    { name: "Expertise", href: "expertise", icon: <FaCode className="text-xs" /> },
    { name: "Services", href: "services", icon: <FaCode className="text-xs" /> },
    { name: "Projects", href: "projects", icon: <FaCode className="text-xs" /> },
    { name: "AI Stack", href: "aitechstack", icon: <FaCode className="text-xs" /> },
    { name: "Contact", href: "contact", icon: <FaCode className="text-xs" /> },
  ];

  const handleScrollTo = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <footer
      ref={footerRef}
      className={`relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-[#0A0A0F] to-[#050508] text-gray-400"
          : "bg-gradient-to-b from-gray-100 to-gray-200 text-gray-600"
      }`}
    >
      {/* 🔥 Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 opacity-20 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_top_center,_#8b5cf6_0%,_transparent_60%)]"
              : "bg-[radial-gradient(ellipse_at_top_center,_#a855f7_0%,_transparent_60%)]"
          }`}
        />
      </div>

      {/* Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      {/* Code Line Animation Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none h-8 opacity-20">
        <motion.div
          className="whitespace-nowrap font-mono text-[10px]"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...Array(4)].map((_, i) => (
            <span key={i} className="mx-4">
              {`> footer.copy("© ${currentYear}");`}
              <span className="text-violet-500 mx-2">//</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-16 z-10">
        {/* MAIN FOOTER CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
        >
          {/* BRAND SECTION */}
          <motion.div variants={fadeUp} custom={0} className="space-y-4 text-center md:text-left">
            {/* Logo */}
            <div className="flex justify-center md:justify-start">
              <div className="relative group">
                {/* Glow Effect */}
                {darkMode && (
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500" />
                )}
                <img
                  src={darkMode ? darkLogo : lightLogo}
                  alt="Yuvaraju Logo"
                  className="relative w-48 h-24 sm:w-56 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain transition-transform duration-300 group-hover:scale-105"
                />
                {/* Animated Border */}
                {darkMode && (
                  <div className="absolute -inset-1 border border-violet-500/30 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                )}
              </div>
            </div>

            <div>
              <h3
                className={`text-xl font-bold text-center md:text-left ${
                  darkMode ? "text-white" : "text-gray-800"
                }`}
              >
                Yuvaraju Pilla
              </h3>
              <p className="text-xs text-center md:text-left text-violet-500 font-mono mt-1 tracking-wide">
                Full Stack Developer
              </p>
            </div>

            <p className="text-sm leading-relaxed text-center md:text-left max-w-xs mx-auto md:mx-0">
              Crafting scalable web applications with modern technologies and best practices.
            </p>

            {/* Social Links */}
            <div className="flex justify-center md:justify-start gap-2 pt-2">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    darkMode
                      ? "bg-white/5 border border-white/10 hover:bg-violet-500 hover:text-white hover:border-violet-500"
                      : "bg-gray-200 border border-gray-300 hover:bg-violet-500 hover:text-white hover:border-violet-500"
                  }`}
                  style={{ color: darkMode ? "#fff" : social.color }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <motion.div variants={fadeUp} custom={1} className="space-y-4 text-center md:text-left">
  <h4
    className={`text-lg font-semibold flex items-center justify-center md:justify-start gap-2 ${
      darkMode ? "text-white" : "text-gray-800"
    }`}
  >
    <FaRocket className="text-violet-500 text-sm" />
    Quick Links
  </h4>
  <ul className="space-y-2.5">
    {quickLinks.map((link, idx) => (
      <li key={idx}>
        <button
          onClick={() => handleScrollTo(link.href)}
          className={`text-sm transition-all duration-300 hover:text-violet-500 flex items-center justify-center md:justify-start gap-2 w-full md:w-auto ${
            darkMode
              ? "text-gray-400 hover:text-violet-400"
              : "text-gray-600 hover:text-violet-600"
          }`}
        >
          <span className="text-violet-500 opacity-0 group-hover:opacity-100 transition-opacity">
            {link.icon}
          </span>
          {link.name}
        </button>
      </li>
    ))}
  </ul>
</motion.div>

          {/* CONTACT INFO */}
          <motion.div variants={fadeUp} custom={2} className="space-y-4 text-center md:text-left">
            <h4
              className={`text-lg font-semibold flex items-center justify-center md:justify-start gap-2 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <FaEnvelope className="text-violet-500 text-sm" />
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <FaEnvelope className="text-violet-400 text-xs" />
                </div>
                <a
                  href="mailto:yuvarajupilla1@gmail.com"
                  className="hover:text-violet-500 transition-colors break-all"
                >
                  yuvarajupilla1@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <FaPhone className="text-violet-400 text-xs" />
                </div>
                <a href="tel:+919885988059" className="hover:text-violet-500 transition-colors">
                  +91 98859 88059
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-violet-400 text-xs" />
                </div>
                <span>Vijayawada, Andhra Pradesh, India</span>
              </div>
            </div>
          </motion.div>

          {/* WORK TOGETHER */}
          <motion.div variants={fadeUp} custom={3} className="space-y-4 text-center md:text-left">
            <h4
              className={`text-lg font-semibold flex items-center justify-center md:justify-start gap-2 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              <FaHeart className="text-red-500 text-sm" />
              Work Together
            </h4>
            <p className="text-sm leading-relaxed">
              Available for freelance projects and full-time opportunities. Let's create something
              amazing together!
            </p>

            {/* Availability Badge */}
            <div
              className={`inline-flex items-center justify-center md:justify-start gap-2 px-4 py-2.5 rounded-xl w-full md:w-auto ${
                darkMode
                  ? "bg-white/5 border border-white/10"
                  : "bg-white/80 border border-gray-200 shadow-sm"
              }`}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs font-mono">Available for work</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <span className="text-violet-400 text-xs">→</span>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* BOTTOM BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${
            darkMode ? "border-white/10" : "border-gray-300"
          }`}
        >
          {/* Copyright */}
          <p className="text-xs text-center md:text-left flex items-center gap-1 flex-wrap justify-center">
            © {currentYear} Yuvaraju Pilla. All rights reserved.
            <span className="hidden md:inline mx-1">•</span>
            <span className="flex items-center gap-1">
              Built with <FaHeart className="text-red-500 text-xs animate-pulse" /> using
              React & Tailwind CSS
            </span>
          </p>

          {/* Footer Links */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button
              onClick={() => handleScrollTo("home")}
              className={`text-xs hover:text-violet-500 transition-colors flex items-center gap-1 ${
                darkMode ? "text-gray-400 hover:text-violet-400" : "text-gray-500 hover:text-violet-600"
              }`}
            >
              <FaShieldAlt className="text-[10px]" />
              Privacy Policy
            </button>
            <span className="text-gray-500 text-xs">|</span>
            <button
              onClick={() => handleScrollTo("home")}
              className={`text-xs hover:text-violet-500 transition-colors flex items-center gap-1 ${
                darkMode ? "text-gray-400 hover:text-violet-400" : "text-gray-500 hover:text-violet-600"
              }`}
            >
              <FaFileContract className="text-[10px]" />
              Terms of Service
            </button>

            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5, scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? "bg-white/5 border border-white/10 hover:bg-violet-500 hover:text-white hover:border-violet-500"
                  : "bg-gray-200 border border-gray-300 hover:bg-violet-500 hover:text-white hover:border-violet-500"
              }`}
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-sm" />
            </motion.button>
          </div>
        </motion.div>

        {/* Decorative Terminal Line */}
        <div
          className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[8px] font-mono opacity-30 ${
            darkMode ? "text-gray-600" : "text-gray-400"
          }`}
        >
          {`<footer version="1.0" last-updated="${currentYear}" />`}
        </div>
      </div>
    </footer>
  );
}

export default Footer;