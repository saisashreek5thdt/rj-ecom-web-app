import Image from "next/image";
import { ImScissors } from "react-icons/im";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function GlobalBrand() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full px-6 bg-black pt-10 text-white">
      {/* Section Title */}
      <div className="flex flex-col items-center justify-center gap-2 sm:gap-2 md:gap-3 lg:gap-4">
        <ImScissors className="w-6 h-6"/>
        <h1 className="mt-4 font-normal text-base uppercase leading-2 tracking-[3px]">Global Brand</h1>
        <p className="text-4xl text-center font-bold sm:text-xl md:text-4xl lg:text-5xl">Fashion & Design Company</p>
      </div>

      {/* Cards Grid */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="group relative w-[355px] h-[400px] lg:w-[355px] lg:h-[400px] xl:w-[355px] xl:h-[400px] sm:w-[250px] sm:h-[300px] md:w-[300px] md:h-[350px] flex flex-col justify-between bg-black  p-6 transition-all duration-500 ease-in-out overflow-hidden"
          >
            {/* Background Image with Overlay (Hidden Initially) */}
            <div
              className="absolute inset-0 z-0 opacity-0 brightness-50 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"
            >
              <Image
                src="/dummy.png"
                alt="Global Brand"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Beam Effect Borders */}
            <div
              className="absolute top-0 left-0 w-[1px] h-0 bg-white opacity-0 group-hover:h-full group-hover:opacity-100 transition-all duration-500"
            ></div>
            <div
              className="absolute top-0 right-0 w-[1px] h-0  bg-white opacity-0 group-hover:h-full group-hover:opacity-100 transition-all duration-500"
            ></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-start gap-0 sm:gap-2 md:gap-5 lg:gap-7 xl:gap-10 mt-6">
              <ImScissors className="w-10 h-10" />
              <p className="text-3xl font-bold">Outstanding Structure & Shape</p>
              <h1 className="font-normal text-sm text-white/80">
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Cursus mattis molestie a iaculis orci at.
              </h1>
            </div>

            {/* Arrow Button */}
            <div className="relative z-10 mt-auto flex justify-end">
              <IoIosArrowRoundForward
                className="w-10 h-10 transform hover:rotate-0 -rotate-45 transition-transform duration-330"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}