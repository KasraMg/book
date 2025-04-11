"use client";
import Title from "@/components/modules/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Card from "../index/books/Card";

const Slider = () => {
  return (
    <div className="mt-10 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <Title title="Similar books" />

        <div className="relative grid">
          <Swiper
            rewind
            modules={[Pagination]}
            className="mySwiper !pt-3 !pb-10"
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 20,
              },
            }}
          >
            {[...Array(9)].map((_, index) => (
              <SwiperSlide key={index} className="flex justify-center">
                <Card slider/>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Slider;
