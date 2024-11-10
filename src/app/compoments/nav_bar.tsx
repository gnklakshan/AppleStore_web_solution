import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const nav_bar = ({ toggleCart }: any) => {
  return (
    <div className="flex justify-between w-screen px-8 py-3 ">
      <h1 className="text-xl text-gray-600">Apple Store</h1>
      <button onClick={toggleCart}>
        <HiOutlineShoppingBag className="text-blue-950  h-7 w-7 hover:scale-110 hover:bg-gray-50 rounded-full " />
      </button>
    </div>
  );
};

export default nav_bar;
