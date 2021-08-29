import React, {useState} from 'react'
import {CgChevronLeft,CgChevronRight,GoPrimitiveDot} from 'react-icons/all'

const MainScreen = (props) => {
    const [Page, setPage] = useState(0)
    const banners = [
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/slider/20210821114924.jpg?format=webp&w=1366&dpr=1.0",
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/slider/20210829115515.jpg?format=webp&w=1242&dpr=1.1",
        "https://prod-img.thesouledstore.com/public/theSoul/uploads/slider/20210822105650.jpg?format=webp&w=1242&dpr=1.1",        
    ]
    const reviews = [
        {name:'Ghiri Hari Vvz', rating:'⭐⭐⭐⭐⭐',review:"The Return of the King is by far the most moving, inspirational, and epic of Peter Jackson's The Lord of the Rings Trilogy movies. The movie plot is compelling with themes of friendship, strength, and loyalty. Frodo Baggins and Samwise Gamgee continue their quest to destroy the One Ring at Mount Doom led by Gollum. Gollum becomes more cunning and sneaky than ever. Gollum becomes more cunning and sneaky than ever. Gandalf the White, Aragorn, Legolas and Gimli regroup with Merry and Pippin in Isengard, and they learn that Sauron is planning a full-scale attack on the largest city of men, Minas Tirith in Gondor.",imgUrl:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1626345131_8042057.jpg?format=webp&w=376&dpr=1.0"}
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
        <div className="mainScreen" onClick={()=>props.toggle(false)}>
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
            <div className="reviewWrapper">
                <div className="title">- Recent Reviews -</div>
                <div className="reviewContainer">
                    <div className="review">                    
                        <div>{reviews[0].name}</div>
                        <div>{reviews[0].rating}</div>
                        <div className="reviewText">{reviews[0].review}</div>
                    </div>
                    <div className="review">
                        <div>{reviews[0].name}</div>
                        <div>{reviews[0].rating}</div>
                        <div className="reviewText">{reviews[0].review}</div>
                    </div>
                    <div className="review">
                        <div>{reviews[0].name}</div>
                        <div>{reviews[0].rating}</div>
                        <div className="reviewText">{reviews[0].review}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainScreen
