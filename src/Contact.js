import React from 'react';
import './Contact.css';

function Contact() {
  const contactInfo = [
    {
      title: 'Email',
      detail: 'davidflo279@gmail.com',
      link: 'mailto:davidflo279@gmail.com',
      icon: '📧'
    },
    {
      title: 'Phone',
      detail: '+1 (862) 372-7229',
      link: 'tel:+18623727229',
      icon: '📱'
    },
    {
      title: 'Location',
      detail: 'Newark, NJ',
      link: null,
      icon: '📍'
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2 className="info-title">Contact Information</h2>
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-card">
              <span className="contact-icon">{info.icon}</span>
              {info.link ? (
                <span><strong>{info.title}:</strong> <a href={info.link} className="contact-value">{info.detail}</a></span>
              ) : (
                <span><strong>{info.title}:</strong> <span className="contact-value">{info.detail}</span></span>
              )}
            </div>
          ))}

          <div className="social-media">
            <h4 className="social-title">Follow Me</h4>
            <div className="social-links">
              <a href="https://github.com/dFlo27" className="social-link github">
                <span className="social-icon">🐙</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/davidflorim279" className="social-link linkedin">
                <span className="social-icon">💼</span> LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;