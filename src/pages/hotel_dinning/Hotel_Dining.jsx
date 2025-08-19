import React from 'react'
import Hotel_Dining_Box from "./components/Hotel_Dining_Box"
import { hotel_dining } from "/src/data.js"

const Hotel_Dining = () => {
    return (
        <>
            <div className="hotel_subnavbar">
                <ul>
                    <li><a href="#">rooms</a></li>
                    <li><a href="#">dinning</a></li>
                    <li><a href="#">facilities</a></li>
                    <li><a href="#">booking</a></li>
                </ul>
            </div>
            <div class="hotel_dining">
                <h2>dining</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloribus, voluptatum fuga omnis exercitationem labore illum esse ipsa necessitatibus dolorum dolores laudantium perspiciatis recusandae mollitia tempora dolor eius, cumque fugit?</p>
                <div className="hotel_dining_card_container">
                    {hotel_dining.map((hotel_dining) => (
                        <Hotel_Dining_Box key={hotel_dining.id} {... hotel_dining} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Hotel_Dining