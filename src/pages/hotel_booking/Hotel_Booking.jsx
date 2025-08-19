import React from 'react'
import HotelBookingForm from "./components/HotelBookingForm"

const Hotel_Booking = () => {
    const rooms = [
        { id: 1, name: 'Standard', pricePerNight: 100 },
        { id: 2, name: 'Deluxe', pricePerNight: 150 },
        { id: 3, name: 'Premier', pricePerNight: 200 },
        { id: 4, name: 'Grand', pricePerNight: 250 },
    ];
        
    const handleSubmit = (data) => {
        console.log('Booking data:', data);
        // Send to API, etc.
    };

    return (
        <div className="hotel_booking">
            <h1>booking</h1>
            <div className="form_container">
                            <HotelBookingForm rooms={rooms} onSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default Hotel_Booking