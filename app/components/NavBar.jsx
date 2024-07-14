"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";

const NavBar = () => {
  // State to manage the visibility of the mobile menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <section
      style={{ backgroundColor: "#001B69" }}
      className="overflow-hidden mb-10"
    >
      <section>
        <div className="flex items-center justify-between px-8 py-2">
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto mr-14">
                <Link href={"/"}>
                  <img src="/2.png" height={"80px"} width={"80px"} alt="" />
                </Link>
              </div>
            </div>
          </div>
          <div className="w-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-auto hidden lg:block">
                <ul className="flex items-center mr-10">
                  <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                    <Link href="/">Free Car Check</Link>
                  </li>
                  <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                    <Link href="/mot-check">MOT Check</Link>
                  </li>
                  <li className="font-heading mr-9 text-white hover:text-gray-200 text-lg">
                    <Link href="/dvla-check">DVLA Check</Link>
                  </li>
                  <li className="font-heading text-white hover:text-gray-200 text-lg">
                    <Link href="/car-history-check">Car History Check</Link>
                  </li>
                </ul>
              </div>
              <div className="w-auto hidden lg:block">
                <button className="group relative font-heading block py-2 px-5 text-lg text-white border-2 border-white overflow-hidden rounded-10">
                  <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-white transition ease-in-out duration-500"></div>
                  <p className="relative z-10 group-hover:text-gray-800">
                    Register
                  </p>
                </button>
              </div>
              <div className="w-auto lg:hidden">
                <a href="#" onClick={toggleMenu}>
                  <svg
                    className="navbar-burger text-indigo-900"
                    width="51"
                    height="51"
                    viewBox="0 0 56 56"
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
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } navbar-menu fixed top-0 left-0 bottom-0 lg:hidden w-4/6 sm:max-w-xs z-50`}
        >
          <div
            className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-80"
            onClick={toggleMenu}
          ></div>
          <nav className="relative z-10 px-9 py-8 bg-indigo-900 h-full">
            <div className="flex flex-wrap justify-between h-full">
              <div className="w-full">
                <div className="flex items-center justify-between -m-2">
                  <div className="w-auto p-2">
                    <a className="inline-block" href="#" onClick={toggleMenu}>
                      <img src="/2.png" height={"80px"} width={"80px"} alt="" />
                    </a>
                  </div>
                  <div className="w-auto p-2">
                    <a className="navbar-burger" href="#" onClick={toggleMenu}>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6 18L18 6M6 6L18 18"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center py-8 w-full">
                <ul>
                  <li className="mb-12">
                    <Link
                      className="font-heading font-medium text-lg text-white hover:text-gray-200"
                      href="/"
                    >
                      Free Car Check
                    </Link>
                  </li>
                  <li className="mb-12">
                    <Link
                      className="font-heading font-medium text-lg text-white hover:text-gray-200"
                      href="/mot-check"
                    >
                      Mot Check
                    </Link>
                  </li>
                  <li className="mb-12">
                    <Link
                      className="font-heading font-medium text-lg text-white hover:text-gray-200"
                      href="/dvla-check"
                    >
                      DVLA Check
                    </Link>
                  </li>
                  <li className="mb-12">
                    <Link
                      className="font-heading font-medium text-lg text-white hover:text-gray-200"
                      href="/car-history-check"
                    >
                      Car History Check
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col justify-end w-full">
                <div className="flex flex-wrap">
                  <div className="w-full">
                    <button className="group relative p-0.5 font-heading block w-full text-lg text-gray-700 font-medium bg-gradient-cyan overflow-hidden rounded-10">
                      <div className="absolute top-0 left-0 transform -translate-y-full group-hover:-translate-y-0 h-full w-full bg-gradient-cyan transition ease-in-out duration-500"></div>
                      <div className="py-2 px-5 bg-white rounded-lg">
                        <p className="relative z-10">Register</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
      <div className="container mx-auto px-4"></div>
    </section>
  );
};

export default NavBar;
