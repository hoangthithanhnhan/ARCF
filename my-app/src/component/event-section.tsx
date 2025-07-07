import React from 'react'
import {Respiratory} from "../mock-data/data"

const EventSection = () => {
    return (
        <section className='bg-cover bg-no-repeat py-10 px-15 xl:pt-29.75 xl:pb-18.75 xl:p-35 text-white' style={{ backgroundImage: "url('/images/BackgroundBanner.png')", backgroundSize: '100% 73%' }}>
            <div>
                <h3 className='font-ivar text-3xl mb-5 xl:text-[2.875rem]'>{Respiratory.conferences.title}</h3>
                <div className='grid xl:grid-cols-2 xl:gap-12.5 text-lg mb-10 xl:mb-20.25'>
                    <div>
                    {Respiratory.conferences.description[0].map((item,i)=>(
                        <p className='last:mt-6' key={i}>{item}</p>
                    ))}
                    </div>
                    
                    <div>
                    {Respiratory.conferences.description[1].map((item,i)=>(
                        <p className='mt-6 xl:mt-0 last:font-bold last:mt-6' key={i}>{item}</p>
                    ))}
                    </div>
                </div>
                <div className='flex flex-col xl:flex-row'>
                    <div className='bg-body w-full xl:w-[57%] rounded-t-xl xl:rounded-l-xl xl:rounded-r-none p-10 xl:pt-20.25 xl:pl-20.75 xl:pb-19.5 xl:pr-6'>
                        <p className='uppercase font-bold text-lg text-primary'>{Respiratory.upcoming.label}</p> 
                        <p className='text-xl'>{Respiratory.upcoming.title}</p>
                        <p className='text-3xl xl:text-[2rem] font-ivar xl:max-w-129.25 mt-4.75 mb-6'>{Respiratory.upcoming.mainTitle}</p>
                        <p className='text-lg font-bold'>{Respiratory.upcoming.coChairsTitle}</p>
                        {Respiratory.upcoming.coChairs.map((item,i)=>(
                            <p key={i} className='text-xl'>{item}</p>
                        ))}
                        <p className='text-xl font-bold mt-10'>{Respiratory.upcoming.date}</p>
                    </div>
                    <div className='bg-cover w-full xl:w-[43%] bg-no-repeat bg-center flex h-100 xl:h-auto rounded-b-xl xl:rounded-l-none xl:rounded-r-xl' style={{ backgroundImage: "url('/images/Event.jpg')"}}></div>
                </div>
            </div>
        </section>
    )
}

export default EventSection
