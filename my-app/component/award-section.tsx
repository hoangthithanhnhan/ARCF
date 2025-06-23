import React from 'react'
import AwardItem from './award-item';
import { Award } from "../mock-data/data";

const AwardSection = () => {
    return (
        <section className='p-15 sm:p15 xl:pt-18 xl:pb-27 xl:px-35'>
            <h2 className='font-ivar text-4xl xl:text-5xl font-bold text-center mb-0 xl:mb-8.5'>How We Give</h2>
            <div className='xl:gap-40 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 center'>
            {Award.map((item, i) => (
                <AwardItem key={i} imgSrc={item.img} title={item.label} href={item.href}/>
            ))}
            </div>
        </section>
    )
}

export default AwardSection