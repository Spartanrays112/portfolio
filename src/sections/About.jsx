import { motion } from "framer-motion";
import { useRef } from "react";

function About() {
  const containerRef = useRef(null);

  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript", "HTML/CSS", "Tailwind CSS"],
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "group-hover:border-blue-500/50",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 21h6l-.75-4M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "JWT Auth", "REST APIs"],
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "group-hover:border-purple-500/50",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      title: "Tools & Others",
      skills: ["TypeScript", "Git", "Postman", "pnpm", "REST API"],
      color: "from-orange-500/20 to-red-500/20",
      borderColor: "group-hover:border-orange-500/50",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen bg-slate-950 text-white overflow-hidden py-24 md:py-36"
    >
      {/* BACKGROUND (KEEPING AS IS) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[120px] -translate-x-1/2" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-600/5 rounded-full blur-[120px] translate-x-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-10 items-end mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-purple-500/50" />
                <p className="text-sm font-bold uppercase tracking-[0.4em] text-purple-400">Profile</p>
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9]">
                Full Stack <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Developer</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:pb-2"
            >
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-md">
                Dedicated to crafting high-performance digital solutions with a focus on scalability and user-centric design.
              </p>
            </motion.div>
          </div>

          {/* Main Bento Grid */}
          <div className="grid lg:grid-cols-12 gap-6">
            
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="lg:col-span-8 group relative p-8 md:p-12 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] backdrop-blur-md overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14H17.017C14.8079 14 13.017 12.2091 13.017 10V5H21.017V10C21.017 11.1046 20.1216 12 19.017 12H17.017V14H19.017C21.2261 14 23.017 15.7909 23.017 18V21H14.017ZM1.017 21L1.017 18C1.017 16.8954 1.91238 16 3.017 16H6.017V14H4.017C1.80786 14 0.017 12.2091 0.017 10V5H8.017V10C8.017 11.1046 7.12157 12 6.017 12H4.017V14H6.017C8.22614 14 10.017 15.7909 10.017 18V21H1.017Z" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-white">The Vision</h3>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
                Specializing in the <span className="text-white font-semibold">MERN stack</span>, I transform complex business logic into intuitive, high-performance web applications. I believe that great software is the bridge between human needs and technical possibilities.
              </p>
              <p className="text-gray-500 text-base leading-relaxed">
                As a developer, I am constantly exploring new patterns and architectural styles to ensure my solutions are not just functional, but future-proof. From database optimization to frontend performance, I handle the full lifecycle of product development with precision.
              </p>
            </motion.div>

            {/* Resume / CTA Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-4 p-8 rounded-[2.5rem] bg-gradient-to-br from-purple-600 to-pink-600 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Work With Me</h3>
                <p className="text-white/80 text-sm">Let's build something extraordinary together.</p>
              </div>
              <a
                href="/images/yash_resume_16_may_2026.pdf"
                download
                className="mt-10 flex items-center justify-between bg-white text-black p-5 rounded-2xl font-bold transition-transform group-hover:scale-[1.02]"
              >
                Download CV
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </a>
            </motion.div>

            {/* Skill Categories */}
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="lg:col-span-4 group h-full"
              >
                <div className={`relative h-full p-8 rounded-[2.5rem] bg-white/[0.02] border border-white/[0.08] transition-all duration-500 ${cat.borderColor} overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-white/90">{cat.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-400 group-hover:text-white transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;