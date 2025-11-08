import React from "react";

export default function Collaboration() {
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10 text-gray-800">
        In Collaboration With
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-12 px-6">
        {/* Partner Logos */}
        <img
          src="/images/orchestrate.png"
          alt="Orchestrate"
          className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition"
        />
        <img
          src="/images/yournotify.png"
          alt="YourNotify"
          className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition"
        />
        <img
          src="/images/rentmoney.png"
          alt="RentMoney"
          className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition"
        />
        <img
          src="/images/flickpay.png"
          alt="FlickPay"
          className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition"
        />
      </div>
    </section>
  );
}
