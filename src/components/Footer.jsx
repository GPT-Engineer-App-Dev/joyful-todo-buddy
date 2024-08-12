import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Todo App. All rights reserved.</p>
        <p className="mt-2">
          <a href="#" className="hover:underline">Privacy Policy</a> | 
          <a href="#" className="hover:underline ml-2">Terms of Service</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;