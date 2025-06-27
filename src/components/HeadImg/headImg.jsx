import headImg from "../../assets/marasandra-home.png";

const HeadImg = () => {
  return (
    <section className="w-full px-4 sm:px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image on Left */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <img
            src={headImg}
            alt="Defence Habitat Marasandra"
            className="w-full max-w-[300px] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[520px] h-auto object-contain"
          />
        </div>

        {/* Text Content on Right */}
        <div className="w-full md:w-1/2 p-4 sm:p-6 text-center md:text-left space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            Defence Habitat <br className="hidden md:block" />
            <span className="text-[#24447c]">Marasandra</span>
          </h1>
         

          <p className="text-blue-900 text-base sm:text-lg font-medium">
            📍 North Bangalore – Yelahanka – Doddaballapur Road
          </p>

          <div className="mt-2 text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
            <p>Allotment of plots will be confirmed on</p>
            <p className="text-red-600 font-semibold italic">
              “First Come First Serve” Basis
            </p>
            <p className="text-green-700 font-bold uppercase">
              Booking Open for General Public
            </p>
          </div>

          {/* Optional CTA Button */}
          {/* <div className="mt-4">
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-blue-800 text-white rounded-md text-sm sm:text-base font-medium hover:bg-blue-700 transition"
            >
              Contact Now
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeadImg;
