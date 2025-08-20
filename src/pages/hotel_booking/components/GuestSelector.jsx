import React, { useState } from 'react';

const GuestSelector = ({ onChange }) => {
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
    <div className="flex flex-col gap-4 guest_selection_container">
      <div className="flex items-center gap-2 guest_container">
        <span className="w-24">Adults</span>
        <span className="button_container">
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
            className="border p-1 rounded w-12 text-center adult_quantity"
          />
          <button
            type="button"
            onClick={() => updateGuests('adults', 1)}
            className="bg-gray-300 text-black p-1 rounded w-8"
            disabled={adults >= 10} // UI limit
          >
            +
          </button>
        </span>
      </div>
      <div className="flex items-center gap-2 guest_container">
        <span className="w-24">Children</span>
        <span className="button_container">
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
            className="border p-1 rounded w-12 text-center children_quantity"
          />
          <button
            type="button"
            onClick={() => updateGuests('children', 1)}
            className="bg-gray-300 text-black p-1 rounded w-8"
            disabled={children >= 10} // UI limit
          >
            +
          </button>
        </span>

      </div>
    </div>
  );
};

export default GuestSelector