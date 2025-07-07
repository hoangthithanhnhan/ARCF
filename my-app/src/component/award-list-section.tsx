import React from 'react'
import Organization from "@/component/organization-info"
import { OrganizationData } from '@/mock-data'

const AwardListSection = () => {
    return (
        <section className='py-12 xl:py-23.5 px-4 xl:px-35'>
            <Organization {...OrganizationData.undergraduate} />
        </section>
    )
}

export default AwardListSection