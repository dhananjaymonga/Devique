import React from "react";
import { useParams, Link } from "react-router-dom";

// Same blogData can be imported or moved to a shared file
const blogData = [
  {
    id: 1,
    slug: "digital-transformation",
    title: "Why Modern Businesses Need Digital Transformation",
    date: "Jan 12, 2025",
    category: "Technology",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    content: `Digital transformation is no longer optional. Companies that adopt digital tools gain efficiency, scalability, and a competitive edge. From cloud computing to AI-driven solutions, technology enables smarter decision-making and improved customer experiences.`,
  },
  {
    id: 2,
    slug: "it-student-skills",
    title: "Top Skills Every IT Student Should Learn in 2025",
    date: "Feb 02, 2025",
    category: "Training",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    content: `IT students need both technical and soft skills to succeed. Core technical skills include programming, web development, and AI/ML basics, while soft skills like teamwork, problem-solving, and communication are essential.`,
  },
  {
    id: 3,
    slug: "web-dev-trends",
    title: "Web Development Trends You Can’t Ignore",
    date: "Mar 18, 2025",
    category: "Development",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    content: `Web development continues to evolve. Trends include AI-driven features, performance-first design, and progressive web apps. Staying up-to-date is crucial for modern developers and businesses.`,
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-24">
        <h2 className="text-2xl font-bold text-gray-900">Blog Not Found</h2>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-white min-h-screen py-24">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/blog" className="text-blue-600 hover:underline font-medium">
          ← Back to Blog
        </Link>

        <h1 className="mt-6 text-4xl font-extrabold text-gray-900">{blog.title}</h1>

        <p className="mt-2 text-sm text-gray-500">{blog.category} • {blog.date}</p>

        <img
          src={blog.image}
          alt={blog.title}
          className="mt-6 rounded-2xl shadow-md w-full object-cover"
        />

        <div className="mt-8 text-gray-700 space-y-4 leading-relaxed">
          <p>{blog.content}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
