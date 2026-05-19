import Banner from "@/components/Banner";
import FeaturedFacilities from "@/components/FeaturedFacilities";
import LatestBlogs from "@/components/LatestBlogs";
import Testimonials from "@/components/Testimonials";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

export default function Home() {
  return (
    <div className="bg-slate-50 text-slate-900 dark:bg-[#080F1A] dark:text-slate-100 min-h-screen transition-colors duration-300 overflow-x-hidden">
      <Banner/>
      <main className="space-y-25 pb-25">
        <FeaturedFacilities/>
        <WhyChooseUs/>
        <Testimonials/>
        <LatestBlogs/>
      </main>
    </div>
  );
}