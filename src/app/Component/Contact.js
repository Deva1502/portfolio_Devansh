"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiOfficeBuilding,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: HiMail,
      label: "Email",
      value: "devanshm929@gmail.com",
      link: "mailto:devanshm929@gmail.com",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: HiPhone,
      label: "Phone",
      value: "+91 920026345",
      link: "tel:+919120026345",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: HiLocationMarker,
      label: "Location",
      value: "Gonda, Uttar Pradesh",
      link: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: HiOfficeBuilding,
      label: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/devansh-mishra-a7b84724a",
      color: "from-blue-500 to-blue-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl"></div>

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
              className="inline-block px-5 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full text-sm font-bold mb-6 shadow-lg shadow-pink-500/50"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", duration: 0.6 }}
            >
              📬 Get In Touch
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Work Together
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's create something amazing together
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed text-lg">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, feel free to reach out!
              </p>

              {/* Contact Details */}
              <motion.div
                className="space-y-4 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    variants={itemVariants}
                    className="flex items-center p-4 bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-700 hover:border-gray-600"
                    whileHover={{ x: 10, scale: 1.02 }}
                  >
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${info.color} mr-4 shadow-lg`}
                    >
                      <info.icon className="text-2xl text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-cyan-400 transition-colors text-lg">
                        {info.label}
                      </div>
                      <div className="text-gray-400 text-sm">{info.value}</div>
                    </div>
                  </motion.a>
                ))}
              </motion.div>

              {/* Social Media */}
              <div>
                <h4 className="font-bold text-white mb-4 text-xl">Follow Me</h4>
                <div className="flex gap-4">
                  {[
                    {
                      name: "GitHub",
                      url: "https://github.com/Deva1502",
                      icon: FaGithub,
                      color: "hover:text-purple-400",
                    },
                    {
                      name: "LinkedIn",
                      url: "https://www.linkedin.com/in/devansh-mishra-a7b84724a",
                      icon: FaLinkedin,
                      color: "hover:text-blue-400",
                    },
                    {
                      name: "Twitter",
                      url: "https://x.com/MishraDeva32742",
                      icon: FaTwitter,
                      color: "hover:text-cyan-400",
                    },
                    {
                      name: "Instagram",
                      url: "https://instagram.com/devv.dm",
                      icon: FaInstagram,
                      color: "hover:text-pink-400",
                    },
                  ].map((social) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-14 h-14 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 border border-gray-700 ${social.color} transition-all shadow-lg`}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        borderColor: "currentColor",
                        boxShadow: "0 0 20px currentColor",
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <social.icon className="text-2xl" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-bold text-gray-300 mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-bold text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-bold text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all text-white placeholder-gray-500"
                    placeholder="Project Discussion"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-bold text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all resize-none text-white placeholder-gray-500"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-4 px-6 rounded-xl font-bold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? "Sending..." : "Send Message 🚀"}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    className="p-4 bg-green-500/10 border border-green-500 rounded-xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-green-400 font-semibold">
                      ✓ Message sent successfully! I'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="p-4 bg-red-500/10 border border-red-500 rounded-xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-red-400 font-semibold">
                      ✗ Oops! Something went wrong. Please try again.
                    </p>
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
