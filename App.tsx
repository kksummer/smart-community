import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax } from "swiper/modules";
import "./App.css";

// 导入页面组件
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";
import Page7 from "./pages/Page7";
import { backgrounds } from "./pages/backgrounds";

function App() {
  return (
    <Swiper
      direction={"vertical"}
      parallax={true}
      speed={600}
      modules={[Parallax]}
    >
      {/* Page 1: 纯文字封面 */}
      <SwiperSlide
        style={{
          backgroundImage: `url(${backgrounds.page1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Page1 />
      </SwiperSlide>

      {/* Page 2: 核心指标数据 */}
      <SwiperSlide
        style={{
          backgroundImage: `url(${backgrounds.page2})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Page2 />
      </SwiperSlide>

      {/* Page 3: 增长趋势 */}
      <SwiperSlide
        style={{
          backgroundImage: `url(${backgrounds.page3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Page3 />
      </SwiperSlide>

      {/* Page 4: 设备分布 */}
      <SwiperSlide
        style={{
          backgroundImage: `url(${backgrounds.page4})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Page4 />
      </SwiperSlide>

      {/* Page 5: AI智能 */}
      <SwiperSlide
        style={{
          backgroundImage: `url(${backgrounds.page5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Page5 />
      </SwiperSlide>

      {/* Page 6: 资源能力 & 结尾 */}
      <SwiperSlide
        style={{
          backgroundImage: `url(${backgrounds.page6})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Page6 />
      </SwiperSlide>

      {/* Page 7: 总结与感谢 */}
      <SwiperSlide
        style={{
          backgroundImage: `url(${backgrounds.page1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Page7 />
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
