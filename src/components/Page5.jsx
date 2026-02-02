import React from "react";
import ReactECharts from "echarts-for-react";
import "./Page5.css";

const Page5 = () => {
  const getGuageOption = (value, color) => ({
    series: [
      {
        type: "gauge",
        startAngle: 180,
        endAngle: 0,
        radius: "90%",
        center: ["50%", "75%"],
        progress: { show: true, width: 8, itemStyle: { color: color } },
        axisLine: { lineStyle: { width: 8 } },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        pointer: { show: false },
        detail: {
          valueAnimation: true,
          formatter: "{value}",
          offsetCenter: [0, -10],
          fontSize: 18,
          fontWeight: "bold",
          color: "#333",
        },
        data: [{ value: value }],
      },
    ],
  });

  return (
    <div className="p5-container" style={{ paddingTop: "0.2rem" }}>
      <h2 className="p5-title" data-swiper-parallax="-200">
        高效处置 · 居民共享
      </h2>
      <p
        className="p5-desc"
        style={{ marginBottom: "0.1rem" }}
        data-swiper-parallax="-150"
      >
        各项核心指标稳中向好，社区治理效能持续提升。
      </p>

      <div className="p5-charts">
        <div
          className="p5-chart-box"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f8f9fa",
            padding: "0.1rem",
            borderRadius: "0.12rem",
            marginBottom: "0.1rem",
          }}
        >
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: 0 }}>物业处置率</h4>
            <p
              style={{
                fontSize: "0.12rem",
                color: "#188038",
                margin: "0.05rem 0",
              }}
            >
              环比 ↑ 2.1%
            </p>
            <p style={{ fontSize: "0.11rem", color: "#666" }}>处置效率创新高</p>
          </div>
          <div style={{ width: "1.2rem", height: "0.8rem" }}>
            <ReactECharts
              option={getGuageOption(98, "#188038")}
              style={{ height: "100%" }}
            />
          </div>
        </div>

        <div
          className="p5-chart-box"
          style={{
            display: "flex",
            flexDirection: "column",
            background: "#e8f0fe",
            padding: "0.15rem",
            borderRadius: "0.12rem",
            marginBottom: "0.1rem",
          }}
          data-swiper-parallax-x="100"
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "0.1rem",
            }}
          >
            <h4 style={{ margin: 0, color: "#1967d2" }}>管理闭环效能</h4>
            <span
              style={{
                fontSize: "0.12rem",
                color: "#fff",
                background: "#1967d2",
                padding: "2px 8px",
                borderRadius: "10px",
              }}
            >
              智能联动
            </span>
          </div>
          <p
            style={{
              fontSize: "0.13rem",
              color: "#444",
              lineHeight: "1.5",
            }}
          >
            建立“AI发现-物业推送-现场核查-结果反馈”的全流程闭闭环，平均响应时间缩短至{" "}
            <strong>3.5分钟</strong>。
          </p>
        </div>

        <div
          className="p5-chart-box"
          style={{
            display: "flex",
            alignItems: "center",
            background: "#f8f9fa",
            padding: "0.1rem",
            borderRadius: "0.12rem",
          }}
        >
          <div style={{ flex: 1 }}>
            <h4 style={{ margin: 0 }}>慧眼观看次数</h4>
            <p
              style={{
                fontSize: "0.2rem",
                fontWeight: "bold",
                margin: "0.05rem 0",
              }}
            >
              5,688 次
            </p>
            <p style={{ fontSize: "0.12rem", color: "#1a73e8" }}>环比 ↑ 12%</p>
          </div>
          <div
            style={{
              width: "1.2rem",
              height: "0.8rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.3rem",
            }}
          >
            👀
          </div>
        </div>
      </div>

      <div
        className="p5-summary"
        style={{
          fontSize: "0.12rem",
          padding: "0.12rem",
          marginTop: "0.15rem",
        }}
      >
        ✨ 居民参与度大幅提升，共治共享氛围浓厚。
      </div>
    </div>
  );
};

export default Page5;
