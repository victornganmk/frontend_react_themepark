import React from 'react'
import Hotel_Room from './components/Hotel_Room';
import { hotel_rooms } from "/src/data.js"

const Hotel_Rooms = () => {
    return (
        <main>
            <h1>rooms & suites</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt doloribus, voluptatum fuga omnis exercitationem labore illum esse ipsa necessitatibus dolorum dolores laudantium perspiciatis recusandae mollitia tempora dolor eius, cumque fugit?</p>
            <div className="card_container">
                {hotel_rooms.map((hotel_rooms) => (
                    <Hotel_Room key={hotel_rooms.id} {... hotel_rooms} />
                ))}
            </div>
        </main>
    );
}

export default Hotel_Rooms