import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar"; // Ensure you have this component

const Dashboard = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate(); // React Router navigation

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
        alert("You must be logged in to upload a file.");
        navigate("/login");
        return;
    }

    if (!file) {
        alert("Please select a file!");
        return;
    }

    const formData = new FormData();
    formData.append("myfile", file); // ✅ Ensure this matches Flask

    try {
        const response = await fetch("http://127.0.0.1:5000/predict", {
            method: "POST",
            body: formData,
            headers: {
                "Authorization": `Bearer ${token}`,  // ✅ Ensure Bearer token format
                // ❌ DO NOT add "Content-Type": "application/json"
            },
        });

        const data = await response.json();

        if (response.ok) {
            navigate("/results", { state: { prediction: data } });
        } else {
            alert(data.error || "Error in prediction!");
        }
        } catch (error) {
            console.error("Upload error:", error);
            alert("Failed to upload file!");
        }
    };



  return (
    <section className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Page Header */}
      <div className="container mx-auto px-6 py-10">
        <div className="flex items-center justify-center gap-x-4 py-6 mb-24">
          <h1 className="text-4xl font-bold text-center">
            Sleep Disorder Classification Dashboard
          </h1>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Upload EEG Data for Classification
          </h2>
          <p className="mt-2 text-center text-gray-600">
            The patient whose report is positive can be classified into one of the following diseases:
          </p>

          <ul className="grid grid-cols-2 gap-4 mt-6 text-gray-800 font-medium">
            <li className="bg-blue-100 p-3 rounded-lg">
              🔹 <strong>INS:</strong> Insomnia
            </li>
            <li className="bg-blue-100 p-3 rounded-lg">
              🔹 <strong>NFLE:</strong> Nocturnal Frontal-Lobe Epilepsy
            </li>
            <li className="bg-blue-100 p-3 rounded-lg">
              🔹 <strong>NARCO:</strong> Narcolepsy
            </li>
            <li className="bg-blue-100 p-3 rounded-lg">
              🔹 <strong>RBD:</strong> REM Sleep Behaviour Disorder
            </li>
            <li className="bg-blue-100 p-3 rounded-lg">
              🔹 <strong>PLM:</strong> Periodic Leg Movement
            </li>
          </ul>

          <div className="mt-8 flex flex-col items-center">
            <label className="text-lg font-medium text-gray-700">
              Upload EEG signal data (CSV format):
            </label>
            <input
              type="file"
              accept=".csv"
              onChange={handleFileChange}
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full max-w-md"
            />

            <button
              onClick={handleUpload}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Test Now!!
            </button>

            {error && <p className="text-red-500 mt-4">{error}</p>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
