import React from 'react';

const DateDisplay = ({ checkIn, checkOut, className }) => {
  const formatDate = (date) => {
    if (!date) return 'Not selected';
    return date.toLocaleDateString('en-GB', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
  };

  return (
    <div className={`flex flex-col gap-4 ${className || ''}`}>
        <div className="border p-2 rounded bg-white check_in">{formatDate(checkIn)}</div>
        <div className="border p-2 rounded bg-white check_out">{formatDate(checkOut)}</div>
    </div>
  );
};

export default DateDisplay;