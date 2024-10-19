import React from 'react';
import profileImage from '@/assets/profile.jpg'; 
import { Button } from '@/components/ui/button';

const About = () => {
  return (
    <section id="about" className="bg-gray-900 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-8">About Efuye Gela</h2>

        {/* Main About Section */}
        <div className="flex flex-col md:flex-row items-center mb-16">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={profileImage}
              alt="Efuye Gela"
              className="rounded-full w-64 h-64 mx-auto md:mx-0 border-4 border-yellow-400"
            />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <p className="text-lg text-white mb-4">
              Welcome to <strong>Efuye Gela</strong>, your ultimate destination for premium gaming events! We are dedicated 
              to delivering unforgettable experiences through our carefully curated gaming tournaments, 
              conventions, and gatherings. From Chewata Awaki to other exciting games, our goal is to bring 
              gamers together in fun, competitive, and community-driven environments.
            </p>
            <p className="text-lg text-gray-300 mb-4">
              Founded by a passionate team of event organizers and gaming enthusiasts, we have successfully hosted 
              events that blend traditional gaming with modern entertainment. Our mission is to create seamless, 
              hassle-free experiences for both attendees and organizers.
            </p>
            <Button className="mt-8 px-6 py-3 text-lg font-semibold text-white bg-yellow-400 hover:bg-yellow-600 rounded-md transition duration-300">
              Learn More
            </Button>
          </div>
        </div>

        {/* Vision & Mission Section */}
        <div className="bg-gray-800 py-12 px-6 rounded-lg mb-16">
          <h3 className="text-3xl font-bold text-center text-yellow-400 mb-6">Our Vision & Mission</h3>
          <div className="flex flex-col md:flex-row text-gray-300">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-6">
              <h4 className="text-2xl font-semibold text-white mb-4">Vision</h4>
              <p className="text-lg">
                Our vision is to become the leading platform for gaming enthusiasts, providing seamless event management 
                and ticketing solutions that enhance the gaming community experience in Ethiopia and beyond.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-6">
              <h4 className="text-2xl font-semibold text-white mb-4">Mission</h4>
              <p className="text-lg">
                We are committed to fostering a vibrant gaming culture by delivering hassle-free, exciting, and well-organized events 
                that allow attendees to fully immerse themselves in the gaming world. Our mission is to simplify event management 
                for organizers and enhance engagement for participants.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-12">
          <h3 className="text-3xl font-bold text-center text-yellow-400 mb-8">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
            <div>
              <img
                src={profileImage}
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto border-4 border-yellow-400 mb-4"
              />
              <h4 className="text-xl font-semibold">Alemu Kebede</h4>
              <p className="text-gray-300">Founder & CEO</p>
            </div>
            <div>
              <img
                src={profileImage}
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto border-4 border-yellow-400 mb-4"
              />
              <h4 className="text-xl font-semibold">Liya Mekonnen</h4>
              <p className="text-gray-300">Chief Event Coordinator</p>
            </div>
            <div>
              <img
                src={profileImage}
                alt="Team Member"
                className="rounded-full w-32 h-32 mx-auto border-4 border-yellow-400 mb-4"
              />
              <h4 className="text-xl font-semibold">Samuel Tadesse</h4>
              <p className="text-gray-300">Head of Technology</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-yellow-400 text-gray-900 py-12 rounded-lg text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Join the Fun?</h3>
          <p className="text-lg mb-6">
            Be a part of our growing community and experience the best gaming events Ethiopia has to offer. 
            Sign up now to stay updated with upcoming events!
          </p>
          <Button className="px-6 py-3 text-lg font-semibold bg-black hover:bg-gray-800 text-white rounded-md transition duration-300">
            Sign Up Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default About;
