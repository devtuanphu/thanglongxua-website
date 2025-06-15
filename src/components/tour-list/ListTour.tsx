"use client";
import React, { useState } from "react";
import { Pagination } from "antd";
import CardTour from "../share/CardTour";
import { useRouter, useSearchParams } from "next/navigation";

interface ListTourProps {
  data: any[];
  page: number;
  total: number;
  pageSize: number;
}

const ListTour: React.FC<ListTourProps> = ({ data, page, total, pageSize }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number, newPageSize?: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    if (newPageSize) params.set("pageSize", newPageSize.toString());

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center">
        {/* Danh sách Tour */}
        <div className="grid grid-cols-12 gap-4 pb-8">
          {data.map((tour, index) => (
            <CardTour key={index} data={tour} />
          ))}
        </div>

        {/* Phân trang */}
        <Pagination
          current={page}
          total={total}
          pageSize={pageSize}
          onChange={handlePageChange}
          className="mt-6"
        />
      </div>
    </div>
  );
};

export default ListTour;
