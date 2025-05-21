"use client"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function ReviewsAndRatings() {
  const reviews = [
    {
      name: "John Doe",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta repudiandae impedit consequuntur.",
    },
    {
      name: "Jane Smith",
      text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      name: "Alice Johnson",
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Bob Williams",
      text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      name: "Eve Clark",
      text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      name: "Mike Brown",
      text: "Praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate.",
    },
  ];

  return (
    <div className="flex items-center justify-center bg-black px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-[35%_65%] max-w-7xl w-full mx-auto gap-8">
        {/* Left Section - Sticky */}
        <div className="flex flex-col justify-center items-start text-white gap-3 sticky top-0">
          <h1 className="font-normal text-base uppercase leading-2 tracking-[3px]">Review & Ratings</h1>
          <p className="font-medium text-3xl sm:text-5xl flex flex-col gap-2">
            <span>Customers</span>
            <span>Speak</span>
          </p>
          <p className="text-sm sm:text-base">
            Pretium lectus quam id leo in. In massa tempor nec feugiat nisl pretium fusce.
            Libero enim sed faucibus turpis in eu mi bibendum neque. Eget duis at tellus at urna.
          </p>
        </div>

        {/* Right Section - Swiper Carousel */}
        <div className="w-full">
          <Swiper
            modules={[Pagination]}
            spaceBetween={30}
            slidesPerView={1} // Default for mobile
            loop={true}
            pagination={{ clickable: true }}
            className="mySwiper"
            breakpoints={{
              // Tablet and up
              768: {
                slidesPerView: 2,
              },
              // Desktop
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {reviews.map((review, index) => (
              <SwiperSlide key={index}>
                <div className="bg-[#2b2624ca] flex flex-col justify-center items-start text-white gap-5 w-full h-[330px] px-6 py-8 rounded-lg shadow-lg">
                  <div className="flex gap-4">
                    <Image
                      src="/dummy.png"
                      alt="User Avatar"
                      width={90}
                      height={90}
                      className="w-[60px] h-[60px] sm:w-[90px] sm:h-[90px] object-cover rounded-full"
                    />
                    <div className="flex flex-col justify-center">
                      <h1 className="font-normal text-sm sm:text-base">{review.name}</h1>
                      <div className="flex gap-1 text-yellow-400 text-xl">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>&#9733;</span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-2 text-sm line-clamp-4">{review.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}