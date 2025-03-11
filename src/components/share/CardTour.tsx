"use client";
import React from "react";
import Image from "next/image";
import { ClockCircleOutlined, StarFilled } from "@ant-design/icons";
import TestImage from "../../../public/images/Amazing-Hanoi-10-scaled.jpg";

const CardTour = () => {
  // Giá gốc và giá khuyến mãi
  const originalPrice = 599;
  const discountPrice = 429;

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Tour Image */}
      <div className="relative w-full h-[200px]">
        <Image
          src={TestImage}
          alt="Amazing Mai Chau - Puluong - Ninh Binh 3 Days 2 Nights"
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>

      {/* Tour Details */}
      <div className="p-4">
        {/* Title */}
        <h3 className="text-md font-bold text-gray-900">
          AMAZING MAI CHAU - PULUONG - NINH BINH 3 DAYS 2 NIGHTS
        </h3>

        {/* Duration */}
        <div className="flex items-center text-gray-600 text-sm mt-2">
          <ClockCircleOutlined className="mr-2 text-blue-500" />3 Days 2 Nights
        </div>

        {/* Rating */}
        <div className="flex items-center text-yellow-400 mt-2">
          {[...Array(5)].map((_, index) => (
            <StarFilled key={index} className="text-lg" />
          ))}
        </div>

        {/* Price - Discounted */}
        <div className="mt-3 text-gray-600 text-sm">
          <span className="mr-2 line-through text-gray-400 text-base">
            ${originalPrice}
          </span>
          <span className="text-blue-500 text-lg font-bold">
            ${discountPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardTour;
