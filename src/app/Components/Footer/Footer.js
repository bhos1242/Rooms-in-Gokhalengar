import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Rooms in Gokhalenagar</h3>
            <p className="text-gray-400">Find your ideal room for rent in Gokhalenagar.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="list-none">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/find-room">Find Room</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <p className="text-gray-400">123 Street, Gokhalenagar</p>
            <p className="text-gray-400">Email: info@example.com</p>
            <p className="text-gray-400">Phone: +1 234 567 890</p>
          </div>
          <div className="mb-6">
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-600 pt-6 text-center">
        <p className="text-gray-400">&copy; 2023 Rooms in Gokhalenagar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
