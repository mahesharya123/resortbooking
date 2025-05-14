import React, { useState } from 'react';

const roomsData = [
  {
    type: 'Standard Room',
    price: 1500,
    rating: 3,
    features: ['Queen Bed', 'AC', 'Wi-Fi'],
    image: 'room1.jpg',
  },
  {
    type: 'Deluxe Room',
    price: 2000,
    rating: 4,
    features: ['King Bed', 'Balcony', 'Mini-Fridge'],
    image: 'room2.jpg',
  },
  {
    type: 'Suite',
    price: 3000,
    rating: 5,
    features: ['Bedroom + Living Room', 'Bathtub'],
    image: 'room3.jpg',
  },
];

export const Rooms = () => {
  const [booking, setBooking] = useState({
    room: '',
    roomType: '',
    date: '',
    guests: 1,
    extraBed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBooking({
      ...booking,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking ${booking.roomType} for ${booking.guests} guest(s) on ${booking.date}${booking.extraBed ? ' with extra bed' : ''}`);
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Choose Your Room</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {roomsData.map((room, index) => (
          <div key={index} className="border rounded shadow-md p-4 bg-white">
            <img src={room.image} alt={room.type} className="w-full h-60 object-cover rounded mb-3" />
            <h2 className="text-xl font-semibold mb-1">{room.type}</h2>
            <p className="text-gray-600 mb-2">₹{room.price}/night</p>
            <div className="flex mb-2">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${i < room.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.286-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
                </svg>
              ))}
            </div>
            <ul className="text-sm text-gray-700 mb-3 list-disc ml-5">
              {room.features.map((f, i) => <li key={i}>{f}</li>)}
            </ul>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setBooking({ ...booking, roomType: room.type })}
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      {booking.roomType && (
        <div className="mt-10 max-w-xl mx-auto bg-gray-100 p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Book {booking.roomType}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Check-in Date</label>
              <input
                type="date"
                name="date"
                value={booking.date}
                onChange={handleChange}
                required
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="block font-medium">Number of Guests</label>
              <input
                type="number"
                name="guests"
                min="1"
                value={booking.guests}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </div>
            <div>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="extraBed"
                  checked={booking.extraBed}
                  onChange={handleChange}
                  className="mr-2"
                />
                Need Extra Bed (₹500/night)
              </label>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
};