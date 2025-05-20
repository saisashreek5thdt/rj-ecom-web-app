import Image from "next/image";
import React from "react";

export default function AboutUS() {
  return (
    <>
      <section className="relative w-full text-neutral-800 py-10 px-6 md:px-16 lg:px-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/section-bg.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            className="z-0"
          />
          <div className="absolute inset-0 bg-black opacity-40 z-10" />
        </div>

        {/* Main Content */}
        <div className="relative z-20 grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side: Image */}
          <div className="w-full h-full">
            <Image
              src="/aboutIMG1.jpg"
              alt="Business person"
              width={600}
              height={700}
              className="rounded-xl object-cover w-full h-full max-h-[600px]"
            />
          </div>

          {/* Right Side: Text and Stats */}
          <div className="space-y-6 text-white">
            <h4 className="uppercase text-sm tracking-widest text-gray-200">
              Cool Look
            </h4>
            <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
              We comprehend your <br />
              style needs and create <br />
              <span className="text-[#c6aa87]">wonderful clothing</span>
            </h2>
            <p className="text-sm md:text-base text-gray-200 max-w-lg">
              Nulla pellentesque dignissim enim sit amet venenatis urna. Laoreet
              non curabitur gravida arcu ac tortor dignissim convallis aenean.
            </p>

            {/* Avatars + CTA */}
            <div className="flex items-center gap-4">
              <h3 className="bg-[#c6aa87] hover:bg-[#b2996e] text-white px-6 py-2 rounded-full font-medium transition cursor-pointer">
                Shop The Sales
              </h3>
              <div className="flex -space-x-3">
                <Image
                  src="/rating-image-1a-300x113.webp"
                  alt="Rating"
                  width={150}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6 text-center">
              {[
                { number: "49+", label: "Tailors" },
                { number: "21M", label: "Reviews" },
                { number: "56k", label: "Bookings" },
                { number: "774+", label: "Clients" },
              ].map((item, idx) => (
                <div key={idx}>
                  <p className="text-3xl font-semibold text-[#c6aa87]">
                    {item.number}
                  </p>
                  <p className="text-sm uppercase text-gray-300 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
