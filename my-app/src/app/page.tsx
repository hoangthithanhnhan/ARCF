'use client'

import Award_Section from "../../component/award-section";
import Donation_Section from "../../component/donation-section";
import Hero_Banner from "../../component/hero-banner";
import FoundationNewsCarousel from "../../component/news-section";
import Stats_Section from "../../component/stats-section";


export default function Home() {
  return (
    <>
    <Hero_Banner/>
    <Award_Section />
    <Stats_Section /> <FoundationNewsCarousel/> <Donation_Section/> </>
  );
}
