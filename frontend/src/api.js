const API_BASE_URL = "http://127.0.0.1:5000"; // Backend URL

// 🚀 User Registration API
export const registerUser = async (formData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    console.log("Register API Response:", data); // Debugging
    return data;
  } catch (error) {
    console.error("Error in registerUser:", error);
    return { success: false, message: "Server error!" };
  }
};

// 🚀 User Login API
export const loginUser = async (credentials) => {
  try {
    const response = await fetch(`${API_BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    if (!response.ok) {
      throw new Error("Login failed"); // Handle 4xx/5xx errors
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error in loginUser:", error);
    return { success: false, message: "Server error!" };
  }
};
