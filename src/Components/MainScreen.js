import React from 'react'
import Carousel from './Carousel'
import Reviews from './Reviews'
import FeaturedProducts from './FeaturedProducts'
import ProductCard from './ProductCard'
import {AiFillCaretDown, IoFilterSharp} from 'react-icons/all'

const IconedButton = (props) => {
    return(
        <button className="button">
            <label style={{marginRight:'5px'}}>{props.label}</label>
            {props.children}
        </button>

    )
}

const MainScreen = (props) => {
    const products = [
        {image:"https://www.pngonly.com/wp-content/uploads/2017/06/free-furniture-png-10201-210x211.png", name:'Comfy Single Chair 1', price:"$699"},
        {image:"https://www.pngonly.com/wp-content/uploads/2017/06/quality-furniture-png-10202-210x203.png",name:"Comfy Sofa 1",price:"$999"},
        {image:"https://www.pngonly.com/wp-content/uploads/2017/06/free-furniture-png-10201-210x211.png", name:'Comfy Single Chair 2', price:"$699"},
        {image:"https://www.pngonly.com/wp-content/uploads/2017/06/quality-furniture-png-10202-210x203.png",name:"Comfy Sofa 2",price:"$999"},        
    ]

    return (
        <div className="mainScreen" onClick={()=>props.toggle(false)}>
            <Carousel/>
            <FeaturedProducts/>
            {/* Our Products */}
            <div className="featuredContainer container">
                <div className='sub-title'>Our Products</div>
                <div className="productBar">
                    <div className="tab-container">
                        <label className="tab-item selected">All Products</label>
                        <label className="tab-item">Living Room</label>
                        <label className="tab-item">Bed Room</label>
                        <label className="tab-item">Balcony</label>
                        <label className="tab-item">Work Space</label>
                    </div>
                    <div className="buttonBar">
                        <IconedButton label="Sort"><AiFillCaretDown/></IconedButton>
                        <IconedButton label="Filter"><IoFilterSharp/></IconedButton>
                    </div>
                </div>
                <div className='productFlex'>
                    {products.map((item)=><ProductCard key={item.name} product={item}/>)}
                </div>
            </div>
            <Reviews/>
        </div>
    )
}

export default MainScreen
