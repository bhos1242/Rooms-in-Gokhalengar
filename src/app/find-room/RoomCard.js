import React from "react";
import { BiMap, BiHomeAlt, BiMoney, BiPhone, BiCheck } from "react-icons/bi";

const RoomCard = ({ room }) => {
  return (
    <div className="mb-8 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-md">
      <h3 className="p-4 text-xl font-semibold text-white text-gray-800 bg-blue-500">
        {room.title}
      </h3>
      <p className="px-4 pb-4 mt-4 text-gray-600">{room.description}</p>

      <div className="p-4">
        <div className="flex items-center mb-4">
          <BiMap className="w-5 h-5 mr-2 text-gray-700" />
          <span className="text-sm text-gray-700">{room.location}</span>
        </div>

        <div className="flex items-center mb-4">
          <BiHomeAlt className="w-5 h-5 mr-2 text-gray-700" />
          <span className="text-sm text-gray-700">
            {room.accommodationType}
          </span>
        </div>

        <div className="flex items-center mb-4">
          <BiMoney className="w-5 h-5 mr-2 text-gray-700" />
          <span className="text-sm font-semibold text-gray-700">{`Rs.${room.rent}`}</span>
        </div>

        <div className="flex items-center mb-4">
          <BiPhone className="w-5 h-5 mr-2 text-gray-700" />
          <span className="text-sm text-gray-700">
            Contact: {room.contactInfo}
          </span>
        </div>

        <div className="flex items-center mb-4">
          <BiCheck className="w-5 h-5 mr-2 text-gray-700" />
          <span className="text-sm text-gray-700">
            Light Bill Included: {room.lightBillIncluded ? "Yes" : "No"}
          </span>
        </div>
      </div>

      {/* Additional Room Amenities */}
      {room.amenities && (
        <div className="p-4 border-t border-gray-300">
          <h4 className="mb-2 text-lg font-semibold text-gray-800">
            Amenities
          </h4>
          <ul className="list-disc list-inside">
            {room.amenities.map((amenity, index) => (
              <li
                key={index}
                className="flex items-center mb-1 text-sm text-gray-700"
              >
                <BiCheck className="w-4 h-4 mr-2 text-blue-500" />
                {amenity}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RoomCard;
