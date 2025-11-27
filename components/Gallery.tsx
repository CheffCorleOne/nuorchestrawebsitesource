import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Gallery.css';
import { motion, AnimatePresence } from 'framer-motion';
import bg1 from '/src/assets/bg1.jpg';
import bg2 from '/src/assets/bg2.jpg';
import bg3 from '/src/assets/bg3.jpg';
import bg4 from '/src/assets/bg4.jpg';
import bg5 from '/src/assets/bg5.jpg';
import bg6 from '/src/assets/bg6.jpg';
import bg7 from '/src/assets/bg7.jpg';
import bg8 from '/src/assets/bg8.jpg';
import bg9 from '/src/assets/bg9.jpg';

//const galleryImages= [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];
const galleryImages = [
  {
    id: 1,
    url:bg1,
    caption: "Concert Dedicated the International women’s day"
  },
  {
     id: 2,
    url:bg2,
    caption: "10th Anniversary Grand Concert: A Note to Remember by NU Orchestra"
  },
  {
     id: 3,
    url:bg3,
    caption: "Orchestra Members - Our talented musicians after a successful rehearsal"
  },
  {
     id: 4,
    url:bg4,
    caption: " 'The Show' - Modern interpretation with dynamic lighting"
  },
  {
     id: 5,
    url:bg5,
    caption: "Conductor's Perspective - Leading our ensemble during an evening concert"
  },
  {
    id: 6,
    url:bg6,
    caption: "NU Orchestra - Remembering Legends Grand Concert"
  }, {
     id: 7,
    url:bg7,
    caption: "Conductor's Perspective - Leading our ensemble during an evening concert"
  }, {
     id: 8,
    url:bg8,
    caption: "A legendary collaboration between NU Orchestra & NU Choir"
  }, {
     id: 9,
    url:bg9,
    caption: "Another collaboration with Vocal Club"
  },
];

const Gallery: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = document.querySelectorAll('.gallery-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, 100 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (galleryRef.current) observer.observe(galleryRef.current);

    return () => {
      if (galleryRef.current) observer.unobserve(galleryRef.current);
    };
  }, []);

  const openModal = (index: number) => {
    setActiveIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction: number) => {
    const newIndex = (activeIndex + direction + galleryImages.length) % galleryImages.length;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowLeft') navigateImage(-1);
      if (e.key === 'ArrowRight') navigateImage(1);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, activeIndex]);

  return (
    <section id="gallery" className="section gallery-section">
      <div className="container">
        <h2 className="section-title">Our Performances</h2>
        
        <div className="gallery-container" ref={galleryRef}>
          {galleryImages.map((image, index) => (
            <div 
              key={image.id} 
              className="gallery-item"
              onClick={() => openModal(index)}
            >
              <div className="gallery-image-container">
                <img src={image.url} alt={image.caption} />
                <div className="gallery-overlay">
                  <span>View</span>
                </div>
              </div>
              <div className="gallery-caption">
                <p>{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
<AnimatePresence>
  {isModalOpen && (
    <motion.div 
      className="gallery-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={closeModal}
    >
      <motion.div 
        className="modal-content"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 50, opacity: 0 }}
        transition={{ duration: 0.1 }}
        onClick={(e) => e.stopPropagation()}
      >
        
      {isModalOpen && (
        <div className="gallery-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>&times;</button>
            <div className="modal-navigation">
              <button 
                className="modal-nav-btn prev" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  navigateImage(-1); 
                }}
              >
                <ChevronLeft size={30} />
              </button>
              <div className="modal-image-container">
                <img 
                  src={galleryImages[activeIndex].url} 
                  alt={galleryImages[activeIndex].caption} 
                />
              </div>
              <button 
                className="modal-nav-btn next" 
                onClick={(e) => { 
                  e.stopPropagation(); 
                  navigateImage(1); 
                }}
              >
                <ChevronRight size={30} />
              </button>
            </div>
            <div className="modal-caption">
              <p>{galleryImages[activeIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default Gallery;