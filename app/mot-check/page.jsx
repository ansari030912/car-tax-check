/* eslint-disable @next/next/no-img-element */
import MainPageHeroSection from "../components/MainPageHeroSection";
import MotPageFaqs from "../components/MotFaqs";

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl w-full px-4 sm:px-6 lg:px-8">
      <div className="w-full md:w-6/10 mx-auto">
        <MainPageHeroSection />
        <div className="bg-white">
          <div className="m-auto container">
            <section className="relative pt-12 bg-white overflow-hidden">
              <div className="relative z-10 container px-4 mx-auto">
                <h3 className="mb-16 text-base font-base text-gray-700 font-heading text-left tracking-px-n leading-tight">
                  We facilitate car owners with a free MOT check service that
                  includes an MOT test, valid MOT certificate, MOT expiry date
                  and advisory notes:
                </h3>
              </div>
            </section>
          </div>
        </div>
        <div className="m-auto container">
          <section className="relative -mt-10 px-4 bg-white overflow-hidden">
            <h2 class="mb-6 font-heading font-bold text-2xl text-gray-900">
              How to Check the MOT History?
            </h2>
            <p>
              If you are new to our website then you need to read this
              beginner&apos;s step-by-step guide to know how to check the MOT
              status of your vehicle.
            </p>
            <ol className="list-decimal m-4 px-6">
              <li>Open our MOT check page.</li>
              <li>
                You need to enter your vehicle registration number (number
                plate) inside the check box.
              </li>
              <li>Now click on the &quot;MOT Check&quot; button.</li>
              <li>
                A detailed report will open where you can check your current mot
                certificate, details of all the previous MOT tests, MOT history
                and expiration date.
              </li>
            </ol>
          </section>

          <section className="px-4">
            <h2 class="mb-6 font-heading font-bold text-2xl text-gray-900">What You Will Get in Our Free Mot Check Service?</h2>
            <p>
              You can utilise our free MOT check service to get the following
              details of your vehicle:
            </p>

            <h3 class="mb-3 mt-3 font-heading font-semibold text-xl text-gray-800">MOT History</h3>
            <p>
              Get a comprehensive report of your car. The government of the UK
              has implemented a rule to perform a MOT test on the third
              anniversary of your car purchase date. Using our tool, you can
              check when is your next MOT due and what is the status of your
              current MOT.
            </p>
            <h3 class="mb-3 mt-3 font-heading font-semibold text-xl text-gray-800">MOT Expiry Date</h3>
            <p>
              Stay informed about your MOT expiry date to ensure you never miss
              a test. Our service allows you to quickly find out when your
              present MOT certificate expires, helping you plan ahead and avoid
              any penalties for driving without a valid MOT.
            </p>
            <h3 class="mb-3 mt-3 font-heading font-semibold text-xl text-gray-800">MOT Test Results</h3>
            <p>
              Access detailed results from each of your car&apos;s MOT tests.
              This includes whether your vehicle passed or failed, and the
              reasons for any failures. Having this information at your
              fingertips allows you to address any issues promptly and maintain
              your vehicle in top condition.
            </p>
            <h3 class="mb-3 mt-3 font-heading font-semibold text-xl text-gray-800">Current MOT Status</h3>
            <p>
              Check the current status of your MOT certificate to ensure your
              vehicle is legally allowed on the road. This feature provides
              peace of mind by confirming whether your car has a valid MOT
              certificate or if action is needed.
            </p>
            <h3 class="mb-3 mt-3 font-heading font-semibold text-xl text-gray-800">Previous Advisories and Failures</h3>
            <p>
              Our service lists all advisories and failures recorded in past MOT
              tests. This information is crucial for understanding potential
              issues that may need attention and ensuring your vehicle remains
              safe and roadworthy.
            </p>
            <h3 class="mb-3 mt-3 font-heading font-semibold text-xl text-gray-800">Recorded Mileages at Each MOT Test</h3>
            <p>
              Track the mileage recorded at each MOT test. This feature helps
              you monitor your vehicle&apos;s usage over time, identify any
              discrepancies, and ensure the accuracy of your car&apos;s odometer
              readings.
            </p>
          </section>
        </div>
        <div className="bg-white mt-8">
          <div className="m-auto container">
            <MotPageFaqs />
          </div>
        </div>
      </div>
    </div>
  );
}
