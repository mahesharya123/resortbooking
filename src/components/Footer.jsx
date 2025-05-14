import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white text-center py-4 top-30 bottom-0 w-full">
      <div className="container mx-auto px-4">
        {/* Copyright Text */}
        <p className="mb-4">&copy; 2025 CoralCreek. All rights reserved.</p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF size={20} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaTwitter size={20} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaInstagram size={20} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedinIn size={20} />
          </a>
        </div>

        {/* Gmail Link */}
        <div>
          <a
            href="mailto:coralcreek@example.com"
            className="text-lg hover:text-blue-400"
          >
            <FaEnvelope size={20} className="inline-block mr-2" />
            coralcreek@example.com
          </a>
        </div>
      </div>
    </footer>
  );
};
