import locAdvGif from "../../assets/locadv.gif";

const LocationAdvantageNew = () => {
  return (
    <section className="py-5 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-[#24447c] mb-10">
        📍 Location Advantage
      </h2>
      <div className="flex justify-center items-center">
        <img
          src={locAdvGif}
          alt="Location Advantage Animation"
          className="w-full max-w-3xl"
        />
      </div>
    </section>
  );
};

export default LocationAdvantageNew;
