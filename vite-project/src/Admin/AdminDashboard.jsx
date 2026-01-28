import React from "react";
import { useNavigate } from "react-router-dom";
import { Users, FileText, LogOut, BarChart3, Settings, Activity } from "lucide-react";
import { motion } from "framer-motion";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAdmin");
    navigate("/");
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
        >
          <div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
            <p className="text-gray-600">Welcome back! Manage your platform from here</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-6 py-2.5 rounded-lg font-semibold transition shadow-md hover:shadow-lg"
          >
            <LogOut size={20} />
            Logout
          </motion.button>
        </motion.div>

        {/* Dashboard Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Admin Users Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.1 }}
            whileHover={{ scale: 1.03, y: -5 }}
            onClick={() => navigate("/admin/view-contact")}
            className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Admin Users</h2>
              <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition">
                <Users size={32} className="text-white" />
              </div>
            </div>
            <p className="text-blue-50 mb-6 leading-relaxed">
              Manage and view all user details, contact information, and user analytics
            </p>
            <motion.button
              whileHover={{ x: 5 }}
              className="w-full bg-white text-blue-600 hover:bg-blue-50 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              Go to Users
              <span className="text-xl">→</span>
            </motion.button>
          </motion.div>

          {/* Admin Blog Card */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.03, y: -5 }}
            onClick={() => navigate("/admin/view-blog")}
            className="bg-gradient-to-br from-purple-500 to-purple-600 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer group"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">Admin Blog</h2>
              <div className="bg-white/20 p-3 rounded-xl group-hover:bg-white/30 transition">
                <FileText size={32} className="text-white" />
              </div>
            </div>
            <p className="text-purple-50 mb-6 leading-relaxed">
              Create, edit, and manage all blog posts, articles, and content
            </p>
            <motion.button
              whileHover={{ x: 5 }}
              className="w-full bg-white text-purple-600 hover:bg-purple-50 py-3 rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              Go to Blog
              <span className="text-xl">→</span>
            </motion.button>
          </motion.div>
        </div>  
      </div>
    </div>
  );
};

export default AdminDashboard;