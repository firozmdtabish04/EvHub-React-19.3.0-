import React from "react";
import { Cpu, Wifi } from "lucide-react";

import featureImg from "../../assets/features.jpg";
import playIcon from "../../assets/service_element.png";

function Features() {
  const featureCards = [
    {
      title: "Smart Technology",
      subtitle: "Technology",
      desc: "AI-powered charging optimization, real-time monitoring and intelligent energy management.",
      icon: <Cpu size={24} />,
    },
    {
      title: "Smart Connectivity",
      subtitle: "Connectivity",
      desc: "Connect charging stations with cloud infrastructure and mobile applications seamlessly.",
      icon: <Wifi size={24} />,
    },
  ];

  return (
    <section id="features" className="py-24 bg-black text-white">
      <div className="px-5 mx-auto max-w-7xl sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold text-lime-400 uppercase tracking-[0.22em]">
            (Main Features)
          </p>

          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Elevate Your
            <span className="text-lime-400"> ECO - Journey</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Experience intelligent EV charging with modern technology, seamless
            connectivity and sustainable energy solutions.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Left Image */}
          <div className="overflow-hidden rounded-3xl border border-lime-400/20 group relative">
            <img
              src={featureImg}
              alt="EV Charging"
              className="h-[320px] w-full object-cover transition duration-700 group-hover:scale-105 sm:h-[420px] lg:h-[520px]"
            />

            {/* Overlay */}
            <div className="bg-gradient-to-r absolute inset-0 from-black/20 via-transparent to-black/20" />

            {/* Play Button */}
            <button className="top-1/2 h-20 w-20 justify-center rounded-full bg-lime-400 shadow-[0_0_40px_rgba(132,255,76,0.45)] absolute left-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center transition duration-300 hover:scale-110">
              <img src={playIcon} alt="Play" className="h-8 w-8" />
            </button>
          </div>

          {/* Right Cards */}
          <div className="flex-col gap-6 flex">
            {featureCards.map((item, index) => (
              <div
                key={index}
                className="flex-1 p-8 rounded-3xl border border-lime-400/20 bg-black/70 shadow-[0_0_20px_rgba(132,255,76,0.08)] group transition-all duration-300 hover:-translate-y-2 hover:border-lime-400 hover:shadow-[0_0_45px_rgba(132,255,76,0.2)]"
              >
                <div className="mb-5 h-14 w-14 justify-center rounded-full border border-lime-400/30 bg-lime-400/10 text-lime-400 flex items-center transition group-hover:bg-lime-400 group-hover:text-black">
                  {item.icon}
                </div>

                <p className="mb-2 text-sm text-gray-400">{item.subtitle}</p>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-5 text-gray-400 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
