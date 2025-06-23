import React from 'react'

interface StatsItemProps {
    amount: string;
    description: string;
}

const StatsItem  = ({ amount, description } : StatsItemProps ) => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 xl:mt-0">
            <p className='font-light text-7xl text-primary'>{amount}</p>
            <p className='text-2xl xl:max-w-64 font-semibold text-center h-full'>{description}</p>
        </div>
    )
}

export default StatsItem 