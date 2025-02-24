// src/components/Home.js

import React, { useEffect, useState } from 'react';
import LessonTable from './LessonTable';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import ContactForm from './ContactForm';
import { home } from '../styles';
import roniImage from '../data/images/Roni.jpeg';

const Home = () => {
  const texts = [
    'מחפשים מורה פרטי במתמטיקה?',
    'רוצים להגיע להישגים גבוהים?',
    'מתלבטים על שיעורים פרטיים במדעי המחשב?'
  ];
  const [currentText, setCurrentText] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  const buttonStyle = {
    ...home.sectionOne.button,
    ...(isHovered ? home.sectionOne.buttonHover : {})
  };

  return (
    <div id="home-top">
      {/* Hero Section (חלק ראשון) */}
      <section style={home.sectionOne.container}>
        <div style={home.sectionOne.image}>
          <img
            src={roniImage}
            alt="רוני מיכאלי"
            style={{ width: '100%', borderRadius: '10px' }}
          />
        </div>

        <div style={home.sectionOne.text}>
          <div style={home.sectionOne.rotatingText}>
            {texts[currentText]}
          </div>
          <p style={home.sectionOne.subTitle}>
            היי, אני רוני מיכאלי, בוגר מדעי המחשב ומתמטיקה מאוניברסיטת אריאל. אני כאן לעזור לכם להגיע להישגים בשיעורים פרטיים.
          </p>
          <button
            style={buttonStyle}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => window.location.href = '/about#about-top'}
          >
            מידע נוסף על אודותיי
          </button>
        </div>
      </section>

      {/* חלק שני: מה השיעורים שלי מכילים? 
          כעת ברקע תמונת backroundmath, ובמרכז טבלה קטנה */}
      <section style={home.sectionMath}>
        <h2 style={home.heading}>מה השיעורים שלי מכילים?</h2>
        <div style={home.tableContainer}>
          <LessonTable />
        </div>
      </section>

      {/* חלק שלישי: המלצות / תלמידים ממליצים */}
      <section id="testimonials" style={home.sectionBlue}>
        <h2 style={home.heading}>תלמידים ממליצים</h2>
        <Testimonials />
      </section>

      {/* חלק רביעי: שאלות ותשובות */}
      <section id="faq" style={home.sectionWhite}>
        <h2 style={home.heading}>שאלות ותשובות</h2>
        <FAQ />
      </section>

      {/* חלק חמישי: יצירת קשר */}
      <section id="contact" style={home.sectionBlue}>
        <h2 style={home.heading}>יצירת קשר</h2>
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
