"use client";

import React from "react";
import { XCircle } from "lucide-react";

const Canceled = () => {
  const handleNavigation = (path: string) => {
    window.location.href = path;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg px-4 py-8 sm:px-6 sm:py-10">
          {/* Icon and Header */}
          <div className="text-center">
            <XCircle className="mx-auto h-16 w-16 text-red-500" />
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Order Canceled
            </h1>
            <p className="mt-4 text-base text-gray-500">
              Your order has been canceled. No charges have been made to your
              account.
            </p>
          </div>

          {/* Details Card */}
          <div className="mt-10 bg-gray-50 rounded-lg p-6">
            <div className="space-y-3">
              <h2 className="text-lg font-medium text-gray-900">
                What happens next?
              </h2>
              <ul className="mt-4 space-y-3 text-sm text-gray-500">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  Your cart items have been saved
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  You can continue shopping at any time
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                  No payment has been processed
                </li>
              </ul>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => handleNavigation("/")}
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Continue Shopping
            </button>
          </div>

          {/* Support Section */}
          <div className="mt-10 border-t border-gray-200 pt-6">
            <div className="text-center">
              <p className="text-sm text-gray-500">
                Need help?{" "}
                <button className="font-medium text-blue-600 hover:text-blue-500">
                  Contact our support team
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Canceled;
