import React from 'react'

const Hotel_Room = ({link, image, type, size_sqf, size_sqm, view, beds}) => {
    return (
        <div className="hotel_rooms_card">
            <div className="hotel_rooms_card_image">
                <a href={link}><img src={image} alt=""/></a>
            </div>
            <div className="hotel_rooms_card_content">
                <h3><a href="#">{type}</a></h3>
                <p> {size_sqf} sqf | {size_sqm} sqm | {view} | {beds} </p>
                <div className="hotel_rooms_card_content_button">
                    <div className="readmore"><a href="#">read more</a></div>
                    <div className="book"><a href="#">book now</a></div>
                </div>
            </div>
        </div>
    );
}

export default Hotel_Room