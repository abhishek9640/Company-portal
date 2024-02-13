import { useState } from "react";
// import { auth } from "../api/firebase"; 
import { resetPasswordAPI } from "../api/authUtils";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null);

  const handleResetPassword = async () => {
    try {
      const result = await resetPasswordAPI(email);
      if (result.success) {
        setMessage(result.message);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      // Handle any unexpected errors, e.g., display a generic error message
      console.error("Password reset error:", error);
      setMessage("An error occurred while resetting the password. Please try again later.");
    }
  }
  

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Forgot Password
        </h2>
        <p className="mb-4 text-center">Enter your email address to reset your password.</p>
        <input className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          onClick={handleResetPassword}
          className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none"
        >
          Reset Password
        </button>
        {message && <p className="mt-4 text-center">{message}</p>}
      </div>
    </div>
  );
}

export default ForgotPassword;
