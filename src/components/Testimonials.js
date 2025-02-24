// src/components/Testimonials.js

import React, { useState } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

// נתוני התלמידים (ללא תמונות)
const testimonialsData = [
  {
    id: 1,
    name: 'רון לחמני',
    type: 'סטודנט לתואר ראשון',
    text: 'הליווי של רוני במחשבים היה מדהים. הוא עזר לי להבין את החומר לעומק ולהתמודד עם פרויקטים מורכבים, תוך מתן טיפים פרקטיים לפיתוח יעיל.',
  },
  {
    id: 2,
    name: 'גאיה אקשטיין',
    type: 'סטודנטית למדעי המחשב',
    text: 'רוני תמיד היה זמין לשאלות, הסביר בסבלנות את הנושאים הקשים, ונתן לי ביטחון רב לקראת המבחנים. אין ספק שהוא מורה ברמה גבוהה מאוד.',
  },
  {
    id: 3,
    name: 'שלו רודן',
    type: 'תלמיד תיכון',
    text: 'לפני שהתחלתי ללמוד אצל רוני, נאבקתי בחומר של 5 יחידות במתמטיקה. בזכות ההסברים הברורים שלו והתרגול הממוקד, הצלחתי לשפר את הציונים שלי משמעותית.',
  },
  {
    id: 4,
    name: 'ליאור כהן',
    type: 'תלמידת תיכון',
    text: 'רוני עזר לי לא רק בהבנת החומר, אלא גם בפיתוח גישה חיובית יותר כלפי מתמטיקה. בזכותו הבנתי שמדובר בכלים שימושיים לכל החיים.',
  },
  {
    id: 5,
    name: 'ניר סטרוד',
    type: 'תלמיד יסודי',
    text: 'הייתי מתקשה בחשבון ובתרגילים בסיסיים. רוני העביר לי את החומר בצורה כיפית עם משחקים, והיום אני כבר מרגיש יותר בטוח במספרים.',
  },
  {
    id: 6,
    name: 'יונתן תמיר',
    type: 'תלמיד יסודי',
    text: 'רוני הצליח לגרום לי להתלהב מתרגילי כפל ארוך וחילוק. הגישה שלו מאוד חיובית, והוא יודע איך להסביר דברים מסובכים בצורה פשוטה.',
  },
  {
    id: 7,
    name: 'אורי תמיר',
    type: 'תלמיד יסודי',
    text: 'הבן שלי למד אצל רוני, ומאז הוא מחכה לכל שיעור בשמחה. רוני עוזר לו בכל מה שהוא צריך, וההתקדמות ניכרת בכל המבחנים והתרגולים.',
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const testimonial = testimonialsData[currentIndex];

  // סגנונות כלליים לסליידר
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '30vh', // גובה גדול כדי "לנפח" את החלק
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '40px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    position: 'relative'
  };

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    fontSize: '2rem',
    color: '#004d99',
    cursor: 'pointer',
    backgroundColor: '#fff',
    borderRadius: '50%',
    padding: '10px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
  };

  const leftArrowStyle = {
    ...arrowStyle,
    left: '-50px' // מיקום החץ השמאלי מחוץ לקופסה
  };

  const rightArrowStyle = {
    ...arrowStyle,
    right: '-50px' // מיקום החץ הימני מחוץ לקופסה
  };

  const nameStyle = {
    fontSize: '1.5rem',
    color: '#004d99',
    marginBottom: '10px'
  };

  const typeStyle = {
    fontSize: '1.1rem',
    fontStyle: 'italic',
    marginBottom: '20px'
  };

  const textStyle = {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#333'
  };

  return (
    <div style={containerStyle}>
      {/* חץ שמאלה */}
      <AiOutlineArrowLeft style={leftArrowStyle} onClick={handlePrev} />

      {/* תוכן ההמלצה */}
      <h3 style={nameStyle}>{testimonial.name}</h3>
      <p style={typeStyle}>{testimonial.type}</p>
      <p style={textStyle}>{testimonial.text}</p>

      {/* חץ ימינה */}
      <AiOutlineArrowRight style={rightArrowStyle} onClick={handleNext} />
    </div>
  );
};

export default Testimonials;
