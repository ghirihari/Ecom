import React from 'react'
import ProductCard from './ProductCard'

const FeaturedProducts = () => {
    const products = [
        {image:"https://www.pngonly.com/wp-content/uploads/2017/06/free-furniture-png-10201-210x211.png", name:'Comfy Single Chair 1', price:"$699"},
        {image:"https://www.pngonly.com/wp-content/uploads/2017/06/quality-furniture-png-10202-210x203.png",name:"Comfy Sofa 1",price:"$999"},
        {image:"https://www.pngonly.com/wp-content/uploads/2017/06/free-furniture-png-10201-210x211.png", name:'Comfy Single Chair 2', price:"$699"},
        {image:"https://www.pngonly.com/wp-content/uploads/2017/06/quality-furniture-png-10202-210x203.png",name:"Comfy Sofa 2",price:"$999"},        

    ]

    return (
        <div className="featuredContainer container">
            <div className='sub-title'>Featured Products</div>
            <div className='productFlex'>
                {products.map((item)=><ProductCard key={item.name} product={item}/>)}
            </div>
        </div>
        
    )
}

export default FeaturedProducts
