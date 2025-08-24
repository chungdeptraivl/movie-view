import HeroBannerSlider from "@/components/layout/carousel/HeroBannerSlider";
import MovieCategories from "@/components/sections/MovieSection";
import React from "react";

const HomePage = () => {
  return (
    <main>
      <HeroBannerSlider />
      <MovieCategories />
    </main>
  );
};

export default HomePage;
