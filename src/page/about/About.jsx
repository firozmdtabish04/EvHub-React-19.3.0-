import React from "react";
import { Wrench, PackageCheck } from "lucide-react";

import aboutImg from "../../assets/about-img-.jpg";
import aboutImg2 from "../../assets/about-img-1.jpg";

function About() {
  const stats = [
    { value: "7.5M+", label: "Charging Station Initiated" },
    { value: "12K+", label: "Charging Station In Network" },
    { value: "80%+", label: "Eco Friendly Charging Stations" },
    { value: "123+", label: "Charging Stations In This Region" },
  ];

  const cards = [
    {
      title: "Warranty Extensions",
      desc: "Premium support and warranty services for EV charging infrastructure.",
      icon: <Wrench size={30} />,
    },
    {
      title: "Spare Parts Management",
      desc: "Fast replacement and maintenance for uninterrupted charging.",
      icon: <PackageCheck size={30} />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="px-5 mx-auto max-w-7xl sm:px-8 lg:px-10">
        {/* Stats */}
        <div className="grid grid-cols-2 mb-20 gap-8 text-center lg:grid-cols-4">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-4xl font-bold lg:text-5xl">{item.value}</h2>
              <p className="mt-3 text-sm text-gray-300 lg:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid gap-16 items-center lg:grid-cols-2">
          {/* Left Images */}
          <div className="justify-center relative flex lg:justify-start">
            <div className="w-full max-w-md relative">
              <img
                src={aboutImg}
                alt="EV Charging"
                className="h-[520px] w-full rounded-3xl object-cover shadow-2xl"
              />

              <img
                src={aboutImg2}
                alt="EV User"
                className="h-56 w-52 rounded-3xl border-4 border-black object-cover shadow-[0_0_40px_rgba(132,255,76,0.3)] absolute -bottom-8 right-[-20px] sm:right-[-40px]"
              />
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="mb-4 text-sm font-semibold text-lime-400 uppercase tracking-[0.2em]">
              (About Us)
            </p>

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Solutions of All EV
              <span className="mt-2 text-lime-400 block">
                Charging Solutions
              </span>
            </h2>

            <p className="mt-8 max-w-xl text-lg text-gray-400 leading-8">
              We provide intelligent EV charging solutions for businesses,
              public charging stations and smart cities with reliable support
              and advanced technology.
            </p>

            {/* Cards */}
            <div className="grid mt-10 gap-6 sm:grid-cols-2">
              {cards.map((card, index) => (
                <div
                  key={index}
                  className="p-8 rounded-3xl border border-lime-400/30 bg-gradient-to-br shadow-[0_0_35px_rgba(132,255,76,0.12)] from-lime-500/15 via-lime-400/10 to-transparent transition duration-300 hover:scale-105 hover:border-lime-400 hover:shadow-[0_0_50px_rgba(132,255,76,0.25)]"
                >
                  <div className="mb-6 h-16 w-16 justify-center rounded-full border border-lime-400/40 bg-black/40 text-lime-400 flex items-center">
                    {card.icon}
                  </div>

                  <h3 className="text-2xl font-bold">{card.title}</h3>

                  <p className="mt-4 text-gray-300 leading-7">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
