import React, { useEffect, useRef, useState } from "react";
import { 
  Briefcase, MapPin, Calendar, Users, Award, Star, ArrowRight, 
  TrendingUp, CheckCircle, Zap, Target, BarChart3, Lightbulb, 
  Rocket, Code, Palette, Database, Globe, Smartphone, Clock,
  Heart, MessageCircle, DollarSign, BookOpen
} from "lucide-react";

const Internship = () => {
  const heroRef = useRef(null);
  const opportunitiesRef = useRef(null);
  const programsRef = useRef(null);
  const benefitsRef = useRef(null);
  const timelineRef = useRef(null);
  const placementRef = useRef(null);
  const reviewsRef = useRef(null);
  const statsRef = useRef(null);
  
  const [isVisible, setIsVisible] = useState({
    hero: false,
    opportunities: false,
    programs: false,
    benefits: false,
    timeline: false,
    placement: false,
    reviews: false,
    stats: false
  });

  const [selectedRole, setSelectedRole] = useState('all');

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

    const sections = [opportunitiesRef, programsRef, benefitsRef, timelineRef, placementRef, reviewsRef, statsRef];
    sections.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const internshipOpportunities = [
    {
      id: 1,
      icon: <Code size={32} />,
      role: "Frontend Development Intern",
      department: "Engineering",
      type: "development",
      location: "Remote",
      duration: "3-6 Months",
      stipend: "$500/month",
      description: "Work on cutting-edge web applications using React, Vue, and modern JavaScript frameworks.",
      requirements: ["HTML/CSS/JavaScript", "React basics", "Git knowledge"],
      positions: 5,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      icon: <Palette size={32} />,
      role: "UI/UX Design Intern",
      department: "Design",
      type: "design",
      location: "Hybrid",
      duration: "3-6 Months",
      stipend: "$450/month",
      description: "Create beautiful and intuitive user experiences. Work with Figma and collaborate with product teams.",
      requirements: ["Figma proficiency", "Design principles", "Portfolio"],
      positions: 3,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 3,
      icon: <Smartphone size={32} />,
      role: "Mobile App Development Intern",
      department: "Engineering",
      type: "development",
      location: "Remote",
      duration: "3-6 Months",
      stipend: "$550/month",
      description: "Build mobile applications using React Native or Flutter. Contribute to real production apps.",
      requirements: ["JavaScript/TypeScript", "Mobile dev basics", "Problem solving"],
      positions: 4,
      color: "from-green-500 to-green-600"
    },
    {
      id: 4,
      icon: <Database size={32} />,
      role: "Data Analytics Intern",
      department: "Analytics",
      type: "data",
      location: "Remote",
      duration: "3-6 Months",
      stipend: "$500/month",
      description: "Analyze data, create dashboards, and generate insights using Python, SQL, and Tableau.",
      requirements: ["Python/SQL", "Excel", "Data visualization basics"],
      positions: 3,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 5,
      icon: <Globe size={32} />,
      role: "Digital Marketing Intern",
      department: "Marketing",
      type: "marketing",
      location: "Hybrid",
      duration: "3-6 Months",
      stipend: "$400/month",
      description: "Execute digital marketing campaigns, manage social media, and analyze campaign performance.",
      requirements: ["Social media basics", "Content writing", "Analytics tools"],
      positions: 6,
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 6,
      icon: <TrendingUp size={32} />,
      role: "Business Analyst Intern",
      department: "Business",
      type: "business",
      location: "On-site",
      duration: "3-6 Months",
      stipend: "$480/month",
      description: "Support business operations, analyze market trends, and prepare reports for leadership.",
      requirements: ["Excel", "Communication skills", "Business sense"],
      positions: 4,
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  const roles = [
    { id: 'all', name: 'All Roles' },
    { id: 'development', name: 'Development' },
    { id: 'design', name: 'Design' },
    { id: 'data', name: 'Data' },
    { id: 'marketing', name: 'Marketing' },
    { id: 'business', name: 'Business' }
  ];

  const programs = [
    {
      title: "Summer Internship",
      duration: "June - August",
      description: "3-month intensive internship program during summer break with full mentorship and project ownership.",
      features: ["Paid stipend", "Mentorship", "Real projects", "Certificate"]
    },
    {
      title: "Extended Internship",
      duration: "Flexible (3-6 months)",
      description: "Extended program with flexible dates, perfect for those seeking long-term experience.",
      features: ["Higher stipend", "Lead projects", "Team lead role", "Permanent offer potential"]
    },
    {
      title: "Winter Internship",
      duration: "December - January",
      description: "Intensive 2-month program during winter break with hands-on project work.",
      features: ["Paid stipend", "Intensive training", "Quick placement", "Certificate"]
    }
  ];

  const benefits = [
    {
      icon: <DollarSign size={32} />,
      title: "Competitive Stipend",
      description: "$400-$550 monthly depending on role and performance"
    },
    {
      icon: <Users size={32} />,
      title: "Expert Mentorship",
      description: "Personalized guidance from senior professionals in your field"
    },
    {
      icon: <Award size={32} />,
      title: "Certificate & Badge",
      description: "Recognized credentials to showcase on LinkedIn and resumes"
    },
    {
      icon: <Briefcase size={32} />,
      title: "Real Project Experience",
      description: "Work on actual products used by thousands of customers"
    },
    {
      icon: <Heart size={32} />,
      title: "Learning & Growth",
      description: "Access to training resources, workshops, and skill development"
    },
    {
      icon: <Rocket size={32} />,
      title: "Career Opportunities",
      description: "Potential for full-time job offers upon successful completion"
    }
  ];

  const timeline = [
    {
      step: "1",
      title: "Application",
      description: "Submit your resume, portfolio, and completed application form"
    },
    {
      step: "2",
      title: "Screening",
      description: "Our team reviews applications and shortlists candidates"
    },
    {
      step: "3",
      title: "Technical Round",
      description: "Technical assessment or portfolio review based on role"
    },
    {
      step: "4",
      title: "Interview",
      description: "Meet with hiring managers and discuss your goals"
    },
    {
      step: "5",
      title: "Offer",
      description: "Receive offer letter with program details and start date"
    },
    {
      step: "6",
      title: "Onboarding",
      description: "Complete orientation and start your internship journey"
    }
  ];

  const placements = [
    {
      name: "Priya Sharma",
      role: "Frontend Developer",
      company: "Tech Innovations",
      internshipRole: "Frontend Development Intern",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      duration: "3 months",
      salary: "₹8,50,000/year",
      package: "CTC: ₹8.5 LPA | Bonus: ₹1 LPA | Benefits: Health, Relocation"
    },
    {
      name: "Arjun Patel",
      role: "Data Analyst",
      company: "Data Insights Inc",
      internshipRole: "Data Analytics Intern",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
      duration: "6 months",
      salary: "₹7,50,000/year",
      package: "CTC: ₹7.5 LPA | Bonus: ₹0.75 LPA | Benefits: Health, Remote Work"
    },
    {
      name: "Kavya Nair",
      role: "UI/UX Designer",
      company: "Creative Labs",
      internshipRole: "UI/UX Design Intern",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya",
      duration: "4 months",
      salary: "₹7,20,000/year",
      package: "CTC: ₹7.2 LPA | Bonus: ₹0.8 LPA | Benefits: Health, Stock Options"
    },
    {
      name: "Rahul Verma",
      role: "Backend Developer",
      company: "Cloud Systems",
      internshipRole: "Mobile App Development Intern",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
      duration: "5 months",
      salary: "₹9,00,000/year",
      package: "CTC: ₹9 LPA | Bonus: ₹1.2 LPA | Benefits: Health, Relocation, Stock"
    },
    {
      name: "Neha Singh",
      role: "Business Analyst",
      company: "Consulting Group",
      internshipRole: "Business Analyst Intern",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
      duration: "5 months",
      salary: "₹6,80,000/year",
      package: "CTC: ₹6.8 LPA | Bonus: ₹0.7 LPA | Benefits: Health, Gym"
    },
    {
      name: "Aditya Kumar",
      role: "Full Stack Developer",
      company: "StartUp Hub",
      internshipRole: "Frontend Development Intern",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
      duration: "6 months",
      salary: "₹8,20,000/year",
      package: "CTC: ₹8.2 LPA | Bonus: ₹0.9 LPA | Benefits: Health, ESOP"
    }
  ];

  const reviews = [
    {
      name: "Priya Sharma",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      role: "Frontend Developer at Tech Innovations",
      rating: 5,
      text: "The internship program was transformative! I gained practical experience, mentorship from amazing seniors, and landed a full-time job offer. Highly recommended!"
    },
    {
      name: "Arjun Patel",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Arjun",
      role: "Data Analyst at Data Insights Inc",
      rating: 5,
      text: "Excellent program with real projects and great mentors. I learned more in 6 months than in my previous studies. The community is supportive and helpful."
    },
    {
      name: "Kavya Nair",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Kavya",
      role: "UI/UX Designer at Creative Labs",
      rating: 5,
      text: "Amazing experience working on real design projects. The feedback from experienced designers was invaluable. I got the full-time offer and couldn't be happier!"
    },
    {
      name: "Rahul Verma",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rahul",
      role: "Backend Developer at Cloud Systems",
      rating: 5,
      text: "Outstanding mentorship and real-world projects. The stipend was helpful and the company culture is amazing. Definitely worth joining!"
    },
    {
      name: "Neha Singh",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Neha",
      role: "Business Analyst at Consulting Group",
      rating: 5,
      text: "Great learning opportunity with flexible work arrangements. The team was supportive and I got a permanent position after internship. Best decision!"
    },
    {
      name: "Aditya Kumar",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aditya",
      role: "Full Stack Developer at StartUp Hub",
      rating: 5,
      text: "Fantastic internship experience! Real projects, great mentors, and the transition to full-time was smooth. Highly recommend this program!"
    }
  ];

  const stats = [
    { icon: <Briefcase size={40} />, value: "50+", label: "Internship Positions" },
    { icon: <Users size={40} />, value: "500+", label: "Interns Trained" },
    { icon: <Award size={40} />, value: "85%", label: "Offer Rate" },
    { icon: <Star size={40} />, value: "4.9/5", label: "Average Rating" }
  ];

  const filteredOpportunities = selectedRole === 'all' 
    ? internshipOpportunities 
    : internshipOpportunities.filter(opp => opp.type === selectedRole);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-white text-gray-900 relative overflow-hidden">
      {/* DECORATIVE BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* HERO SECTION */}
      <div ref={heroRef} className="relative z-10 text-center py-24 px-6">
        <div className={`transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700">
            Internship Program
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-4">
            Launch Your Career with Real Experience
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-8">
            Join our internship program and gain practical experience working on real projects with industry experts
          </p>
        </div>

        {/* ROLE FILTERS */}
        <div className={`flex flex-wrap justify-center gap-3 mt-8 transition-all duration-1000 delay-300 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                selectedRole === role.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-500 hover:text-blue-600'
              }`}
            >
              {role.name}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 relative z-10">
        
        {/* INTERNSHIP OPPORTUNITIES */}
        <div ref={opportunitiesRef} data-section="opportunities" className="mb-24">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 ${isVisible.opportunities ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Open Internship Positions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredOpportunities.map((opportunity, idx) => (
              <div
                key={opportunity.id}
                className={`bg-white/80 backdrop-blur-lg rounded-2xl border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 overflow-hidden ${isVisible.opportunities ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${opportunity.color} p-8 text-white`}>
                  <div className="mb-4">{opportunity.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{opportunity.role}</h3>
                  <p className="text-sm opacity-90">{opportunity.department}</p>
                </div>

                {/* Body */}
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{opportunity.description}</p>

                  {/* Details */}
                  <div className="space-y-3 mb-6 text-sm text-gray-600">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <MapPin size={16} /> Location
                      </span>
                      <span className="font-semibold text-gray-900">{opportunity.location}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Clock size={16} /> Duration
                      </span>
                      <span className="font-semibold text-gray-900">{opportunity.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <DollarSign size={16} /> Stipend
                      </span>
                      <span className="font-semibold text-gray-900">{opportunity.stipend}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Users size={16} /> Positions
                      </span>
                      <span className="font-semibold text-gray-900">{opportunity.positions}</span>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="pb-6 border-b border-gray-200">
                    <p className="text-sm font-semibold text-gray-900 mb-3">Requirements:</p>
                    <div className="space-y-2">
                      {opportunity.requirements.map((req, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle size={14} className="text-green-500" />
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PROGRAM OPTIONS */}
        <div ref={programsRef} data-section="programs" className="mb-24">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 ${isVisible.programs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Internship Programs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, idx) => (
              <div
                key={idx}
                className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-700 transform hover:-translate-y-2 ${isVisible.programs ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{program.title}</h3>
                <p className="text-blue-600 font-semibold mb-4">{program.duration}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                <div className="space-y-3">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-700">
                      <CheckCircle size={18} className="text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BENEFITS SECTION */}
        <div ref={benefitsRef} data-section="benefits" className="mb-24">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Why Join Our Internship?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-700 transform hover:-translate-y-2 ${isVisible.benefits ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="text-blue-600 mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* APPLICATION TIMELINE */}
        <div ref={timelineRef} data-section="timeline" className="mb-24">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 ${isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Application Timeline
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-700 ${isVisible.timeline ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="inline-block w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* PLACEMENT SECTION */}
        <div ref={placementRef} data-section="placement" className="mb-24">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 ${isVisible.placement ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Placed Students
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {placements.map((student, idx) => (
              <div
                key={idx}
                className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-700 transform hover:-translate-y-2 ${isVisible.placement ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={student.image} 
                    alt={student.name}
                    className="w-16 h-16 rounded-full border-2 border-blue-500"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">{student.name}</h3>
                    <p className="text-sm text-blue-600 font-semibold">{student.role}</p>
                    <p className="text-xs text-gray-600">{student.company}</p>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Internship Role:</span>
                    <span className="font-semibold text-gray-900">{student.internshipRole}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Duration:</span>
                    <span className="font-semibold text-gray-900">{student.duration}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Salary:</span>
                    <span className="font-semibold text-green-600">{student.salary}</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-xs font-semibold text-blue-900 mb-2">Package Details</p>
                  <p className="text-xs text-gray-700 leading-relaxed">{student.package}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* STUDENT REVIEWS SECTION */}
        <div ref={reviewsRef} data-section="reviews" className="mb-24">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 ${isVisible.reviews ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Student Reviews
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className={`bg-white/80 backdrop-blur-lg p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-all duration-700 transform hover:-translate-y-2 ${isVisible.reviews ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-14 h-14 rounded-full border-2 border-blue-500"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{review.name}</h3>
                    <p className="text-xs text-gray-600">{review.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-gray-600 italic text-sm">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>

        {/* STATS SECTION */}
        <div ref={statsRef} data-section="stats" className="mb-24">
          <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 transition-all duration-1000 ${isVisible.stats ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Our Track Record
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Start Your Internship?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Join thousands of professionals who have advanced their careers through our internship program
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Browse Positions
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;