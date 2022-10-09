import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span></span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src='/images/one.png' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/two.png' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/three.png' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/four.png' alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src='/images/five.png' alt="" />
        </SwiperSlide>
      </Swiper>
      <p>source code to these projects and more are in my <a href="https://github.com/prevailayodele2?tab=repositories">GitHub repository</a></p>
    </div>
  );
};

export default Portfolio;
