import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate("/")}
      className="px-5 py-2 mb-10 ml-10 text-base font-semibold text-gray-900 transition-all duration-200 border border-gray-900 rounded-xl hover:bg-gray-900 hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
    >
      ← Back to Home
    </button>
  );
};

export default BackButton;
