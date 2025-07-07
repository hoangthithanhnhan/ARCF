'use client'

import AwardListSection from "@/component/award-list-section"
import DonationSection from "@/component/donation-section"
import MainSection from "@/component/main-section"

import { AwardData } from "@/mock-data"

export default function AwardPage() {
  return (
    <>
      <MainSection {...AwardData} />
      <div className="bg-body py-9.25 text-lg text-white uppercase font-bold text-center"> <span className="border-r-3 pr-3 mr-3">UNDERGRADUATE</span>POST GRADUATE</div>
      <AwardListSection/>
      <DonationSection />
    </>
  )
}