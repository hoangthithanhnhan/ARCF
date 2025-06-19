import React from 'react'
import Image from "next/image";

const Donation_Section = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 text-white">
      <div className="bg-success px-18 py-13">
        <h4 className="font-serif text-3xl font-bold mb-6">
          Your Donations Support Our Mission
        </h4>
        <p className="text-lg font-light mb-4">
          The American Respiratory Care Foundation is a nonprofit organization formed for the purpose of supporting research, education, and charitable activities.
        </p>
        <p className="text-lg font-light">
          The ARCF seeks to educate the public about respiratory health, assist
          in the training and continuing education of health care providers, and
          improve the quality of our environment.
        </p>
        <a
          href="#"
          className="inline-block mt-8 px-10 py-4 rounded-full bg-primary text-body text-lg font-semibold hover:bg-green-600 transition">
          Donate Now
        </a>
      </div>

      <div className="bg-body px-18 py-13 flex items-start flex-wrap md:flex-nowrap">
        <div className="max-w-2/3">
          <h4 className="font-serif text-3xl font-bold mb-4">
            61st Respiratory Care Journal Conference
          </h4>
          <p className="mb-2 text-base leading-relaxed">
            June 19–21, 2024
            <br />
            Tampa, FL
          </p>
          <p className="italic text-xl font-medium mt-6">
            Pediatric Asthma: Management Across the Continuum of Care
          </p>
          <a
            href="#"
            className="inline-block mt-8 px-10 py-4 rounded-full bg-primary text-body text-lg font-semibold hover:bg-green-600 transition">
            Sponsorship Opportunities
          </a>
        </div>

        <Image
          src="/images/donation.png"
          alt="Event"
          width={200}
          height={267}
          className="object-cover"
        />
      </div>
    </section>
  )
}

export default Donation_Section