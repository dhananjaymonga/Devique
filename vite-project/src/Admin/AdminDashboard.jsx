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
            onClick={() => navigate("/admin/users")}
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
            onClick={() => navigate("/admin/blog")}
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

        {/* Quick Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => navigate("/admin/users")}
            className="bg-white border-2 border-blue-100 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Users className="text-blue-500" size={24} />
              </div>
              <p className="text-gray-600 text-sm font-medium">Active Section</p>
            </div>
            <p className="text-gray-800 text-xl font-bold">Users Management</p>
            <p className="text-gray-500 text-sm mt-2">Monitor user activity and contacts</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            onClick={() => navigate("/admin/blog")}
            className="bg-white border-2 border-purple-100 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <FileText className="text-purple-500" size={24} />
              </div>
              <p className="text-gray-600 text-sm font-medium">Active Section</p>
            </div>
            <p className="text-gray-800 text-xl font-bold">Blog Management</p>
            <p className="text-gray-500 text-sm mt-2">Create and publish content</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5, scale: 1.02 }}
            className="bg-white border-2 border-green-100 p-6 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <Activity className="text-green-500" size={24} />
              </div>
              <p className="text-gray-600 text-sm font-medium">System Status</p>
            </div>
            <p className="text-gray-800 text-xl font-bold">Control Center</p>
            <p className="text-gray-500 text-sm mt-2">Platform health and settings</p>
          </motion.div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-500 to-purple-500 p-8 rounded-2xl shadow-lg"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white">
              <h3 className="text-2xl font-bold mb-2">Need Help?</h3>
              <p className="text-blue-50">
                Access documentation and support resources for managing your admin panel
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition shadow-md flex items-center gap-2 whitespace-nowrap"
            >
              <Settings size={20} />
              View Documentation
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AdminDashboard;