import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, ArrowLeft } from "lucide-react";

const AdminLogin = () => {
  const [adminKey, setAdminKey] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Simple admin key (change this to your desired key)
  const ADMIN_KEY = "dhananjayharsh";

  const handleLogin = (e) => {
    e.preventDefault();
    
    if (adminKey === ADMIN_KEY) {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin/dashboard");
    } else {
      setError("Invalid admin key");
      setAdminKey("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="w-full max-w-md px-4">
        <div className="bg-white border-2 border-blue-200 p-8 rounded-2xl shadow-xl">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-blue-500 p-3 rounded-full">
              <Lock size={40} className="text-white" />
            </div>
          </div>
          
          <h1 className="text-3xl font-bold text-center mb-2 text-gray-800">Admin Login</h1>
          <p className="text-gray-600 text-center mb-8">Enter your admin key to continue</p>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Admin Key</label>
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                placeholder="Enter admin key"
                className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              />
            </div>
            
            {error && (
              <p className="text-red-600 text-sm bg-red-50 border-2 border-red-200 p-3 rounded-lg">
                {error}
              </p>
            )}
            
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
            >
              Login
            </button>
          </form>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/")}
            className="flex items-center justify-center gap-2 mx-auto text-gray-600 hover:text-blue-500 transition font-medium"
          >
            <ArrowLeft size={18} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;