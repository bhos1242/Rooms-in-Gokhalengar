
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import users from "../../../../helpers/constants";
import GoogleProvider from "next-auth/providers/google"
// Define the NextAuth options
export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name:"creds",
      credentials: {
        email: { label: "Email", placeholder: "Enter Email" },
        password: {  label: "Password", placeholder: "Enter Password" },
      },
      
      async authorize(credentials) {
        // Your authentication logic goes here
        // For example, check the credentials against your database
        // and return a user object if authentication is successful.
        // If authentication fails, return null or fals

        if(!credentials || !credentials.email||!credentials.password)
            return null;

            const user=users.find((item)=>item.email==credentials.email);
            if(user?.password===credentials.password){
                return user;
            }
            return null;
        

      },
    }),

    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],


  secret:process.env.NEXTAUTH_SECRET
};

// Create the NextAuth handler with the specified options
const handler = NextAuth(authOptions);

// Export the handler as GET and POST (for compatibility with API routes)
export {handler as GET,handler as POST};
