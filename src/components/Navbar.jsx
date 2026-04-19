import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const navLinks = [
    { label: "Home", href: "home" },
    { label: "About Me", href: "about" },
    { label: "Services", href: "services" },
    { label: "Portfolio", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  // 🔒 Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Handle scroll - check if hero is completely out of view
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + 80; // 80px is navbar height approx
        
        // If we've scrolled past the hero section
        if (scrollPosition >= heroBottom) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleScroll = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setIsOpen(false);
    }
  };

  return (
    <nav 
      className={`w-full left-0 z-50 transition-all duration-500 ${
        isFixed 
          ? "fixed top-0 bg-gradient-to-r from-black/95 to-gray-900/95 backdrop-blur-md shadow-lg shadow-violet-500/5 border-b border-violet-500/20" 
          : "absolute top-0 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">

        {/* 🔵 LOGO with glow effect */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, "home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-violet-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            <div className="relative w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/30">
              Y
            </div>
          </div>
          <span className={`text-lg md:text-xl font-semibold tracking-tight transition-all duration-300 ${
            isFixed ? "bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent" : "text-white"
          }`}>
            Yuvaraju
          </span>
        </a>

        {/* 🔴 DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className={`relative text-sm font-medium transition-all duration-300 ${
                  isFixed 
                    ? "text-gray-300 hover:text-violet-400" 
                    : "text-white/90 hover:text-violet-300"
                } group`}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-purple-500 transition-all duration-300 group-hover:w-full ${
                  isFixed ? "opacity-100" : "opacity-70"
                }`}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* 🟢 BUTTON */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            isFixed 
              ? "bg-gradient-to-r from-violet-600 to-purple-600 text-white hover:shadow-lg hover:shadow-violet-500/25 hover:scale-105" 
              : "border border-violet-500/50 text-white hover:bg-violet-500/20 hover:border-violet-400 hover:scale-105"
          }`}
        >
          Start Project
          <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        {/* 📱 MOBILE HAMBURGER BUTTON */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-8 h-8 z-50 focus:outline-none"
        >
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <span
              className={`absolute w-6 h-0.5 rounded-full transition-all duration-300 
              ${isOpen ? "rotate-45 bg-white" : "-translate-y-2 bg-white"}`}
            ></span>
            <span
              className={`absolute w-6 h-0.5 rounded-full transition-all duration-300 
              ${isOpen ? "opacity-0" : "opacity-100 bg-white"}`}
            ></span>
            <span
              className={`absolute w-6 h-0.5 rounded-full transition-all duration-300 
              ${isOpen ? "-rotate-45 bg-white" : "translate-y-2 bg-white"}`}
            ></span>
          </div>
        </button>
      </div>

      {/* 📱 MOBILE MENU - Full screen with animation */}
      <div
        className={`fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black z-40 transform transition-all duration-500 ease-out ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex flex-col justify-center min-h-screen px-8 py-20">
          {/* Menu Items */}
          <ul className="space-y-8 mb-12">
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                className={`transform transition-all duration-500 ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <a
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-3xl md:text-4xl font-bold text-white hover:text-violet-400 transition-colors duration-300 block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <div className={`transform transition-all duration-500 delay-500 ${
            isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
            <a
              href="#contact"
              onClick={(e) => {
                handleScroll(e, "contact");
                setIsOpen(false);
              }}
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-full text-lg font-medium hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
            >
              Start Project
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Social Links in Mobile Menu */}
          <div className={`absolute bottom-8 left-0 right-0 flex justify-center gap-6 transform transition-all duration-500 delay-700 ${
            isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.771-.773 1.771-1.729V1.729C24 .774 23.204 0 22.225 0z"/>
              </svg>
            </a>
            <a href="https://dribbble.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-violet-400 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm9.96 10.8c-1.86-.36-4.86-.57-7.8-.45 1.14-2.52 1.98-4.74 2.37-6.3 2.04 1.2 3.6 3 4.5 5.1.36.6.6 1.2.93 1.65zM12 1.8c1.2 0 2.34.24 3.42.66-.48 1.62-1.32 3.84-2.52 6.42-2.7-.18-5.46-.12-8.04.24C5.76 6.36 8.64 1.8 12 1.8zM2.1 12c0-.96.12-1.86.36-2.76 2.88-.42 6.18-.48 9.06-.24-1.02 2.22-1.86 4.68-2.28 7.32-2.7.78-5.1 1.38-7.14 1.56v-5.88zm3.3 8.1c1.56-.24 3.66-.78 5.94-1.5.48 1.5.84 2.88 1.02 4.14-2.28-.6-4.32-1.86-6.96-3.24.06-.12 0-.12 0 0zm8.7 2.22c-.18-1.32-.54-2.7-1.02-4.26 2.7-.96 5.1-2.28 7.02-3.96-.42 2.64-1.86 5.04-4.08 6.72-1.08.84-2.28 1.38-3.6 1.74 1.62.48 2.94.6 4.08.42 1.02-.18 1.98-.54 2.82-1.02-.24.6-.6 1.2-1.02 1.74-1.26 1.44-2.88 2.28-4.68 2.64 0 .06-.06 0-.12 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;