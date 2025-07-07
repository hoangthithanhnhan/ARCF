import React from 'react'
import StatsItem from './stats-item'
import { Stats } from '../mock-data/data'

const StatsSection = () => {
    return (
        <section className='p-15 xl:pt-16 xl:pb-30 bg-body text-white'>
            <h2 className='font-ivar text-4xl xl:text-[2.875rem] font-bold m-0 text-center mb-0 xl:mb-10'>{Stats.title}</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7 center'>
                {Stats.item.map((item,i)=>(
                    <StatsItem key={i} amount={item.amount} description={item.label}/>
                ))}
            </div>
        </section>
    )
}

export default StatsSection