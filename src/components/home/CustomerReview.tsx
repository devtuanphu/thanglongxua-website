"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import CardReview from "./CardReview";

// Import CSS của Swiper
import "swiper/css";
import "swiper/css/pagination";

const CustomerReview = () => {
  return (
    <div className="container py-8">
      {/* Title */}
      <h2 className="text-center font-bold text-[28px] text-black mb-8">
        Customer Reviews
      </h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 }, // Tablet: Hiển thị 2 card
          1024: { slidesPerView: 3 }, // Desktop: Hiển thị 3 card
        }}
        className="!static" // Fix pagination bị mất
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <CardReview />
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <CardReview />
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <CardReview />
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide>
          <CardReview />
        </SwiperSlide>
      </Swiper>

      {/* Pagination (Dấu dot) */}
      <div className="mt-6 flex justify-center">
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default CustomerReview;
