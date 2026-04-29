import { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";

import logo from "../assets/logo.png";
import whiteLogo from "../assets/wlogo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const { darkMode } = useTheme();

  const navLinks = [
    { label: "Home", href: "home" },
    { label: "About", href: "about" },
    { label: "Services", href: "services" },
    { label: "Work", href: "work" },
    { label: "Projects", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.getElementById("home");
      if (!hero) return;

      const bottom = hero.offsetTop + hero.offsetHeight;
      setIsFixed(window.scrollY + 80 >= bottom);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`w-full left-0 z-50 transition-all duration-300 ${
          isFixed
            ? darkMode
              ? "fixed top-0 bg-black/90 backdrop-blur-md shadow-md"
              : "fixed top-0 bg-white/90 backdrop-blur-md shadow-md"
            : "absolute top-0 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 md:h-20 flex items-center justify-between">

          {/* LOGO (FIXED SIZE ISSUE) */}
          <a
            href="#home"
            onClick={(e) => handleScrollTo(e, "home")}
            className="flex items-center"
          >
            <img
              src={darkMode ? logo : whiteLogo}
              alt="Logo"
              className="h-28 md:h-14 lg:h-40 w-auto object-contain"
            />
          </a>

          {/* MENU */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={`#${link.href}`}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`text-sm font-medium transition ${
                    isFixed
                      ? darkMode
                        ? "text-gray-300 hover:text-violet-400"
                        : "text-gray-800 hover:text-violet-600"
                      : "text-white hover:text-violet-400"
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* RIGHT SIDE */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />

            {/* ⭐ START PROJECT (RESTORED) */}
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "contact")}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                isFixed
                  ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:scale-105"
                  : "border border-violet-400 text-white hover:bg-violet-500 hover:scale-105"
              }`}
            >
              Start Project
              <span>→</span>
            </a>

            {/* 📄 DOWNLOAD RESUME */}
            <a
              href="/resume.pdf"
              download
              className="px-5 py-2 rounded-full text-sm font-medium border border-violet-400 text-white hover:bg-violet-500 hover:scale-105 transition-all duration-300"
            >
              Resume
            </a>
          </div>

          {/* MOBILE */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="w-7 h-7 relative"
            >
              <span className={`absolute w-5 h-0.5 transition ${
  darkMode || !isFixed ? "bg-white" : "bg-black"
} ${isOpen ? "rotate-45" : "-translate-y-1.5"}`} />

<span className={`absolute w-5 h-0.5 transition ${
  darkMode || !isFixed ? "bg-white" : "bg-black"
} ${isOpen ? "opacity-0" : ""}`} />

<span className={`absolute w-5 h-0.5 transition ${
  darkMode || !isFixed ? "bg-white" : "bg-black"
} ${isOpen ? "-rotate-45" : "translate-y-1.5"}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <div
  className={`md:hidden fixed inset-0 ${
    darkMode 
      ? "bg-gradient-to-br from-black to-gray-900" 
      : "bg-white"
  } z-40 transition-transform duration-500 ease-out ${
    isOpen ? "translate-x-0" : "translate-x-full"
  }`}
>
  <div className="flex flex-col h-full overflow-y-auto">

    {/* HEADER (UNCHANGED STYLE) */}
    <div className={`px-6 pt-20 pb-6 border-b ${
      darkMode ? "border-violet-500/20" : "border-gray-200"
    }`}>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
        <span className={`text-xs font-mono ${darkMode ? "text-green-400" : "text-green-600"}`}>
          status: online
        </span>
      </div>

      <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
        Connect Now
      </h2>

      <p className={`text-sm mt-1 font-mono ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
        &lt; Let's build something amazing /&gt;
      </p>
    </div>

    {/* NAV LINKS (UNCHANGED) */}
    <div className="flex-1 px-6 py-8">
      <ul className="space-y-4">
        {navLinks.map((link, index) => (
          <li key={link.label}>
            <a
              href={`#${link.href}`}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="flex items-center justify-between group"
            >
              <span className={`text-xl font-medium ${
                darkMode 
                  ? "text-white group-hover:text-violet-400" 
                  : "text-gray-900 group-hover:text-violet-600"
              }`}>
                {link.label}
              </span>
              <span className="text-violet-500 opacity-0 group-hover:opacity-100">→</span>
            </a>
            <div className={`w-full h-px mt-2 ${darkMode ? "bg-gray-800" : "bg-gray-200"}`} />
          </li>
        ))}
      </ul>

      {/* CONTACT BUTTON */}
      <div className="mt-10">
        <a
          href="#contact"
          onClick={(e) => handleScrollTo(e, "contact")}
          className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-xl"
        >
          Contact Now
        </a>
      </div>

      {/* ✅ RESUME BUTTON (ADDED ONLY) */}
      <div className="mt-4">
        <a
          href="/resume.pdf"
          download
          className={`flex items-center justify-center gap-2 w-full px-6 py-3 border rounded-xl ${
            darkMode 
              ? "border-violet-500 text-violet-400 hover:bg-violet-500/10" 
              : "border-violet-600 text-violet-600 hover:bg-violet-500/10"
          }`}
        >
          Download Resume
        </a>
      </div>
    </div>

    {/* ✅ UPDATED SOCIAL LINKS ONLY */}
    <div className={`px-6 py-6 border-t ${
      darkMode ? "border-violet-500/20" : "border-gray-200"
    }`}>
      <p className="text-gray-500 text-xs font-mono mb-4 text-center">find_me_on</p>

      <div className="flex justify-center gap-6 text-xl">
        <a href="https://github.com/yuvarajupilla" target="_blank" className="hover:text-violet-400">
          <i className="fab fa-github"></i>
        </a>

        <a href="https://www.linkedin.com/in/yuvarajupilla/" target="_blank" className="hover:text-violet-400">
          <i className="fab fa-linkedin"></i>
        </a>

        <a href="https://www.instagram.com/yuvaraju___p" target="_blank" className="hover:text-violet-400">
          <i className="fab fa-instagram"></i>
        </a>

        <a href="https://wa.me/919885988059" target="_blank" className="hover:text-green-400">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>

  </div>
</div>
    </>
  );
}

export default Navbar;