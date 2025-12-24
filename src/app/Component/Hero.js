"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiArrowDown } from "react-icons/hi";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 15, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10 pt-20">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Profile Image with Neon Glow */}
          <motion.div
            className="mb-8 relative inline-block"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2, type: "spring" }}
          >
            <div className="relative w-40 h-40 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full blur-2xl opacity-75 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full animate-spin-slow opacity-50"></div>
              <Image
                src="/profile-updated.jpg"
                alt="Devansh Mishra"
                fill
                className="rounded-full object-cover border-4 border-gray-800 relative z-10 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Devansh Mishra
              </span>
            </h1>
            <div className="h-1 w-40 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto mb-8 rounded-full"></div>
          </motion.div>

          {/* Animated Subtitle */}
          <motion.div
            className="text-2xl md:text-4xl text-gray-300 mb-8 h-12 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <TypeAnimation
              sequence={[
                "💻 Full-Stack Developer",
                2000,
                "🎨 Frontend Engineer",
                2000,
                "⚡ Problem Solver",
                2000,
                "🚀 Backend Developer",
                2000,
              ]}
              wrapper="span"
              repeat={Infinity}
              className="font-mono"
            />
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-lg md:text-xl text-gray-400 mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Building scalable web applications with cutting-edge technologies.
            <span className="text-cyan-400 font-semibold">
              {" "}
              Transforming ideas into elegant code
            </span>
            , one line at a time.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <motion.a
              href="#projects"
              className="group relative px-10 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white rounded-xl font-bold text-lg overflow-hidden shadow-lg shadow-blue-500/50"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span>Explore Projects</span>
                <span className="group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600"
                initial={{ x: "100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>

            <motion.a
              href="#contact"
              className="px-10 py-4 bg-gray-800 text-gray-200 rounded-xl font-bold text-lg border-2 border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all shadow-lg"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {[
              {
                Icon: FaGithub,
                url: "https://github.com/Deva1502",
                label: "GitHub",
                color: "hover:text-purple-400",
              },
              {
                Icon: FaLinkedin,
                url: "https://www.linkedin.com/in/devansh-mishra-a7b84724a",
                label: "LinkedIn",
                color: "hover:text-blue-400",
              },
              {
                Icon: FaTwitter,
                url: "https://x.com/MishraDeva32742",
                label: "Twitter",
                color: "hover:text-cyan-400",
              },
            ].map(({ Icon, url, label, color }) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-14 h-14 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 border-2 border-gray-700 ${color} transition-all`}
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  borderColor: "currentColor",
                  boxShadow: "0 0 20px currentColor",
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <Icon className="text-2xl" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center text-gray-500">
          <span className="text-sm mb-2 font-medium">Scroll Down</span>
          <HiArrowDown className="text-2xl text-cyan-400" />
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 10s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
