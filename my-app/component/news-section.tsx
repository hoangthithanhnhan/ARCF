"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";


const items = [
  {
    img: "/images/img1.png",
    date: "AUGUST 15, 2024",
    title: "ARCF 2024 Fundraising Event",
    description: "Come together on Nov. 19 with the ARCF and your colleagues and friends to support and advance the respiratory care profession...",
  },
  {
    img: "/images/img2.png",
    date: "MAY 27, 2020",
    title: "59th Respiratory Care Journal Conference",
    description: "The American Respiratory Care Foundation is again honored to provide and unrestricted education grant to the American Association for...",
  },
  {
    img: "/images/img3.png",
    date: "SEPTEMBER 23, 2019",
    title: "Support ARCF When You Use the Amazon Shopping App",
    description: "You can now support the American Respiratory Care Foundation when you make purchases with the Amazon...",
  },
  {
    img: "/images/img1.png",
    date: "AUGUST 15, 2024",
    title: "ARCF 2024 Fundraising Event",
    description: "Come together on Nov. 19 with the ARCF and your colleagues and friends to support and advance the respiratory care profession...",
  },
  {
    img: "/images/img2.png",
    date: "MAY 27, 2020",
    title: "59th Respiratory Care Journal Conference",
    description: "The American Respiratory Care Foundation is again honored to provide and unrestricted education grant to the American Association for...",
  },
  {
    img: "/images/img3.png",
    date: "SEPTEMBER 23, 2019",
    title: "Support ARCF When You Use the Amazon Shopping App",
    description: "You can now support the American Respiratory Care Foundation when you make purchases with the Amazon...",
  },
];

export default function FoundationNewsCarousel() {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const next = () => {
    setIndex((prev) => (prev + itemsPerPage >= items.length ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 < 0 ? items.length - itemsPerPage : prev - 1));
  };

  return (
    <section className="px-35 py-16 bg-white">
      <h2 className='font-serif text-5xl font-bold m-0 text-center mb-19'>Foundation News</h2>
      <div className="flex justify-center gap-6 overflow-hidden max-w-6xl mx-auto">
        {items.slice(index, index + itemsPerPage).map((item, i) => (
          <div key={i} className="relative bg-white rounded-xl w-88 flex-shrink-0 h-125">
            <Image src={item.img} alt={item.title} height={266} width={355} className="relative w-full object-cover rounded-xl" />
            <div className="py-11 px-7 absolute top-50 bg-grey w-[88%] left-1/2 -translate-x-1/2 h-full">
              <p className="text-sm text-success font-bold uppercase mb-1">{item.date}</p>
              <h3 className="text-2xl font-semibold font-semibold text-[#061951] mb-1">{item.title}</h3>
              <p className="text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center gap-4 mt-6">
        <button onClick={prev} className="bg-primary rounded-full p-1 w-6 h-6">
          <ArrowLeft className="flex-shrink-0 text-white h-4 w-4" />
        </button>
        <button onClick={next} className="bg-primary rounded-full p-1 w-6 h-6">
          <ArrowRight className="flex-shrink-0 text-white h-4 w-4"/>
        </button>
      </div>
    </section>
  );
}
