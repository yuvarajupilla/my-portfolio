import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase,
  FaPhoneAlt,
  FaRegSmile,
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const { darkMode } = useTheme();
  const sectionRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // 👈 ADDED PHONE FIELD
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/yuvarajupilla",
      label: "GitHub",
      color: "#333",
      bgColor: "bg-gray-800/20",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/yuvarajupilla/",
      label: "LinkedIn",
      color: "#0077B5",
      bgColor: "bg-blue-600/20",
    },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/yuvaraju___p",
      label: "Instagram",
      color: "#E1306C",
      bgColor: "bg-pink-600/20",
    },
    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/u/yuvadeveloper112002/",
      label: "LeetCode",
      color: "#FFA116",
      bgColor: "bg-yellow-600/20",
    },
  ];

  const infoCards = [
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Vijayawada, India", detail: "Andhra Pradesh" },
    { icon: <FaClock />, label: "Response Time", value: "< 24 hours", detail: "Usually within 12h" },
    { icon: <FaBriefcase />, label: "Available For", value: "Freelance & Full-Time", detail: "Remote / On-site" },
    { icon: <FaPhoneAlt />, label: "Quick Contact", value: "+91 98859 88059", detail: "24/7 Support" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_y141v3w",
        "template_bzmjbds",
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone, // 👈 ADDED PHONE TO EMAILJS
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        "F-YGZyjWazmUvJPV1"
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" }); // 👈 RESET PHONE TOO
    } catch (error) {
      console.error("Failed to send:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 4000);
    }
  };

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden transition-colors duration-500 ${
        darkMode
          ? "bg-gradient-to-b from-[#0A0A0F] via-[#0F0F1A] to-[#0A0A0F] text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900"
      } py-24 md:py-32 px-6 md:px-16`}
      style={{
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 opacity-25 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_top_center,_#8b5cf6_0%,_transparent_60%)]"
              : "bg-[radial-gradient(ellipse_at_top_center,_#a855f7_0%,_transparent_60%)]"
          }`}
        />
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 opacity-15 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_bottom_right,_#06b6d4_0%,_transparent_70%)]"
              : "bg-[radial-gradient(ellipse_at_bottom_right,_#22d3ee_0%,_transparent_70%)]"
          }`}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${
              darkMode ? "bg-violet-500/5" : "bg-violet-400/8"
            }`}
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 40, 0],
              x: [0, 25, 0],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: Math.random() * 20 + 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* HEADER SECTION */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 mx-auto w-fit">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <p
              className={`text-sm tracking-[0.3em] font-mono transition-colors duration-300 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              Get in Touch
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
          >
            Let's Work
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-500 mt-3">
              Together
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className={`mt-6 max-w-2xl mx-auto text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Have a project in mind? Let's bring your ideas to life with cutting-edge solutions
          </motion.p>
        </motion.div>

        {/* MAIN CONTENT GRID */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
          {/* LEFT SIDE - Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              variants={slideInLeft}
              className={`rounded-3xl border p-6 md:p-8 transition-all duration-500 ${
                darkMode
                  ? "bg-black/40 backdrop-blur-xl border-white/10 hover:border-violet-500/40"
                  : "bg-white/80 backdrop-blur-xl border-gray-200 hover:border-violet-400/50 shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <FaEnvelope className="text-violet-400 text-lg" />
                </div>
                <h3 className="text-2xl font-bold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name Field */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <FaUser
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full rounded-xl py-3 pl-12 pr-4 transition-all outline-none ${
                        darkMode
                          ? "bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-violet-500/50 focus:bg-black/70"
                          : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:bg-white"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <FaEnvelope
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full rounded-xl py-3 pl-12 pr-4 transition-all outline-none ${
                        darkMode
                          ? "bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-violet-500/50 focus:bg-black/70"
                          : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:bg-white"
                      }`}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                {/* 👇 ADDED PHONE NUMBER FIELD */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <FaPhoneAlt
                      className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full rounded-xl py-3 pl-12 pr-4 transition-all outline-none ${
                        darkMode
                          ? "bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-violet-500/50 focus:bg-black/70"
                          : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:bg-white"
                      }`}
                      placeholder="+91 12345 67890"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <label
                    className={`block text-sm font-medium mb-2 ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className={`w-full rounded-xl py-3 px-4 transition-all resize-none outline-none ${
                      darkMode
                        ? "bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-violet-500/50 focus:bg-black/70"
                        : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-violet-400 focus:bg-white"
                    }`}
                    placeholder="Tell me about your project, ideas, or just say hello..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`relative w-full rounded-xl py-3.5 font-semibold transition-all overflow-hidden text-white ${
                    submitStatus === "success"
                      ? "bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/25"
                      : submitStatus === "error"
                      ? "bg-gradient-to-r from-red-500 to-rose-500 shadow-lg shadow-red-500/25"
                      : "bg-gradient-to-r from-violet-500 to-cyan-500 hover:shadow-lg hover:shadow-violet-500/25"
                  }`}
                >
                  <AnimatePresence mode="wait">
                    {isSubmitting ? (
                      <motion.div
                        key="loading"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </motion.div>
                    ) : submitStatus === "success" ? (
                      <motion.div
                        key="success"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <FaCheckCircle />
                        <span>Message Sent!</span>
                      </motion.div>
                    ) : submitStatus === "error" ? (
                      <motion.div
                        key="error"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <FaTimesCircle />
                        <span>Failed. Try Again</span>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="idle"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center justify-center gap-2"
                      >
                        <FaPaperPlane />
                        <span>Send Message</span>
                        <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Status Toast */}
                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/30"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      >
                        <FaCheckCircle className="text-green-400 text-lg shrink-0" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-semibold text-green-400">Message sent successfully!</p>
                        <p className="text-xs text-green-500/70">I'll get back to you within 24 hours.</p>
                      </div>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/30"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                      >
                        <FaTimesCircle className="text-red-400 text-lg shrink-0" />
                      </motion.div>
                      <div>
                        <p className="text-sm font-semibold text-red-400">Something went wrong!</p>
                        <p className="text-xs text-red-500/70">Please try again or contact me directly.</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE - Info & Social (same as before) */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={staggerContainer} className="space-y-6">
            {/* Info Cards */}
            <motion.div
              variants={slideInRight}
              className={`rounded-3xl border p-6 md:p-8 transition-all duration-500 ${
                darkMode
                  ? "bg-black/40 backdrop-blur-xl border-white/10 hover:border-violet-500/40"
                  : "bg-white/80 backdrop-blur-xl border-gray-200 hover:border-violet-400/50 shadow-lg"
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-violet-500/20 flex items-center justify-center">
                  <FaRegSmile className="text-violet-400 text-lg" />
                </div>
                <h3 className="text-2xl font-bold">Let's Connect</h3>
              </div>

              <p
                className={`leading-relaxed mb-6 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                I'm always excited to collaborate on innovative projects and solve challenging
                problems. Whether you have a specific project or just want to chat, I'd love to
                hear from you.
              </p>

              <div className="space-y-3">
                {infoCards.map((card, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-300 ${
                      darkMode
                        ? "bg-white/5 border-white/10 hover:border-violet-500/30"
                        : "bg-gray-50 border-gray-200 hover:border-violet-400/30"
                    }`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center text-violet-400">
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-gray-500">{card.label}</p>
                      <p
                        className={`text-sm font-medium ${
                          darkMode ? "text-white" : "text-gray-900"
                        }`}
                      >
                        {card.value}
                      </p>
                      <p className="text-xs text-gray-500">{card.detail}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={slideInRight}
              className={`rounded-3xl border p-6 md:p-8 transition-all duration-500 ${
                darkMode
                  ? "bg-black/40 backdrop-blur-xl border-white/10 hover:border-violet-500/40"
                  : "bg-white/80 backdrop-blur-xl border-gray-200 hover:border-violet-400/50 shadow-lg"
              }`}
            >
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span>Find Me On</span>
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                >
                  🌐
                </motion.div>
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all group ${
                      darkMode
                        ? "bg-white/5 border-white/10 hover:border-violet-500/30 hover:bg-white/10"
                        : "bg-gray-50 border-gray-200 hover:border-violet-400/50 hover:bg-gray-100"
                    }`}
                  >
                    <div
                      className={`text-xl transition-transform group-hover:scale-110`}
                      style={{ color: social.color }}
                    >
                      {social.icon}
                    </div>
                    <span
                      className={`text-sm transition-colors ${
                        darkMode
                          ? "text-gray-300 group-hover:text-white"
                          : "text-gray-600 group-hover:text-gray-900"
                      }`}
                    >
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Availability Badge */}
            <motion.div
              variants={slideInRight}
              className={`rounded-3xl border p-5 text-center transition-all duration-500 ${
                darkMode
                  ? "bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border-violet-500/20"
                  : "bg-gradient-to-r from-violet-100 to-cyan-100 border-violet-200"
              }`}
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
                className="flex items-center justify-center gap-2"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
                <span className={`text-sm font-medium ${darkMode ? "text-gray-300" : "text-gray-700"}`}>
                  Available for work
                </span>
                <FaArrowRight
                  className={`text-sm transition-transform group-hover:translate-x-1 ${
                    darkMode ? "text-violet-400" : "text-violet-600"
                  }`}
                />
              </motion.div>
              <p className="text-xs text-gray-500 mt-2">Open to freelance & full-time opportunities</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;