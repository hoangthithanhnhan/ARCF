import React from 'react'
import Link from "next/link";

type Action = { label: string; href: string }

interface HeroBannerProps {
  title: string
  description: string,
  background_image?:string,
  actions?: Action[]
  video_embed_url?: string
}

const HeroBanner = ({ title, description, actions = [], background_image, video_embed_url }: HeroBannerProps) => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 bg-cover bg-center bg-no-repeat text-white' style={{ backgroundImage: "url('/images/BackgroundBanner.png')" }}>
            <div className='w-full text-center p-10 pb-0 sm:py-10 sm:pr-5 sm:pl-15 xl:pt-25.5 xl:pl-35 xl:pb-37 xl:pr-10 sm:text-left'>
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
            {/* <div className="w-full h-85 sm:h-full  bg-bottom-right bg-no-repeat bg-contain flex" style={{ backgroundImage: "url('/images/Banner.png')" }}></div> */}
            {background_image ? 
                (<div className="w-full h-85 sm:h-full  bg-bottom-right bg-no-repeat bg-contain flex" style={{ backgroundImage: "url('/images/Banner.png')" }}></div>) : 
                <div className="w-full h-85 sm:h-full flex pt-14 pr-35 pb-22.75">
                    <iframe src={video_embed_url} title="Video" className="w-full h-full max-h-[400px] rounded-lg" frameBorder="0" allowFullScreen/>
                </div>
            }
            {/* <div className="w-full h-85 sm:h-full bg-bottom-right bg-no-repeat bg-contain flex" style={background_image? { backgroundImage: `url(${background_image})` } : undefined}>
                {video_embed_url ? (<iframe src={video_embed_url} title="Video" className="w-full h-full max-h-[400px] rounded-lg" frameBorder="0" allowFullScreen/>) : null}
            </div> */}
        </section>
        )
}

export default HeroBanner