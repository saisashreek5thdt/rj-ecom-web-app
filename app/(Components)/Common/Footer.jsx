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
      <div className="grid grid-rows-1 md:grid-rows-2">
        <div className="p-8 grid grid-cols-1 md:grid-cols-5 gap-20 w-full">
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
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-medium uppercase">Order Assistence</h2>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              Shipping & Delivery
            </h4>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              Return & Refunds
            </h4>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              Gift Wrapping
            </h4>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              Follow Your Order
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-medium uppercase">Company</h2>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              About Us
            </h4>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              Our Mission
            </h4>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              Privacy Policy
            </h4>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              Affiliates and Creators
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-medium uppercase">Support</h2>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              FAQs
            </h4>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              Shipping & Returns
            </h4>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              Tracking
            </h4>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              Size Charts
            </h4>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-lg font-medium uppercase">Talk To Us</h2>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              Got Questions? Call us <br />
              <Link href="tel:+15127794568">+1(512) 779 - 4568</Link>
            </h4>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              <Link href="mailto:info@rjfashions.com">info@rjfashions.com</Link>
            </h4>
            <h4 className="text-sm font-medium cursor-pointer hover:text-amber-400">
              USA
            </h4>
          </div>
        </div>
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 justify-evenly items-center-safe">
          <h2 className="flex justify-start items-center gap-1.5">
            <AiOutlineCopyright /> CopyRights {currentYear}, All Rights Reserved
          </h2>
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
