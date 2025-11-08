import { FiStar, FiUsers, FiTrendingUp, FiShield, FiZap } from "react-icons/fi";

const ValueGrid = () => {
  const values = [
    {
      icon: <FiStar className="text-green-600 text-4xl mb-4" />,
      title: "Trusted by Many",
      description:
        "Our platform is trusted by hundreds of businesses and individuals for reliability and transparency.",
    },
    {
      icon: <FiTrendingUp className="text-green-600 text-4xl mb-4" />,
      title: "Growth Focused",
      description:
        "Trove helps you grow faster with automated systems designed to maximize efficiency and impact.",
    },
    {
      icon: <FiUsers className="text-green-600 text-4xl mb-4" />,
      title: "Collaborative Ecosystem",
      description:
        "We connect partners and communities for smarter, sustainable innovation together.",
    },
    {
      icon: <FiShield className="text-green-600 text-4xl mb-4" />,
      title: "Secure & Transparent",
      description:
        "End-to-end encryption ensures your data and transactions remain safe and compliant.",
    },
  ];

  return (
    <section
      id="why-choose-trove"
      className="py-28 bg-gradient-to-b from-[#eaf7ff] to-[#f5fcf7]" // soft bluish to mint gradient
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Heading */}
        <div className="flex items-center justify-center gap-3 mb-12">
          <FiZap className="text-green-600 text-5xl animate-pulse" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Why Choose Trove
          </h2>
        </div>

        {/* Value Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-8 hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                {value.icon}
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueGrid;
