import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Features", href: "#features" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Stations", href: "#stations" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header className="top-0 z-50 w-full fixed left-0">
        <div className="px-4 pt-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div
            className={`rounded-full transition-all duration-500 ${
              scrolled
                ? "border border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_0_30px_rgba(132,255,76,0.08)]"
                : "bg-transparent"
            }`}
          >
            <div className="px-5 h-16 justify-between flex items-center lg:h-20 lg:px-8">
              {/* Logo */}
              <NavLink
                to="/"
                className="text-3xl font-extrabold tracking-tight"
              >
                <span className="text-lime-400">Ev</span>
                <span className="text-white">Hub</span>
              </NavLink>

              {/* Desktop Menu */}
              <nav className="gap-8 hidden items-center lg:flex">
                {navLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm font-medium text-white/80 relative transition hover:text-lime-400"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(item.href)?.scrollIntoView({
                        behavior: "smooth",
                      });
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>

              {/* Desktop Right Buttons */}
              <div className="gap-3 hidden items-center sm:flex">
                <NavLink
                  to="/login"
                  className="px-5 py-2.5 rounded-full border border-white/15 text-white transition hover:border-lime-400 hover:text-lime-400"
                >
                  Login
                </NavLink>

                <NavLink
                  to="/register"
                  className="gap-2 px-6 py-2.5 rounded-full bg-lime-400 font-semibold text-black flex items-center transition hover:scale-105 hover:bg-lime-300"
                >
                  Register
                  <ArrowUpRight size={18} />
                </NavLink>
              </div>

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
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          open ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        {/* Overlay */}
        <div
          className="bg-black/60 absolute inset-0 backdrop-blur-md"
          onClick={() => setOpen(false)}
        />

        {/* Menu */}
        <div
          className={`absolute left-0 right-0 top-24 mx-4 overflow-hidden rounded-3xl border border-white/10 bg-[#111111]/95 backdrop-blur-xl transition-all duration-300 ${
            open ? "translate-y-0" : "-translate-y-6"
          }`}
        >
          <nav className="flex-col flex">
            {navLinks.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `border-b border-white/10 px-8 py-6 text-lg transition ${
                    isActive
                      ? "bg-lime-400/10 text-lime-400"
                      : "text-white hover:bg-white/5"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* Mobile Auth Buttons */}
            <div className="p-6 space-y-3">
              <NavLink
                to="/login"
                onClick={() => setOpen(false)}
                className="px-6 py-3 w-full justify-center rounded-full border border-white/10 text-white flex items-center transition hover:border-lime-400 hover:text-lime-400"
              >
                Login
              </NavLink>

              <NavLink
                to="/register"
                onClick={() => setOpen(false)}
                className="gap-2 px-6 py-3 w-full justify-center rounded-full bg-lime-400 font-semibold text-black flex items-center transition hover:bg-lime-300"
              >
                Register
                <ArrowUpRight size={20} />
              </NavLink>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
