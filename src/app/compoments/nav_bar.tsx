import React from "react";
import { HiOutlineShoppingBag } from "react-icons/hi2";

interface NavBarProps {
  toggleCart: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggleCart }) => {
  return (
    <div className="flex justify-between w-screen px-8 py-3 ">
      <h1 className="text-xl text-gray-600">Apple Store</h1>
      <button onClick={toggleCart}>
        <HiOutlineShoppingBag className="text-blue-950 h-7 w-7 hover:scale-110 hover:bg-gray-50 rounded-full " />
      </button>
    </div>
  );
};

export default NavBar;
