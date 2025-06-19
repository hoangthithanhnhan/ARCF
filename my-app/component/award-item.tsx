import React from 'react'
import Link from "next/link";
import Image from "next/image";

interface Award_Item_Props {
    imgSrc: string;
    title: string;
    href: string;
}

const Award_Item  = ({ imgSrc, title, href } : Award_Item_Props ) => {
    return (
        <div className="flex flex-col items-center justify-center ">
            <Image width={82} height={82} src={imgSrc} alt={title} className="object-cover"/>
            <h3 className="text-3xl font-semibold text-center mt-2 h-full">{title}</h3>
            <Link href={href} className='mt-6 bg-primary text-body text-xl font-semibold px-10 py-3 rounded-full no-underline inline-block text-center items-center'>Appy Now</Link>
        </div>
    )
}

export default Award_Item 