import locAdvGif from "../../assets/locadv.gif";
import marAdv from "../../assets/mar-adv.gif";

const LocationAdvantageNew = () => {
  return (
    <section className="py-0 px-0">
      <h2 className="text-2xl font-bold text-center text-[#24447c] mb-6 pt-6">
        Location Advantage
      </h2>
      <div className="w-full overflow-hidden">
        <img
          src={marAdv}
          alt="Location Advantage Animation"
          className="w-full h-auto object-cover block"
        />
      </div>
    </section>
  );
};

export default LocationAdvantageNew;
