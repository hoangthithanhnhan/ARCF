'use client'
import HeroBanner from '../../../component/hero-banner'
import {Banner} from '../../../mock-data/data'
import Financial from '../../../component/financial'

export default function AboutPage() {
  return (
    <>
      <HeroBanner {...Banner.about} />
      <Financial />
    </>
  )
}

