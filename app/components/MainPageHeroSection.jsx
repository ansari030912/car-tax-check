/* eslint-disable @next/next/no-img-element */
import React from "react";
import Tool from "./Tool";

const MainPageHeroSection = () => {
  return (
    <section className="bg-blueGray-50">
      <div className="overflow-hidden pt-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -m-8">
            <div className="w-full md:w-7/12 p-8">
              <h1 className="mb-6 text-2xl md:text-4xl font-bold font-heading md:max-w-4xl leading-none">
                MOT Check
              </h1>
              <h2 className="mb-6 text-base text-gray-700 font-base md:max-w-md">
                Enter your vehicle&apos;s registration number to view the MOT
                check and vehicle&apos;s mot history.
              </h2>
              <Tool button={"FREE CAR CHECK"} />
            </div>
            <div className="w-full md:w-5/12 p-3 md:mt-10 ">
              <img
                className="transform hover:-translate-y-16 transition ease-in-out duration-1000"
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
