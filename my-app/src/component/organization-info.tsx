import React from 'react'

interface OrganizationProps {
    title: string,
    description: string[]
}

const Organization = ({ title, description }: OrganizationProps) => {
    return (
        <div className='mb-9 mt-5'>
            <h3 className='text-4xl xl:text-[2.875rem] font-ivar font-bold mb-3'>{title}</h3>
            {description && description.map((item, i) => (
                <p key={i} className='max-w-[32.6875rem] text-lg not-last:mb-5 '>{item}</p>
            ))}
        </div>
    )
}

export default Organization
