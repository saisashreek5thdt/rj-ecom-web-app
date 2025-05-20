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
    <section className="w-full overflow-hidden">
      <div className="flex flex-col md:flex-row min-h-[600px]">
        {/* Left image */}
        <div className="w-full md:w-2/5 relative h-64 md:h-auto">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${businessManImage})`,
              backgroundPosition: "center 30%",
            }}
          />
        </div>

        {/* Right side with background and overlay */}
        <div className="w-full md:w-3/5 relative">
          {/* Fabric texture background */}
          <div
            className="absolute inset-0 bg-cover bg-center z-0 opacity-40"
            style={{ backgroundImage: `url(${fabricTexture})` }}
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-opacity-50 z-10" />

          {/* Main content */}
          <div className="relative z-20 p-8 md:p-12 text-white h-full flex items-center">
            <div className="grid grid-cols-1 md:grid-rows-2">
              {/* Title */}
              <div>
                <p className="text-lg uppercase tracking-widest text-gray-3002">
                  COOL LOOK
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight">
                  We comprehend your style needs and create{" "}
                  <span className="text-[#b2996e]">wonderful clothing</span>
                </h2>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                {[
                  { value: "49+", label: "Tailors" },
                  { value: "21M", label: "Reviews" },
                  { value: "56k", label: "Bookings" },
                  { value: "774+", label: "Clients" },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-transparent bg-opacity-50 p-2 flex flex-col items-center justify-center rounded"
                  >
                    <p className="text-3xl text-[#b2996e] font-semibold mb-1">
                      {stat.value}
                    </p>
                    <p className="uppercase text-xs tracking-widest text-gray-200">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-rows-2">
              {/* Floating card (description + CTA) */}
              <div className="p-2 text-gray-200 rounded mb-4">
                <p className="text-sm mb-2">
                  Nulla pellentesque dignissim enim sit amet venenatis urna.
                </p>
                <p className="text-sm mb-2">
                  Laoreet non curabitur gravida arcu ac tortor dignissim
                  convallis aenean.
                </p>
                <p className="text-sm">
                  Et netus et malesuada fames enim diam.
                </p>
              </div>
              {/* Button + avatars */}
              <div className="flex items-center justify-around gap-10">
                <Button text={`Shop The Sales`} />
                <img
                  src={avatarCircles}
                  alt="Client avatars"
                  className="h-12 w-auto"
                />
              </div>
              <Image
                src="/blog-10-300x180.webp"
                alt="image"
                width={460}
                height={230}
                className="object-cover"
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
