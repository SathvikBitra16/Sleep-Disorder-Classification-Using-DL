import React from "react";
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token"); // Check if user is logged in
    if (token) {
      navigate("/dashboard"); // Redirect if authenticated
    }
  }, [navigate]); // Runs when component mounts
  return (
    <div className="overflow-x-hidden">
      <header className="relative py-4 md:py-6 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            {/* Logo */}
            <div className="flex-shrink-0">
              <a
                href="/"
                className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                <img className="w-42 h-32 mt-0 ml-0" src="/images/logo.png" alt="Logo" />

              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden">
              <button type="button" className="text-gray-900">
                <svg
                  className="w-7 h-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:absolute lg:inset-y-0 lg:flex lg:items-center lg:justify-center lg:space-x-12 lg:-translate-x-1/2 lg:left-1/2">
              <a
                href="/"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Home
              </a>
              <a
                href="#types"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                About Sleep Disorders
              </a>
              <a
                href="#contact"
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Contact Us
              </a>
            </div>

            {/* Login & Join Buttons */}
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
              <Link
                to="/login" // Set the route for the Login page
                className="text-base font-medium text-gray-900 transition-all duration-200 rounded hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
              >
                Login
              </Link>
              <Link
                to="/register" // Set the route for the Sleep Report page
                className="px-5 py-2 text-base font-semibold leading-7 text-gray-900 transition-all duration-200 border border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                role="button"
              >
                Register
              </Link>
            </div>
            </div>
            </div>
            </header>

            {/* Hero Section */}
            <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0 bg-gray-50">
              <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                  <p className="inline-flex px-4 py-2 text-base text-gray-900 border border-gray-200 rounded-full">
                    AI-Powered Sleep Disorder Detection
                  </p>
                  <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">
                    Discover Your Sleep Health with AI (Deep Learning)
                  </h1>
                  <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600">
                    Upload your sleep data and get an AI-driven diagnosis for possible sleep disorders.  
                    Take the first step toward better sleep health.
                  </p>

                  {/* Call to Action Button */}
                  <div className="relative inline-flex mt-10 group">
                    <div className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                    <Link
                      to="/register"
                      className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 rounded-xl"
                      role="button"
                      >
                      Upload Your Sleep Data
                    </Link>
                  </div>
                </div>
              </div>

              
            </section>
            <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0 bg-gray-50" id="types">
              <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-center">
                <h1 className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">Understanding Sleep Disorders</h1>
                <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-600">Our project focuses on detecting and analyzing various sleep disorders using deep learning techniques.</p>
              </div>
            </section>

            <section className="relative py-12 sm:py-16 bg-gray-50">
              <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="mt-10 flex flex-col md:flex-row items-start justify-start gap-8">
                  <div className="flex-none mt-32 ml-[-5%] mr-4"> {/* Adjust margin to move left and down */}
                    <img
                      className="object-cover object-top w-full h-auto max-w-xs" // Adjust width as needed
                      src="/images/hero-image.png"
                      alt="AI Sleep Analysis"
                    />
                  </div>
                  <div className="flex-grow"> {/* Allow this div to take up more space */}
                    <div className="max-w-3xl mx-auto text-left"> {/* Align text to the left */}
                      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Types of Sleep Disorders</h2>
                    </div>

                    <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                      <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900">Insomnia</h3>
                        <p className="mt-4 text-base text-gray-600">A disorder causing difficulty falling or staying asleep, leading to fatigue and concentration issues.</p>
                      </div>

                      <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900">Sleep Apnea</h3>
                        <p className="mt-4 text-base text-gray-600">A disorder causing breathing to stop and start while you sleep. It can be serious and prevent your body from getting enough oxygen.</p>
                      </div>

                      <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900">Nocturnal Frontal-Lobe Epilepsy</h3>
                        <p className="mt-4 text-base text-gray-600">A rare condition where seizures occur during sleep, causing sudden movements and disturbances.</p>
                      </div>

                      <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900">Narcolepsy</h3>
                        <p className="mt-4 text-base text-gray-600">A neurological disorder that disrupts sleep-wake cycles, causing excessive daytime sleepiness and sudden sleep attacks.</p>
                      </div>

                      <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900">REM Sleep Behavior Disorder</h3>
                        <p className="mt-4 text-base text-gray-600">A condition where individuals physically act out vivid dreams due to disrupted muscle paralysis during REM sleep.</p>
                      </div>

                      <div className="p-6 bg-white rounded-lg shadow-md">
                        <h3 className="text-2xl font-bold text-gray-900">Periodic Leg Movement Disorder</h3>
                        <p className="mt-4 text-base text-gray-600">A sleep disorder causing repetitive leg movements during sleep, leading to frequent awakenings and poor sleep quality.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="relative py-12 sm:py-16 lg:pt-20 xl:pb-0 bg-gray-800" id="contact">
              <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-3xl mx-auto text-center">
                  <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                    Contact Us
                  </h2>
                  <p className="max-w-md mx-auto mt-6 text-base leading-7 text-gray-300">
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
    </div>

  );
};

export default Home;
