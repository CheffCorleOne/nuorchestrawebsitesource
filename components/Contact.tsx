import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, MapPin, Music } from 'lucide-react';
import './Contact.css';

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  instrument: string;
}

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
    instrument: ''
  });
  
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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

    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      if (contactRef.current) observer.unobserve(contactRef.current);
    };
  }, []);

  const validateForm = () => {
    const newErrors: Partial<FormState> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user types
    if (errors[name as keyof FormState]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      console.log('Form submitted:', formState);
      setSubmitted(true);
      setFormState({
        name: '',
        email: '',
        subject: '',
        message: '',
        instrument: ''
      });
      
      // Reset form submission state after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title">Join Our Club</h2>
        
        <div className="contact-content" ref={contactRef}>
          <div className="contact-info">
            <h3>Get in Touch</h3>
            <p>Interested in joining our orchestra or have questions? Reach out to us using the form or contact information below.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <Phone size={20} />
                <span>+7 (708) 092 68 77</span>
              </div>
              
              <div className="contact-item">
                <Mail size={20} />
                <span>orchestra@nu.edu.kz</span>
              </div>
              
              <div className="contact-item">
                <MapPin size={20} />
                <span>Astana, Kabanbay Batyr 53<br />NU Campus</span>
              </div>
            </div>
            
            <div className="rehearsal-schedule">
              <h4>Rehearsal Schedule will be available starting from the second week after joining</h4>
            </div>
            
            <div className="contact-note">
              <Music size={24} className="note-icon" />
              <p>All skill levels are welcome! We provide instruments for those who need them.</p>
            </div>
          </div>
          
         <div className="contact-form-container">
            {submitted ? (
              <div className="form-success">
                <h3>Thank you for reaching out!</h3>
                <p>We've received your message and will contact you soon.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              
<iframe 
    src="https://docs.google.com/forms/d/e/1FAIpQLSfhwTxL_FPrfNTmUKR2kGv3t1oWJ-gA9Ssr-arxAzzzzSHFxA/viewform?usp=sharing" 
    width="520" 
    height="700" 
    frameBorder="0" 
    marginHeight="0" 
    marginWidth="0">
	background-color: rgba(26, 26, 26, 0.7);
  padding: 2rem;
  border-radius: 5px;
  border-top: 3px solid var(--gold);
    Loading…
  </iframe>

              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;