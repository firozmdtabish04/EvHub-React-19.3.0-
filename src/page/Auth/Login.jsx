import { Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import AuthBackground from "./AuthBackground";
import MouseGlow from "./MouseGlow";

export default function Login() {
  return (
    <div className="min-h-screen overflow-hidden bg-black relative">
      <MouseGlow />

      <div className="absolute inset-0">
        <AuthBackground />
      </div>

      <div className="bg-black/65 absolute inset-0 backdrop-blur-sm" />

      <div className="px-5 z-10 min-h-screen justify-center relative flex items-center">
        <div className="p-8 w-full max-w-md rounded-3xl border border-lime-400/20 bg-white/5 shadow-[0_0_50px_rgba(132,255,76,0.12)] backdrop-blur-xl">
          <h1 className="text-center text-4xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="mt-3 text-center text-gray-400">
            Login to your EVHub account
          </p>

          <div className="mt-8 space-y-5">
            <div className="px-4 py-3 rounded-xl border border-white/10 bg-black/30 flex items-center">
              <Mail className="text-lime-400" />
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-white ml-3 outline-none"
              />
            </div>

            <div className="px-4 py-3 rounded-xl border border-white/10 bg-black/30 flex items-center">
              <Lock className="text-lime-400" />
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent text-white ml-3 outline-none"
              />
            </div>

            <button className="gap-2 py-3 w-full justify-center rounded-xl bg-lime-400 font-semibold text-black flex items-center transition hover:bg-lime-300">
              Login
              <ArrowRight size={18} />
            </button>
          </div>

          <p className="mt-6 text-center text-gray-400">
            Don't have an account?
            <Link to="/register" className="ml-2 text-lime-400 hover:underline">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
