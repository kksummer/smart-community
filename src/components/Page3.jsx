import React from "react";
import "./Page3.css";

const Page3 = () => {
  return (
    <div className="p3-container">
      <h2 className="p3-title" data-swiper-parallax="-200">
        重点告警 · 严防风险
      </h2>

      <div className="p3-top-stat" data-swiper-parallax="-100">
        <div className="p3-label">本月区域入侵告警</div>
        <div className="p3-total">12 起</div>
      </div>

      <div className="p3-list">
        <div className="p3-item" data-swiper-parallax-x="100">
          <div className="p3-item-header">
            <span className="p3-item-label">📊 告警占比</span>
            <span className="p3-item-val">7.2%</span>
          </div>
          <div className="p3-detail-row">
            <span>物业处置率</span>
            <span style={{ fontWeight: "bold", color: "#188038" }}>100%</span>
          </div>
        </div>

        <div
          className="p3-item"
          data-swiper-parallax-x="200"
          style={{ background: "#fff3e0" }}
        >
          <div className="p3-highlight">
            🚨 <strong>严重程度：高</strong>
            <br />
            3起夜间可疑徘徊已联动安防成功拦截
          </div>
        </div>

        <div style={{ marginTop: "0.2rem" }} className="chart-placeholder">
          区域入侵时段分布图
        </div>
      </div>
    </div>
  );
};

export default Page3;
