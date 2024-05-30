/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <section class="overflow-hidden bg-indigo-900 mb-10">
      <section>
        <div class="flex items-center justify-between px-8 py-5">
          <div class="w-auto">
            <div class="flex flex-wrap items-center">
              <div class="w-auto mr-14">
                <Link href={"/"}>
                  <img src="/2.png" height={"80px"} width={"80px"} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div class="w-auto">
            <div class="flex flex-wrap items-center">
              <div class="w-auto hidden lg:block">
                <ul class="flex items-center mr-10">
                  {/* <li class="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                    <a href="#">Features</a>
                  </li> */}
                  {/* <li class="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                    <a href="#">Solutions</a>
                  </li> */}
                  <li class="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                    <Link href="mot-check">MOT Check</Link>
                  </li>
                  <li class="font-heading text-white hover:text-gray-200 text-lg">
                    <Link href="dvla-check">DVLA Check</Link>
                  </li>
                </ul>
              </div>
              <div class="w-auto hidden lg:block">
                <button class="group relative font-heading block py-2 px-5 text-lg text-white border-2 border-white overflow-hidden rounded-10">
                  <div class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500"></div>
                  <p class="relative z-10 group-hover:text-gray-800">
                    Start Free Trial
                  </p>
                </button>
              </div>
              <div class="w-auto lg:hidden">
                <a href="#">
                  <svg
                    class="navbar-burger text-gray-800"
                    width="51"
                    height="51"
                    viewbox="0 0 56 56"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="56"
                      height="56"
                      rx="28"
                      fill="currentColor"
                    ></rect>
                    <path
                      d="M37 32H19M37 24H19"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="hidden navbar-menu fixed top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"></div>
          <nav class="relative z-10 px-9 py-8 bg-white h-full">
            <div class="flex flex-wrap justify-between h-full">
              <div class="w-full">
                <div class="flex items-center justify-between -m-2">
                  <div class="w-auto p-2">
                    <a class="inline-block" href="#">
                      <img
                        src="gradia-assets/logos/gradia-name-black.svg"
                        alt=""
                      />
                    </a>
                  </div>
                  <div class="w-auto p-2">
                    <a class="navbar-burger" href="#">
                      <svg
                        width="24"
                        height="24"
                        viewbox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="#111827"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div class="flex flex-col justify-center py-8 w-full">
                <ul>
                  <li class="mb-12">
                    <a
                      class="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Features
                    </a>
                  </li>
                  <li class="mb-12">
                    <a
                      class="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Solutions
                    </a>
                  </li>
                  <li class="mb-12">
                    <a
                      class="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Resources
                    </a>
                  </li>
                  <li>
                    <a
                      class="font-heading font-medium text-lg text-gray-900 hover:text-gray-700"
                      href="#"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div class="flex flex-col justify-end w-full">
                <div class="flex flex-wrap">
                  <div class="w-full">
                    <button class="p-0.5 font-heading block w-full text-lg text-gray-900 font-medium rounded-10">
                      <div class="py-2 px-5 rounded-10">
                        <p>Login</p>
                      </div>
                    </button>
                  </div>
                  <div class="w-full">
                    <button class="group relative p-0.5 font-heading block w-full text-lg text-gray-900 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                      <div class="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
                      <div class="py-2 px-5 bg-white rounded-lg">
                        <p class="relative z-10">Start Free Trial</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <div class="container mx-auto px-4"></div>
    </section>
  );
};

export default NavBar;
