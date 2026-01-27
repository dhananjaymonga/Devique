import React, { useEffect, useRef, useState } from "react";
import { BookOpen, Code, Palette, Database, Globe, Smartphone, Clock, Users, Award, Star, ArrowRight, TrendingUp } from "lucide-react";

const Courses = () => {
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const statsRef = useRef(null);
  
  const [isVisible, setIsVisible] = useState({
    hero: false,
    courses: false,
    stats: false
  });

  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    setTimeout(() => setIsVisible(prev => ({ ...prev, hero: true })), 100);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.section;
            if (id) {
              setIsVisible(prev => ({ ...prev, [id]: true }));
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = [coursesRef, statsRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const courses = [
    {
      id: 1,
      icon: <Code size={32} />,
      title: "Full Stack Web Development",
      category: "development",
      description: "Master both frontend and backend development with React, Node.js, Express, and MongoDB.",
      duration: "6 Months",
      students: "2,500+",
      rating: 4.8,
      level: "Beginner to Advanced",
      features: ["Live Projects", "Career Support", "Certificate", "Lifetime Access"],
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: <Palette size={32} />,
      title: "UI/UX Design Masterclass",
      category: "design",
      description: "Learn to create stunning user interfaces and experiences with Figma, Adobe XD, and design principles.",
      duration: "4 Months",
      students: "1,800+",
      rating: 4.9,
      level: "Beginner",
      features: ["Design Tools", "Portfolio Projects", "Industry Experts", "Job Ready"],
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      icon: <Smartphone size={32} />,
      title: "Mobile App Development",
      category: "development",
      description: "Build native and cross-platform mobile apps for iOS and Android using React Native and Flutter.",
      duration: "5 Months",
      students: "1,500+",
      rating: 4.7,
      level: "Intermediate",
      features: ["iOS & Android", "Real Apps", "Play Store Launch", "Mentorship"],
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      icon: <Database size={32} />,
      title: "Data Science & Analytics",
      category: "data",
      description: "Master data analysis, machine learning, and AI with Python, pandas, and TensorFlow.",
      duration: "7 Months",
      students: "2,100+",
      rating: 4.8,
      level: "Intermediate to Advanced",
      features: ["Python & R", "ML Algorithms", "Real Datasets", "Capstone Project"],
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      icon: <Globe size={32} />,
      title: "Digital Marketing",
      category: "marketing",
      description: "Learn SEO, social media marketing, content marketing, and paid advertising strategies.",
      duration: "3 Months",
      students: "3,200+",
      rating: 4.6,
      level: "Beginner",
      features: ["SEO & SEM", "Social Media", "Analytics", "Certification"],
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 6,
      icon: <TrendingUp size={32} />,
      title: "Business Analytics",
      category: "business",
      description: "Transform data into actionable insights using Excel, SQL, Tableau, and Power BI.",
      duration: "4 Months",
      students: "1,600+",
      rating: 4.7,
      level: "Beginner to Intermediate",
      features: ["Excel Mastery", "SQL Queries", "Dashboards", "Business Cases"],
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'data', name: 'Data Science' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'business', name: 'Business' }
  ];

  const stats = [
    { icon: <BookOpen size={40} />, value: "50+", label: "Courses Available" },
    { icon: <Users size={40} />, value: "15,000+", label: "Active Students" },
    { icon: <Award size={40} />, value: "95%", label: "Completion Rate" },
    { icon: <Star size={40} />, value: "4.8/5", label: "Average Rating" }
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  const handleCourseClick = (courseId) => {
    // Navigate to contact page
    window.location.href = "/contact";
    // OR if using React Router:
    // navigate('/contact');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-gray-900 relative overflow-hidden">
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* HERO SECTION */}
      <div ref={heroRef} className="relative z-10 text-center py-20 px-6">
        <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700">
            Our Courses
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Learn in-demand skills from industry experts and advance your career
          </p>
        </div>

        {/* CATEGORY FILTERS */}
        <div className={`flex flex-wrap justify-center gap-3 mt-8 transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        {/* COURSES GRID */}
        <div ref={coursesRef} data-section="courses" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredCourses.map((course, idx) => (
            <div
              key={course.id}
              className={`bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden ${isVisible.courses ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              {/* Course Header */}
              <div className={`bg-gradient-to-r ${course.color} p-8 text-white`}>
                <div className="mb-4">{course.icon}</div>
                <h3 className="text-2xl font-bold mb-2">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1">
                    <Star size={16} fill="white" /> {course.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={16} /> {course.students}
                  </span>
                </div>
              </div>

              {/* Course Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">{course.description}</p>

                {/* Course Info */}
                <div className="flex items-center justify-between mb-6 text-sm text-gray-600">
                  <span className="flex items-center gap-1">
                    <Clock size={16} /> {course.duration}
                  </span>
                  <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full font-medium">
                    {course.level}
                  </span>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {course.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Footer - Updated to remove price and redirect to /contact */}
                <div className="flex items-center justify-center pt-6 border-t border-gray-200">
                  <button 
                    onClick={() => handleCourseClick(course.id)}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold flex items-center gap-2 transition-all duration-300 transform hover:scale-105 cursor-pointer"
                  >
                    Enroll Now <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* STATS SECTION */}
        <div ref={statsRef} data-section="stats" className="mb-20">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-blue-600 transition-all duration-1000 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Impact
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 text-center hover:shadow-xl transition-all duration-700 transform hover:-translate-y-2 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="inline-block p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl text-white mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA SECTION */}
        <div className={`bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 text-center text-white transition-all duration-1000 transform ${isVisible.stats ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Learning?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of students already learning and growing their careers
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Browse All Courses
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Contact Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;