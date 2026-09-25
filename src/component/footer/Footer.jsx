import React from "react";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaLinkedinIn,
} from "react-icons/fa6";

function Footer() {
  const companyLinks = [
    "Home",
    "About",
    "Services",
    "Features",
    "Testimonials",
  ];

  const serviceLinks = [
    "Home Charging",
    "AC Charging",
    "DC Charging",
    "Smart Technology",
    "Warranty Support",
  ];

  const socialIcons = [
    { icon: FaFacebookF, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaXTwitter, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
  ];

  return (
    <footer className="overflow-hidden border-t border-lime-400/10 bg-black text-white relative">
      {/* Background Glow */}
      <div className="h-80 w-80 rounded-full bg-lime-400/10 absolute -top-24 left-1/2 -translate-x-1/2 blur-[140px]" />

      <div className="px-5 py-20 mx-auto max-w-7xl relative sm:px-8 lg:px-10">
        {/* Newsletter */}
        <div className="mb-20 p-8 rounded-3xl border border-lime-400/20 bg-gradient-to-r shadow-[0_0_45px_rgba(132,255,76,0.08)] from-lime-500/10 via-black to-black lg:flex lg:items-center lg:justify-between">
          <div className="max-w-xl">
            <p className="mb-2 text-sm font-semibold text-lime-400 uppercase tracking-[0.22em]">
              Stay Updated
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Get EV Charging Updates
            </h2>

            <p className="mt-3 text-gray-400 leading-7">
              Subscribe to receive the latest charging station updates, EV
              technology news and exclusive offers.
            </p>
          </div>

          <div className="flex-col mt-8 gap-3 w-full max-w-md flex lg:mt-0 lg:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full border border-lime-400/20 bg-white/5 text-white outline-none transition placeholder:text-gray-500 focus:border-lime-400"
            />

            <button className="gap-2 px-6 py-3 justify-center rounded-full bg-lime-400 font-semibold text-black flex items-center transition-all duration-300 hover:scale-105 hover:bg-lime-300">
              Subscribe
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Footer Grid */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-4xl font-extrabold">
              <span className="text-lime-400">Ev</span>Hub
            </h2>

            <p className="mt-5 text-gray-400 leading-7">
              Building the future of EV charging with smart technology,
              sustainable infrastructure and seamless connectivity.
            </p>

            <div className="mt-8 gap-3 flex">
              {socialIcons.map(({ icon: Icon, href }, index) => (
                <a
                  key={index}
                  href={href}
                  className="h-11 w-11 justify-center rounded-full border border-lime-400/20 bg-white/5 text-gray-300 flex items-center transition-all duration-300 hover:scale-110 hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Company</h3>

            <div className="space-y-4">
              {companyLinks.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-gray-400 block transition hover:text-lime-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Services</h3>

            <div className="space-y-4">
              {serviceLinks.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-400 block transition hover:text-lime-400"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-xl font-bold">Contact</h3>

            <div className="space-y-5">
              <div className="gap-3 flex items-start">
                <MapPin className="mt-1 text-lime-400" size={18} />
                <p className="text-gray-400">Bhubaneswar, Odisha, India</p>
              </div>

              <div className="gap-3 flex items-center">
                <Phone className="text-lime-400" size={18} />
                <p className="text-gray-400">+91 98765 43210</p>
              </div>

              <div className="gap-3 flex items-center">
                <Mail className="text-lime-400" size={18} />
                <p className="text-gray-400">support@evhub.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex-col mt-16 gap-4 pt-8 justify-between border-t border-lime-400/10 text-sm text-gray-500 flex items-center sm:flex-row">
          <p>© 2026 EvHub. All rights reserved.</p>

          <div className="gap-6 flex">
            <a href="#" className="transition hover:text-lime-400">
              Privacy Policy
            </a>

            <a href="#" className="transition hover:text-lime-400">
              Terms
            </a>

            <a href="#" className="transition hover:text-lime-400">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
