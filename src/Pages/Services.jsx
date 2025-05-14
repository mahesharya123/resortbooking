export const Services = () => {
    return (
      <div className="py-10">
        <section className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-700 mb-6">Our Services</h1>
          <p className="text-lg max-w-2xl mx-auto">
            At CoralCreek, we offer a variety of services to make your stay more comfortable and enjoyable.
          </p>
        </section>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Room Accommodation */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Room Accommodation</h2>
            <p>Enjoy luxurious and comfortable rooms with premium amenities.</p>
          </div>
  
          {/* Party Hall and Event Spaces */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Party Hall & Event Spaces</h2>
            <p>Perfect venues for parties, meetings, and special events.</p>
          </div>
  
          {/* In-House Dining and Room Service */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">In-House Dining & Room Service</h2>
            <p>Delicious meals served to your room or in our dining area.</p>
          </div>
  
          {/* Laundry Services */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Laundry Services</h2>
            <p>Get your clothes cleaned and ironed without hassle.</p>
          </div>
  
          {/* Airport and Railway Pickup/Drop */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Airport & Railway Pickup/Drop</h2>
            <p>Convenient transportation to and from the airport or railway station.</p>
          </div>
  
          {/* Local Sightseeing Packages */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Local Sightseeing Packages</h2>
            <p>Explore local attractions with our curated sightseeing packages.</p>
          </div>
  
          {/* Corporate and Group Booking */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h2 className="text-2xl font-semibold mb-4">Corporate & Group Booking</h2>
            <p>Special packages for corporate clients and large groups.</p>
          </div>
        </div>
  
        {/* Trust Builders Section */}
        <section className="bg-blue-100 py-10 mt-10">
          <h2 className="text-3xl font-semibold text-center text-blue-700 mb-6">Why Choose Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">24/7 Customer Support</h3>
              <p>Always here to assist you with your needs, any time of the day.</p>
            </div>
  
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Clean and Sanitized Rooms</h3>
              <p>We maintain high standards of cleanliness and hygiene.</p>
            </div>
  
            <div className="bg-white shadow-md p-6 rounded-lg text-center">
              <h3 className="text-xl font-semibold mb-4">Verified and Trained Staff</h3>
              <p>Our team is professionally trained to provide the best service.</p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  