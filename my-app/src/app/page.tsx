'use client'

import AwardSection from "../component/award-section";
import DonationSection from "../component/donation-section";
import HeroBanner from "../component/hero-banner";
import FoundationNewsCarousel from "../component/news-section";
import StatsSection from "../component/stats-section";
import {Banner} from "@/mock-data/banner";


export default function Home() {
  return (
    <>
    <HeroBanner {...Banner.homePage}/>
    <AwardSection />
    <StatsSection /> <FoundationNewsCarousel/> <DonationSection/> </>
  );
}
