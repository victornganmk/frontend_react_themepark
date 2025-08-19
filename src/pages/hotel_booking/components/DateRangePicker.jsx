import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export const DateRangePicker = ({ onChange }) => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  const handleChange = (dates) => {
    const [start, end] = dates;
    setCheckIn(start);
    setCheckOut(end);
    onChange({ checkIn: start, checkOut: end });
  };

  return (
    <div className="flex flex-col gap-2">
      <label>Check-in / Check-out</label>
      <DatePicker
        selectsRange
        startDate={checkIn}
        endDate={checkOut}
        onChange={handleChange}
        minDate={new Date()}
        placeholderText="Select dates"
        className="border p-2 rounded"
      />
    </div>
  );
};