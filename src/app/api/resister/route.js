
import { NextResponse } from "next/server";
import connect from "../../../db/mongodb";
import bcrypt from "bcryptjs";
import User from "../../../models/userModel"
export async function POST(request) {
  try {
    connect();
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        {
          message: "Email is already registered.",
          status: false,
        },
        {
          status: 400,
        }
      );
    }

    // Create a new user instance with the role field
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
   // Include the role field in the user instance
    });

    // Save the new user to the database
    await newUser.save();

    return NextResponse.json(
      {
        message: "You are registered successfully.",
        status: true,
      },
      {
        status: 201,
      },
      console.log(newUser)
    );
  } catch (error) {
    console.error("Error registering user:", error);
    return NextResponse.json({
      message: `Failed to add user: ${error.message}`,
      status: false,
    });
  }
}