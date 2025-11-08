import React from "react";
import { FaTrashAlt, FaHome, FaIndustry } from "react-icons/fa";

const problems = [
  {
    icon: <FaTrashAlt className="text-green-600 text-4xl" />,
    title: "Over-reliance on landfills",
    desc: "Pollution & health hazards",
  },
  {
    icon: <FaHome className="text-green-600 text-4xl" />,
    title: "Households & businesses lack disposal options",
    desc: "Limited access to proper recycling",
  },
  {
    icon: <FaIndustry className="text-green-600 text-4xl" />,
    title: "Recycling companies struggle with unsorted waste",
    desc: "Inefficient waste management",
  },
];

export default function Problem() {
  return (
    <section className="bg-green-50 py-16 text-center">
      <h2 className="text-3xl font-bold mb-10">
        The Waste Problem We Must Solve
      </h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {problems.map((p, i) => (
          <div key={i} className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex justify-center mb-4">{p.icon}</div>
            <h3 className="font-semibold text-lg mb-2">{p.title}</h3>
            <p className="text-gray-600">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
