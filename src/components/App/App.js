import "./App.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import { Parallax, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import "swiper/css";
import "swiper/css/pagination";

function App() {
  return (
    <>
      <div className="stars stars1" />
      <div className="stars stars2" />
      <div className="stars stars3" />

      <div className="App">
      <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#FF69B4',
          '--swiper-pagination-color': '#FF69B4',
          '--swiper-pagination-bullet-inactive-color': '#5DF15D',
          '--swiper-pagination-bullet-inactive-opacity': '1',
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
          style={{
            'background-image':
              'url(https://swiperjs.com/demos/images/nature-1.jpg)',
          }}
          data-swiper-parallax="-23%"
        ></div>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 1
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 2
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="title" data-swiper-parallax="-300">
            Slide 3
          </div>
          <div className="subtitle" data-swiper-parallax="-200">
            Subtitle
          </div>
          <div className="text" data-swiper-parallax="-100">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
              laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
              Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
              Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
              ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
              tincidunt ut libero. Aenean feugiat non eros quis feugiat.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
        {/*<section className="app__section app__section-title">
          <h1 className="app__main-text">
            My name is Zachary Wedel and I am a...
          </h1>
        </section>
        <section className="app__section">
          <h2>What am I capable of?</h2>
          <p>I am a self-driven, yet compassionate and willing full stack software developer with 2 years in this wonderful industry.
          </p>
        </section>*/}
      </div>
    </>
  );
}

export default App;
