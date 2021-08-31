import React from 'react'
import Carousel from './Carousel'
import Reviews from './Reviews'
import FeaturedProducts from './FeaturedProducts'
import ProductContainer from './ProductContainer'

const MainScreen = (props) => {
    const products = [
        {
            name:'Interceptor 650',
            price:"$699",
            images:[
                {color:"red",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/canyon-red/side-view.png"},
                {color:"blue",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/ventura-blue/side-view.png"},
                {color:"orange",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/orange-crush/side-view.png"},
                {color:"black",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/sunset-strip/side-view.png"},
                {color:"silver",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/mark-2/side-view.png"},
        
            ]
        },
        {
            name:'Interceptor 650',
            price:"$699",
            images:[
                {color:"red",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/canyon-red/side-view.png"},
                {color:"blue",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/ventura-blue/side-view.png"},
                {color:"orange",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/orange-crush/side-view.png"},
                {color:"black",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/sunset-strip/side-view.png"},
                {color:"silver",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/mark-2/side-view.png"},
        
            ]
        },
        {
            name:'Interceptor 650',
            price:"$699",
            images:[
                {color:"red",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/canyon-red/side-view.png"},
                {color:"blue",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/ventura-blue/side-view.png"},
                {color:"orange",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/orange-crush/side-view.png"},
                {color:"black",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/sunset-strip/side-view.png"},
                {color:"silver",image:"https://www.royalenfield.com/content/dam/royal-enfield/united-kingdom/motorcycles/interceptor/colours/studio-shots/new/mark-2/side-view.png"},
        
            ]
        },
        // {image:"https://www.pngonly.com/wp-content/uploads/2017/06/quality-furniture-png-10202-210x203.png",name:"Comfy Sofa 1",price:"$999",colors:["red","yellow","green"]},
        // {image:"https://www.pngonly.com/wp-content/uploads/2017/06/free-furniture-png-10201-210x211.png", name:'Comfy Single Chair 2', price:"$699",colors:["red","yellow","green"]},
        // {image:"https://www.pngonly.com/wp-content/uploads/2017/06/quality-furniture-png-10202-210x203.png",name:"Comfy Sofa 2",price:"$999",colors:["black","gray","white"]},        
    ]

    return (
        <div className="mainScreen" onClick={()=>props.toggle(false)}>
            <Carousel/>
            <FeaturedProducts products={products}/>
            <ProductContainer products={products}/>
            <Reviews/>
            <div className="footer">
                <label>© 2021 Uchiha, All Rights Reserved</label>
            </div>
        </div>
    )
}

export default MainScreen
