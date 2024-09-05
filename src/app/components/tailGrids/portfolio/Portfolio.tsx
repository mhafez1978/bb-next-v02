"use client";

import React, { useCallback, useRef } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Portfolio: React.FC<{}> = () => {
  const sliderRef = useRef(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <section
        id="portfolio"
        className="flex flex-col justify-center items-center w-[100vw] h-[100vh] overflow-hidden py-20"
      >
        <div className="relative container h-[60vh] mx-auto">
          <Swiper slidesPerView={1} ref={sliderRef}>
            <SwiperSlide>
              <PortfolioCard
                subtitle="Astro JS"
                title="Prestige Worldwide Limos"
                category="Transportation Services"
                details="PWWL A startup limousie company based in Denver NC focused on providing luxurious transportation services for wedding groups corporate events"
                date="06, September 2021"
                image="pwwl.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioCard
                subtitle="Astro JS"
                title="Being Mohamed Hafez"
                category="Transportation Services"
                details="Mohamed Hafez is a founder of 2 successful businesses focused on serving the local community fresh technology."
                date="06, September 2021"
                image="portfolio.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioCard
                subtitle="WordPress Theme"
                title="Captain Ehab Design Studio"
                category="Interior Design Company"
                details="Play is free startup, saas, business, app, and software landing page page that is based on Tailwind. It comes with high-quality design and everything you need"
                date="06, September 2021"
                image="ehab.png"
              />
            </SwiperSlide>
            <SwiperSlide>
              <PortfolioCard
                subtitle="WordPress Theme"
                title="JL Automotive"
                category="Auto Repair Shop"
                details="JL Automotive is a auto mechanic repair shop based in Charlotte NC and has a team of highly skilled certified mechanics that can repair any type of car."
                date="06, September 2021"
                image="jl-auto.png"
              />
            </SwiperSlide>
          </Swiper>
          <div className="absolute w-1/2 flex flex-row gap-2 items-center justify-between bottom-0 pr-40 z-40">
            <div className="prev-arrow" onClick={handlePrev}>
              <button className="text-body-color dark:text-dark-6 hover:text-primary flex items-center justify-center text-sm font-medium transition-all">
                <span className="mr-3">
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path
                      d="M19.25 10.2437H4.57186L10.4156 4.29687C10.725 3.9875 10.725 3.50625 10.4156 3.19687C10.1062 2.8875 9.62499 2.8875 9.31561 3.19687L2.19999 10.4156C1.89061 10.725 1.89061 11.2063 2.19999 11.5156L9.31561 18.7344C9.45311 18.8719 9.65936 18.975 9.86561 18.975C10.0719 18.975 10.2437 18.9062 10.4156 18.7687C10.725 18.4594 10.725 17.9781 10.4156 17.6688L4.60624 11.7906H19.25C19.6625 11.7906 20.0062 11.4469 20.0062 11.0344C20.0062 10.5875 19.6625 10.2437 19.25 10.2437Z"
                      fill=""
                    />
                  </svg>
                </span>
                Previous Project
              </button>
            </div>
            <div className="next-arrow" onClick={handleNext}>
              <button className="text-body-color dark:text-dark-6 hover:text-primary flex items-center justify-center text-sm font-medium transition-all">
                Next Project
                <span className="ml-3">
                  <svg
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                  >
                    <path
                      d="M19.8 10.45L12.6844 3.23125C12.375 2.92188 11.8937 2.92188 11.5844 3.23125C11.275 3.54063 11.275 4.02188 11.5844 4.33125L17.3594 10.2094H2.74999C2.33749 10.2094 1.99374 10.5531 1.99374 10.9656C1.99374 11.3781 2.33749 11.7563 2.74999 11.7563H17.4281L11.5844 17.7031C11.275 18.0125 11.275 18.4938 11.5844 18.8031C11.7219 18.9406 11.9281 19.0094 12.1344 19.0094C12.3406 19.0094 12.5469 18.9406 12.6844 18.7688L19.8 11.55C20.1094 11.2406 20.1094 10.7594 19.8 10.45Z"
                      fill=""
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({
  subtitle,
  title,
  category,
  details,
  date,
  image,
}: any) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-1/2 h-full justify-center items-start">
        <span className="bg-sky-600 mb-5 inline-block py-[6px] px-4 text-sm font-medium text-white">
          {subtitle}
        </span>
        <h2 className="text-[#090E34] dark:text-white mb-6 text-2xl  font-bold sm:text-[35px]">
          {title}
        </h2>
        <h5 className="text-sky-600 dark:text-white mb-6 text-lg font-medium">
          {category}
        </h5>
        <p className="text-black dark:text-dark-6 mb-6 text-base w-[80%]">
          {details}
        </p>
        <span className="text-sky-600 dark:text-white text-sm font-medium">
          {date}
        </span>
      </div>
      <div className="flex flex-col w-1/2 h-[60vh] justify-center items-center">
        <div className="w-full h-full">
          <div className="">
            <img src={image} alt="image" className="" />
          </div>
        </div>
      </div>
    </div>
  );
};
