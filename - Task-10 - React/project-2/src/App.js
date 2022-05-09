import React from "react"
import Navbar from "./components/navbar.js"
import Card from "./components/card.js"
import data from "./data.js"








export default function App() {
        const cards = data.map(item => {
            return (
                <Card
                    key={item.id}
                    item={item}
                />
            )
        })        
        
                // <Hero />
        return (
            <div>
                <Navbar />
                <section className="cards-list">
                    {cards}
                </section>
            </div>
        )
    }