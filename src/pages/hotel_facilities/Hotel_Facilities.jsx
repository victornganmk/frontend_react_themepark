import React from 'react'
import Hotel_Facility from "./components/Hotel_Facility"
import { hotel_facilities } from "/src/data.js"

const Hotel_Facilities = () => {
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
            <div class="hotel_facilities">
                <h2>facilities</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloribus, voluptatum fuga omnis exercitationem labore illum esse ipsa necessitatibus dolorum dolores laudantium perspiciatis recusandae mollitia tempora dolor eius, cumque fugit?</p>
                <div className="hotel_facilities_card_container">
                    {hotel_facilities.map((hotel_facilities) => (
                        <Hotel_Facility key={hotel_facilities.id} {... hotel_facilities} />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Hotel_Facilities