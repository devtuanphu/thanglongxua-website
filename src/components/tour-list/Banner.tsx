"use client";
import React from "react";
import Image from "next/image";

interface BannerProps {
  imageUrl: string;
  title: string;
  width?: number;
  height?: number;
}

const Banner: React.FC<BannerProps> = ({ imageUrl, title, width, height }) => {
  return (
    <div className="relative w-full   overflow-hidden">
      {/* Background Image */}
      <Image
        src={imageUrl}
        alt={title}
        className="brightness-75"
        priority
        width={width}
        height={height}
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl md:text-5xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default Banner;
