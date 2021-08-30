import React from 'react'
// import {RiShoppingCartLine,AiOutlineHeart} from 'react-icons/all'

const ProductCard = (props) => {
    return(
        <div className='product'>
            <div className="image">
                <img alt={props.product.name} src={props.product.image} style={{height:'200px'}}/>
            </div>
            <div className="description">
                <div className="text">
                    <div>{props.product.name}</div>
                    <div className="price">{props.product.price}</div>
                </div>
                {/* <div className="iconBox">
                    <RiShoppingCartLine className="icon"/>
                    <AiOutlineHeart className="icon"/>
                </div> */}
            </div>
        </div>
    )
}

export default ProductCard
