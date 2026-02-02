import React from "react";
import ReactECharts from "echarts-for-react";
import careImg from "../assets/care.png";
import "./Page3.css";

const Page3 = () => {
  const getPieOption = () => ({
    tooltip: { trigger: "item" },
    series: [
      {
        name: "家人关爱分布",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 6,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: true,
          position: "outside",
          formatter: "{b}\n{c}次",
          fontSize: 10,
        },
        data: [
          { value: 654, name: "老人关爱", itemStyle: { color: "#1a73e8" } },
          { value: 120, name: "儿童守护", itemStyle: { color: "#4285f4" } },
          { value: 118, name: "成员安全", itemStyle: { color: "#8ab4f8" } },
        ],
      },
    ],
  });

  return (
    <div className="p3-container">
      <h2 className="p4-title" data-swiper-parallax="-200">
        智能监测 · 家人关爱
      </h2>

      <p
        style={{ marginBottom: "0.15rem", color: "#666", fontSize: "0.14rem" }}
        data-swiper-parallax="-150"
      >
        守护与关爱并进。本月家人关爱触发892次，环比增长8%，有效提升居民关爱效率。
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
          社区家人关爱分布情况
        </h4>
        <div style={{ height: "100%" }}>
          <ReactECharts option={getPieOption()} style={{ height: "100%" }} />
        </div>
      </div>

      <div
        className="p4-alert"
        style={{
          background: "#e8f0fe",
          color: "#1967d2",
          padding: "0.15rem",
          marginTop: "0.15rem",
        }}
        data-swiper-parallax-scale="0.9"
      >
        <div style={{ fontSize: "0.14rem", fontWeight: "bold" }}>
          安全等级：稳固
        </div>
        <div style={{ fontSize: "0.13rem" }}>
          本月人员活动智能识别与关爱触发共计 904 起
        </div>
      </div>

      <div
        className="p4-img-placeholder placeholder-img"
        data-swiper-parallax-x="-100"
        style={{ marginTop: "0.15rem" }}
      >
        <img
          src={careImg}
          alt="家人关爱"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
    </div>
  );
};

export default Page3;
