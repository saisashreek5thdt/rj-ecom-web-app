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
  FaPinterest,
} from "react-icons/fa6";

import { AiOutlineCopyright } from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  let currentYear = new Date().getFullYear();

  return (
    <>
      <div className="grid grid-rows-1 md:grid-rows-2 bg-[url('/footer-bg.jpg')]">
        {/* Top Footer with Centered Border */}
        <div className="w-full flex justify-evenly">
          <div className="border-b border-gray-300 w-full max-w-7xl px-8 py-8 grid grid-cols-1 md:grid-cols-5 gap-20">
            {/* Brand Section */}
            <div className="flex flex-col gap-4 justify-start items-start">
              <h2 className="text-xl cursor-pointer">
                <span className="font-semibold">rj</span>fashions
              </h2>
              <h2 className="text-sm text-justify">
                Quisque eleifend eu dolor a pulvinar. Vestibulum auctor dolor
                justo, a dignissim orci rutrum a. Integer finibus mauris risus.
              </h2>
              <div className="p-3 flex gap-4 justify-start items-start">
                <FaFacebookF className="w-6 h-6 text-lg cursor-pointer" />
                <FaSquareXTwitter className="w-6 h-6 text-lg cursor-pointer" />
                <FaInstagram className="w-6 h-6 text-lg cursor-pointer" />
                <FaPinterest className="w-6 h-6 text-lg cursor-pointer" />
              </div>
            </div>

            {/* Order Assistance */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium uppercase">Order Assistance</h2>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">Shipping & Delivery</h4>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">Return & Refunds</h4>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">Gift Wrapping</h4>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">Follow Your Order</h4>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium uppercase">Company</h2>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">About Us</h4>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">Our Mission</h4>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">Privacy Policy</h4>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">Affiliates and Creators</h4>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium uppercase">Support</h2>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">FAQs</h4>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">Shipping & Returns</h4>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">Tracking</h4>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">Size Charts</h4>
            </div>

            {/* Talk to Us */}
            <div className="flex flex-col gap-4">
              <h2 className="text-lg font-medium uppercase">Talk To Us</h2>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">
                Got Questions? Call us <br />
                <Link href="tel:+15127794568">+1(512) 779 - 4568</Link>
              </h4>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">
                <Link href="mailto:info@rjfashions.com">info@rjfashions.com</Link>
              </h4>
              <h4 className="text-sm font-medium cursor-pointer hover:text-[#b2996e]">USA</h4>
            </div>
          </div>
        </div>

        {/* Bottom Section: Copyright & Payments */}
        <div className="pt-1 pb-28 px-4 grid grid-cols-1 md:grid-cols-2 items-center">
          <h2 className="flex justify-start items-center gap-1.5 text-sm md:text-base">
            <AiOutlineCopyright /> Copyright {currentYear}, All Rights Reserved
          </h2>
          <div className="flex justify-end gap-4 text-xl md:text-2xl mt-2 md:mt-0">
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
