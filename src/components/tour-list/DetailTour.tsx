"use client";
import React from "react";
import {
  Card,
  Descriptions,
  Typography,
  Input,
  Button,
  DatePicker,
} from "antd";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
interface DetailTourProps {
  dataTour: any;
}

const DetailTour: React.FC<DetailTourProps> = ({ dataTour }) => {
  const images = dataTour?.image?.data || [];
  const baseUrl = process.env.NEXT_PUBLIC_URL_BE || "";
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Tour Details Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-white backdrop-blur-xl bg-opacity-90 shadow-xl rounded-3xl p-8 border border-gray-200"
        >
          <Typography.Title level={2} className="text-gray-800 mb-6">
            {dataTour.title}
          </Typography.Title>
          <Descriptions
            bordered
            column={1}
            className="text-lg bg-gray-50 rounded-lg shadow-md"
          >
            <Descriptions.Item label="⏳ Duration">
              {dataTour.time}
            </Descriptions.Item>
            <Descriptions.Item label="👥 Max People">
              {dataTour.maxPeople}
            </Descriptions.Item>
            <Descriptions.Item label="🎒 Min Age">
              {dataTour.minAge}+
            </Descriptions.Item>
            <Descriptions.Item label="📍 Pick-up Location">
              {dataTour.pickUpLocation}
            </Descriptions.Item>
            <Descriptions.Item label="📍 Drop-off Location">
              {dataTour.returnLocation}
            </Descriptions.Item>
            <Descriptions.Item label="🕒 Start Time">
              {dataTour.startTime}
            </Descriptions.Item>
            <Descriptions.Item
              label="💰 Original Price"
              className="text-gray-500 line-through"
            >
              {dataTour.originalPrice} USD
            </Descriptions.Item>
            <Descriptions.Item
              label="🔥 Discounted Price"
              className="text-red-500 font-bold text-xl"
            >
              {dataTour.discountPrice} USD
            </Descriptions.Item>
          </Descriptions>
        </motion.div>

        {/* Booking Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-8 rounded-3xl shadow-2xl border border-gray-300"
        >
          <Typography.Title
            color="#fff"
            level={3}
            className="text-white text-center mb-6"
          >
            Book Your Tour
          </Typography.Title>
          <form className="space-y-5">
            <Input
              placeholder="Full Name"
              size="large"
              className="rounded-lg px-4 py-3 border-0 focus:ring-2 focus:ring-white"
            />
            <Input
              placeholder="Phone Number"
              size="large"
              className="rounded-lg px-4 py-3 border-0 focus:ring-2 focus:ring-white"
            />
            <Input
              placeholder="Email"
              type="email"
              size="large"
              className="rounded-lg px-4 py-3 border-0 focus:ring-2 focus:ring-white"
            />
            <Input
              placeholder="Number of People"
              type="number"
              size="large"
              className="rounded-lg px-4 py-3 border-0 focus:ring-2 focus:ring-white"
            />
            <Input
              placeholder="Number of Children"
              type="number"
              size="large"
              className="rounded-lg px-4 py-3 border-0 focus:ring-2 focus:ring-white"
            />
            <DatePicker
              placeholder="Departure Date"
              size="large"
              className="w-full rounded-lg px-4 py-3 border-0 focus:ring-2 focus:ring-white"
            />
            <Button
              type="primary"
              size="large"
              block
              className="bg-white text-blue-600 font-bold hover:bg-gray-200 transition-all py-3 rounded-lg shadow-lg"
            >
              Submit Request
            </Button>
          </form>
        </motion.div>
      </div>

      {/* Tour Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-12 bg-white shadow-lg p-8 rounded-3xl border border-gray-200"
      >
        <Typography.Title level={3} className="text-gray-800">
          Tour Details
        </Typography.Title>
        <div
          dangerouslySetInnerHTML={{ __html: dataTour.content }}
          className="prose max-w-none"
        />
        <div className="py-4">
          <Swiper
            spaceBetween={15}
            slidesPerView={1}
            loop={true}
            pagination={{ clickable: true }}
            style={{ width: "100%" }}
          >
            {images.map((img: any) => {
              // lấy ảnh medium nếu có, fallback url gốc
              const url =
                baseUrl + img.attributes?.formats?.medium?.url ||
                baseUrl + img.attributes?.url;
              return (
                <SwiperSlide key={img.id}>
                  <img
                    src={url}
                    alt={img.attributes?.alternativeText || "Tour Image"}
                    className="w-full rounded-lg"
                    loading="lazy"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </motion.div>
    </div>
  );
};

export default DetailTour;
