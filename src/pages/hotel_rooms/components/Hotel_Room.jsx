import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'

const Hotel_Room = ({link, image, type, size_sqf, size_sqm, view, beds}) => {
    return (
        <div className="hotel_rooms_card">
            <div className="hotel_rooms_card_image">
                <Link to={link}><img src={image} alt=""/></Link>
            </div>
            <div className="hotel_rooms_card_content">
                <h2 className='section-subtitle'><Link to={link}>{type}</Link></h2>
                <p> {size_sqf} sqf | {size_sqm} sqm | {view} | {beds} </p>
                <div className="hotel_rooms_card_content_button">
                    <div className="readmore"><Link to={link}>read more</Link></div>
                    <div className="book"><Link to="/hotel_booking" className=''>book now</Link></div>
                </div>
            </div>
        </div>
    );
}

export default Hotel_Room