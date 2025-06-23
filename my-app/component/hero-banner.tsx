import React from 'react'
import Link from "next/link";



const HeroBanner = () => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 bg-cover bg-center bg-no-repeat text-white' style={{ backgroundImage: "url('/images/bg.png')" }}>
            <div className='w-full text-center p-10 pb-0 sm:py-10 sm:pr-5 sm:pl-15 xl:pt-25.5 xl:pl-35 xl:pb-37 xl:pr-10 sm:text-left'>
                <h1 className='text-4xl mb-5 xl:text-6xl font-bold font-ivar'>Our Mission</h1>
                <p className='text-[1.4rem] font-light'>ARCF is dedicated to promoting respiratory health through research, education, and patient-focused philanthropic activities.</p>
                <div className='flex mt-6.5 justify-center sm:justify-start'>
                    <Link href="/" className='flex justify-center items-center bg-white text-body text-xl h-12 w-42.5 rounded-full font-semibold no-underline mr-10'>Apply</Link>
                    <Link href="/" className='flex justify-center items-center bg-white text-body text-xl h-12 w-42.5 rounded-full font-semibold no-underline'>Donate</Link>
                </div>
            </div>

            <div className="w-full h-85 sm:h-full  bg-bottom-right bg-no-repeat bg-contain flex" style={{ backgroundImage: "url('/images/layer2.png')" }}></div>
        </section>
    )
}

export default HeroBanner