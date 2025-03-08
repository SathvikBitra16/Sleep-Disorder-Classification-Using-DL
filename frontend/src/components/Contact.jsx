import React from "react";
import Navbar from "./Navbar";
const Contact = () => {
  return (
    <section className="relative min-h-screen pt-0 bg-gray-50">
        <div className=""><Navbar/></div>
      <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-gray sm:text-4xl lg:text-5xl">
            Contact Us
          </h2>
          <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-800">
            Have any questions or need support? Feel free to reach out to us.
          </p>
        </div>

        <div className="mt-12 max-w-2xl mx-auto p-6 rounded-lg shadow-md bg-gray-700">
          <form>
            <div className="mb-4">
              <label className="block text-gray-300 font-medium mb-2" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 font-medium mb-2" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300 font-medium mb-2" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-600 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Write your message here..."
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 text-lg font-semibold text-white bg-gray-900 rounded-xl hover:bg-gray-700 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
      
    </section>
    
  );
};

export default Contact;
