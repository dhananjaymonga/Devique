import React from "react";
import { useNavigate } from "react-router-dom";

const blogData = [
  {
    id: 1,
    slug: "digital-transformation",
    title: "Why Modern Businesses Need Digital Transformation",
    desc: "Learn how digital tools help businesses scale faster and stay competitive.",
    date: "Jan 12, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    content: `Digital transformation is no longer optional. Companies that adopt digital tools gain efficiency, scalability, and a competitive edge. From cloud computing to AI-driven solutions, technology enables smarter decision-making and improved customer experiences.`,
  },
  {
    id: 2,
    slug: "it-student-skills",
    title: "Top Skills Every IT Student Should Learn in 2025",
    desc: "A roadmap of must-have technical and soft skills for IT careers.",
    date: "Feb 02, 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    content: `IT students need both technical and soft skills to succeed. Core technical skills include programming, web development, and AI/ML basics, while soft skills like teamwork, problem-solving, and communication are essential.`,
  },
  {
    id: 3,
    slug: "web-dev-trends",
    title: "Web Development Trends You Can’t Ignore",
    desc: "From AI integration to performance-first design — explore what’s next.",
    date: "Mar 18, 2025",
    category: "Development",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    content: `Web development continues to evolve. Trends include AI-driven features, performance-first design, and progressive web apps. Staying up-to-date is crucial for modern developers and businesses.`,
  },
];

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white min-h-screen">
      {/* HERO */}
      <div className="py-24 bg-gradient-to-b from-[#f5f9ff] to-white text-center">
        <p className="text-sm tracking-widest text-blue-500 uppercase mb-4">
          Our Blog
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          Insights, Articles & <span className="text-blue-500">Updates</span>
        </h1>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogData.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden border shadow hover:shadow-xl transition"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-52 w-full object-cover bg-gray-200"
              />

              <div className="p-6">
                <span className="text-xs font-semibold text-blue-600 uppercase">
                  {blog.category}
                </span>

                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                  {blog.title}
                </h3>

                <p className="mt-2 text-sm text-gray-700">{blog.desc}</p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-500">{blog.date}</span>
                  <button
                    onClick={() => navigate(`/blog/${blog.slug}`)}
                    className="text-sm font-semibold text-blue-600 hover:underline"
                  >
                    Read More →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
