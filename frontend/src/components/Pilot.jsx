import React from "react";
import { FaCheckCircle } from "react-icons/fa";

export default function Pilot() {
  const stats = [
    { value: "500+", label: "households engaged" },
    { value: "80%", label: "participation rate" },
    { value: "400+", label: "students trained" },
    { value: "₦1M", label: "grant raised" },
  ];

  return (
    <section id="pilot" className="max-w-6xl mx-auto mt-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Pilot Program – Proven Impact in Rivers State</h2>
      <div className="grid md:grid-cols-4 gap-6">
        {stats.map((s, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-md">
            <div className="text-green-600 text-3xl"><FaCheckCircle /></div>
            <div className="mt-3 text-2xl font-bold">{s.value}</div>
            <div className="text-gray-600">{s.label}</div>
          </div>
        ))}
      </div>
      <img
        src="/images/community-recycle.jpg"
        alt="Community Recycling"
        className="w-full mt-10 rounded-xl shadow-lg"
      />
    </section>
  );
}
