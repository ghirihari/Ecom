import React from 'react'

const Reviews = () => {
    const reviews = [
        {name:'Ghiri Hari Vvz', rating:'⭐⭐⭐⭐⭐',review:"The Return of the King is by far the most moving, inspirational, and epic of Peter Jackson's The Lord of the Rings Trilogy movies. The movie plot is compelling with themes of friendship, strength, and loyalty. Frodo Baggins and Samwise Gamgee continue their quest to destroy the One Ring at Mount Doom led by Gollum. Gollum becomes more cunning and sneaky than ever. Gollum becomes more cunning and sneaky than ever. Gandalf the White, Aragorn, Legolas and Gimli regroup with Merry and Pippin in Isengard, and they learn that Sauron is planning a full-scale attack on the largest city of men, Minas Tirith in Gondor.",imgUrl:"https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1626345131_8042057.jpg?format=webp&w=376&dpr=1.0"}
    ]

    return (
        <div className="reviewWrapper">
            <div className="sub-title">- Recent Reviews -</div>
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
    )
}

export default Reviews
