import React from 'react'
import About from './homecomponents/About'
import Service from './homecomponents/Service'
import Address from './homecomponents/Address'
import Product from './homecomponents/Product'

export default function Home() {
  return (
    <section className='container mx-auto'>
      <About/>
      <Service/>
      <Address/>
      <Product/>
    </section>
  )
}
