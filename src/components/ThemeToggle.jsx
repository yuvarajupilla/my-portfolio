import { motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-gray-200 dark:bg-white/10 backdrop-blur-sm border border-gray-300 dark:border-white/20 hover:border-cyan-500/50 transition-all duration-300 flex items-center justify-center overflow-hidden"
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        initial={false}
        animate={{
          y: darkMode ? 0 : 40,
          opacity: darkMode ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <FaMoon className="text-gray-800 dark:text-cyan-400 text-lg" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          y: darkMode ? -40 : 0,
          opacity: darkMode ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="absolute"
      >
        <FaSun className="text-yellow-500 text-lg" />
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;