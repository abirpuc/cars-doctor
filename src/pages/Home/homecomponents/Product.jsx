import React from 'react'
import SectionHeading from '../../../components/Heading/SectionHeading'
import ProductCard from '../../../components/card/ProductCard'
import { products } from '../../../data/products'
import Button from '../../../components/Button'
import { Link } from 'react-router-dom'

export default function Product() {
    return (
        <section className='my-12 text-center'>
            <SectionHeading
                name="product"
                title="Brows Our Products"
                text="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            />
            <div className='my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {
                products.slice(0,6).map(pro =><ProductCard key={pro.id} product={pro}/>)
            }
            </div>
            <Link to="/products"><Button/></Link>
        </section>
    )
}
