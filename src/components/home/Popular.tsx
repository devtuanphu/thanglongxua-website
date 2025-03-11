"use client";
import React from "react";
import CartDestinations from "../share/CartDestinations";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";
import CardTour from "../share/CardTour";
interface PopularProps {
  isTour: boolean;
}
const Popular: React.FC<PopularProps> = ({ isTour }) => {
  return (
    <div className="container py-8">
      {/* Title */}
      <div className="text-center py-6">
        <h2 className="text-[#383838] font-bold text-[28px]">
          {isTour ? "Popular Tours" : "Popular Destinations"}
        </h2>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-500 transition-all hover:translate-x-1"
        >
          View All {isTour ? "Tours" : "Destinations"}
          <ArrowRightOutlined />
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-12 gap-6">
        <div className={`col-span-12 md:col-span-4`}>
          {isTour ? <CardTour /> : <CartDestinations />}
        </div>
      </div>
    </div>
  );
};

export default Popular;
