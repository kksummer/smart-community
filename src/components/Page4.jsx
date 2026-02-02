import React from "react";
import ReactECharts from "echarts-for-react";
import parkImg from "../assets/park.png";
import "./Page4.css";

const Page4 = () => {
  const getOption = () => ({
    tooltip: { trigger: "axis" },
    xAxis: {
      type: "category",
      data: ["8月", "9月", "10月", "11月", "12月", "1月"],
      axisLabel: { fontSize: 10 },
    },
    yAxis: { type: "value", axisLabel: { fontSize: 10 } },
    grid: { left: "10%", right: "10%", bottom: "15%", top: "15%" },
    series: [
      {
        data: [35, 32, 28, 30, 27, 25],
        type: "line",
        smooth: true,
        color: "#fbbc04",
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: "#fbbc04" },
              { offset: 1, color: "rgba(251, 188, 4, 0.1)" },
            ],
          },
        },
      },
    ],
  });

  return (
    <div className="p4-container">
      <h2 className="p4-title" data-swiper-parallax="-200">
        占道停车 · 秩序管理
      </h2>

      <p
        style={{ marginBottom: "0.15rem", color: "#666", fontSize: "0.14rem" }}
        data-swiper-parallax="-150"
      >
        本月告警25起，占比10%。物业平均核查处置率96%，违停现象大幅改善。
      </p>

      <div className="p4-chart-container" data-swiper-parallax="-100">
        <h4
          style={{
            fontSize: "0.12rem",
            color: "#999",
            textAlign: "center",
            margin: "0",
          }}
        >
          违停告警月度下降趋势
        </h4>
        <ReactECharts option={getOption()} style={{ height: "100%" }} />
      </div>

      <div
        className="p4-alert"
        style={{
          background: "#f1f3f4",
          color: "#5f6368",
          padding: "0.15rem",
          marginTop: "0.1rem",
        }}
        data-swiper-parallax-scale="0.9"
      >
        <div style={{ fontSize: "0.14rem", fontWeight: "bold" }}>
          管理成效：显著
        </div>
        <div style={{ fontSize: "0.13rem" }}>
          违停车辆短暂停留，经劝导后均已快速驶离
        </div>
      </div>

      <div
        className="p4-img-placeholder placeholder-img"
        data-swiper-parallax-x="-100"
        style={{ marginTop: "0.15rem" }}
      >
        <img
          src={parkImg}
          alt="违停核查"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Page4;
