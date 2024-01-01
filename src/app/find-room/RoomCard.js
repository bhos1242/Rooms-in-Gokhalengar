import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 8px;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  & svg {
    margin-right: 8px;
  }

  & span {
    font-size: 0.9rem;
    color: #777;
  }
`;

const AmenitiesList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const AmenityItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  & svg {
    margin-right: 8px;
    width: 16px;
    height: 16px;
    fill: #555;
  }

  & span {
    font-size: 0.9rem;
    color: #777;
  }
`;

const RoomCard = ({ room }) => {
  return (
    <Card>
      <Title>{room.title}</Title>
      <Description>{room.description}</Description>

      <DetailsContainer>
        <DetailItem>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0C3.134 0 0 3.134 0 7c0 4.183 3.209 7.62 7.313 7.984.05.007.1.016.15.023a.487.487 0 0 0 .107.01.488.488 0 0 0 .1-.01c.05-.007.1-.016.15-.023C10.791 14.62 14 11.183 14 7c0-3.866-3.134-7-7-7zm0 1.574c3.292 0 5.956 2.664 5.956 5.956 0 1.42-.502 2.753-1.344 3.777l-4.516 6.566a.5.5 0 0 1-.792 0L2.388 9.307A5.947 5.947 0 0 1 1.574 7c0-3.292 2.664-5.956 5.956-5.956zM7 3.238c-2.72 0-4.926 2.207-4.926 4.926 0 2.72 2.206 4.926 4.926 4.926 2.719 0 4.926-2.206 4.926-4.926 0-2.719-2.207-4.926-4.926-4.926z"
              fill="#777"
            />
          </svg>
          <span>{room.location}</span>
        </DetailItem>

        <DetailItem>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.6 0H2.4A2.4 2.4 0 0 0 0 2.4v9.2A2.4 2.4 0 0 0 2.4 14h9.2A2.4 2.4 0 0 0 14 11.6V2.4A2.4 2.4 0 0 0 11.6 0zM13 11.6a.6.6 0 0 1-.6.6H9.333V8.267H6.267V12.2H2.6a.6.6 0 0 1-.6-.6V2.6c0-.33.27-.6.6-.6h8.8c.33 0 .6.27.6.6V6.533H13V11.6z"
              fill="#777"
            />
          </svg>
          <span>{room.accommodationType}</span>
        </DetailItem>

        <DetailItem>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 0h10c1.104 0 2 .896 2 2v10c0 1.104-.896 2-2 2H2C.896 14 0 13.104 0 12V2C0 .896.896 0 2 0zM4 2v8h2V2H4zm4 0v8h2V2H8z"
              fill="#555"
            />
          </svg>
          <span>{`Rs.${room.rent}`}</span>
        </DetailItem>

        <DetailItem>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.667 0H2.333C1.047 0 0 1.048 0 2.333v9.334C0 12.952 1.048 14 2.333 14h9.334C12.952 14 14 12.952 14 11.667V2.333C14 1.048 12.952 0 11.667 0zM12 11.667a1.33 1.33 0 0 1-1.333 1.333H3.333A1.33 1.33 0 0 1 2 11.667V2.333A1.33 1.33 0 0 1 3.333 1h7.334A1.33 1.33 0 0 1 12 2.333V11.667zM10 3.667a.666.666 0 0 0-.666-.667H4.666a.666.666 0 0 0 0 1.333h4.667a.666.666 0 0 0 .666-.666zM11 6a1 1 0 0 0-1 1v3a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1z"
              fill="#555"
            />
          </svg>
          <span>Contact: {room.contactInfo}</span>
        </DetailItem>

        <DetailItem>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.444 1.856C11.52.932 10.074.75 7 1.167c-.09.012-.213.03-.332.05-.176.03-.366.063-.568.103C4.273 1.429 3.58 1.96 3 2.61c-1.3 1.3-1.8 3.14-1.855 4.65-.032.887.04 1.745.198 2.412.323 1.16.78 2.035 1.584 2.84.804.805 1.68 1.26 2.84 1.583.666.16 1.524.23 2.41.2 1.51-.055 3.35-.554 4.65-1.855.65-.65 1.18-1.273 1.455-1.814.06-.115.1-.23.143-.344.046-.132.08-.242.14-.403.08-.21.188-.503.335-.883.292-.73.673-1.682 1.564-2.576 1.107-1.106 2.774-1.372 3.86-.287 1.318 1.317.49 4.926-1.81 6.226-2.932 1.238-6.703 1.912-9.54.15z"
              fill="#555"
            />
          </svg>
          <span>
            Light Bill Included: {room.lightBillIncluded ? 'Yes' : 'No'}
          </span>
        </DetailItem>

        <DetailItem>
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 0h10c1.104 0 2 .896 2 2v10c0 1.104-.896 2-2 2H2C.896 14 0 13.104 0 12V2C0 .896.896 0 2 0zM4 2v8h2V2H4zm4 0v8h2V2H8z"
              fill="#555"
            />
          </svg>
          <span>{room.contactInfo}</span>
        </DetailItem>

        {/* Add more details as needed */}
      </DetailsContainer>

      {/* Additional Room Amenities */}
      {room.amenities && (
        <>
          <h4>Amenities</h4>
          <AmenitiesList>
            {room.amenities.map((amenity, index) => (
              <AmenityItem key={index}>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="16" height="16" rx="2" fill="#555" />
                </svg>
                <span>{amenity}</span>
              </AmenityItem>
            ))}
          </AmenitiesList>
        </>
      )}
    </Card>
  );
};

export default RoomCard;
