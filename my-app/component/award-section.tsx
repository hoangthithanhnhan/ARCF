import React from 'react'
import Award_Item from './award-item';

const Award_Section = () => {
    return (
        <section className='p-25'>
            <h2 className='font-serif text-5xl font-bold m-0 text-center mb-8.5'>How We Give</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 xl:space-x-17.5 center'>
                <Award_Item imgSrc="/images/GraduationCap.png" title="Student Awards" href="#"/>
                <Award_Item imgSrc="/images/BookOpenText.png" title="Research Awards & Grants" href="#"/>
                <Award_Item imgSrc="/images/Trophy.png" title="Achievement Awards" href="#"/>
                <Award_Item imgSrc="/images/Globe.png" title="International Fellowships" href="#"/>
            </div>
        </section>
    )
}

export default Award_Section