// AdminPanel.jsx
// React + Tailwind Admin Panel for Contacts Backend
// White & Blue-500 theme with smooth animations

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Download, Trash2, Eye, ArrowLeft, Users, Mail, Phone, MapPin, GraduationCap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const API_BASE = "https://devique-1.onrender.com/api";

export default function AdminPanel() {
  const navigate = useNavigate();
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);

  useEffect(() => {
    fetchContacts();
  }, [page]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_BASE}/contacts?page=${page}&limit=10`);
      setContacts(res.data.data);
      setPages(res.data.pagination.pages);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    await axios.patch(`${API_BASE}/contact/${id}/status`, { status });
    fetchContacts();
  };

  const deleteContact = async (id) => {
    if (!confirm("Are you sure you want to delete this contact?")) return;
    await axios.delete(`${API_BASE}/contact/${id}`);
    fetchContacts();
  };

  const downloadExcel = () => {
    window.open(`${API_BASE}/contacts/download`, "_blank");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "New":
        return "bg-blue-100 text-blue-700 border-blue-200";
      case "Read":
        return "bg-yellow-100 text-yellow-700 border-yellow-200";
      case "Replied":
        return "bg-green-100 text-green-700 border-green-200";
      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-md border-b border-blue-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/admin")}
                className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md"
              >
                <ArrowLeft size={18} />
                <span className="font-medium">Back</span>
              </motion.button>
              
              <div>
                <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                  <Users className="text-blue-500" size={28} />
                  Contact Management
                </h1>
                <p className="text-sm text-gray-600 mt-1">Manage all user inquiries and contacts</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={downloadExcel}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md font-medium"
            >
              <Download size={18} />
              Export to Excel
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-sm border border-blue-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Contacts</p>
                <p className="text-3xl font-bold text-blue-500 mt-2">{contacts.length}</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Users className="text-blue-500" size={24} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-sm border border-blue-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Current Page</p>
                <p className="text-3xl font-bold text-blue-500 mt-2">
                  {page} <span className="text-lg text-gray-400">/ {pages}</span>
                </p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Eye className="text-blue-500" size={24} />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl shadow-sm border border-blue-100 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Items Per Page</p>
                <p className="text-3xl font-bold text-blue-500 mt-2">10</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-lg">
                <Download className="text-blue-500" size={24} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Table Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-xl shadow-sm border border-blue-100 overflow-hidden"
        >
          <div className="overflow-x-auto">
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20"
                >
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-500 border-t-transparent"></div>
                  <p className="mt-4 text-gray-600 font-medium">Loading contacts...</p>
                </motion.div>
              ) : contacts.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-20"
                >
                  <Users className="text-gray-300" size={64} />
                  <p className="mt-4 text-gray-600 font-medium text-lg">No contacts found</p>
                  <p className="text-gray-400 text-sm">Contacts will appear here when submitted</p>
                </motion.div>
              ) : (
                <motion.table
                  key="table"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="w-full"
                >
                  <thead>
                    <tr className="bg-gradient-to-r from-blue-50 to-blue-100 border-b border-blue-200">
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Name
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Contact Info
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Location
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Education
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {contacts.map((contact, idx) => (
                      <motion.tr
                        key={contact._id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="hover:bg-blue-50 transition-colors"
                      >
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-100 rounded-full p-2">
                              <Users className="text-blue-500" size={20} />
                            </div>
                            <span className="font-medium text-gray-800">{contact.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Mail size={14} className="text-blue-500" />
                              {contact.email}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Phone size={14} className="text-blue-500" />
                              {contact.phone}
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <MapPin size={14} className="text-blue-500" />
                            {contact.city}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2 text-sm text-gray-700">
                            <GraduationCap size={14} className="text-blue-500" />
                            {contact.qualification}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={contact.status}
                            onChange={(e) => updateStatus(contact._id, e.target.value)}
                            className={`${getStatusColor(
                              contact.status
                            )} border rounded-lg px-3 py-1.5 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer transition-all`}
                          >
                            <option value="New">New</option>
                            <option value="Read">Read</option>
                            <option value="Replied">Replied</option>
                          </select>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => alert(contact.message)}
                              className="text-blue-500 hover:text-blue-700 hover:bg-blue-50 p-2 rounded-lg transition-all"
                              title="View Message"
                            >
                              <Eye size={18} />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => deleteContact(contact._id)}
                              className="text-red-500 hover:text-red-700 hover:bg-red-50 p-2 rounded-lg transition-all"
                              title="Delete Contact"
                            >
                              <Trash2 size={18} />
                            </motion.button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </motion.table>
              )}
            </AnimatePresence>
          </div>

          {/* Pagination */}
          {!loading && contacts.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-gray-50 px-6 py-4 border-t border-blue-100"
            >
              <div className="flex items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed rounded-lg transition-all font-medium shadow-sm"
                >
                  <ArrowLeft size={18} />
                  Previous
                </motion.button>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">
                    Page <span className="font-bold text-blue-500">{page}</span> of{" "}
                    <span className="font-bold text-gray-700">{pages}</span>
                  </span>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={page === pages}
                  onClick={() => setPage(page + 1)}
                  className="flex items-center gap-2 px-5 py-2.5 bg-blue-500 hover:bg-blue-600 text-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed rounded-lg transition-all font-medium shadow-sm"
                >
                  Next
                  <ArrowLeft size={18} className="rotate-180" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  );
}