import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaRobot, 
  FaBrain, 
  FaSearch, 
  FaComments,
  FaCode,
  FaRocket,
  FaStar,
  FaArrowRight
} from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

// Import local SVG files
import chatgptLogo from "../assets/svgs/chatgpt.svg";
import deepseekLogo from "../assets/svgs/deepseek.svg";
import perplexityLogo from "../assets/svgs/perplexity.svg";
import claudeLogo from "../assets/svgs/claude.svg";

function AITechStack() {
  const [activeAI, setActiveAI] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [imageErrors, setImageErrors] = useState({});

  const aiTools = [
    {
      name: "ChatGPT",
      fullName: "ChatGPT-4",
      company: "OpenAI",
      logo: chatgptLogo,
      icon: <SiOpenai className="text-3xl" />,
      description: "Advanced language model for natural conversations, code generation, and creative problem-solving.",
      features: [
        "Natural language understanding",
        "Code generation & debugging",
        "Creative writing assistance",
        "API integration capabilities"
      ],
      prompt: "Explain how to optimize React component re-renders",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-600/20 to-teal-500/10",
      stats: { accuracy: "94%", speed: "1.2s", users: "100M+" }
    },
    {
      name: "DeepSeek",
      fullName: "DeepSeek AI",
      company: "DeepSeek",
      logo: deepseekLogo,
      icon: <FaBrain className="text-3xl" />,
      description: "Cutting-edge AI with exceptional reasoning capabilities and deep technical analysis.",
      features: [
        "Advanced mathematical reasoning",
        "Code optimization expert",
        "Deep technical documentation",
        "Multi-language support"
      ],
      prompt: "Write an efficient algorithm for binary tree traversal",
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-600/20 to-cyan-500/10",
      stats: { accuracy: "96%", speed: "0.9s", users: "50M+" }
    },
    {
      name: "Perplexity",
      fullName: "Perplexity AI",
      company: "Perplexity",
      logo: perplexityLogo,
      icon: <FaSearch className="text-3xl" />,
      description: "AI-powered search and research assistant with real-time information retrieval.",
      features: [
        "Real-time web search",
        "Citation & source tracking",
        "Research summarization",
        "Fact verification system"
      ],
      prompt: "Find latest trends in full-stack development 2024",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-600/20 to-pink-500/10",
      stats: { accuracy: "92%", speed: "0.7s", users: "30M+" }
    },
    {
      name: "Claude AI",
      fullName: "Claude 3",
      company: "Anthropic",
      logo: claudeLogo,
      icon: <FaComments className="text-3xl" />,
      description: "Constitutional AI focused on safe, helpful, and nuanced conversations with large context window.",
      features: [
        "200K context window",
        "Nuanced understanding",
        "Safe & ethical AI",
        "Document analysis"
      ],
      prompt: "Analyze this code for security vulnerabilities",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-600/20 to-red-500/10",
      stats: { accuracy: "93%", speed: "1.1s", users: "40M+" }
    }
  ];

  // Typing animation effect
  useEffect(() => {
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
        
        // Reset after 4 seconds
        setTimeout(() => {
          if (activeAI === aiTools.length - 1) {
            setActiveAI(0);
          } else {
            setActiveAI(activeAI + 1);
          }
        }, 3000);
      }
    }, 50);
    
    return () => clearInterval(interval);
  }, [activeAI]);

  // Handle image error - show fallback icon
  const handleImageError = (toolName) => {
    setImageErrors(prev => ({ ...prev, [toolName]: true }));
  };

  return (
    <section className="relative overflow-hidden bg-[#0A0A0F] text-white py-24 md:py-32 px-6 md:px-16">
      {/* Animated Matrix-like Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0 font-mono text-xs">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute whitespace-pre"
              style={{
                left: `${i * 30}%`,
                top: 0,
              }}
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 20 + i * 10,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...Array(30)].map((_, j) => (
                <div key={j} className="py-1">
                  {`> AI.prompt("${aiTools[j % aiTools.length].prompt.substring(0, 30)}...");`}
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating AI Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            animate={{
              y: [null, -100, 100],
              x: [null, 50, -50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
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
            <FaRobot className="text-cyan-400 text-sm" />
            <span className="text-cyan-300 text-sm font-mono">AI_POWERED_TOOLS.log</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6"
          >
            AI Tools I
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Master Daily
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-2xl mx-auto font-mono"
          >
            &lt; Leveraging cutting-edge AI to enhance productivity, creativity, and problem-solving /&gt;
          </motion.p>
        </div>

        {/* AI Tools Grid */}
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {aiTools.map((tool, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveAI(index)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative group text-left transition-all duration-500 ${
                activeAI === index ? 'lg:scale-105' : 'lg:scale-100'
              }`}
            >
              <div className={`relative rounded-2xl p-6 border transition-all duration-500 ${
                activeAI === index 
                  ? `bg-gradient-to-br ${tool.bgColor} border-cyan-500/50 shadow-2xl` 
                  : 'bg-black/40 border-white/10 hover:border-purple-500/30'
              } backdrop-blur-xl`}>
                
                {/* Glow Effect */}
                {activeAI === index && (
                  <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} rounded-2xl blur-xl opacity-20`} />
                )}
                
                <div className="relative z-10">
                  {/* Logo */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center overflow-hidden p-2 relative">
                      {!imageErrors[tool.name] ? (
                        <img 
                          src={tool.logo} 
                          alt={tool.name}
                          className="w-full h-full object-contain"
                          onError={() => handleImageError(tool.name)}
                        />
                      ) : (
                        <div className="text-2xl text-cyan-400">
                          {tool.icon}
                        </div>
                      )}
                    </div>
                    {activeAI === index && (
                      <FaStar className="text-yellow-400 animate-pulse" />
                    )}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold mb-1">{tool.name}</h3>
                  <p className="text-xs text-gray-400 font-mono mb-3">{tool.company}</p>
                  
                  {/* Active Indicator */}
                  {activeAI === index && (
                    <div className="flex items-center gap-1 mt-2">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span className="text-[10px] text-green-400 font-mono">ACTIVE</span>
                    </div>
                  )}
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active AI Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAI}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className={`bg-gradient-to-br ${aiTools[activeAI].bgColor} rounded-3xl border border-white/20 backdrop-blur-xl overflow-hidden`}>
              <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-10">
                {/* Left Side - AI Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center overflow-hidden p-2">
                      {!imageErrors[aiTools[activeAI].name] ? (
                        <img 
                          src={aiTools[activeAI].logo} 
                          alt={aiTools[activeAI].name}
                          className="w-full h-full object-contain"
                          onError={() => handleImageError(aiTools[activeAI].name)}
                        />
                      ) : (
                        <div className="text-3xl text-cyan-400">
                          {aiTools[activeAI].icon}
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{aiTools[activeAI].fullName}</h3>
                      <p className="text-gray-400 font-mono text-sm">{aiTools[activeAI].company}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {aiTools[activeAI].description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {aiTools[activeAI].features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${aiTools[activeAI].color}`} />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                    {Object.entries(aiTools[activeAI].stats).map(([key, value], idx) => (
                      <div key={idx} className="text-center">
                        <div className={`text-lg font-bold bg-gradient-to-r ${aiTools[activeAI].color} bg-clip-text text-transparent`}>
                          {value}
                        </div>
                        <div className="text-[10px] text-gray-500 font-mono uppercase">{key}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Side - Live Prompt Demo */}
                <div className="relative">
                  <div className="bg-black/50 rounded-xl border border-white/10 overflow-hidden">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-xs text-gray-400 font-mono ml-2">
                        {aiTools[activeAI].name.toLowerCase()}_terminal
                      </span>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-4 font-mono text-sm">
                      <div className="flex items-start gap-2 mb-3">
                        <span className="text-green-400">$&gt;</span>
                        <span className="text-cyan-400">prompt</span>
                        <span className="text-gray-400">"</span>
                        <span className="text-white">{typedText}</span>
                        {isTyping && (
                          <span className="w-0.5 h-4 bg-white animate-pulse ml-1" />
                        )}
                        <span className="text-gray-400">"</span>
                      </div>

                      {!isTyping && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="mt-4 pt-4 border-t border-white/10"
                        >
                          <div className="flex items-start gap-2">
                            <span className="text-purple-400">{aiTools[activeAI].name.toLowerCase()}&gt;</span>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-gray-300 text-xs">
                                  Processing your request...
                                </span>
                              </div>
                              <div className="text-gray-400 text-xs leading-relaxed whitespace-pre-wrap">
                                {activeAI === 0 && "React components re-render when state or props change. To optimize: use memo(), useCallback(), and avoid inline functions in JSX."}
                                {activeAI === 1 && "def inorder_traversal(root):\n    return inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right) if root else []"}
                                {activeAI === 2 && "According to recent data, full-stack development trends include serverless architecture, edge computing, and WebAssembly integration."}
                                {activeAI === 3 && "Security analysis complete. Found 2 medium-risk vulnerabilities: SQL injection risk and XSS vulnerability in input validation."}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 mt-4">
                    <button className="flex-1 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-mono flex items-center justify-center gap-2">
                      <FaCode className="text-cyan-400" />
                      Try API
                    </button>
                    <button className="flex-1 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 hover:border-cyan-500/50 transition-colors text-sm font-mono flex items-center justify-center gap-2">
                      Learn More
                      <FaArrowRight className="text-xs" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Integration Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white/5 border border-white/10">
            <FaRocket className="text-cyan-400" />
            <span className="text-sm font-mono text-gray-300">
              Integrating AI into daily workflow for enhanced productivity
            </span>
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="w-1 h-1 rounded-full bg-green-400" />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AITechStack;