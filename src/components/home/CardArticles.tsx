"use client";
import React from "react";
import Image from "next/image";
import ImageTest from "../../../public/images/cam-nang-du-lich-ho-guom-ha-noi-2023-2.png";
import { formatDay } from "@/utils/format";
import Link from "next/link";
interface CardArticlesProps {
  data: any;
}
const CardArticles: React.FC<CardArticlesProps> = ({ data }) => {
  const baseUrl = process.env.NEXT_PUBLIC_URL_BE || "";
  const image = data?.attributes?.seo?.thumbnail?.data?.attributes?.url;
  const createAt = formatDay(data?.attributes?.createdAt);
  console.log(data);

  return (
    <>
      <Link href={`blog/${data?.attributes?.slug}`}>
        {" "}
        <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
          {/* Background Image */}
          <Image
            src={`${baseUrl}${image}`}
            alt={data?.attributes?.title}
            layout="fill"
            objectFit="cover"
            className="brightness-75"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
            <h3 className="text-white font-bold text-lg">
              {data?.attributes?.title}
            </h3>
            <p className="text-gray-300 text-sm">{createAt}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CardArticles;
