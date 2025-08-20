import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CalendarPicker = ({ checkIn, checkOut, onChange, className }) => {
  const handleChange = (dates) => {
    const [start, end] = dates;
    onChange({ checkIn: start, checkOut: end });
  };
  return (
    <div className={`calendar-container ${className || ''}`}>
      <DatePicker
        selected={checkIn}
        onChange={handleChange}
        selectsRange
        startDate={checkIn}
        endDate={checkOut}
        minDate={new Date()}
        inline
        monthsShown={1}
        dateFormat="yyyy/MM/dd"
        className="border p-2 rounded"
      />
    </div>
  );
};

export default CalendarPicker 