"use client";
import React from "react";
import Image from "next/image";

interface BannerProps {
  imageUrl: string;
  title: string;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, title }) => {
  return (
    <div className="relative w-full h-[200px] md:h-[400px] lg:h-[300px] overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        layout="fill"
        objectFit="cover"
        className="brightness-75"
        priority
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
