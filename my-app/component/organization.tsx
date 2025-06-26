import React from 'react'
import Member from './member'
import { BoardOfTrustees , ARCFExcutiveOffice, AwardsRecipients } from '../mock-data/data'
import Organization from './organization-info'
import { OrganizationData } from '../mock-data/data'



const OrganizationSection = () => {
  return (
    <>
        <div className='p-12 xl:pt-23.5 xl:pb-24.75 xl:px-35'>
            <Organization {...OrganizationData.boardOfTrustees}/>
            {BoardOfTrustees.map((item,i)=>(
                <div key={i} className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 pt-8.5 pb-17.5 border-b-2 border-body/50'>
                    {item.map((items, i) => (
                        <Member key={i} avatar={items.avatar} organization={items.organization} name={items.name} 
                        address={items.address} experience={items.experience} introduction={items.introduction} />
                    ))}
                </div>
            ))}
            <Organization {...OrganizationData.arcfExcutiveOffice}/>
            {ARCFExcutiveOffice.map((item,i)=>(
                <div key={i} className='grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 pt-8.5 pb-17.5 border-b-2 border-body/50'>
                    {item.map((items, i) => (
                        <Member key={i} avatar={items.avatar} organization={items.organization} name={items.name} 
                        address={items.address} experience={items.experience} introduction={items.introduction} />
                    ))}
                </div>
            ))}
            <Organization {...OrganizationData.awardsRecipients}/>
            {AwardsRecipients.map((item,i)=>(
                <div key={i} className={`grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-7 pt-8.5 ${i!=AwardsRecipients.length-1? 'pb-17.5 border-body/50 border-b-2' : ''}`}>
                    {item.map((items, i) => (
                        <Member key={i} avatar={items.avatar} organization={items.organization} name={items.name} 
                        address={items.address} experience={items.experience} introduction={items.introduction} />
                    ))}
                </div>
            ))}
        </div>
    </>
  )
}

export default OrganizationSection