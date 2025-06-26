import {
  MapPin,
  Train,
  Building,
  ShoppingBag,
  Plane,
  Hospital,
  School,
  Briefcase,
  Landmark,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const advantages = [
  {
    icon: MapPin,
    title: "Close to SH-09",
    desc: "Located near the 4-lane State Highway.",
  },
  {
    icon: Train,
    title: "Rajanukunte Railway",
    desc: "Seamless rail connectivity nearby.",
  },
  {
    icon: Building,
    title: "KIADB Industrial",
    desc: "Near Doddaballapura's KIADB area.",
  },
  {
    icon: ShoppingBag,
    title: "Century Eden Mall",
    desc: "Retail & lifestyle hub coming soon.",
  },
  {
    icon: Briefcase,
    title: "ITIR & Aerospace",
    desc: "Next to ITIR/SEZ and Aerospace Park.",
  },
  {
    icon: Plane,
    title: "20 mins to Airport",
    desc: "Fast access to Bangalore Airport.",
  },
  {
    icon: Landmark,
    title: "Residential Projects",
    desc: "Next to luxury housing projects.",
  },
  { icon: Hospital, title: "Hospitals", desc: "Close to Manipal Hospital." },
  {
    icon: School,
    title: "Education Hub",
    desc: "Nearby top schools like Navodaya.",
  },
];

const LocationAdvantages = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-20">
      <h2 className="text-3xl font-bold text-center text-[#24447c] mb-6">
        📍 Location Advantages
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12 text-sm">
        Discover the booming growth and rising opportunities in North Bangalore
        — from infrastructure to lifestyle, this prime location offers unmatched
        benefits for homebuyers and investors alike.
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {advantages.map(({ icon: Icon, title, desc }, index) => {
          const cardRef = useRef(null);
          const isInView = useInView(cardRef, { once: true, amount: 0.3 });

          return (
            <motion.div
              key={index}
              ref={cardRef}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative rounded-xl bg-gradient-to-br from-[#a9e4f6] via-[#f0faff] text-blue px-6 py-5 w-[330px] mx-auto shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              {/* Icon and Title */}
              <div className="flex items-center gap-3">
                <div className=" text-blue-700 rounded-full p-2 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-semibold">{title}</h4>
              </div>

              {/* Description appears on hover of the card */}
              <p className="text-xs mt-3 text-blue text-opacity-90 leading-snug opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default LocationAdvantages;
