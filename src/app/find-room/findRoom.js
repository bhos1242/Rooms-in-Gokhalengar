// Import necessary modules and styles
"use client";
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getRoomDetails } from '../../services/roomService';
import RoomCard from './RoomCard';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
`;

const RoomGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #555;
`;

const ErrorMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #ff0000;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 1rem;
`;

const FindRoom = () => {
  const [roomDetails, setRoomDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

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

  const filteredRooms = roomDetails.filter(room =>
    room.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
    room.rent.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Title>Find a Room</Title>
      <SearchInput
        type="text"
        placeholder="Search by title, rent, or location"
        value={searchTerm}
        onChange={handleSearch}
      />
      {loading && <LoadingMessage>Loading...</LoadingMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {!loading && !error && (
        <RoomGrid>
          {filteredRooms.map((room) => (
            <RoomCard key={room._id} room={room} />
          ))}
        </RoomGrid>
      )}
    </Container>
  );
};

export default FindRoom;
