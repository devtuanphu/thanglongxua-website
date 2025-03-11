"use client";
import React from "react";
import { Input, Select, Button } from "antd";
import {
  SearchOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import bannerImg from "../../../public/images/MAI-CHAU-PU-LUONG.jpg";

const { Option } = Select;

const BannerHome = () => {
  return (
    <div className="relative w-full h-[500px] flex flex-col justify-center items-center text-center px-4">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={bannerImg}
          alt="Banner"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-75"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 text-white w-full max-w-[1200px]">
        <h1 className="text-3xl md:text-5xl font-bold">
          Explore Your Favourite Destinations
        </h1>
        <p className="text-lg md:text-xl mt-2">
          Discover amazing places at exclusive deals
        </p>

        {/* Search Bar */}
        <div className="mt-6  shadow-lg rounded-full flex flex-wrap md:flex-nowrap items-center p-3 w-full max-w-[900px] mx-auto gap-3 md:gap-x-4 transition-all">
          {/* Input: Keywords */}
          <Input
            placeholder="Search for places..."
            prefix={<SearchOutlined className="text-gray-500" />}
            className="w-full md:w-[30%] border border-gray-300 outline-none px-4 h-[50px] rounded-full focus:border-blue-500"
          />

          {/* Select: Destination */}
          <Select
            defaultValue="Destination"
            className="w-full md:w-[30%] border border-gray-300 outline-none h-[50px] rounded-full focus:border-blue-500"
            suffixIcon={<EnvironmentOutlined className="text-gray-500" />}
          >
            <Option value="paris">Paris</Option>
            <Option value="bali">Bali</Option>
            <Option value="tokyo">Tokyo</Option>
          </Select>

          {/* Select: Duration */}
          <Select
            defaultValue="Duration"
            className="w-full md:w-[30%] border border-gray-300 outline-none h-[50px] rounded-full focus:border-blue-500"
            suffixIcon={<CalendarOutlined className="text-gray-500" />}
          >
            <Option value="3days">3 Days</Option>
            <Option value="7days">7 Days</Option>
            <Option value="14days">14 Days</Option>
          </Select>

          {/* Button: Search */}
          <Button
            type="primary"
            className="bg-gradient-to-r from-blue-500 to-blue-700 h-[50px] w-full md:w-[200px] rounded-full hover:from-blue-600 hover:to-blue-800 transition font-semibold"
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BannerHome;
