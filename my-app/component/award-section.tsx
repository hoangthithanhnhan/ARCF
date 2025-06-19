import React from 'react'
import AwardItem from './award-item';

const AwardSection = () => {
    return (
        <section className='p-25'>
            <h2 className='font-serif text-5xl font-bold m-0 text-center mb-8.5'>How We Give</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:space-x-17.5 center'>
                <AwardItem imgSrc="/images/GraduationCap.png" title="Student Awards" href="#"/>
                <AwardItem imgSrc="/images/BookOpenText.png" title="Research Awards & Grants" href="#"/>
                <AwardItem imgSrc="/images/Trophy.png" title="Achievement Awards" href="#"/>
                <AwardItem imgSrc="/images/Globe.png" title="International Fellowships" href="#"/>
            </div>
        </section>
    )
}

export default AwardSection