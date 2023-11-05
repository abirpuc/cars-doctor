import React from 'react'
import SectionHeading from '../../../components/Heading/SectionHeading'
import FeatureCard from '../../../components/card/FeatureCard'
import { feature } from '../../../data/Features'

export default function CoreFeature() {
  return (
    <section className='my-12'>
        <SectionHeading
            name="Core Feature"
            title="Why Chose Us?"
            text="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
        <div className='flex flex-col md:flex-row justify-evenly items-center my-8'>
            {
                feature.map(fea => <FeatureCard key={fea.id} feature={fea}/>)
            }
        </div>
    </section>
  )
}
