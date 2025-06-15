"use client";
import React from "react";
import { Pagination } from "antd";
import CardTour from "../share/CardTour";
import { useRouter, useSearchParams } from "next/navigation";
import CardArticles from "../home/CardArticles";
interface ListBlogProps {
  data: any[];
  page: number;
  total: number;
  pageSize: number;
}

const ListBlog: React.FC<ListBlogProps> = ({ data, page, total, pageSize }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handlePageChange = (newPage: number, newPageSize?: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage.toString());
    if (newPageSize) params.set("pageSize", newPageSize.toString());

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="container ">
      {/* Danh sách Tour */}
      <div className="grid grid-cols-12 gap-4">
        {data.map((tour, index) => {
          return (
            <>
              <div className="col-span-12 md:col-span-4">
                <CardArticles key={index} data={tour} />
              </div>
            </>
          );
        })}
      </div>

      <div className="flex flex-col items-center pt-8">
        <Pagination
          current={page}
          total={total}
          pageSize={pageSize}
          onChange={handlePageChange}
          className="mt-6"
        />
      </div>
      {/* Phân trang */}
    </div>
  );
};

export default ListBlog;
