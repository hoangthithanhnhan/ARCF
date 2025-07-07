import React from 'react'
import {Conference} from "../mock-data/data"
import ConferenceItem from './conference-item'

const ConferenceSection = () => {
  return (
    <section className=" py-10 px-15 xl:px-35 xl:pb-19.5">
      <h3 className='font-ivar text-3xl xl:text-[2rem] border-body/50 border-b-2 pb-5.75 mb-8.75'>{Conference.title}</h3>
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-x-15.5 gap-y-8.75">
        {Conference.content.map((item, i) => (
                <ConferenceItem key={i} heading={item.heading} description={item.description} date={item.date} />
            ))}
      </div>
    </section>
  )
}

export default ConferenceSection