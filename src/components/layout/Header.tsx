"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";
import logo from "../../../public/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { title: "Home", link: "/" },
    { title: "Tour List", link: "/tour-list" },
    { title: "Contact Us", link: "/contact-us" },
    { title: "About Us", link: "/about-us" },
    { title: "Blog", link: "/blog" },
  ];

  if (!mounted) return null;

  return (
    <>
      <div className="sticky top-0 z-50">
        <div className="py-2 shadow-lg   bg-white">
          <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
            <Link href="/">
              <Image
                src={logo}
                alt="Logo"
                width={100}
                height={100}
                className="w-[90px] md:w-[100px]"
              />
            </Link>

            <div className="block lg:hidden">
              {isOpen ? (
                <CloseOutlined
                  className="text-3xl text-[#c1a256]"
                  onClick={() => setIsOpen(!isOpen)}
                />
              ) : (
                <MenuOutlined
                  className="text-3xl text-[#c1a256]"
                  onClick={() => setIsOpen(!isOpen)}
                />
              )}
            </div>

            {/* Menu và Nút Đặt Lịch cho màn hình lớn */}
            <div className="hidden lg:flex space-x-8 items-center">
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="text-[#c1a256] font-medium text-lg"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          <div
            className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300 ease-in-out`}
          >
            <div className="flex flex-col mt-16 space-y-6 pl-6">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Logo"
                  width={300}
                  height={300}
                  className="w-[200px] md:w-[300px]"
                />
              </Link>
              {menuItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.link}
                  className="text-[#c1a256] hover:text-blue-500 font-medium text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

          {isOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={() => setIsOpen(false)}
            ></div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
