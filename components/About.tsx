import React, { useEffect, useRef } from 'react';
import { Music, Users, Award, Calendar } from 'lucide-react';
import './About.css';
import aboutjpg from '../assets/about.jpg'; //

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    
    const featureElements = featuresRef.current?.querySelectorAll('.feature-item');
    featureElements?.forEach(item => {
      observer.observe(item);
    });

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      featureElements?.forEach(item => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <h2 className="section-title">About Our Orchestra</h2>
        
        <div className="about-content" ref={aboutRef}>
          <div className="about-text">
            <p>
              The NU Orchestra Club is cultural and musical association of students dedicated to bringing beautiful music to our university and community. 
            </p>
            <p>
              Our members range from beginners to advanced musicians, all united by their love for orchestral music. We perform a diverse repertoire from classical masterpieces to contemporary compositions, providing a platform for students to develop their musical talents while creating unforgettable performances.
            </p>
            <a href="#contact" className="btn about-btn">Join Our Orchestra</a>
          </div>
          
          <div className="about-image">
            <img 
              src={aboutjpg} 
              alt="Orchestra performance" 
            />
          </div>
        </div>
        
        <div className="features" ref={featuresRef}>
          <div className="feature-item">
            <div className="feature-icon">
              <Music size={36} />
            </div>
            <h3>Professional Training</h3>
            <p>Our experienced performers will share their skills with you</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <Users size={36} />
            </div>
            <h3>Networking</h3>
            <p>Join a supportive community of passionate musicians who share your love for music</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <Award size={36} />
            </div>
            <h3>Performance</h3>
            <p>Showcase your talents at main university events, concerts, and awards</p>
          </div>
          
          <div className="feature-item">
            <div className="feature-icon">
              <Calendar size={36} />
            </div>
            <h3>Regular Rehearsals</h3>
            <p>Practice sessions with flexible dates to perfect our repertoire and develop ensemble skills</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;