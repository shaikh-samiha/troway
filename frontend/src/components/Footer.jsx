import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        
        <div>
          <h3 className="text-xl font-semibold mb-3">Get in Touch</h3>
          <p>📍 Rivers State, Nigeria</p>
          <p>📧 hello@troway.com</p>
          <p>📞 +234 810 891 2215</p>
          <p>🌐 www.troway.com</p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
          <div className="flex justify-center gap-6 mt-3">
            <a href="#" className="hover:text-green-400"><FaLinkedin size={24} /></a>
            <a href="#" className="hover:text-green-400"><FaInstagram size={24} /></a>
            <a href="#" className="hover:text-green-400"><FaFacebook size={24} /></a>
          </div>
        </div>

        <div className="text-right md:text-left">
          <h3 className="text-xl font-semibold mb-3">Troway</h3>
          <p>Transforming waste responsibly.</p>
          <p>Empower communities, protect the planet.</p>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-10 border-t border-green-700 pt-4">
        © {new Date().getFullYear()} Troway. All Rights Reserved.
      </div>
    </footer>
  );
}
