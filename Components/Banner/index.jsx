import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[50vh]  relative overflow-hidden">
      <div className="absolute z-[99] text-white bg-[#000000a7] h-full w-full flex flex-col md:flex-row items-center md:items-start md:justify-between px-10 py-[5rem] md:py-0 md:px-[7rem] ">
        <div className="flex flex-col gap-5 h-full  md:justify-center">
          <div className="flex flex-col text-center pl-3">
            <h1 className="text-[4rem] md:text-[8rem] leading-[4rem] md:leading-[7rem]">
              12°
            </h1>
            <span className="text-[1rem] md:text-[2rem] uppercase font-light">
              CLOUDEY
            </span>
          </div>
          <div className="flex flex-row gap-5 md:gap-10  uppercase">
            <div className="flex flex-col text-center text-[0.8rem] md:text-[1rem]  font-light">
              <span>HUMIDITY</span>
              <span>64%</span>
            </div>
            <div className="border-r-2" />
            <div className="flex flex-col text-center text-[0.8rem] md:text-[1rem]  font-light">
              <span>HUMIDITY</span>
              <span>64 K/M</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col text-center md:mt-[4rem]">
          <h1 className="text-[2rem] leading-[3rem]">RANCHI</h1>
          <div className="h-[4px] bg-white rounded-md w-[50%] mx-auto " />
        </div>
      </div>
      <img
        src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?w=1060&t=st=1701484595~exp=1701485195~hmac=5ff4db68b4f9365164e379dc4407dc49ccc554c65b4920f8eb796ea017cb6b2d"
        alt="background image"
        className="h-full w-full object-cover relative z-10"
      />
    </div>
  );
};

export default Banner;
