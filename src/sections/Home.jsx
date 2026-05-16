// import { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";

// function Home() {
//   const [pos, setPos] = useState({ x: 0, y: 0 });
//   const [isLoading, setIsLoading] = useState(true);
//   const [mouseTarget, setMouseTarget] = useState({ x: 0, y: 0 });
//   const cursorRef = useRef(null);

//   useEffect(() => {
//     // Simulate loading
//     const timer = setTimeout(() => setIsLoading(false), 500);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     const move = (e) => {
//       setPos({ x: e.clientX, y: e.clientY });
//     };

//     const debouncedMove = (e) => {
//       setMouseTarget({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", move);
//     window.addEventListener("mousemove", debouncedMove);

//     return () => {
//       window.removeEventListener("mousemove", move);
//       window.removeEventListener("mousemove", debouncedMove);
//     };
//   }, []);

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.15,
//         delayChildren: 0.3,
//       },
//     },
//   };

//   const wordVariants = {
//     hidden: { opacity: 0, y: 30, scale: 0.95 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       scale: 1,
//       transition: {
//         duration: 0.8,
//         ease: [0.34, 1.56, 0.64, 1], // cubic-bezier for bounce
//       },
//     },
//   };

//   const subtitleVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.9,
//         ease: "easeOut",
//       },
//     },
//   };

//   const buttonVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.8,
//         ease: "easeOut",
//       },
//     },
//     hover: {
//       scale: 1.05,
//       transition: { duration: 0.3 },
//     },
//     tap: {
//       scale: 0.95,
//     },
//   };

//   const glowVariants = {
//     animate: {
//       boxShadow: [
//         "0 0 20px rgba(168, 85, 247, 0.3)",
//         "0 0 40px rgba(168, 85, 247, 0.5)",
//         "0 0 20px rgba(168, 85, 247, 0.3)",
//       ],
//       transition: {
//         duration: 3,
//         repeat: Infinity,
//       },
//     },
//   };

//   const textLines = ["Yash", "Vasiyar"];
//   const subtitleText =
//     "Full Stack Developer building modern and scalable web applications.";

//   if (isLoading) {
//     return null;
//   }

//   return (
//     <section className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden">
//       {/* Premium Cursor */}
//       <motion.div
//         ref={cursorRef}
//         className="fixed top-0 left-0 w-6 h-6 border-2 border-purple-400 rounded-full pointer-events-none z-50 mix-blend-screen"
//         animate={{
//           x: pos.x - 12,
//           y: pos.y - 12,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 500,
//           damping: 28,
//         }}
//       />

//       {/* Inner glow dot */}
//       <motion.div
//         className="fixed top-0 left-0 w-1 h-1 bg-purple-300 rounded-full pointer-events-none z-50"
//         animate={{
//           x: pos.x - 2,
//           y: pos.y - 2,
//         }}
//         transition={{
//           type: "spring",
//           stiffness: 800,
//           damping: 35,
//         }}
//       />

//       {/* Animated Background Orbs - Mason Wong Style */}
//       <div className="absolute inset-0 overflow-hidden">
//         {/* Primary orb */}
//         <motion.div
//           className="absolute w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl"
//           animate={{
//             x: [0, 100, -50, 0],
//             y: [0, 80, -100, 0],
//             scale: [1, 1.1, 0.9, 1],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           style={{
//             top: "10%",
//             left: "20%",
//           }}
//         />

//         {/* Secondary orb */}
//         <motion.div
//           className="absolute w-80 h-80 bg-violet-600 opacity-10 rounded-full blur-3xl"
//           animate={{
//             x: [0, -80, 60, 0],
//             y: [0, -60, 80, 0],
//             scale: [1, 0.95, 1.05, 1],
//           }}
//           transition={{
//             duration: 24,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           style={{
//             bottom: "5%",
//             right: "15%",
//           }}
//         />

//         {/* Accent orb */}
//         <motion.div
//           className="absolute w-64 h-64 bg-pink-600 opacity-8 rounded-full blur-3xl"
//           animate={{
//             x: [0, 60, -40, 0],
//             y: [0, -80, 100, 0],
//           }}
//           transition={{
//             duration: 28,
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//           style={{
//             top: "50%",
//             right: "5%",
//           }}
//         />
//       </div>

//       {/* Content Container */}
//       <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-8">
//         <motion.div
//           className="text-center md:text-left"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           {/* Greeting */}
//           <motion.p
//             className="text-sm md:text-base font-light text-gray-400 tracking-widest mb-8 uppercase"
//             variants={subtitleVariants}
//           >
//             Welcome to my portfolio
//           </motion.p>

//           {/* Main Headline - Staggered Word Animation */}
//           <div className="mb-6">
//             {textLines.map((line, idx) => (
//               <motion.div key={idx} className="overflow-hidden py-1 md:py-2">
//                 <motion.h1
//                   variants={wordVariants}
//                   className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight bg-gradient-to-r from-purple-300 via-purple-400 to-pink-300 text-transparent bg-clip-text"
//                 >
//                   {line}
//                 </motion.h1>
//               </motion.div>
//             ))}
//           </div>

//           {/* Subtitle */}
//           <motion.div
//             variants={subtitleVariants}
//             className="max-w-2xl mb-10 md:mb-12"
//           >
//             <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed">
//               Full Stack Developer building modern and scalable web applications
//               with responsive frontends and secure backend systems using the
//               MERN stack.
//             </p>
//           </motion.div>

