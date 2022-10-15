import React from "react"

//NOTE! NOTE! NOTE!
//If you want to conditionally display an object, you can use the following syntax:
//{props.key === 0 && <h1>Conditional</h1>}


export default function Product(props) {
    let cardText

    if (props.openSpot > 0) {
        cardText = <p className="status">{props.status}</p>;
    } else {
        cardText = <p className="status">{props.soldOut}</p>;
    }

    return (
        <div className="product">
            <div className="card">
            <img className="p-image" src={`./Images/${props.cover}`} />
            {cardText}
            </div>

            <div className="ratings">
                <img className="star" src=".\Images\star.png" alt="star rating" />
                <p className="stock-source"><span className="r-value">{props.rating}</span> ({props.count}).{props.country}</p>
            </div>
            
            <p className="short-description">{props.title}</p>
            <p className="price"><span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}