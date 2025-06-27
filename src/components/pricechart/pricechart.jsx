import priceChart from "../../assets/price-upd.png";

const PriceChart = () => {
  return (
    <section className="py-10 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-[#24447c] mb-10">
        Price Chart
      </h2>
      <div className="flex justify-center">
        <img
          src={priceChart}
          alt="Marasandra Price Chart"
          className="max-w-full h-auto"
        />
      </div>
    </section>
  );
};

export default PriceChart;
