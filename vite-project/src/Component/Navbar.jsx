import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const linksRef = useRef([]);
  const btnRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const mobileLinksRef = useRef([]);
  const menuBtnRef = useRef(null);
  const navigate = useNavigate();
  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Courses", path: "/courses" },
    { name: "Training", path: "/training" },
    { name: "Internship", path: "/internship" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    // Navbar entrance animation
    gsap.fromTo(
      navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
    );

    // Logo animation
    gsap.from(logoRef.current, {
      y: -20,
      opacity: 0,
      delay: 0.2,
      duration: 0.6,
      ease: "power3.out",
    });

    // Links animation
    gsap.from(linksRef.current, {
      y: -15,
      opacity: 0,
      stagger: 0.06,
      delay: 0.3,
      duration: 0.5,
      ease: "power3.out",
    });

    // Button animation
    gsap.from(btnRef.current, {
      scale: 0.8,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
      ease: "back.out(1.7)",
    });

    // Menu button animation
    gsap.from(menuBtnRef.current, {
      scale: 0.8,
      opacity: 0,
      delay: 0.5,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  }, []);

  useEffect(() => {
    // Mobile menu animations
    if (mobileMenuOpen) {
      gsap.to(mobileMenuRef.current, {
        height: "auto",
        opacity: 1,
        duration: 0.4,
        ease: "power3.out",
      });

      gsap.from(mobileLinksRef.current, {
        y: -10,
        opacity: 0,
        stagger: 0.05,
        delay: 0.1,
        duration: 0.4,
        ease: "power3.out",
      });
    } else {
      gsap.to(mobileMenuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.3,
        ease: "power3.in",
      });
    }
  }, [mobileMenuOpen]);

  const handleApplyNow = () => {
    navigate("/contact");
    setMobileMenuOpen(false);
  };

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full bg-white z-[999] border-b border-gray-100 shadow-md"
        style={{
          boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
          {/* Logo */}
          <motion.div
            ref={logoRef}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="flex items-center gap-2 cursor-pointer flex-shrink-0"
          >
            <Code2 size={28} className="text-blue-500" strokeWidth={2.2} />
            <span className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
              devique
            </span>
          </motion.div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-1">
            {links.map((item, i) => (
              <li key={item.name} ref={(el) => (linksRef.current[i] = el)}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-sm font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                    }`
                  }
                >
                  {item.name}
                  <span 
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400 transition-all duration-500 scale-x-0"
                    style={{
                      transformOrigin: "center",
                    }}
                  />
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Apply Button - Only on Desktop */}
        <motion.button
  ref={btnRef}
  whileHover={{ scale: 1.08, boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)" }}
  whileTap={{ scale: 0.95 }}
  onClick={handleApplyNow}
  className="block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 lg:px-7 py-2.5 rounded-full text-sm font-semibold shadow-lg transition-all duration-300"
>
  Apply Now
</motion.button>


          {/* Mobile Menu Button */}
          <motion.button
            ref={menuBtnRef}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <X size={24} className="text-gray-900" strokeWidth={2} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Menu size={24} className="text-gray-900" strokeWidth={2} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          ref={mobileMenuRef}
          initial={{ height: 0, opacity: 0 }}
          className="lg:hidden overflow-hidden border-t border-gray-100"
        >
          <div className="px-4 sm:px-6 py-4 bg-gradient-to-b from-white via-blue-50/30 to-white">
            {/* Mobile Links */}
            <ul className="flex flex-col gap-2 mb-4">
              {links.map((item, i) => (
                <li
                  key={item.name}
                  ref={(el) => (mobileLinksRef.current[i] = el)}
                >
                  <NavLink
                    to={item.path}
                    onClick={handleMobileLinkClick}
                    className={({ isActive }) =>
                      `block text-sm font-medium px-4 py-2.5 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-blue-600 bg-blue-100"
                          : "text-gray-700 hover:text-blue-600 hover:bg-blue-50"
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Apply Button */}
           <motion.button
  ref={btnRef}
  whileHover={{ scale: 1.08, boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)" }}
  whileTap={{ scale: 0.95 }}
  onClick={handleApplyNow}
  className="block bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-6 lg:px-7 py-2.5 rounded-full text-sm font-semibold shadow-lg transition-all duration-300"
>
  Apply Now
</motion.button>

          </div>
        </motion.div>
      </nav>

      {/* Navbar Spacer */}
      <div className="h-16 sm:h-20" />
    </>
  );
}