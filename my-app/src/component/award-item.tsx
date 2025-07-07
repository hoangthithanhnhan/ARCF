import React from 'react'
import Link from "next/link";
import Image from "next/image";

interface AwardItemProps {
    imgSrc: string;
    title: string;
    href: string;
}

const AwardItem  = ({ imgSrc, title, href } : AwardItemProps ) => {
    return (
        <div className="flex flex-col items-center justify-center mt-5 sm:mt-10 xl:mt-0 ">
            <Image width={82} height={82} src={imgSrc} alt={title} className="object-cover"/>
            <h3 className="text-[1.75rem] w-full font-semibold text-center mt-2 h-full">{title}</h3>
            <Link href={href} className='mt-6 bg-primary text-body text-xl font-semibold px-10 py-2.5 rounded-full no-underline inline-block text-center items-center'>Appy Now</Link>
        </div>
    )
}

export default AwardItem 