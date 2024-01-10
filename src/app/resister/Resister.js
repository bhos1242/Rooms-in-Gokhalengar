"use client";
import { addUser } from "../../services/userService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addUser(formData);
      if (response.status) {
        toast.success(response.message);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
        router.push("/login");
      } else {
        toast.error(response.message);
      }
    } catch (error) {
      toast.error("Error registering user");
      console.error("Error registering user:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 to-blue-500">
      <div className="w-full p-8 bg-white rounded-md shadow-md md:w-96">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold text-blue-700">
            Create an Account
          </h1>
          <p className="text-gray-700">Sign up to get started</p>
        </header>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-gray-700">Your Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 text-black border border-gray-300 rounded-md"
              placeholder="Your Full Name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Your Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 text-black border border-gray-300 rounded-md"
              placeholder="name@company.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-gray-700">Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 text-black border border-gray-300 rounded-md"
              placeholder="••••••••"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            Create an Account
          </button>

          <p className="text-sm font-light text-gray-500">
            Already have an account?{" "}
            <a
              href="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              Login here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
