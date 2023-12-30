"use client";
import React from 'react'
import { useState } from 'react';
const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Add logic to handle the signup form submission
        try {
            const response = await addUser(formData); // Assuming registerUser handles API call and returns response
            if (response.status) {
              toast.success(response.message);
              setFormData({
                name: "",
                email: "",
                password: "",
              });
              router.push("/login"); // Redirect to login page after successful registration
            } else {
              toast.error(response.message);
            }
          } catch (error) {
            toast.error("Error registering user");
            console.error("Error registering user:", error);
          }
    
      return (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="bg-white p-8 rounded-md shadow-md max-w-md w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none text-black focus:ring focus:border-blue-300"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 p-3 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 text-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      );
}
}

export default Signup;