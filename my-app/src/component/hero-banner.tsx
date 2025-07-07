import React from 'react'
import Link from "next/link";

type Action = { label: string; href: string }

interface HeroBannerProps {
    title: string
    description: string,
    backgroundImage?:string,
    actions?: Action[]
    videoEmbedUrl?: string
}

const HeroBanner = ({ title, description, actions = [], backgroundImage, videoEmbedUrl }: HeroBannerProps) => {
    return (
        <section className='grid grid-cols-1 items-center sm:grid-cols-2 bg-cover bg-center bg-no-repeat text-white' style={{ backgroundImage: "url('/images/BackgroundBanner.png')" }}>
            <div className='w-full text-center p-10 pb-0 sm:py-15 sm:pr-5 md:pl-15 xl:pt-25.5 xl:pl-35 xl:pb-37 xl:pr-10 md:text-left'>
                <h1 className='text-4xl mb-4 xl:text-[3.875rem] font-bold font-ivar'>{title}</h1>
                <p className='text-[1.375rem] font-normal'>{description}</p>
                {actions.length > 0 && (
                    <div className='flex mt-6.5 justify-center sm:justify-start'>
                        {actions.map((btn, i) => (
                            <Link key={i} href={btn.href} className='flex justify-center items-center bg-white text-body text-xl h-12 w-42.5 rounded-full font-semibold no-underline mr-10 last:mr-0'>
                            {btn.label}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
            {backgroundImage ? 
                <div className="w-full h-85 md:h-full bg-bottom-right bg-no-repeat bg-contain flex" style={{ backgroundImage: "url('/images/Banner.png')" }}></div> : 
                <div className="w-full h-100 sm:h-full flex p-10 xl:pl-0 xl:pt-14 xl:pr-35 xl:pb-22.75">
                    <iframe src={videoEmbedUrl} title="Video" className="w-full h-full sm:min-h-75 xl:min-h-91 rounded-lg" frameBorder="0" allowFullScreen/>
                </div>
            }
        </section>
    )
}

export default HeroBanner