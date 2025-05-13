import React from "react";
import {
  FaCcAmazonPay,
  FaCcApplePay,
  FaCcPaypal,
  FaCcVisa,
  FaCcAmex,
  FaCcMastercard,
  FaFacebookF,
  FaSquareXTwitter,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <div className="grid grid-rows-1 md:grid-rows-2">
        <div className="p-8 grid grid-cols-1 md:grid-cols-5 gap-10 w-full">
          <div className="flex flex-col gap-4 justify-start items-start">
            <h2>Logo</h2>
            <h2>About</h2>
            <div className="p-3 flex gap-4 justify-start items-start">
              <FaFacebookF className="w-6 h-6 text-lg cursor-pointer" />
              <FaSquareXTwitter className="w-6 h-6 text-lg cursor-pointer" />
              <FaInstagram className="w-6 h-6 text-lg cursor-pointer" />
            </div>
          </div>
          <h2>Option1</h2>
          <h2>Option2</h2>
          <h2>Option3</h2>
          <h2>Option4</h2>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 justify-evenly items-center-safe">
          <h2>CopyRights 2025, All Rights Reserved</h2>
          <div className="flex justify-end gap-4 text-2xl">
            <FaCcVisa className="w-8 h-8" />
            <FaCcMastercard className="w-8 h-8" />
            <FaCcAmex className="w-8 h-8" />
            <FaCcPaypal className="w-8 h-8" />
            <FaCcAmazonPay className="w-8 h-8" />
            <FaCcApplePay className="w-8 h-8" />
          </div>
        </div>
      </div>
    </>
  );
}
