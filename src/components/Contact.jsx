import { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaEnvelope, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaUser,
  FaPaperPlane,
  FaCheckCircle,
  FaArrowRight
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername", label: "GitHub", color: "hover:text-gray-400" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn", color: "hover:text-blue-400" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter", color: "hover:text-blue-300" },
    { icon: <SiLeetcode />, url: "https://leetcode.com/yourusername", label: "LeetCode", color: "hover:text-yellow-400" }
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
    
    // Simulate form submission
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section className="relative overflow-hidden bg-[#0A0A0F] text-white py-24 md:py-32 px-6 md:px-16">
      {/* Animated Code Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.02]">
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
                <div key={j} className="py-1">
                  {`> contact.send("message_${j}", { status: "pending" });`}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/20 mb-6"
          >
            <FaEnvelope className="text-cyan-400 text-sm" />
            <span className="text-cyan-300 text-sm font-mono">contact.getInTouch()</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
          >
            Let's
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Connect
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-mono"
          >
            &lt; Have a project in mind? Let's bring your ideas to life /&gt;
          </motion.p>
        </div>

        {/* Contact Form and Image Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Left Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-500 h-full">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-8 pb-4 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-xs text-gray-400 font-mono ml-2">contact_form.sh</span>
                <span className="text-xs text-green-400 font-mono ml-auto">online</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="group">
                  <label className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                    <span className="text-green-400">$&gt;</span> name
                  </label>
                  <div className="relative">
                    <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-black/70 transition-all duration-300"
                      placeholder="Please fill your name"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="group">
                  <label className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                    <span className="text-green-400">$&gt;</span> email
                  </label>
                  <div className="relative">
                    <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-black/70 transition-all duration-300"
                      placeholder="please provide your mail id"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div className="group">
                  <label className="block text-sm font-mono text-gray-400 mb-2 group-focus-within:text-cyan-400 transition-colors">
                    <span className="text-green-400">$&gt;</span> message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full bg-black/50 border border-white/10 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-black/70 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 rounded-xl py-3 px-6 flex items-center justify-center gap-3 group-hover:border-transparent transition-all duration-300">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span className="font-mono">Sending...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-cyan-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        <span className="font-mono font-medium">Send Message</span>
                        <FaArrowRight className="text-cyan-400 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </div>
                </motion.button>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-3 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400"
                  >
                    <FaCheckCircle />
                    <span className="text-sm font-mono">Message sent successfully!</span>
                  </motion.div>
                )}
              </form>

              {/* Social Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-sm font-mono text-gray-400 mb-4">
                  <span className="text-green-400">$&gt;</span> find_me_on
                </p>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ y: -3 }}
                      className="group relative"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg transition-all duration-300 group-hover:border-cyan-500/50 group-hover:bg-white/10">
                        <div className={`transition-colors ${social.color}`}>
                          {social.icon}
                        </div>
                      </div>
                      <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                        {social.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Image & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-purple-900/20 to-cyan-900/20 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/30 transition-all duration-500 h-full">
              {/* Image Container */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                  alt="Developer workspace"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/50 to-transparent" />
                
                {/* Image Overlay Text */}
                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm rounded-lg px-3 py-1">
                  <code className="text-xs text-cyan-400">dev_workspace.png</code>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm font-mono text-green-400">status: available_for_work</span>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Let's Build Something
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    Amazing Together
                  </span>
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  I'm always excited to collaborate on innovative projects, 
                  solve challenging problems, and create impactful digital experiences. 
                  Whether you have a specific project in mind or just want to chat, 
                  I'd love to hear from you.
                </p>

                {/* Quick Response Time */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-sm font-mono text-gray-400">Response Time</span>
                    <span className="text-sm font-mono text-cyan-400">&lt; 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-sm font-mono text-gray-400">Available For</span>
                    <span className="text-sm font-mono text-cyan-400">Freelance & Full-Time</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/10">
                    <span className="text-sm font-mono text-gray-400">Location</span>
                    <span className="text-sm font-mono text-cyan-400">Remote / Worldwide</span>
                  </div>
                </div>

                {/* Code-like Footer */}
                <div className="mt-6 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono">
                    <span className="text-green-400">$&gt;</span>
                    <span className="text-gray-500">await contact.send()</span>
                    <span className="text-gray-500">→</span>
                    <span className="text-cyan-400 animate-pulse">ready</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating Code Decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="absolute -bottom-10 -left-20 opacity-10 pointer-events-none hidden xl:block"
        >
          <div className="font-mono text-xs space-y-1">
            <div className="text-gray-500">{`{`}</div>
            <div className="ml-2 text-cyan-400">"status": "open",</div>
            <div className="ml-2 text-purple-400">"collaboration": true,</div>
            <div className="ml-2 text-pink-400">"response_time": "&lt;24h"</div>
            <div className="text-gray-500">{`}`}</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;