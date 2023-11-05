import React from 'react'
import SectionHeading from '../../../components/Heading/SectionHeading'
import TestimonialCard from '../../../components/card/TestimonialCard'

export default function Testimonial() {
  return (
    <section className='my-12'>
        <SectionHeading
            name="Testimonial"
            title="What Customer Says"
            text="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
        <div className='my-4'>
            <TestimonialCard/>
        </div>
    </section>
  )
}
