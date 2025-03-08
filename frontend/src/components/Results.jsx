import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from './Navbar';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prediction = location.state?.prediction;

  // If no data is received, redirect to the Dashboard
  if (!prediction) {
    alert("No data received");
    navigate("/");
    return null;
  }

  return (
    
    <section className="min-h-screen bg-gray-50">
      <Navbar/>
      <div className="container mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="flex items-center justify-center gap-x-4 py-6 mb-12">
          <h1 className="text-4xl font-bold text-center">
            Sleep Disorder Classification Results
          </h1>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 text-center">
            Prediction Outcome
          </h2>
          
          <div className="mt-6 text-center">
            {prediction.health_report && (
              <h3 className="text-xl font-medium text-gray-800 mt-4">
                🩺 {prediction.health_report}
              </h3>
            )}
            {prediction.disease && (
              <h3 className="text-xl font-medium text-gray-800 mt-4">
                🔬 Disease Detected: {prediction.disease}
              </h3>
            )}
            {prediction.cap_phase && (
              <h3 className="text-xl font-medium text-gray-800 mt-4">
                ⚡ CAP Phase: {prediction.cap_phase}
              </h3>
            )}
          </div>

          <div className="mt-8 flex flex-col items-center">
            <button
              onClick={() => navigate("/")}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Upload Another File
            </button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-10">
        {/* Page Header */}
        <div className="flex items-center justify-center gap-x-4 py-6 mb-12">
          <h1 className="text-4xl font-bold text-center">
           Your Diagnosis
          </h1>
        </div>

        <div className="max-w-4xl mx-auto bg-gray-100 p-8 shadow-lg rounded-lg text-center">
          
          {/* Diagnosis Information - Initially Hidden */}
          <div className={`mt-6 p-6 bg-gray-100 rounded-lg ${prediction.disease === 'None' ? 'block' : 'hidden'}`}>
            <h3 className="text-xl font-semibold">You're Healthy...</h3>
          </div>

          <div className={`mt-6 p-6 bg-gray-100 rounded-lg ${prediction.disease === 'INS' ? 'block' : 'hidden'}`}>
            <h3 className="text-xl font-semibold">Insomnia (INS) Diagnosis</h3>
            <p>🔹 Symptoms: Difficulty falling/staying asleep, daytime fatigue.</p>
            <p>🩺 Treatment: CBT-I, sleep hygiene improvements, melatonin supplements.</p>
          </div>

          <div className={`mt-6 p-6 bg-gray-100 rounded-lg ${prediction.disease === 'NFLE' ? 'block' : 'hidden'}`}>
            <h3 className="text-xl font-semibold">Nocturnal Frontal-Lobe Epilepsy (NFLE) Diagnosis</h3>
            <p>🔹 Symptoms: Sudden awakenings, unusual movements, confusion.</p>
            <p>🩺 Treatment: Anti-epileptic medication, polysomnography, avoiding alcohol.</p>
          </div>

          <div className={`mt-6 p-6 bg-gray-100 rounded-lg ${prediction.disease === 'NARCO' ? 'block' : 'hidden'}`}>
            <h3 className="text-xl font-semibold">Narcolepsy (NARCO) Diagnosis</h3>
            <p>🔹 Symptoms: Excessive daytime sleepiness, sudden muscle weakness.</p>
            <p>🩺 Treatment: Stimulants (Modafinil), scheduled naps, avoiding alcohol.</p>
          </div>

          <div className={`mt-6 p-6 bg-gray-100 rounded-lg ${prediction.disease === 'RBD' ? 'block' : 'hidden'}`}>
            <h3 className="text-xl font-semibold">REM Sleep Behavior Disorder (RBD) Diagnosis</h3>
            <p>🔹 Symptoms: Acting out dreams, sudden movements during sleep.</p>
            <p>🩺 Treatment: Clonazepam, removing dangerous objects, melatonin supplements.</p>
          </div>

          <div className={`mt-6 p-6 bg-gray-100 rounded-lg ${prediction.disease === 'PLM' ? 'block' : 'hidden'}`}>
            <h3 className="text-xl font-semibold">Periodic Leg Movement (PLM) Diagnosis</h3>
            <p>🔹 Symptoms: Involuntary leg movements during sleep, restless sleep.</p>
            <p>🩺 Treatment: Iron supplements, dopamine agonists, avoiding caffeine.</p>
          </div>

        </div>
      </div>


    </section>
  );
};

export default Results;
