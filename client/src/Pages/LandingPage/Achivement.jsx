import React from "react";

const stats = [
  { number: "33k+", label: "Events Created" },
  { number: "60k+", label: "Media Uploaded" },
  { number: "1M+", label: "Guests Hosted" },
  { number: "2k+", label: "Businesses" },
];

const Achievements = () => {
  return (
    <section className="w-full bg-[#fafafa] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
          {/* Left Title */}
          <div className="mb-10 md:mb-0 md:w-1/3">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 text-center md:text-left">
              Our{" "}
              <span className="text-pink-600">
                Achievements
              </span>{" "}
              so far...
            </h3>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 md:w-2/3">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center"
              >
                <p className="text-3xl font-semibold text-gray-900 mb-2">{stat.number}</p>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
