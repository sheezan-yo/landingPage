import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-[#F7F8F9] h-full w-full flex flex-col justify-between px-[20px] py-[41px] border border-black/10">
      <div className="h-[600px]"></div>
      <div>
        <h1 className="text-left font-medium mb-[10px] text-[28px] leading-[17px] rubikFont">
          Welcome to PopX
        </h1>
        <p className="mb-[29px] opacity-[0.6] text-[18px] leading-[26px]">
          Lorem ipsum, dolor sit amet <br />
          consectetur adipisicing elit.
        </p>
        <div className="flex flex-col gap-[10px]">
          <Link to="/signup">
            <button className="w-full bg-[#6C25FF] h-[46px] text-white rounded-[6px] text-[16px] leading-[17px]">
              Create Account
            </button>
          </Link>
          <Link to="/signin">
            <button className="w-full bg-[#6C25FF4B] h-[46px] rounded-[6px] text-[16px] leading-[17px]">
              Already Registered? Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
