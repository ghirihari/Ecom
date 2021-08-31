import React from 'react'
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

const ProductContainer = (props) => {
    return (
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
                {props.products.map((item)=><ProductCard key={item.name} product={item}/>)}
            </div>
        </div>
    )
}

export default ProductContainer
