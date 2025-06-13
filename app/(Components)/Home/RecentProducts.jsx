import Image from "next/image";
import { ImScissors } from "react-icons/im";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../Common/Button";
import ProductCard from "./ProductCard";

export default function RecentProducts() {
  const products = [
    {
      id: 1,
      name: "",
      price: "Price on Request",
      primaryImage: "/products/dress-1B.png",
      secondaryImage: "/products/dress-1A.png", // Replace with actual hover image
    },
    {
      id: 2,
      name: "",
      price: "Price on Request",
      primaryImage: "/products/dress-2A.png",
      secondaryImage: "/products/recent2hover.jpg",  // Replace with actual hover image
    },
    {
      id: 3,
      name: "",
      price: "Price on Request",
      primaryImage: "/products/dress-3A.png",
      secondaryImage: "/products/recent3hover.jpg", // Replace with actual hover image
    },
    {
      id: 4,
      name: "",
      price: "Price on Request",
      primaryImage: "/products/dress-1B.png",
      secondaryImage: "/products/dress-1A.png", // Replace with actual hover image
    },
    {
      id: 5,
      name: "",
      price: "Price on Request",
      primaryImage: "/products/dress-2A.png",
      secondaryImage: "/products/recent2hover.jpg", // Replace with actual hover image
    },
    {
      id: 6,
      name: "",
      price: "Price on Request",
      primaryImage: "/products/dress-3A.png",
      secondaryImage: "/products/recent3hover.jpg", // Replace with actual hover image
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full px-6 bg-black pt-10 text-white ">
        {/* Section Title */}
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-2 md:gap-3 lg:gap-4">
          <h1 className="mt-4 font-normal text-base uppercase leading-2 tracking-[3px]">Recent products</h1>
          <p className="text-4xl text-center font-bold sm:text-xl md:text-4xl lg:text-5xl">Enduringly Stylish Materials</p>
        </div>

        {/* Cards Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 sm:gap-5 md:gap-8 lg:gap-10 xl:gap-14 mb-14">
          {products.map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      </div>
    </>
  )
}