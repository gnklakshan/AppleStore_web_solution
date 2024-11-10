"use client";

import React from "react";

const Success = () => {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-12 text-center bg-green-50 text-gray-800">
      <div className="text-4xl font-semibold text-green-600 mb-4">
        🎉 Order Confirmed!
      </div>
      <p className="mb-6 text-lg">
        Thank you for your purchase! A confirmation email has been sent to your
        inbox.
      </p>
      <p className="mb-8 text-sm">Order #123456</p>
      <button className="bg-green-500 text-white py-2 px-6 rounded-md shadow-lg hover:bg-green-600 focus:outline-none">
        Track Order
      </button>
      <button
        className="mt-4 text-blue-500 underline hover:text-blue-700"
        onClick={() => handleNavigation("/")}
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default Success;
