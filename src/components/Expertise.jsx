function Expertise() {
  return (
    <section className="bg-black text-white py-24 md:py-32 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-start">

          {/* 🔵 LEFT SIDE */}
          <div className="flex flex-col gap-6">

            {/* LABEL */}
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-violet-500 rounded-full"></span>
              <p className="text-gray-400 text-sm tracking-wide uppercase">
                My Core Expertise
              </p>
            </div>

            {/* OPTIONAL SMALL HEADING (adds weight on desktop) */}
            <h3 className="text-xl md:text-2xl font-medium text-white leading-snug max-w-sm">
              Crafting scalable and modern web experiences
            </h3>

          </div>

          {/* 🔴 RIGHT SIDE */}
          <div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed text-gray-200 max-w-2xl">

              I build full stack web applications from frontend to backend,
              integrating modern UI with scalable server-side architecture.
              Every project focuses on performance, clean code, and real-world usability.

            </h2>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Expertise;