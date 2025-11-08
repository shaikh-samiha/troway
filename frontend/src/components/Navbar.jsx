import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 px-6 py-3 rounded-full flex items-center justify-between transition-all duration-300 w-[90%] max-w-5xl backdrop-blur-md border ${
        scrolled ? "bg-white/90 shadow-lg border-gray-200" : "bg-white/70 border-transparent"
      }`}
    >
      <Link to="/" className="text-2xl font-bold text-green-700">Troway</Link>

      <div className="hidden md:flex items-center space-x-8 text-gray-800 font-medium">
        <a href="#problem" className="hover:text-green-600">Problem</a>
        <a href="#solution" className="hover:text-green-600">Solution</a>
        <a href="#pilot" className="hover:text-green-600">Pilot</a>
        <a href="#blog" className="hover:text-green-600">Blog</a>
        <a href="#contact" className="hover:text-green-600">Contact</a>
        <Link
          to="/waitlist"
          className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition-all"
        >
          Join Waitlist
        </Link>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full mt-3 left-0 right-0 bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center space-y-4 md:hidden">
          <a href="#problem" onClick={() => setIsOpen(false)}>Problem</a>
          <a href="#solution" onClick={() => setIsOpen(false)}>Solution</a>
          <a href="#pilot" onClick={() => setIsOpen(false)}>Pilot</a>
          <a href="#blog" onClick={() => setIsOpen(false)}>Blog</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          <Link
            to="/waitlist"
            onClick={() => setIsOpen(false)}
            className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700"
          >
            Join Waitlist
          </Link>
        </div>
      )}
    </nav>
  );
}
