import React, { useEffect, useState } from "react";
import myopia from "../assets/myopia.png";
import data from "../components/data.json";

const Intro = () => {
  const [overview, setOverview] = useState(null);

  useEffect(() => {
    setOverview(data.overview);
  }, []);

  return (
    <main className="mx-auto w-full lg:w-3/4 px-4 pt-6">
      <div className="flex flex-col md:flex-row items-start gap-8">
        <div className="w-full md:w-1/2 md:pt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Pathological Myopia Disease Diagnosis
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            An advanced diagnostic system for early detection and analysis of
            Pathological Myopia.
          </p>
          <button className="mt-8 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors duration-300">
            Learn More
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <div className="rounded-lg flex items-center justify-center">
            <img
              src={myopia}
              alt="Pathological Myopia Visualization"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {overview && (
        <section className="mt-12">
          <h2 className="text-3xl font-semibold text-gray-800">
            Project Overview
          </h2>
          <p className="mt-4 text-lg text-gray-600">{overview.background}</p>
          <p className="mt-4 text-lg text-gray-600">
            {overview.data_collection}
          </p>
          <p className="mt-4 text-lg text-gray-600">{overview.development}</p>
          <p className="mt-4 text-lg font-medium text-gray-700">
            {overview.team}
          </p>
        </section>
      )}
    </main>
  );
};

export default Intro;
