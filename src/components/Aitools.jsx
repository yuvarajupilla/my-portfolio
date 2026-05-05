import { useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef } from "react";
import {
  FaRobot,
  FaBrain,
  FaSearch,
  FaComments,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaCheckCircle,
  FaMagic,
  FaCrown,
} from "react-icons/fa";
import { SiOpenai } from "react-icons/si";
import { useTheme } from "../context/ThemeContext";

// Import local SVG files
import chatgptLogo from "../assets/svgs/chatgpt.svg";
import deepseekLogo from "../assets/svgs/deepseek.svg";
import perplexityLogo from "../assets/svgs/perplexity.svg";
import claudeLogo from "../assets/svgs/claude.svg";

function AITechStack() {
  const { darkMode } = useTheme();
  const [activeAI, setActiveAI] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [imageErrors, setImageErrors] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
    layoutEffect: false,
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const aiTools = [
    {
      name: "ChatGPT",
      fullName: "ChatGPT-4",
      company: "OpenAI",
      logo: chatgptLogo,
      icon: <SiOpenai className="text-2xl" />,
      description:
        "Advanced language model for natural conversations, code generation, and creative problem-solving. My go-to for daily coding assistance.",
      features: [
        "Natural language understanding",
        "Code generation & debugging",
        "Creative writing assistance",
        "API integration capabilities",
      ],
      prompt: "Explain how to optimize React component re-renders",
      response:
        "💡 React components re-render when state or props change. To optimize: use memo(), useCallback(), and avoid inline functions in JSX. This reduces unnecessary re-renders and improves performance.",
      color: "#10B981",
      gradient: "from-emerald-500 to-teal-500",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      stats: { accuracy: "94%", speed: "1.2s", users: "100M+" },
      useCase: "Daily coding & debugging",
    },
    {
      name: "DeepSeek",
      fullName: "DeepSeek AI",
      company: "DeepSeek",
      logo: deepseekLogo,
      icon: <FaBrain className="text-2xl" />,
      description:
        "Cutting-edge AI with exceptional reasoning capabilities and deep technical analysis. Perfect for complex algorithmic challenges.",
      features: [
        "Advanced mathematical reasoning",
        "Code optimization expert",
        "Deep technical documentation",
        "Multi-language support",
      ],
      prompt: "Write an efficient algorithm for binary tree traversal",
      response:
        "💡 def inorder_traversal(root):\n    return inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right) if root else []\n\nTime Complexity: O(n) | Space Complexity: O(h)",
      color: "#06B6D4",
      gradient: "from-cyan-500 to-blue-500",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      stats: { accuracy: "96%", speed: "0.9s", users: "50M+" },
      useCase: "Algorithm optimization",
    },
    {
      name: "Perplexity",
      fullName: "Perplexity AI",
      company: "Perplexity",
      logo: perplexityLogo,
      icon: <FaSearch className="text-2xl" />,
      description:
        "AI-powered search and research assistant with real-time information retrieval. Essential for staying updated with latest tech trends.",
      features: [
        "Real-time web search",
        "Citation & source tracking",
        "Research summarization",
        "Fact verification system",
      ],
      prompt: "Find latest trends in full-stack development 2024",
      response:
        "💡 According to recent data, top full-stack trends for 2024:\n• Serverless architecture adoption +45%\n• Edge computing implementation +38%\n• WebAssembly integration +42%",
      color: "#A855F7",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      stats: { accuracy: "92%", speed: "0.7s", users: "30M+" },
      useCase: "Research & learning",
    },
    {
      name: "Claude AI",
      fullName: "Claude 3",
      company: "Anthropic",
      logo: claudeLogo,
      icon: <FaComments className="text-2xl" />,
      description:
        "Constitutional AI focused on safe, helpful, and nuanced conversations with large context window. Ideal for complex document analysis.",
      features: [
        "200K context window",
        "Nuanced understanding",
        "Safe & ethical AI",
        "Document analysis",
      ],
      prompt: "Analyze this code for security vulnerabilities",
      response:
        "💡 Security Analysis Complete:\n✓ Found 2 medium-risk vulnerabilities\n→ SQL injection risk in user input\n→ XSS vulnerability in comment section\n✓ Recommended fixes provided",
      color: "#F97316",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      stats: { accuracy: "93%", speed: "1.1s", users: "40M+" },
      useCase: "Security analysis",
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
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  // Typing animation effect (only for desktop)
  useEffect(() => {
    if (isMobile) {
      setTypedText(aiTools[activeAI].prompt);
      setIsTyping(false);
      return;
    }

    let currentIndex = 0;
    const currentPrompt = aiTools[activeAI].prompt;

    setTypedText("");
    setIsTyping(true);

    const interval = setInterval(() => {
      if (currentIndex <= currentPrompt.length) {
        setTypedText(currentPrompt.substring(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(interval);

        setTimeout(() => {
          if (activeAI === aiTools.length - 1) {
            setActiveAI(0);
          } else {
            setActiveAI(activeAI + 1);
          }
        }, 4000);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [activeAI, isMobile]);

  const handleImageError = (toolName) => {
    setImageErrors((prev) => ({ ...prev, [toolName]: true }));
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
      {/* 🔥 Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 opacity-25 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_top_center,_#06b6d4_0%,_transparent_60%)]"
              : "bg-[radial-gradient(ellipse_at_top_center,_#22d3ee_0%,_transparent_60%)]"
          }`}
        />
        <motion.div
          style={{ y: backgroundY }}
          className={`absolute inset-0 opacity-15 ${
            darkMode
              ? "bg-[radial-gradient(ellipse_at_bottom_right,_#8b5cf6_0%,_transparent_70%)]"
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
              darkMode ? "bg-cyan-500/5" : "bg-cyan-400/8"
            }`}
            style={{
              width: Math.random() * 150 + 50,
              height: Math.random() * 150 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 40, 0],
              x: [0, 20, 0],
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

      <div className="relative max-w-7xl mx-auto z-10">
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
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <p
              className={`text-sm tracking-[0.3em] font-mono transition-colors duration-300 ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              AI Tools Integration
            </p>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight"
          >
            AI Tools I
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 mt-3">
              Master Daily
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className={`mt-6 max-w-2xl mx-auto text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Leveraging cutting-edge AI to enhance productivity, creativity, and
            problem-solving in my development workflow
          </motion.p>
        </motion.div>

        {/* AI Tools Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {aiTools.map((tool, index) => (
            <motion.button
              key={index}
              variants={fadeUp}
              custom={index + 3}
              onClick={() => setActiveAI(index)}
              className={`group relative px-5 md:px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeAI === index
                  ? `bg-gradient-to-r ${darkMode ? "from-white/10 to-white/5" : "from-gray-100 to-white"}`
                  : darkMode
                  ? "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                  : "bg-gray-100 border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-200"
              }`}
              style={{
                borderColor: activeAI === index ? tool.color : undefined,
                boxShadow:
                  activeAI === index
                    ? darkMode
                      ? `0 0 20px ${tool.color}20`
                      : `0 0 15px ${tool.color}15`
                    : undefined,
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg" style={{ color: activeAI === index ? tool.color : undefined }}>
                  {tool.icon}
                </span>
                <span className="text-sm font-semibold">{tool.name}</span>
              </div>
            </motion.button>
          ))}
        </motion.div>

        {/* Active AI Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAI}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className={`rounded-3xl border overflow-hidden transition-all duration-300 ${
              darkMode
                ? "bg-black/40 backdrop-blur-xl border-white/10"
                : "bg-white/80 backdrop-blur-xl border-gray-200 shadow-xl"
            }`}
          >
            {/* 🔥 Top accent gradient */}
            <div
              className="h-1 bg-gradient-to-r"
              style={{ background: `linear-gradient(90deg, ${aiTools[activeAI].color}, ${aiTools[activeAI].color}80)` }}
            />

            <div className="grid lg:grid-cols-2 gap-0">
              {/* LEFT SIDE - AI Info */}
              <div
                className={`p-6 md:p-8 ${
                  darkMode ? "lg:border-r border-white/10" : "lg:border-r border-gray-200"
                }`}
              >
                {/* Logo & Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-16 h-16 rounded-2xl border flex items-center justify-center overflow-hidden p-2 transition-all duration-300 ${
                      darkMode
                        ? "bg-white/10 border-white/10 group-hover:border-cyan-500/50"
                        : "bg-gray-100 border-gray-200"
                    }`}
                  >
                    {!imageErrors[aiTools[activeAI].name] ? (
                      <img
                        src={aiTools[activeAI].logo}
                        alt={aiTools[activeAI].name}
                        className="w-full h-full object-contain"
                        onError={() => handleImageError(aiTools[activeAI].name)}
                      />
                    ) : (
                      <div className="text-3xl" style={{ color: aiTools[activeAI].color }}>
                        {aiTools[activeAI].icon}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-bold ${
                        darkMode ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {aiTools[activeAI].fullName}
                    </h3>
                    <p
                      className={`text-sm ${
                        darkMode ? "text-gray-500" : "text-gray-500"
                      }`}
                    >
                      by {aiTools[activeAI].company}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p
                  className={`leading-relaxed mb-6 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {aiTools[activeAI].description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  <h4
                    className={`text-xs font-mono mb-2 ${
                      darkMode ? "text-gray-500" : "text-gray-400"
                    }`}
                  >
                    // key-capabilities
                  </h4>
                  {aiTools[activeAI].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <FaCheckCircle
                        className="text-cyan-400 text-xs shrink-0"
                      />
                      <span
                        className={`text-sm ${
                          darkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Use Case Badge */}
                <div
                  className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs mb-4 ${
                    darkMode
                      ? "bg-white/5 border border-white/10"
                      : "bg-gray-100 border border-gray-200"
                  }`}
                >
                  <FaMagic className="text-cyan-400 text-xs" />
                  <span>Primary use: {aiTools[activeAI].useCase}</span>
                </div>

                {/* Stats */}
                <div
                  className={`grid grid-cols-3 gap-3 pt-4 border-t ${
                    darkMode ? "border-white/10" : "border-gray-200"
                  }`}
                >
                  {Object.entries(aiTools[activeAI].stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div
                        className={`text-lg font-bold`}
                        style={{ color: aiTools[activeAI].color }}
                      >
                        {value}
                      </div>
                      <div
                        className={`text-[10px] uppercase tracking-wider ${
                          darkMode ? "text-gray-500" : "text-gray-400"
                        }`}
                      >
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT SIDE - Live Terminal Demo */}
              <div
                className={`p-6 md:p-8 ${
                  darkMode ? "bg-black/20" : "bg-gray-50"
                }`}
              >
                <h4
                  className={`text-sm font-semibold mb-3 font-mono flex items-center gap-2 ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  <FaCode className="text-cyan-400" />
                  Live Demo
                </h4>

                {/* Terminal */}
                <div
                  className={`rounded-xl border overflow-hidden transition-all duration-300 ${
                    darkMode
                      ? "bg-black/60 border-white/10"
                      : "bg-white border-gray-200 shadow-sm"
                  }`}
                >
                  {/* Terminal Header */}
                  <div
                    className={`flex items-center gap-2 px-4 py-2.5 border-b ${
                      darkMode
                        ? "bg-white/5 border-white/10"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    </div>
                    <span
                      className={`text-[10px] font-mono ml-2 ${
                        darkMode ? "text-gray-500" : "text-gray-400"
                      }`}
                    >
                      {aiTools[activeAI].name.toLowerCase()}@ai:~$
                    </span>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-4 font-mono text-xs min-h-[280px]">
                    <div className="flex items-start gap-2 mb-3 flex-wrap">
                      <span className="text-green-400 shrink-0">$</span>
                      <span
                        className="text-cyan-400 shrink-0"
                        style={{ color: aiTools[activeAI].color }}
                      >
                        prompt
                      </span>
                      <span className="text-gray-500 shrink-0">"</span>
                      <span className={darkMode ? "text-white" : "text-gray-900"} style={{ wordBreak: "break-word" }}>
                        {isMobile ? aiTools[activeAI].prompt : typedText}
                      </span>
                      {!isMobile && isTyping && (
                        <span
                          className="w-1.5 h-3.5 animate-pulse ml-0.5"
                          style={{ backgroundColor: aiTools[activeAI].color }}
                        />
                      )}
                      <span className="text-gray-500 shrink-0">"</span>
                    </div>

                    {(!isMobile ? !isTyping : true) && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className={`mt-4 pt-3 border-t ${
                          darkMode ? "border-white/10" : "border-gray-200"
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          <span
                            className="shrink-0"
                            style={{ color: aiTools[activeAI].color }}
                          >
                            {aiTools[activeAI].name.toLowerCase()}&gt;
                          </span>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2">
                              <div
                                className="w-1.5 h-1.5 rounded-full"
                                style={{ backgroundColor: aiTools[activeAI].color }}
                              />
                              <span
                                className={`text-[10px] ${
                                  darkMode ? "text-gray-500" : "text-gray-400"
                                }`}
                              >
                                Response generated
                              </span>
                            </div>
                            <div
                              className={`text-[11px] leading-relaxed whitespace-pre-wrap ${
                                darkMode ? "text-gray-300" : "text-gray-600"
                              }`}
                            >
                              {aiTools[activeAI].response}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Integration Note */}
                <div
                  className={`flex items-center gap-3 p-3 rounded-lg mt-4 border ${
                    darkMode
                      ? "bg-white/5 border-white/10"
                      : "bg-gray-100 border-gray-200"
                  }`}
                >
                  <FaRocket className="text-cyan-400 text-sm shrink-0" />
                  <p
                    className={`text-xs ${
                      darkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    Seamlessly integrated into my development workflow for faster
                    prototyping, code review, and problem-solving
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${
              darkMode ? "bg-white/5" : "bg-gray-100"
            }`}
          >
            <FaCrown className="text-amber-400 text-sm" />
            <span className={`text-xs font-mono ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              &lt; Currently integrated with VS Code / API / Daily Workflow /&gt;
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AITechStack;