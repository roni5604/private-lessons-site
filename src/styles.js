// src/styles.js

// Import התמונה
import backroundmath from './data/images/backroundmath.jpg';

// עיצוב כללי לאפליקציה
export const app = {
  fontFamily: 'Arial, sans-serif',
  direction: 'rtl',
  textAlign: 'center',
  backgroundColor: '#f9f9f9',
  paddingTop: '100px' // מרווח עליון כדי שהתוכן לא יסתתר מתחת ל-Header המקובע
};

// --------------------------------
// HEADER STYLES
// --------------------------------
export const headerStyles = {
  container: {
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 999,
    background: 'linear-gradient(to right, #09203f, #537895)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 0',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)'
  },
  brand: {
    color: '#ffcc00',
    fontSize: '1.8rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    padding: '0 20px'
  },
  nav: {
    display: 'flex',
    gap: '30px',
    flexDirection: 'row-reverse'
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem',
    fontWeight: 500,
    transition: 'color 0.3s',
    padding: '5px 10px'
  }
};

// --------------------------------
// FOOTER STYLES
// --------------------------------
export const footer = {
  container: {
    backgroundColor: '#004d99',
    color: '#fff',
    padding: '10px 0',
    marginTop: '20px',
    fontSize: '14px'
  },
  link: {
    color: '#fff',
    textDecoration: 'underline'
  }
};

// --------------------------------
// HOME PAGE STYLES
// --------------------------------
export const home = {
  // Hero Section (חלק ראשון)
  sectionOne: {
    container: {
      minHeight: 'calc(100vh - 100px)', // כמעט מסך מלא (למעט ה-Header)
      display: 'flex',
      direction: 'ltr', // Override ל-RTL, מבטיח שהתמונה תופיע משמאל והטקסט מימין
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px 20px',
      background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
      color: '#fff'
    },
    image: {
      flex: '0 0 400px',
      margin: '0 20px'
    },
    text: {
      flex: '0 0 500px',
      margin: '0 20px',
      textAlign: 'right'
    },
    rotatingText: {
      fontSize: '2rem',
      color: '#ffcc00',
      marginBottom: '20px',
      minHeight: '50px'
    },
    subTitle: {
      fontSize: '1.3rem',
      color: '#fff',
      marginBottom: '20px'
    },
    button: {
      backgroundColor: '#ff6600',
      color: '#fff',
      fontSize: '1.2rem',
      padding: '15px 30px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      transition: 'background-color 0.3s, transform 0.3s'
    },
    buttonHover: {
      backgroundColor: '#ffa31a',
      transform: 'scale(1.05)'
    }
  },

  // סקשן עם רקע תמונה עבור "מה השיעורים שלי מכילים?"
  sectionMath: {
    minHeight: '80vh',
    padding: '60px 20px',
    backgroundImage: `url(${backroundmath})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  },

  // חלקים נוספים
  sectionBlue: {
    backgroundColor: '#e6f2ff',
    minHeight: '100vh',
    padding: '60px 20px'
  },
  sectionWhite: {
    backgroundColor: '#fff',
    minHeight: '80vh',
    padding: '60px 20px'
  },
  heading: {
    fontSize: '3rem',
    color: '#004d99',
    marginBottom: '20px',
    textAlign: 'center'
  },

  // עיטוף לטבלה כדי להקטין ולמרכז אותה בתוך הסקשן "מה השיעורים שלי מכילים?"
  tableContainer: {
    maxWidth: '700px',
    margin: '0 auto',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    padding: '20px'
  }
};

// --------------------------------
// LESSON TABLE STYLES
// --------------------------------
export const lessonTable = {
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '1.2rem'
  },
  cell: {
    border: '1px solid #ccc',
    padding: '25px',
    textAlign: 'center',
    transition: 'transform 0.3s, background-color 0.3s'
  }
};

// --------------------------------
// FAQ STYLES
// --------------------------------
export const faqStyles = {
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px'
  },
  item: {
    marginBottom: '20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    borderRadius: '8px',
    overflow: 'hidden'
  },
  question: {
    backgroundColor: '#004d99',
    color: '#fff',
    padding: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',
    fontSize: '1.3rem'
  },
  answer: {
    backgroundColor: '#f0f8ff',
    color: '#333',
    padding: '15px',
    fontSize: '1.2rem',
    lineHeight: '1.6'
  }
};

// --------------------------------
// CONTACT FORM STYLES
// --------------------------------

export const contactForm = {
  formContainer: {
    maxWidth: '500px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    padding: '25px 30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    textAlign: 'right'
  },
  label: {
    display: 'block',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '12px 15px',
    margin: '8px 0 15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem'
  },
  textarea: {
    width: '100%',
    padding: '12px 15px',
    margin: '8px 0 15px',
    border: '1px solid #ccc',
    borderRadius: '6px',
    fontSize: '1rem',
    minHeight: '120px'
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#004d99',
    color: '#fff',
    fontSize: '1.2rem',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'background-color 0.3s'
  },
  buttonHover: {
    backgroundColor: '#003d80'
  },
  contactInfo: {
    marginTop: '30px',
    fontSize: '1rem',
    color: '#333'
  }
};


// --------------------------------
// ABOUT PAGE STYLES
// --------------------------------
export const about = {
  container: {
    display: 'flex',
    flexDirection: 'row-reverse',
    minHeight: '600px',
    position: 'relative'
  },
  imageContainer: {
    flex: '1',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  },
  textContainer: {
    flex: '1',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: '50px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'justify'
  },
  title: {
    fontSize: '3rem',
    marginBottom: '20px',
    color: '#004d99'
  },
  paragraph: {
    fontSize: '1.2rem',
    marginBottom: '20px',
    lineHeight: '1.8',
    color: '#333'
  },
  contactSection: {
    backgroundColor: '#e6f2ff',
    padding: '40px',
    marginTop: '0'
  },
  contactTitle: {
    fontSize: '2rem',
    color: '#004d99',
    marginBottom: '20px'
  }
};

// --------------------------------
// FLOATING BUTTONS (וואצאפ וטלפון)
// --------------------------------
export const floatingButtons = {
  container: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    zIndex: 1000
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
    cursor: 'pointer'
  },
  phoneWrapper: {
    position: 'relative'
  },
  phonePopup: {
    position: 'absolute',
    bottom: '60px', // מוצג מעל כפתור הטלפון
    right: '0',
    backgroundColor: '#004d99',
    color: '#fff',
    padding: '10px 15px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    animation: 'fadeIn 0.3s ease'
  },
  phoneText: {
    marginRight: '10px',
    fontSize: '1.5rem',   // הגדלת הגודל
    whiteSpace: 'nowrap'  // שמירת הטקסט בשורה אחת
  },
  closeButton: {
    background: 'none',
    border: 'none',
    cursor: 'pointer'
  }
};
