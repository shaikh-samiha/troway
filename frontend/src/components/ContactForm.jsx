import React from "react";

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
    >
      <div className="bg-black/60 p-10 rounded-xl max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full p-3 rounded text-black" />
          <input type="email" placeholder="Email" className="w-full p-3 rounded text-black" />
          <textarea placeholder="Your Message" rows="3" className="w-full p-3 rounded text-black"></textarea>
          <button type="submit" className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded text-white font-semibold w-full">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
