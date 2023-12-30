// Import necessary modules and styles
"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

// Reusable hooks for loading and error handling
const useLoading = () => {
  const [loading, setLoading] = useState(false);
  return [loading, setLoading];
};

const useError = () => {
  const [error, setError] = useState(null);
  return [error, setError];
};

// LoginPage component with enhanced features
const LoginPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useLoading();
  const [error, setError] = useError();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    } else {
      setLoading(false);
    }
  }, [status, router, setLoading]);

  const handleSignIn = async (provider, credentials) => {
    setLoading(true);
    try {
      const response = await signIn(provider, { ...credentials });
      
      if (response) {
        toast.success("Login successful");
       
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(error.message);
      toast.error("Login failed. Please try again.");
    } finally {
      setLoading(false);

      // Redirect after displaying the toast
      
      router.replace("/");
    }
  };

  // Function to handle email/password sign-in
  const handleEmailSignIn = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    // Validate email and password as needed

    handleSignIn("credentials", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-md w-full md:w-96">
        {/* Semantic HTML structure */}
        <header className="text-center mb-8">
          <h1 className="text-2xl font-semibold text-black">
            Welcome to Your App
          </h1>
          <p className="text-gray-600">Sign in to continue</p>
        </header>

        {loading && (
          <div className="flex justify-center">
            <div className="spinner-border" role="status"></div>
          </div>
        )}

        {error && (
          <div className="alert alert-danger mt-4" role="alert">
            {error}
          </div>
        )}

        <main>
          {/* Social login buttons with loading indicators */}
          <button
            onClick={() => handleSignIn("google")}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 mt-4"
            disabled={loading} // Disable button during sign-in
          >
            Sign in with Google
            {loading && (
              <span className="ml-2 inline-block">
                <div className="spinner-border" role="status"></div>
              </span>
            )}
          </button>

          {/* Add more providers as needed */}
          <button
            onClick={() => handleSignIn("github")}
            className="w-full py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring focus:border-gray-600 mt-2"
            // ...
          >
            Sign in with GitHub
          </button>

          {/* Email/password option */}
          <form onSubmit={handleEmailSignIn} className="mt-4">
            <label className="block mb-2 text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
            <label className="block mt-2 mb-2 text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-md text-black"
              required
            />
            <button
              type="submit"
              className="w-full mt-2 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              disabled={loading} // Disable button during sign-in
            >
              Sign in with Email
              {loading && (
                <span className="ml-2 inline-block">
                  <div className="spinner-border" role="status"></div>
                </span>
              )}
            </button>
          </form>
        </main>

        {session && (
          <footer className="mt-4">
            <p className="text-gray-700">
              Welcome back, {session.user.name || "User"}!
            </p>
            <p className="text-sm text-gray-500">Email: {session.user.email}</p>
          </footer>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