//           {/* CTA Buttons */}
//           <motion.div
//             className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start"
//             variants={buttonVariants}
//           >
//             <motion.a
//               href="#projects"
//               className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-white shadow-lg shadow-purple-500/30 relative overflow-hidden group cursor-pointer"
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//             >
//               <span className="relative z-10">View Projects</span>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 -z-10"
//                 initial={{ scale: 0 }}
//                 whileHover={{ scale: 1 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.a>

//             <motion.a
//               href="#contact"
//               className="px-8 py-4 rounded-lg border-2 border-purple-400 text-white font-semibold hover:bg-purple-400/10 transition-colors cursor-pointer relative group"
//               variants={buttonVariants}
//               whileHover="hover"
//               whileTap="tap"
//             >
//               <span className="relative z-10">Contact Me</span>
//               <motion.div
//                 className="absolute inset-0 border-2 border-purple-300 rounded-lg"
//                 initial={{ scale: 0 }}
//                 whileHover={{ scale: 1 }}
//                 transition={{ duration: 0.3 }}
//               />
//             </motion.a>
//           </motion.div>
//         </motion.div>
//       </div>

//       {/* Scroll Indicator */}
//       <motion.div
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
//         animate={{ y: [0, 8, 0] }}
//         transition={{
//           duration: 2,
//           repeat: Infinity,
//         }}
//       >
//         <div className="flex flex-col items-center gap-2">
//           <span className="text-xs text-gray-500 uppercase tracking-widest">
//             Scroll
//           </span>
//           <motion.div
//             className="w-6 h-10 border border-gray-600 rounded-full flex justify-center"
//             animate={{ opacity: [0.5, 1, 0.5] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <motion.div
//               className="w-1 h-2 bg-gray-600 rounded-full mt-2"
//               animate={{ y: [0, 4, 0] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             />
//           </motion.div>
//         </div>
//       </motion.div>
//     </section>
//   );
// }

// export default Home;

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);
  const cursorRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.34, 1.56, 0.64, 1],
      },
    },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 },
    },
    tap: {
      scale: 0.95,
    },
  };

  const textLines = ["Yash", "Vasiyar"];

  const customSmoothScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1200; // Slower duration for a manual feel
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function: easeInOutCubic
      const easing = progress < 0.5 
        ? 4 * progress * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 3) / 2;

      window.scrollTo(0, startPosition + distance * easing);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleScrollToAbout = (e) => {
    if (e) e.preventDefault();
    customSmoothScroll("about");
  };

  const handleScrollToContact = (e) => {
    if (e) e.preventDefault();
    customSmoothScroll("contact");
  };

  if (isLoading) {
    return null;
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-20"
    >
      {/* Premium Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed top-0 left-0 w-6 h-6 border-2 border-purple-400 rounded-full pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: pos.x - 12,
          y: pos.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Inner glow dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 bg-purple-300 rounded-full pointer-events-none z-50"
        animate={{
          x: pos.x - 2,
          y: pos.y - 2,
        }}
        transition={{
          type: "spring",
          stiffness: 800,
          damping: 35,
        }}
      />

      {/* Animated Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-purple-600 opacity-15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, -50, 0],
            y: [0, 80, -100, 0],
            scale: [1, 1.1, 0.9, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: "10%",
            left: "20%",
          }}
        />

        <motion.div
          className="absolute w-80 h-80 bg-violet-600 opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 60, 0],
            y: [0, -60, 80, 0],
            scale: [1, 0.95, 1.05, 1],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            bottom: "5%",
            right: "15%",
          }}
        />

        <motion.div
          className="absolute w-64 h-64 bg-pink-600 opacity-8 rounded-full blur-3xl"
          animate={{
            x: [0, 60, -40, 0],
            y: [0, -80, 100, 0],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: "50%",
            right: "5%",
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-8">
        <motion.div
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p
            className="text-sm md:text-base font-light text-gray-400 tracking-widest mb-8 uppercase"
            variants={subtitleVariants}
          >
            Welcome to my portfolio
          </motion.p>

          {/* Main Headline */}
          <div className="mb-6">
            {textLines.map((line, idx) => (
              <motion.div key={idx} className="overflow-hidden py-1 md:py-2">
                <motion.h1
                  variants={wordVariants}
                  className="text-5xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight bg-gradient-to-r from-purple-300 via-purple-400 to-pink-300 text-transparent bg-clip-text"
                >
                  {line}
                </motion.h1>
              </motion.div>
            ))}
          </div>

          {/* Subtitle */}
          <motion.div
            variants={subtitleVariants}
            className="max-w-2xl mb-10 md:mb-12"
          >
            <p className="text-base md:text-xl text-gray-300 font-light leading-relaxed">
              Full Stack Developer building modern and scalable web applications
              with responsive frontends and secure backend systems using the
              MERN stack.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center md:justify-start"
            variants={buttonVariants}
          >
            <motion.button
              onClick={handleScrollToAbout}
              className="px-8 py-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold text-white shadow-lg shadow-purple-500/30 relative overflow-hidden group cursor-pointer"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Explore My Work</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 -z-10"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.a
              href="#contact"
              onClick={handleScrollToContact}
              className="px-8 py-4 rounded-lg border-2 border-purple-400 text-white font-semibold hover:bg-purple-400/10 transition-colors cursor-pointer relative group"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <span className="relative z-10">Contact Me</span>
              <motion.div
                className="absolute inset-0 border-2 border-purple-300 rounded-lg"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Enhanced */}
      <motion.button
        onClick={handleScrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer hover:opacity-80 transition-opacity"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-500 uppercase tracking-widest font-medium">
            Scroll
          </span>
          <motion.div
            className="w-6 h-10 border border-gray-600 rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 bg-gray-600 rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
}

export default Home;