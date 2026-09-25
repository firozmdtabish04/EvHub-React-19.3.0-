import React from "react";

import charger from "../../assets/Service_img.png";

import service1 from "../../assets/service_card_img_1.png";
import service2 from "../../assets/service_card_img_2.png";
import service3 from "../../assets/service_card_img_3.png";
import service4 from "../../assets/service_card_img_4.png";

function Service() {
  const leftCards = [
    {
      title: "Building Services",
      desc: "Professional EV infrastructure setup with reliable charging solutions.",
      img: service1,
    },
    {
      title: "Home Charging",
      desc: "Smart home charging systems for convenient everyday charging.",
      img: service2,
    },
  ];

  const rightCards = [
    {
      title: "AC Charging Services",
      desc: "Efficient AC charging stations for homes and businesses.",
      img: service3,
    },
    {
      title: "DC Charging Services",
      desc: "Fast DC charging solutions for highways and commercial locations.",
      img: service4,
    },
  ];

  const Card = ({ item, align = "left" }) => (
    <div className="p-6 rounded-2xl border border-lime-400/30 bg-black/70 shadow-[0_0_20px_rgba(132,255,76,0.08)] group transition-all duration-300 hover:-translate-y-2 hover:border-lime-400 hover:shadow-[0_0_40px_rgba(132,255,76,0.18)]">
      <div
        className={`mb-5 flex ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <div className="h-12 w-12 justify-center rounded-full bg-lime-400 shadow-[0_0_25px_rgba(132,255,76,0.35)] flex items-center">
          <img
            src={item.img}
            alt={item.title}
            className="h-6 w-6 object-contain"
          />
        </div>
      </div>

      <div className={align === "right" ? "text-right" : "text-left"}>
        <h3 className="text-2xl font-bold text-white">{item.title}</h3>
        <p className="mt-3 text-gray-400 leading-7">{item.desc}</p>
      </div>
    </div>
  );

  return (
    <section id="services" className="py-24 bg-black text-white">
      <div className="px-5 mx-auto max-w-7xl sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mb-20 mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold text-lime-400 uppercase tracking-[0.25em]">
            (Our Services)
          </p>

          <h2 className="text-4xl font-extrabold sm:text-5xl">
            Excellent & Best Service
          </h2>

          <p className="mt-6 text-gray-400">
            We deliver premium EV charging solutions with intelligent
            technology, modern infrastructure and reliable maintenance support.
          </p>
        </div>

        {/* Content */}
        <div className="grid gap-12 items-center lg:grid-cols-[1fr_auto_1fr]">
          {/* Left Cards */}
          <div className="space-y-8">
            {leftCards.map((item, index) => (
              <Card key={index} item={item} align="left" />
            ))}
          </div>

          {/* Center Charger */}
          <div className="justify-center flex">
            <img
              src={charger}
              alt="EV Charger"
              className="w-64 drop-shadow-[0_0_50px_rgba(132,255,76,0.22)] sm:w-72 lg:w-80 xl:w-96"
            />
          </div>

          {/* Right Cards */}
          <div className="space-y-8">
            {rightCards.map((item, index) => (
              <Card key={index} item={item} align="right" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
