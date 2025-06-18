import React from 'react'
import Award_Item from './award-item';

const Award_Section = () => {
    return (
        <section className='p-25'>
            <div className='flex grid-cols-4 gap-17.5 center'>
                <Award_Item imgSrc="/images/GraduationCap.png" title="Student Awards" href="#"/>
                <Award_Item imgSrc="/images/BookOpenText.png" title="Research Awards & Grants" href="#"/>
                <Award_Item imgSrc="/images/Trophy.png" title="Achievement Awards" href="#"/>
                <Award_Item imgSrc="/images/Globe.png" title="International Fellowships" href="#"/>
            </div>
        </section>
    )
}

export default Award_Section