"use server";
import React from "react";
import BannerHome from "@/components/home/BannerHome";
import FeatureSection from "@/components/home/FeatureSection";
import Popular from "@/components/home/Popular";
import BoxDiscount from "@/components/share/BoxDiscount";
import VideoSection from "@/components/home/VideoSection";
import NewsletterSection from "@/components/home/NewsletterSection";
import SectionArticles from "@/components/home/SectionArticles";
import FeaturedSection from "@/components/home/FeaturedSection";
import { ENDPOINT } from "@/enums/endpoint.enum";
import { apiService } from "@/services/api.service";

const searchData = {
  populate: ["seo.thumbnail"].toString(),
};
const searchDataDestinations = {
  populate: ["seo.thumbnail", "tours", "options", "saleWithQuanity"].toString(),
};
const searchParams = new URLSearchParams(searchData).toString();
const searchParamsDestinations = new URLSearchParams(
  searchDataDestinations
).toString();

async function fetchData(endpoint: any) {
  try {
    const data = await apiService.get(endpoint);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

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
  const dataHome = await fetchWithToken(`${ENDPOINT.GET_HOME}?${searchParams}`);

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
const Home = async () => {
  const dataHome = await fetchWithToken(`${ENDPOINT.GET_HOME}?${searchParams}`);
  const destinationsHome = await fetchWithToken(
    `${ENDPOINT.GET_DESTINATIONS_HOME}?${searchParamsDestinations}&filters[isHome][$eq]=true`
  );

  const toursHome = await fetchWithToken(
    `${ENDPOINT.GET_TOURS}?${searchParamsDestinations}&filters[isHome][$eq]=true`
  );
  const blogs = await fetchWithToken(
    `${ENDPOINT.GET_BLOG}?${searchParams}&pagination[page]=1&pagination[pageSize]=3`
  );
  const titieHome = dataHome?.data?.attributes?.title;
  const subTitle = dataHome?.data?.attributes?.subTitle;
  const destinations = dataHome?.data?.attributes?.destinations;
  const bestPrice = dataHome?.data?.attributes?.bestPrice;
  const topNotch = dataHome?.data?.attributes?.topNotch;

  return (
    <div>
      <main>
        <BannerHome titieHome={titieHome} subTitle={subTitle} />
        <FeatureSection
          destinations={destinations}
          bestPrice={bestPrice}
          topNotch={topNotch}
        />
        <Popular isTour={false} data={destinationsHome?.data} />
        <Popular isTour={true} data={toursHome?.data} />
        <BoxDiscount />
        <VideoSection />
        <NewsletterSection data={destinationsHome?.data} />
        <SectionArticles data={blogs?.data} />
        <FeaturedSection />
      </main>
    </div>
  );
};

export default Home;
