import React from 'react'
import Stats_Item from './stats-item'

const Stats_Section = () => {
    return (
        <section className='py-25 px-35 bg-body text-white'>
            <h2 className='font-serif text-5xl font-bold m-0 text-center mb-18.5'>What We Gave in 2020</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:space-x-17.5 center'>
                <Stats_Item amount='$23,766' description='In Student Education Awards'/>
                <Stats_Item amount='$9,216' description='In Research Awards & Grants'/>
                <Stats_Item amount='$8,041' description='In Achievement Awards'/>
                <Stats_Item amount='$3,900' description='In Fellowships Given'/>
            </div>
        </section>
    )
}

export default Stats_Section