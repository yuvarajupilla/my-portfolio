import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { label: "Home", href: "home" },
    { label: "About Me", href: "about" },
    { label: "Services", href: "services" },
    { label: "Portfolio", href: "projects" },
    { label: "Contact", href: "contact" },
  ];

  // 🔒 Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
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
      setIsOpen(false); // Close mobile menu after click
    }
  };

  return (
    <nav 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-black/90 backdrop-blur-md border-b border-white/10" 
          : "bg-transparent backdrop-blur-none border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* 🔵 LOGO */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, "home")}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 group-hover:scale-110">
            Y
          </div>
          <span className={`text-xl font-medium transition-colors duration-300 ${
            scrolled ? "text-white" : "text-white"
          }`}>
            Yuvaraju
          </span>
        </a>

        {/* 🔴 DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-sm">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={`#${link.href}`}
                onClick={(e) => handleScroll(e, link.href)}
                className={`transition-colors duration-300 ${
                  scrolled 
                    ? "text-gray-300 hover:text-violet-400" 
                    : "text-gray-200 hover:text-violet-300"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 🟢 BUTTON */}
        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className={`hidden md:flex items-center gap-2 px-5 py-2 rounded-full text-sm transition-all duration-300 ${
            scrolled 
              ? "border border-violet-500 text-white hover:bg-violet-500 hover:border-violet-500" 
              : "border border-white/30 text-white hover:border-violet-400 hover:bg-violet-500/20"
          }`}
        >
          Start Project →
        </a>

        {/* 📱 TOGGLE BUTTON (Hamburger ↔ X) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative"
        >
          <span
            className={`absolute w-6 h-[2px] transition-all duration-300 
            ${isOpen ? "rotate-45" : "-translate-y-2"}
            ${scrolled ? "bg-white" : "bg-white"}`}
          ></span>

          <span
            className={`absolute w-6 h-[2px] transition-all duration-300 
            ${isOpen ? "opacity-0" : "opacity-100"}
            ${scrolled ? "bg-white" : "bg-white"}`}
          ></span>

          <span
            className={`absolute w-6 h-[2px] transition-all duration-300 
            ${isOpen ? "-rotate-45" : "translate-y-2"}
            ${scrolled ? "bg-white" : "bg-white"}`}
          ></span>
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-gradient-to-br from-black/95 to-gray-900/95 backdrop-blur-xl z-40 transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="px-8 pt-24 pb-20">
          {/* MENU ITEMS */}
          <ul className="flex flex-col gap-8 text-white text-2xl">
            {navLinks.map((link, index) => (
              <li
                key={link.label}
                className={`transform transition-all duration-500 ${
                  isOpen ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <a
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block hover:text-violet-400 transition-colors duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* BUTTON */}
          <div className="mt-12">
            <a
              href="#contact"
              onClick={(e) => {
                handleScroll(e, "contact");
                setIsOpen(false);
              }}
              className="inline-block px-6 py-3 border border-violet-500 text-white rounded-full text-sm hover:bg-violet-500 hover:border-violet-500 transition-all duration-300"
            >
              Start Project →
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;