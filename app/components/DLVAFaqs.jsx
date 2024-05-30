import React from "react";

const DLVAFaqs = () => {
  return (
    <section className="pb-12">
      <div className="px-4">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl text-gray-800">FAQ</h2>
        </div>
        <div className="w-full">
          {/* Existing FAQs */}
          <div className="pt-6 pr-4 border-t-2 border-indigo-900 mb-14">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              What is DVLA?
            </h3>
            <p className="text-gray-800 opacity-80 font-base text-base">
              The Driver and Vehicle Licensing Agency (DVLA) is an executive
              agency of the UK Department for Transport (DfT). It is responsible
              for maintaining a database of drivers and vehicle data in Great
              Britain. This database includes crucial information such as the
              issuance and renewal of driving licenses, the registration and
              taxation of vehicles, and personal details and driving records of
              the owner.
            </p>
          </div>
          {/* New FAQs */}
          <div className="pt-6 pr-4 border-t-2 border-indigo-900 mb-14">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              What&apos;s included in the DVLA check?
            </h3>
            <p className="text-gray-800 opacity-80 font-base text-base">
              A DVLA check contains the following vehicle check services:
              <ul className="text-gray-800 opacity-80 font-base text-base list-disc py-4 mx-4 pl-5">
                <li>MOT status</li>
                <li>Tax status</li>
                <li>Fuel</li>
                <li>Colour</li>
                <li>Registration year and date</li>
                <li>Make and model of vehicle</li>
                <li>Endorsements and penalty points</li>
                <li>Vehicle registration details</li>
                <li>SORN (Statutory Off-Road Notification)</li>
              </ul>
            </p>
          </div>
          <div className="pt-6 pr-4 border-t-2 border-indigo-900 mb-14">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              How to check the owner of the vehicle?
            </h3>
            <p className="text-gray-800 opacity-80 font-base text-base">
              To check who owns a vehicle, you can contact the DVLA and request
              vehicle ownership information using a V888 form. This process
              requires a reasonable cause, such as a legal dispute or accident
              investigation.
            </p>
          </div>
          <div className="pt-6 pr-4 border-t-2 border-indigo-900 mb-14">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              How to check my driving licence information?
            </h3>
            <p className="text-gray-800 opacity-80 font-base text-base">
              To check your driving licence information online in the UK, visit
              the DVLA&apos;s website. You&apos;ll need your driving licence
              number, National Insurance number, and the postcode on your
              licence. Now you can request information by email or website.
              <br />
              You can use this service to share information about any points or
              disqualifications with a car hire company or employer. Also, you
              can request a check code and share this info easily.
            </p>
          </div>
          <div className="pt-6 pr-4 border-t-2 border-indigo-900 mb-14">
            <h3 className="text-xl font-medium text-gray-800 mb-4">
              How do I check how many owners a vehicle has had in the past?
            </h3>
            <p className="text-gray-800 opacity-80 font-base text-base">
              With our DVLA tool on our website, users can easily ascertain the
              number of previous registered keepers. By entering the
              vehicle&apos;s registration number into our system, they gain
              access to comprehensive ownership history reports, empowering them
              with crucial information for making informed decisions about their
              vehicle purchases.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DLVAFaqs;
