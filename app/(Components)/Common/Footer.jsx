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
  FaYoutube,
} from "react-icons/fa6";
import { AiOutlineCopyright } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[url('/footer-bg.jpg')] bg-cover bg-center text-white">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 border-b border-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image src="/logo.jpg" alt="Logo" width={100} height={50} className="w-24 h-auto" />
            <p className="text-sm text-justify">
              Quisque eleifend eu dolor a pulvinar. Vestibulum auctor dolor justo, a dignissim orci rutrum a. Integer finibus mauris risus.
            </p>
            <div className="flex gap-4 mt-2">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-[#b2996e]" />
              <FaSquareXTwitter className="w-5 h-5 cursor-pointer hover:text-[#b2996e]" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-[#b2996e]" />
              <FaYoutube className="w-5 h-5 cursor-pointer hover:text-[#b2996e]" />
            </div>
          </div>

          {/* Order Assistance */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">Order Assistance</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#b2996e] cursor-pointer">Shipping & Delivery</li>
              <li className="hover:text-[#b2996e] cursor-pointer">Return & Refunds</li>
              <li className="hover:text-[#b2996e] cursor-pointer">Gift Wrapping</li>
              <li className="hover:text-[#b2996e] cursor-pointer">Track Your Order</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-[#b2996e] cursor-pointer">About Us</li>
              <li className="hover:text-[#b2996e] cursor-pointer">Our Mission</li>
              <li className="hover:text-[#b2996e] cursor-pointer">Privacy Policy</li>
            </ul>
          </div>

          {/* Talk To Us */}
          <div>
            <h3 className="text-lg font-semibold uppercase mb-4">Talk To Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                Got Questions? Call us<br />
                <Link href="tel:+15127794568" className="hover:text-[#b2996e]">+1 (512) 000 - 0000</Link>
              </li>
              <li>
                <Link href="mailto:info@rjfashions.com" className="hover:text-[#b2996e]">info@rjfashions.com</Link>
              </li>
              <li className="hover:text-[#b2996e] cursor-pointer">USA</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center text-sm gap-4 text-center md:text-left">
        <div className="flex items-center gap-1">
          <AiOutlineCopyright />
          <span>Copyright {currentYear}, All Rights Reserved</span>
        </div>
        <div>
          Designed by <Link href="https://www.5thdt.com/" target="_blank" className="hover:text-[#b2996e] hover:font-medium cursor-pointer">5THDT</Link>
        </div>
        <div className="flex gap-3 text-3xl">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcAmex />
          <FaCcPaypal />
          <FaCcAmazonPay />
          <FaCcApplePay />
        </div>
      </div>
    </footer>
  );
}
