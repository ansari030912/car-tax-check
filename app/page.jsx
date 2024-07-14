/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import MainPageFaqs from "./components/MainPageFaqs";
import MainPageHeroSection from "./components/MainPageHeroSection";

export const metadata = {
  title: "Free Car Check: Get Vehicle Tax, History & Registration",
  description:
    "Enter registration number for a free car check & MOT history check. Get details of vehicle tax, theft history, damage report, & advisory notes.",
  alternates: {
    canonical: "https://carcheckstatus.co.uk/",
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
export default function Home() {
  return (
    <div className="mx-auto max-w-5xl w-full sm:px-6 lg:px-8">
      <div className="w-full md:w-6/10 mx-auto">
        <MainPageHeroSection />
        <div className="bg-white">
          <div className="m-auto container">
            <section className="relative pt-12 bg-white overflow-hidden">
              <div className="relative z-10 container px-4 mx-auto">
                <h2 className="mb-6 text-4xl font-heading text-center tracking-px-n leading-tight">
                  What You Will Get in Your Free Car Check Report?
                </h2>
                <h3 className="mb-16 text-base font-base text-gray-700 font-heading text-center tracking-px-n leading-tight">
                  With our vehicle check premium report, you will get, a car
                  history check, MOT history, basic vehicle information,
                  outstanding finance, stolen check and salvage history check
                  for free.
                </h3>
                <div className="flex flex-wrap -m-3">
                  <div className="w-full md:w-1/2 p-3">
                    <div className="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                          <div className="flex flex-nowrap mb-4 -m-2">
                            <div className="w-auto p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill="#312E81"
                                  d="M9 5.5a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0M4.5 3a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5H6a.5.5 0 0 0 0-1H5V3.5a.5.5 0 0 0-.5-.5m8.103 6.5H8.276q.476-.45.835-1h2.422l-.91-1.706a1.5 1.5 0 0 0-.661-.64a5.6 5.6 0 0 0 .023-1.058a2.5 2.5 0 0 1 1.52 1.228l1.136 2.128l.134.048h.053v.019l1.51.537A2.5 2.5 0 0 1 16 11.41v.339c0 .71-.422 1.32-1.03 1.595a2 2 0 0 1-3.907.155H6.937a2 2 0 0 1-3.907-.155A1.75 1.75 0 0 1 2 11.75v-1.114q0-.116.01-.23q.472.24.99.388v.956c0 .175.06.336.16.464a2 2 0 0 1 3.777.286h4.126a2 2 0 0 1 3.776-.286a.75.75 0 0 0 .161-.464v-.339c0-.634-.4-1.2-.997-1.413zM4 13a1 1 0 1 0 2 0a1 1 0 0 0-2 0m9-1a1 1 0 1 0 0 2a1 1 0 0 0 0-2"
                                />
                              </svg>
                            </div>
                            <div className="w-auto p-2">
                              <h4 className="text-gray-800 text-2xl leading-normal">
                                Vehicle History Check
                              </h4>
                            </div>
                          </div>
                          <p className="text-base px-4 font-base text-gray-700">
                            We are offering a free{" "}
                            <Link
                              className="text-indigo-800 font-bold"
                              href={"/car-history-check"}
                            >
                              car history check
                            </Link>{" "}
                            service in the UK. It is recommended to check a
                            car&apos;s history before buying a used car.
                            Fortunately, with our free car check report, you
                            will get detailed information about your vehicle.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <div className="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                          <div className="flex flex-nowrap mb-4 -m-2">
                            <div className="w-auto p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#312E81"
                                  d="M3 10V4h2v2.35q1.275-1.6 3.113-2.475T12 3q3.75 0 6.375 2.625T21 12h-2q0-2.925-2.037-4.962T12 5q-1.725 0-3.225.8T6.25 8H9v2zm.05 3H5.1q.3 2.325 1.913 3.938t3.862 1.962l1.2 2.1q-3.45 0-6.05-2.287T3.05 13m10.3 1.75L11 12.4V7h2v4.6l1.4 1.4zM17.975 24l-.3-1.5q-.3-.125-.562-.262t-.538-.338l-1.45.45l-1-1.7l1.15-1q-.05-.325-.05-.65t.05-.65l-1.15-1l1-1.7l1.45.45q.275-.2.538-.337t.562-.263l.3-1.5h2l.3 1.5q.3.125.575.288t.525.362l1.45-.5l1 1.75l-1.15 1q.05.325.05.625t-.05.625l1.15 1l-1 1.7l-1.45-.45q-.275.2-.537.338t-.563.262l-.3 1.5zm1-3q.825 0 1.413-.587T20.975 19t-.587-1.412T18.975 17t-1.412.588T16.975 19t.588 1.413t1.412.587"
                                />
                              </svg>
                            </div>
                            <div className="w-auto p-2">
                              <h4 className="text-gray-800 text-2xl leading-normal">
                                MOT History Check
                              </h4>
                            </div>
                          </div>
                          <p className="text-base mb-3 px-4 font-base text-gray-700">
                            MOT history is another test that you should conduct
                            when buying a used car. A vehicle over 3 years of
                            age is a must to pass the{" "}
                            <Link
                              className="text-indigo-800 font-bold"
                              href={"/mot-check"}
                            >
                              MOT check
                            </Link>{" "}
                            test.
                          </p>
                          <p className="text-base px-4 font-base text-gray-700">
                            You only need to enter your vehicle registration
                            number and click on the &quot;Free Car Check&quot;
                            button to get the vehicle&apos;s MOT history.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <div className="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                          <div className="flex flex-nowrap mb-4 -m-2">
                            <div className="w-auto p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 14 14"
                              >
                                <g
                                  fill="none"
                                  stroke="#312E81"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                >
                                  <path d="M8.604 6.22s-1.312-.582-2.041.147c-.967.966.437 3.5-1.313 4.083c0 0 1.944.097 3.5 0m-.583-2.042H5.25" />
                                  <path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5" />
                                </g>
                              </svg>
                            </div>
                            <div className="w-auto p-2">
                              <h4 className="text-gray-800 text-2xl leading-normal">
                                Outstanding Finance
                              </h4>
                            </div>
                          </div>
                          <p className="text-base mb-3 px-4 font-base text-gray-700">
                            It is very common to buy a car through a finance
                            company and it has an unpaid loan or financial
                            agreement still in place.
                          </p>
                          <p className="text-base px-4 font-base text-gray-700">
                            But when you are paying for a vehicle that has an
                            outstanding finance, you will get in trouble for
                            sure. However, with the help of a free car check,
                            you can avoid these mistakes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <div className="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                          <div className="flex flex-nowrap mb-4 -m-2">
                            <div className="w-auto p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="#312E81"
                                  stroke-width="2"
                                >
                                  <path d="M18 3a3 3 0 0 1 3 3v2.143c0 .334 0 .501-.077.623a.5.5 0 0 1-.157.157C20.644 9 20.477 9 20.143 9H15m3-6a3 3 0 0 0-3 3v3m3-6H7c-1.886 0-2.828 0-3.414.586C3 4.172 3 5.114 3 7v14l3-1l3 1l3-1l3 1V9" />
                                  <path
                                    stroke-linecap="round"
                                    d="M7 7h4m-3 4H7m0 4h3"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div className="w-auto p-2">
                              <h4 className="text-gray-800 text-2xl leading-normal">
                                DVLA Tax and MOT History
                              </h4>
                            </div>
                          </div>
                          <p className="text-base mb-3 px-4 font-base text-gray-700">
                            Enter your vehicle identification number to check if
                            your vehicle has an unpaid Driver and Vehicle
                            Licensing Agency{" "}
                            <Link
                              href={"/dvla-check"}
                              className="text-indigo-800"
                            >
                              (DVLA)
                            </Link>{" "}
                            tax.
                          </p>
                          <p className="text-base px-4 font-base text-gray-700">
                            With our free vehicle enquiry, you can check any
                            vehicle data in no time. You will never regret
                            buying a car with a hidden history and hidden
                            problems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <div className="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                          <div className="flex flex-nowrap mb-4 -m-2">
                            <div className="w-auto p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  fill="#312E81"
                                  d="M12 10s4-.8 4-2.4c0-.8-.8-2.4-.8-3.2s.8-1.6.8-1.6l-.8-.8c-.46.26-1.04.4-1.6.4S12.46 2.25 12 2c-.46.25-1.04.4-1.6.4S9.26 2.26 8.8 2l-.8.8s.8.8.8 1.6S8 6.8 8 7.6c0 1.6 4 2.4 4 2.4m-.57-4.68L12 4l.55 1.32l1.45.12l-1.11.94l.33 1.4L12 7.04l-1.24.74l.33-1.4L10 5.44zM21 6h-4.35c.19.58.35 1.12.35 1.6c0 2.25-3.68 3.16-4.8 3.4h-.4C10.68 10.76 7 9.85 7 7.6c0-.48.16-1.02.35-1.6H3c-.55 0-1 .45-1 1v15h8v-5h4v5h8V7c0-.55-.45-1-1-1M8 20H4v-3h4zm0-5H4v-3h4zm6 0h-4v-3h4zm6 5h-4v-3h4zm0-5h-4v-3h4z"
                                />
                              </svg>
                            </div>
                            <div className="w-auto p-2">
                              <h4 className="text-gray-800 text-2xl leading-normal">
                                Stolen Check History
                              </h4>
                            </div>
                          </div>
                          <p className="text-base mb-3 px-4 font-base text-gray-700">
                            Ensure your peace of mind with our free stolen
                            inquiry service. It verifies that your potential
                            vehicle purchase has not been reported as stolen.
                          </p>
                          <p className="text-base px-4 font-base text-gray-700">
                            Avoid the risk of losing your new car by confirming
                            its legal status before you buy.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <div className="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                          <div className="flex flex-nowrap mb-4 -m-2">
                            <div className="w-auto p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill="#312E81"
                                  d="M9.5 6c-1.32 0-2.496.86-2.875 2.125L5.25 12.719l-1.938-.656l-.624 1.874l1.968.657l-.625 2.125A.972.972 0 0 0 4 17v8c0 .55.45 1 1 1h3l.656-2h5.25l9.938 1.531L24 26h3.031c.242 0 .477-.09.657-.25l.03-.031c.012-.012.024-.02.032-.032a.998.998 0 0 0 .25-.625v-.093a.668.668 0 0 0 0-.125L27.156 19H29v-2h-2.375L24.5 12.656l.875-2.937a1.004 1.004 0 0 0-.344-1.094l-1.937-1.438a1.017 1.017 0 0 0-.5-.187L9.562 6zm0 2l12.625.969l1.125.844l-.781 2.624a.999.999 0 0 0 .062.75l1.5 3.063l-6.125-2.125l-.125-.063h-.125L7.22 13.095l1.31-4.376c.13-.43.524-.719.969-.719zm-2.875 7.063l10.781 1h.063l7.625 2.687l.718 5.031L14.22 22a1.043 1.043 0 0 0-.156 0h-1.157l.438-1l4.312.625L20.25 22L19 20l-7-1l-1.25 3H6v-4.813zM8.5 16a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m12.375 2.75a1.808 1.808 0 1 0 3.406 1.219z"
                                />
                              </svg>
                            </div>
                            <div className="w-auto p-2">
                              <h4 className="text-gray-800 text-2xl leading-normal">
                                Salvage Check
                              </h4>
                            </div>
                          </div>
                          <p className="text-base px-4 font-base text-gray-700">
                            Our complimentary salvage check service helps you
                            identify if a vehicle has previously been declared a
                            total loss by insurers. Protect yourself from
                            unknowingly purchasing a car with a hidden accident
                            history.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <div className="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                          <div className="flex flex-nowrap mb-4 -m-2">
                            <div className="w-auto p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 24 24"
                              >
                                <g
                                  fill="none"
                                  stroke="#312E81"
                                  stroke-width="1.5"
                                >
                                  <circle cx="9" cy="9" r="2" />
                                  <path d="M13 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z" />
                                  <path d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Z" />
                                  <path
                                    stroke-linecap="round"
                                    d="M19 12h-4m4-3h-5m5 6h-3"
                                  />
                                </g>
                              </svg>
                            </div>
                            <div className="w-auto p-2">
                              <h4 className="text-gray-800 text-2xl leading-normal">
                                Owner History
                              </h4>
                            </div>
                          </div>
                          <p className="text-base px-4 font-base text-gray-700">
                            With our free owner history service, you can uncover
                            the number of previous owners and gain insights into
                            the vehicle&apos;s past. Make an informed decision
                            with a detailed ownership record at your fingertips.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 p-3">
                    <div className="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                      <div className="flex flex-col justify-between h-full">
                        <div className="mb-5 block">
                          <div className="flex flex-nowrap mb-4 -m-2">
                            <div className="w-auto p-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="2em"
                                height="2em"
                                viewBox="0 0 32 32"
                              >
                                <path
                                  fill="#312E81"
                                  d="M2 7v18h28V7zm2 2h24v14H4zm2 2v2h10v-2zm14 0v5h6v-5zM6 14v2h7v-2zm2.5 3c-.605 0-1.03.344-1.313.656c-.28.313-.488.66-.656 1.032C6.195 19.434 6 20.238 6 21h2c0-.32.156-1.016.375-1.5c.062-.141.126-.188.188-.281c.073.102.128.167.218.312c.145.234.305.517.5.782s.434.702 1.188.718c.594.012.777-.203.969-.343c.19-.141.323-.274.468-.407c.098-.09.176-.155.25-.218c.027.039.139.104.69.343c.667.292 1.677.594 3.154.594v-2c-1.23 0-1.87-.2-2.344-.406C13.183 18.387 12.824 18 12 18c-.602 0-.754.234-.938.375c-.163.125-.277.258-.406.375c-.059-.094-.086-.141-.156-.25a4.701 4.701 0 0 0-.656-.875C9.554 17.332 9.098 17 8.5 17M20 19v2h6v-2z"
                                />
                              </svg>
                            </div>
                            <div className="w-auto p-2">
                              <h4 className="text-gray-800 text-2xl leading-normal">
                                Number Plate Check
                              </h4>
                            </div>
                          </div>
                          <p className="text-base mb-3 px-4 font-base text-gray-700">
                            It is a wise habit to verify the number plate of a
                            car before you finalise a deal with a car seller. A
                            used vehicle can contain too many hidden things that
                            you should check for sure.
                          </p>
                          <p className="text-base mb-3 px-4 font-base text-gray-700">
                            Use our free number plate check service to verify
                            crucial details about a vehicle, including its
                            registration, make, model, and year of manufacture.
                          </p>
                          <p className="text-base px-4 font-base text-gray-700">
                            Ensure the number plate matches the vehicle&apos;s
                            official records for a secure purchase.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="text-gray-700 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-left w-full mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-800">
                How Our Free Car Check Works?
              </h2>
              <p className="lg:w-12/12 py-3 leading-relaxed text-base text-gray-700">
                To get started with our comprehensive vehicle check service,
                simply enter your car registration number in the designated
                field at the top of our webpage. Once you submit the
                registration number, our system will instantly access detailed
                information about your car, sourced directly from the DVLA.
              </p>
              <p className="lg:w-12/12 py-3 leading-relaxed text-base text-gray-700">
                With a database of over 40 million records, we offer
                unparalleled coverage across the UK. Our service features
                detailed mileage analysis checks, carefully scrutinising various
                records to guarantee precise and trustworthy information.
              </p>
              <p className="lg:w-12/12 py-3 leading-relaxed text-base text-gray-700">
                This thorough approach helps you uncover any discrepancies,
                offering you peace of mind and confidence in the vehicle’s
                history and condition. Whether you&apos;re verifying ownership
                history, checking for outstanding finance, or ensuring there are
                no safety recalls or salvage records, our vehicle check service
                provides all the crucial details you need to make informed
                decisions.
              </p>
              <h3 className="text-2xl font-medium title-font mb-4 text-gray-800">
                DIY Car Checks
              </h3>
              <p className="lg:w-12/12 pt-3 leading-relaxed text-base text-gray-700">
                DIY Car Checks Besides the registration and MOT expiry dates,
                there are some vehicle checks that you can perform at home. Here
                are some examples:
              </p>
            </div>
            <div className="flex flex-wrap -my-10">
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 bg-white border p-4 rounded-lg">
                  <span className="text-3xl mr-2">✅</span>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Tire Pressure and Tread Depth
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 bg-white border p-4 rounded-lg">
                  <span className="text-3xl mr-2">✅</span>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Oil Level and Quality
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 bg-white border p-4 rounded-lg">
                  <span className="text-3xl mr-2">✅</span>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Brake Fluid
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 bg-white border p-4 rounded-lg">
                  <span className="text-3xl mr-2">✅</span>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Coolant Level
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 bg-white border p-4 rounded-lg">
                  <span className="text-3xl mr-2">✅</span>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Lights and Indicators
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 bg-white border p-4 rounded-lg">
                  <span className="text-3xl mr-2">✅</span>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Windshield Wipers and Washer Fluid
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 bg-white border p-4 rounded-lg">
                  <span className="text-3xl mr-2">✅</span>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Battery Health
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 bg-white border p-4 rounded-lg">
                  <span className="text-3xl mr-2">✅</span>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Air Filter
                    </h2>
                  </div>
                </div>
              </div>
              <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 bg-white border p-4 rounded-lg">
                  <span className="text-3xl mr-2">✅</span>
                  <div className="flex-grow">
                    <h2 className="text-gray-900 title-font font-medium">
                      Exhaust System
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white">
          <div className="m-auto container">
            <MainPageFaqs />
          </div>
        </div>
      </div>
    </div>
  );
}
