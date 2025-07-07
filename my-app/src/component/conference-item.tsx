import React from 'react'

interface ConferenceItemProps {
    heading: string;
    description: string;
    date:string;
}

const ConferenceItem  = ({heading, description, date } : ConferenceItemProps ) => {
    return (
        <div>
            <p className='font-bold text-[1rem] uppercase'>{heading}</p>
            <p className='italic text-[1rem] font-normal'>{`"${description}"`}</p>
            <p className='text-[1rem]'>{date}</p>
        </div>
    )
}

export default ConferenceItem 