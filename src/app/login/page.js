// Import necessary modules and styles
"use client"
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const LoginPage = () => {
  // Use the useSession hook to retrieve user session information
  const { data: session, status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Redirect to home page if already authenticated
  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/');
    } else {
      setLoading(false);
    }
  }, [status, router]);

  // Function to handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      const response = await signIn('google');
      if(response){

        toast.success('Login successful');
      }
      router.replace('/');
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-8 bg-white shadow-md rounded-md">
        <h1 className="text-2xl font-semibold mb-4">Welcome to Your App</h1>
        <p className="text-gray-600 mb-8">Sign in to continue</p>

        {/* Google Sign-In Button */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Sign in with Google
        </button>

        {/* Display user information if available */}
        {session && (
          <div className="mt-4">
            <p className="text-gray-700">
              Welcome back, {session.user.name || 'User'}!
            </p>
            <p className="text-sm text-gray-500">Email: {session.user.email}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
