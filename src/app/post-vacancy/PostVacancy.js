    "use client"
    import React, { useState } from 'react';
    import connectDb from "../../db/mongodb"
    const PostVacancy = () => {
      connectDb();
      const [formData, setFormData] = useState({
        title: '',
        location: '',
        accommodationType: '',
        description: '',
        rent: '',
        contactInfo: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle the form submission, e.g., send data to the server
        console.log('Form submitted:', formData);
      };
    
      return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white shadow-md rounded-md">
          <h2 className="text-3xl font-semibold mb-6 text-center text-blue-500">Post Vacancy</h2>
          <form onSubmit={handleSubmit}>
            {/* Individual input fields */}
            {[
              { label: 'Title', name: 'title', type: 'text' },
              { label: 'Location', name: 'location', type: 'text' },
              { label: 'Accommodation Type', name: 'accommodationType', type: 'text' },
              { label: 'Description', name: 'description', type: 'textarea', rows: 4 },
              { label: 'Rent', name: 'rent', type: 'text' },
              { label: 'Contact Information', name: 'contactInfo', type: 'text' },
            ].map((field) => (
              <div key={field.name} className="mb-6">
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-600 mb-1"
                >
                  {field.label}
                </label>
                {field.type === 'textarea' ? (
                  <textarea
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    rows={field.rows || 4}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md resize-none"
                    required
                  />
                ) : (
                  <input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                    required
                  />
                )}
              </div>
            ))}
            {/* Submit button */}
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 w-full"
            >
              Post Vacancy
            </button>
          </form>
        </div>
      );
    };
    
    export default PostVacancy;
    