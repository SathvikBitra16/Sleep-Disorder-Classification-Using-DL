import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
import { registerUser } from "../api";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    dob: "",
    gender: "",
    password: "",
    confirm_password: "",
  });

  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirmPassword = (e) => {
    setFormData({ ...formData, confirm_password: e.target.value });

    if (formData.password !== e.target.value) {
      setPasswordError("Passwords do not match");
    } else {
      setPasswordError("");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
  
    if (!formData.name || !formData.email || !formData.dob || !formData.gender || !formData.password || !formData.confirm_password) {
      alert("All fields are required!");
      return;
    }
  
    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match!");
      return;
    }
  
    try {
      const data = await registerUser(formData); // Use the API function
      console.log("Register Response Data:", data);

      if (data?.success || data?.message === "Registration successful") { 
        alert(data.message || "Registration Successful! Redirecting to Login...");
        navigate("/login");
      } else {
        alert(`Registration Failed! ${data.message || "An unknown error occurred."}`);
      }
      
    } catch (error) {
      alert("Server error! Please try again.");
    }
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gray-50">
      <BackButton />
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 mt-[-40px]">
          <div className="hidden lg:block lg:w-1/3 lg:-ml-10 mr-20">
            <img
              src="/images/register.png"
              alt="Register Illustration"
              className="object-cover w-full h-auto"
            />
          </div>

          <div className="w-full lg:w-2/5 bg-white shadow-lg rounded-xl p-10 ml-10">
            <h2 className="text-4xl font-bold text-center text-gray-900">
              Create Your Account
            </h2>
            <p className="mt-4 text-center text-gray-600">
              Sign up to access exclusive content.
            </p>

            <form className="mt-4 space-y-2" onSubmit={handleRegister}>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full px-5 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-900 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full px-5 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-900 focus:outline-none"
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-5 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  placeholder="Enter your password"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Re-enter Password
                </label>
                <input
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
                  onChange={handleConfirmPassword}
                  className="w-full px-5 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  placeholder="Re-enter your password"
                />
                {passwordError && (
                  <p className="mt-2 text-sm text-red-500">{passwordError}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 text-lg font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Sign Up
              </button>

              <p className="text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <a href="/login" className="text-gray-900 font-semibold">
                  Login
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
