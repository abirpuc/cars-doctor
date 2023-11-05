import React, { useState } from 'react'
import { products } from '../../data/products'
import ProductCard from '../../components/card/ProductCard'
import Button from '../../components/Button'

export default function Products() {
    const [productsItem, setProductsItem] = useState(products)
    const [viewProducts, setViewProducts] = useState(6)

    const handleButton=()=>{
        setViewProducts(viewProducts + 6)
    }
    return (
        <div className='min-h-screen'>
            <h1 className='text-cyan-600 font-bold text-4xl my-8'>Our All Products</h1>
            <div className='my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {
                    productsItem.slice(0, viewProducts).map(pro => <ProductCard key={pro.id} product={pro} />)
                }
            </div>
            <div className='text-center my-8 mb-12'>
                {
                   productsItem.length > viewProducts && productsItem.length >= viewProducts && <Button handleButton={handleButton} name="Show More"/>
                }
            </div>
        </div>
    )
}
