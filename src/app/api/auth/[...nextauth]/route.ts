import NextAuth from "next-auth";
import { authOptions } from "../../../../utils/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

// Export the handler as GET and POST (for compatibility with API routes)
