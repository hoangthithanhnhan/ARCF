import React from 'react'
import Image from "next/image";

const DonationSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 text-white">
      <div className="bg-success p-10 xl:px-18 xl:py-13">
        <h4 className="font-ivar text-3xl font-bold mb-6"> Your Donations Support Our Mission</h4>
        <p className="text-lg font-light mb-4">The American Respiratory Care Foundation is a nonprofit organization formed for the purpose of supporting research, education, and charitable activities.</p>
        <p className="text-lg font-light"> The ARCF seeks to educate the public about respiratory health, assist in the training and continuing education of health care providers, and improve the quality of our environment.</p>
        <a href="#" className="inline-block mt-8 py-4 px-6 xl:px-10 xl:py-4 rounded-full bg-primary text-body text-base font-semibold hover:bg-green-600 transition">Donate Now</a>
      </div>

      <div className="bg-body p-10 xl:px-18 xl:py-13 flex flex-row items-start justify-between">
        <div className="w-full md:w-2/3">
          <h4 className="font-ivar text-2xl md:text-3xl font-bold mb-4">61st Respiratory Care Journal Conference</h4>
          <p className="mb-2 text-base leading-relaxed">June 19–21, 2024 <br />Tampa, FL</p>
          <p className="italic text-lg md:text-xl font-medium mt-6">Pediatric Asthma: Management Across the Continuum of Care</p>
          <a href="#" className="inline-block mt-8 py-4 px-6 xl:px-10 xl:py-4 rounded-full bg-primary text-body text-base md:text-lg font-semibold hover:bg-green-600 transition">Sponsorship Opportunities</a>
        </div>
        <div className="w-1/3 flex justify-center md:justify-end">
          <Image src="/images/donation.png" alt="Event" width={200} height={267} className="object-cover  sm:max-w-[150px] md:max-w-full h-auto"/>
        </div>
      </div>
    </section>
  )
}

export default DonationSection