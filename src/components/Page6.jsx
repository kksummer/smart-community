import React from "react";
import "./Page6.css";

const Page6 = () => {
  return (
    <div className="p6-container">
      <h2 className="p6-title" data-swiper-parallax="-200">
        温馨提示 · 共建家园
      </h2>

      <div className="p6-card" data-swiper-parallax="-100">
        <div className="p6-card-title">
          <span className="p6-card-icon">🔥</span> 安全提醒
        </div>
        <div className="p6-card-text">
          夏季高温，请居民注意用电安全，切勿将电动车电池带入室内充电。
        </div>
      </div>

      <div className="p6-card" data-swiper-parallax="-100">
        <div className="p6-card-title">
          <span className="p6-card-icon">🏙️</span> 文明倡议
        </div>
        <div className="p6-card-text">
          高空抛物威胁生命安全，让我们携手共建“无高抛”社区。
        </div>
      </div>

      <div className="p6-footer-img placeholder-img">社区风景/海报占位</div>
    </div>
  );
};

export default Page6;
