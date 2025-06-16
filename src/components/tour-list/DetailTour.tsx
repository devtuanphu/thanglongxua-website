"use client";
import React, { useState } from "react";
import { Input, Button, DatePicker, Select, Modal, message, Spin } from "antd";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import dayjs from "dayjs";
import "swiper/css";
import { ENDPOINT } from "@/enums/endpoint.enum";

const { Option } = Select;
const { TextArea } = Input;

interface OptionType {
  id: number;
  name: string;
  price: number;
}

interface SaleType {
  id: number;
  quantity: number;
  percentSale: number;
}

interface ImageType {
  id: number;
  attributes: {
    alternativeText?: string;
    url: string;
    formats?: {
      medium?: { url: string };
    };
  };
}

interface DataTourProps {
  id: number;
  title: string;
  time: string;
  maxPeople: number;
  minAge: string;
  pickUpLocation: string;
  returnLocation: string;
  startTime: string;
  content: string;
  image: { data: ImageType[] };
  options: OptionType[];
  saleWithQuanity: SaleType[];
  rootCode: string;
}

interface DetailTourProps {
  dataTour: DataTourProps;
  idTour: number;
}

const DetailTour: React.FC<DetailTourProps> = ({ dataTour, idTour }) => {
  const images = dataTour?.image?.data || [];
  const baseUrl = process.env.NEXT_PUBLIC_URL_BE || "";
  const options = dataTour.options || [];
  const saleWithQuanity = dataTour.saleWithQuanity || [];

  const [selectedOption, setSelectedOption] = useState<OptionType>(options[0]);
  const [quantity, setQuantity] = useState<number>(
    saleWithQuanity[0]?.quantity || 1
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [dateStart, setDateStart] = useState<dayjs.Dayjs | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalLoading, setModalLoading] = useState(true);
  const highestSale = saleWithQuanity[saleWithQuanity.length - 1];

  const getSalePercent = () => {
    if (quantity === 1) return 0;
    const match = saleWithQuanity.find((s) => s.quantity === quantity);
    return match
      ? match.percentSale
      : quantity > highestSale.quantity
      ? highestSale.percentSale
      : 0;
  };
  const calculateDiscountPrice = () => {
    const basePrice = selectedOption?.price || 0;
    const discount = getSalePercent();
    const discountedPrice = basePrice - (basePrice * discount) / 100;
    return discountedPrice * quantity;
  };
  const clearForm = () => {
    setName("");
    setEmail("");
    setPhone("");
    setNote("");
    setDateStart(null);
    setQuantity(1);
    setSelectedOption(options[0]);
  };

  const handleBooking = async () => {
    if (!name || !email || !phone || !dateStart) {
      message.error("Please fill in all required fields.");
      return;
    }

    try {
      setIsSubmitting(true);

      const payload = {
        data: {
          name,
          email,
          note,
          numberPeople: quantity,
          dateStart: dateStart.toISOString(),
          status: "Pending",
          statusPayment: "No",
          tour: idTour,
          total: calculateDiscountPrice().toFixed(2),
          option: selectedOption.name,
          root: dataTour.rootCode,
        },
      };

      await axios.post(ENDPOINT.POST_BOOKING, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_TOKEN_DEV}`,
        },
      });

      setIsModalOpen(true);
      setModalLoading(true);
      setTimeout(() => setModalLoading(false), 1000);
      clearForm();
    } catch (error) {
      console.error(error);
      message.error("Failed to submit booking.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <Modal
        open={isModalOpen}
        footer={null}
        onCancel={() => setIsModalOpen(false)}
        centered
      >
        <div className="text-center py-8">
          {modalLoading ? (
            <Spin size="large" />
          ) : (
            <>
              <h2 className="text-xl font-bold text-green-600 mb-2">
                Booking Confirmed ✅
              </h2>
              <p className="text-gray-600">
                Thank you for your reservation. A confirmation email has been
                sent to your inbox.
              </p>
              <Button
                className="mt-6"
                type="primary"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </Button>
            </>
          )}
        </div>
      </Modal>

      <div className="rounded-2xl overflow-hidden shadow-lg">
        <Swiper spaceBetween={10} slidesPerView={1} loop>
          {images.map((img) => {
            const url =
              baseUrl +
              (img.attributes?.formats?.medium?.url || img.attributes?.url);
            return (
              <SwiperSlide key={img.id}>
                <img
                  src={url}
                  alt={img.attributes?.alternativeText || "Tour Image"}
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 space-y-6"
        >
          <h1 className="text-3xl font-bold text-gray-800">{dataTour.title}</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <strong>⏳ Duration:</strong> {dataTour.time}
            </div>
            <div>
              <strong>👥 Max People:</strong> {dataTour.maxPeople}
            </div>
            <div>
              <strong>🎒 Min Age:</strong> {dataTour.minAge}+
            </div>
            <div>
              <strong>📍 Pickup Location:</strong> {dataTour.pickUpLocation}
            </div>
            <div>
              <strong>📍 Drop-off Location:</strong> {dataTour.returnLocation}
            </div>
            <div>
              <strong>🕒 Time:</strong> {dataTour.time}
            </div>
          </div>

          <div
            className="rich-content"
            dangerouslySetInnerHTML={{ __html: dataTour.content }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white shadow-2xl p-6 rounded-2xl border border-gray-200 space-y-6 sticky top-24 self-start"
        >
          <h2 className="text-xl font-semibold text-gray-700 text-center">
            Book This Tour
          </h2>

          <div className="space-y-4">
            <label className="block font-medium text-gray-600 mb-1">
              Tour Package
            </label>
            <Select
              value={selectedOption?.id}
              onChange={(value) =>
                setSelectedOption(
                  options.find((opt) => opt.id === value) as OptionType
                )
              }
              className="w-full"
            >
              {options.map((opt) => (
                <Option key={opt.id} value={opt.id}>
                  {opt.name} - ${opt.price}
                </Option>
              ))}
            </Select>

            <div>
              <label className="block text-gray-600 mb-1 font-medium">
                Group Size
              </label>
              <div className="grid grid-cols-2 gap-2">
                {saleWithQuanity.map((sale) => (
                  <div
                    key={sale.id}
                    className="border p-2 rounded-md bg-gray-50 text-sm text-gray-700"
                  >
                    {sale.quantity}+ People → {sale.percentSale}% Off
                  </div>
                ))}
              </div>
              <div className="flex items-center space-x-3 mt-3 justify-center">
                <Button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </Button>
                <span className="px-4 text-lg font-semibold">{quantity}</span>
                <Button onClick={() => setQuantity(quantity + 1)}>+</Button>
              </div>
              <p className="text-sm text-gray-500 mt-1 text-center">
                {quantity} people - {getSalePercent()}% discount
              </p>
            </div>

            <div className="text-center">
              <p className="text-gray-500 text-sm">
                Base Price: ${selectedOption?.price?.toFixed(2)} x {quantity}
              </p>
              <p className="text-2xl text-green-600 font-bold">
                Final Price: ${calculateDiscountPrice().toFixed(2)}
              </p>
            </div>

            <Input
              placeholder="Full Name"
              size="large"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Phone Number"
              size="large"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <Input
              placeholder="Email"
              size="large"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <DatePicker
              className="w-full"
              size="large"
              placeholder="Select Departure Date"
              value={dateStart}
              onChange={(value) => setDateStart(value)}
            />
            <TextArea
              rows={4}
              placeholder="Additional Notes (e.g., dietary needs, pickup requests...)"
              className="rounded-lg"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />

            <Button
              type="primary"
              size="large"
              block
              loading={isSubmitting}
              onClick={handleBooking}
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
            >
              Confirm Booking
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DetailTour;
