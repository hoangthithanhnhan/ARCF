import React from 'react'

interface OrganizationProps{
    title:string,
    description:string[]
}

const Organization = ({title,description}:OrganizationProps) => {
    return (
        <div>
            <h3>{title}</h3>
                {description.map((item,i)=>(
                    <p key={i}>{item}</p>
                ))}
        </div>
    )
}

export default Organization