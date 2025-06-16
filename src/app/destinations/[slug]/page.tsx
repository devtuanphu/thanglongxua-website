"use server";
import React from "react";
import { ENDPOINT } from "@/enums/endpoint.enum";
import Banner from "@/components/tour-list/Banner";
import ListTour from "@/components/tour-list/ListTour";

const searchData = {
  populate: ["seo.thumbnail", "tours"].toString(),
};

const formattedSearchParams = new URLSearchParams(searchData).toString();

async function fetchWithToken(endpoint: any) {
  const token = process.env.NEXT_PUBLIC_TOKEN_DEV;

  const response = await fetch(endpoint, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return response.json();
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const dataHome = await fetchWithToken(
    `${ENDPOINT.GET_DESTINATIONS_HOME}?${formattedSearchParams}&filters[slug][$eq]=${slug}`
  );

  const seo =
    (dataHome &&
      dataHome.data[0] &&
      dataHome.data[0].attributes &&
      dataHome.data[0].attributes.seo) ||
    {};

  const baseUrl = process.env.NEXT_PUBLIC_URL_BE || "";

  return {
    metadataBase: new URL(baseUrl),
    title: seo.title || "Trang chủ - Công ty TNHH Kỹ thuật NTS",
    description:
      seo.description ||
      "Công ty TNHH Kỹ thuật NTS cung cấp các giải pháp kỹ thuật công trình hàng đầu.",
    keywords:
      seo.keywords ||
      "kỹ thuật, công trình, tư vấn cơ điện, xử lý nước, tái sử dụng nước",
    authors: [{ name: seo.author || "Công ty TNHH Kỹ thuật NTS" }],
    openGraph: {
      title:
        seo.ogTitle || seo.title || "Trang chủ - Công ty TNHH Kỹ thuật NTS",
      description:
        seo.ogDescription ||
        seo.description ||
        "Công ty TNHH Kỹ thuật NTS cung cấp các giải pháp kỹ thuật công trình hàng đầu.",
      url: `${baseUrl}/home`,
      images: [
        {
          url: seo.thumbnail?.data?.attributes?.url
            ? `${baseUrl}${seo.thumbnail.data.attributes.url}`
            : "/path/to/default-image.jpg",
          width: 800,
          height: 600,
          alt: "Image description",
        },
      ],
    },
    twitter: {
      title:
        seo.twitterTitle ||
        seo.title ||
        "Trang chủ - Công ty TNHH Kỹ thuật NTS",
      description:
        seo.twitterDescription ||
        seo.description ||
        "Công ty TNHH Kỹ thuật NTS cung cấp các giải pháp kỹ thuật công trình hàng đầu.",
      images: [
        seo.twitterImage
          ? `${baseUrl}${seo.twitterImage}`
          : "/path/to/default-image.jpg",
      ],
      card: "summary_large_image",
    },
  };
}

const page = async ({
  searchParams,
  params,
}: {
  searchParams: { page?: string; pageSize?: string };
  params: { slug: string };
}) => {
  const pageNumber = searchParams.page || "1";
  const pageSize = searchParams.pageSize || "9"; // Mặc định 10 mục mỗi trang

  const { slug } = params;

  const tourByDesstinations = await fetchWithToken(
    `${ENDPOINT.GET_TOURS_BY_DESTINATION}/${slug}??page=${pageNumber}&pageSize=${pageSize}`
  );

  return (
    <div>
      <div className="py-8">
        <ListTour
          data={tourByDesstinations?.data}
          page={parseInt(pageNumber, 10)}
          total={tourByDesstinations?.meta?.total}
          pageSize={parseInt(pageSize, 10)}
        />
      </div>
    </div>
  );
};

export default page;
