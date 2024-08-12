import React from 'react';

const About = () => {
  return (
    <div className="flex-grow flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-6 text-center">About Our Todo App</h1>
        <p className="mb-4 text-lg">
          Welcome to our Todo App! This application is designed to help you organize your tasks efficiently and boost your productivity.
        </p>
        <p className="mb-4 text-lg">
          Key features of our app include:
        </p>
        <ul className="list-disc list-inside mb-4 text-lg">
          <li>Simple and intuitive task management</li>
          <li>Ability to add, complete, and delete tasks</li>
          <li>Clean and responsive user interface</li>
          <li>Fun confetti celebration feature</li>
        </ul>
        <p className="text-lg">
          We're constantly working to improve and add new features to make your task management experience even better. Stay tuned for updates!
        </p>
      </div>
    </div>
  );
};

export default About;