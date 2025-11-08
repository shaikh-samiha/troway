import React from "react";
import { FaRecycle, FaMobileAlt, FaChalkboardTeacher } from "react-icons/fa";

const steps = [
  { icon: <FaRecycle />, title: "Drop off recyclables", text: "Bring your waste to Troway Stations" },
  { icon: <FaMobileAlt />, title: "Earn money", text: "Get paid when you recycle with us" },
  { icon: <FaChalkboardTeacher />, title: "Learn & engage", text: "Join Clean Waste Campaigns" },
];

export default function Solution() {
  return (
    <section id="solution" className="max-w-6xl mx-auto mt-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">A Simple, Rewarding, and Impactful Recycling System</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {steps.map((s, idx) => (
          <div key={idx} className="p-6 bg-green-50 border rounded-xl hover:shadow">
            <div className="text-4xl text-trowayGreen">{s.icon}</div>
            <h3 className="mt-3 font-semibold">{s.title}</h3>
            <p className="text-gray-600 mt-1">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
