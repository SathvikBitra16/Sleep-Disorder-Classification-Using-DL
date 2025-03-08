import { useState } from "react";
import axios from "axios";

const Diagnosis = () => {
  const [patientEmail, setPatientEmail] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    await axios.post("http://localhost:9000/api/diagnosis", { patient_email: patientEmail, result });
    alert("Diagnosis submitted!");
  };

  return (
    <div>
      <input type="email" placeholder="Patient Email" onChange={(e) => setPatientEmail(e.target.value)} />
      <textarea placeholder="Diagnosis Result" onChange={(e) => setResult(e.target.value)} />
      <button onClick={handleSubmit}>Submit Diagnosis</button>
    </div>
  );
};

export default Diagnosis;
