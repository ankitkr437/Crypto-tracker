import React from "react";
import "../index";
import BannerTag from "./BannerTag";
import BannerCarousel from "./BannerCarousel";

const Banner = () => {
  return (
    <div className="Banner-container">
      <BannerTag></BannerTag>
      <BannerCarousel></BannerCarousel>
    </div>
  );
};

export default Banner;
