import React, { useState } from "react";
import { Search, User, Heart, ShoppingCart } from "lucide-react";
import "./navbar.css";

export default function Navbar() {
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar__logo">
        <span className="navbar__logo-text">JewelJive</span>
      </div>

      {/* Links */}
      <div className="navbar__links">
        <a href="/" className="navbar__link">Home</a>

        {/* Shop All Dropdown */}
        <div
          className="mega-menu"
          onMouseEnter={() => setMegaOpen(true)}
          onMouseLeave={() => setMegaOpen(false)}
        >
          <button className="navbar__link dropdown-toggle">
            Shop All ▾
          </button>

          {megaOpen && (
            <div className="mega-menu__content">
              <ul className="mega-menu__list">
                <li>
                  <a href="/collections/necklaces" className="mega-menu__link">
                    Necklaces
                  </a>
                </li>

                <li className="dropdown-submenu">
                  <a href="/collections/earrings" className="mega-menu__link">
                    Earrings
                  </a>
                  <ul className="submenu">
                    <li>
                      <a href="/collections/earrings" className="mega-menu__link">All Earrings</a>
                    </li>
                    <li>
                      <a href="/collections/hoops" className="mega-menu__link">Hoops</a>
                    </li>
                    <li>
                      <a href="/collections/huggies" className="mega-menu__link">Huggies</a>
                    </li>
                    <li>
                      <a href="/collections/studs" className="mega-menu__link">Studs</a>
                    </li>
                  </ul>
                </li>

                <li><a href="/collections/bracelets" className="mega-menu__link">Bracelets</a></li>
                <li><a href="/collections/rings" className="mega-menu__link">Rings</a></li>
                <li><a href="/collections/accessories" className="mega-menu__link">Accessories</a></li>
                <li><a href="/collections/gift-cards" className="mega-menu__link">Gift Cards</a></li>
              </ul>
            </div>
          )}
        </div>

        <a href="/contact" className="navbar__link">Contact</a>
      </div>

      {/* Icons */}
      <div className="navbar__icons">
        <button className="icon-btn" aria-label="Search"><Search /></button>
        <button className="icon-btn" aria-label="Account"><User /></button>
        <button className="icon-btn" aria-label="Wishlist"><Heart /></button>
        <button className="icon-btn" aria-label="Cart"><ShoppingCart /></button>
      </div>
    </nav>
  );
}
