import React from 'react'
import Link from "next/link";



const HeroBanner = () => {
    return (
        <section className='flex bg-cover bg-center bg-no-repeat text-white' style={{ backgroundImage: "url('/images/bg.png')" }}>
            <div className='p-10 xl:p-35 w-1/2'>
                <h1 className='text-6xl font-bold font-serif'>Our Mission</h1>
                <p className='text-xl mt-4'>ARCF is dedicated to promoting respiratory health through research, education, and patient-focused philanthropic activities.</p>
                <div className='flex mt-6.5'>
                    <Link href="/" className='flex justify-center items-center bg-white text-body text-xl h-12 w-42.5 rounded-full font-semibold no-underline mr-10'>Apply</Link>
                    <Link href="/" className='flex justify-center items-center bg-white text-body text-xl h-12 w-42.5 rounded-full font-semibold no-underline'>Donate</Link>
                </div>
            </div>

            <div className="w-1/2 bg-bottom-right bg-no-repeat bg-contain" style={{ backgroundImage: "url('/images/layer2.png')" }}>

            </div>
        </section>
    )
}

export default HeroBanner