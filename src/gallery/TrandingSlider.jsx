import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "./TrandingSlider.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  "/images/slider/IMG_2289.webp",
  "/images/slider/IMG_2288.webp",
  "/images/slider/IMG_2287.webp",
  "/images/slider/IMG_2286.webp",
  "/images/slider/IMG_2285.webp",
  "/images/slider/IMG_2284.webp",
  "/images/slider/IMG_2281.webp",
  "/images/slider/IMG_2279.webp",
  "/images/slider/IMG_2278.webp",
  "/images/slider/IMG_2276.webp",
  "/images/slider/IMG_2273.webp",
  "/images/slider/IMG_2267.webp",
  "/images/slider/IMG_2265.webp",
  "/images/slider/IMG_2264.webp",
  "/images/slider/IMG_2263.webp",
  "/images/slider/IMG_2262.webp",
  "/images/slider/IMG_2261.webp",
  "/images/slider/IMG_2260.webp",
  "/images/slider/IMG_2259.webp",
  "/images/slider/IMG_2256.webp",
  "/images/slider/IMG_2254.webp",
  "/images/slider/IMG_2253.webp",
  "/images/slider/IMG_2252.webp",
  "/images/slider/IMG_2248.webp",
  "/images/slider/IMG_2247.webp",
  "/images/slider/IMG_2246.webp",
  "/images/slider/IMG_2244.webp",
  "/images/slider/IMG_2243.webp",
  "/images/slider/IMG_2239.webp",
  "/images/slider/IMG_2238.webp"
];

const TrandingSlider = () => {

  const pStyle = {
          background: "none",
          color: "#555",
        };

  return (
    <div className="container" style={{ textAlign: "center", padding: "20px" }}>
      <h1
        style={{ color: "#555", fontFamily: "Oswald, Arial", fontSize: "24px" }}
      >
        OUR PRE-WEDDING GALLERY
      </h1>
      <p style={{ ...pStyle, fontFamily: "Caveat, Arial" }}>
        Our photoshoot took place at <br />Angkor Wat, Siem Reap
      </p>
      <Swiper
        className="tranding-slider"
        modules={[EffectCoverflow, Pagination, Navigation]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={img} alt={`PIC ${index + 1}`} loading="lazy" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <p style={{ ...pStyle, fontFamily: "Oswald, Arial", fontSize: "13px" }}>
        Swipe the photo left or right to see more.
      </p>
    </div>
  );
};

export default TrandingSlider;
