"use client";

import React from "react";
import { FaCode } from "react-icons/fa";
import { SiLeetcode, SiCodechef, SiCodeforces } from "react-icons/si";
import { BsArrowUpRight } from "react-icons/bs";
import { IoIosCode } from "react-icons/io";
import { RiCodeSSlashFill } from "react-icons/ri";
import { motion } from "framer-motion";

const CodingProfiles = () => {
  const profiles = [
    {
      name: "LeetCode",
      url: "https://leetcode.com/u/deva1502",
      icon: SiLeetcode,
      color: "from-yellow-400 to-orange-500",
      description: "Data Structures & Algorithms",
    },
    {
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/devansh20j6jn/",
      icon: FaCode,
      color: "from-green-400 to-green-600",
      description: "DSA & Computer Science",
    },
    {
      name: "CodeChef",
      url: "https://www.codechef.com/users/devanshm929",
      icon: SiCodechef,
      color: "from-amber-500 to-orange-600",
      description: "Competitive Programming",
    },
    {
      name: "Codeforces",
      url: "https://codeforces.com/profile/devansh1502",
      icon: SiCodeforces,
      color: "from-blue-400 to-blue-600",
      description: "Competitive Contests",
    },
    {
      name: "CodeStudio",
      url: "https://www.naukri.com/code360/profile/devaa",
      icon: IoIosCode,
      color: "from-green-500 to-emerald-600",
      description: "Coding Challenges",
    },
    {
      name: "Codolio",
      url: "https://codolio.com/profile/dev1502",
      icon: RiCodeSSlashFill,
      color: "from-purple-400 to-pink-600",
      description: "Computational Notebooks",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div
      id="coding-profiles"
      className="w-full py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            🏆 Competitive Programming
          </motion.span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Coding Profiles
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Check out my competitive programming profiles and problem-solving
            journey
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {profiles.map((profile, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              whileHover={{ y: -8 }}
            >
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-300 hover:border-cyan-500 h-full">
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${profile.color}`}
                  ></div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <motion.div
                          className={`p-3 rounded-xl bg-gradient-to-r ${profile.color} shadow-lg`}
                          whileHover={{ scale: 1.15, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <profile.icon className="text-2xl text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white">
                          {profile.name}
                        </h3>
                      </div>
                      <motion.div
                        className="text-gray-500 group-hover:text-cyan-400 transition-colors duration-300"
                        animate={{ x: [0, 5, 0] }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                      >
                        <BsArrowUpRight className="text-xl" />
                      </motion.div>
                    </div>
                    <p className="text-gray-400 text-sm mb-4">
                      {profile.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-xs text-cyan-400 font-bold">
                        View Profile
                      </div>
                      <motion.div
                        className={`h-1 w-12 bg-gradient-to-r ${profile.color} rounded-full`}
                        whileHover={{ width: 60 }}
                        transition={{ duration: 0.3 }}
                      ></motion.div>
                    </div>
                  </div>
                  {/* Glow Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${profile.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`}
                  ></div>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default CodingProfiles;
