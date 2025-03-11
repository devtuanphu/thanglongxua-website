"use client";
import React from "react";
import {
  GlobalOutlined,
  PercentageOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

const features = [
  {
    icon: <GlobalOutlined className="text-black text-4xl" />,
    title: "DESTINATIONS",
    description: "Our expert team handpicked all destinations in this site.",
  },
  {
    icon: <PercentageOutlined className="text-black text-4xl" />,
    title: "BEST PRICE GUARANTEE",
    description: "Price match within 48 hours of order confirmation.",
  },
  {
    icon: <CustomerServiceOutlined className="text-black text-4xl" />,
    title: "TOP NOTCH SUPPORT",
    description:
      "We are here to help, before, during, and even after your trip.",
  },
];

const FeatureSection = () => {
  return (
    <div className="container">
      <div className="bg-blue-500 text-white py-8 px-4">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center space-y-3">
              <div className="bg-white p-4 rounded-full">{feature.icon}</div>
              <h3 className="text-lg font-bold">{feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
