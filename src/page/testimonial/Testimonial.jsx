import React from "react";
import { Quote } from "lucide-react";
import user from "../../assets/user-01.jpg";

function Testimonial() {
  return (
    <section id="testimonials" className="py-24 bg-black text-white">
      <div className="px-5 mx-auto max-w-7xl sm:px-8 lg:px-10">
        <div className="grid gap-14 items-center lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Testimonial Card */}
          <div className="p-8 overflow-hidden rounded-3xl border border-lime-400/30 bg-black/80 shadow-[0_0_25px_rgba(132,255,76,0.08)] group relative transition-all duration-300 hover:border-lime-400 hover:shadow-[0_0_45px_rgba(132,255,76,0.18)] sm:p-10">
            {/* Glow Effect */}
            <div className="h-52 w-52 rounded-full bg-lime-400/10 absolute -top-24 -left-24 blur-3xl transition group-hover:bg-lime-400/20" />

            <Quote className="mb-6 text-lime-400" size={38} />

            <p className="text-lg text-gray-200 leading-9 sm:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem
              quaerat iste sapiente ullam repudiandae quas.
            </p>

            <div className="mt-10 gap-4 flex items-center">
              <img
                src={user}
                alt="Alpex Mark"
                className="h-16 w-16 rounded-full border-2 border-lime-400 object-cover shadow-[0_0_18px_rgba(132,255,76,0.25)]"
              />

              <div>
                <h3 className="text-2xl font-bold">Alpex Mark</h3>
                <p className="text-gray-400">SEO Specialist</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div>
            <p className="mb-4 text-sm font-semibold text-lime-400 uppercase tracking-[0.22em]">
              (Testimonials)
            </p>

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              WE are Trusted Over
              <span className="mt-3 text-lime-400 block">40+ Countries</span>
            </h2>

            <p className="mt-8 text-lg text-gray-400 leading-8">
              We provide trusted EV charging solutions across businesses,
              communities and smart cities with reliable technology and
              exceptional customer experience.
            </p>

            {/* Country Stats */}
            <div className="flex-wrap mt-10 gap-4 flex">
              <div className="px-6 py-4 rounded-2xl border border-lime-400/30 bg-lime-400/10 text-center">
                <h3 className="text-3xl font-bold text-lime-400">40+</h3>
                <p className="text-sm text-gray-300">Countries</p>
              </div>

              <div className="px-6 py-4 rounded-2xl border border-lime-400/30 bg-lime-400/10 text-center">
                <h3 className="text-3xl font-bold text-lime-400">10K+</h3>
                <p className="text-sm text-gray-300">Happy Clients</p>
              </div>

              <div className="px-6 py-4 rounded-2xl border border-lime-400/30 bg-lime-400/10 text-center">
                <h3 className="text-3xl font-bold text-lime-400">99%</h3>
                <p className="text-sm text-gray-300">Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
