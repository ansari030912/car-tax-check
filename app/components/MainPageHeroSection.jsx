/* eslint-disable @next/next/no-img-element */
import React from "react";
import Tool from "./Tool";

const MainPageHeroSection = () => {
  return (
    <section class="bg-blueGray-50">
      <div class="overflow-hidden pt-16">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -m-8">
            <div class="w-full md:w-6/12 p-8">
              <div class="inline-block mb-6 px-2 py-1 font-semibold bg-green-100 rounded-full">
                <div class="flex flex-wrap items-center -m-1">
                  <div class="w-auto p-1">
                    <a class="text-sm" href="">
                      👋 We are hiring! View open roles
                    </a>
                  </div>
                  <div class="w-auto p-1">
                    <svg
                      width="15"
                      height="15"
                      viewbox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.66667 3.41675L12.75 7.50008M12.75 7.50008L8.66667 11.5834M12.75 7.50008L2.25 7.50008"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <h1 class="mb-6 text-6xl md:text-8xl lg:text-7xl font-bold font-heading md:max-w-4xl leading-none">
                Free Car Check
              </h1>
              <p class="mb-6 text-lg text-gray-900 font-medium md:max-w-md">
                Get the best-in-class group mentoring plans and professional
                benefits for your team
              </p>
              <Tool />

              <p class="mb-6 text-sm text-gray-500 font-semibold uppercase">
                Trusted and loved by 100+ tech first teams
              </p>
              <div class="flex flex-wrap -m-3">
                <div class="w-auto p-3">
                  <img src="/brands/brand.png" alt="" />
                </div>
                <div class="w-auto p-3">
                  <img src="/brands/brand2.png" alt="" />
                </div>
                <div class="w-auto p-3">
                  <img src="/brands/brand3.png" alt="" />
                </div>
              </div>
            </div>
            <div class="w-full md:w-6/12 p-8">
              <img
                class="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                src="/3.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageHeroSection;
