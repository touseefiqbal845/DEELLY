import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white py-10 ">
      <div className="container mx-auto flex flex-wrap justify-between items-start px-12">
        <div className="w-full flex flex-end md:justify-end   md:w-1/12 mb-6 md:mb-0">
          <img className="logo" src="/assets/dellyicon.png" alt="deelly" />
        </div>

        <div className="w-full md:w-1/4 mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            <h4 className="font-bold font-outfit text-lg mb-4">Top Deals</h4>
          </div>
          <p className="w-1/1 text-gray-600">
            Top Deals is an e-commerce site that connects businesses with
            customers by providing discounted offers, service coupons, or
            special offers. Top Deals brings a whole e-commerce platform for
            business owners and customers to save a lot of money.
          </p>
        </div>

      
        <div className="w-full md:w-2/12 mb-6 md:mb-0">
          <h4 className="font-bold font-outfit text-lg mb-4">Our Company</h4>
          <ul className="text-gray-600">
            <li className="mb-2 hover:text-gray-800 cursor-pointer">
              About Us
            </li>
            <li className="mb-2 hover:text-gray-800 cursor-pointer">
              Privacy & Policy
            </li>
            <li className="mb-2 hover:text-gray-800 cursor-pointer">
              Contact Us
            </li>
            <li className="mb-2 hover:text-gray-800 cursor-pointer">FAQs</li>
            <li className="mb-2 hover:text-gray-800 cursor-pointer">
              Terms & Conditions
            </li>
          </ul>
        </div>

        <div className="w-full md:w-1/4">
          <h4 className="font-bold text-lg mb-4">Our Payment Partners</h4>
          <div className="flex flex-row items-center space-x-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
              alt="Visa"
              className="w-12"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="Apple Pay"
              className="w-8"
            />
            <img
              src="https://banner2.cleanpng.com/20180912/lpk/kisspng-computer-icons-samsung-group-samsung-pay-logo-orga-1713941646382.webp"
              alt="Samsung Pay"
              className="w-14"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
              alt="Mastercard"
              className="w-10"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 border-t pt-4 text-center">
        <div className="flex justify-between px-12 py-10">
          <p className="text-gray-600">© deely 2023. All rights reserved.</p>
          <div className="flex flex-row items-center space-x-4">
            <FaFacebook />
            <FaTwitter />
            <FaInstagramSquare />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
