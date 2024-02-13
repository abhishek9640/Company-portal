import { useState } from "react";
import { GoogleSignInAPI, RegisterAPI } from "../api/AuthAPI";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function RegisterComponent() {
  let navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const register = async () => {
    try {
      const response = await RegisterAPI(credentials.email, credentials.password);
      toast.success("Registered successfully");
      navigate('/home');
      if (response.user) {
        // Registration was successful; handle further actions (e.g., redirect).
      } else {
        // Handle registration error or display a message to the user.
        console.error("Registration failed:", response);
      }
    } catch (error) {
      // Handle exceptions (e.g., invalid credentials).
      console.error("Error:", error);
      toast.error("Please check your Email & Password");
    }
  };

  const googleSignIn = async () => {
    try {
      const response = await GoogleSignInAPI();
      console.log(response);
      navigate('/home');
      // Handle successful Google sign-in, e.g., navigate to the home page.
    } catch (error) {
      console.error("Google Sign-In failed:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-md">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium">Email</label>
            <input
              type="email"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Email"
              value={credentials.email}
              onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium">Password</label>
            <input
              type="password"
              className="mt-1 p-2 w-full rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200"
              placeholder="Password"
              value={credentials.password}
              onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
              required
            />
          </div>
          <button
            onClick={register}
            type="button"
            className="w-full py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 focus:outline-none"
          >
            Agree & Join
          </button>
          <p className="text-center my-4">or</p>
          <div className="text-center">
            <GoogleButton className="mx-auto" onClick={googleSignIn} />
          </div>
        </form>
        <div className="mt-4 text-center">
          <span>Already have an account? </span>
          <a href="#" className="text-indigo-500 hover:underline" onClick={() => navigate("/login")}>
          Sign in
          </a>
        </div>
      </div>
    </div>
  );
}
