// src/components/About.js

import React from 'react';
import ContactForm from './ContactForm';
import { about } from '../styles';
import roniImage from '../data/images/Roni.jpeg';

const About = () => {
  return (
    <>
      {/* החלק העליון עם תמונה וטקסט */}
      <section id="about-top" style={about.container}>
        {/* מגדירים את הרקע של החלק השמאלי כתמונה */}
        <div
          style={{
            ...about.imageContainer,
            backgroundImage: `url(${roniImage})`
          }}
        />

        {/* הטקסט בצד השני */}
        <div style={about.textContainer}>
          <h1 style={about.title}>אודותיי</h1>
          <p style={about.paragraph}>
            אני רוני מיכאלי, בוגר תואר במדעי המחשב ומתמטיקה מאוניברסיטת אריאל. לאורך השנים, פיתחתי גישה מעשית להוראה המשלבת שיטות לימוד קלאסיות עם חידושים טכנולוגיים מתקדמים. 
          </p>
          <p style={about.paragraph}>
            מתוך אמונה שכל תלמיד הוא ייחודי, אני מקפיד להתאים את השיעורים לצרכים האישיים של כל אחד ואחת. בין אם מדובר בלמידה מהבסיס או בשאיפה למצוינות ברמה גבוהה – אני כאן כדי לעזור לכם לפרוץ גבולות ולממש את הפוטנציאל שלכם.
          </p>
          <p style={about.paragraph}>
            הלימוד אצלי מתבצע באווירה נעימה ותומכת, עם דגש על פיתוח חשיבה ביקורתית ויצירתית. יחד נבנה תכנית לימוד גמישה שתתאים לקצב שלכם, ותאפשר לכם לצבור ביטחון וידע בצורה יסודית ומהנה.
          </p>
          <p style={about.paragraph}>
            המטרה שלי היא לא רק להעביר חומר, אלא גם להעניק לכם כלים שיסייעו לכם להצליח בלימודים ובעתיד המקצועי. מוזמנים להצטרף למסע של למידה, גילוי וצמיחה אישית.
          </p>
        </div>
      </section>

      {/* החלק של יצירת קשר עם רקע בצבע אחר */}
      <section style={about.contactSection}>
        <h2 style={about.contactTitle}>יצירת קשר</h2>
        <ContactForm />
      </section>
    </>
  );
};

export default About;
