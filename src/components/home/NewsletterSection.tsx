"use client";
import React from "react";
import Link from "next/link";
import {
  FacebookOutlined,
  TwitterOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";

const NewsletterSection = () => {
  return (
    <div className="py-8">
      {" "}
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
          {/* Left Section: Browse Tour */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Browse Tour By Category
            </h3>
            <div className="grid grid-cols-2 gap-2 mt-4">
              <Link href="/" className="text-blue-600 hover:underline">
                Amazing Ha Noi
              </Link>
              <Link href="/" className="text-blue-600 hover:underline">
                Amazing Ninh Binh
              </Link>
              <Link href="/" className="text-blue-600 hover:underline">
                Amazing Mai Chau - Pu Luong
              </Link>
              <Link href="/" className="text-blue-600 hover:underline">
                Amazing Ha Long
              </Link>
            </div>
          </div>

          {/* Right Section: Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">Newsletter</h3>
            <p className="text-gray-600 text-sm">
              Subscribe for updates & promotions
            </p>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full p-2 border border-gray-300 rounded-l-lg focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-lg font-semibold hover:bg-blue-600">
                SUBSCRIBE
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 mt-6">
              <FacebookOutlined className="text-gray-500 text-2xl hover:text-blue-500 cursor-pointer" />
              <TwitterOutlined className="text-gray-500 text-2xl hover:text-blue-400 cursor-pointer" />
              <InstagramOutlined className="text-gray-500 text-2xl hover:text-pink-500 cursor-pointer" />
              <YoutubeOutlined className="text-gray-500 text-2xl hover:text-red-500 cursor-pointer" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsletterSection;
