import React from "react";
import "./Page2.css";

const Page2 = () => {
  return (
    <div className="p2-container">
      <h2 className="p2-title" data-swiper-parallax="-200">
        智慧社区 · 总体建设
      </h2>

      <div className="p2-grid" data-swiper-parallax="-100">
        <div className="p2-card">
          <div className="p2-card-label">小区平台开通</div>
          <div className="p2-card-value">
            13
            <span className="p2-card-unit">个</span>
          </div>
        </div>
        <div className="p2-card">
          <div className="p2-card-label">监控点位新建</div>
          <div className="p2-card-value">
            52
            <span className="p2-card-unit">个</span>
          </div>
        </div>
        <div className="p2-card">
          <div className="p2-card-label">覆盖居民</div>
          <div className="p2-card-value">
            13769
            <span className="p2-card-unit">人</span>
          </div>
        </div>
        <div className="p2-card">
          <div className="p2-card-label">人脸录入</div>
          <div className="p2-card-value">
            1258
            <span className="p2-card-unit">人</span>
          </div>
        </div>
      </div>

      <div className="p2-summary" data-swiper-parallax-scale="0.9">
        <p>
          实现智能监控全覆盖。完成1个小区智能化改造及智能门禁部署，有效提升社区治理效能与居民居住体验，同步拉动产数收入增长。
        </p>
      </div>
    </div>
  );
};

export default Page2;
