import React from 'react'
import About from './homecomponents/About'
import Service from './homecomponents/Service'
import Address from './homecomponents/Address'
import Product from './homecomponents/Product'
import Team from './homecomponents/Team'
import CoreFeature from './homecomponents/CoreFeature'
import Testimonial from './homecomponents/Testimonial'
import Banner from './homecomponents/Banner'

export default function Home() {
  return (
    <section className='container mx-auto'>
      <Banner/>
      <About/>
      <Service/>
      <Address/>
      <Product/>
      <Team/>
      <CoreFeature/>
      <Testimonial/>
    </section>
  )
}
