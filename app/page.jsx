/* eslint-disable @next/next/no-img-element */
import MainPageHeroSection from "./components/MainPageHeroSection";
import NavBar from "./components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <MainPageHeroSection />
      <div className="bg-white">
        <div className="m-auto container">
          {/* <div className="flex justify-center">
            <img
              class="transform hover:-translate-y-16 transition ease-in-out duration-1000"
              src="/3.png"
              alt=""
            />
          </div> */}

          {/*  */}

          <section class="relative pt-24 pb-32 bg-white overflow-hidden">
            {/* <img
              class="absolute top-0 left-0"
              src="flaro-assets/images/testimonials/gradient.svg"
              alt=""
            />
            <img
              class="absolute bottom-0 right-0"
              src="flaro-assets/images/testimonials/gradient2.svg"
              alt=""
            /> */}
            <div class="relative z-10 container px-4 mx-auto">
              <h2 class="mb-6 text-6xl font-bold font-heading text-center tracking-px-n leading-tight">
                What You Will Get in Your Free Car Check Report?
              </h2>
              <h3 class="mb-16 text-xl font-semibold text-gray-600 font-heading text-center tracking-px-n leading-tight">
                With our vehicle check premium report, you will get, a car
                history check, MOT history, basic vehicle information,
                outstanding finance, stolen check and salvage history check for
                free.
              </h3>
              <div class="flex flex-wrap -m-3">
                <div class="w-full md:w-1/2 p-3">
                  <div class="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                    <div class="flex flex-col justify-between h-full">
                      <div class="mb-5 block">
                        <div class="flex flex-wrap mb-4 -m-2">
                          <div class="w-auto p-2">
                            <img src="/3.png" alt="" height={80} width={80} />
                          </div>
                          <div class="w-auto p-2">
                            <h4 class="font-bold text-gray-700 text-3xl mt-4 leading-normal">
                              Vehicle History Check
                            </h4>
                          </div>
                        </div>
                        <p class="text-2xl px-4 font-medium text-gray-600">
                          We are offering a free car history check service in
                          the UK. It is recommended to check a car&apos;s
                          history before buying a used car. Fortunately, with
                          our free car check report, you will get detailed
                          information about your vehicle.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 p-3">
                  <div class="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                    <div class="flex flex-col justify-between h-full">
                      <div class="mb-5 block">
                        <div class="flex flex-wrap mb-4 -m-2">
                          <div class="w-auto p-2">
                            <img src="/3.png" alt="" height={80} width={80} />
                          </div>
                          <div class="w-auto p-2">
                            <h4 class="font-bold text-gray-700 text-3xl mt-4 leading-normal">
                              MOT History Check
                            </h4>
                          </div>
                        </div>
                        <p class="text-2xl mb-3 px-4 font-medium text-gray-600">
                          MOT history is another test that you should conduct
                          when buying a used car. A vehicle over 3 years of age
                          is a must to pass the MOT check test.
                        </p>
                        <p class="text-2xl px-4 font-medium text-gray-600">
                          You only need to enter your vehicle registration
                          number and click on the &quot;Free Car Check&quot;
                          button to get the vehicle&apos;s MOT history.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 p-3">
                  <div class="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                    <div class="flex flex-col justify-between h-full">
                      <div class="mb-5 block">
                        <div class="flex flex-wrap mb-4 -m-2">
                          <div class="w-auto p-2">
                            <img src="/3.png" alt="" height={80} width={80} />
                          </div>
                          <div class="w-auto p-2">
                            <h4 class="font-bold text-gray-700 text-3xl mt-4 leading-normal">
                              Outstanding Finance
                            </h4>
                          </div>
                        </div>
                        <p class="text-2xl mb-3 px-4 font-medium text-gray-600">
                          It is very common to buy a car through a finance
                          company and it has an unpaid loan or financial
                          agreement still in place.
                        </p>
                        <p class="text-2xl px-4 font-medium text-gray-600">
                          But when you are paying for a vehicle that has an
                          outstanding finance, you will get in trouble for sure.
                          However, with the help of a free car check, you can
                          avoid these mistakes.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 p-3">
                  <div class="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                    <div class="flex flex-col justify-between h-full">
                      <div class="mb-5 block">
                        <div class="flex flex-wrap mb-4 -m-2">
                          <div class="w-auto p-2">
                            <img src="/3.png" alt="" height={80} width={80} />
                          </div>
                          <div class="w-auto p-2">
                            <h4 class="font-bold text-gray-700 text-3xl mt-4 leading-normal">
                              DVLA Tax and MOT History
                            </h4>
                          </div>
                        </div>
                        <p class="text-2xl mb-3 px-4 font-medium text-gray-600">
                          Enter your vehicle identification number to check if
                          your vehicle has an unpaid Driver and Vehicle
                          Licensing Agency (DVLA) tax.
                        </p>
                        <p class="text-2xl px-4 font-medium text-gray-600">
                          With our free vehicle enquiry, you can check any
                          vehicle data in no time. You will never regret buying
                          a car with a hidden history and hidden problems.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 p-3">
                  <div class="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                    <div class="flex flex-col justify-between h-full">
                      <div class="mb-5 block">
                        <div class="flex flex-wrap mb-4 -m-2">
                          <div class="w-auto p-2">
                            <img src="/3.png" alt="" height={80} width={80} />
                          </div>
                          <div class="w-auto p-2">
                            <h4 class="font-bold text-gray-700 text-3xl mt-4 leading-normal">
                              Stolen Check History
                            </h4>
                          </div>
                        </div>
                        <p class="text-2xl mb-3 px-4 font-medium text-gray-600">
                          Ensure your peace of mind with our free stolen inquiry
                          service. It verifies that your potential vehicle
                          purchase has not been reported as stolen.
                        </p>
                        <p class="text-2xl px-4 font-medium text-gray-600">
                          Avoid the risk of losing your new car by confirming
                          its legal status before you buy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 p-3">
                  <div class="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                    <div class="flex flex-col justify-between h-full">
                      <div class="mb-5 block">
                        <div class="flex flex-wrap mb-4 -m-2">
                          <div class="w-auto p-2">
                            <img src="/3.png" alt="" height={80} width={80} />
                          </div>
                          <div class="w-auto p-2">
                            <h4 class="font-bold text-gray-700 text-3xl mt-4 leading-normal">
                              Salvage Check
                            </h4>
                          </div>
                        </div>
                        <p class="text-2xl px-4 font-medium text-gray-600">
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
                <div class="w-full md:w-1/2 p-3">
                  <div class="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                    <div class="flex flex-col justify-between h-full">
                      <div class="mb-5 block">
                        <div class="flex flex-wrap mb-4 -m-2">
                          <div class="w-auto p-2">
                            <img src="/3.png" alt="" height={80} width={80} />
                          </div>
                          <div class="w-auto p-2">
                            <h4 class="font-bold text-gray-700 text-3xl mt-4 leading-normal">
                              Owner History
                            </h4>
                          </div>
                        </div>
                        <p class="text-2xl px-4 font-medium text-gray-600">
                          With our free owner history service, you can uncover
                          the number of previous owners and gain insights into
                          the vehicle&apos;s past. Make an informed decision
                          with a detailed ownership record at your fingertips.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-1/2 p-3">
                  <div class="p-6 h-full bg-gray-50 bg-opacity-60 border rounded-4xl">
                    <div class="flex flex-col justify-between h-full">
                      <div class="mb-5 block">
                        <div class="flex flex-wrap mb-4 -m-2">
                          <div class="w-auto p-2">
                            <img src="/3.png" alt="" height={80} width={80} />
                          </div>
                          <div class="w-auto p-2">
                            <h4 class="font-bold text-gray-700 text-3xl mt-4 leading-normal">
                              Number Plate Check
                            </h4>
                          </div>
                        </div>
                        <p class="text-2xl mb-3 px-4 font-medium text-gray-600">
                          It is a wise habit to verify the number plate of a car
                          before you finalise a deal with a car seller. A used
                          vehicle can contain too many hidden things that you
                          should check for sure.
                        </p>
                        <p class="text-2xl mb-3 px-4 font-medium text-gray-600">
                          Use our free number plate check service to verify
                          crucial details about a vehicle, including its
                          registration, make, model, and year of manufacture.
                        </p>
                        <p class="text-2xl px-4 font-medium text-gray-600">
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
          {/*  */}
          {/* h2 */}
          <h2 className="text-4xl font-bold">
            What You Will Get in Your Free Car Check Report?
          </h2>
          <h3>
            With our vehicle check premium report, you will get, a car history
            check, MOT history, basic vehicle information, outstanding finance,
            stolen check and salvage history check for free.
          </h3>
          <h4>Vehicle History Check</h4>
          <p>
            We are offering a free car history check service in the UK. It is
            recommended to check a car&apos;s history before buying a used car.
            Fortunately, with our free car check report, you will get detailed
            information about your vehicle.
          </p>
          <h4>MOT History Check</h4>
          <div className="flex justify-center">
            <img
              class="transform hover:-translate-y-16 transition ease-in-out duration-1000"
              src="/3.png"
              alt=""
            />
          </div>
          <p>
            MOT history is another test that you should conduct when buying a
            used car. A vehicle over 3 years of age is a must to pass the MOT
            check test.
          </p>
          <p>
            You only need to enter your vehicle registration number and click on
            the &quot;Free Car Check&quot; button to get the vehicle&apos;s MOT
            history.
          </p>
          <h4>Outstanding Finance</h4>
          <div className="flex justify-center">
            <img
              class="transform hover:-translate-y-16 transition ease-in-out duration-1000"
              src="/3.png"
              alt=""
            />
          </div>
          <p>
            It is very common to buy a car through a finance company and it has
            an unpaid loan or financial agreement still in place.
          </p>
          <p>
            But when you are paying for a vehicle that has an outstanding
            finance, you will get in trouble for sure. However, with the help of
            a free car check, you can avoid these mistakes.
          </p>
          <h4>DVLA Tax and MOT History</h4>
          <div className="flex justify-center">
            <img
              class="transform hover:-translate-y-16 transition ease-in-out duration-1000"
              src="/3.png"
              alt=""
            />
          </div>
          <p>
            Enter your vehicle identification number to check if your vehicle
            has an unpaid Driver and Vehicle Licensing Agency (DVLA) tax.
          </p>
          <p>
            With our free vehicle enquiry, you can check any vehicle data in no
            time. You will never regret buying a car with a hidden history and
            hidden problems.
          </p>
          <h4>Stolen Check History</h4>
          <div className="flex justify-center">
            <img
              class="transform hover:-translate-y-16 transition ease-in-out duration-1000"
              src="/3.png"
              alt=""
            />
          </div>
          <p>
            Ensure your peace of mind with our free stolen inquiry service. It
            verifies that your potential vehicle purchase has not been reported
            as stolen.
          </p>
          <p>
            Avoid the risk of losing your new car by confirming its legal status
            before you buy.
          </p>
          <h4>Salvage Check</h4>
          <div className="flex justify-center">
            <img
              class="transform hover:-translate-y-16 transition ease-in-out duration-1000"
              src="/3.png"
              alt=""
            />
          </div>
          <p>
            Our complimentary salvage check service helps you identify if a
            vehicle has previously been declared a total loss by insurers.
            Protect yourself from unknowingly purchasing a car with a hidden
            accident history.
          </p>
          <h4>Owner History</h4>
          <div className="flex justify-center">
            <img
              class="transform hover:-translate-y-16 transition ease-in-out duration-1000"
              src="/3.png"
              alt=""
            />
          </div>
          <p>
            With our free owner history service, you can uncover the number of
            previous owners and gain insights into the vehicle&apos;s past. Make
            an informed decision with a detailed ownership record at your
            fingertips.
          </p>
          <h4>Number Plate Check</h4>
          <div className="flex justify-center">
            <img
              class="transform hover:-translate-y-16 transition ease-in-out duration-1000"
              src="/3.png"
              alt=""
            />
          </div>
          <p>
            It is a wise habit to verify the number plate of a car before you
            finalise a deal with a car seller. A used vehicle can contain too
            many hidden things that you should check for sure.
          </p>
          <p>
            Use our free number plate check service to verify crucial details
            about a vehicle, including its registration, make, model, and year
            of manufacture.
          </p>
          <p>
            Ensure the number plate matches the vehicle&apos;s official records
            for a secure purchase.
          </p>
          {/* h2 */}
          <h2 className="text-4xl font-bold">How Our Free Car Check Works?</h2>
          <p>
            To get started with our comprehensive vehicle check service, simply
            enter your car registration number in the designated field at the
            top of our webpage.
          </p>
          <p>
            Once you submit the registration number, our system will instantly
            access detailed information about your car, sourced directly from
            the DVLA.
          </p>
          <p>
            With a database of over 40 million records, we offer unparalleled
            coverage across the UK. Our service features detailed mileage
            analysis checks, carefully scrutinising various records to guarantee
            precise and trustworthy information.
          </p>
          <p>
            This thorough approach helps you uncover any discrepancies, offering
            you peace of mind and confidence in the vehicle’s history and
            condition.
          </p>
          <p>
            Whether you&apos;re verifying ownership history, checking for
            outstanding finance, or ensuring there are no safety recalls or
            salvage records, our vehicle check service provides all the crucial
            details you need to make informed decisions.
          </p>
          <strong>DIY Car Checks</strong>
          <p>
            Besides the registration and MOT expiry dates, there are some
            vehicle checks that you can perform at home. Here are some examples:
          </p>
          <ol>
            <li>Tire Pressure and Tread Depth</li>
            <li>Oil Level and Quality</li>
            <li>Brake Fluid</li>
            <li>Coolant Level</li>
            <li>Lights and Indicators</li>
            <li>Windshield Wipers and Washer Fluid</li>
            <li>Battery Health</li>
            <li>Air Filter</li>
            <li>Exhaust System</li>
          </ol>
          {/* h2 */}
          <h2 className="text-4xl font-bold">F.A.Q</h2>

          <h3>How to use a free car check?</h3>
          <p>
            You only need to provide your UK-registered vehicle number plate and
            we will show you a comprehensive report about your car history.
          </p>
          <h3>How to check MOT history of a car?</h3>
          <p>
            We are offering a free MOT check service to all our visitors where
            they can check MOT expiry date, mileage readings, advisory notices
            and failure reasons in a detailed free car check report.
          </p>
          <h3>When is my vehicle tax due?</h3>
          <p>
            To know when your vehicle tax is due you need to enter your
            registration plate number and check the next due date of your tax
            and MOT expiry dates.
          </p>
          <h3>Why should I use a car history check?</h3>
          <p>
            It is very important to perform a car history check before you buy
            any used vehicle. This car check reveals the hidden problems and
            critical issues like outstanding finance, stolen reports, write-off
            status and previous owner details. Also, with the help of a salvage
            history check, the car buyer can check all the car damage photos.
          </p>
          <h3>Why does my car details are incorrect?</h3>
          <p>
            First of all, please check if you are entering valid information.
            However, after changing your car details, it can take up to 5 to 6
            days to show the latest information in the DVLA record. You need to
            wait for 5 to 6 days and check your tax and MOT status again.
          </p>
          <h3>Do you offer a free car check?</h3>
          <p>
            Yes, we do offer all types of car history checks for free. You do
            not need to pay any penny to get your vehicle history check report.
          </p>
          <h3>
            How can I utilise a free car check to discover any safety recalls
            associated with a vehicle?
          </h3>
          <p>
            A free check will reveal all the safety recalls that are associated
            with your car. It could be faulty airbags, braking system
            malfunctions, written off or engine defects. You can get an instant
            report in a few seconds and make your financial protection sure.
          </p>
          <h3>What is included in a free car check service?</h3>
          <p>Our free car check service offers a full report that contains:</p>
          <ul>
            <li>Car checks</li>
            <li>Body style</li>
            <li>Fuel type</li>
            <li>Road tax</li>
            <li>Repair costs</li>
            <li>Valid MOT</li>
            <li>Valid insurance</li>
            <li>Vehicle tax</li>
            <li>Vehicle&apos;s history</li>
            <li>AA car check</li>
            <li>RAC Car Passport</li>
            <li>Licence plate check</li>
          </ul>
          <h3>
            How authentic is the free information provided by a free car check
            service?
          </h3>
          <p>
            A free car check service is up to 95% authentic as it comes from
            government databases like DVLA. However, some information can be
            old. You can get reliable basic details of a car with this free car
            history check service.
          </p>
          <h3>How to do a DVLA car history check?</h3>
          <p>
            Users are advised to enter their car registration number and get a
            free MOT check and vehicle history report.
          </p>
          <h3>Is Car Analytics vehicle check service free?</h3>
          <p>
            Yes, the Car Analytics vehicle check service is free. However, the
            free car check service provides only basic details while paid
            services provide a comprehensive report. The prices are between
            £1.99 for the basic check and £4.99 for the full report.
          </p>
          <h3>Is it safe to provide my vehicle information online?</h3>
          <p>
            You can trust our platform and we give you a data guarantee that is
            about we will never share or use your personal data. You can enter
            your engine number or vehicle registration number without any fear.
          </p>
        </div>
      </div>
    </>
  );
}
