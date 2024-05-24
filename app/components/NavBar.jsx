/* eslint-disable @next/next/no-img-element */
import React from "react";

const NavBar = () => {
  return (
    <section class="px-4 pt-6 pb-8 container m-auto lg:px-18 lg:pb-18">
      <nav class="relative bg-white mb-6 px-10 lg:pl-20 py-7 lg:py-4 rounded-2xl">
        <div class="flex items-center justify-between">
          <div class="flex items-center justify-between w-full lg:w-auto">
            <a class="navbar-burger order-1 lg:order-none lg:pr-9" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="34"
                height="14"
                viewbox="0 0 34 14"
                fill="none"
              >
                <g clip-path="url(#clip0_231_4713)">
                  <rect width="34" height="3" rx="1.5" fill="#19191B"></rect>
                  <rect
                    y="11"
                    width="34"
                    height="3"
                    rx="1.5"
                    fill="#19191B"
                  ></rect>
                </g>
                <defs>
                  <clippath id="clip0_231_4713">
                    <rect width="34" height="14" fill="white"></rect>
                  </clippath>
                </defs>
              </svg>
            </a>
            <a class="pr-4 lg:pr-0" href="#">
              <img
                class="h-20"
                src="/1.png"
                alt=""
              />
            </a>
          </div>
          <div class="hidden lg:flex items-center gap-5">
            <a
              class="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200"
              href="#"
            >
              Help
            </a>
            <a
              class="inline-flex justify-center items-center text-center h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
              href="#"
            >
              Sign up free
            </a>
          </div>
        </div>
      </nav>
      <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
        <div class="navbar-backdrop fixed inset-0 bg-black opacity-20"></div>
        <nav class="relative p-8 w-full h-full bg-white overflow-y-auto">
          <div class="flex flex-col justify-between h-full">
            <div class="flex items-center justify-between mb-16">
              <a class="pr-4" href="#">
                <img
                  class="h-10"
                  src="mirga-assets/images/logos/mirga-dark-logo3.svg"
                  alt=""
                />
              </a>
              <a class="navbar-close" href="#">
                <svg
                  width="24"
                  height="24"
                  viewbox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 18L18 6M6 6L18 18"
                    stroke="#252E4A"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
            </div>
            <div class="flex flex-col items-center gap-2">
              <a
                class="inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-lg focus:text-neutral-900 bg-transparent hover:bg-transparent focus:bg-transparent border border-transparent rounded-lg focus:ring-4 focus:ring-transparent transition duration-200"
                href="#"
              >
                Login
              </a>
              <a
                class="inline-flex justify-center items-center text-center w-full h-16 p-5 font-semibold tracking-tight text-xl hover:text-white focus:text-white bg-transparent hover:bg-neutral-900 focus:bg-neutral-900 border border-neutral-900 rounded-lg focus:ring-4 focus:ring-neutral-400 transition duration-200"
                href="#"
              >
                Sign up free
              </a>
            </div>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default NavBar;
