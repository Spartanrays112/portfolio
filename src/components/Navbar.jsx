// function Navbar() {
//   return (
//     <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-800">

//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

//         {/* Logo */}
//         <h1 className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-600 text-transparent bg-clip-text cursor-pointer">
//           Yash Vasiyar
//         </h1>

//         {/* Links */}
//         <ul className="flex gap-8 text-gray-300 font-medium">

//           {["Home", "About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
//             <li key={item} className="relative group cursor-pointer">

//               <a
//                 href={`#${item.toLowerCase()}`}
//                 className="hover:text-white transition"
//               >
//                 {item}
//               </a>

//               {/* Underline Animation */}
//               <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-violet-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
//             </li>
//           ))}

//         </ul>

//       </div>
//     </nav>
//   );
// }



// export default Navbar
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Fallback to home when at the very top
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active section auto-detection
  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

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

  const handleNavClick = (e, id) => {
    if (e) e.preventDefault();
    setActiveSection(id);
    customSmoothScroll(id);
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
          ? "bg-slate-950/80 backdrop-blur-2xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 md:px-8 py-4 md:py-5">
        {/* Logo */}
        <motion.a
          href="#home"
          className="relative group"
          onClick={(e) => handleNavClick(e, "home")}
        >
          <div className="text-xl md:text-2xl font-black tracking-tight">
            <span className="bg-gradient-to-r from-purple-300 via-purple-400 to-pink-300 text-transparent bg-clip-text">
              Yash Vasiyar
            </span>
          </div>
          <motion.div
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400"
            initial={{ width: 0 }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-full px-1.5 py-1.5">
          {navItems.map((item, idx) => (
            <motion.button
              key={item.id}
              onClick={(e) => handleNavClick(e, item.id)}
              className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${activeSection === item.id
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
                }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
            >
              {/* Active pill indicator */}
              {activeSection === item.id && (
                <motion.div
                  className="absolute inset-0 bg-white/[0.08] border border-white/[0.1] rounded-full -z-10"
                  layoutId="activeNav"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </motion.button>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <motion.a
          href="#contact"
          onClick={(e) => handleNavClick(e, "contact")}
          className="hidden md:block px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-lg shadow-purple-500/15 relative overflow-hidden group"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">Get In Touch</span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
            initial={{ scale: 0 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 group z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.span
            className="w-6 h-0.5 bg-gray-300 rounded-full"
            animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gray-300 rounded-full"
            animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="w-6 h-0.5 bg-gray-300 rounded-full"
            animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-slate-950/95 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl md:hidden flex flex-col items-center py-8 gap-6"
          >
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={(e) => {
                  handleNavClick(e, item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`text-xl font-medium transition-colors ${
                  activeSection === item.id ? "text-white" : "text-gray-400"
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
            
            <motion.a
              href="#contact"
              onClick={(e) => {
                handleNavClick(e, "contact");
                setIsMobileMenuOpen(false);
              }}
              className="mt-4 px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg shadow-purple-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;