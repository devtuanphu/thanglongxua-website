"use client";
import React from "react";
import Image from "next/image";
import ImageTest from "../../../public/images/cam-nang-du-lich-ho-guom-ha-noi-2023-2.png";

const CardArticles = () => {
  return (
    <div className="relative w-full h-[300px] rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
      {/* Background Image */}
      <Image
        src={ImageTest}
        alt="Discovering Hanoi: Must-See Tourist Attractions"
        layout="fill"
        objectFit="cover"
        className="brightness-75"
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4">
        <h3 className="text-white font-bold text-lg">
          Discovering Hanoi: Must-See Tourist Attractions
        </h3>
        <p className="text-gray-300 text-sm">Nov 23 2023</p>
      </div>
    </div>
  );
};

export default CardArticles;
