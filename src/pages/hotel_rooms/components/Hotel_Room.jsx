import React from 'react'

const Hotel_Room = ({link, image, type, size_sqf, size_sqm, view, beds}) => {
    return (
        <div className="hotel_room_card">
            <div className="hotel_room_card_image">
                <a href={link}><img src={image} alt=""/></a>
            </div>
            <div className="hotel_room_card_content">
                <h3>{type}</h3>
                <p>{size_sqf} sqf|{size_sqm} sqm|{view}|{beds}</p>
                <div className="hotel_room_card_content_button">
                    <a href="#">read more</a>
                    <a href="#">book now</a>
                </div>
            </div>
        </div>
    );
}

export default Hotel_Room