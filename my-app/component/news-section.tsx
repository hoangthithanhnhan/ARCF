"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { News } from "../mock-data/data";

export default function FoundationNewsCarousel() {
  return (
    <section className="p-15 xl:pt-16 xl:pb-30 xl:px-35 bg-white">
      <h2 className="font-ivar text-4xl xl:text-[2.875rem] font-bold text-center mb-10 xl:mb-19">Foundation News</h2>
      <div className="mx-auto relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          spaceBetween={83}
          slidesPerView={1}
          loop={true}
          breakpoints={{
            600: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {News.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="rounded-2xl h-full flex flex-col">
                <div className="aspect-[4/3] relative">
                  <Image src={item.img} alt={item.title} fill className="object-cover rounded-xl h-full"/>
                </div>
                <div className="-mt-12 mx-4 bg-grey p-6 relative flex flex-col h-full overflow-visible">
                  <p className="text-base text-success font-semibold uppercase mb-2">{item.date}</p>
                  <h3 className="text-lg font-semibold xl:text-2xl mb-2">{item.title}</h3>
                  <p className="text-base xl:text-lg line-clamp-5 ">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center gap-4 mt-6">
          <button className="swiper-prev bg-primary rounded-full p-1 w-6 h-6">
            <ArrowLeft className="flex-shrink-0 text-white h-4 w-4"/>
          </button>
          <button className="swiper-next bg-primary rounded-full p-1 w-6 h-6">
            <ArrowRight className="flex-shrink-0 text-white h-4 w-4"/>
          </button>
        </div>
      </div>
    </section>
  );
}
