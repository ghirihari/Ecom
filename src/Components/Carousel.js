import React, {useState} from 'react'
import {CgChevronLeft,CgChevronRight,GoPrimitiveDot} from 'react-icons/all'

const Carousel = () => {
    const [Page, setPage] = useState(0)
    const banners = [
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/slider/20210821114924.jpg?format=webp&w=1366&dpr=1.0",
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/slider/20210829115515.jpg?format=webp&w=1242&dpr=1.1",
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/slider/20210822105650.jpg?format=webp&w=1242&dpr=1.1",        
    ]
    const navigate = (direction) => {
        switch(direction){
            case "next":
                setPage(page=>{
                    if(page===(banners.length-1))return 0;
                    return page+1
                })
                break;
            case "back":
                setPage(page=>{
                    if(page===0)return banners.length-1;
                    return page-1
                })
                break;
            default:
                setPage(direction)
                break;
        }
    }

    let trans = 'translate('+-(Page*100)+'%)';
    let bannerPage = {transform:trans}

    return (
        <div className="carousel">
            <div className="slide" style={bannerPage}>
                {banners.map(item=><img className="banner" alt="banner" key={item} src={item}/>)}
            </div>
            <div className="left" onClick={()=>{navigate("back")}}><CgChevronLeft className="icon navigationIcons" /></div>
            <div className="right" onClick={()=>{navigate("next")}}><CgChevronRight className="icon navigationIcons"/></div>
            <div className="center">
                {banners.map((item,index)=>
                    {   
                        if(Page===index)return <GoPrimitiveDot onClick={()=>{navigate(index)}} key={item+'-dot'} className="icon navigationDots blueDot"/>
                        else return <GoPrimitiveDot onClick={()=>{navigate(index)}} key={item+'-dot'} className="icon navigationDots index"/>
                    })
                }
            </div>
        </div>
    )
}

export default Carousel
