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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const businessManImage = "/about/aboutIMG2.jpg";
  const businessWomanImage = "/about/blog.jpg";
  const avatarCircles = "/about/rating-image-1a-300x113.webp";
  const fabricTexture = "/about/section-bg.jpg";

  return (
    <section className="w-full mt-20 overflow-hidden min-h-screen md:h-screen">
      <div className="w-full flex flex-col md:flex-row min-h-[600px]">
        {/* Left image */}
        <div className="w-full md:w-2/5 relative h-64 md:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{
              backgroundImage: `url(${businessManImage})`,
              backgroundPosition: "center 20%",
            }}
          />
        </div>

        {/* Right side */}
        <div className="w-full md:w-3/5 relative">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
            style={{ backgroundImage: `url(${fabricTexture})` }}
          />
          <div className="absolute inset-0 bg-black/10 z-10" />

          {/* Content */}
          <div className="relative z-20 text-white w-full h-full flex flex-col md:flex-row items-center px-4 py-10 md:py-0">
            {/* Text content */}
            <div className="w-full md:w-3/5 px-2 sm:px-6 md:px-10 space-y-6">
              <div className="flex flex-col justify-center items-start gap-3">
                <p className="text-sm uppercase tracking-widest text-gray-300">
                  COOL LOOK
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                  We comprehend your style needs and create{" "}
                  <span className="text-[#b2996e]">wonderful clothing</span>
                </h2>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-2 gap-0">
                {[
                  { value: "19+", label: "Tailors", highlight: true },
                  { value: "08k", label: "Reviews" },
                  { value: "16k", label: "Bookings" },
                  { value: "192+", label: "Clients", highlight: true },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`group transition-colors duration-300 cursor-pointer flex flex-col items-center justify-center text-center py-6 px-4 
        ${stat.highlight ? "bg-[rgba(255,255,255,0.1)]" : ""}
      `}
                  >
                    <p className="text-[32px] sm:text-[40px] text-[#b2996e] group-hover:text-white font-medium mb-1 transition-colors duration-300">
                      {stat.value}
                    </p>
                    <p className="font-normal text-sm sm:text-base uppercase tracking-[2px] text-gray-200 group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right column content */}
            <div className="w-full md:w-2/5 px-2 sm:px-6 md:px-10 space-y-5 mt-10 md:mt-0">
              <p className="text-base text-gray-200">
                Nulla pellentesque dignissim enim sit amet venenatis urna.
                Laoreet non curabitur gravida arcu ac tortor dignissim convallis
                Et aenean.netus et malesuada fames enim diam.
              </p>

              {/* Button + Avatar */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="w-full sm:w-auto">
                  <Button text="Shop The Sales" className="w-full sm:w-auto" />
                </div>
                <Image
                  src={avatarCircles}
                  alt="Client avatars"
                  width={100}
                  height={40}
                  className="w-16 sm:w-24 h-auto"
                />
              </div>

              {/* Full width image */}
              <Image
                src={businessWomanImage}
                alt="Business woman"
                width={1200}
                height={600}
                className="object-cover w-full h-80 sm:h-72"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
