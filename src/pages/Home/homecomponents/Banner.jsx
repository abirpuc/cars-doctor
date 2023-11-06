import React from 'react'
import { banner } from '../../../data/banner'
import SingleBanner from './SingleBanner'
export default function Banner() {
    return (
        <div className="carousel w-full">
            {
                banner.map(ban => <SingleBanner key={ban.id} banner={ban}/>)
            }
        </div>
    )
}
