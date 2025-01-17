import "./App.scss";
import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";

import { Parallax, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <div className="stars stars1" />
      <div className="stars stars2" />
      <div className="stars stars3" />
      <div className="stars stars4" />

      <div className="App">
        <>
          <Swiper
            style={{
              "--swiper-navigation-color": "#FF69B4",
              "--swiper-pagination-color": "#FF69B4",
              "--swiper-pagination-bullet-inactive-color": "#5DF15D",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "12px",
            }}
            speed={1500}
            direction="vertical"
            parallax={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={{
              enabled: true,
            }}
            navigation={true}
            modules={[Parallax, Pagination, Mousewheel, Keyboard]}
            className="appParallaxSlider"
            slidesPerView={1}
          >
            <div
              slot="container-start"
              className="parallax-bg"
              data-swiper-parallax="-23%"
            ></div>
            <SwiperSlide>
              {/*Title Page*/}
              <h1 className="title app__main-text" data-swiper-parallax="-300">
                My name is
              </h1>
              <h1 className="title app__main-text name" data-swiper-parallax="-200">
                Zachary Wedel
              </h1>
              <h1 className="title app__main-text occupation" data-swiper-parallax="-100">
                and I am a...
              </h1>
            </SwiperSlide>
            <SwiperSlide>
              {/*About me section*/}
              <div className="title" data-swiper-parallax="-300">
                Slide 2
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {/*Featured works*/}
              <div className="title" data-swiper-parallax="-300">
                Slide 3
              </div>
              <div className="subtitle" data-swiper-parallax="-200">
                Subtitle
              </div>
              <div className="text" data-swiper-parallax="-100">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam dictum mattis velit, sit amet faucibus felis iaculis
                  nec. Nulla laoreet justo vitae porttitor porttitor.
                  Suspendisse in sem justo. Integer laoreet magna nec elit
                  suscipit, ac laoreet nibh euismod. Aliquam hendrerit lorem at
                  elit facilisis rutrum. Ut at ullamcorper velit. Nulla ligula
                  nisi, imperdiet ut lacinia nec, tincidunt ut libero. Aenean
                  feugiat non eros quis feugiat.
                </p>
              </div>
            </SwiperSlide>
            {/*More coming soon!*/}
          </Swiper>
        </>
      </div>
    </>
  );
}

export default App;
