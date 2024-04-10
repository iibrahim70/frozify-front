"use client";

// Import Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Import banner assets
import bannerTwo from "@/assets/banner/banner-2.jpg";
import bannerThree from "@/assets/banner/banner-3.jpg";
import bannerFour from "@/assets/banner/banner-4.jpg";
import bannerFive from "@/assets/banner/banner-5.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Create an array of banner images (excluding the first one, which is a video)
const bannerImages = [bannerTwo, bannerThree, bannerFour, bannerFive];

const Hero = () => {
  return (
    <section>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <video
            autoPlay
            loop
            muted
            src={require("../assets/banner/banner-1.mp4")}
          />
        </SwiperSlide>

        {bannerImages.map((banner, index) => (
          <SwiperSlide key={index}>
            <Image src={banner} alt={`Banner ${index + 2}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
