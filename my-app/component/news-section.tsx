"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { NewsData } from "../mock_data/data";

export default function FoundationNewsCarousel() {
  return (
    <section className="pt-16 px-35 pb-18.5 bg-white">
      <h2 className="font-ivar text-46 font-bold text-center mb-19">Foundation News</h2>
      <div className="mx-auto relative">
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: ".swiper-next",
            prevEl: ".swiper-prev",
          }}
          spaceBetween={83}
          slidesPerView={3}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {NewsData.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative bg-white rounded-xl w-full h-133">
                <Image src={item.img} alt={item.title} height={266} width={355} className="w-full object-cover rounded-xl"
                />
                <div className="py-11 px-7 absolute top-50.5 bg-grey w-[88%] left-1/2 -translate-x-1/2 h-full">
                  <p className="text-base text-success font-bold uppercase mb-1">{item.date}</p>
                  <h3 className="text-2xl font-semibold text-[#061951] mb-1">{item.title}</h3>
                  <p className="text-lg line-clamp-5">{item.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="swiper-prev bg-primary rounded-full p-1 w-6 h-6">
            <ArrowLeft className="flex-shrink-0 text-white h-4 w-4" />
          </button>
          <button className="swiper-next bg-primary rounded-full p-1 w-6 h-6">
            <ArrowRight className="flex-shrink-0 text-white h-4 w-4"/>
          </button>
        </div>
      </div>
    </section>
  );
}
