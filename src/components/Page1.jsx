import React from "react";
import "./Page1.css";
import coverImg from "../assets/page-1.png";

const Page1 = () => {
  return (
    <div className="p1-container">
      <div className="p1-hero" data-swiper-parallax-scale="1.1">
        <img src={coverImg} alt="Cover" className="p1-hero-img" />
      </div>

      <div className="p1-content">
        <div className="p1-header" data-swiper-parallax="-300">
          <h1 className="p1-title">智慧社区 · 运营报告</h1>
          <p className="p1-subtitle">
            尊敬的居民、物业朋友：
            <br />
            感谢大家一直以来的支持与信任
          </p>
        </div>

        <div className="p1-footer">
          <p>天翼智慧社区 · 月度数据</p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
