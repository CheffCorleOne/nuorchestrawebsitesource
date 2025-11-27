import React, { useState, useEffect } from 'react';
import { Music, Menu, X } from 'lucide-react';
import './Header.css';
import logo from '../assets/logo.png';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <div className="logo-container">
      <img
  src={logo}
  alt="NU Orchestra Logo"
  className="h-10 w-auto hover:animate-spin"
/>


          <span className="logo-text">NU ORCHESTRA</span>
        </div>

        <div className="mobile-menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <ul>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a></li>
            <li><a href="#timeline" onClick={() => setMenuOpen(false)}>Timeline</a></li>
	<li><a href="http://orchestraslice.unaux.com/?i=2" onClick={() => setMenuOpen(false)}>NU Orchestra Slicing GAME</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;