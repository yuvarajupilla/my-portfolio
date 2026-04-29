import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaInstagram,   // ✅ add here
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight,
  FaMapMarkerAlt,
  FaClock,
  FaBriefcase
} from "react-icons/fa";


import { SiLeetcode } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

function Contact() {
  const { darkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);



const socialLinks = [
  { 
    icon: <FaGithub />, 
    url: "https://github.com/yuvarajupilla", 
    label: "GitHub", 
    color: "#333" 
  },
  { 
    icon: <FaLinkedin />, 
    url: "https://www.linkedin.com/in/yuvarajupilla/", 
    label: "LinkedIn", 
    color: "#0077B5" 
  },
  { 
    icon: <FaInstagram />, 
    url: "https://www.instagram.com/yuvaraju___p", 
    label: "Instagram", 
    color: "#E1306C" 
  },
  { 
    icon: <SiLeetcode />, 
    url: "https://leetcode.com/u/yuvadeveloper112002/", 
    label: "LeetCode", 
    color: "#FFA116" 
  }
];

  const infoCards = [
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Vijayawada, India" },
    { icon: <FaClock />, label: "Response Time", value: "< 24 hours" },
    { icon: <FaBriefcase />, label: "Available For", value: "Freelance & Full-Time" }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section className={`relative overflow-hidden transition-colors duration-300 ${
      darkMode ? "bg-[#0A0A0F] text-white" : "bg-gray-50 text-gray-900"
    } py-24 px-6 md:px-16`}>
      {/* Background Animation */}
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
                top: 0,
              }}
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 25 + i * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(20)].map((_, j) => (
                <div key={j} className={`py-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {`> contact.send("message_${j}", { status: "pending" });`}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-gray-100 border-gray-200"
            }`}
          >
            <FaEnvelope className="text-cyan-400 text-sm" />
            <span className={`text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Get in Touch</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            Let's Work
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-lg ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Have a project in mind? Let's bring your ideas to life
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`rounded-2xl border p-8 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Field */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  Your Name
                </label>
                <div className="relative">
                  <FaUser className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                    darkMode ? "text-gray-500" : "text-gray-400"
                  }`} />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-xl py-3 pl-12 pr-4 transition-all ${
                      darkMode
                        ? "bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-black/70"
                        : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-400 focus:bg-white"
                    }`}
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  Email Address
                </label>
                <div className="relative">
                  <FaEnvelope className={`absolute left-4 top-1/2 transform -translate-y-1/2 ${
                    darkMode ? "text-gray-500" : "text-gray-400"
                  }`} />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`w-full rounded-xl py-3 pl-12 pr-4 transition-all ${
                      darkMode
                        ? "bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-black/70"
                        : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-400 focus:bg-white"
                    }`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className={`block text-sm font-medium mb-2 ${
                  darkMode ? "text-gray-400" : "text-gray-600"
                }`}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`w-full rounded-xl py-3 px-4 transition-all resize-none ${
                    darkMode
                      ? "bg-black/50 border border-white/10 text-white placeholder-gray-500 focus:border-cyan-500/50 focus:bg-black/70"
                      : "bg-gray-50 border border-gray-200 text-gray-900 placeholder-gray-400 focus:border-cyan-400 focus:bg-white"
                  }`}
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl py-3 font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25 text-white"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2">
                    <FaPaperPlane />
                    <span>Send Message</span>
                  </div>
                )}
              </motion.button>

              {/* Success Message */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400"
                >
                  <FaCheckCircle />
                  <span className="text-sm">Message sent successfully!</span>
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Right Side - Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Info Cards */}
            <div className={`rounded-2xl border p-8 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200 shadow-sm"
            }`}>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className={`leading-relaxed mb-6 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                I'm always excited to collaborate on innovative projects and solve challenging problems. 
                Whether you have a specific project or just want to chat, I'd love to hear from you.
              </p>
              
              <div className="space-y-4">
                {infoCards.map((card, idx) => (
                  <div key={idx} className={`flex items-center gap-3 p-3 rounded-xl border ${
                    darkMode
                      ? "bg-white/5 border-white/10"
                      : "bg-gray-50 border-gray-200"
                  }`}>
                    <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                      {card.icon}
                    </div>
                    <div>
                      <p className={`text-xs ${darkMode ? "text-gray-500" : "text-gray-500"}`}>{card.label}</p>
                      <p className={`text-sm font-medium ${darkMode ? "text-white" : "text-gray-900"}`}>{card.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className={`rounded-2xl border p-8 ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200 shadow-sm"
            }`}>
              <h3 className="text-xl font-bold mb-4">Find Me On</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2 }}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all group ${
                      darkMode
                        ? "bg-white/5 border-white/10 hover:border-cyan-500/30"
                        : "bg-gray-50 border-gray-200 hover:border-cyan-400/50"
                    }`}
                  >
                    <div className="text-xl" style={{ color: social.color }}>
                      {social.icon}
                    </div>
                    <span className={`text-sm transition-colors ${
                      darkMode
                        ? "text-gray-300 group-hover:text-white"
                        : "text-gray-600 group-hover:text-gray-900"
                    }`}>
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Badge */}
            <div className={`rounded-2xl border p-4 text-center ${
              darkMode
                ? "bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border-cyan-500/20"
                : "bg-gradient-to-r from-cyan-100 to-purple-100 border-cyan-200"
            }`}>
              <div className="flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}>Available for work</span>
                <FaArrowRight className={`text-sm ${darkMode ? "text-cyan-400" : "text-cyan-600"}`} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;