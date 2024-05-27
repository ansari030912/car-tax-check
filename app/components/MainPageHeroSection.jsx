/* eslint-disable @next/next/no-img-element */
import React from "react";
import Tool from "./Tool";

const MainPageHeroSection = () => {
  return (
    <section class="bg-blueGray-50">
      <div class="overflow-hidden pt-16">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap -m-8">
            <div class="w-full md:w-7/12 p-8">
              <h1 class="mb-6 text-2xl md:text-4xl font-bold font-heading md:max-w-4xl leading-none">
                Free Car Check
              </h1>
              <h2 class="mb-6 text-base text-gray-700 font-base md:max-w-md">
                Enter your vehicle&apos;s registration number for a free car
                check
              </h2>
              <Tool />
            </div>
            <div class="w-full md:w-5/12 p-3 md:mt-10 ">
              <img
                class="transform hover:-translate-y-16 transition ease-in-out duration-1000"
                src="/3.png"
                alt="Free Car Check"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPageHeroSection;
