import React, { useState } from 'react';

export const Home = () => {
  const [date, setDate] = useState('');
  const [guests, setGuests] = useState(1);

  const handleCheckAvailability = (e) => {
    e.preventDefault();
    alert(`Checking availability for ${guests} guest(s) on ${date}`);
  };

  // Function to generate stars based on rating
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          fill={i < rating ? 'yellow' : 'gray'}
          viewBox="0 0 24 24"
          width="20"
          height="20"
        >
          <path d="M12 .587l3.668 7.568 8.332 1.215-6.064 5.903 1.428 8.292-7.364-3.868-7.364 3.868 1.428-8.292-6.064-5.903 8.332-1.215z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="pt-4">
      {/* Hero Banner */}
      <section
        className="relative h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://www.andamanisland.in/assets/site1/theme3/images/coral-creek-resort-baratang-island/1.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl font-bold mb-2">Relax. Rejuvenate. Reserve with Ease.</h1>
          <p className="text-lg mb-4">Book luxury rooms & event halls effortlessly.</p>
          <a href="/rooms" className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700 transition">
            Book Your Stay Now
          </a>
        </div>
      </section>

      {/* Availability Checker */}
      <section className="py-10 bg-gray-100">
        <div className="max-w-xl mx-auto bg-white shadow-md p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-center mb-4">Check Room Availability</h2>
          <form onSubmit={handleCheckAvailability} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Check-in Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Number of Guests</label>
              <input
                type="number"
                min="1"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border rounded p-2"
                required
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Check Availability
            </button>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-10 px-4 bg-white">
        <h2 className="text-3xl font-bold text-center mb-6">What Our Guests Say</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {[
            { name: 'Aarav S.', review: 'Beautiful hotel with great ambiance. Booking was super easy!', rating: 5 },
            { name: 'Priya D.', review: 'Rooms are clean and spacious. Staff is very courteous.', rating: 4 },
            { name: 'Rahul K.', review: 'Loved the hall and food arrangements for our event.', rating: 5 },
          ].map((t, index) => (
            <div key={index} className="bg-gray-100 p-4 rounded shadow">
              <p className="italic text-gray-700 mb-2">“{t.review}”</p>
              <div className="flex justify-end items-center space-x-1 mb-2">
                {renderStars(t.rating)}
              </div>
              <p className="text-right font-semibold text-gray-800">- {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Buttons */}
      <section className="py-10 text-center bg-blue-50">
        <h2 className="text-2xl font-bold mb-4">Ready to Book?</h2>
        <div className="space-x-4">
          <a href="/rooms" className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700">
            Book Room
          </a>
          <a href="/party-hall" className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700">
            Book Hall
          </a>
          <a href="/contact" className="bg-gray-700 text-white px-5 py-2 rounded hover:bg-gray-800">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};
