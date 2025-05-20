"use client";
import React, { useState, useEffect } from "react";
import Button from "../Common/Button";
import Image from "next/image";

export default function AboutUS2() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const businessManImage = "/aboutIMG1.jpg";
  const businessWomanImage = "/blog-10-768x461.webp";
  const avatarCircles = "/rating-image-1a-300x113.webp";
  const fabricTexture = "/section-bg.jpg";

  return (
    <section className="w-full mt-20 overflow-hidden h-screen">
      <div className="w-full flex flex-col md:flex-row min-h-[600px]">
        {/* Left image */}
        <div className="w-1/3 sm:w-1/2 lg:w-[30%] md:w-2/5 relative h-64 md:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center w-[100%]"
            style={{
              backgroundImage: `url(${businessManImage})`,
              backgroundPosition: "center 20%",
            }}
          />
        </div>

        {/* Right side with background and overlay */}
        <div className="w-2/3 sm:w-1/2 lg:w-[70%] md:w-3/5 relative">
          {/* Fabric texture background */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
            style={{ backgroundImage: `url(${fabricTexture})` }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-opacity-50 z-10" />

          {/* Main content */}
          <div className="relative z-20  text-white w-full h-full flex items-center">
            <div className="grid grid-cols-1 md:grid-rows-2 w-3/5 px-10">
              {/* Title */}
              <div className="flex flex-col justify-center items-start mb-4 gap-3">
                <p className="text-lg pl-10 -pt-20 uppercase tracking-widest text-gray-3002">
                  COOL LOOK
                </p>
                <h2 className="px-10 text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                  We comprehend your style needs and create{" "}
                  <span className="text-[#b2996e]">wonderful clothing</span>
                </h2>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-2  px-10 place-content-center ">
                {[
                  { value: "49+", label: "Tailors" },
                  { value: "21M", label: "Reviews" },
                  { value: "56k", label: "Bookings" },
                  { value: "774+", label: "Clients" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={` p-10 flex flex-col items-center justify-center ${
                      idx === 0 || idx === 3 ? "bg-black opacity-60" : ""}`}
                  >
                    <p className=" text-[50px] text-[#b2996e] font-semibold mb-1">
                      {stat.value}
                    </p>
                    <p className="font-normal text-base uppercase leading-2 tracking-[3px] text-gray-200">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-rows-2 w-2/5 gap-5">
              {/* Floating card (description + CTA) */}
              <div className="pt-16 text-gray-200">
                <p className="text-base">
                  Nulla pellentesque dignissim enim sit amet venenatis urna.
                  Laoreet non curabitur gravida arcu ac tortor dignissim
                  convallis Et aenean.netus et malesuada fames enim diam.
                </p>
              </div>
              {/* Button + avatars */}
              <div className="flex items-start flex-col gap-5">
                <Button text={`Shop The Sales`} />
                <img
                  src={avatarCircles}
                  alt="Client avatars"
                  className="h-20 w-auto"
                />
              </div>
              <Image
                src="/blog-10-300x180.webp"
                alt="image"
                width={460}
                height={230}
                className="object-cover mt-4 w-full h-full sm:h-96 mb-5"
              />
          </div>
          </div>
          
        </div>
      </div>

      {/* Mobile-only bottom image */}
      <div
        className="w-full md:hidden h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${businessWomanImage})` }}
      />
    </section>
  );
}
