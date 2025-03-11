"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import DiscountImage from "../../../public/images/Amazing-Hanoi-4.jpg";

const BoxDiscount = () => {
  return (
    <div className="container py-8">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left Side - Text Content */}
          <div className="bg-blue-500 text-white flex flex-col justify-center items-center p-6 md:p-[100px] text-center">
            <h3 className="text-lg font-semibold">Special Offer</h3>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Up to 15% Discount!
            </h2>
            <Link
              href="/discount"
              className="mt-4 bg-black text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-800 transition-all"
            >
              LEARN MORE
            </Link>
          </div>

          {/* Right Side - Image */}
          <div className="relative w-full h-[250px] md:h-full">
            <Image
              src={DiscountImage}
              alt="Special Discount"
              layout="fill"
              objectFit="cover"
              className="rounded-r-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxDiscount;
