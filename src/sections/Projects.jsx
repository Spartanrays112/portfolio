import { motion } from "framer-motion";

function Projects() {
    const projects = [
        {
            title: "Smart Hospitality Hub",
            image: "/images/hotel.PNG",
            description:
                "A modern full-stack hotel booking platform with role-based authentication, room and event booking, Razorpay payments, Cloudinary uploads, and admin/manager dashboards.",
            tech: [
                "React",
                "Node.js",
                "Express",
                "MongoDB",
                "JWT",
                "Razorpay",
                "Cloudinary",
            ],
            github:
                "https://github.com/Spartanrays112/smart-hospitality-hub.git",
        },
        {
            title: "Task Management Dashboard",
            image: "/images/dashboardmanagment.PNG",
            description:
                "A full-stack task management application built with Next.js, Express.js, and MySQL featuring task scheduling, user management, RESTful APIs, responsive dashboards, and seamless frontend-backend integration for efficient workflow management.",
            tech: [
                "Next.js",
                "React",
                "Node.js",
                "Express.js",
                "MySQL",
                "REST API",
                "TypeScript",
                "pnpm",
            ],
            github: "https://github.com/yourusername/task-management-dashboard",
        },
        {
            title: "Movie Hub",
            image: "/images/movie.PNG",
            description:
                "A full-stack movie tracking platform with JWT authentication, personalized watchlists, protected routes, movie management features, and responsive UI built using React, Express.js, and MongoDB.",
            tech: [
                "React",
                "Tailwind CSS",
                "Framer Motion",
                "Node.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "JWT",
                "Axios",
            ],
            github: "https://github.com/Spartanrays112/movie-hub.git",
        },
        {
            title: "Social Media Platform",
            image: "/images/socialmedia.PNG",
            description:
                "A full-stack social media application with JWT authentication, user profiles, post creation, likes, comments, follow system, and image uploads using a responsive React frontend and Node.js backend.",
            tech: [
                "React",
                "Vite",
                "Node.js",
                "Express",
                "MySQL",
                "JWT",
                "Axios",
                "Multer",
            ],
            github:
                "https://github.com/Spartanrays112/social-media-platform.git",
        },
    ];

    return (
        <section
            id="projects"
            className="bg-slate-950 text-white px-6 py-20 md:py-28 overflow-hidden"
        >
            <div className="max-w-4xl mx-auto relative z-10">
                {/* Minimal Heading */}
                <div className="mb-14">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="w-8 h-[1px] bg-purple-500" />
                        <p className="text-[10px] uppercase tracking-[0.6em] text-purple-400 font-bold">
                            Featured
                        </p>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black tracking-tight"
                    >
                        Selected <span className="text-gray-500">Works</span>
                    </motion.h2>
                </div>

                {/* Tight 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-white/[0.02] border border-white/[0.06] rounded-[2rem] overflow-hidden hover:bg-white/[0.04] hover:border-purple-500/30 transition-all duration-300 shadow-2xl"
                        >
                            {/* Smaller Image */}
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
                                
                                {/* Github Link */}
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300"
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.39c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.34-1.75-1.34-1.75-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.08 1.84 2.82 1.31 3.5 1 .1-.79.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.31-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.4 11.4 0 016 0c2.28-1.55 3.29-1.23 3.29-1.23.67 1.65.25 2.86.13 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Content */}
                            <div className="p-7">
                                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-[13px] leading-relaxed mb-6 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((item, i) => (
                                        <span
                                            key={i}
                                            className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider rounded-lg bg-white/5 text-purple-300 border border-white/5"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;