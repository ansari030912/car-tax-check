"use client";
/* eslint-disable @next/next/no-img-element */
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Tool = ({button}) => {
  const [regNum, setRegNum] = useState("");
  const router = useRouter();

  const handleInputChange = (e) => {
    setRegNum(e.target.value.toUpperCase());
  };

  const handleButtonClick = async () => {
    try {
      const response = await axios.post("https://carcheckstatus.co.uk/api/car/", {
        Number: regNum,
      });
      if (response.status === 200) {
        localStorage.setItem("carData", JSON.stringify(response.data));
        localStorage.setItem("numberPlate", JSON.stringify(regNum));
        router.push(`/check-status`);
      } else {
        alert("Error: Unable to fetch data");
      }
    } catch (error) {
      alert("Error: Unable to fetch data");
    }
  };

  const mainInputStyle = {
    position: "relative",
    marginLeft: "42px",
  };

  const plateIconStyle = {
    position: "absolute",
    top: "0",
    width: "47px",
    marginLeft: "-2px",
    borderRadius: "10px 0 0 10px",
    left: "-42px",
  };

  const regInputStyle = {
    width: "270px",
    height: "70px",
    border: "1px solid transparent",
    borderRadius: "5px",
    paddingLeft: "3px",
    fontSize: "3rem",
    fontWeight: "bolder",
    textTransform: "uppercase",
    paddingTop: "2px",
    background: "linear-gradient(to bottom, #ffc439 0, #f4bc37 100%)",
    textAlign: "center",
  };

  const formStyle = {
    display: "block",
    marginTop: "0em",
    unicodeBidi: "isolate",
  };

  const inputTextStyle = {
    paddingBlock: "1px",
    paddingInline: "10px",
  };

  return (
    <>
      <div style={mainInputStyle}>
        <form
          action="/cardetails"
          method="post"
          id="submit-reg-form"
          style={formStyle}
        >
          <input
            style={regInputStyle}
            id="reg_num"
            type="text"
            placeholder="REG NO"
            autoComplete="off"
            value={regNum}
            onChange={handleInputChange}
          />
        </form>
        <img
          style={plateIconStyle}
          src="/euro-icon.svg"
          loading="lazy"
          alt="number plate"
        />
      </div>
      <br />
      <div className="flex flex-wrap -m-2.5 mb-6">
        <div className="w-full md:w-auto p-2.5">
          <div className="block">
            <button
              className="py-4 px-6 w-full text-white font-semibold border border-indigo-900 rounded-xl focus:ring focus:ring-indigo-300 bg-indigo-900 hover:bg-indigo-800 transition ease-in-out duration-200"
              type="button"
              onClick={handleButtonClick}
            >
              {button}
            </button>
          </div>
        </div>
        {/* <div className="w-full md:w-auto p-2.5">
          <div className="block">
            <button
              className="py-4 px-9 w-full font-semibold border border-gray-300 hover:border-gray-400 rounded-xl focus:ring focus:ring-gray-50 bg-transparent hover:bg-gray-100 transition ease-in-out duration-200"
              type="button"
            >
              <div className="flex flex-wrap justify-center items-center -m-1">
                <div className="w-auto p-1">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.75 3.75C2.75 2.92157 3.42157 2.25 4.25 2.25H6.70943C7.03225 2.25 7.31886 2.45657 7.42094 2.76283L8.5443 6.13291C8.66233 6.48699 8.50203 6.87398 8.1682 7.0409L6.47525 7.88737C7.30194 9.72091 8.77909 11.1981 10.6126 12.0247L11.4591 10.3318C11.626 9.99796 12.013 9.83767 12.3671 9.9557L15.7372 11.0791C16.0434 11.1811 16.25 11.4677 16.25 11.7906V14.25C16.25 15.0784 15.5784 15.75 14.75 15.75H14C7.7868 15.75 2.75 10.7132 2.75 4.5V3.75Z"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </div>
                <div className="w-auto p-1">
                  <span>MOT CHECK</span>
                </div>
              </div>
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Tool;
