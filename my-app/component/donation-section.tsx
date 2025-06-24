import React from 'react'
import Image from "next/image";
import {Donation} from "../mock-data/data"

const DonationSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 text-white">
      <div className="bg-success p-10 xl:px-18 xl:py-13">
        <h4 className="font-ivar text-[2rem] font-bold mb-6">{Donation[0].title}</h4>
        {(Donation[0].description as string[]).map((item,i)=>(
          <p key={i} className="text-lg font-light mb-4">{item}</p>
        ))}
        <a href={Donation[0].href} className="inline-block mt-8 py-4 px-6 xl:px-10 xl:py-4 rounded-full bg-primary text-body text-[1.125rem] font-semibold hover:bg-green-600 transition">{Donation[0].label}</a>
      </div>
      <div className="bg-body p-10 xl:px-18 xl:py-13 flex flex-row items-start justify-between">
        <div className="w-full md:w-2/3">
          <h4 className="font-ivar text-2xl md:text-[2rem] font-bold mb-4">{Donation[1].title}</h4>
          <p className="mb-2 text-base leading-relaxed">{(Donation[1].infomation as string[])[0]}<br />{(Donation[1].infomation as string[])[1]}</p>
          <p className="italic text-lg md:text-xl font-medium mt-6">{Donation[1].description}</p>
          <a href={Donation[1].href} className="inline-block mt-8 py-4 px-6 xl:px-10 xl:py-4 rounded-full bg-primary text-body text-[1.125rem] md:text-lg font-semibold hover:bg-green-600 transition">{Donation[1].label}</a>
        </div>
        <div className="w-1/3 flex justify-center md:justify-end">
          <Image src={Donation[1].img as string} alt="Event" width={200} height={267} className="object-cover  sm:max-w-[150px] md:max-w-full h-auto"/>
        </div>
      </div>
    </section>
  )
}

export default DonationSection