import React from "react";
import "./App.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Parallax, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";

import FeaturedWidget from "../FeaturedWidget/FeaturedWidget";
import { widgetData } from "../../constants/WidgetsData";
import SlideShow from "../SlideShow/SlideShow";

function App() {
  //this is all here because I couldn't make a smooth animation with just CSS :>
  const topRef = useRef(null);
  const nameRef = useRef(null);
  const firstOccRef = useRef(null);
  const secondOccRef = useRef(null);

  function fadeInTiming(delay, element) {
    const miliseconds = delay * 1000;
    setTimeout(() => {
      //prevents crash
      console.log(element.current.classList);
      element !== null && element.current.classList.add("app__main-text_shown");
    }, miliseconds);
  }

  //respective js calls to animations in app.scss, I couldn't get it to look good in CSS :/
  fadeInTiming(2, topRef);
  fadeInTiming(3, nameRef);
  fadeInTiming(4, firstOccRef);
  fadeInTiming(6, secondOccRef);

  //disabling tab scrolling otherwise it will look wonky
  document
    .querySelectorAll("*, .slideshow__button")
    .forEach((element) => element.setAttribute("tabindex", -1));

  return (
    <>
      <div className="stars stars2" />
      <div className="stars stars3" />
      <div className="stars stars4" />

      <div className="App">
        <div>
          <a
            href="https://github.com/zaccmagicdev/personal_portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="app__github-asteroid" type="button"></button>
          </a>
        </div>

        <Swiper
          style={{
            "--swiper-navigation-color": "#FF69B4",
            "--swiper-pagination-color": "#FF69B4",
            "--swiper-pagination-bullet-inactive-color": "#00FFFC",
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
            <h1
              className="title app__main-text top"
              ref={topRef}
              data-swiper-parallax="-300"
            >
              My name is
            </h1>
            <h1
              className="title app__main-text name"
              ref={nameRef}
              data-swiper-parallax="-200"
            >
              Zachary Wedel
            </h1>
            <h1
              className="title app__main-text occupation1"
              ref={firstOccRef}
              data-swiper-parallax="-100"
            >
              and I am a
            </h1>
            <h1
              className="title app__main-text occupation2"
              ref={secondOccRef}
              data-swiper-parallax="-50"
            >
              Fullstack Developer
            </h1>
          </SwiperSlide>
          <SwiperSlide>
            {/*About me section*/}
            <p
              className="app__main-text app__main-text_shown"
              data-swiper-parallax="-300"
            >
              Who am I?
            </p>
            <p className="app__medium-text" data-swiper-parallax="-200">
              and what can I do?
            </p>
            <div className="app_about-me-container">

              <SlideShow className="app__author-images"/>
              <p
                className="text app__about-me-text"
                data-swiper-parallax="-100"
              >
                My name is Zachary Wedel and I am a 23 year old full stack
                developer who completed the Software Engieering program at
                TripleTen and currently a student at the College of Lake County.
                I've been invested in technology for a long time but made the
                switch to programming full time from learning cybersecurity. I
                am currently pursuing my Bachelor's Degree in Computer Science
                and have been happier than ever with my career choice. Writing,
                building and being proud of the software I make has been a much
                more fulfilling experience than showing up at my college
                everyday and not feeling invested. I'm mostly a hobbyist right
                now but I definitely know my way around writing front-end and
                back-end code for any web project you may think of! When I'm not
                programming I enjoy playing ice hockey, lifting weights, making
                Hands Up EDM in FL Studio, cooking, and spending time with my
                loved ones. You can find all of my work on the next slide!
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {/*Featured works*/}
            <div className="title app__medium-text" data-swiper-parallax="-300">
              What kinds of things have I made?
            </div>
            <div className="text" data-swiper-parallax="-100">
              <section className="app__widgetsContainer">
                {widgetData.map((object) => {
                  return (
                    <FeaturedWidget
                      id={object.id}
                      name={object.name}
                      githubLink={object.githublink}
                      gifURL={object.gifURL}
                      description={object.description}
                    />
                  );
                })}
              </section>
            </div>
          </SwiperSlide>
          {/*More coming soon!*/}
        </Swiper>
      </div>
    </>
  );
}

export default App;
