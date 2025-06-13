"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaInstagram } from "react-icons/fa";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const images = [
  {
    src: "/social_insta/hero1.jpg",
    alt: "/social_instaImage 1",
    content: "",
    date: "August 04, 2022",
  },
  {
    src: "/social_insta/hero2.jpg",
    alt: "Image 2",
    content: "",
    date: "September 15, 2023",
  },
  {
    src: "/social_insta/hero5.jpg",
    alt: "Image 3",
    content: "",
    date: "July 20, 2021",
  },
  {
    src: "/social_insta/hero6.jpg",
    alt: "Image 4",
    content: "",
    date: "October 08, 2020",
  },
];

export default function InstagramZoomIn() {
  return (
    <div className="w-full">
      {/* Mobile Swiper */}
      <div className="md:hidden">
        <Swiper
          modules={[Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square overflow-hidden group relative cursor-pointer">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-white p-4 text-center">
                    <p className="text-sm">{img.content}</p>
                    <p className="text-xs mt-2 text-gray-300">{img.date}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 w-full">
        {images.map((img, index) => (
          <div
            key={index}
            className="aspect-square overflow-hidden group relative cursor-pointer"
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={500}
              height={500}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-around">
              <p className="text-sm text-white text-center">{img.content}</p>
              <p className=" text-4xl">
                <FaInstagram />
              </p>
              <p className="text-xs mt-2 text-gray-300  text-center">
                {img.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
