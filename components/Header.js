"use client";
import Link from "next/link";
import { useState } from "react";
import DarkToggle from "./DarkToggle";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky">
      <nav className="nav container">
        {/* Brand */}
        <div className="brand-wrapper">
          <Link href="/" className="brand" onClick={closeMenu}>
            Nexora<span style={{ color: "var(--accent)", marginLeft: "6px" }}>Digital</span>
          </Link>
          <span className="pill" style={{ display: "none" }} aria-hidden="true">Enterprise</span>
        </div>

        {/* Desktop nav */}
        <div className="nav-links desktop-nav">
          <div className="nav-menu">
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/digital-marketing">Marketing</Link>
            
          </div>
          <div className="nav-actions">
            <Link href="/contact" className="btn primary nav-cta">Contact</Link>
            <DarkToggle className="nav-toggle" />
          </div>
        </div>

        {/* Mobile right side */}
        <div className="mobile-nav-right">
          <DarkToggle className="nav-toggle" />
          <button
            className="hamburger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link href="/about" onClick={closeMenu}>About</Link>
          <Link href="/services" onClick={closeMenu}>Services</Link>
          <Link href="/portfolio" onClick={closeMenu}>Portfolio</Link>
          <Link href="/digital-marketing" onClick={closeMenu}>Marketing</Link>
          <Link href="/blog" onClick={closeMenu}>Blog</Link>
          <Link href="/contact" className="btn primary" onClick={closeMenu} style={{ marginTop: "0.5rem", width: "100%", justifyContent: "center" }}>
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
