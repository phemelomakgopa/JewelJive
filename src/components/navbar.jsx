import React, { useState, useEffect } from "react";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar__logo"> {/* Placeholder logo text */}
        <a href="/" className="navbar__logo-text">JewelJive</a>
      </div>

      <div className={`navbar__links ${menuOpen && isMobile ? "open" : ""}`}>
        <a href="/" className="navbar__link">
          Home
        </a>
        <a href="/shop" className="navbar__link">
          Shop All
        </a>
        <a href="/contact" className="navbar__link">
          Contact
        </a>
      </div>

      <div className="navbar__icons flex gap-3">
        <button className="icon-btn" arial-label="Search">
          <Search className="w-5 h-5" />
        </button>
        <button className="icon-btn" arail-label="Account">
          <User className="w-5 h-5" />
        </button>
        <button className="icon-btn" arial-label="Wishlist">
          <Heart className="w-5 h-5" />
        </button>
        <button className="icon-btn" arial-label="Cart">
          <ShoppingCart className="w-5 h-5" />
        </button>

        {isMobile && (
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        )}
      </div>
    </nav>
  );
}
