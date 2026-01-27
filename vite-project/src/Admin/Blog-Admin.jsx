import React, { useState, useEffect, useCallback } from 'react';
import { Upload, X, Eye, Save, CheckCircle, Edit, Trash2, List, Plus, Search, Calendar, User } from 'lucide-react';

export default function BlogAdminPage() {
  const [view, setView] = useState('list'); // 'list', 'create', 'edit'
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  
  const [blog, setBlog] = useState({
    companyName: "Devique Software",
    title: "",
    subject: "",
    category: "",
    description: "",
    content: "",
    author: "",
    device: "",
    techStack: "",
    readTime: "",
    imageData: "",
    imageType: "",
    imagePreview: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Fetch all blogs on component mount
  useEffect(() => {
    fetchBlogs();
  }, []);

  // Filter blogs based on search and category
  useEffect(() => {
    let filtered = blogs;
    
    if (searchTerm) {
      filtered = filtered.filter(b => 
        b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
        b.author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (filterCategory) {
      filtered = filtered.filter(b => b.category === filterCategory);
    }
    
    setFilteredBlogs(filtered);
  }, [searchTerm, filterCategory, blogs]);

  const fetchBlogs = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('https://devique-1.onrender.com/api/blogs');
      const data = await response.json();
      if (data.success) {
        setBlogs(data.data);
        setFilteredBlogs(data.data);
      }
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setMessage({ type: "error", text: "Failed to fetch blogs" });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setBlog(prevBlog => ({
      ...prevBlog,
      [name]: value
    }));
  }, []);

  const handleImageChange = useCallback((e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setMessage({ type: "error", text: "Image size should be less than 5MB" });
        return;
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        setBlog(prevBlog => ({
          ...prevBlog,
          imageData: reader.result,
          imageType: file.type,
          imagePreview: reader.result
        }));
        setMessage({ type: "", text: "" });
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const removeImage = useCallback(() => {
    setBlog(prevBlog => ({ 
      ...prevBlog, 
      imageData: "",
      imageType: "",
      imagePreview: "" 
    }));
  }, []);

  const resetForm = () => {
    setBlog({
      companyName: "Devique Software",
      title: "",
      subject: "",
      category: "",
      description: "",
      content: "",
      author: "",
      device: "",
      techStack: "",
      readTime: "",
      imageData: "",
      imageType: "",
      imagePreview: ""
    });
    setEditingBlog(null);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    setMessage({ type: "", text: "" });

    if (!blog.title || !blog.subject || !blog.category || !blog.description || !blog.content || !blog.author) {
      setMessage({ type: "error", text: "Please fill in all required fields" });
      setIsSubmitting(false);
      return;
    }

    try {
      const payload = {
        companyName: blog.companyName,
        title: blog.title,
        subject: blog.subject,
        category: blog.category,
        description: blog.description,
        content: blog.content,
        author: blog.author,
        device: blog.device,
        techStack: blog.techStack,
        readTime: blog.readTime,
        imageData: blog.imageData,
        imageType: blog.imageType
      };

      const url = editingBlog 
        ? `https://devique-1.onrender.com/api/blogs/${editingBlog._id}`
        : 'https://devique-1.onrender.com/api/blogs';
      
      const method = editingBlog ? 'PUT' : 'POST';

      const response = await fetch(url, {
        method: method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: editingBlog ? "Blog updated successfully!" : "Blog created successfully!" });
        resetForm();
        fetchBlogs();
        setTimeout(() => setView('list'), 2000);
      } else {
        setMessage({ type: "error", text: data.message || "Failed to save blog" });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ type: "error", text: "Network error. Please check if the server is running on port 5000." });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEdit = (blogToEdit) => {
    setBlog({
      companyName: blogToEdit.companyName,
      title: blogToEdit.title,
      subject: blogToEdit.subject,
      category: blogToEdit.category,
      description: blogToEdit.description,
      content: blogToEdit.content,
      author: blogToEdit.author,
      device: blogToEdit.device || "",
      techStack: blogToEdit.techStack || "",
      readTime: blogToEdit.readTime || "",
      imageData: blogToEdit.image?.data || "",
      imageType: blogToEdit.image?.contentType || "",
      imagePreview: blogToEdit.image?.data || ""
    });
    setEditingBlog(blogToEdit);
    setView('edit');
    setMessage({ type: "", text: "" });
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this blog?')) return;

    try {
      const response = await fetch(`https://devique-1.onrender.com/api/blogs/${id}`, {
        method: 'DELETE'
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: "success", text: "Blog deleted successfully!" });
        fetchBlogs();
      } else {
        setMessage({ type: "error", text: data.message || "Failed to delete blog" });
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage({ type: "error", text: "Failed to delete blog" });
    }
  };

  const BlogForm = () => (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Company Name</label>
        <input
          type="text"
          name="companyName"
          value={blog.companyName}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Blog Title *</label>
        <input
          type="text"
          name="title"
          value={blog.title}
          onChange={handleChange}
          placeholder="Enter an engaging blog title"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
        <input
          type="text"
          name="subject"
          value={blog.subject}
          onChange={handleChange}
          placeholder="Main topic or subject"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Category *</label>
          <select
            name="category"
            value={blog.category}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >
            <option value="">Select Category</option>
            <option>IT Services</option>
            <option>Software Company</option>
            <option>Training</option>
            <option>Internship</option>
            <option>Latest Tech Trends</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Device</label>
          <select
            name="device"
            value={blog.device}
            onChange={handleChange}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          >
            <option value="">Select Device</option>
            <option>Web</option>
            <option>Mobile</option>
            <option>Desktop</option>
            <option>All Devices</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Author *</label>
          <input
            type="text"
            name="author"
            value={blog.author}
            onChange={handleChange}
            placeholder="Author name"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">Read Time</label>
          <input
            type="text"
            name="readTime"
            value={blog.readTime}
            onChange={handleChange}
            placeholder="e.g., 5 min read"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Tech Stack</label>
        <input
          type="text"
          name="techStack"
          value={blog.techStack}
          onChange={handleChange}
          placeholder="e.g., React, Node.js, MongoDB"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Description *</label>
        <textarea
          name="description"
          value={blog.description}
          onChange={handleChange}
          placeholder="Brief description of the blog"
          rows="3"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Content *</label>
        <textarea
          name="content"
          value={blog.content}
          onChange={handleChange}
          placeholder="Write your blog content here..."
          rows="12"
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition font-mono text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-2">Featured Image</label>
        
        {!blog.imagePreview ? (
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center hover:border-blue-500 transition-all cursor-pointer bg-gray-50">
            <input
              type="file"
              id="imageUpload"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <label htmlFor="imageUpload" className="cursor-pointer">
              <Upload className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <p className="text-base text-gray-600 font-medium">Click to upload image</p>
              <p className="text-sm text-gray-500 mt-2">PNG, JPG, GIF up to 5MB</p>
            </label>
          </div>
        ) : (
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={blog.imagePreview}
              alt="Preview"
              className="w-full h-72 object-cover"
            />
            <button
              type="button"
              onClick={removeImage}
              className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
            >
              <X size={20} />
            </button>
          </div>
        )}
      </div>

      <div className="flex gap-4 pt-4">
        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold shadow-md"
        >
          <Save size={20} />
          {isSubmitting ? 'Saving...' : editingBlog ? 'Update Blog' : 'Publish Blog'}
        </button>
        
        <button
          type="button"
          onClick={() => {
            resetForm();
            setView('list');
          }}
          className="px-8 py-3 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2 font-semibold"
        >
          Cancel
        </button>
      </div>
    </div>
  );

  const BlogList = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search blogs by title, subject, or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <select
          value={filterCategory}
          onChange={(e) => setFilterCategory(e.target.value)}
          className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Categories</option>
          <option>IT Services</option>
          <option>Software Company</option>
          <option>Training</option>
          <option>Internship</option>
          <option>Latest Tech Trends</option>
        </select>
      </div>

      {isLoading ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Loading blogs...</p>
        </div>
      ) : filteredBlogs.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-600 text-lg">No blogs found</p>
          <button
            onClick={() => {
              resetForm();
              setView('create');
            }}
            className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Create Your First Blog
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {filteredBlogs.map((blogItem) => (
            <div key={blogItem._id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex gap-6">
                {blogItem.image?.data && (
                  <img
                    src={blogItem.image.data}
                    alt={blogItem.title}
                    className="w-48 h-32 object-cover rounded-lg"
                  />
                )}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{blogItem.title}</h3>
                      <p className="text-sm text-gray-600">{blogItem.subject}</p>
                    </div>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full">
                      {blogItem.category}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-4 line-clamp-2">{blogItem.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-1">
                      <User size={16} />
                      {blogItem.author}
                    </div>
                    {blogItem.readTime && (
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        {blogItem.readTime}
                      </div>
                    )}
                    {blogItem.device && (
                      <span className="px-2 py-1 bg-gray-100 rounded text-xs">{blogItem.device}</span>
                    )}
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => handleEdit(blogItem)}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      <Edit size={16} />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(blogItem._id)}
                      className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                    >
                      <Trash2 size={16} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {view === 'list' ? 'Blog Management' : view === 'edit' ? 'Edit Blog Post' : 'Create New Blog Post'}
            </h1>
            <div className="flex gap-3">
              {view !== 'list' && (
                <button
                  onClick={() => {
                    resetForm();
                    setView('list');
                  }}
                  className="flex items-center gap-2 px-4 py-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <List size={20} />
                  All Blogs
                </button>
              )}
              {view === 'list' && (
                <button
                  onClick={() => {
                    resetForm();
                    setView('create');
                  }}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Plus size={20} />
                  New Blog
                </button>
              )}
            </div>
          </div>
          
          {message.text && (
            <div className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${message.type === 'success' ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-red-100 text-red-700 border border-red-300'}`}>
              {message.type === 'success' && <CheckCircle size={20} />}
              <span>{message.text}</span>
            </div>
          )}

          {view === 'list' ? <BlogList /> : <BlogForm />}
        </div>
      </div>
    </div>
  );
}