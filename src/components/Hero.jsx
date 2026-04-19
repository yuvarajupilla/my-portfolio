import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import herobg from "../assets/herobg.png";

function Hero() {
  const [opacity, setOpacity] = useState(0.3);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const newOpacity = Math.min(0.7, 0.3 + scrollY / 500);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* 🔥 Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${herobg})` }}
      />

      {/* 🔥 Overlay */}
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          background: `linear-gradient(
            to right,
            rgba(0,0,0,0.95),
            rgba(0,0,0,${opacity}),
            rgba(0,0,0,0.9)
          )`,
        }}
      />

      {/* 🔷 MAIN CONTENT - Added padding-top to account for fixed navbar */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 flex flex-col justify-center min-h-screen pt-20 md:pt-0">
        
        {/* Added mt-0 md:mt-0 to ensure proper alignment */}
        <div className="flex flex-col md:grid md:grid-cols-3 w-full items-start md:items-center gap-10 mt-0">

          {/* 🔵 LEFT TEXT */}
          <div>
            <h1 className="text-[42px] sm:text-[60px] md:text-[130px] font-bold leading-none text-white">
              Build
            </h1>

            <h1 className="text-[42px] sm:text-[60px] md:text-[130px] font-bold leading-none stroke-text">
              Digital
            </h1>

            <h1 className="text-[42px] sm:text-[60px] md:text-[130px] font-bold leading-none text-white">
              Futures
            </h1>
          </div>

          {/* CENTER SPACE */}
          <div className="hidden md:block"></div>

          {/* 🔴 RIGHT CONTENT */}
          <div className="w-full md:w-auto">

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold text-white mb-6 leading-tight">
              Innovate. Develop. <br />
              Succeed. Fast.
            </h2>

            <p className="text-gray-400 max-w-full md:max-w-md mb-8 leading-relaxed">
              I'm a Full Stack Developer focused on building scalable,
              high-performance web applications using modern technologies.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">

              <a
                href="#projects"
                className="px-6 py-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition text-center"
              >
                Get Started
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-violet-500 text-violet-500 rounded-full hover:bg-violet-500 hover:text-white transition text-center"
              >
                My Work
              </a>

            </div>

            {/* NAME */}
            <div className="flex items-center gap-2 text-gray-400 text-sm mb-10 md:mb-0">
              <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
              <p>Yuvaraju — Full Stack Developer</p>
            </div>

          </div>

        </div>

        {/* 🔽 MOBILE ONLY EXTRA CONTENT */}
        <div className="md:hidden mt-10 space-y-8">

          {/* LEFT INFO */}
          <div className="flex items-start gap-4 text-gray-400">
            <div className="w-[2px] h-12 bg-violet-500"></div>
            <p>
              Passionate about building scalable and modern web applications.
            </p>
          </div>

          {/* SOCIAL LINKS */}
          <div className="flex flex-col gap-6 text-gray-300">

            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-violet-400 transition-colors"
            >
              <div className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center">
                <FaGithub />
              </div>
              <span>GitHub</span>
            </a>

            <a 
              href="https://dribbble.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-violet-400 transition-colors"
            >
              <div className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center">
                <FaDribbble />
              </div>
              <span>Dribbble</span>
            </a>

            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:text-violet-400 transition-colors"
            >
              <div className="w-10 h-10 border border-gray-700 rounded-lg flex items-center justify-center">
                <FaLinkedin />
              </div>
              <span>LinkedIn</span>
            </a>

          </div>

        </div>

      </div>

      {/* 🔻 DESKTOP BOTTOM LEFT */}
      <div className="hidden md:flex absolute bottom-10 left-6 md:left-16 items-start gap-4 text-gray-400 max-w-sm">

        <div className="w-[2px] h-12 bg-violet-500"></div>

        <p>
          Passionate about building scalable and modern web applications.
        </p>

      </div>

      {/* 🔻 DESKTOP BOTTOM RIGHT */}
      <div className="hidden md:flex absolute bottom-10 right-6 md:right-16 gap-8 items-center text-gray-400">

        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-violet-400 transition-colors cursor-pointer"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a 
          href="https://dribbble.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-violet-400 transition-colors cursor-pointer"
        >
          <FaDribbble />
          <span>Dribbble</span>
        </a>

        <a 
          href="https://linkedin.com/in/yourusername" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-violet-400 transition-colors cursor-pointer"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

      </div>

      {/* 🔥 Bottom Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-transparent to-black pointer-events-none" />

    </section>
  );
}

export default Hero;