"use client";
import React from "react";
import Image from "next/image";
import { PlayCircleOutlined } from "@ant-design/icons";
import Background from "../../../public/images/Amazing-Hanoi-15-13.jpg";

const VideoSection = () => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center text-center my-8">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={Background}
          alt="Travel Video"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-75"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-white">
        <h2 className="text-2xl md:text-4xl font-bold">Thang Long Xua Video</h2>

        {/* Play Icon */}
        <div className="mt-6 flex justify-center">
          <button className="text-white text-5xl md:text-6xl hover:scale-110 transition-all duration-300">
            <PlayCircleOutlined />
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
