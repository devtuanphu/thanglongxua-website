"use client";
import React from "react";
import { StarFilled } from "@ant-design/icons";
import Image from "next/image";
import reviewer from "../../../public/images/Amazing-Hanoi-10-scaled (1).jpg";

const CardReview = () => {
  return (
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg max-w-[350px]">
      {/* Quote Icon */}
      <div className="text-4xl font-bold mb-4">“</div>

      {/* Review Text */}
      <p className="text-sm font-medium">
        Recently enjoyed a local food tour with my husband and 2 children. Our
        host Duc (Joe) was excellent and took us to some great wee restaurants
        and cafes which we would have never stopped at. During the tour he was
        giving some information about Hanoi’s culture and recommending things we
        should do during our time in Hanoi. The highlight was seeing Hanoi’s
        first coffee shop. Would definitely recommend!
      </p>

      {/* Reviewer Info */}
      <div className="flex items-center mt-4">
        <Image
          src={reviewer}
          alt="Reviewer"
          width={40}
          height={40}
          className="rounded-full"
        />

        {/* Rating */}
        <div className="ml-3 flex text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <StarFilled key={index} className="text-lg" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardReview;
