import React from "react";
import Image from "next/image";

const sales_item_banner = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black mx-4 my-6 px-8 py-10 rounded-2xl xl:mx-12 shadow-2xl">
      <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0 lg:space-x-6 px-4 lg:px-0">
        {/* Left Section: Text Content */}
        <div className="flex flex-col items-start w-full lg:w-1/2 space-y-3">
          <h1 className="text-lg sm:text-xl font-semibold text-red-500">
            Limited Time Offer
          </h1>

          <h1 className="font-extrabold text-4xl md:text-7xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-gray-500 to-white">
            BIG <br /> DISCOUNTS
          </h1>

          <span className="text-lg sm:text-xl lg:text-2xl font-medium text-gray-400">
            15 Nov - 7 Dec
          </span>

          <button className="mt-4 sm:mt-6 px-6 py-3 sm:px-8 sm:py-4 bg-red-600 text-white font-semibold rounded-xl hover:bg-red-700 transition duration-300 ease-in-out shadow-lg">
            Shop Now
          </button>
        </div>

        <div>
          {/* for Mobile and Tablets */}
          <div className="lg:hidden relative">
            <Image
              className="rounded-xl"
              src="/images/woman.png"
              width={280}
              height={400}
              alt="iPhone"
            />
          </div>

          {/*  for Large Screens and Above */}
          <div className="hidden lg:block lg:absolute lg:top-[1150px] lg:right-32">
            <Image
              className="rounded-xl"
              src="/images/woman.png"
              width={460}
              height={500}
              alt="iPhone"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default sales_item_banner;
