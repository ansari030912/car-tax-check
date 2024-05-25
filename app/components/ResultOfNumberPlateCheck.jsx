import axios from "axios";
import React from "react";

const ResultOfNumberPlateCheck = async ({ params }) => {
  try {
    const response = await axios.post("http://localhost:3000/api/car/", {
      Number: params.car_number,
    });
    const data = response.data;
    return <div>{JSON.stringify(data, null, 2)}</div>;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error fetching data</div>;
  }
};

export default ResultOfNumberPlateCheck;
