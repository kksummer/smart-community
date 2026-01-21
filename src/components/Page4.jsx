import React from "react";
import "./Page4.css";

const Page4 = () => {
  return (
    <div className="p4-container">
      <h2 className="p4-title" data-swiper-parallax="-200">
        社区秩序 · 规范管理
      </h2>

      <p style={{ marginBottom: "0.2rem", color: "#666" }}>
        占道停车管控成效：
      </p>

      <div className="p4-grid" data-swiper-parallax="-100">
        <div className="p4-card">
          <div className="p4-card-title">本月告警数</div>
          <div className="p4-card-num" style={{ color: "#fbbc04" }}>
            25起
          </div>
        </div>
        <div className="p4-card">
          <div className="p4-card-title">告警占比</div>
          <div className="p4-card-num" style={{ color: "#333" }}>
            10%
          </div>
        </div>
        <div className="p4-card">
          <div className="p4-card-title">物业处置率</div>
          <div className="p4-card-num">96%</div>
        </div>
      </div>

      <div
        className="p4-alert"
        style={{ background: "#e8f0fe", color: "#1967d2" }}
        data-swiper-parallax-scale="0.9"
      >
        <div
          style={{
            fontSize: "0.16rem",
            marginBottom: "0.05rem",
            fontWeight: "normal",
          }}
        >
          严重程度：中
        </div>
        违停车辆短暂停留
        <br />
        经劝导后快速驶离
      </div>

      <div style={{ marginTop: "0.4rem" }} className="chart-placeholder">
        违停点位TOP5分布
      </div>
    </div>
  );
};

export default Page4;
