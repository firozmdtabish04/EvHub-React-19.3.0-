import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar/Navbar";
import Footer from "../component/footer/Footer";

export default function MainLayout() {
  return (
    <div className="bg-[#020814] text-white min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
