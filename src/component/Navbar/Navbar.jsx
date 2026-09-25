import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#" },
  { name: "Services", href: "#" },
  { name: "Features", href: "#" },
  { name: "Testimonial", href: "#" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="top-0 z-50 w-full fixed left-0">
        <div className="px-4 pt-3 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="rounded-full border border-white/10 bg-black/70 backdrop-blur-xl">
            <div className="px-5 h-16 justify-between flex items-center lg:h-20 lg:px-8">
              {/* Logo */}
              <a href="#" className="text-3xl font-extrabold tracking-tight">
                <span className="text-lime-400">Ev</span>
                <span className="text-white">Hub</span>
              </a>

              {/* Desktop Menu */}
              <nav className="gap-10 hidden lg:flex items-center">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-white/80 hover:text-lime-300 transition"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Right Side */}
              <div className="gap-3 flex items-center">
                <button className="gap-2 px-6 py-3 rounded-full bg-lime-400 font-semibold text-black hidden sm:flex items-center transition hover:scale-105 hover:bg-lime-300">
                  Get Started
                  <ArrowUpRight size={18} />
                </button>

                {/* Mobile Menu Button */}
                <button
                  onClick={() => setOpen(!open)}
                  className="h-12 w-12 justify-center rounded-xl bg-lime-400 text-black flex items-center transition hover:scale-105 lg:hidden"
                >
                  {open ? <X size={26} /> : <Menu size={26} />}
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-300 ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div
          className="bg-black/60 absolute inset-0 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />

        <div
          className={`absolute left-0 right-0 top-24 mx-4 overflow-hidden rounded-3xl border border-white/10 bg-[#161616]/95 transition-all duration-300 ${
            open ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          <nav className="flex-col flex">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-8 py-7 border-b border-white/10 text-lg text-white hover:bg-white/5 hover:text-lime-300 transition"
              >
                {item.name}
              </a>
            ))}

            <div className="p-6">
              <button className="gap-2 px-6 py-4 w-full justify-center rounded-full bg-lime-400 text-lg font-semibold text-black flex items-center transition hover:bg-lime-300">
                Get Started
                <ArrowUpRight size={20} />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
