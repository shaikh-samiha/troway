import React from "react";

export default function Partners() {
  const partners = [
    { name: "Orchestrate", logo: "/images/orchestrate.png" },
    { name: "YourNotify", logo: "/images/yournotify.png" },
    { name: "RentMoney", logo: "/images/rentmoney.png" },
    { name: "FlickPay", logo: "/images/flickpay.png" },
  ];

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h2 className="text-gray-800 font-semibold text-xl md:text-2xl mb-8">
          In Collaboration With
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 items-center justify-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center group transition-transform duration-300 hover:scale-105"
            >
              <div className="bg-gray-50 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md p-6 w-32 h-32 flex items-center justify-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="object-contain h-12 grayscale group-hover:grayscale-0 transition-all"
                />
              </div>
              <p className="text-gray-600 text-sm mt-3">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
