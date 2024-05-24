"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

const VehicleDetails = () => {
  const [vehicleData, setVehicleData] = useState(null);
  console.log("🚀 ~ VehicleDetails ~ vehicleData:", vehicleData);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://cors-anywhere.herokuapp.com/https://api.motorway.co.uk/platform/vrm-check",
          {
            user: {},
            vrm: "LX20ZXV",
          },
          {
            headers: {
              "Content-Type": "application/json",
            }
          }
        );

        if (response.status === 200) {
          setVehicleData(response.data);
        } else {
          console.error("Error fetching data:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="text-center mt-10">
      {vehicleData ? (
        <div>
          {/* Render your vehicle data here */}
          <pre>{JSON.stringify(vehicleData, null, 2)}</pre>
        </div>
      ) : (
        "No data available"
      )}
    </div>
  );
};

export default VehicleDetails;
