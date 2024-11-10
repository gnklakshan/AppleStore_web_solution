import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-black via-gray-800 to-gray-600 text-white py-16">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
        {/* About Us Section */}
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <h2 className="text-3xl font-bold mb-4">About Us</h2>
          <p className="text-lg">
            We offer the best deals on iPhones. Shop with us for the latest
            models and accessories at unbeatable prices.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
          <h2 className="text-3xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="/shop"
                className="hover:text-gray-200 transition duration-300"
              >
                Shop
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-gray-200 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-gray-200 transition duration-300"
              >
                Contact
              </a>
            </li>
            <li>
              <a
                href="/faq"
                className="hover:text-gray-200 transition duration-300"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full sm:w-1/3">
          <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
          <p className="text-lg">Email: support@iphonesale.com</p>
          <p className="text-lg">Phone: +123 456 7890</p>
          <div className="flex space-x-6 mt-6">
            <a
              href="#"
              className="text-2xl hover:text-gray-200 transition duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-gray-200 transition duration-300"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-gray-200 transition duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-2xl hover:text-gray-200 transition duration-300"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center text-lg mt-10">
        <p>&copy; 2024 iPhone Sale. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
