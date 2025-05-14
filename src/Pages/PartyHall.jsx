import React, { useState } from 'react';

const halls = [
  {
    name: 'Banquet Hall',
    capacity: 200,
    price: 15000,
    image: 'https://www.andamanisland.in/assets/site1/theme3/images/coral-creek-resort-baratang-island/1.jpg',
  },
  {
    name: 'Conference Room',
    capacity: 40,
    price: 6000,
    image: 'https://www.andamanisland.in/assets/site1/theme3/images/coral-creek-resort-baratang-island/1.jpg',
  },
];

export const PartyHall = () => {
  const [booking, setBooking] = useState({
    hall: '',
    date: '',
    guests: 1,
    eventType: '',
    addOns: {
      catering: false,
      decoration: false,
      sound: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (['catering', 'decoration', 'sound'].includes(name)) {
      setBooking((prev) => ({
        ...prev,
        addOns: {
          ...prev.addOns,
          [name]: checked,
        },
      }));
    } else {
      setBooking({ ...booking, [name]: type === 'checkbox' ? checked : value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Booking ${booking.hall} for ${booking.guests} guests on ${booking.date} for ${booking.eventType} event.\nAdd-ons: ${Object.entries(booking.addOns)
        .filter(([k, v]) => v)
        .map(([k]) => k)
        .join(', ') || 'None'}`
    );
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Book a Party Hall</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {halls.map((hall, index) => (
          <div key={index} className="border rounded shadow p-4 bg-white">
            <img src={hall.image} alt={hall.name} className="w-full h-70 sm:h-62 object-cover rounded mb-3" />
            <h2 className="text-xl font-semibold">{hall.name}</h2>
            <p className="text-gray-600">Capacity: {hall.capacity} guests</p>
            <p className="text-gray-800 font-medium">Price: ₹{hall.price}/day</p>
            <button
              className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              onClick={() => setBooking({ ...booking, hall: hall.name })}
            >
              Book This Hall
            </button>
          </div>
        ))}
      </div>

      {booking.hall && (
        <div className="max-w-xl mx-auto bg-gray-100 p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-4">Book {booking.hall}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium">Event Type</label>
              <input
                type="text"
                name="eventType"
                value={booking.eventType}
                onChange={handleChange}
                placeholder="e.g., Birthday, Meeting"
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Event Date</label>
              <input
                type="date"
                name="date"
                value={booking.date}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Number of Guests</label>
              <input
                type="number"
                name="guests"
                value={booking.guests}
                onChange={handleChange}
                min="1"
                className="w-full border p-2 rounded"
                required
              />
            </div>

            <div>
              <label className="block font-medium mb-2">Add-on Services</label>
              <div className="space-y-2">
                {['catering', 'decoration', 'sound'].map((addon) => (
                  <label key={addon} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name={addon}
                      checked={booking.addOns[addon]}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    {addon.charAt(0).toUpperCase() + addon.slice(1)} Service
                  </label>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
            >
              Confirm Hall Booking
            </button>
          </form>
        </div>
      )}
    </div>
  );
};


