import React from "react";

export default function BlogSection() {
  const blogs = [
    {
      title: "The Future of Waste Management in Nigeria",
      desc: "Exploring innovative solutions and sustainability strategies.",
      date: "March 15, 2024",
      img: "/images/blog1.jpg",
    },
    {
      title: "Turning Trash to Income",
      desc: "How we create income streams through community recycling.",
      date: "April 3, 2024",
      img: "/images/blog2.jpg",
    },
  ];

  return (
    <section id="blog" className="max-w-6xl mx-auto mt-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10">Latest from Our Blog</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {blogs.map((b, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg overflow-hidden">
            <img src={b.img} alt={b.title} className="w-full h-56 object-cover" />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg">{b.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{b.desc}</p>
              <div className="mt-3 text-sm text-gray-500">{b.date}</div>
              <a href="https://trowayapp.medium.com/" target="_blank" rel="noreferrer" className="text-green-600 font-semibold mt-2 inline-block hover:underline">
                Read more →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
