import React from 'react'
import Navbar from "./Navbar.jsx"
import Hero from "./Hero.jsx"
import Product from "./Card.jsx"
import ProductData from "./Data"

export default function App() {
    const ProductCard = ProductData.map(data => {
        return (
            <Product 
            {...data}
            />
        )
    })

    return(
        <div id="cover">
 <Navbar />
 <Hero />
 <div id="product-cards">
   {ProductCard}
 </div>
 </div>
    )
}
 