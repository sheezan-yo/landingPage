import React from "react";
import ellipse from "../assets/Ellipse 114.png";
import camera from "../assets/Group 1585.png";

function User() {
  return (
    <div className="bg-[#F7F8F9] h-full w-full flex flex-col border border-black/10">
      <div className="bg-white w-full h-[68px] px-[15px] mb-[30px]">
        <h1 className="text-left text-[18px] leading-[21px] mt-[27px]">
          Account Settings
        </h1>
      </div>
      <div className="h-[76px] mb-[30px] flex ps-[20px] pe-[18px]">
        <div
          className="h-full w-[76px] rounded-[40px] me-[20px]"
          style={{
            backgroundImage: `url(${ellipse})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          className="relative w-[21px] h-[23px] -inset-x-9 inset-y-12"
          style={{
            backgroundImage: `url(${camera})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div>
          <h1 className="text-[15px] leading-[19px] font-medium mb-[6px]">
            Marry Doe
          </h1>
          <p className="text-[14px] leading-[19px]">Marry@Gmail.Com</p>
        </div>
      </div>
      <div>
        <p className="ps-[20px] pe-[16px] text-[14px] leading-[22px] text-[#1D2226] pb-[20px]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
        <div className="border-b border-dashed w-full border-[#CBCBCB]"></div>
      </div>
    </div>
  );
}

export default User;
