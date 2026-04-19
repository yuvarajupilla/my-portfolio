import { useState, useEffect } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "#" },
    { label: "About Me", href: "#about" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#projects" },
    { label: "Pages", href: "#" },
    { label: "Contact", href: "#contact" },
  ];

  // 🔒 Lock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <nav className="w-full absolute top-0 left-0 z-50">

      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* 🔵 LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-black font-bold">
            Y
          </div>
          <span className="text-white text-xl font-medium">
            Yuvaraju
          </span>
        </div>

        {/* 🔴 DESKTOP MENU (UNCHANGED) */}
        <ul className="hidden md:flex items-center gap-10 text-sm text-gray-300">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-white transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 🟢 BUTTON (UNCHANGED) */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-5 py-2 border border-violet-500 text-white rounded-full text-sm hover:border-white transition"
        >
          Start Project →
        </a>

        {/* 📱 TOGGLE BUTTON (Hamburger ↔ X) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 z-50 relative"
        >
          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 
            ${isOpen ? "rotate-45" : "-translate-y-2"}`}
          ></span>

          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 
            ${isOpen ? "opacity-0" : "opacity-100"}`}
          ></span>

          <span
            className={`absolute w-6 h-[2px] bg-white transition-all duration-300 
            ${isOpen ? "-rotate-45" : "translate-y-2"}`}
          ></span>
        </button>
      </div>

      {/* 📱 MOBILE MENU */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-black z-40 transform transition-transform duration-500 ease-in-out
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >

        <div className="px-8 pt-24 pb-20">

          {/* MENU ITEMS */}
          <ul className="flex flex-col gap-8 text-white text-2xl">

            {navLinks.map((link, index) => (
              <li
                key={link.label}
                className={`menu-item ${isOpen ? "show" : ""}`}
                style={{
                  transitionDelay: `${index * 200 + 200}ms`,
                }}
              >
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block hover:text-violet-400 transition"
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
              onClick={() => setIsOpen(false)}
              className="inline-block px-6 py-3 border border-violet-500 text-white rounded-full text-sm"
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