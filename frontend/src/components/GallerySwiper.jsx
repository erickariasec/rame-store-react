import "./GallerySwiper.css"
import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
//import HoddieBlackRed from "../hoddie-iti-black-red-no-shadows.png"
//import GapBlackRed from "../hoddie-iti-yellow-red.png"
//import CupBlackRed from "../cup-iti-black-red.png"

export const GallerySwiper = () => {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const res = await axios.get("http://localhost:8800/carrusel");
                setProducts(res.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchAllProducts();
    }, []);

    
    return (
    <>
        {loading ? <h1 style={{textAlign:"center"}}>Loading...</h1> : (<Swiper
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
            {products.map((product) => (
                <SwiperSlide><img src={product.image} className="card-img-top img-fluid" alt="hola" width={40}/></SwiperSlide>
                ))}
        </Swiper>)}
    </>
    
)};