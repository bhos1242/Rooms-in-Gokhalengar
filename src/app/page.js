// Import the necessary modules
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import hero1 from "./assets/hero1.jpg";

// Updated HomePage component for "Rooms in Gokhalenagar"
const HomePage = () => {
  return (
    <>
      <section className="bg-white">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-blue-500">
              Find Your Ideal Room in Gokhalenagar
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Discover comfortable and affordable rooms for rent in Gokhalenagar. Your perfect space is just a click away.
            </p>
            <div className="flex space-x-4">
              <Link href="/find-room">
                <p className="flex items-center justify-center px-5 py-3 text-base font-medium text-white rounded-md bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">
                  Explore Rooms
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </p>
              </Link>
              <Link href="/contact">
                <p className="flex items-center justify-center px-5 py-3 text-base font-medium text-gray-900 border border-gray-300 rounded-md hover:bg-gray-100 focus:ring-4 focus:ring-gray-100">
                  Contact Us
                </p>
              </Link>
            </div>
          </div>
          <div className="lg:hidden mt-8">
            <p className="text-center text-gray-500">Hero image is not shown on small screens.</p>
          </div>
          <div className="hidden lg:block lg:col-span-5 sm:block">
            <div className="relative rounded-md overflow-hidden">
              <Image src={hero1} alt="Room" className="object-cover w-full h-full" layout="responsive" width={500} height={500} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
