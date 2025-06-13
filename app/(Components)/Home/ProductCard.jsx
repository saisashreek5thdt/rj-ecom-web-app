"use client";

import Image from "next/image";
import Button from "../Common/Button";

export default function ProductCard({ product }) {
  return (
    <div className="relative group flex flex-col items-center justify-center w-full border border-black hover:border-[#b2996e] transition-colors duration-300">
      <div className="bg-[#222] p-6 sm:p-10 overflow-hidden">
        <div className="relative w-[200px] h-[300px] sm:w-[250px] sm:h-[320px] md:w-[280px] md:h-[350px] lg:w-[300px] lg:h-[380px] xl:w-[320px] xl:h-[400px]">
          {/* Primary Image */}
          <Image
            src={product.primaryImage}
            alt={product.name || "Product Image"}
            fill
            className="object-cover transition-opacity duration-500 opacity-100 group-hover:opacity-0"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Secondary Image */}
          <Image
            src={product.secondaryImage}
            alt={`${product.name || "Product"} Hover`}
            fill
            className="object-cover absolute top-0 left-0 scale-105 opacity-0 group-hover:opacity-100 transition-all duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className="flex flex-col items-center gap-2 p-4">
        <p className="text-xl font-medium">
          {product.name || ""}
        </p>
        <p className="text-sm text-gray-400">{product.price}</p>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button text="Select Options" />
        </div>
      </div>
    </div>
  );
};
