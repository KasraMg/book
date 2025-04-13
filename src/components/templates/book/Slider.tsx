"use client";
import Title from "@/components/modules/title/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Book from "../index/books/Card";
import Card from "../index/authors/Card";

interface Props {
  title?: string;
  className?: string;
  authors?: boolean;
}
const Slider = (props: Props) => {
  return (
    <div
      className={`${props.className ? props.className : ""} mt-10 w-full overflow-hidden`}
    >
      <div className="container mx-auto px-4">
        {props.title ? <Title title={props.title} /> : ""}

        <div className="relative grid">
          {props.authors ? (
            <Swiper
              rewind
              modules={[Pagination]}
              className="mySwiper !pb-10 !pt-3"
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
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView:3,
                  spaceBetween: 20,
                },
              }}
            >
              {[...Array(9)].map((_, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <Card />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <Swiper
              rewind
              modules={[Pagination]}
              className="mySwiper !pb-10 !pt-3"
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
                  slidesPerView: 3,
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
                  <Book slider />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slider;
