import React from 'react'
import HotelBookingForm from "./components/HotelBookingForm"

const Hotel_Booking = () => {
    const rooms = [
        { id: 1, name: 'Standard', pricePerNight: 600 },
        { id: 2, name: 'Deluxe', pricePerNight: 800 },
        { id: 3, name: 'Premier', pricePerNight: 1000 },
        { id: 4, name: 'Grand', pricePerNight: 1200 },
    ];
        
    const handleSubmit = (data) => {
        console.log('Booking data:', data);
        // Send to API, etc.
    };

    return (
        <div className="hotel_booking">
            <h1 className='section-title'>booking</h1>
            <HotelBookingForm rooms={rooms} onSubmit={handleSubmit} />
        </div>
    );
}

export default Hotel_Booking