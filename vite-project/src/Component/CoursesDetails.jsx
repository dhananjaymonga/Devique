import React, { useEffect, useState } from "react";
import { Clock, Users, Star, Award, CheckCircle, PlayCircle, Download, BookOpen, Globe, Calendar, ArrowLeft, TrendingUp } from "lucide-react";

const CourseDetail = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 100);
  }, []);

  // Mock course data - in real app, fetch based on course ID from URL
  const course = {
    id: 1,
    title: "Full Stack Web Development",
    subtitle: "Master both frontend and backend development",
    rating: 4.8,
    students: "2,500+",
    duration: "6 Months",
    level: "Beginner to Advanced",
    price: "$299",
    instructor: {
      name: "John Doe",
      title: "Senior Full Stack Developer",
      students: "10,000+",
      courses: 5,
      rating: 4.9
    },
    description: "This comprehensive course will take you from complete beginner to job-ready full stack developer. You'll learn modern web development with React, Node.js, Express, and MongoDB. Build real-world projects and deploy them to production.",
    whatYouLearn: [
      "Build responsive websites with HTML, CSS, and JavaScript",
      "Create dynamic web applications with React and modern frameworks",
      "Develop backend APIs with Node.js and Express",
      "Work with databases using MongoDB and SQL",
      "Deploy applications to cloud platforms",
      "Implement authentication and security best practices",
      "Use Git and GitHub for version control",
      "Build and deploy full-stack projects"
    ],
    curriculum: [
      {
        title: "Introduction to Web Development",
        lessons: 12,
        duration: "3 hours",
        topics: ["HTML5 Basics", "CSS3 Styling", "JavaScript Fundamentals", "Responsive Design"]
      },
      {
        title: "Frontend Development with React",
        lessons: 18,
        duration: "6 hours",
        topics: ["React Components", "State Management", "Hooks", "React Router"]
      },
      {
        title: "Backend Development with Node.js",
        lessons: 15,
        duration: "5 hours",
        topics: ["Node.js Basics", "Express Framework", "RESTful APIs", "Middleware"]
      },
      {
        title: "Database Management",
        lessons: 10,
        duration: "4 hours",
        topics: ["MongoDB Basics", "Mongoose ODM", "SQL Fundamentals", "Database Design"]
      },
      {
        title: "Full Stack Projects",
        lessons: 8,
        duration: "8 hours",
        topics: ["E-commerce Platform", "Social Media App", "Blog System", "Task Manager"]
      },
      {
        title: "Deployment & DevOps",
        lessons: 6,
        duration: "3 hours",
        topics: ["Git & GitHub", "Cloud Platforms", "CI/CD", "Production Best Practices"]
      }
    ],
    requirements: [
      "Basic computer skills",
      "No prior programming experience needed",
      "A computer with internet connection",
      "Willingness to learn and practice"
    ],
    features: [
      "Lifetime access to course materials",
      "Live project building sessions",
      "Career guidance and support",
      "Certificate of completion",
      "Community access",
      "Regular updates"
    ]
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-gray-900">
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
          <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Back Button */}
            <button
              onClick={handleBack}
              className={`flex items-center gap-2 mb-6 hover:underline transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
            >
              <ArrowLeft size={20} /> Back to Courses
            </button>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Course Info */}
              <div className={`md:col-span-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="inline-block px-3 py-1 bg-blue-500 rounded-full text-sm mb-4">
                  {course.level}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl mb-6 text-blue-100">{course.subtitle}</p>
                
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Star size={20} fill="white" />
                    <span className="font-semibold">{course.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span>{course.duration}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img 
                    src={`https://ui-avatars.com/api/?name=${course.instructor.name}&background=3b82f6&color=fff&size=50`}
                    alt={course.instructor.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{course.instructor.name}</div>
                    <div className="text-sm text-blue-200">{course.instructor.title}</div>
                  </div>
                </div>
              </div>

              {/* Enrollment Card */}
              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
                <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-500 mb-2">Course Price</div>
                    <div className="text-4xl font-bold text-blue-600">{course.price}</div>
                  </div>
                  
                  <button className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold mb-4 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Enroll Now
                  </button>
                  
                  <button className="w-full py-4 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300">
                    Add to Wishlist
                  </button>

                  <div className="mt-6 space-y-3 text-sm">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle size={16} className="text-blue-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="md:col-span-2">
              {/* Tabs */}
              <div className="flex gap-4 mb-8 border-b border-gray-200 overflow-x-auto">
                {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-6 py-3 font-semibold capitalize whitespace-nowrap transition-all duration-300 ${
                      activeTab === tab
                        ? 'text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg">
                {activeTab === 'overview' && (
                  <div className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-blue-600">Course Description</h2>
                      <p className="text-gray-700 leading-relaxed">{course.description}</p>
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-blue-600">What You'll Learn</h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {course.whatYouLearn.map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <CheckCircle size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h2 className="text-3xl font-bold mb-4 text-blue-600">Requirements</h2>
                      <ul className="space-y-2">
                        {course.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-gray-700">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'curriculum' && (
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold mb-6 text-blue-600">Course Curriculum</h2>
                    {course.curriculum.map((section, idx) => (
                      <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-300">
                        <div className="bg-gradient-to-r from-blue-50 to-white p-6">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{section.title}</h3>
                            <PlayCircle className="text-blue-600" size={24} />
                          </div>
                          <div className="flex gap-4 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <BookOpen size={16} /> {section.lessons} lessons
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock size={16} /> {section.duration}
                            </span>
                          </div>
                        </div>
                        <div className="p-6 bg-white">
                          <div className="grid md:grid-cols-2 gap-3">
                            {section.topics.map((topic, i) => (
                              <div key={i} className="flex items-center gap-2 text-gray-700">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                                {topic}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'instructor' && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-6 text-blue-600">Your Instructor</h2>
                    <div className="flex items-start gap-6">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${course.instructor.name}&background=3b82f6&color=fff&size=100`}
                        alt={course.instructor.name}
                        className="w-24 h-24 rounded-full"
                      />
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-2">{course.instructor.name}</h3>
                        <p className="text-gray-600 mb-4">{course.instructor.title}</p>
                        <div className="flex gap-6 text-sm">
                          <div className="flex items-center gap-2">
                            <Star size={16} className="text-yellow-500" />
                            <span>{course.instructor.rating} Rating</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users size={16} />
                            <span>{course.instructor.students} Students</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <BookOpen size={16} />
                            <span>{course.instructor.courses} Courses</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      John is a seasoned full-stack developer with over 10 years of experience in the tech industry. 
                      He has worked with Fortune 500 companies and startups alike, building scalable web applications. 
                      John is passionate about teaching and has helped thousands of students launch their careers in web development.
                    </p>
                  </div>
                )}

                {activeTab === 'reviews' && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold mb-6 text-blue-600">Student Reviews</h2>
                    <div className="text-center p-8 text-gray-500">
                      <Star size={48} className="mx-auto mb-4 text-gray-300" />
                      <p>Reviews coming soon...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Course Includes */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">This Course Includes</h3>
                <div className="space-y-3">
                  {[
                    { icon: <PlayCircle size={20} />, text: "69 video lessons" },
                    { icon: <Download size={20} />, text: "Downloadable resources" },
                    { icon: <Globe size={20} />, text: "Access on mobile & TV" },
                    { icon: <Award size={20} />, text: "Certificate of completion" },
                    { icon: <TrendingUp size={20} />, text: "Career guidance" },
                    { icon: <Calendar size={20} />, text: "Lifetime access" }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-700">
                      <div className="text-blue-600">{item.icon}</div>
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Share Course */}
              <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-gray-200 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">Share This Course</h3>
                <div className="flex gap-3">
                  <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Share
                  </button>
                  <button className="flex-1 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
                    Copy Link
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;