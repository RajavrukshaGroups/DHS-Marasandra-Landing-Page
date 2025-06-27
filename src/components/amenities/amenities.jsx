import {
  FaWater,
  FaBolt,
  FaToilet,
  FaBuilding,
  FaTree,
  FaLightbulb,
  FaRoad,
  FaVideo,
} from "react-icons/fa";
import { GiWaterRecycling, GiStreetLight } from "react-icons/gi";

const amenitiesList = [
  { title: "Water Infrastructure", icon: FaWater },
  { title: "Electrical Networks", icon: FaBolt },
  { title: "Sewage Solutions", icon: GiWaterRecycling },
  { title: "Clubhouse", icon: FaBuilding },
  { title: "Multiple Parks", icon: FaTree },
  { title: "Street Lights", icon: GiStreetLight },
  { title: "Blacktop Roads", icon: FaRoad },
  { title: "CCTV Surveillance", icon: FaVideo },
];

const Amenities = () => {
  return (
    <section className="py-15 px-4 sm:px-6 lg:px-20">
      <h2 className="text-2xl font-bold text-center text-[#24447c] mb-10">
        Our Amenities
      </h2>

      <div className="flex gap-10 justify-center items-center flex-wrap">
        {amenitiesList.map(({ title, icon: Icon }, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center text-center max-w-[150px]"
          >
            <div className="w-16 h-16 rounded-full bg-[#e6f0fa] flex items-center justify-center mb-3 shadow">
              <Icon className="w-7 h-7 text-[#24447c]" />
            </div>
            <h4 className="text-sm font-semibold text-[#24447c] text-center">
              {title}
            </h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Amenities;
