import React, { useState } from 'react';

const RoomSelector = ({ rooms, onChange, totalGuests }) => {
      const [roomQuantities, setRoomQuantities] = useState(
        rooms.map((room) => ({ ...room, quantity: 0 }))
      ); 

      const updateQuantity = (id, delta) => {
        const updatedQuantities = roomQuantities.map((room) =>
          room.id === id
            ? { ...room, quantity: Math.max(0, room.quantity + delta) }
            : room
        );
        setRoomQuantities(updatedQuantities);
        onChange(updatedQuantities);
      };

      const totalRooms = roomQuantities.reduce((sum, room) => sum + room.quantity, 0);
      const canAddRoom = true; // Allow adding rooms at any time

      return (
        <div className="flex flex-col gap-4 room_selection_container">
          {roomQuantities.map((room) => (
            <div key={room.id} className="flex items-center gap-2 room_container">
              <span className="w-24">{room.name} (${room.pricePerNight}/night)</span>
              <span className='button_container'>
                <button
                type="button"
                onClick={() => updateQuantity(room.id, -1)}
                className="bg-gray-300 text-black p-1 rounded w-8"
                disabled={room.quantity === 0}
                >
                -
                </button>
                <input
                  type="number"
                  value={room.quantity}
                  readOnly
                  className="border p-1 rounded w-12 text-center room_quantity"
                />
                <button
                  type="button"
                  onClick={() => updateQuantity(room.id, 1)}
                  className="bg-gray-300 text-black p-1 rounded w-8"
                  disabled={!canAddRoom}
                >
                  +
                </button>
              </span>
            </div>
          ))}
        </div>
      );
    };

export default RoomSelector 