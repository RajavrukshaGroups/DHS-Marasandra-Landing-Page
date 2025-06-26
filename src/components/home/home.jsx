import Amenities from "../amenities/amenities";
import ContactUs from "../contactus/contactus";
import Footer from "../footer/footer";
import Header from "../header/header";
import HeadImg from "../HeadImg/headImg";
import { LampDemo } from "../lamp/lampComp";
import LocationAdvantages from "../locAdv/locAdv";
import LocationAdvantageNew from "../locAdvNew/locAdvNew";
import PriceChart from "../pricechart/pricechart";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#a9e4f6] via-[#e5eff4] to-[#ffffff]">
      <Header />
      <main className="pt-[120px] sm:pt-[120px]">
        <HeadImg />
        {/* <LampDemo /> */}
        {/* <LocationAdvantages /> */}
        <LocationAdvantageNew />
        <Amenities />
        <PriceChart />
        <ContactUs />
        <Footer />
      </main>
    </div>
  );
};

export default HomePage;
