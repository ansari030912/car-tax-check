/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <section
      style={{ backgroundColor: "#001B69" }}
      //   style="background-image: url('flex-ui-assets/elements/pattern-white.svg'); background-position: center;"
    >
      <div className="mx-auto max-w-5xl w-full sm:px-6 lg:px-8">
        <div class="container px-4 mx-auto">
          <div class="flex flex-wrap pt-12 pb-12 -mx-4">
            <div class="w-full md:w-4/12 text-center lg:w-4/12 px-4 mb-4 lg:mb-0">
              <h3 class="mb-5 text-lg font-bold text-yellow-400">Services</h3>
              <ul>
                <li class="mb-4">
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/"
                  >
                    Free Car Check
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/mot-check"
                  >
                    MOT Check
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/dvla-check"
                  >
                    DVLA Check
                  </Link>
                </li>
                <li>
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/car-history-check"
                  >
                    Car History Check
                  </Link>
                </li>
              </ul>
            </div>
            <div class="w-full md:w-4/12 text-center lg:w-4/12 px-4 mb-4 lg:mb-0">
              <h3 class="mb-5 text-lg font-bold text-yellow-400">Guides</h3>
              {/* <ul>
                <li class="mb-4">
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/#"
                  >
                    Blog
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/#"
                  >
                    Newsletter
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/#"
                  >
                    Help Centre
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/#"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/#"
                  >
                    Support
                  </Link>
                </li>
              </ul> */}
            </div>
            <div class="w-full md:w-4/12 text-center lg:w-4/12 px-4 mb-4 lg:mb-0">
              <h3 class="mb-5 text-lg font-bold text-yellow-400">
                Important Pages
              </h3>
              <ul>
                <li class="mb-4">
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/about"
                  >
                    About us
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/contact"
                  >
                    Contat us
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/privacy-policy"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li class="mb-4">
                  <Link
                    class="inline-block text-gray-100 hover:text-gray-200 font-medium"
                    href="/terms-and-conditions"
                  >
                    Terms and Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="border-b border-coolGray-100"></div>
      <p class="py-2 md:py-4 text-sm text-white font-medium text-center">
        © 2024 Car Check Status
      </p>
    </section>
  );
};

export default Footer;
