"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiGithub, FiStar } from "react-icons/fi";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Chanty",
      description:
        "Real-time chat platform with AI bot integration, user authentication, and media sharing capabilities built with modern tech stack.",
      image: "/chanty.png",
      category: "fullstack",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      liveUrl: "https://dev-chatttapp.netlify.app/",
      githubUrl: "https://github.com/Deva1502/chatt",
      featured: true,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Spark",
      description:
        "Social media platform enabling real-time user connections, post sharing, and interactive engagement.",
      image: "/spark.png",
      category: "frontend",
      technologies: ["React", "Node.js", "Shadecn", "Socket.io", "MongoDB"],
      liveUrl: "https://spark-main-tawny.vercel.app/",
      githubUrl: "https://github.com/Deva1502/SPARK-main",
      featured: true,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Job Portal",
      description:
        "Comprehensive job platform connecting seekers with employers, featuring listings, applications, and profiles.",
      image: "/jb.png",
      category: "fullstack",
      technologies: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "shadeCn UI",
      ],
      liveUrl: "https://job-portal-dev.netlify.app/",
      githubUrl: "https://github.com/Deva1502/JobPortal",
      featured: false,
      gradient: "from-orange-500 to-red-500",
    },
    {
      id: 4,
      title: "Retail Management System",
      description:
        "A comprehensive solution for managing retail operations, including inventory, sales, and customer relationships.",
      image: "/retail-dashboard.png",
      category: "fullstack",
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      liveUrl: "https://trustateproj.netlify.app/",
      githubUrl: "https://github.com/Deva1502/TruState-Project",
      featured: false,
      gradient: "from-green-500 to-emerald-500",
    },
    {
      id: 5,
      title: "Expense Tracker",
      description:
        "An intuitive application for tracking personal finances, analyzing spending habits, and setting budgets.",
      image: "/smart-finance.png",
      category: "frontend",
      technologies: ["Vue.js", "Firebase", "Tailwind CSS", "Chart.js"],
      liveUrl: "https://devsmartexpensetracker.netlify.app/",
      githubUrl: "https://github.com/Deva1502/Smart-Expense-Tracker",
      featured: false,
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  const filters = [
    { key: "all", label: "All Projects", icon: "🎯" },
    { key: "fullstack", label: "Full Stack", icon: "⚡" },
    { key: "frontend", label: "Frontend", icon: "🎨" },
    { key: "backend", label: "Backend", icon: "⚙️" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-24 bg-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg shadow-cyan-500/50"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              💼 My Work
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Showcasing innovative solutions built with modern technologies
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.key}
                onClick={() => setActiveFilter(filter.key)}
                className={`px-8 py-3 rounded-xl font-bold transition-all duration-300 ${activeFilter === filter.key
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
                  }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{filter.icon}</span>
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative"
                >
                  {/* Card */}
                  <div className="relative bg-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 border border-gray-700 hover:border-cyan-500 h-full">
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4 z-20">
                        <motion.div
                          className="flex items-center gap-1 px-3 py-1.5 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full text-xs font-bold shadow-lg"
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <FiStar className="text-sm" />
                          Featured
                        </motion.div>
                      </div>
                    )}

                    {/* Project Image */}
                    <div className="relative h-56 overflow-hidden bg-gray-900">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${project.gradient} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center gap-4`}
                      >
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white rounded-full text-gray-900 shadow-lg"
                          whileHover={{ scale: 1.2, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiExternalLink className="text-xl" />
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white rounded-full text-gray-900 shadow-lg"
                          whileHover={{ scale: 1.2, rotate: -5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <FiGithub className="text-xl" />
                        </motion.a>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 mb-4 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-lg text-xs font-medium hover:bg-cyan-500 hover:text-white transition-all border border-gray-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* View More Button */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="https://github.com/Deva1502"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold shadow-xl shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiGithub className="text-xl" />
              View More on GitHub
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
