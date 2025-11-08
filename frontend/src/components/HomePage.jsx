import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRecycle,
  FaLeaf,
  FaHandsHelping,
  FaUsers,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaGlobe,
} from "react-icons/fa";

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* ---------- HERO SECTION ---------- */}
      <section
        className="relative min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-white max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-6xl font-extrabold mb-4"
          >
            Troway Transforming Waste
          </motion.h1>
          <p className="text-lg md:text-xl mb-6">
            Drop off recyclables. Get paid and empower communities.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/waitlist"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium transition-all"
            >
              Join the Waitlist
            </Link>
            <a
              href="#contact"
              className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-full font-medium transition-all"
            >
              Partner with us
            </a>
          </div>
        </div>
      </section>

      {/* ---------- PARTNER LOGOS ---------- */}
      <section className="py-6 bg-green-100">
        <div className="flex justify-center items-center gap-10 flex-wrap opacity-90">
          {["kuda", "yourselfify", "orchestrate", "alphac", "flipapay"].map(
            (logo, index) => (
              <div
                key={index}
                className="text-gray-600 font-semibold text-lg capitalize"
              >
                {logo}
              </div>
            )
          )}
        </div>
      </section>

      {/* ---------- THE PROBLEM SECTION ---------- */}
      <section id="problem" className="py-20 bg-green-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          The Waste Problem We Must Solve
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-10 rounded-full"></div>
        <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          {[
            {
              icon: <FaRecycle size={36} className="text-green-600 mb-4" />,
              title: "Over-reliance on landfills",
              desc: "Pollution & health hazards.",
            },
            {
              icon: <FaLeaf size={36} className="text-green-600 mb-4" />,
              title: "Lack of convenient disposal options",
              desc: "Limited access to proper recycling.",
            },
            {
              icon: <FaHandsHelping size={36} className="text-green-600 mb-4" />,
              title: "Recycling companies struggle",
              desc: "Inefficient waste management.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              {item.icon}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- WHY CHOOSE TROWAY ---------- */}
      <section id="solution" className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Why Choose Troway?
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-10 rounded-full"></div>
        <div className="grid md:grid-cols-4 gap-6 px-8 max-w-6xl mx-auto">
          {[
            "Reduce landfill waste",
            "Empower rural communities",
            "Help households recycle",
            "Restore dignity & create green jobs",
          ].map((text, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-8 hover:shadow-lg transition"
            >
              <FaRecycle size={40} className="text-green-600 mx-auto mb-4" />
              <p className="font-medium text-gray-800">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- BLOG SECTION ---------- */}
      <section id="blog" className="py-20 bg-gray-50 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Latest from Our Blog
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-10 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-8 px-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src="/blog-thumb.jpg"
                alt="blog"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="font-bold text-lg mb-2">
                  The Future of Waste Management in Nigeria
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  Exploring innovative solutions for sustainable waste
                  management across Nigerian communities.
                </p>
                <div className="flex justify-between text-gray-500 text-sm">
                  <span>March 15, 2024</span>
                  <span>5:00pm</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- CONTACT / FOOTER ---------- */}
      <footer
        id="contact"
        className="bg-green-600 text-white text-center py-16 px-6"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> Rivers State, Nigeria
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> hello@troway.com
          </p>
          <p className="flex items-center gap-2">
            <FaPhone /> +234 8108812215
          </p>
          <p className="flex items-center gap-2">
            <FaGlobe /> www.troway.com
          </p>
        </div>
        <p className="text-sm text-green-100">
          © 2025 Troway. All rights reserved. Empowering communities through
          sustainable recycling.
        </p>
      </footer>
    </div>
  );
}
