// Import necessary modules and styles
import { NextResponse } from "next/server";
import connect from "../../../db/mongodb";
import bcrypt from "bcryptjs";
import User from "../../../models/userModel";

export async function POST(request) {
  try {
    connect();
    const { email, password } = await request.json();
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
          status: false,
        },
        {
          status: 400,
        }
      );
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (passwordMatch) {
      return NextResponse.json(
        {
          message: "Login successful",
          status: true,
        },
        {
          status: 200,
        }
      );
    } else {
      return NextResponse.json(
        {
          message: "Invalid credentials",
          status: false,
        },
        {
          status: 400,
        }
      );
    }
  } catch (error) {
    console.error("Error logging in user:", error);
    return NextResponse.json({
      message: `Error logging in user: ${error.message}`,
      status: false,
    });
  }
}
