/* eslint-disable @next/next/no-img-element */
import CheckHistoryFaqs from "../components/CheckHistoryFaqs";
import CheckHistoryHeroSection from "../components/CheckHistoryHeroSection";
import MotPageFaqs from "../components/MotFaqs";

export const metadata = {
  title: "MOT Check: Get MOT History Status of Your Vehicle Instantly",
  description:
    "Enter your registration number to get MOT check and history status of your vehicle. Get MOT expiry date, advisory notes, and failures.",
  alternates: {
    canonical: "https://carcheckstatus.co.uk/mot-check",
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

export default function HistoryCheck() {
  return (
    <div className="mx-auto max-w-5xl w-full sm:px-6 lg:px-8">
      <div className="w-full md:w-6/10 mx-auto">
        <CheckHistoryHeroSection />
        <br />
        <br />
        <br />
        <div className="m-auto container">
          <section className="relative -mt-10 px-4 bg-white overflow-hidden">
            <h2 class="mb-6 font-heading font-bold text-2xl text-gray-900">
              What We Are Offering in a Free Car Check Report?
            </h2>
            <p className="mb-5">
              Our free vehicle check report consists of the following details:
            </p>
            <div class="max-w-7xl mx-auto mb-6">
              <div class="max-w-lg mx-auto text-center"></div>
              <div class="flex flex-wrap -m-4">
                <div class="w-full md:w-1/3 p-4">
                  <div class="flex flex-col justify-between px-4 pt-3 pb-1 h-full text-center bg-gray-100 border border-gray-100 rounded-3xl">
                    <div class="flex-initial mb-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3em"
                        height="3em"
                        class="mb-6 mx-auto mt-3"
                        viewBox="0 0 50 50"
                      >
                        <path
                          fill="#232F68"
                          d="M21.434 7.689L19 11h-5.684c.701 2 2.996 3.886 6.201 3.26c.95-.064 4.155-.573 5.483-.26c1.768.424 1.031.426 4.201 2.97L45 30c.968.855 2.206.505 3.063-.461c.857-.968.905-2.684-.063-3.539L28 10c-1.252-1.005-1.568-2.397-2-4c-.84-2.755-3.929-4.965-6.961-4.965C16.596 1.035 13.967 3.148 13 5h6zM35.154 32l-6.182-10.73c-.244-.445-.861-1.27-1.368-1.27H10.396c-.507 0-1.124.825-1.369 1.27L3 32h-.154C1.831 32 1 32.369 1 33.385v9.23C1 43.631 1.831 44 2.846 44H5v3.23C5 48.754 5.938 50 7.461 50h.923C9.908 50 11 48.754 11 47.23V44h16v3.23c0 1.523 1.092 2.77 2.615 2.77h.923C32.062 50 33 48.754 33 47.23V44h2.154C36.169 44 37 43.631 37 42.615v-9.23C37 32.369 36.169 32 35.154 32M6.077 38.923a2.308 2.308 0 1 1 0-4.615a2.308 2.308 0 0 1 0 4.615M7.923 32l3.741-7.828C11.891 23.718 12.493 23 13 23h12c.507 0 1.108.718 1.336 1.172L30.077 32zm24 6.923a2.308 2.308 0 1 1 0-4.616a2.308 2.308 0 0 1 0 4.616"
                        />
                      </svg>
                      <h3 class="font-heading text-gray-900 font-bold text-xl">
                        Vehicle Check
                      </h3>
                      <p class="text-base pt-4 text-gray-700 font-bold">
                        <ol className="text-sm">
                          <li style={{ paddingTop: "2px" }}>
                            Car stolen check
                          </li>
                          <li style={{ paddingTop: "2px" }}>
                            Written-off check
                          </li>
                          <li style={{ paddingTop: "2px" }}>
                            Outstanding vehicle finance check
                          </li>
                          <li style={{ paddingTop: "2px" }}>
                            MOT history check
                          </li>
                          <li style={{ paddingTop: "2px" }}>Mileage check</li>
                          <li style={{ paddingTop: "2px" }}>VIN Check</li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 p-4">
                  <div class="flex flex-col justify-between px-4 pt-3 pb-1 h-full text-center bg-gray-100 border border-gray-100 rounded-3xl">
                    <div class="flex-initial mb-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3em"
                        height="3em"
                        viewBox="0 0 14 14"
                        class="mb-6 mx-auto mt-3"
                      >
                        <g
                          fill="none"
                          stroke="#232F68"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M8.604 6.22s-1.312-.582-2.041.147c-.967.966.437 3.5-1.313 4.083c0 0 1.944.097 3.5 0m-.583-2.042H5.25" />
                          <path d="M7 13.5c3.5 0 6-1.238 6-3.994c0-2.995-1.5-4.992-4.5-6.49l1.18-1.518A.658.658 0 0 0 9.12.5H4.88a.66.66 0 0 0-.56.998L5.5 3.026C2.5 4.534 1 6.531 1 9.526C1 12.262 3.5 13.5 7 13.5" />
                        </g>
                      </svg>
                      <h3 class="font-heading text-gray-900 font-bold text-xl">
                        £30,000 Data Guarantee
                      </h3>
                      <p class="text-base text-gray-700 font-bold pt-4">
                        <ol className="text-sm">
                          <li style={{ paddingTop: "2px" }}>
                            Get £30,000 Data Guarantee.
                          </li>
                          <li style={{ paddingTop: "2px" }}>Peace of mind.</li>
                          <li style={{ paddingTop: "2px" }}>
                            Safe and secure check
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/3 p-4">
                  <div class="flex flex-col justify-between px-4 pt-3 pb-1 h-full text-center bg-gray-100 border border-gray-100 rounded-3xl">
                    <div class="flex-initial mb-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="3em"
                        height="3em"
                        viewBox="0 0 24 24"
                        class="mb-6 mx-auto mt-3"
                      >
                        <path
                          fill="#232F68"
                          d="M19 15h-2v-2h2m1 7v2h-4v-2h1v-2h-1v-2h3v4m-.08-15a1.5 1.5 0 0 0-1.42-1h-11a1.5 1.5 0 0 0-1.42 1L3 11v8a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1h5a7 7 0 0 1 7-7a6.84 6.84 0 0 1 3 .68V11M6.5 15A1.5 1.5 0 1 1 8 13.5A1.5 1.5 0 0 1 6.5 15M5 10l1.5-4.5h11L19 10Z"
                        />
                      </svg>
                      <h3 class="font-heading text-gray-900 font-bold text-xl">
                        Basic Vehicle Information
                      </h3>
                      <p class="text-base text-gray-700 font-bold pt-4">
                        <ol className="text-sm">
                          <li style={{ paddingTop: "2px" }}>Hidden history.</li>
                          <li style={{ paddingTop: "2px" }}>Car details.</li>
                          <li style={{ paddingTop: "2px" }}>
                            Complete vehicle data.
                          </li>
                        </ol>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="px-4">
            <h2 class="mb-6 font-heading font-bold text-2xl text-gray-900">
              What is a Car History Check?
            </h2>
            <p>
              A vehicle history check is a process where a user gets information
              about the vehicle. This report helps you to make an informed
              decision when you are going to buy a new vehicle.
            </p>
            <ul className="list-disc pl-5 mx-4 py-4">
              <li style={{ paddingTop: "4px" }}>
                <strong>Vehicle Stolen Check:</strong> This check determines
                whether the vehicle in question has been reported as stolen. It
                involves cross-referencing the vehicle&apos;s registration
                number with the police national computer.
              </li>
              <li style={{ paddingTop: "4px" }}>
                <strong>Written-Off Check:</strong> A written-off check reveals
                if the vehicle has been declared a total loss by an insurance
                company due to damage from an accident, flood, fire, or other
                incidents.
              </li>
              <li style={{ paddingTop: "4px" }}>
                <strong>Outstanding Finance:</strong> This check indicates
                whether there is any outstanding finance on the vehicle. If the
                previous owner has not fully paid off their loan, the lender
                still has a legal claim to the car.
              </li>
              <li style={{ paddingTop: "4px" }}>
                <strong>Mileage Verification:</strong> Mileage verification
                ensures the odometer reading is accurate and hasn&apos;t any mileage
                discrepancies.
              </li>
              <li style={{ paddingTop: "4px" }}>
                <strong>Previous Owners:</strong> This check provides a record
                of the number of previous owners and the duration each owned the
                vehicle.
              </li>
              <li style={{ paddingTop: "4px" }}>
                <strong>MOT History:</strong> A car history check includes a
                review of the car&apos;s MOT history, highlighting any failures,
                advisories, or repairs noted during the tests.
              </li>
            </ul>
            <h2 class="font-heading font-bold text-2xl text-gray-900">
              How to Use Free Car Check Tool?
            </h2>
            <ul className="list-disc pl-5 mx-4 py-4">
              <li style={{ paddingTop: "4px" }}>
                You will need to enter any vehicle identification number for a
                total Car Check report. Using this free car history check tool
                you can get the vehicle details like the vehicle&apos;s MOT
                history, outstanding finance, details of previous owners, HPI
                check, and many other details.
              </li>
              <li style={{ paddingTop: "4px" }}>
                Visit our website and enter your registration plate number
                inside the box.
              </li>
              <li style={{ paddingTop: "4px" }}>
                Now wait for a comprehensive report to show up on your screen.
              </li>
              <li style={{ paddingTop: "4px" }}>
                Check the car&apos;s history in this premium report.
              </li>
            </ul>
            <h2 class="font-heading font-bold text-2xl text-gray-900">
              Why Choose Us?
            </h2>
            <ul className="list-disc pl-5 mx-4 py-4">
              <li style={{ paddingTop: "4px" }}>
                <strong>£30,000 Data Guarantee:</strong> We back our data with a
                substantial guarantee, giving you confidence in the accuracy and
                reliability of our reports.
              </li>
              <li style={{ paddingTop: "4px" }}>
                <strong>Free Information:</strong> Access essential details
                about any vehicle at no cost. Our free car check report includes
                stolen status, outstanding finance, write-offs, MOT check,
                mileage verification, and more.
              </li>
              <li style={{ paddingTop: "4px" }}>
                <strong>Trusted Partners:</strong> We source data from reputable
                and trustworthy partners, including finance houses, DVLA
                records, police databases, and insurance companies, ensuring you
                get the most accurate and up-to-date information.
              </li>
              <li style={{ paddingTop: "4px" }}>
                <strong>Total Peace of Mind:</strong> Our thorough checks and
                extensive data give you peace of mind, knowing you’re making an
                informed decision. Avoid potential pitfalls and surprises when
                buying a used car with our reliable service.
              </li>
            </ul>
          </section>
        </div>
        <div className="bg-white mt-8">
          <div className="m-auto container">
            <CheckHistoryFaqs />
          </div>
        </div>
      </div>
    </div>
  );
}
