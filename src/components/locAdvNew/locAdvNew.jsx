import locAdvGif from "../../assets/locadv.gif";
import marAdv from "../../assets/mar-adv.gif";
import { useEffect, useRef } from "react";

const LocationAdvantageNew = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleEnded = () => {
      // Pause and restart after a delay
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play();
        }
      }, 10000); // 2 seconds pause
    };

    if (video) {
      video.addEventListener("ended", handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener("ended", handleEnded);
      }
    };
  }, []);
  return (
    <section className="py-0 px-0">
      <h2 className="text-2xl font-bold text-center text-[#24447c] mb-6 pt-6">
        Location Advantage
      </h2>
      <div className="w-full overflow-hidden">
        {/* <img
          src={marAdv}
          alt="Location Advantage Animation"
          className="w-full h-auto object-cover block"
        /> */}
        <video
          ref={videoRef}
          // src="https://res.cloudinary.com/dx7pz8dor/video/upload/v1751020282/mar-adv_2_l4rzyg.mp4"
          src="https://res.cloudinary.com/dx7pz8dor/video/upload/v1751101136/flight-card-28_ydrlv9.mp4"
          autoPlay
          muted
          playsInline
          className="w-full h-auto object-cover block"
        />
      </div>
    </section>
  );
};

export default LocationAdvantageNew;
