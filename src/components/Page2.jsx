import React from "react";
import "./Page2.css";

const Page2 = () => {
  return (
    <div className="p2-container">
      <h2 className="p2-title" data-swiper-parallax="-200">
        本月总体情况良好
      </h2>

      <div className="p2-grid" data-swiper-parallax="-100">
        <div className="p2-card">
          <div className="p2-card-label">视频AI告警</div>
          <div className="p2-card-value">123</div>
          <div className="p2-card-trend down">环比 ↓ 10%</div>
        </div>
        <div className="p2-card">
          <div className="p2-card-label">物业处置率</div>
          <div className="p2-card-value">98%</div>
          <div className="p2-card-trend up">环比 ↑ 2.1%</div>
        </div>
        <div className="p2-card">
          <div className="p2-card-label">慧眼观看</div>
          <div className="p2-card-value">5,68</div>
          <div className="p2-card-trend up">环比 ↑ 12%</div>
        </div>
        <div className="p2-card">
          <div className="p2-card-label">家人关爱</div>
          <div className="p2-card-value">892</div>
          <div className="p2-card-trend up">环比 ↑ 8%</div>
        </div>
      </div>

      <div className="p2-summary" data-swiper-parallax-scale="0.9">
        <p>✨ 告警量显著下降，社区秩序持续向好。</p>
        <p style={{ marginTop: "0.1rem" }}>
          ✨ 居民参与度大幅提升，共治共享氛围浓厚。
        </p>
      </div>
    </div>
  );
};

export default Page2;
