import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for type checking
import mapImage from '@/assets/map.png';

const Modal = ({ isOpen, onClose, phone, address, email, mapImageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" role="dialog" aria-modal="true">
      <div className="bg-white p-8 rounded-lg shadow-lg w-11/12 md:w-1/3 relative">
        {/* Close button for the modal */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
          aria-label="Close modal"
        >
          &times;
        </button>
        
        {/* Introduction text */}
        <p className='mb-4 text-green-600'>Contact us</p>
        
        {/* Contact details */}
        <p className='text-black'><strong>Phone:</strong> {phone}</p>
        <p className='text-black'><strong>Address:</strong> {address}</p>
        <p className='text-black'><strong>Email:</strong> {email}</p>

        {/* Static map image */}
        <div className="mt-4">
          <img src={mapImageSrc} alt="Map" className="w-full h-auto rounded-lg" />
        </div>
      </div>
    </div>
  );
};

// Default props for the Modal
Modal.defaultProps = {
  phone: "091 285 0202",
  address: "Bole, Addis Ababa, Ethiopia",
  email: "contactefuyegela@gmail.com",
  mapImageSrc: mapImage,
};

// Prop types for validation
Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  phone: PropTypes.string,
  address: PropTypes.string,
  email: PropTypes.string,
  mapImageSrc: PropTypes.string,
};

// Default export here
export default Modal;
