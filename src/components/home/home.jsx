import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  ArrowUpCircle,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MessageCircle,
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
    const toggleVisibility = () => {
      const threshold = window.innerWidth < 640 ? 50 : 300;
      setVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", toggleVisibility);
    toggleVisibility(); // Initial check on load
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
          visible
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } sm:opacity-100 sm:pointer-events-auto`}
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
            href="https://www.facebook.com/defencehabitat/"
            target="_blank"
            rel="noopener noreferrer"
            // className="group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow border border-white bg-white transition-all duration-500 hover:bg-[#1877f2]"
            className="group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow border border-white bg-white transition-colors duration-500 hover:bg-[#1877f2]"
          >
            {/* <Facebook className="w-5 h-5 text-[#24447c] group-hover:text-white transition duration-300" /> */}
            <Facebook className="w-5 h-5 text-[#24447c] group-hover:text-white transition-colors duration-500" />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/defence_habitat/"
            target="_blank"
            rel="noopener noreferrer"
            // className="group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow border border-white bg-white transition-all duration-500 hover:bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]"
            className="group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow border border-white bg-white transition-colors duration-500 hover:bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]"
          >
            {/* <Instagram className="w-5 h-5 text-[#24447c] group-hover:text-white transition duration-300" /> */}
            <Instagram className="w-5 h-5 text-[#24447c] group-hover:text-white transition-colors duration-500" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=fR1d7O_xQlQ"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow border border-white bg-white transition-colors duration-500 hover:bg-[#FF0000]"
          >
            <Youtube className="w-5 h-5 text-[#24447c] group-hover:text-white transition-colors duration-500" />
          </a>

          {/* Twitter */}
          <a
            href="https://x.com/DefenceSociety"
            target="_blank"
            rel="noopener noreferrer"
            // className="group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow border border-white bg-white transition-all duration-500 hover:bg-[#1da1f2]"
            className="group w-10 h-10 flex items-center justify-center rounded-full overflow-hidden shadow border border-white bg-white transition-colors duration-500 hover:bg-[#1da1f2]"
          >
            {/* <Twitter className="w-5 h-5 text-[#24447c] group-hover:text-white transition duration-300" /> */}
            <Twitter className="w-5 h-5 text-[#24447c] group-hover:text-white transition-colors duration-500" />
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
    <>
      <Helmet>
        <title>
          Plots for Sale in Marasandra North Bangalore | Premium Gated Community
        </title>
        <meta
          name="description"
          content="Discover premium residential and gated community plots for sale in Marasandra, North Bangalore. Ideal for investment and living with excellent connectivity."
        />
        <meta
          name="keywords"
          content="Marasandra North Bangalore, Plots for sale in Marasandra, Premium land in Bangalore, Residential projects, Gated community plots, Real estate in North Bangalore, Property investment Marasandra"
        />
        <meta
          property="og:title"
          content="Premium Plots for Sale in Marasandra North Bangalore"
        />
        <meta
          property="og:description"
          content="Affordable and luxury gated community plots in Marasandra North Bangalore. Explore investment opportunities now."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://defence-habitat-marasandra.defencehousingsociety.com/"
        />
        <meta
          property="og:image"
          content="https://defence-habitat-marasandra.defencehousingsociety.com/preview.jpg"
        />
        <link
          rel="canonical"
          href="https://defence-habitat-marasandra.defencehousingsociety.com/"
        />
      </Helmet>
      ;
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
    </>
  );
};

export default HomePage;
