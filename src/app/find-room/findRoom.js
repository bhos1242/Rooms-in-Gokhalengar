"use client";
import { useState, useEffect } from "react";
import { getRoomDetails } from "../../services/roomService";
import RoomCard from "./RoomCard";
import Link from "next/link";

const FindRoom = () => {
  const [roomDetails, setRoomDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchRoomDetails();
  }, []);

  const fetchRoomDetails = async () => {
    try {
      const response = await getRoomDetails();
      if (response.status) {
        setRoomDetails(response.data);
      } else {
        setError("Failed to fetch room details");
      }
    } catch (error) {
      setError("Error fetching room details");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredRooms = roomDetails.filter(
    (room) =>
      room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      room.rent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl p-8 mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-blue-600">Find a Room</h2>
        <Link href="/post-vacancy">
          <button className="px-4 py-2 text-white bg-blue-600 rounded-md focus:outline-none hover:bg-blue-700">
            Post Vacancy
          </button>
        </Link>
      </div>
      <input
        type="text"
        placeholder="Search by title, rent, or location"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-3 mb-8 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
      {loading && (
        <p className="text-2xl text-center text-gray-700">Loading...</p>
      )}
      {error && <p className="text-2xl text-center text-red-500">{error}</p>}
      {!loading && !error && (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredRooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </div>
      )}
    </div>
  );
};

export default FindRoom;
