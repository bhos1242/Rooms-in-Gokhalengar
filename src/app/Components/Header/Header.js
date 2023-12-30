// Import necessary modules and styles
"use client"
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  // Use the useSession hook to retrieve user session information
  const session = useSession();

  // State to track mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 dark:bg-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/">
          <p className="flex items-center space-x-3 cursor-pointer">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Flowbite Logo"
              width={32}
              height={32}
            />
            <span className="text-xl font-semibold text-gray-800 dark:text-white">
              Rooms In Gokhalenagar
            </span>
          </p>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/post-vacancy">Post Vacancy</NavLink>
          <NavLink href="/find-room">Find Room</NavLink>
          <NavLink href="/messages">Messages</NavLink>

          {/* Conditional rendering based on authentication status */}
          {session.status === 'unauthenticated' && (
            <>
              <NavLink href="/login">Login</NavLink>
              <NavLink href="/resister">Sign Up</NavLink>
            </>
          )}
          {session.status==='authenticated' &&(
            <NavLink href="/logout">Logout</NavLink>

          )}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-500 focus:outline-none"
          aria-label="Open Menu"
        >
          <svg
            className={`w-6 h-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            className={`w-6 h-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-white border-t border-gray-200 dark:bg-gray-900`}
      >
        <div className="container mx-auto p-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/post-vacancy">Post Vacancy</NavLink>
          <NavLink href="/find-room">Find Room</NavLink>
          <NavLink href="/messages">Messages</NavLink>

          {/* Conditional rendering based on authentication status */}
          {session.status === 'unauthenticated' && (
            <>
              <NavLink href="/login">Login</NavLink>
              <NavLink href="/resister">Sign Up</NavLink>
            </>
          )}
        {session.status==='authenticated' &&(
            <NavLink href="/logout">Logout</NavLink>

          )}
        </div>
      </div>
    </nav>
  );
}

// Custom NavLink component to handle active state
function NavLink({ href, children }) {
  return (
    <Link href={href}>
      <p className="text-gray-700 dark:text-white hover:text-blue-500 cursor-pointer py-2">
        {children}
      </p>
    </Link>
  );
}
