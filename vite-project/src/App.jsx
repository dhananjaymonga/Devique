import React from "react";
import { Routes, Route ,BrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Service from "./pages/Service.jsx";
import Courses from "./Component/Courses";
import About from "./pages/About";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Blog from "./pages/Blog.jsx";
import BlogDetail from "./Component/BlogDetails";
import Contact from "./pages/Contact.jsx";
import AdminPanel from "./Admin/Admin-Userdetails";
import InternshipDetails from "./Component/Intership.jsx";
import Layout from "./pages/Layout.jsx";
import Dashboard from "./Admin/AdminDashboard.jsx";
import AdminLayout from "./Admin/AdminLayout.jsx";
import BlogAdminPage from "./Admin/Blog-Admin.jsx";
import AdminLogin from "./Admin/AdminLogin.jsx";
import ScrollToTop from "./Component/ScrollToTop.jsx";

export default function App() {
  return (
    <>
    <BrowserRouter>
          <ScrollToTop></ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>
            <Route index  element={<Home/>} />
            <Route path="about"  element={<About/>} />
            <Route path="blog"  element={<Blog/>} />
            <Route path="blog/:slug" element={<BlogDetail />} />
            <Route path="contact" element={<Contact />} />   
            <Route path="services" element={<Service />} />   
            <Route path="courses" element={<Courses />} />
            <Route path="internship" element={<InternshipDetails />} />
          </Route>
          
          <Route path="/admin" element={<AdminLayout></AdminLayout>}>
            <Route index  element={<AdminLogin/>} />
            <Route path="dashboard"  element={<Dashboard/>} />
            <Route path="view-contact" element={<AdminPanel/>}/>
            <Route path="view-blog" element={<BlogAdminPage/>}/>
          </Route>
        </Routes>
     
    </BrowserRouter>
    
    </>
  );
}
