import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DateDisplay from './DateDisplay';
import RoomSelector from './RoomSelector';
import GuestSelector from './GuestSelector';

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
    if (dates.checkIn && dates.checkOut && selectedRooms.length > 0) {
      const nights = calculateNights();
      const baseFee = selectedRooms.reduce((sum, room) => {
        const roomCost = room.quantity * room.pricePerNight * nights;
        return sum + roomCost;
      }, 0);

      const extraAdultFee = selectedRooms.reduce((sum, room) => {
        const adultsInRoom = Math.min(guests.adults, 3 * room.quantity);
        const extraAdults = Math.max(0, adultsInRoom - 2 * room.quantity);
        const extraCost = extraAdults * 0.5 * room.pricePerNight * nights;
        return sum + extraCost;
      }, 0);

      setTotalFee(baseFee + extraAdultFee);
    } else {
      setTotalFee(0);
    }
  }, [dates, guests, selectedRooms]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalRooms = selectedRooms.reduce((sum, room) => sum + room.quantity, 0);
    const totalGuests = guests.adults + guests.children;
    const maxOccupancy = totalRooms * 4;
    const maxAdults = totalRooms * 3;

    if (totalGuests > maxOccupancy || guests.adults > maxAdults) {
      window.alert("Maximum occupancy or adult limit exceeded. Please select more rooms.");
      return;
    }

    onSubmit({ dates, guests, selectedRooms, totalFee });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col md:flex-row gap-6 p-6 bg-gray-100 rounded-lg shadow-lg form_container"
    >
      {/* Left column with a single range calendar */}
      <div className="w-full md:w-1/2 flex flex-col calendar_part">
        <div className="calendar-container border p-2 rounded bg-white flex-1">
          <DatePicker
            selected={dates.checkIn}
            onChange={([start, end]) => setDates({ checkIn: start, checkOut: end })}
            startDate={dates.checkIn}
            endDate={dates.checkOut}
            selectsRange
            inline
            minDate={new Date()}
          />
        </div>
      </div>

      {/* Right column with details */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 info_container">
        <div className="stay_info">
          <DateDisplay
            checkIn={dates.checkIn}
            checkOut={dates.checkOut}
            className="flex flex-col gap-4"
          />
          <div className="font-medium"><span>{nights}</span><span> night{nights > 1 ? "s" : ""}</span></div>
        </div>
        <RoomSelector
          rooms={rooms}
          onChange={setSelectedRooms}
          totalGuests={guests.adults + guests.children}
        />
        <GuestSelector onChange={setGuests} />
        <div className="font-bold text-lg total_fee">
          <span>Total Fee:</span>
          <span>${totalFee.toFixed(2)}</span>
        </div>
        <div className="book_now_container">
          <button
            type="submit"
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </form>
  );
};

export default HotelBookingForm;