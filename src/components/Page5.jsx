import React from "react";
import "./Page5.css";

const Page5 = () => {
  return (
    <div className="p5-container">
      <h2 className="p5-title" data-swiper-parallax="-200">
        持续向好，共治共享
      </h2>
      <p className="p5-desc" data-swiper-parallax="-100">
        物业处置效率创新高，居民参与度大幅提升
      </p>

      <div className="p5-charts">
        <div className="p5-chart-box">
          <h4>📉 告警量下降趋势 (环比↓10%)</h4>
          <div className="chart-placeholder">折线图1 - 告警总量变化</div>
        </div>
        <div className="p5-chart-box">
          <h4>📈 居民参与度 (环比↑12%)</h4>
          <div className="chart-placeholder">柱状图2 - 慧眼观看次数</div>
        </div>
        <div className="p5-chart-box">
          <h4>🤝 物业处置率 (环比↑2.1%)</h4>
          <div className="chart-placeholder">折线图3 - 处置率变化</div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
