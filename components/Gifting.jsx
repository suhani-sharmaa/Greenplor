import React from 'react';
import Gifts from '../images/Gifts.png';

// Array containing gift information
const gifts = [
  { id: 1, name: 'Gift1' },
  { id: 2, name: 'Gift2' },
  { id: 3, name: 'Gift3' },
  { id: 4, name: 'Gift4' }, // Updated gift name
];

function Gifting() {
  return (
    <div>
      {/* Heading for the section */}
      <div
        className="text-[#195B3E] text-4xl mt-4  flex items-center justify-center"
        style={{ fontFamily: 'Jacques Francois, serif' }}
      >
        Discover Eco-Friendly Gift Ideas!
      </div>
      
      {/* Container for the gift items */}
      <div className="flex items-center justify-center">
        <div className="w-[90vw] bg-[#C2D2CA] h-[60vh] mt-3 mb-4 flex items-center justify-evenly">
          {/* Mapping over gifts to display each one */}
          {gifts.map((gift) => (
            <a key={gift.id} href="#">
              <div className="relative bg-white h-[50vh] w-[20vw] hover:scale-105 transition-transform duration-300 group">
                {/* Gift image */}
                <img
                  src={Gifts}
                  alt={`Gift ${gift.name}`}
                  className="object-cover w-full h-full"
                />
                {/* Gift name, visible on hover */}
                <h2 className="absolute flex items-center justify-center text-3xl text-[#195B3E] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ">
                  {gift.name}
                </h2>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gifting;
