import React, { useEffect, useRef } from "react"; 
import { Routes, Route } from "react-router-dom"; 
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Star from "./Component/Star";
import InternshipSection from "./Component/Intership-overview"; 
import Services from "./Component/Services";
 import Service from "./Component/Service";
  import Courses from "./Component/Courses";
   import CourseDetail from "./Component/CoursesDetails.jsx"; 
   import Testimonials from "./Component/Testimonials"; 
   import CTASection from "./Component/CTA-Section"; 
   import Footer from "./Component/Footer";
    import About from "./Component/About"; 
    import "swiper/css"; import "swiper/css/pagination";
     import "swiper/css/autoplay";
      import Blog from "./Component/Blog"; 
      import BlogDetail from "./Component/BlogDetails";
       import Contact from "./Component/Contact";
        import AdminPanel from "./Admin/Admin-Userdetails";
         import AdminBlog from "./Admin/Blog-Admin.jsx";
          import AdminLogin from "./Admin/AdminLogin.jsx";
           import AdminDashboard from "./Admin/AdminDashboard.jsx";
            import InternshipDetails from "./Component/Intership.jsx";
             import PrivateRoute from "./Component/PrivateRoute";
              import ScrollToTop from "./Component/ScrollToTop";
               export default function App() 
               { return ( <> <Navbar /> <ScrollToTop /> <div className="pt-20"> <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> <Route path="/blog" element={<Blog />} /> <Route path="/blog/:slug" element={<BlogDetail />} /> <Route path="/contact" element={<Contact />} /> <Route path="/services" element={<Service />} /> <Route path="/courses" element={<Courses />} /> <Route path="/internship" element={<InternshipDetails />} /> {/* Admin Login Route */} <Route path="/admin" element={<AdminLogin />} /> {/* Admin Dashboard - Protected */} <Route path="/admin/dashboard" element={<PrivateRoute element={<AdminDashboard />} />} /> {/* Private Admin Routes */} <Route path="/admin/users" element={<PrivateRoute element={<AdminPanel />} />} /> <Route path="/admin/blog" element={<PrivateRoute element={<AdminBlog />} />} /> {/* 404 fallback - must be last */} <Route path="*" element={<Home />} /> </Routes> <Footer /> </div> </> ); }