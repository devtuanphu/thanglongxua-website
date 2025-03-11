"use client";
import React from "react";
import Image from "next/image";
import imageTest from "../../../public/images/Amazing-Puluong-2-1.jpg";
import Link from "next/link";

const CartDestinations = () => {
  return (
    <div className="relative rounded-lg overflow-hidden shadow-lg group">
      <div className="relative w-full h-[250px]">
        <Image
          src={imageTest}
          alt="Amazing Mai Chau - Pu Luong"
          layout="fill"
          objectFit="cover"
          className="transition-all duration-300 group-hover:brightness-50"
        />
      </div>

      <div className="absolute top-3 right-3 bg-blue-500 text-white px-3 py-1 text-sm font-semibold rounded-lg">
        5 tours
      </div>

      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h3 className="text-lg font-bold transition-all duration-300 group-hover:translate-y-[-20px]">
          Amazing Mai Chau - Pu Luong
        </h3>

        <Link
          href="/"
          className="text-sm text-blue-300 font-semibold opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-[-10px]"
        >
          VIEW ALL TOURS
        </Link>
      </div>
    </div>
  );
};

export default CartDestinations;
