import React from "react";
import { HiOutlineTruck } from "react-icons/hi2";
import { PiHeadset } from "react-icons/pi";
import { BsBox2 } from "react-icons/bs";
import { CiLock } from "react-icons/ci";

export default function ShippingInfo() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
      {/* Item */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
        <HiOutlineTruck className="text-[#b2996e] w-16 h-16 sm:w-20 sm:h-20" />
        <div>
          <h2 className="text-sm sm:text-base uppercase font-semibold">Shipping</h2>
          <h3 className="text-base sm:text-xl md:text-2xl capitalize">Free Shipping Worldwide</h3>
        </div>
      </div>

      {/* Item */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
        <PiHeadset className="text-[#b2996e] w-16 h-16 sm:w-20 sm:h-20" />
        <div>
          <h2 className="text-sm sm:text-base uppercase font-semibold">Hassle Free</h2>
          <h3 className="text-base sm:text-xl md:text-2xl capitalize">24/7 Customer Support</h3>
        </div>
      </div>

      {/* Item */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
        <BsBox2 className="text-[#b2996e] w-16 h-16 sm:w-20 sm:h-20" />
        <div>
          <h2 className="text-sm sm:text-base uppercase font-semibold">30 Days</h2>
          <h3 className="text-base sm:text-xl md:text-2xl capitalize">Free & Easy Returns</h3>
        </div>
      </div>

      {/* Item */}
      <div className="flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
        <CiLock className="text-[#b2996e] w-16 h-16 sm:w-20 sm:h-20" />
        <div>
          <h2 className="text-sm sm:text-base uppercase font-semibold">Secured</h2>
          <h3 className="text-base sm:text-xl md:text-2xl capitalize">Quick Checkout Process</h3>
        </div>
      </div>
    </section>
  );
}
