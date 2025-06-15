"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FacebookOutlined,
  YoutubeOutlined,
  InstagramOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Image from "next/image";
import VisaLogo from "../../../public/images/visa.png";
import { apiService } from "@/services/api.service";
import { ENDPOINT } from "@/enums/endpoint.enum";
import axios from "axios";

interface FooterData {
  amazing_travel: string;
  amazing_offiice: string;
}

const Footer = () => {
  const [mounted, setMounted] = useState(false);
  const [dataFooter, setDataFooter] = useState<FooterData | null>(null);

  const getData = async () => {
    try {
      const res = await axios.get(`${ENDPOINT.GET_FOOTER}`, {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_DEV}`, // Set the Bearer token in the headers
        },
      });

      setDataFooter(res.data?.data?.attributes);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    setMounted(true);
    getData();
  }, []);

  if (!mounted) return null;

  return (
    <footer className="bg-blue-500 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 px-6">
        {/* Cột 1: Booking */}
        <div>
          <h3 className="text-lg font-bold">Booking Guidelines</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/" className="hover:underline">
                Booking Guidelines
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Privacy and Security
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:underline">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Cột 2: Amazing Travel Corp */}
        <div>
          <h3 className="text-lg font-bold">Thang Long Xua</h3>
          {/* <p className="mt-2">Tour Operator License No</p>
          <p>01-174/2017/TCDL- GPLHQT</p> */}
          {dataFooter && (
            <>
              <p className="mt-2">{dataFooter?.amazing_travel}</p>
            </>
          )}
        </div>

        {/* Cột 3: Office */}
        <div>
          <h3 className="text-lg font-bold">Thang Long Xua Office</h3>
          {dataFooter && (
            <>
              <div
                dangerouslySetInnerHTML={{ __html: dataFooter.amazing_offiice }}
              ></div>
            </>
          )}
        </div>

        {/* Cột 4: Payment & Social */}
        <div>
          <h3 className="text-lg font-bold">Pay Safely With Us</h3>
          <p className="mt-2 text-sm">
            The payment is encrypted and transmitted securely with an SSL
            protocol.
          </p>
          <div className="flex space-x-3 mt-3">
            <Image src={VisaLogo} alt="Visa" width={200} height={100} />
          </div>

          {/* Social Icons */}
          <h3 className="text-lg font-bold mt-4">Follow Us On</h3>
          <div className="flex space-x-4 mt-2">
            <FacebookOutlined className="text-2xl cursor-pointer hover:text-gray-300" />
            <MailOutlined className="text-2xl cursor-pointer hover:text-gray-300" />
            <YoutubeOutlined className="text-2xl cursor-pointer hover:text-red-500" />
            <InstagramOutlined className="text-2xl cursor-pointer hover:text-pink-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
