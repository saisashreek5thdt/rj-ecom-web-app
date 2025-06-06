import Image from "next/image";
import { ImScissors } from "react-icons/im";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "../Common/Button";

export default function RecentProducts() {
  const products = [
    {
      id: 1,
      name: "",
      price: "Price on Request",
      primaryImage: "/recent1.jpg",
      secondaryImage: "/recent1hover.jpg", // Replace with actual hover image
    },
    {
      id: 2,
      name: "",
      price: "Price on Request",
      primaryImage: "/recent2.jpg",
      secondaryImage: "/recent2hover.jpg",  // Replace with actual hover image
    },
    {
      id: 3,
      name: "",
      price: "Price on Request",
      primaryImage: "/recent3.jpg",
      secondaryImage: "/recent3hover.jpg", // Replace with actual hover image
    },
    {
      id: 4,
      name: "",
      price: "Price on Request",
      primaryImage: "/recent1.jpg",
      secondaryImage: "/recent1hover.jpg", // Replace with actual hover image
    },
    {
      id: 5,
      name: "",
      price: "Price on Request",
      primaryImage: "/recent2.jpg",
      secondaryImage: "/recent2hover.jpg", // Replace with actual hover image
    },
    {
      id: 6,
      name: "",
      price: "Price on Request",
      primaryImage: "/recent3.jpg",
      secondaryImage: "/recent3hover.jpg", // Replace with actual hover image
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
          {products.map((product) => (
            <div key={product.id} className="relative group flex flex-col items-center justify-center w-full h-full border-[1px] border-black hover:border-[1px] hover:border-[#b2996e]">
              <div className="bg-[#222222] p-10 overflow-hidden transition-all duration-300 ease-in-out">
                <div className="relative w-[200px] h-[300px] sm:w-[200px] sm:h-[300px] md:w-[250px] md:h-[300px] lg:w-[280px] lg:h-[350px] xl:w-[300px] xl:h-[350px]"> {/* Set fixed height */}
                  {/* Primary Image */}
                  <Image
                    src={product.primaryImage}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-100 opacity-100 group-hover:opacity-0"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Secondary Image - Appears on Hover */}
                  <Image
                    src={product.secondaryImage}
                    alt={`${product.name} Hover`}
                    fill
                    className="object-cover absolute top-0 left-0 scale-105 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

              </div>
              <div className="flex flex-col items-center justify-center p-4 gap-4">
                <p className="text-xl ">{product.name}</p>
                <p className="text-base text-[#888888]">{product.price}</p>
                <div
                  className="opacity-0 transition-opacity group-hover:opacity-100 duration-300 ease-in-out  "
                >
                  <Button text="Select Options" />
                </div>
              </div>
            </div>

          ))}
        </div>
      </div>
    </>
  )
}