import React from "react";
import Image from "next/image";

const BannerMain = () => {
  return (
    <div className="bg-[#F5F5F5] mx-4 my-6 p-8 rounded-2xl xl:mx-12 shadow-xl">
      <div className="flex flex-col lg:flex-row justify-between lg:items-center ">
        {/* Left Section: Text Content */}
        <div className="flex flex-col items-start lg:w-1/2 space-y-1 lg:space-y-2">
          <h1 className="text-lg font-medium text-gray-500">iPhone 16 Pro</h1>
          <span className="text-3xl lg:text-6xl font-semibold text-black">
            Powerful & Elegant
          </span>
          <h1 className="font-bold text-5xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-r from-gray-700 to-black">
            Experience
          </h1>
          <button className=" bg-black px-6 py-3 rounded-full text-white font-medium hover:bg-gray-700 transition duration-300 ease-in-out">
            Shop Now
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="lg:w-1/2 mt-8 lg:mt-0 flex justify-center">
          <div className="relative">
            <Image
              className="rounded-xl "
              src="/images/iphone_common.png"
              width={450}
              height={450}
              alt="iPhone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerMain;
