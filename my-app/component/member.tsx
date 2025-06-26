import React, { useState } from 'react'
import Image from "next/image";
import { Plus , Minus } from "lucide-react";

interface MemberProps {
    avatar?:string,
    organization: string
    name: string,
    address?:string,
    experience?: string,
    introduction?: string
}

const Member = ({ avatar, organization, name, experience, address, introduction }: MemberProps) => {
    const [showIntro, setShowIntro] = useState(false);

    const toggleIntro = () => {
    setShowIntro(!showIntro);
  };

    return (
        <div>
            <Image src={avatar  || '/images/DefaultAvatar.png'} alt="Avatar" width={306} height={306} className="mb-8 w-full object-cover"/>
            <div>
                {organization && <p className="text-lg font-bold uppercase text-success">{organization}</p>}
                {name && <p className="text-2xl">{name}</p>}
                {experience && <p className='text-lg font-semibold mt-4.5'>{experience}</p>}
                {address && experience ? <p className='text-lg'>{address}</p> : address && !experience ? <p className='text-lg mt-5'>{address}</p> : null}
                {introduction && <button onClick={toggleIntro} className='flex text-success text-lg mt-4.5'>{showIntro ? <Minus/> : <Plus/>}Professional Highlights</button> }
                {showIntro && (
                    <p className="mt-3 transition-all text-lg">{introduction}</p>
                )}
            </div>
        </div>
    )
}

export default Member