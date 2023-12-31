"use client"
import React, { useEffect, useState } from 'react';
import { getRoomDetails } from '../../services/roomService';

const FindRoom = () => {
  const [roomDetails, setRoomDetails] = useState([]);

  useEffect(() => {
    // Fetch room details when the component mounts
    fetchRoomDetails();
  }, []);

  const fetchRoomDetails = async () => {
    try {
      // Fetch room details from the server
      const response = await getRoomDetails();
      if (response.status) {
        // Set the fetched room details in the state
        setRoomDetails(response.data);
      } else {
        console.error("Failed to fetch room details");
      }
    } catch (error) {
      console.error("Error fetching room details:", error);
    }
  };

  return (
    <div className="container mx-auto mt-8 p-4">
      <h2 className="text-4xl font-semibold mb-6 text-center text-blue-500">Find a Room</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {roomDetails.map((room) => (
          <div key={room._id} className="bg-white rounded-lg overflow-hidden shadow-md">
            <img
              src="room-image-placeholder.jpg" // Replace with actual image URL or use room images from your server
              alt={`Room: ${room.title}`}
              className="w-full h-48 object-cover md:h-64"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{room.title}</h3>
              <p className="text-gray-600 mb-4">{room.description}</p>
              <div className="flex flex-col mb-4">
                <span className="font-semibold text-gray-800">Rent:</span>
                <span className="text-gray-600">{`Rs${room.rent}`}</span>
              </div>
              <div className="flex flex-col mb-4">
                <span className="font-semibold text-gray-800">Location:</span>
                <span className="text-gray-600">{room.location}</span>
              </div>
              <div className="flex flex-col mb-4">
                <span className="font-semibold text-gray-800">Accommodation Type:</span>
                <span className="text-gray-600">{room.accommodationType}</span>
              </div>
              <div className="flex flex-col mb-4">
                <span className="font-semibold text-gray-800">Contact Info:</span>
                <span className="text-gray-600">{room.contactInfo}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-800">Light Bill Included:</span>
                <span className={`text-${room.lightBillIncluded ? 'green' : 'red'}-600`}>
                  {room.lightBillIncluded ? 'Yes' : 'No'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FindRoom;
