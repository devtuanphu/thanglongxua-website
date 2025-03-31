"use client";
import React from "react";
import Image from "next/image";
import { ClockCircleOutlined, StarFilled } from "@ant-design/icons";
import TestImage from "../../../public/images/Amazing-Hanoi-10-scaled.jpg";
import Link from "next/link";
interface CardArticlesProps {
  data: any;
}
const CardTour: React.FC<CardArticlesProps> = ({ data }) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BE || "";

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      {/* Tour Image */}
      <Link
        href={
          data?.attributes?.slug != undefined
            ? `/tour/${data?.attributes?.slug}`
            : `/tour/${data?.slug}`
        }
      >
        <div className="relative w-full h-[200px]">
          <Image
            src={
              data?.attributes?.seo?.thumbnail?.data?.attributes?.url
                ? `${baseUrl}${data.attributes.seo.thumbnail.data.attributes.url}`
                : data?.seo?.thumbnail?.url
                ? `${baseUrl}${data.seo.thumbnail.url}`
                : "/fallback-image.jpg"
            }
            alt="Amazing Mai Chau - Puluong - Ninh Binh 3 Days 2 Nights"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>

        {/* Tour Details */}
        <div className="p-4">
          {/* Title */}
          <h2 className="text-md font-bold text-gray-900">
            {data?.attributes?.title != undefined
              ? data?.attributes?.title
              : data?.title}
          </h2>

          {/* Duration */}
          <div className="flex items-center text-gray-600 text-sm mt-2">
            <ClockCircleOutlined className="mr-2 text-blue-500" />
            {data?.attributes?.time != undefined
              ? data?.attributes?.time
              : data?.time}
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
              $
              {data?.attributes?.originalPrice != undefined
                ? data?.attributes?.originalPrice
                : data?.originalPrice}
            </span>
            <span className="text-blue-500 text-lg font-bold">
              $
              {data?.attributes?.discountPrice != undefined
                ? data?.attributes?.discountPrice
                : data?.discountPrice}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CardTour;
