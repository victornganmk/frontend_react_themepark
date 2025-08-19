import React, { useState } from 'react';

export const RoomSelector = ({ rooms, onChange, totalAdults }) => {
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

  return (
    <div className="flex flex-col gap-4">
      <label>Select Rooms</label>
      {roomQuantities.map((room) => {
        const canAddRoom = totalAdults <= (totalRooms + 1) * 3;
        return (
          <div key={room.id} className="flex items-center gap-2">
            <span className="w-24">{room.name} (${room.pricePerNight}/night)</span>
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
              className="border p-1 rounded w-12 text-center"
            />
            <button
              type="button"
              onClick={() => updateQuantity(room.id, 1)}
              className="bg-gray-300 text-black p-1 rounded w-8"
              disabled={!canAddRoom}
            >
              +
            </button>
          </div>
        );
      })}
    </div>
  );
}; 