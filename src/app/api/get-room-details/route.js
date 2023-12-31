// pages/api/get-room-details.js
import { NextResponse } from "next/server";
import connect from "../../../db/mongodb";
import Room from "../../../models/roomModel";

export async function GET() {
  try {
    connect();
    // Fetch all room details from the database
    const roomDetails = await Room.find();
    
    return NextResponse.json(
      {
        data: roomDetails,
        status: true,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error fetching room details:", error);
    return NextResponse.json({
      message: `Failed to fetch room details: ${error.message}`,
      status: false,
    });
  }
}
