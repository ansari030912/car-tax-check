/* eslint-disable @next/next/no-img-element */
import React from "react";
import DVLAPageHeroSection from "../components/DVLAPageHeroSection";
import DLVAFaqs from "../components/DLVAFaqs";

export const metadata = {
  title: "DVLA Check: Free Licence, Insurance & Tax Check",
  description:
    "Use our Free DVLA check tool to validate licence, insurance and tax check of any vehicle in the UK. Get registered keeper details.",
  alternates: {
    canonical: "https://carcheckstatus.co.uk/dvla-check",
  },
  openGraph: {
    locale: "en_gb",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tC-9la7Buate7EWO271VFFed2QvAZ74_Kkh8l0rzhW8",
  },
};
const page = () => {
  return (
    <>
      <section class="relative overflow-hidden mx-auto max-w-5xl w-full sm:px-6 lg:px-8">
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
                    vehicle check button. Now get all the information such as
                    the vehicle&apos;s model, color, purchase date and other
                    things.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-white">
        <div className="m-auto container">
          <DLVAFaqs />
        </div>
      </div>
    </>
  );
};

export default page;
