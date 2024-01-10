// Import necessary modules and styles
"use client";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Image from "next/image";
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
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="w-full p-8 bg-white rounded-md shadow-md md:w-96">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-blue-700">
            Welcome to Your App
          </h1>
          <p className="text-gray-700">Sign in to continue</p>
        </header>

        {loading && (
          <div className="flex justify-center">
            <div className="spinner-border" role="status"></div>
          </div>
        )}

        {error && (
          <div className="mt-4 alert alert-danger" role="alert">
            {error}
          </div>
        )}

        <main>
          {/* Social login buttons with loading indicators */}
          <button
            onClick={() => handleSignIn("google")}
            className="flex justify-center w-full py-2 mt-4 space-x-4 text-center text-black bg-gray-200 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            disabled={loading} // Disable button during sign-in
          >
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>
            </div>
            <div>
              Sign in with Google
              {loading && (
                <span className="inline-block ml-2">
                  <div className="spinner-border" role="status"></div>
                </span>
              )}
            </div>
          </button>

          {/* Email/password option */}
          <form onSubmit={handleEmailSignIn} className="mt-4">
            <label className="block mb-2 text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              className="w-full p-2 text-black border border-gray-300 rounded-md"
              required
            />
            <label className="block mt-2 mb-2 text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 text-black border border-gray-300 rounded-md"
              required
            />
            <button
              type="submit"
              className="w-full py-2 mt-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              disabled={loading} // Disable button during sign-in
            >
              Sign in with Email
              {loading && (
                <span className="inline-block ml-2">
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
