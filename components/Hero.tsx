import React, { useEffect, useRef } from 'react';
import './Hero.css';
import backgroundVideo from '../assets/bg.mp4';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current && heroRef.current) {
        const scrollTop = window.pageYOffset;
        const heroHeight = heroRef.current.offsetHeight;
        const scrollPercentage = Math.min(scrollTop / heroHeight, 1);
        
        // Apply the zoom out effect based on scroll position
        videoRef.current.style.transform = `scale(${1 + (0.2 * (1 - scrollPercentage))})`;
        
        // Adjust opacity to fade out as user scrolls
        const overlay = heroRef.current.querySelector('.hero-overlay') as HTMLElement;
        if (overlay) {
          overlay.style.opacity = (0.5 + scrollPercentage * 0.3).toString();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-overlay"></div>
      <video
        ref={videoRef}
        className="hero-video video-zoom"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={backgroundVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      
      <div className="hero-content">
        <h1 className="hero-title">NU Orchestra Club</h1>
        <h3 className="hero-subtitle">We deliver emotions through music</h3>
      </div>
      
      <div className="scroll-down">
        <div className="scroll-arrow"></div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;