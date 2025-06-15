"use server";
import React from "react";
import CardTour from "@/components/share/CardTour";
import { ENDPOINT } from "@/enums/endpoint.enum";
import { apiService } from "@/services/api.service";
import Image from "next/image";
import Banner from "@/components/tour-list/Banner";
import ListTour from "@/components/tour-list/ListTour";

const searchData = {
  populate: ["seo.thumbnail"].toString(),
};
const searchDataDestinations = {
  populate: ["seo.thumbnail", "tours"].toString(),
};
const formattedSearchParams = new URLSearchParams(searchData).toString();
const searchParamsDestinations = new URLSearchParams(
  searchDataDestinations
).toString();
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
export async function generateMetadata() {
  const dataHome = await fetchWithToken(
    `${ENDPOINT.GET_LIST_TOUR_PAGE}?${formattedSearchParams}`
  );

  const seo =
    (dataHome &&
      dataHome.data &&
      dataHome.data.attributes &&
      dataHome.data.attributes.seo) ||
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
}: {
  searchParams: { page?: string; pageSize?: string; category?: string };
}) => {
  const pageNumber = searchParams.page || "1";
  const pageSize = searchParams.pageSize || "9";
  const category = searchParams.category || "";
  const categoryFilter = category ? `&filters[category][$eq]=${category}` : "";

  const tours = await fetchWithToken(
    `${ENDPOINT.GET_TOURS}?${searchParamsDestinations}&pagination[page]=${pageNumber}&pagination[pageSize]=${pageSize}${categoryFilter}`
  );
  const tourListPage = await fetchWithToken(
    `${ENDPOINT.GET_LIST_TOUR_PAGE}?${formattedSearchParams}`
  );

  const baseUrl = process.env.NEXT_PUBLIC_URL_BE || "";
  const imageBanner =
    tourListPage?.data?.attributes?.seo?.thumbnail?.data?.attributes?.url;
  const title = tourListPage?.data?.attributes?.seo?.title;

  const width =
    tourListPage?.data?.attributes?.seo?.thumbnail?.data?.attributes?.width;
  const height =
    tourListPage?.data?.attributes?.seo?.thumbnail?.data?.attributes?.height;

  return (
    <div>
      <Banner
        imageUrl={`${baseUrl}${imageBanner}`}
        title={title}
        width={width}
        height={height}
      />
      <div className="py-8">
        <ListTour
          data={tours?.data}
          page={parseInt(pageNumber, 10)}
          total={tours?.meta?.pagination.total}
          pageSize={parseInt(pageSize, 10)}
        />
      </div>
    </div>
  );
};

export default page;
