import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInfoCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { FaBookOpen } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Fixed Navbar Component
 * 
 * BUGS FIXED:
 * 1. CSS variable syntax - changed var(--color-gold) to direct hex values
 * 2. Font family - changed font-[Outfit] to standard Tailwind classes
 * 3. Event listener cleanup - fixed memory leak in escape key handler
 * 4. Focus timing - improved timeout handling
 * 5. Overlay click handling - better event delegation
 * 6. Z-index stacking - ensured proper layering
 * 7. Animation performance - optimized motion values
 * 8. Accessibility - improved ARIA labels and focus management
 * 9. Mobile scrolling - fixed overflow issues
 * 10. Click propagation - prevented unwanted closes
 */
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeBtnRef = useRef(null);
  const overlayRef = useRef(null);

  const navItems = [
    { name: "About", icon: <AiOutlineInfoCircle />, link: "/about" },
    { name: "Chapters", icon: <FaBookOpen />, link: "/chapters" },
    { name: "AI", icon: <GiArtificialIntelligence />, link: "/ai" },
    { name: "Logout", icon: <AiOutlineLogout />, link: "/login" },
  ];

  // Prevent body scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      // Focus the close button for accessibility
      const timeoutId = setTimeout(() => {
        if (closeBtnRef.current) {
          closeBtnRef.current.focus();
        }
      }, 100);
      return () => clearTimeout(timeoutId);
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
      }
    };
    
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [menuOpen]);

  // Click outside drawer closes it
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      setMenuOpen(false);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-md border-b border-[#c2995a]/30 shadow-[0_4px_15px_rgba(194,153,90,0.15)]">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-6 py-3 md:py-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="text-[#c2995a] text-lg md:text-2xl font-semibold tracking-wide">
              DivineVerse
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.link}
                className={({ isActive }) =>
                  `flex items-center gap-2 text-base transition-colors duration-200 ${
                    isActive ? "text-[#c2995a]" : "text-white hover:text-[#c2995a]"
                  }`
                }
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-white text-2xl p-2 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#c2995a]/50 transition-colors"
          >
            <AiOutlineMenu />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-60 flex justify-end"
            onClick={handleOverlayClick}
            ref={overlayRef}
            style={{ pointerEvents: "auto" }}
          >
            {/* Overlay Background */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
              aria-hidden="true"
            />

            {/* Drawer Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-72 max-w-[80vw] h-full border-l border-[#c2995a]/40 shadow-[0_0_28px_rgba(194,153,90,0.35)] p-6 flex flex-col overflow-y-auto bg-linear-to-b from-[#101010] via-[#0a0a0a] to-[#000000]"
              role="dialog"
              aria-modal="true"
              aria-label="Main menu"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Decorative Glows */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div 
                  className="absolute top-0 left-0 w-48 h-48 rounded-full blur-3xl opacity-60 transform -translate-x-1/2 -translate-y-1/2"
                  style={{ background: "radial-gradient(circle, rgba(194,153,90,0.13), transparent)" }}
                />
                <div 
                  className="absolute bottom-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-40 transform translate-x-1/2 translate-y-1/2"
                  style={{ background: "radial-gradient(circle, rgba(194,153,90,0.09), transparent)" }}
                />
              </div>

              {/* Header */}
              <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="text-[#c2995a] font-semibold text-xl">
                  DivineVerse
                </div>
                <button
                  ref={closeBtnRef}
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-2xl p-1 rounded-md hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#c2995a]/50 transition-colors"
                >
                  <AiOutlineClose />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-1 relative z-10">
                {navItems.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.link}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center gap-3 px-3 py-3 rounded-lg text-base transition-all duration-200 ${
                        isActive
                          ? "text-[#c2995a] bg-[#c2995a]/10"
                          : "text-white hover:text-[#c2995a] hover:bg-white/5"
                      }`
                    }
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span>{item.name}</span>
                  </NavLink>
                ))}
              </nav>

              {/* Footer */}
              <div className="mt-auto pt-6 text-center text-sm text-gray-500 relative z-10">
                © DivineVerse 2025
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;