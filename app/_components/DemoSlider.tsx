"use client";

import React, { useState } from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const DemoSlider = () => {
    const [data, setData] = useState([
        {
            "id": 1,
            "image": "/images/slider/banner1.jpg"
        },
        {
            "id": 2,
            "image": "/images/slider/banner2.png"
        },
        {
            "id": 3,
            "image": "/images/slider/banner3.png"
        },
        {
            "id": 4,
            "image": "/images/slider/banner4.jpg"
        }
    ])
    return (
        <section className="w-full h-full">
            <Swiper
                pagination={{ type: "bullets", clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                className="h-[100vh]"
            >
                {data.map(({ id, image }) => (
                    <SwiperSlide key={id}>
                        <div 
                            style={{
                                background: `url(${image}) center center / cover scroll no-repeat`,
                            }}
                            className="h-[100vh]"
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default DemoSlider;