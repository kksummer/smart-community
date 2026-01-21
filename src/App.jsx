import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Mousewheel } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Page Components
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import Page6 from "./components/Page6";
import Page7 from "./components/Page7";

import "./App.css";

export default function App() {
  return (
    <>
      <Swiper
        direction={"vertical"}
        speed={600}
        parallax={true}
        mousewheel={true} // 支持鼠标滚轮，方便PC调试
        modules={[Parallax, Mousewheel]}
        className="mySwiper"
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        <SwiperSlide>
          <Page1 />
        </SwiperSlide>

        <SwiperSlide>
          <Page2 />
        </SwiperSlide>

        <SwiperSlide>
          <Page3 />
        </SwiperSlide>

        <SwiperSlide>
          <Page4 />
        </SwiperSlide>

        <SwiperSlide>
          <Page5 />
        </SwiperSlide>

        <SwiperSlide>
          <Page6 />
        </SwiperSlide>

        <SwiperSlide>
          <Page7 />
        </SwiperSlide>

        {/* 提示向上滑动的箭头 */}
        <div className="swipe-hint">
          <div className="arrow-up"></div>
        </div>
      </Swiper>
    </>
  );
}
