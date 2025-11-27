import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BackgroundMusic from './components/BackgroundMusic';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './App.css';


function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Hero />
          <About />
          <Gallery />
          <Timeline />
          <Contact />
	<BackgroundMusic /> {/* ← вот сюда */}
        </main>
        <Footer />
        <ScrollToTop />

      </div>
    </Router>
  );
}

export default App;