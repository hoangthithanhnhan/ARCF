import React from 'react'
import Link from "next/link";



const HeroBanner = () => {
    return (
        <section className='flex bg-cover bg-center bg-no-repeat text-white' style={{ backgroundImage: "url('/images/bg.png')" }}>
            <div className='w-full text-center py-15 px-20 xl:pt-25.5 xl:pl-35 xl:pb-37 xl:pr-10 lg:w-1/2 xl:text-left'>
                <h1 className='text-64 font-bold font-ivar'>Our Mission</h1>
                <p className='text-22 font-light'>ARCF is dedicated to promoting respiratory health through research, education, and patient-focused philanthropic activities.</p>
                <div className='flex mt-6.5 justify-center xl:justify-start'>
                    <Link href="/" className='flex justify-center items-center bg-white text-body text-xl h-12 w-42.5 rounded-full font-semibold no-underline mr-10'>Apply</Link>
                    <Link href="/" className='flex justify-center items-center bg-white text-body text-xl h-12 w-42.5 rounded-full font-semibold no-underline'>Donate</Link>
                </div>
            </div>

            <div className="w-1/2 bg-bottom-right bg-no-repeat bg-contain hidden lg:flex" style={{ backgroundImage: "url('/images/layer2.png')" }}>

            </div>
        </section>
    )
}

export default HeroBanner