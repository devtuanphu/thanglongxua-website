"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import { PlayCircleOutlined } from "@ant-design/icons";
import Background from "../../../public/images/Amazing-Hanoi-15-13.jpg";

const VideoSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);

  const handlePlay = () => {
    setShowVideo(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 100); // delay nhẹ để đảm bảo video được hiển thị trước khi play
  };

  return (
    <div className="relative w-full h-[400px] md:h-[800px] flex items-center justify-center text-center my-8">
      {/* Background Image or Video */}
      <div className="absolute inset-0 w-full h-full">
        {!showVideo ? (
          <Image
            src={Background}
            alt="Travel Video"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="brightness-75"
          />
        ) : (
          <video
            ref={videoRef}
            src="/video/video.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            controls
            muted
          />
        )}
      </div>

      {/* Overlay Content */}
      {!showVideo && (
        <div className="relative z-10 text-white">
          <h2 className="text-2xl md:text-4xl font-bold">
            Thang Long Xua Video
          </h2>
          <div className="mt-6 flex justify-center">
            <button
              onClick={handlePlay}
              className="text-white text-5xl md:text-6xl hover:scale-110 transition-all duration-300"
            >
              <PlayCircleOutlined />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSection;
