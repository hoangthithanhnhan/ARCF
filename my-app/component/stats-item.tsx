import React from 'react'

interface Stats_Item_Props {
    amount: string;
    description: string;
}

const Stats_Item  = ({ amount, description } : Stats_Item_Props ) => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 xl:mt-0">
            <p className='font-light text-7xl text-primary'>{amount}</p>
            <p className='text-3xl font-semibold text-center h-full'>{description}</p>
        </div>
    )
}

export default Stats_Item 