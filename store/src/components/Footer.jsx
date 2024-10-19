import React, { useState } from 'react';
import FeedbackModal from './FeedbackModal'; // Adjust the path as necessary
import Modal from './Modal'; // Adjust the path as necessary

const Footer = () => {
  const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const openFeedbackModal = (e) => {
    e.preventDefault(); // Prevent the default link action
    setIsFeedbackModalOpen(true);
  };

  const closeFeedbackModal = () => {
    setIsFeedbackModalOpen(false);
  };

  const openContactModal = (e) => {
    e.preventDefault(); // Prevent the default link action
    setIsContactModalOpen(true);
  };

  const closeContactModal = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div>
      <div className="bg-green-900 text-white py-8">
        <div className="container mx-auto grid grid-cols-4 gap-4">

          {/* Logo and Social Links */}
          <div>
            <p className='text-4xl font-bold'>EGA</p>
            <p className='text-lg mt-2'>Egame Store</p>
            <div className="flex gap-4 mt-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Store Links */}
          <div>
            <p className='text-2xl font-bold'>Store</p>
            <ul className='mt-4'>
              <li><a href="/about-us" className='text-lg hover:underline'>About Us</a></li>
              <li><a href="#" className='text-lg hover:underline' onClick={openContactModal}>Contact Us</a></li>
              <li>
                <a href="#" className='text-lg hover:underline' onClick={openFeedbackModal}>
                  Feedbacks
                </a>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <p className='text-2xl font-bold'>Support</p>
            <ul className='mt-4'>
              <li><a href="/help-center" className='text-lg hover:underline'>Help Center</a></li>
              <li><a href="/terms-of-service" className='text-lg hover:underline'>Terms of Service</a></li>
              <li><a href="/legal" className='text-lg hover:underline'>Legal</a></li>
              <li><a href="/privacy-policy" className='text-lg hover:underline'>Privacy Policy</a></li>
            </ul>
          </div>

          {/* Newsletter Sign-up */}
          <div>
            <p className='text-2xl font-bold'>Stay up to date</p>
            <div className='mt-4 flex'>
              <input
                id="user-text"
                type="email"
                placeholder="Your email address"
                className="text-lg border border-gray-300 p-2 rounded-md flex-1"
              />
              <button
                onClick={() => {
                  const userInput = document.getElementById('user-text').value;
                  if (userInput) {
                    window.location.href = `https://t.me/edltad?text=${encodeURIComponent(userInput)}`;
                  }
                }}
                className="text-white p-2 rounded-md flex items-center justify-center ml-2"
              >
                <i className="fab fa-telegram-plane text-xl"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Include the feedback modal here */}
      <FeedbackModal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal} />
      
      {/* Include the contact modal using the existing Modal component */}
      <Modal isOpen={isContactModalOpen} onClose={closeContactModal} />
    </div>
  );
};

export default Footer;
