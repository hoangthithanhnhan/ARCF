'use client'
import HeroBanner from '../../../component/hero-banner'
import {Banner} from '../../../mock-data/data'
import Financial from '../../../component/financial'
import OrganizationSection from '../../../component/organization'
import DonationSection from '../../../component/donation-section'
import EventSection from '../../../component/event-section'

export default function AboutPage() {
  return (
    <>
      <HeroBanner {...Banner.about} />
      <Financial />
      <OrganizationSection/>
      <EventSection/>
      <DonationSection/>
    </>
  )
}