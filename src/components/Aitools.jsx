import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaRobot, 
  FaBrain, 
  FaSearch, 
  FaComments,
  FaCode,
  FaRocket,
  FaArrowRight,
  FaCheckCircle
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

  const aiTools = [
    {
      name: "ChatGPT",
      fullName: "ChatGPT-4",
      company: "OpenAI",
      logo: chatgptLogo,
      icon: <SiOpenai className="text-2xl" />,
      description: "Advanced language model for natural conversations, code generation, and creative problem-solving.",
      features: [
        "Natural language understanding",
        "Code generation & debugging",
        "Creative writing assistance",
        "API integration capabilities"
      ],
      prompt: "Explain how to optimize React component re-renders",
      color: "#10B981",
      bgColor: "bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      stats: { accuracy: "94%", speed: "1.2s", users: "100M+" }
    },
    {
      name: "DeepSeek",
      fullName: "DeepSeek AI",
      company: "DeepSeek",
      logo: deepseekLogo,
      icon: <FaBrain className="text-2xl" />,
      description: "Cutting-edge AI with exceptional reasoning capabilities and deep technical analysis.",
      features: [
        "Advanced mathematical reasoning",
        "Code optimization expert",
        "Deep technical documentation",
        "Multi-language support"
      ],
      prompt: "Write an efficient algorithm for binary tree traversal",
      color: "#06B6D4",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      stats: { accuracy: "96%", speed: "0.9s", users: "50M+" }
    },
    {
      name: "Perplexity",
      fullName: "Perplexity AI",
      company: "Perplexity",
      logo: perplexityLogo,
      icon: <FaSearch className="text-2xl" />,
      description: "AI-powered search and research assistant with real-time information retrieval.",
      features: [
        "Real-time web search",
        "Citation & source tracking",
        "Research summarization",
        "Fact verification system"
      ],
      prompt: "Find latest trends in full-stack development 2024",
      color: "#A855F7",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      stats: { accuracy: "92%", speed: "0.7s", users: "30M+" }
    },
    {
      name: "Claude AI",
      fullName: "Claude 3",
      company: "Anthropic",
      logo: claudeLogo,
      icon: <FaComments className="text-2xl" />,
      description: "Constitutional AI focused on safe, helpful, and nuanced conversations with large context window.",
      features: [
        "200K context window",
        "Nuanced understanding",
        "Safe & ethical AI",
        "Document analysis"
      ],
      prompt: "Analyze this code for security vulnerabilities",
      color: "#F97316",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
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

  const handleImageError = (toolName) => {
    setImageErrors(prev => ({ ...prev, [toolName]: true }));
  };

  return (
    <section className={`relative transition-colors duration-300 ${
      darkMode ? "bg-[#0A0A0F]" : "bg-gray-50"
    } py-24 px-6 md:px-16`}>
      <div className="relative max-w-7xl mx-auto">
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
            <FaRobot className="text-cyan-400 text-sm" />
            <span className={`text-sm font-mono ${darkMode ? "text-gray-400" : "text-gray-600"}`}>AI Tools Integration</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
          >
            AI Tools I
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              Master Daily
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className={`text-base leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Leveraging cutting-edge AI to enhance productivity, creativity, and problem-solving
          </motion.p>
        </div>

        {/* AI Tools Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {aiTools.map((tool, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveAI(index)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm border ${
                activeAI === index
                  ? `bg-gradient-to-r ${darkMode ? `from-${tool.color.split('-')[1]}-500/20 to-${tool.color.split('-')[1]}-500/10` : 'from-gray-100 to-black'} border-${tool.color.split('-')[1]}-500/50 text-white`
                  : darkMode
                    ? 'bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10'
                    : 'bg-gray-100 border-gray-200 text-gray-600 hover:text-gray-900 hover:bg-gray-200'
              }`}
              style={{
                ...(activeAI === index && { borderColor: tool.color, boxShadow: darkMode ? `0 0 20px ${tool.color}20` : `0 0 20px ${tool.color}10` })
              }}
            >
              <div className="flex items-center gap-2">
                <span className="text-lg">{tool.icon}</span>
                <span className="text-sm">{tool.name}</span>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active AI Showcase */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAI}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className={`rounded-2xl border overflow-hidden ${
              darkMode
                ? "bg-white/5 border-white/10"
                : "bg-white border-gray-200 shadow-sm"
            }`}
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - AI Info */}
              <div className={`p-8 ${darkMode ? "border-r border-white/10" : "border-r border-gray-200"}`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl border flex items-center justify-center overflow-hidden p-2 ${
                    darkMode
                      ? "bg-white/10 border-white/10"
                      : "bg-gray-100 border-gray-200"
                  }`}>
                    {!imageErrors[aiTools[activeAI].name] ? (
                      <img 
                        src={aiTools[activeAI].logo} 
                        alt={aiTools[activeAI].name}
                        className="w-full h-full object-contain"
                        onError={() => handleImageError(aiTools[activeAI].name)}
                      />
                    ) : (
                      <div className="text-2xl text-cyan-400">
                        {aiTools[activeAI].icon}
                      </div>
                    )}
                  </div>
                  <div>
                    <h3 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                      {aiTools[activeAI].fullName}
                    </h3>
                    <p className={`text-sm ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                      {aiTools[activeAI].company}
                    </p>
                  </div>
                </div>

                <p className={`leading-relaxed mb-6 text-sm ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                  {aiTools[activeAI].description}
                </p>

                <div className="space-y-2 mb-6">
                  {aiTools[activeAI].features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-center gap-2"
                    >
                      <FaCheckCircle className="text-cyan-400 text-xs" />
                      <span className={`text-sm ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Stats */}
                <div className={`grid grid-cols-3 gap-3 pt-4 border-t ${darkMode ? "border-white/10" : "border-gray-200"}`}>
                  {Object.entries(aiTools[activeAI].stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className={`text-lg font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>
                        {value}
                      </div>
                      <div className={`text-[10px] uppercase tracking-wider ${darkMode ? "text-gray-500" : "text-gray-500"}`}>
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side - Live Prompt Demo */}
              <div className={`p-8 ${darkMode ? "bg-black/30" : "bg-gray-50"}`}>
                <div className="mb-4">
                  <h4 className={`text-sm font-semibold mb-3 font-mono ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Live Demo
                  </h4>
                  <div className={`rounded-xl border overflow-hidden ${
                    darkMode
                      ? "bg-black/50 border-white/10"
                      : "bg-white border-gray-200"
                  }`}>
                    {/* Terminal Header */}
                    <div className={`flex items-center gap-2 px-4 py-2.5 border-b ${
                      darkMode
                        ? "bg-white/5 border-white/10"
                        : "bg-gray-50 border-gray-200"
                    }`}>
                      <div className="flex gap-1.5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                      </div>
                      <span className={`text-[10px] font-mono ml-2 ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                        {aiTools[activeAI].name.toLowerCase()}@ai:~$
                      </span>
                    </div>

                    {/* Terminal Content */}
                    <div className="p-4 font-mono text-xs">
                      <div className="flex items-start gap-2 mb-3">
                        <span className="text-green-400">$</span>
                        <span className="text-cyan-400">prompt</span>
                        <span className="text-gray-500">"</span>
                        <span className={darkMode ? "text-white" : "text-gray-900"}>{typedText}</span>
                        {isTyping && (
                          <span className="w-1.5 h-3.5 bg-cyan-400 animate-pulse ml-0.5" />
                        )}
                        <span className="text-gray-500">"</span>
                      </div>

                      {!isTyping && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className={`mt-3 pt-3 border-t ${darkMode ? "border-white/10" : "border-gray-200"}`}
                        >
                          <div className="flex items-start gap-2">
                            <span className="text-purple-400 shrink-0">{aiTools[activeAI].name.toLowerCase()}&gt;</span>
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                                <span className={`text-[10px] ${darkMode ? "text-gray-500" : "text-gray-400"}`}>
                                  Response generated
                                </span>
                              </div>
                              <div className={`text-[11px] leading-relaxed whitespace-pre-wrap ${
                                darkMode ? "text-gray-400" : "text-gray-600"
                              }`}>
                                {activeAI === 0 && "💡 React components re-render when state or props change. To optimize: use memo(), useCallback(), and avoid inline functions in JSX. This reduces unnecessary re-renders and improves performance."}
                                {activeAI === 1 && "💡 def inorder_traversal(root):\n    return inorder_traversal(root.left) + [root.val] + inorder_traversal(root.right) if root else []\n\nTime Complexity: O(n) | Space Complexity: O(h)"}
                                {activeAI === 2 && "💡 According to recent data, top full-stack trends for 2024:\n• Serverless architecture adoption +45%\n• Edge computing implementation +38%\n• WebAssembly integration +42%"}
                                {activeAI === 3 && "💡 Security Analysis Complete:\n✓ Found 2 medium-risk vulnerabilities\n→ SQL injection risk in user input\n→ XSS vulnerability in comment section\n✓ Recommended fixes provided"}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Integration Note */}
                <div className={`flex items-center gap-3 p-3 rounded-lg border ${
                  darkMode
                    ? "bg-white/5 border-white/10"
                    : "bg-gray-100 border-gray-200"
                }`}>
                  <FaCode className="text-cyan-400 text-sm shrink-0" />
                  <p className={`text-xs ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
                    Seamlessly integrated into my development workflow for faster prototyping and problem-solving
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <p className={`text-xs font-mono ${darkMode ? "text-gray-600" : "text-gray-400"}`}>
            {`< Currently integrated with VS Code / API / Daily Workflow />`}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default AITechStack;