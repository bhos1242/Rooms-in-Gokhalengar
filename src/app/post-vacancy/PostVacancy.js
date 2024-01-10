"use client";
import React, { useState } from "react";
import { addVacancy } from "../../services/roomService";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const PostVacancy = () => {
  const { data: session, user } = useSession();
  let posterEmail;
  if (session?.user?.email === undefined) {
    posterEmail = "abc@gmail.com";
  } else {
    posterEmail = session?.user?.email;
  }

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    accommodationType: "",
    description: "",
    rent: "",
    contactInfo: "",
    lightBillIncluded: false,
    posterEmail,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validation rules
      if (
        !formData.title ||
        !formData.location ||
        !formData.accommodationType ||
        !formData.description ||
        !formData.rent ||
        !formData.contactInfo
      ) {
        toast.error("All fields are required");
        setLoading(false);
        return;
      }

      if (isNaN(parseFloat(formData.rent))) {
        toast.error("Rent must be a number");
        setLoading(false);
        return;
      }

      // Add logic to handle the form submission, e.g., send data to the server
      const response = await addVacancy(formData);

      if (response.status) {
        toast.success("Room details added");
        setFormData({
          title: "",
          location: "",
          accommodationType: "",
          description: "",
          rent: "",
          contactInfo: "",
          lightBillIncluded: false,
        });
      } else {
        toast.error("Failed to add room details. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md p-6 mx-auto mt-8 bg-white rounded-md shadow-md">
      <h2 className="mb-6 text-3xl font-semibold text-center text-blue-500">
        Post Vacancy
      </h2>
      <form onSubmit={handleSubmit}>
        {/* Individual input fields */}
        {[
          {
            label: "Title",
            name: "title",
            type: "text",
            placeholder:
              'Enter vacancy title, e.g., "1 Vacancy available in 1bhk"',
          },
          {
            label: "Location",
            name: "location",
            type: "text",
            placeholder: 'Enter location e.g., "Near samruddhi mess"',
          },
          {
            label: "Accommodation Type",
            name: "accommodationType",
            type: "text",
            placeholder: "Enter accommodation type e.g, 1rk/1bhk",
          },
          {
            label: "Description",
            name: "description",
            type: "textarea",
            rows: 4,
            placeholder: "Enter description",
          },
          {
            label: "Rent",
            name: "rent",
            type: "text",
            placeholder: "Enter rent e.g., 2500",
          },
          {
            label: "Contact",
            name: "contactInfo",
            type: "text",
            placeholder: 'Enter contact information e.g,"vivek bhos 9022273812',
          },
        ].map((field) => (
          <div key={field.name} className="mb-6">
            <label
              htmlFor={field.name}
              className="block mb-1 text-sm font-medium text-gray-600"
            >
              {field.label}
            </label>
            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                rows={field.rows || 4}
                className="w-full p-2 mt-1 border border-gray-300 rounded-md resize-none"
                required
              />
            ) : (
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full p-2 mt-1 text-black border border-gray-300 rounded-md"
                required
              />
            )}
          </div>
        ))}

        {/* Checkbox for light bill inclusion */}
        <div className="mb-6">
          <label className="flex items-center text-sm text-gray-600">
            <input
              type="checkbox"
              id="lightBillIncluded"
              name="lightBillIncluded"
              checked={formData.lightBillIncluded}
              onChange={handleChange}
              className="mr-2"
            />
            Light Bill Included in Rent
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          className={`bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full ${
            loading && "opacity-50 cursor-not-allowed"
          }`}
          disabled={loading}
        >
          {loading ? "Posting..." : "Post Vacancy"}
        </button>
      </form>
    </div>
  );
};

export default PostVacancy;
