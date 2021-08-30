import React from 'react'
import Carousel from './Carousel'
import Reviews from './Reviews'
import FeaturedProducts from './FeaturedProducts'

const MainScreen = (props) => {

    return (
        <div className="mainScreen" onClick={()=>props.toggle(false)}>
            <Carousel/>
            <FeaturedProducts/>
            <Reviews/>
        </div>
    )
}

export default MainScreen
