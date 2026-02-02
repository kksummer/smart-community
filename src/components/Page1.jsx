import React from "react";
import "./Page1.css";
import coverImg from "../assets/page-1.png";
import logoImg from "../assets/logo.png";

const Page1 = () => {
  return (
    <div className="p1-container">
      <div className="p1-hero" data-swiper-parallax-scale="1.1">
        <img src={coverImg} alt="Cover" className="p1-hero-img" />
      </div>

      <div className="p1-logo-container">
        <img src={logoImg} alt="logo" className="p1-logo" />
      </div>

      <div className="p1-content">
        <div className="p1-header" data-swiper-parallax="-300">
          <div className="p1-top-badge">月度运营报告</div>
          <h1 className="p1-title" style={{ marginTop: "0.2rem" }}>
            智慧社区 · 一键关爱
          </h1>
          <div className="p1-date-info">2026年1月</div>
        </div>

        <div className="p1-footer" data-swiper-parallax="-100">
          <p className="p1-company">呈现单位：蒲江分公司</p>
        </div>
      </div>
    </div>
  );
};

export default Page1;
