import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Gold-Plated Luxe</h1>
        <p className="hero__subtitle">
          A rich, golden glow that lasts. These high-shine pieces are made from
          stainless steel and plated in 18k gold for ultimate durability.
        </p>
        <button className="hero__cta">Discover the Collection</button>
      </div>

    </section>
  );
}
