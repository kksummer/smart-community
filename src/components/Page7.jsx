import React from "react";
import "./Page7.css";

const Page7 = () => {
  return (
    <div className="p7-container">
      <div className="p7-logo-area" data-swiper-parallax-scale="0.5">
        <span>LOGO</span>
      </div>

      <h2 className="p7-title" data-swiper-parallax="-100">
        互动渠道
      </h2>
      <p
        className="p7-text"
        style={{
          fontSize: "0.16rem",
          marginTop: "0.2rem",
          fontWeight: "normal",
          color: "#555",
          padding: "0 0.3rem",
          lineHeight: "1.6",
        }}
        data-swiper-parallax="-200"
      >
        如有任何建议或疑问，欢迎通过
        <br />
        <strong style={{ color: "#1a73e8" }}>
          “天翼智慧社区服务号-我的小区-投诉建议”
        </strong>
        <br />
        留言
      </p>

      <div
        style={{
          marginTop: "0.6rem",
          color: "#999",
          fontSize: "0.12rem",
        }}
      >
        天翼视联 · 智慧社区月度运营报告
      </div>
    </div>
  );
};

export default Page7;
