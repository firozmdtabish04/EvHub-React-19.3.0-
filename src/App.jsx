import Navbar from "./component/Navbar/Navbar";
import Home from "./page/home/Home";
import About from "./page/about/About";
import Service from "./page/service/Service";
import Features from "./page/features/Features";
import Testimonial from "./page/testimonial/Testimonial";

export default function App() {
  return (
    <div className="bg-[#020814] text-white">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Features />
      <Testimonial/>
    </div>
  );
}
