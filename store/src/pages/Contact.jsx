import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventType: '',
    eventDate: '',
    attendees: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, such as sending the data to an email service or backend
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We will get back to you soon.');
  };

  return (
    <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">Get in Touch</h2>
        
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="eventType" className="block text-gray-700 font-medium">
                Type of Event
              </label>
              <input
                type="text"
                id="eventType"
                name="eventType"
                value={formData.eventType}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="e.g., Gaming Tournament, LAN Party"
                required
              />
            </div>
            <div>
              <label htmlFor="eventDate" className="block text-gray-700 font-medium">
                Date of Event
              </label>
              <input
                type="date"
                id="eventDate"
                name="eventDate"
                value={formData.eventDate}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label htmlFor="attendees" className="block text-gray-700 font-medium">
                Estimated Number of Attendees
              </label>
              <input
                type="number"
                id="attendees"
                name="attendees"
                value={formData.attendees}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                placeholder="e.g., 50"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">
                Additional Information
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
                rows="5"
                placeholder="Any additional details or requests..."
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-500 text-white font-bold py-3 px-4 rounded-md hover:bg-green-700 transition duration-300"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* Contact Information Section */}
        <div className="mt-12 max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
          <p className="text-gray-700 mb-2"><strong>Office Phone:</strong> +1 (123) 456-7890</p>
          <p className="text-gray-700 mb-2"><strong>Email:</strong> support@example.com</p>
          <p className="text-gray-700 mb-2"><strong>Office Address:</strong> 1234 Street Name, City, State, 12345</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
