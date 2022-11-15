import "./GallerySwiper.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import HoddieBlackRed from "../hoddie-iti-black-red-no-shadows.png"
import GapBlackRed from "../gap-iti-black-red.png"
import CupBlackRed from "../cup-iti-black-red.png"

export const GallerySwiper = () => (
    <>
        <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide><img src={HoddieBlackRed} alt="hola"/></SwiperSlide>
            <SwiperSlide><img src={GapBlackRed} alt="hola"/></SwiperSlide>
            <SwiperSlide><img src={CupBlackRed} alt="hola"/></SwiperSlide>
        </Swiper>
    </>
    
);