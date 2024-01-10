import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "../models/userModel";
import bcrypt from "bcryptjs";
import connect from "../db/mongodb";
import { NextResponse } from "next/server";
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "creds",
      credentials: {
        email: { label: "Email", placeholder: "Enter Email" },
        password: { label: "Password", placeholder: "Enter Password" },
      },
      async authorize(credentials) {
        try {
          if (!credentials || !credentials.email || !credentials.password) {
            return null;
          }
          connect();
          // Replace this with a secure database query to validate credentials
          const user = await User.findOne({ email: credentials.email });

          const passwordMatch = await bcrypt.compare(
            credentials.password,
            user.password
          );

          if (user && passwordMatch) {
            return user;
          } else {
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
        } catch (error) {
          console.error("Error during authentication:", error);
          return null;
        }
      },
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
