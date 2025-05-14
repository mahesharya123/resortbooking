import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

export const Contact = () => {
  return (
    <div className="py-10">
      {/* Google Map */}
      <section className="mb-10">
        <h1 className="text-4xl font-bold text-blue-700 text-center mb-6">Find Us</h1>
        <div className="max-w-6xl mx-auto">
        <iframe
  title="Coral Creek Resort Location"
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126312.6462790683!2d92.7890779!3d12.1782252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x308f37d7893d6ce5%3A0x3fbcaa8f58c60e44!2sOYO%2061587%20Coral%20Creek%20Resort!5e0!3m2!1sen!2sin!4v1715768926566!5m2!1sen!2sin"
  width="100%"
  height="400"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </section>

      {/* Contact Details */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Contact Information</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p>Address: 123 CoralCreek Street, City, Country</p>
          <p>Nearest Landmark: Coral Reef Mall</p>
          <p>
            Phone: <a href="tel:+11234567890" className="text-blue-600">+1 123 456 7890</a>
          </p>
          <p>
            Email: <a href="mailto:info@coralcreek.com" className="text-blue-600">info@coralcreek.com</a>
          </p>
          <p>
            <a
              href="https://wa.me/11234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              <FaWhatsapp className="inline-block mr-2" />
              Chat on WhatsApp
            </a>
          </p>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-700 mb-6">Contact Us</h2>
        <div className="max-w-xl mx-auto">
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-md"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full px-4 py-2 border rounded-md"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="mt-10 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Follow Us</h2>
        <div className="space-x-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaLinkedinIn size={24} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaYoutube size={24} />
          </a>
            <a  href="https://gmail.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaEnvelope size={24} />
          </a>
        </div>
      </section>
    </div>
  );
};
