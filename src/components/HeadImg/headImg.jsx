import headImg from "../../assets/marasandra-home.png";

const HeadImg = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Image on Left */}
        <div className="md:w-1/2 w-full flex justify-center md:justify-start">
          <img
            src={headImg}
            alt="Defence Habitat Marasandra"
            className="w-[250px] sm:w-[300px] md:w-[380px] lg:w-[600px] h-auto object-contain rounded-xl"
          />
        </div>

        {/* Text Content on Right */}
        <div className="md:w-1/2 w-full backdrop-blur-sm p-6 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 whitespace-nowrap">
            Defence Habitat - Marasandra
          </h1>

          <p className="mt-2 text-blue-900 text-sm sm:text-base md:text-lg font-medium">
            📍 North-Bangalore, Yelahanka – Doddaballapur Road
          </p>

          <div className="mt-4 text-gray-800 text-sm sm:text-base space-y-2">
            <p>Allotment of plots will be confirmed on</p>
            <p className="text-red-600 font-semibold">
              “First Come First Serve” Basis.
            </p>
            <p className="text-green-700 font-bold uppercase">
              Booking Open for General Public
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeadImg;
