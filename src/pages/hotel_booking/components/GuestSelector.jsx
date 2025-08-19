import React, { useState } from 'react';

export const GuestSelector = ({ onChange }) => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const updateGuests = (type, delta) => {
    if (type === 'adults') {
      const newAdults = Math.max(1, adults + delta); // Minimum 1 adult
      setAdults(newAdults);
      onChange({ adults: newAdults, children });
    } else {
      const newChildren = Math.max(0, children + delta); // Minimum 0 children
      setChildren(newChildren);
      onChange({ adults, children: newChildren });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <label>Guests</label>
      <div className="flex items-center gap-2">
        <span className="w-24">Adults</span>
        <button
          type="button"
          onClick={() => updateGuests('adults', -1)}
          className="bg-gray-300 text-black p-1 rounded w-8"
          disabled={adults <= 1}
        >
          -
        </button>
        <input
          type="number"
          value={adults}
          readOnly
          className="border p-1 rounded w-12 text-center"
        />
        <button
          type="button"
          onClick={() => updateGuests('adults', 1)}
          className="bg-gray-300 text-black p-1 rounded w-8"
          disabled={adults >= 10} // UI limit
        >
          +
        </button>
      </div>
      <div className="flex items-center gap-2">
        <span className="w-24">Children</span>
        <button
          type="button"
          onClick={() => updateGuests('children', -1)}
          className="bg-gray-300 text-black p-1 rounded w-8"
          disabled={children <= 0}
        >
          -
        </button>
        <input
          type="number"
          value={children}
          readOnly
          className="border p-1 rounded w-12 text-center"
        />
        <button
          type="button"
          onClick={() => updateGuests('children', 1)}
          className="bg-gray-300 text-black p-1 rounded w-8"
          disabled={children >= 10} // UI limit
        >
          +
        </button>
      </div>
    </div>
  );
};