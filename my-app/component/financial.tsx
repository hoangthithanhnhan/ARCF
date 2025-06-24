import React from 'react'
import Link from "next/link";
import { FinancialData } from '../mock-data/data';

const Financial = () => {
    return (
        <section className='bg-body p-10 md:py-15 md:px-20 xl:py-13.75 xl:px-64.5 text-white flex flex-col md:flex-row items-center justify-between text-center xl:text-left'>
            <div className='xl:w-2/3'>
                <p className='font-ivar font-bold text-[2.875rem]'>{FinancialData.title}</p>
                <p className='text-lg'>{FinancialData.description}</p>
            </div>
            <div className='xl:w-1/3 flex justify-center xl:justify-end'>
                <Link className='bg-primary mt-5 xl:m-0 text-body text-lg py-3.5 px-11.5 rounded-full font-semibold' href={FinancialData.action.href}>{FinancialData.action.label}</Link>
            </div>
        </section>
    )
}

export default Financial