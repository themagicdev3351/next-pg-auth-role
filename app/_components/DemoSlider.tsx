"use client";

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


interface Slide {
    id: number; 
    image: string; 
} 

interface DemoSliderProps {
    data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
    return (
        <section className="w-full h-[500px]">
            <Swiper
                pagination={{ type: "bullets", clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                className="h-[500px]"
            >
                {data.map(({ id, image }) => (
                    <SwiperSlide key={id}>
                        <div
                            className="h-full w-full absolute left-0 top-0"
                            style={{
                                background: `url(${image}) center center / cover scroll no-repeat`,
                            }}
                        ></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default DemoSlider;