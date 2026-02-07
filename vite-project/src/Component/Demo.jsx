import React, { useEffect, useRef, useState } from "react";
import { Code, Database, Cpu, Globe, Smartphone, Server, ArrowRight, Clock, Users, Award } from "lucide-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const CourseScrollStack = () => {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const courses = [
    {
      id: 1,
      title: "Full-Stack Development",
      subtitle: "MERN Stack Mastery",
      description: "Master modern web development with MongoDB, Express, React, and Node.js. Build production-ready applications from scratch.",
      icon: <Code size={48} />,
      color: "from-amber-500 to-orange-600",
      duration: "6 months",
      students: "2,500+",
      level: "Intermediate",
      skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs", "Authentication"],
      gradient: "bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10",
      borderGlow: "border-amber-500/30"
    },
    {
      id: 2,
      title: "PHP Development",
      subtitle: "Backend Excellence",
      description: "Deep dive into PHP and Laravel framework. Create scalable server-side applications with modern PHP practices.",
      icon: <Server size={48} />,
      color: "from-purple-500 to-pink-600",
      duration: "4 months",
      students: "1,800+",
      level: "Beginner",
      skills: ["PHP 8", "Laravel", "MySQL", "API Development", "MVC", "Security"],
      gradient: "bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-rose-500/10",
      borderGlow: "border-purple-500/30"
    },
    {
      id: 3,
      title: "Python Development",
      subtitle: "AI & Web Applications",
      description: "Learn Python for web development, data science, and AI. From Django to machine learning implementations.",
      icon: <Cpu size={48} />,
      color: "from-blue-500 to-cyan-600",
      duration: "5 months",
      students: "3,200+",
      level: "All Levels",
      skills: ["Python", "Django", "Flask", "Data Science", "Machine Learning", "APIs"],
      gradient: "bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-teal-500/10",
      borderGlow: "border-blue-500/30"
    },
    {
      id: 4,
      title: "Mobile Development",
      subtitle: "iOS & Android",
      description: "Build native and cross-platform mobile apps with React Native and Flutter. Deploy to both app stores.",
      icon: <Smartphone size={48} />,
      color: "from-green-500 to-emerald-600",
      duration: "5 months",
      students: "1,600+",
      level: "Intermediate",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase", "Mobile UI"],
      gradient: "bg-gradient-to-br from-green-500/10 via-emerald-500/10 to-teal-500/10",
      borderGlow: "border-green-500/30"
    },
    {
      id: 5,
      title: "DevOps Engineering",
      subtitle: "Infrastructure & CI/CD",
      description: "Master cloud infrastructure, containerization, and deployment pipelines. AWS, Docker, Kubernetes, and more.",
      icon: <Database size={48} />,
      color: "from-red-500 to-orange-600",
      duration: "4 months",
      students: "1,400+",
      level: "Advanced",
      skills: ["Docker", "Kubernetes", "AWS", "CI/CD", "Linux", "Terraform"],
      gradient: "bg-gradient-to-br from-red-500/10 via-orange-500/10 to-amber-500/10",
      borderGlow: "border-red-500/30"
    },
    {
      id: 6,
      title: "UI/UX Design",
      subtitle: "Design Systems",
      description: "Create beautiful, user-centered designs. Master Figma, design systems, and modern UI/UX principles.",
      icon: <Globe size={48} />,
      color: "from-indigo-500 to-purple-600",
      duration: "3 months",
      students: "2,100+",
      level: "Beginner",
      skills: ["Figma", "Design Systems", "Prototyping", "User Research", "Wireframing", "CSS"],
      gradient: "bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10",
      borderGlow: "border-indigo-500/30"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const containerTop = containerRef.current.offsetTop;
      const scrollInContainer = scrollPosition - containerTop + windowHeight / 2;
      const cardHeight = 600;
      const newIndex = Math.min(
        Math.max(0, Math.floor(scrollInContainer / cardHeight)),
        courses.length - 1
      );
      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [courses.length]);

  return (
    <div className=" bg-zinc-950 text-gray-100 relative overflow-hidden">
      {/* SUBTLE GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                          linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
        backgroundSize: '64px 64px'
      }}></div>

      {/* GRADIENT ACCENTS */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-amber-950/10 via-transparent to-transparent pointer-events-none"></div>

      {/* HERO SECTION */}
      <div className="relative z-10 text-center py-20 px-6 border-b border-zinc-800/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block mb-4 px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-full">
            <span className="text-sm font-medium text-amber-400">Professional Training Programs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-5 text-white tracking-tight">
            Our Courses
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed font-light">
            Industry-leading curriculum designed to transform you into a professional developer
          </p>
        </motion.div>
      </div>

      {/* SCROLL STACK SECTION */}
      <div ref={containerRef} className="relative py-20" style={{ minHeight: `${courses.length * 600}px` }}>
        <div className="sticky top-20 max-w-6xl mx-auto px-6">
          <div className="relative h-[600px]">
            {courses.map((course, index) => {
              const isActive = index === activeIndex;
              const isPast = index < activeIndex;
              const isFuture = index > activeIndex;
              return (
                <motion.div
                  key={course.id}
                  className={`absolute top-0 left-0 w-full transition-all duration-700 ease-out ${
                    isActive ? 'z-30' : isPast ? 'z-10' : 'z-20'
                  }`}
                  style={{
                    transform: isPast
                      ? `translateY(-${(activeIndex - index) * 40}px) scale(${1 - (activeIndex - index) * 0.05})`
                      : isFuture
                      ? `translateY(${(index - activeIndex) * 60}px) scale(${1 - (index - activeIndex) * 0.08})`
                      : 'translateY(0) scale(1)',
                    opacity: isPast ? 0.3 : isFuture ? 0.6 : 1,
                    filter: isPast ? 'blur(2px)' : isFuture ? 'blur(1px)' : 'blur(0)',
                  }}
                >
                  <div className={`${course.gradient} backdrop-blur-sm rounded-2xl border ${isActive ? course.borderGlow : 'border-zinc-800/60'} overflow-hidden transition-all duration-700 ${isActive ? 'shadow-2xl' : 'shadow-lg'}`}>
                    <div className="bg-zinc-900/70 backdrop-blur-md p-8 md:p-10">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* LEFT SIDE - CONTENT */}
                        <div>
                          <div className={`inline-block p-4 bg-gradient-to-br ${course.color} rounded-xl text-white mb-6`}>
                            {course.icon}
                          </div>
                          
                          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
                            {course.title}
                          </h2>
                          <p className={`text-lg bg-gradient-to-r ${course.color} bg-clip-text text-transparent font-semibold mb-4`}>
                            {course.subtitle}
                          </p>
                          <p className="text-zinc-400 text-base leading-relaxed mb-6">
                            {course.description}
                          </p>

                          {/* STATS */}
                          <div className="flex flex-wrap gap-6 mb-8">
                            <div className="flex items-center gap-2">
                              <Clock size={18} className="text-amber-500" />
                              <span className="text-zinc-300 text-sm">{course.duration}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users size={18} className="text-amber-500" />
                              <span className="text-zinc-300 text-sm">{course.students} enrolled</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Award size={18} className="text-amber-500" />
                              <span className="text-zinc-300 text-sm">{course.level}</span>
                            </div>
                          </div>

                          {/* CTA BUTTONS */}
                          <div className="flex flex-wrap gap-4">
                            <button className={`px-6 py-3 bg-gradient-to-r ${course.color} text-white rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300 hover:scale-105`}>
                              Enroll Now <ArrowRight size={18} />
                            </button>
                            <button className="px-6 py-3 bg-zinc-800/50 hover:bg-zinc-800 border border-zinc-700/50 text-zinc-300 rounded-lg font-semibold transition-all duration-300">
                              View Curriculum
                            </button>
                          </div>
                        </div>

                        {/* RIGHT SIDE - SKILLS */}
                        <div className="bg-zinc-800/30 backdrop-blur-sm rounded-xl border border-zinc-700/50 p-6">
                          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${course.color}`}></span>
                            What You'll Learn
                          </h3>
                          <div className="grid grid-cols-2 gap-3">
                            {course.skills.map((skill, idx) => (
                              <div
                                key={idx}
                                className="bg-zinc-900/50 border border-zinc-700/30 rounded-lg px-3 py-2 text-sm text-zinc-300 hover:border-amber-500/30 transition-colors"
                              >
                                {skill}
                              </div>
                            ))}
                          </div>

                          {/* PROGRESS INDICATOR */}
                          <div className="mt-6 pt-6 border-t border-zinc-700/30">
                            <div className="flex justify-between text-xs text-zinc-500 mb-2">
                              <span>Course Progress</span>
                              <span>Start Learning</span>
                            </div>
                            <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                              <div className={`h-full bg-gradient-to-r ${course.color} w-0 rounded-full`}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* SCROLL INDICATOR */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-sm text-zinc-500">
              <span>Scroll to explore</span>
              <div className="flex gap-1">
                {courses.map((_, idx) => (
                  <div
                    key={idx}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? 'bg-amber-500 w-8' : 'bg-zinc-700'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA SECTION */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20">
        <div className="relative overflow-hidden bg-gradient-to-br from-zinc-900 via-zinc-900 to-amber-950/20 border border-zinc-800/70 rounded-2xl p-10 text-center">
          <div className="absolute top-0 right-0 w-64 h-64 bg-amber-600/5 rounded-full blur-3xl"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Can't Decide Which Course?</h2>
            <p className="text-lg mb-8 text-zinc-400 max-w-xl mx-auto font-light">
              Talk to our career counselors and get personalized course recommendations based on your goals
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="px-7 py-3 bg-amber-500 hover:bg-amber-400 text-black rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20">
                Schedule Consultation
              </button>
              <button className="px-7 py-3 bg-transparent border border-zinc-700 hover:border-amber-500/50 text-zinc-300 hover:text-white rounded-lg font-semibold transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseScrollStack;