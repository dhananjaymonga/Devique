import React, { useState, useEffect } from 'react';
import { Clock, Calendar, Eye, Share2, Bookmark, ArrowLeft } from 'lucide-react';

const BlogDetails = () => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const blogData = {
    author: "dfgvshbnmx,z.",
    category: "IT Services",
    companyName: "Devique Software",
    content: "xbcjnzkm,l.",
    createdAt: "2026-01-25T20:25:56.465Z",
    description: "bsnxzww",
    device: "Mobile",
    image: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB2gA…hQAsAAAAAAAAAAAAAMfL/AUrWT13PLrcmAAAAAElFTkSuQmCC",
    isPublished: true,
    readTime: "5",
    slug: "sdcxzs",
    subject: "qww",
    techStack: "cnxmz",
    title: "sdcxzs",
    updatedAt: "2026-01-25T20:41:15.872Z",
    views: 0
  };

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(currentProgress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: blogData.title,
        text: blogData.description,
        url: window.location.href
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-300"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white/80 backdrop-blur-md shadow-sm z-40 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Articles</span>
            </button>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsBookmarked(!isBookmarked)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Bookmark 
                  className={`w-5 h-5 ${isBookmarked ? 'fill-blue-600 text-blue-600' : 'text-gray-600'}`} 
                />
              </button>
              <button 
                onClick={handleShare}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Share2 className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-8">
          {/* Category Badge */}
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg">
              {blogData.category}
            </span>
            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-white text-gray-700 shadow-sm border border-gray-200">
              {blogData.techStack}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {blogData.title}
          </h1>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {blogData.description}
          </p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600 pb-8 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold">
                {blogData.author.charAt(0).toUpperCase()}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{blogData.author}</p>
                <p className="text-xs text-gray-500">{blogData.companyName}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{formatDate(blogData.createdAt)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{blogData.readTime} min read</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{blogData.views} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
          <img 
            src={blogData.image} 
            alt={blogData.title}
            className="w-full h-[400px] sm:h-[500px] object-cover"
          />
          {/* Device Badge on Image */}
          <div className="absolute bottom-6 right-6 z-20">
            <span className="px-4 py-2 rounded-lg bg-white/90 backdrop-blur-sm text-sm font-medium text-gray-900 shadow-lg">
              📱 {blogData.device}
            </span>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-lg max-w-none">
          {/* Subject Section */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 mt-0">Subject</h2>
            <p className="text-gray-700 mb-0">{blogData.subject}</p>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Article Content</h2>
            <div className="text-gray-700 leading-relaxed space-y-4">
              <p className="text-lg">
                {blogData.content}
              </p>
              
              {/* Placeholder for expanded content
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              
              <p className="text-lg">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p> */}

              {/* Key Takeaways Box */}
              <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-6 my-8 border border-yellow-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="text-2xl">💡</span>
                  Key Takeaways
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Understanding the core concepts of {blogData.techStack}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Best practices in {blogData.category}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span>
                    <span>Implementation strategies for {blogData.device} platforms</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tech Stack Highlight */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 mb-8 border border-purple-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Technology Stack</h3>
            <div className="flex flex-wrap gap-2">
              {blogData.techStack.split(',').map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Author Card */}
        <div className="mt-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white shadow-2xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl font-bold">
              {blogData.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <h3 className="text-2xl font-bold">{blogData.author}</h3>
              <p className="text-blue-100">{blogData.companyName}</p>
            </div>
          </div>
          <p className="text-blue-50 leading-relaxed">
            Passionate about creating innovative solutions in {blogData.category}. 
            Specializing in {blogData.techStack} and delivering exceptional user experiences.
          </p>
        </div>

        {/* Footer Info */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>Last updated: {formatDate(blogData.updatedAt)}</p>
          <p className="mt-2">Article ID: {blogData._id}</p>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;