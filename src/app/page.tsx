"use server";
import React from "react";
import BannerHome from "@/components/home/BannerHome";
import FeatureSection from "@/components/home/FeatureSection";
import Popular from "@/components/home/Popular";
import BoxDiscount from "@/components/share/BoxDiscount";
import VideoSection from "@/components/home/VideoSection";
import CustomerReview from "@/components/home/CustomerReview";
import NewsletterSection from "@/components/home/NewsletterSection";
import SectionArticles from "@/components/home/SectionArticles";
import FeaturedSection from "@/components/home/FeaturedSection";
const Home = async () => {
  return (
    <div>
      <main>
        <BannerHome />
        <FeatureSection />
        <Popular isTour={false} />
        <Popular isTour={true} />
        <BoxDiscount />
        <VideoSection />
        <CustomerReview />
        <NewsletterSection />
        <SectionArticles />
        <FeaturedSection />
      </main>
    </div>
  );
};

export default Home;
