import React from 'react';
import { Music, Facebook, Instagram, Youtube, Twitter, Send, Music2} from 'lucide-react';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-logo">
                <img
  src={logo}
  alt="NU Orchestra Logo"
  className="h-20 w-auto hover:animate-spin"
/>
 <span className="footer-logo-text">NU ORCHESTRA</span>
          </div>
          
      
        </div>
        
        <div className="footer-content">
          <div className="footer-column">
            <h4>Navigation</h4>
            <ul>
              <li><a href="#about">About us</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="http://orchestraslice.unaux.com/?i=2">NU Orchestra Slicing Game</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>More about our performances</h4>
            <ul>
              <li><a href="https://www.youtube.com/watch?v=wtR75MXCtoI">The Sounds of Time, 2024</a></li>
              <li><a href="https://www.youtube.com/watch?v=tUYLiuaRzb4">Short Documentary Film, 2023</a></li>
              <li><a href="https://www.youtube.com/watch?v=2gSzxAtJooQ">A Letter to My Future Self, 2023</a></li>
              <li><a href="https://www.youtube.com/watch?v=L8tJSRnDxpw">Kazakh Music and Drama Night, 2022</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Visit</h4>
      <div className="footer-social">
            <a href="https://t.me/nuorchestra" className="social-link" aria-label="<Telegram">
              <Send size={20} />
            </a>
	   <a href="https://www.tiktok.com/@nu.orchestra" className="social-link" aria-label="<TikTok">
              <Music2 size={20} />
            </a>
            <a href="https://www.instagram.com/nuorchestra/" className="social-link" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://www.youtube.com/channel/UC4IHGCoj5kjkXGpdA3vbwOg" className="social-link" aria-label="Youtube">
              <Youtube size={20} />
            </a>
          </div>
          </div>
          

        </div>
        
        <div className="footer-bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} NU Orchestra Club. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;