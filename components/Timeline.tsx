import React, { useEffect, useRef } from 'react';
import './Timeline.css';

const timelineEvents = [
  {
    year: 2013,
    title: "Club Foundation",
    description: "The NU Orchestra Club was established with a goal to make national music culture popular. No style, zero experience."
  },
  {
    year: 2015,
    title: "Era of Prosperity",
    description: "Found our unique identity, established formal rules, and gained recognition among other clubs. Notably, achieved popularity through our adaptation of the 'Game of Thrones' soundtrack using traditional Kazakh musical instruments."
  },
  {
    year: 2017,
    title: "Regional Recognition",
    description: "Received extensive media coverage in major outlets including NUR.kz, Zakon.kz, 7th channel, and Tengrinews. Honored as Art Club of the Year for two consecutive years (2016, 2017)."
  },
  {
    year: 2020,
    title: "Digital Transformation",
    description: "Distinguished as Art Club of the Year 2018, with our NU Orchestra Grand Concert recognized as the University Wide Event of 2018. Delivered memorable performances at multiple prestigious events including GeekCon Astana, Noel Party, Library Extension opening ceremony, and NU Graduation Ceremony 2019."
  },
  {
    year: 2022,
    title: "Consolidation of achievements",
    description: "Grew our membership base, initiated fresh projects, established additional departments, and developed extensive collaborative partnerships while maintaining a vibrant presence in university life"
  },
  {
    year: 2025,
    title: "Prosperity and recognition",
    description: "Three major concerts (Choirchestra, Grand Concert, The Show), a lot of minor concerts and collaborations, and deserved NU Awards winner in Performing Art club of the Year and Large Scale Event of the Year categories."
  }
];

const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const items = document.querySelectorAll('.timeline-item');
            items.forEach((item, index) => {
              setTimeout(() => {
                item.classList.add('animate');
              }, 200 * index);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) observer.observe(timelineRef.current);

    return () => {
      if (timelineRef.current) observer.unobserve(timelineRef.current);
    };
  }, []);

  return (
    <section id="timeline" className="section timeline-section">
      <div className="container">
        <h2 className="section-title">Our Journey</h2>
        
        <div className="timeline" ref={timelineRef}>
          {timelineEvents.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="timeline-content">
                <div className="timeline-year">{event.year}</div>
                <h3 className="timeline-title">{event.title}</h3>
                <p className="timeline-description">{event.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;