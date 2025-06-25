'use client'
import HeroBanner from '../../../component/hero-banner'
import {Banner} from '../../../mock-data/data'
import Financial from '../../../component/financial'
import Organization from '../../../component/organization-info'
import { OrganizationInfo } from '../../../mock-data/data'

export default function AboutPage() {
  return (
    <>
      <HeroBanner {...Banner.about} />
      <Financial />
      <Organization {...OrganizationInfo.boardOfTrustees}/>
    </>
  )
}

