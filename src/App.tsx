import "./App.css";
import Trend from "../src/assests/trend.png";
import Card from "./component/Card";
import { data } from "./data-list";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const el = document.querySelector("#loader-container");
    if (el) {
      el.remove();
      setLoading(false);
    }
  }, [loading]);

  return (
    <div className="Container">
      <div className="Trend_wrapper flex flex-row items-center">
        <img src={Trend} alt="trend"></img>
        <p className="text-white ml-4">Trending Assets</p>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3.2}
        navigation
        style={{ cursor: "pointer" }}
      >
        {data.map((ele, i) => (
          <SwiperSlide key={i++}>
            <Card key={i} cardData={ele} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
