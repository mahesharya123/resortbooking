import { useState } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-700">CoralCreek</Link>
        
        {/* Hamburger Icon */}
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-2xl focus:outline-none"
          >
            {isMenuOpen ? (
              <span className="text-gray-600">X</span>
            ) : (
              <span className="text-gray-600">☰</span>
            )}
          </button>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden lg:flex space-x-4 text-sm sm:text-base">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/rooms" className="hover:text-blue-600">Rooms</Link>
          <Link to="/party-hall" className="hover:text-blue-600">Party Hall</Link>
          <Link to="/services" className="hover:text-blue-600">Services</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
        </div>
      </div>

      {/* Menu for small screens */}
      <div
        className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white py-2 space-y-4`}
      >
        <Link to="/" className="block text-center hover:text-blue-600">Home</Link>
        <Link to="/rooms" className="block text-center hover:text-blue-600">Rooms</Link>
        <Link to="/party-hall" className="block text-center hover:text-blue-600">Party Hall</Link>
        <Link to="/services" className="block text-center hover:text-blue-600">Services</Link>
        <Link to="/contact" className="block text-center hover:text-blue-600">Contact</Link>
      </div>
    </nav>
  );
};
