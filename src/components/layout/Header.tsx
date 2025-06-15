"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuOutlined, CloseOutlined, DownOutlined } from "@ant-design/icons";
import logo from "../../../public/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  const menuItems = [
    { title: "Home", link: "/" },
    {
      title: "Tour List",
      link: "/tour-list",
      submenu: [
        { title: "Ninh Binh", link: "/tour-list?category=ninhbinh" },
        { title: "Ha Long", link: "/tour-list?category=halong" },
        { title: "Ha Noi", link: "/tour-list?category=hanoi" },
      ],
    },
    { title: "Contact Us", link: "/contact-us" },
    { title: "About Us", link: "/about-us" },
    { title: "Blog", link: "/blog" },
  ];

  if (!mounted) return null;

  return (
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6 py-3">
        {/* Logo */}
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            width={100}
            height={100}
            className="w-[90px] md:w-[100px]"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-8 items-center">
          {menuItems.map((item) => {
            const hasSub = !!item.submenu;
            return (
              <div key={item.title} className="relative group">
                <Link
                  href={item.link}
                  className="text-lg font-medium px-3 py-2 rounded-md transition duration-150 flex items-center gap-1 text-[#c1a256] hover:text-blue-600"
                >
                  {item.title}
                  {hasSub && <DownOutlined className="text-xs ml-1" />}
                </Link>
                {hasSub && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="bg-white border border-gray-100 shadow-xl rounded-xl w-60 py-2 transition-all duration-200 ease-in-out hidden group-hover:block">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.title}
                          href={sub.link}
                          className="block px-5 py-2.5 text-base text-gray-700 hover:bg-[#f8f5ee] hover:text-[#c1a256] transition-all"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden">
          {isOpen ? (
            <CloseOutlined
              className="text-3xl text-[#c1a256]"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <MenuOutlined
              className="text-3xl text-[#c1a256]"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col mt-20 space-y-4 px-6">
          <Link href="/">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={150}
              className="w-[100px]"
            />
          </Link>

          {menuItems.map((item) => (
            <div key={item.title} className="flex flex-col">
              <div
                onClick={() =>
                  item.submenu
                    ? setActiveSubMenu((prev) =>
                        prev === item.title ? "" : item.title
                      )
                    : setIsOpen(false)
                }
                className="flex justify-between items-center text-[#c1a256] font-medium text-lg cursor-pointer py-2"
              >
                <span>{item.title}</span>
                {item.submenu && (
                  <DownOutlined
                    className={`text-sm transition-transform duration-200 ${
                      activeSubMenu === item.title ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {item.submenu && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeSubMenu === item.title
                      ? "max-h-60 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="ml-3 bg-[#fff9f1] rounded-xl px-5 py-3 space-y-2 shadow-md">
                    {item.submenu.map((sub) => (
                      <Link
                        key={sub.title}
                        href={sub.link}
                        className="flex items-center justify-between text-sm text-[#4d3900] hover:text-[#c1a256] hover:bg-[#f7f1e7] hover:translate-x-[2px] transition-all px-2 py-1.5 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        <span>{sub.title}</span>
                        <span className="text-xs">›</span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default Header;
