import { motion } from "framer-motion";
import { 
  FaHeart, 
  FaArrowUp,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

// Import your logos
import darkLogo from "../assets/logo.png"; // Your dark theme logo (light colored logo for dark bg)
import lightLogo from "../assets/wlogo.png"; // Your light theme logo (dark colored logo for light bg)

function Footer() {
  const { darkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yuvarajupilla", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yuvarajupilla", label: "LinkedIn" },
    { icon: <FaInstagram />, url: "https://instagram.com/yuvaraju___p", label: "Twitter" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/yuvadeveloper112002", label: "LeetCode" }
  ];

  const quickLinks = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Services", href: "services" },
    { name: "Work", href: "work" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" }
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

  return (
    <footer className={`relative overflow-hidden transition-colors duration-300 ${
      darkMode ? "bg-[#0A0A0F] text-gray-400" : "bg-gray-100 text-gray-600"
    }`}>
      {/* Animated Code Background */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none ${
        darkMode ? "opacity-[0.02]" : "opacity-[0.01]"
      }`}>
        <div className="absolute inset-0 font-mono text-xs">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute whitespace-pre"
              style={{
                left: `${i * 35}%`,
                bottom: 0,
              }}
              animate={{
                y: ["0%", "-100%"],
              }}
              transition={{
                duration: 25 + i * 10,
                repeat: Infinity,
                ease: "linear",
                delay: i * 2,
              }}
            >
              {[...Array(15)].map((_, j) => (
                <div key={j} className="py-1">
                  {`> footer.copy("© ${currentYear}");`}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle Gradient Line at Top */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section with Theme-Aware Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {/* Theme-Aware Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex justify-center md:justify-start"
            >
              <div className="relative">
                {/* Glow Effect - Only in dark mode */}
                {darkMode && (
                  <div className="absolute inset-0 bg-gradient-to-r from-violet-500 to-purple-500 rounded-2xl blur-2xl opacity-30" />
                )}
                
                {/* Logo Image - Changes based on theme */}
                <img 
                  src={darkMode ? darkLogo : lightLogo} 
                  alt="Yuvaraju Logo"
                  className="relative w-24 h-24 md:w-32 md:h-32 object-contain"
                />
                
                {/* Animated Border - Only in dark mode */}
                {darkMode && (
                  <div className="absolute -inset-1.5 border-2 border-violet-500/40 rounded-2xl animate-pulse" />
                )}
              </div>
            </motion.div>
            
            <div>
              <h3 className={`text-xl font-bold text-center md:text-left ${darkMode ? "text-white" : "text-gray-800"}`}>
                Yuvaraju
              </h3>
              <p className="text-xs text-center md:text-left text-violet-500 font-mono mt-1">
                Full Stack Developer
              </p>
            </div>
            
            <p className="text-sm leading-relaxed text-center md:text-left">
              Crafting scalable web applications with modern technologies.
            </p>
            
            <div className="flex justify-center md:justify-start gap-3">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                    darkMode
                      ? "bg-white/5 border border-white/10 hover:bg-violet-500 hover:text-white"
                      : "bg-gray-200 border border-gray-300 hover:bg-violet-500 hover:text-white"
                  }`}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <h4 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className={`text-sm transition-colors duration-300 hover:text-violet-500 ${
                      darkMode ? "text-gray-400 hover:text-violet-400" : "text-gray-600 hover:text-violet-600"
                    }`}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <h4 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start gap-3 text-sm">
                <FaEnvelope className="text-violet-500" />
                <a href="mailto:yuvaraju@example.com" className="hover:text-violet-500 transition-colors">
                  yuvaraju@example.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-sm">
                <FaPhone className="text-violet-500" />
                <a href="tel:+919999999999" className="hover:text-violet-500 transition-colors">
                  +91 99999 99999
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start gap-3 text-sm">
                <FaMapMarkerAlt className="text-violet-500 mt-0.5" />
                <span>Vijayawada, Andhra Pradesh, India</span>
              </div>
            </div>
          </motion.div>

          {/* Work Together */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <h4 className={`text-lg font-semibold ${darkMode ? "text-white" : "text-gray-800"}`}>
              Work Together
            </h4>
            <p className="text-sm leading-relaxed">
              Available for freelance projects and full-time opportunities. Let's create something amazing together!
            </p>
            <div className={`flex items-center justify-center md:justify-start gap-2 p-3 rounded-xl ${
              darkMode ? "bg-white/5 border border-white/10" : "bg-white border border-gray-200"
            }`}>
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-xs font-mono">Available for work</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className={`pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 ${
          darkMode ? "border-white/10" : "border-gray-200"
        }`}>
          <p className="text-xs text-center md:text-left">
            © {currentYear} Yuvaraju. All rights reserved. Built with{" "}
            <FaHeart className="inline text-red-500 animate-pulse" /> using React & Tailwind CSS
          </p>
          
          <div className="flex items-center gap-6">
            <button
              onClick={() => handleScrollTo("home")}
              className={`text-xs hover:text-violet-500 transition-colors ${
                darkMode ? "text-gray-400 hover:text-violet-400" : "text-gray-500 hover:text-violet-600"
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleScrollTo("home")}
              className={`text-xs hover:text-violet-500 transition-colors ${
                darkMode ? "text-gray-400 hover:text-violet-400" : "text-gray-500 hover:text-violet-600"
              }`}
            >
              Terms of Service
            </button>
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.9 }}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                darkMode
                  ? "bg-white/5 border border-white/10 hover:bg-violet-500 hover:text-white"
                  : "bg-gray-200 border border-gray-300 hover:bg-violet-500 hover:text-white"
              }`}
              aria-label="Scroll to top"
            >
              <FaArrowUp className="text-sm" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;