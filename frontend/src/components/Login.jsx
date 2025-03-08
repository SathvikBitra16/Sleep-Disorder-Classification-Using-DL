import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api"; // API function to send login request
import BackButton from "./BackButton";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(""); // Store login error
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Reset error message

    if (!formData.email || !formData.password) {
      setError("Email and Password are required!");
      return;
    }

    try {
      const data = await loginUser(formData); // Call API function
      console.log("Login Response:", data); // Debugging

      if (data?.token) {
        alert("Login successful!");
        localStorage.setItem("token", data.token); // Store token
        navigate("/dashboard"); // Redirect after login
      } else {
        setError(data?.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("Server error! Please try again.");
    }
  };

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 bg-gray-50">
      <BackButton/>
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-12 mt-[-40px]">
          {/* 📷 Illustration on Larger Screens */}
          <div className="hidden lg:block lg:w-1/2 lg:-ml-10 mr-20">
            <img src="/images/login.png" alt="Login Illustration" className="object-cover w-full h-auto"/>
          </div>

          {/* 🔑 Login Form */}
          <div className="w-full lg:w-2/5 bg-white shadow-lg rounded-xl p-10 ml-10">
            <h2 className="text-4xl font-bold text-center text-gray-900">Login</h2>
            <p className="mt-4 text-center text-gray-600">
              Sign in to continue.
            </p>

            {error && <p className="text-red-500 text-center mt-2">{error}</p>}

            <form className="mt-4 space-y-2" onSubmit={handleLogin}>
              {/* 📧 Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* 🔒 Password Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-5 py-3 mt-2 border rounded-lg shadow-sm focus:ring-2 focus:ring-gray-900 focus:outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>

              {/* 🔽 Forgot Password & Submit */}
              <div className="flex justify-between items-center">
                <a href="/forgot-password" className="text-sm text-gray-900 font-semibold">
                  Forgot Password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full py-3 mt-6 text-lg font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Login
              </button>

              {/* 🔄 Redirect to Register */}
              <p className="text-center text-gray-600 mt-4">
                Don't have an account?{" "}
                <a href="/register" className="text-gray-900 font-semibold">
                  Sign Up
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
