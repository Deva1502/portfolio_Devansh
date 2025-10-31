"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiJavascript,
} from "react-icons/si";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    languages: {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        { name: "C++", level: 90, color: "from-blue-500 to-blue-600" },
        { name: "C", level: 85, color: "from-gray-500 to-gray-600" },
        { name: "Python", level: 60, color: "from-yellow-500 to-yellow-600" },
        {
          name: "JavaScript",
          level: 85,
          color: "from-yellow-400 to-yellow-500",
        },
        { name: "HTML/CSS", level: 85, color: "from-orange-500 to-red-500" },
      ],
    },
    frontend: {
      title: "Frontend Development",
      icon: "🎨",
      skills: [
        {
          name: "React",
          level: 90,
          color: "from-cyan-500 to-blue-500",
          icon: <FaReact />,
        },
        {
          name: "Next.js",
          level: 65,
          color: "from-gray-700 to-gray-900",
          icon: <SiNextdotjs />,
        },
        {
          name: "TypeScript",
          level: 80,
          color: "from-blue-600 to-blue-700",
          icon: <SiTypescript />,
        },
        {
          name: "Tailwind CSS",
          level: 90,
          color: "from-cyan-400 to-cyan-600",
          icon: <SiTailwindcss />,
        },
        {
          name: "JavaScript",
          level: 95,
          color: "from-yellow-400 to-yellow-500",
          icon: <SiJavascript />,
        },
      ],
    },
    backend: {
      title: "Backend Development",
      icon: "⚙️",
      skills: [
        {
          name: "Node.js",
          level: 85,
          color: "from-green-500 to-green-600",
          icon: <FaNodeJs />,
        },
        {
          name: "Python",
          level: 80,
          color: "from-blue-500 to-yellow-500",
          icon: <FaPython />,
        },
        {
          name: "Express.js",
          level: 85,
          color: "from-gray-600 to-gray-700",
          icon: <SiExpress />,
        },
        {
          name: "MongoDB",
          level: 75,
          color: "from-green-600 to-green-700",
          icon: <SiMongodb />,
        },
        {
          name: "PostgreSQL",
          level: 70,
          color: "from-blue-600 to-blue-700",
          icon: <FaDatabase />,
        },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        {
          name: "Git",
          level: 90,
          color: "from-orange-500 to-red-600",
          icon: <FaGitAlt />,
        },
        {
          name: "Docker",
          level: 10,
          color: "from-blue-500 to-blue-600",
          icon: <FaDocker />,
        },
        { name: "VS Code", level: 95, color: "from-blue-600 to-cyan-500" },
        { name: "AWS", level: 20, color: "from-orange-500 to-yellow-500" },
      ],
    },
  };

  return (
    <section id="skills" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="inline-block px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg shadow-purple-500/50"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              🚀 Technical Arsenal
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              The powerful tools I use to build exceptional digital experiences
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {Object.keys(skillCategories).map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-8 py-4 rounded-xl font-bold transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white border border-gray-700"
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="mr-2">{skillCategories[category].icon}</span>
                {skillCategories[category].title}
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                <div className="bg-gray-800 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 border border-gray-700 hover:border-purple-500">
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {skill.icon && (
                        <div
                          className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                        >
                          {skill.icon}
                        </div>
                      )}
                      <h3 className="font-bold text-white text-lg">
                        {skill.name}
                      </h3>
                    </div>
                    <span
                      className={`text-sm font-bold bg-gradient-to-r ${skill.color} bg-clip-text text-transparent`}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative h-3 bg-gray-900 rounded-full overflow-hidden border border-gray-700">
                    <motion.div
                      className={`absolute top-0 left-0 h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1,
                        delay: index * 0.1,
                        ease: "easeOut",
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
                  </div>

                  {/* Glow Effect on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xl`}
                  ></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Technologies */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-center text-white mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Other Technologies I Work With
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Redux",
                "GraphQL",
                "Jest",
                "Cypress",
                "Sass",
                "Bootstrap",
                "Material-UI",
                "Firebase",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{
                    scale: 1.15,
                    y: -5,
                    boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
                  }}
                  className="px-6 py-3 bg-gray-800 text-purple-400 rounded-xl text-sm font-semibold border border-gray-700 hover:border-purple-500 hover:bg-gray-700 transition-all cursor-pointer"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
