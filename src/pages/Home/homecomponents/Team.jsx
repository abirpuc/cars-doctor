import React from 'react'
import SectionHeading from '../../../components/Heading/SectionHeading'
import PersonCard from '../../../components/card/PersonCard'

export default function Team() {
  return (
    <section className='my-12'>
        <SectionHeading
            name="Our Team"
            title="Meet Our Team"
            text="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
        <div>
          <PersonCard/>
        </div>
    </section>
  )
}
