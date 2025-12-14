import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // ✅ Correct import for v9+
import "swiper/css"; // core Swiper CSS

function SafetyCarousel() {
  return (
    <Swiper
      modules={[Autoplay]} // register the module
      spaceBetween={20}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
    >
      <SwiperSlide>
        <img src="https://picsum.photos/500/300?random=1" alt="Safety 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/500/300?random=1" alt="Safety 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://picsum.photos/500/300?random=1" alt="Safety 3" />
      </SwiperSlide>
    </Swiper>
  );
}

export default SafetyCarousel;


