import React from "react";
import { FaShoppingBag, FaCogs } from "react-icons/fa";

export default function Revenue() {
  return (
    <section className="max-w-6xl mx-auto mt-20 px-4">
      <h2 className="text-3xl font-bold mb-8 text-center">How We Sustain the Movement</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-xl bg-white shadow-sm flex items-center gap-4">
          <div className="text-4xl text-trowayGreen"><FaShoppingBag /></div>
          <div>
            <h4 className="font-semibold text-lg">Sale of Recycled Products</h4>
            <p className="text-gray-600 text-sm">Transform waste into valuable products.</p>
          </div>
        </div>
        <div className="p-6 border rounded-xl bg-white shadow-sm flex items-center gap-4">
          <div className="text-4xl text-trowayGreen"><FaCogs /></div>
          <div>
            <h4 className="font-semibold text-lg">Sale of Equipment & Gadgets</h4>
            <p className="text-gray-600 text-sm">Provide bins, compactors & sorting tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
