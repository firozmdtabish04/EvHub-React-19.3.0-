import React from "react";
import { CarFront, ShieldCheck } from "lucide-react";

import heroBg from "../../assets/hero.png";
import car from "../../assets/cta_image.png";
import charger from "../../assets/Service_img.png";

import avatar1 from "../../assets/user-01.jpg";
import avatar2 from "../../assets/user-02.jpg";
import avatar3 from "../../assets/user-03.jpg";

// Import all sections
import About from "../about/About";
import Service from "../service/Service";
import Features from "../features/Features";
import Testimonial from "../testimonial/Testimonial";
import Stations from "../../component/ui/Stations";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen overflow-hidden bg-black text-white relative"
      >
        {/* Background */}
        <div
          className="bg-cover bg-center absolute inset-0"
          style={{ backgroundImage: `url(${heroBg})` }}
        />

        {/* Overlay */}
        <div className="bg-gradient-to-r absolute inset-0 from-black via-black/60 to-black/30" />
        <div className="bg-black/20 absolute inset-0 backdrop-blur-[1px]" />

        <div className="px-5 pt-28 pb-12 z-10 mx-auto min-h-screen max-w-7xl relative flex items-center sm:px-8 lg:px-10">
          <div className="grid gap-10 w-full items-center lg:grid-cols-2">
            {/* Left Content */}
            <div className="max-w-2xl">
              <p className="mb-6 text-xs font-semibold text-lime-400 uppercase tracking-[0.22em] sm:text-sm">
                FOR EVERYONE • EVERY BUSINESS • EVERY VEHICLE
              </p>

              <h1 className="text-5xl font-extrabold leading-[0.95] sm:text-6xl lg:text-7xl xl:text-[5.5rem]">
                Unique Solutions For
                <span className="mt-2 text-lime-400 block">
                  Charging Stations
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-base text-gray-300 leading-8 sm:text-lg">
                Build smarter EV charging experiences with a modern platform
                designed for businesses, fleets and everyday drivers.
              </p>

              <div className="flex-col mt-10 gap-5 flex sm:flex-row sm:items-center">
                <button className="gap-2 px-8 py-4 justify-center rounded-full bg-lime-400 text-lg font-semibold text-black flex items-center transition duration-300 hover:scale-105 hover:bg-lime-300">
                  Test Drive
                  <CarFront size={20} />
                </button>

                <div className="gap-3 flex items-center">
                  <div className="flex -space-x-3">
                    {[avatar1, avatar2, avatar3].map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`User ${i + 1}`}
                        className="h-12 w-12 rounded-full border-2 border-black object-cover"
                      />
                    ))}
                  </div>

                  <div>
                    <p className="font-semibold text-lime-400">
                      Let's Join Us.
                    </p>

                    <div className="flex items-center gap-1 text-sm text-gray-300">
                      <ShieldCheck size={15} className="text-lime-400" />
                      Trusted by 10K+ users
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Images */}
            <div className="relative hidden h-[620px] lg:block xl:h-[720px]">
              <img
                src={charger}
                alt="EV Charger"
                className="absolute right-0 top-0 w-[240px] drop-shadow-[0_0_70px_rgba(132,255,76,0.25)] xl:w-[280px]"
              />

              <img
                src={car}
                alt="EV Car"
                className="absolute bottom-0 left-[-60px] w-[560px] drop-shadow-[0_25px_70px_rgba(0,0,0,0.65)] xl:w-[700px]"
              />
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* All Landing Page Sections */}
      <section id="about">
        <About />
      </section>

      <section id="services">
        <Service />
      </section>

      <section id="features">
        <Features />
      </section>

      <section id="testimonials">
        <Testimonial />
      </section>

      <section id="stations">
        <Stations />
      </section>
    </>
  );
}

export default Home;
