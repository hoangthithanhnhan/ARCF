import React from 'react'
import Link from "next/link";
import { FinancialData } from '../mock-data/data';

const Financial = () => {
    return (
        <section className='bg-body py-13.75 px-64.5 text-white flex items-center justify-between'>
            <div className='w-2/3'>
                <p className='font-ivar font-bold text-[2.875rem]'>{FinancialData.title}</p>
                <p className='text-lg'>{FinancialData.description}</p>
            </div>
            <div className='w-1/3'>
                <Link className='bg-primary text-body text-lg py-4.5 px-11.5 rounded-full right-0' href={FinancialData.action.href}>{FinancialData.action.label}</Link>
            </div>
        </section>
    )
}

export default Financial