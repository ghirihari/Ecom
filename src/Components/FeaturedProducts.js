import React from 'react'
import ProductCard from './ProductCard'

const FeaturedProducts = (props) => {
    return (
        <div className="featuredContainer container">
            <div className='sub-title'>Featured Products</div>
            <div className='productFlex'>
                {props.products.map((item)=><ProductCard key={item.name} product={item}/>)}
            </div>
        </div>
        
    )
}

export default FeaturedProducts
