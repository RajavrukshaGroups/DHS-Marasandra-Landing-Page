import { useEffect, useState } from "react";
import {
  ArrowUpCircle,
  Facebook,
  Instagram,
  Twitter,
  ArrowRight,
} from "lucide-react";
import Amenities from "../amenities/amenities";
import ContactUs from "../contactus/contactus";
import Footer from "../footer/footer";
import Header from "../header/header";
import HeadImg from "../HeadImg/headImg";
import LocationAdvantageNew from "../locAdvNew/locAdvNew";
import PriceChart from "../pricechart/pricechart";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [showSocials, setShowSocials] = useState(true); // show by default

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleSocials = () => setShowSocials((prev) => !prev);

  return (
    <>
      {/* Social Media Button & Icons - LEFT SIDE */}
      <div
        className={`fixed bottom-20 left-6 z-50 transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-500 ${
            showSocials
              ? "opacity-100 max-h-[200px]"
              : "opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          {/* Facebook */}
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow border border-white bg-white transition-all duration-500 hover:bg-[#1877f2]"
          >
            <Facebook className="w-5 h-5 text-[#24447c] group-hover:text-white transition duration-300" />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow border border-white bg-white transition-all duration-500 hover:bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]"
          >
            <Instagram className="w-5 h-5 text-[#24447c] group-hover:text-white transition duration-300" />
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow border border-white bg-white transition-all duration-500 hover:bg-[#1da1f2]"
          >
            <Twitter className="w-5 h-5 text-[#24447c] group-hover:text-white transition duration-300" />
          </a>
        </div>

        {/* Toggle Button (Arrow) */}
        <button
          onClick={toggleSocials}
          className="mt-3 bg-[#24447c] text-white p-3 rounded-full shadow-lg hover:bg-[#1c3764]"
          aria-label="Toggle Social Media"
        >
          <ArrowRight
            className={`w-5 h-5 transform transition-transform duration-300 cursor-pointer ${
              showSocials ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      {/* Scroll To Top Button - RIGHT SIDE */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-[#24447c] text-white p-3 rounded-full shadow-lg transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0 pointer-events-none"
        } hover:bg-[#1c3764]`}
        aria-label="Scroll to top"
      >
        <ArrowUpCircle className="w-6 h-6 hover:cursor-pointer" />
      </button>
    </>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a9e4f6] via-[#e5eff4] to-[#ffffff]">
      <Header />
      <main className="pt-[120px] sm:pt-[120px]">
        <HeadImg />
        <LocationAdvantageNew />
        <Amenities />
        <PriceChart />
        <ContactUs />
        <Footer />
        <ScrollToTopButton />
      </main>
    </div>
  );
};

export default HomePage;
