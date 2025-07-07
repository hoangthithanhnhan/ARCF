import React from 'react'

interface MainSectionProps {
    title: string;
}
const MainSection = ({title}:MainSectionProps) => {
  return (
    <div className='font-ivar text-[4rem] font-bold leading-none text-white bg-no-repeat bg-cover bg-center px-35 pt-25.5 pb-18.5' style={{backgroundImage:"url('/images/BackgroundBanner.png')"}}>{title}</div>
  )
}

export default MainSection