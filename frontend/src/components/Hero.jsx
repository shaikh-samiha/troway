import React from "react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/recycling-hero.jpg')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-white px-6 max-w-3xl">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
          Transforming Waste, <br /> Empowering Communities
        </h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Drop off recyclables. Get paid. Create impact with Troway.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-5">
          <a
            href="/waitlist"
            className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
          >
            Join the Waitlist
          </a>
          <a
            href="#contact"
            className="border border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-green-700 transition"
          >
            Partner with Us
          </a>
        </div>
      </div>

      {/* Subtle gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-green-900/60 to-transparent"></div>
    </section>
  );
}
