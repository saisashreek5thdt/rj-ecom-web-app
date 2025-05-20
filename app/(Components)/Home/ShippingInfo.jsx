import React from "react";
import { HiOutlineTruck } from "react-icons/hi2";
import { PiHeadset } from "react-icons/pi";
import { BsBox2 } from "react-icons/bs";
import { CiLock } from "react-icons/ci";

export default function ShippingInfo() {
  return (
    <>
      <section className="max-w-7xl h-48 p-5 mx-auto grid grid-cols-1 md:grid-cols-4 justify-center items-center gap-4 md:gap-6">
        <div className="flex gap-4 justify-center items-center">
          <h2 className="text-2xl">
            <HiOutlineTruck className="w-24 h-24 text-[#b2996e]" />
          </h2>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg uppercase">Shipping</h2>
            <h3 className="text-2xl capitalize">Free Shipping World wide</h3>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <h2 className="text-2xl">
            <PiHeadset className="w-20 h-20 text-[#b2996e]" />
          </h2>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg uppercase">Hassle Free</h2>
            <h3 className="text-2xl capitalize">24 * 7 Customer Support</h3>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <h2 className="text-2xl">
            <BsBox2 className="w-20 h-20 text-[#b2996e]" />
          </h2>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg uppercase">30 Days</h2>
            <h3 className="text-2xl capitalize">Free & Easy Returns</h3>
          </div>
        </div>
        <div className="flex gap-4 justify-center items-center">
          <h2 className="text-2xl">
            <CiLock className="w-20 h-20 text-[#b2996e]" />
          </h2>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg uppercase">Secured</h2>
            <h3 className="text-2xl capitalize">Quick Check Out Process</h3>
          </div>
        </div>
      </section>
    </>
  );
}
