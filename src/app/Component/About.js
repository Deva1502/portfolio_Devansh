"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiDownload, HiExternalLink, HiX } from "react-icons/hi";

const About = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const highlights = [
    {
      number: "1+",
      label: "Years Experience",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      number: "5+",
      label: "Projects Completed",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      number: "1800+",
      label: "Problems Solved",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      number: "100%",
      label: "Dedication",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const skills = [
    "Full-stack development expertise",
    "User-centered design approach",
    "Strong problem-solving skills",
    "Collaborative team player",
    "Continuous learner & innovator",
  ];

  const openResumeModal = (e) => {
    e.preventDefault();
    setIsResumeModalOpen(true);
  };

  const closeResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  const downloadResume = () => {
    const fileId = "1zAZHLc8-ca17ACBuGr0jqRDjRCK-yCJJ";
    const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Devansh_Mishra_Resume.pdf";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownloadClick = (e) => {
    e.preventDefault();
    setIsResumeModalOpen(true);
  };

  const getEmbeddableLink = (shareLink) => {
    const fileId = shareLink.match(/\/d\/([a-zA-Z0-9-_]+)/)[1];
    return `https://drive.google.com/file/d/${fileId}/preview`;
  };

  const resumeEmbedUrl = getEmbeddableLink(
    "https://drive.google.com/file/d/1zAZHLc8-ca17ACBuGr0jqRDjRCK-yCJJ/view?usp=sharing"
  );

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>

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
              className="inline-block px-5 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg shadow-blue-500/50"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              👨‍💻 Get to Know Me
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Passionate developer crafting innovative solutions with modern
              technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative mb-8 group">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative overflow-hidden rounded-2xl border-4 border-gray-800 shadow-2xl">
                  <Image
                    src="/profile-updated.jpg"
                    alt="About me"
                    width={500}
                    height={600}
                    className="rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <motion.div
                  className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl opacity-20"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                ></motion.div>
                <motion.div
                  className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl opacity-20"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                ></motion.div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="relative group"
                  >
                    <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-gray-600 transition-all shadow-lg">
                      <div
                        className={`text-3xl font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent mb-2`}
                      >
                        {item.number}
                      </div>
                      <div className="text-sm text-gray-400 font-medium">
                        {item.label}
                      </div>
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                      ></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Crafting Digital Solutions
                </span>
                <br />
                <span className="text-white">with Passion & Precision</span>
              </h3>

              <p className="text-gray-400 leading-relaxed text-lg">
                I&apos;m a passionate <span className="text-cyan-400 font-semibold">full-stack developer</span>{" "}
                with expertise in creating web applications that combine{" "}
                <span className="text-purple-400 font-semibold">
                  beautiful design
                </span>{" "}
                with powerful functionality. With a strong foundation in both
                frontend and backend technologies, I bring ideas to life through
                clean, efficient code.
              </p>

              <p className="text-gray-400 leading-relaxed text-lg">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies,
                solving algorithmic challenges on competitive programming
                platforms, or contributing to open-source projects. I believe in
                continuous learning and sharing knowledge with the developer
                community.
              </p>

              {/* Skills List */}
              <div className="pt-4">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                  <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-400 rounded-full mr-3"></span>
                  What I Bring to the Table:
                </h4>
                <ul className="space-y-3">
                  {skills.map((skill, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-400 hover:text-cyan-400 transition-colors group"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <motion.span
                        className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-4 group-hover:scale-150 transition-transform"
                        whileHover={{ scale: 2 }}
                      ></motion.span>
                      <span className="font-medium">{skill}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="pt-8 flex flex-wrap gap-4">
                <motion.button
                  onClick={handleDownloadClick}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-bold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiDownload className="text-xl" />
                  Download Resume
                </motion.button>

                <motion.a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gray-800 text-white rounded-xl font-bold border-2 border-gray-700 hover:border-cyan-500 hover:text-cyan-400 transition-all"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get In Touch
                  <span>→</span>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Resume Modal */}
      {isResumeModalOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            onClick={closeResumeModal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          ></motion.div>

          <motion.div
            className="relative bg-gray-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden border-2 border-gray-800"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-800 bg-gray-900">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                My Resume
              </h3>
              <div className="flex items-center space-x-3">
                <motion.button
                  onClick={downloadResume}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-lg font-bold shadow-lg shadow-green-500/50 hover:shadow-green-500/70 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiDownload className="text-lg" />
                  Download PDF
                </motion.button>

                <motion.button
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1zAZHLc8-ca17ACBuGr0jqRDjRCK-yCJJ/view",
                      "_blank"
                    )
                  }
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-bold shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HiExternalLink className="text-lg" />
                  Open in New Tab
                </motion.button>

                <motion.button
                  onClick={closeResumeModal}
                  className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <HiX className="text-2xl" />
                </motion.button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="relative w-full h-[calc(95vh-7rem)] bg-gray-800">
              <iframe
                src={resumeEmbedUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                className="w-full h-full"
                title="My Resume Preview"
              />
              <div className="loading-overlay absolute inset-0 bg-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full mx-auto mb-4"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  ></motion.div>
                  <p className="text-white text-xl font-bold mb-2">
                    Loading resume...
                  </p>
                  <p className="text-gray-400 text-sm">
                    Please wait while we fetch your resume
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      <style jsx>{`
        .loading-overlay {
          pointer-events: none;
        }
        iframe:not([src=""]) ~ .loading-overlay {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default About;
