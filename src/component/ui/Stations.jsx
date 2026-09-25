import React from "react";
import { Download, MapPin } from "lucide-react";

import heroBg from "../../assets/hero.png";
import phoneMockup from "../../assets/cta_image.png";

function Stations() {
  return (
    <section
      id="download-app"
      className="py-24 overflow-hidden text-white relative"
    >
      {/* Background */}
      <div
        className="bg-cover bg-center absolute inset-0"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Dark Green Overlay */}
      <div className="bg-black/70 absolute inset-0" />
      <div className="bg-gradient-to-r absolute inset-0 from-black via-[#051100]/70 to-[#0A1700]/40" />
      <div className="bg-lime-500/10 absolute inset-0 backdrop-blur-[2px]" />

      <div className="px-5 z-10 mx-auto max-w-7xl relative sm:px-8 lg:px-10">
        <div className="grid gap-12 items-center lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-2xl">
            <p className="mb-4 text-sm font-semibold text-lime-400 uppercase tracking-[0.22em]">
              (Download Our App)
            </p>

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Find
              <span className="text-lime-400"> Charging Stations</span>
              <br />
              Near You with
              <span className="text-lime-400"> Our App</span>
            </h2>

            <p className="mt-8 max-w-xl text-lg text-gray-300 leading-8">
              Locate nearby EV charging stations, check availability in
              real-time, navigate instantly, and manage your charging sessions
              with our smart mobile app.
            </p>

            {/* CTA Buttons */}
            <div className="flex-col mt-10 gap-4 flex sm:flex-row">
              <button className="gap-2 px-8 py-4 justify-center rounded-full bg-lime-400 font-semibold text-black flex items-center transition duration-300 hover:scale-105 hover:bg-lime-300">
                <Download size={20} />
                Download App
              </button>

              <button className="gap-2 px-8 py-4 justify-center rounded-full border border-lime-400/40 bg-black/40 font-semibold text-white flex items-center transition duration-300 hover:border-lime-400 hover:bg-lime-400/10">
                <MapPin size={20} />
                Find Station
              </button>
            </div>

            {/* Features */}
            <div className="flex-wrap mt-10 gap-6 text-sm text-gray-300 flex">
              <div className="gap-2 flex items-center">
                <span className="h-2 w-2 rounded-full bg-lime-400"></span>
                Live Availability
              </div>

              <div className="gap-2 flex items-center">
                <span className="h-2 w-2 rounded-full bg-lime-400"></span>
                GPS Navigation
              </div>

              <div className="gap-2 flex items-center">
                <span className="h-2 w-2 rounded-full bg-lime-400"></span>
                Secure Payments
              </div>
            </div>
          </div>

          {/* Right Phone Mockup */}
          <div className="justify-center relative flex lg:justify-end">
            {/* Glow */}
            <div className="h-80 w-80 rounded-full bg-lime-400/15 absolute blur-[100px]" />

            <img
              src={phoneMockup}
              alt="EV App"
              className="w-72 relative transition duration-500 hover:scale-105 sm:w-80 lg:w-[420px] drop-shadow-[0_0_60px_rgba(132,255,76,0.25)]"
            />
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="bottom-0 h-28 w-full bg-gradient-to-t absolute left-0 from-black to-transparent" />
    </section>
  );
}

export default Stations;
