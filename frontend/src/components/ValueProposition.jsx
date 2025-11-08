// src/components/ValueProposition.jsx
import React from "react";

export default function ValueProposition() {
  const items = [
    { title: "Reduce landfill waste", subtitle: "Prevent harm to environment" },
    { title: "Empower rural communities", subtitle: "Create livelihoods" },
    { title: "Help households & businesses", subtitle: "Make recycling easy" },
    { title: "Create green jobs", subtitle: "Train and employ local people" },
  ];

  return (
    <section className="text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Value Proposition</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {items.map((it) => (
          <div key={it.title} className="p-6 bg-white rounded shadow-sm">
            <h4 className="font-semibold">{it.title}</h4>
            <p className="text-sm text-gray-600 mt-2">{it.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
