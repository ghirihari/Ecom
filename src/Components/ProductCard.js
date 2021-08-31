import React, {useState} from 'react'
// import {RiShoppingCartLine,AiOutlineHeart} from 'react-icons/all'

const ProductCard = (props) => {
    const [Color, setColor] = useState(0)
    
    return(
        <div className='product'>
            <div className="image">
                <img alt={props.product.name} src={props.product.images[Color].image} style={{height:'200px'}}/>
                    <div className="colors">
                        {props.product.images.map((item,index)=> {
                            return (
                                <label className="icon" onClick={()=>setColor(index)}>
                                    <svg style={{marginRight:'3px'}} height="20" width="20">
                                        <circle cx="10" cy="10" r="8" stroke="gray" stroke-width="1" fill={item.color} />
                                    </svg>
                                </label>
                            )
                        })}
                    </div>
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
