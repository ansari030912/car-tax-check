/* eslint-disable @next/next/no-img-element */
import React from "react";
import DVLAPageHeroSection from "../components/DVLAPageHeroSection";
import DLVAFaqs from "../components/DLVAFaqs";

const page = () => {
  return (
    <section class="relative overflow-hidden mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8">
      <DVLAPageHeroSection />{" "}
      <div class="container mx-auto px-4">
        <div class="flex flex-wrap -m-6">
          <div class="w-full p-6 ">
            <div>
              <div>
                <h2 class="mb-6 font-heading font-bold text-2xl text-gray-900">
                  How to Check DVLA Status Online
                </h2>
                <div class="flex justify-center">
                  <img
                    class="mb-10"
                    height={"300px"}
                    width={"300px"}
                    src="/3.png"
                    alt=""
                  />
                </div>
                <p class="mb-20 text-base text-gray-600">
                  You just need to enter your number plate and click on the
                  vehicle check button. Now get all the information such as the
                  vehicle&apos;s model, color, purchase date and other things.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DLVAFaqs />
    </section>
  );
};

export default page;
