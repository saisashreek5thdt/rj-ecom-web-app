import Image from "next/image";

export default function Hero() {
  const hero1 = "/hero/hero-1.png";
  const hero2 = "/hero/hero-2.png";
  return (
    <>
      <div className="relative  w-full h-screen grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
        {/* <div className="absolute z-10 flex flex-col-reverse gap-2 pl-5 ">
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Linkedin</p>
        </div> */}

        <div className="absolute z-10 flex mb-16 flex-col gap-2 sm:pl-0 md:pl-3 lg:pl-5 xl:pl-5 bottom-0">
          <div className="flex flex-col items-center justify-end h-24">
            <p className="text-base font-medium rotate-270 transform origin-center">
              Instagram
            </p>
          </div>
          <div className="flex flex-col items-center justify-end h-24">
            <p className="text-base font-medium rotate-270 transform origin-center">
              Facebook
            </p>
          </div>
          <div className="flex flex-col items-center justify-end h-24">
            <p className="text-base font-medium rotate-270 transform origin-center">
              Twitter
            </p>
          </div>
          <div className="flex flex-col items-center justify-end h-24">
            <p className="text-base font-medium rotate-270 transform origin-center">
              Youtube
            </p>
          </div>
        </div>
        {/* Left Side */}
        <div className="relative">
          <div className="absolute z-0 w-full h-full">
            <Image
              src={hero1}
              alt="Hero Image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover bg-gradient-to-b from-gray-500 to-[#000000]"
            />
          </div>
          <div className="relative z-10 w-full h-full flex items-end justify-center p-4">
            <div className="flex flex-col gap-3 text-white text-center">
              {/* <p className="font-medium text-lg uppercase leading-2 tracking-[1px] " >Causal Jacket</p> */}
              <p className="font-bold text-5xl text-[#b2996e]">For Men</p>
              <p className="">Discover</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className=" relative">
          <div className="absolute z-0 w-full h-full">
            <Image
              src={hero2}
              alt="Hero Image"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-10 w-full h-full flex items-end justify-center p-4">
            <div className="flex flex-col gap-3 text-white text-center">
              {/* <p className="font-medium text-lg uppercase leading-2 tracking-[1px] " >Causal Jacket</p> */}
              <p className="font-bold text-5xl text-[#b2996e]">For Women</p>
              <p className="">Discover</p>
            </div>
          </div>
        </div>

        <div className="absolute z-10 flex flex-col items-end justify-center -ml-8 gap-2 w-full h-full">
          <p>01</p>
          <p>02</p>
          <p>03</p>
        </div>
      </div>
    </>
  );
}
