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
          <span className="p6-card-icon">🔥</span> 安全提示
        </div>
        <div className="p6-card-text">
          季节交替，请注意用电安全；严禁电动车及电池进楼入户补能。
        </div>
      </div>

      <div className="p6-card" data-swiper-parallax="-150">
        <div className="p6-card-title">
          <span className="p6-card-icon">🏘️</span> 邻里互助
        </div>
        <div className="p6-card-text">
          守望相助，共筑暖心社区。如遇孤寡老人需要帮助，请联系物业。
        </div>
      </div>

      <div className="p6-card" data-swiper-parallax="-200">
        <div className="p6-card-title">
          <span className="p6-card-icon">🏙️</span> 文明倡议
        </div>
        <div className="p6-card-text">
          拒绝高空抛物，爱护公共设施。文明每一步，和谐全社区。
        </div>
      </div>

      <div className="p6-card" data-swiper-parallax="-250">
        <div className="p6-card-title">
          <span className="p6-card-icon">💬</span> 意见反馈
        </div>
        <div className="p6-card-text">
          如您对智慧社区建设有任何建议，欢迎通过反馈渠道向我们留言。
        </div>
      </div>
    </div>
  );
};

export default Page6;
