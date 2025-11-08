import React from "react";

export default function CTAForm() {
  return (
    <section id="join" className="bg-green-600 text-white py-16 mt-20 text-center">
      <h2 className="text-3xl font-bold mb-6">Be Part of the Recycling Revolution!</h2>
      <form className="max-w-lg mx-auto bg-green-100 rounded-xl p-6 text-gray-800">
        <input
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <textarea
          placeholder="Your Message"
          rows="3"
          className="w-full p-3 mb-4 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
