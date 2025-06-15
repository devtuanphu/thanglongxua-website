import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const Hotline = () => {
  return (
    <a
      href="https://wa.me/84353280445" // <-- Thay bằng số điện thoại của bạn
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-300"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden md:inline font-medium">Chat WhatsApp</span>
    </a>
  );
};

export default Hotline;
