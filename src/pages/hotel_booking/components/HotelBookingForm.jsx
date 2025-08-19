import React, { useState, useEffect } from 'react';
import { DateRangePicker } from './DateRangePicker';
import { GuestSelector } from './GuestSelector';
import { RoomSelector } from './RoomSelector';

const HotelBookingForm = ({ rooms, onSubmit }) => {
  const [dates, setDates] = useState({ checkIn: null, checkOut: null });
  const [guests, setGuests] = useState({ adults: 1, children: 0 });
  const [selectedRooms, setSelectedRooms] = useState([]);
  const [totalFee, setTotalFee] = useState(0);

  const calculateNights = () => {
    if (!dates.checkIn || !dates.checkOut) return 0;
    const checkInDate = new Date(dates.checkIn.setHours(0, 0, 0, 0));
    const checkOutDate = new Date(dates.checkOut.setHours(0, 0, 0, 0));
    return Math.floor((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 3600 * 24));
  };

  const nights = calculateNights();

  useEffect(() => {
    console.log('useEffect triggered:', { dates, guests, selectedRooms });
    if (dates.checkIn && dates.checkOut && selectedRooms.length > 0) {
      const nights = calculateNights();
      console.log('Nights:', nights);
      console.log('Selected Rooms:', selectedRooms);
      console.log('Guests:', guests);

      const baseFee = selectedRooms.reduce((sum, room) => {
        const roomCost = room.quantity * room.pricePerNight * nights;
        console.log(`Room ${room.name}: quantity=${room.quantity}, pricePerNight=${room.pricePerNight}, nights=${nights}, cost=${roomCost}`);
        return sum + roomCost;
      }, 0);

      const extraAdultFee = selectedRooms.reduce((sum, room) => {
        const adultsInRoom = Math.min(guests.adults, 3 * room.quantity);
        const extraAdults = Math.max(0, adultsInRoom - 2 * room.quantity);
        const extraCost = extraAdults * 0.5 * room.pricePerNight * nights;
        console.log(`Room ${room.name}: adultsInRoom=${adultsInRoom}, extraAdults=${extraAdults}, extraCost=${extraCost}`);
        return sum + extraCost;
      }, 0);

      const total = baseFee + extraAdultFee;
      console.log('Base Fee:', baseFee, 'Extra Adult Fee:', extraAdultFee, 'Total Fee:', total);
      setTotalFee(total);
    } else {
      setTotalFee(0);
    }
  }, [dates, guests, selectedRooms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalRooms = selectedRooms.reduce((sum, room) => sum + room.quantity, 0);
    const totalGuests = guests.adults + guests.children;
    const maxOccupancy = totalRooms * 4; // Max 4 guests per room (adults + children)

    if (totalGuests > maxOccupancy) {
      window.alert("Maximum occupancy is exceeded. Please select the rooms again.");
      return;
    }

    onSubmit({ dates, guests, selectedRooms, totalFee });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 border rounded bg-gray-100">
      <DateRangePicker onChange={setDates} />
      <div className="font-medium">Nights: {nights}</div>
      <RoomSelector
        rooms={rooms}
        onChange={setSelectedRooms}
        totalAdults={guests.adults}
      />
      <GuestSelector onChange={setGuests} />
      <div className="font-bold">Total Accommodation Fee: ${totalFee.toFixed(2)}</div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">Book Now</button>
    </form>
  );
};

export default HotelBookingForm;