import { NextResponse } from "next/server";
import connect from "../../../db/mongodb";
import Room from "../../../models/roomModel";

export async function POST(request) {
  try {
    connect();
    const { title, location, accommodationType, description, rent, contactInfo, lightBillIncluded } = await request.json();

    // Create a new room instancez
    const newRoom = new Room({
      title,
      location,
      accommodationType,
      description,
      rent,
      contactInfo,
      lightBillIncluded,
      
    });

    // Save the new room to the database
    await newRoom.save();

    return NextResponse.json(
      {
        message: "Vacancy added successfully.",
        status: true,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error("Error adding vacancy:", error);
    return NextResponse.json({
      message: `Failed to add vacancy: ${error.message}`,
      status: false,
    });
  }
}
