import React from 'react'
import StatsItem from './stats-item'

const StatsSection = () => {
    return (
        <section className='py-25 px-35 bg-body text-white'>
            <h2 className='font-serif text-5xl font-bold m-0 text-center mb-18.5'>What We Gave in 2020</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:space-x-17.5 center'>
                <StatsItem amount='$23,766' description='In Student Education Awards'/>
                <StatsItem amount='$9,216' description='In Research Awards & Grants'/>
                <StatsItem amount='$8,041' description='In Achievement Awards'/>
                <StatsItem amount='$3,900' description='In Fellowships Given'/>
            </div>
        </section>
    )
}

export default StatsSection