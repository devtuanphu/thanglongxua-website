"use server";
import Link from "next/link";
import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import CardArticles from "./CardArticles";
interface SectionArticlesProps {
  data: any;
}

const SectionArticles: React.FC<SectionArticlesProps> = async ({ data }) => {
  return (
    <div className="container py-8">
      <div className="text-center py-6">
        <h2 className="text-[#383838] font-bold text-[28px]">
          Recent Articles
        </h2>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-500 transition-all hover:translate-x-1"
        >
          Read The Blog
          <ArrowRightOutlined />
        </Link>
      </div>
      <div className="grid grid-cols-12 gap-4">
        {data &&
          data?.map((item: any) => {
            return (
              <>
                <div className="col-span-12 md:col-span-4">
                  <CardArticles data={item} />
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default SectionArticles;
