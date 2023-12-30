"use client"
import React, { useEffect } from 'react';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

const LogoutPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/login');
    }
  }, [status, router]);

  const handleLogout = async () => {
    try {
      await signOut("google");
      toast.success('Logout successful');
      router.replace("/");
      
    } catch (error) {
      console.error('Logout error:', error);
      toast.error('Logout failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Logout</h2>
        <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
        <button
          onClick={handleLogout}
          disabled={status === 'loading'}
          className={`${
            status === 'loading' ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-500 hover:bg-red-600'
          } text-white py-2 px-4 rounded-md focus:outline-none focus:ring focus:border-red-300 w-full`}
        >
          {status === 'loading' ? 'Logging out...' : 'Logout'}
        </button>
      </div>
    </div>
  );
};

export default LogoutPage;
