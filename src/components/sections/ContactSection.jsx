import { useState } from 'react';
import { useScrollAnimation } from '../../hooks/Usescrollanimation';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';
import "../../styles/ContactSection.css";

const ContactSection = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      alert('Message envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'princemdiomande@gmail.com',
      link: 'mailto:princemdiomande@gmail.com'
    },
    {
      icon: Phone,
      label: 'Téléphone',
      value: '+33 780354615',
      link: 'tel:+33780354615'
    },
    {
      icon: MapPin,
      label: 'Localisation',
      value: 'Paris, France',
      link: null
    }
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', url: 'https://github.com/PrinceMD10' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/PrinceMD10' },
    { icon: Twitter, label: 'Twitter', url: 'https://twitter.com/diomande_prince' }
  ];

  return (
    <section id="contact" className="contact-section section">
      <div className="container">
        <div ref={ref} className={`contact-content ${isVisible ? 'visible' : ''}`}>
          {/* Section Header */}
          <div className="section-header">
            <span className="section-label">Parlons-en</span>
            <h2 className="section-title">Me Contacter</h2>
            <p className="section-description">
              Une idée de projet ? Une question ? N'hésitez pas à me contacter
            </p>
          </div>

          {/* Contact Grid */}
          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info-side">
              <div className="contact-intro glass-effect">
                <h3>Discutons de votre projet</h3>
                <p>
                  Je suis toujours intéressé par de nouvelles opportunités et 
                  collaborations. Que ce soit pour un projet, un stage ou simplement 
                  pour échanger sur le développement web, je serais ravi de discuter 
                  avec vous.
                </p>
              </div>

              {/* Contact Details */}
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div 
                    key={index} 
                    className="contact-item glass-effect"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="contact-icon">
                      <info.icon size={24} />
                    </div>
                    <div className="contact-text">
                      <div className="contact-label">{info.label}</div>
                      {info.link ? (
                        <a href={info.link} className="contact-value">
                          {info.value}
                        </a>
                      ) : (
                        <div className="contact-value">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="contact-social">
                <h4>Retrouvez-moi sur</h4>
                <div className="social-links-grid">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link-card glass-effect"
                      aria-label={social.label}
                    >
                      <social.icon size={24} />
                      <span>{social.label}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form-side">
              <form onSubmit={handleSubmit} className="contact-form glass-effect">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Nom complet</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Thilleli Messadi"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="lilli@example.com"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Projet de développement web"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Parlez-moi de votre projet..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="spinner"></span>
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      Envoyer le message
                      <Send size={20} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;