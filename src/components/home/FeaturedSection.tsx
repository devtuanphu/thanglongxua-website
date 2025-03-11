"use client";
import React from "react";
import Image from "next/image";
import ExpediaLogo from "../../../public/images/Expedia-Logo.png";
import TripAdvisorLogo from "../../../public/images/TripAdvisor-Logo.png";
import GetYourGuideLogo from "../../../public/images/GetYourGuide_company_logo.png";
import AgodaLogo from "../../../public/images/unnamed.jpg";
import ViatorLogo from "../../../public/images/viator.jpg";

// Danh sách logo sử dụng biến import
const brands = [
  { name: "Expedia", src: ExpediaLogo, alt: "Expedia" },
  { name: "TripAdvisor", src: TripAdvisorLogo, alt: "TripAdvisor" },
  { name: "GetYourGuide", src: GetYourGuideLogo, alt: "GetYourGuide" },
  { name: "Agoda", src: AgodaLogo, alt: "Agoda" },
  { name: "Viator", src: ViatorLogo, alt: "Viator" },
];

const FeaturedSection = () => {
  return (
    <section className="container py-10">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-xl md:text-2xl font-bold text-gray-900">
          We are featured in
        </h2>
        <p className="text-gray-500 mt-2">
          See what others are saying about us
        </p>

        {/* Brand Logos */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-6 place-items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="w-[120px] md:w-[150px] hover:scale-110 transition-transform duration-300"
            >
              {/* Sử dụng biến import làm src */}
              <Image src={brand.src} alt={brand.alt} width={150} height={50} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
