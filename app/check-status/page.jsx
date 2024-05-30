"use client";
import { useEffect, useState } from "react";
// import ResultOfNumberPlateCheck from "../components/ResultOfNumberPlateCheck";
import { Card, Grid, Typography } from "@mui/material";

const Page = () => {
  const [data, setData] = useState(null);
  const [number, setNumber] = useState(null);
  useEffect(() => {
    const carData = localStorage.getItem("carData");
    if (carData) {
      setData(JSON.parse(carData));
    }
    const numberPlate = localStorage.getItem("numberPlate");
    if (carData) {
      setNumber(JSON.parse(numberPlate));
    }
  }, []);
  const today = new Date();
  const formattedDate =
    today.getDate() + "/" + (today.getMonth() + 1) + "/" + today.getFullYear();
  console.log(formattedDate);
  return (
    <>
      <section className="pt-6 pb-2">
        <div className="container px-4 mx-auto">
          <div className="bg-yellow-400 mb-8 font-bold text-4xl text-center text-gray-800 p-3 w-full">
            Car History
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="w-full lg:w-1/2 p-4">
              <div className="p-6 mb-8 bg-indigo-900 shadow rounded">
                <div className="flex mb-3 items-center justify-between">
                  <h3 className="text-gray-600 border-2 border-gray-800 text-2xl px-4 py-2 font-bold rounded-lg bg-yellow-400">
                    {number}
                  </h3>
                </div>
                <div className="flex items-center mb-3">
                  <span className="text-4xl text-white font-bold">
                    {data?.generalInfo?.model}
                  </span>
                  <span className="inline-block ml-2 py-1 px-2 bg-green-500 text-white text-lg font-bold pb-1 rounded-full">
                    {data?.generalInfo?.yearOfManufacture}
                  </span>
                </div>
                <div className="relative w-full h-1 mb-2 bg-gray-50 rounded">
                  <div className="absolute top-0 left-0 w-4/6 h-full bg-yellow-400 rounded"></div>
                </div>
                <p className="text-xl text-right text-gray-50">
                  {formattedDate}
                </p>
              </div>
              <div className="bg-white rounded">
                <div className="flex items-center py-5  border-b">
                  <h3 className="text-2xl font-bold">General Information</h3>
                </div>
                <div className="pt-4 ">
                  <div className="flex flex-wrap -m-4 pb-16">
                    <div className="w-full md:w-1/2 p-4">
                      <div className="py-4 px-6 border rounded">
                        <h4 className="text-lg font-semibold text-gray-500">
                          Make
                        </h4>
                        <div className="flex items-center">
                          <span className="mr-2 text-2xl font-bold">
                            {data?.generalInfo?.make}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/2 p-4">
                      <div className="py-4 px-6 border rounded">
                        <h4 className="text-lg font-semibold text-gray-500">
                          Year Of Manufacture
                        </h4>
                        <div className="flex items-center">
                          <span className="mr-2 text-2xl font-bold">
                            {data?.generalInfo?.yearOfManufacture}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-1/1 p-4">
                      <div className="py-4 px-6 border rounded">
                        <h4 className="text-lg font-semibold text-gray-500">
                          Model
                        </h4>
                        <div className="flex items-center">
                          <span className="mr-2 text-2xl font-bold">
                            {data?.generalInfo?.model}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-3/12 p-4">
                      <div className="py-4 px-6 border rounded">
                        <h4 className="text-lg font-semibold text-gray-500">
                          Color
                        </h4>
                        <div className="flex items-center">
                          <span className="mr-2 text-2xl font-bold">
                            {data?.generalInfo?.colour}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-4/12 p-4">
                      <div className="py-4 px-6 border rounded">
                        <h4 className="text-lg font-semibold text-gray-500">
                          Top Speed
                        </h4>
                        <div className="flex items-center">
                          <span className="mr-2 text-2xl font-bold">
                            {data?.generalInfo?.topSpeed}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-5/12 p-4">
                      <div className="py-4 px-6 border rounded">
                        <h4 className="text-lg font-semibold text-gray-500">
                          Gear Box
                        </h4>
                        <div className="flex items-center">
                          <span className="mr-2 text-2xl font-bold">
                            {data?.generalInfo?.gearbox}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 p-4">
              <section>
                <div className="container mx-auto">
                  <div className=" bg-white shadow rounded">
                    <div className="flex px-6 bg-indigo-900 pb-4 pt-4 border-b">
                      <h3 className="text-xl text-white font-bold">
                        Engine & fuel consumption
                      </h3>
                    </div>
                    <div className="p-4 overflow-x-auto">
                      <table className="table-auto w-full">
                        <tbody>
                          <tr className="text-base bg-gray-50">
                            <td className="py-5 px-6 font-medium">Power</td>

                            <td className="text-right pr-3">
                              <span className="inline-block py-1 px-4 text-white bg-green-500 rounded-full">
                                {data?.engineInfo?.power}
                              </span>
                            </td>
                          </tr>
                          <tr className="text-base">
                            <td className="py-5 px-6 font-medium">
                              Max. torque
                            </td>
                            <td className="text-right pr-3">
                              <span className="inline-block py-1 px-4 text-white bg-green-500 rounded-full">
                                {data?.engineInfo?.maxTorque}
                              </span>
                            </td>
                          </tr>
                          <tr className="text-base bg-gray-50">
                            <td className="py-5 px-6 font-medium">
                              Engine capacity
                            </td>

                            <td className="text-right pr-3">
                              <span className="inline-block py-1 px-4 text-white bg-green-500 rounded-full">
                                {data?.engineInfo?.engineCapacity}
                              </span>
                            </td>
                          </tr>
                          <tr className="text-base">
                            <td className="py-5 px-6 font-medium">Cylinders</td>

                            <td className="text-right pr-3">
                              <span className="inline-block py-1 px-4 text-white bg-green-500 rounded-full">
                                {data?.engineInfo?.cylinders}
                              </span>
                            </td>
                          </tr>
                          <tr className="text-base bg-gray-50">
                            <td className="py-5 px-6 font-medium">Fuel type</td>

                            <td className="text-right pr-3">
                              <span className="inline-block py-1 px-4 text-white bg-green-500 rounded-full">
                                {data?.engineInfo?.fuelType}
                              </span>
                            </td>
                          </tr>
                          <tr className="text-base">
                            <td className="py-5 px-6 font-medium">
                              Consumption combined
                            </td>

                            <td className="text-right pr-3">
                              <span className="inline-block py-1 px-4 text-white bg-green-500 rounded-full">
                                {data?.engineInfo?.consumptionCombined}
                              </span>
                            </td>
                          </tr>
                          <tr className="text-base bg-gray-50">
                            <td className="py-5 px-6 font-medium">
                              CO2 emission
                            </td>

                            <td className="text-right pr-3">
                              <span className="inline-block py-1 px-4 text-white bg-green-500 rounded-full">
                                {data?.engineInfo?.co2Emission}
                              </span>
                            </td>
                          </tr>
                          <tr className="text-base ">
                            <td className="py-5 px-6 font-medium">CO2 label</td>

                            <td className="text-right pr-3">
                              <span className="inline-block py-1 px-4 text-white bg-green-500 rounded-full">
                                {data?.engineInfo?.co2Label}
                              </span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <section className="py-3">
        <div className="container px-4 mx-auto">
          <div className="bg-yellow-400 font-bold text-4xl text-center text-gray-800 p-3 w-full">
            MOT History
          </div>
          <div className="mx-auto max-w-screen-3xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {data?.motHistory.map((item, index) => (
                <section key={index} className="py-3 w-full">
                  <div className="rounded-sm bg-indigo-900 shadow-md">
                    <div className="px-3 py-4">
                      <h4 className="text-lg text-white font-semibold mb-4">
                        MOT Record #{index + 1}
                      </h4>
                      <div className="overflow-x-auto">
                        <table className="w-full min-w-max text-sm text-left text-gray-900">
                          <thead className="text-base font-semibold text-gray-700 uppercase bg-yellow-400">
                            <tr>
                              <th scope="col" className="px-6 py-3">
                                Detail
                              </th>
                              <th scope="col" className="px-6 py-3">
                                Information
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-gray-50 border-b">
                              <td className="px-6 py-4 font-medium text-gray-900">
                                Date/Identifier
                              </td>
                              <td className="px-6 py-4">
                                {item.motExpiryDate ||
                                  item[`mot#${9 - index}`] ||
                                  "N/A"}
                              </td>
                            </tr>

                            {item.motPassed && (
                              <tr className="bg-white border-b">
                                <td className="px-6 py-4 font-medium">
                                  MOTs Passed
                                </td>
                                <td className="px-6 py-4">{item.motPassed}</td>
                              </tr>
                            )}

                            {item.motTestNumber && (
                              <tr className="bg-white border-b">
                                <td className="px-6 py-4 font-medium">
                                  MOT Test Number
                                </td>
                                <td className="px-6 py-4">
                                  {item.motTestNumber}
                                </td>
                              </tr>
                            )}

                            {item.result && (
                              <tr className="bg-gray-50 border-b">
                                <td className="px-6 py-4 font-medium">
                                  Result
                                </td>
                                <td className="px-6 py-4">{item.result}</td>
                              </tr>
                            )}
                            {item.nextExpiryDate && (
                              <tr className="bg-white border-b">
                                <td className="px-6 py-4 font-medium">
                                  Next Expiry Date
                                </td>
                                <td className="px-6 py-4">
                                  {item.nextExpiryDate}
                                </td>
                              </tr>
                            )}

                            {item.failedMotTests && (
                              <tr className="bg-gray-50 border-b">
                                <td className="px-6 py-4 font-medium">
                                  Failed MOT Tests
                                </td>
                                <td className="px-6 py-4">
                                  {item.failedMotTests}
                                </td>
                              </tr>
                            )}

                            {item.totalAdviceItems && (
                              <tr className="bg-white border-b">
                                <td className="px-6 py-4 font-medium">
                                  Total Advice Items
                                </td>
                                <td className="px-6 py-4">
                                  {item.totalAdviceItems}
                                </td>
                              </tr>
                            )}

                            {item.totalItemsFailed && (
                              <tr className="bg-gray-50 border-b">
                                <td className="px-6 py-4 font-medium">
                                  Total Items Failed
                                </td>
                                <td className="px-6 py-4">
                                  {item.totalItemsFailed}
                                </td>
                              </tr>
                            )}

                            {item[""] && (
                              <tr className="bg-white border-b">
                                <td className="px-6 py-4 font-medium">
                                  Additional Notes
                                </td>
                                <td className="px-6 py-4">{item[""].trim()}</td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
          </div>
          <div className="mx-auto w-full py-6">
            <div className="bg-yellow-400 mb-6 font-bold text-4xl text-center text-gray-800 p-3 w-full">
              Tax & MOT check
            </div>
            <div className="bg-indigo-900 rounded-lg shadow-lg">
              <div className="px-6 py-4">
                <Grid container className="py-6" spacing={2}>
                  <Grid item xs={12} md={6}>
                    <Card
                      style={{ minHeight: "100px", borderRadius: "0px" }}
                      className="flex flex-col justify-center text-center font-bold bg-red-500"
                    >
                      <Typography className="text-5xl font-bold text-white">
                        Untaxed
                      </Typography>
                      <Typography className="text-xl font-bold text-white">
                        Tax expired :{" "}
                        {data?.taxCalculation.taxStatus.split(" at ")[1]}
                      </Typography>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card
                      style={{ minHeight: "100px", borderRadius: "0px" }}
                      className="flex flex-col justify-center text-center font-bold bg-green-500"
                    >
                      <Typography className="text-5xl font-bold text-white">
                        MOT
                      </Typography>
                      <Typography className="text-xl font-bold text-white">
                        Expires : {data?.taxCalculation.motExpiryDate}
                      </Typography>
                    </Card>
                  </Grid>
                </Grid>
                <table className="w-full text-sm text-left text-gray-900">
                  <tbody>
                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">Tax status</td>
                      <td className="px-6 py-4">
                        {data?.taxCalculation.taxStatus}
                      </td>
                    </tr>

                    <tr className="bg-white">
                      <td className="px-6 py-4 font-medium">Days left</td>
                      <td className="px-6 py-4">
                        {data?.taxCalculation.daysLeft}
                      </td>
                    </tr>

                    <tr className="bg-gray-50">
                      <td className="px-6 py-4 font-medium">MOT expiry date</td>
                      <td className="px-6 py-4">
                        {data?.taxCalculation.motExpiryDate}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
