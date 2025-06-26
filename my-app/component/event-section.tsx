import React from 'react'

const EventSection = () => {
    return (
        <section className='h-100 bg-cover bg-no-repeat pt-29.75 pb-18.75' style={{ backgroundImage: "url('/images/BackgroundBanner.png')", backgroundSize: '100% 50%' }}>
            <div>
                <h3>Respiratory Care Journal Conferences</h3>
                <div>
                    <div>Since 1982, Respiratory Care has presented Journal Conferences with the most important, timely, and proven information affecting the practice of respiratory everywhere. The proceedings appear in special issues of the Journal both in print and online.

Conference attendance is limited to the faculty and staff of the Journal. Each topic is thoroughly presented by an invited expert, followed by heavy discussion among the faculty. All state-of-the-art papers and discussions are then published in the Journal.</div>
                    <div>Journal Conference are presented under the Auspices of the ARCF. TH ARCF invites corporations to become official sponsors after the topic of the conference is known. 

E-mail us for more information about becoming a sponsors.</div>
                </div>
                <div className='flex'>
                    <div>UPCOMING CONFERENCE
61st Respiratory Care Journal Conference
Pediatric Asthma: Management Across the Continuum of Care</div>
                    <div className='h-100' style={{ backgroundImage: "url('/images/Event.png')", backgroundSize: '100% 50%' }}></div>
                </div>
            </div>
        </section>
    )
}

export default EventSection
