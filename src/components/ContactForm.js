import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { contactForm } from '../styles';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: 'מתמטיקה',
    age: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isHovered, setIsHovered] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'יש להזין שם מלא';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'יש להזין אימייל';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'אימייל לא תקין';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'יש להזין טלפון';
    } else if (!/^\d{7,}$/.test(formData.phone)) {
      newErrors.phone = 'מספר טלפון צריך להכיל לפחות 7 ספרות';
    }
    if (!formData.age) {
      newErrors.age = 'יש להזין גיל';
    } else if (Number(formData.age) <= 0) {
      newErrors.age = 'גיל לא תקין';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'יש להזין הודעה';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
    setErrors({...errors, [e.target.name]: ''});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    emailjs
      .send('service_4wp5e2i', 'template_g4fn3nj', formData, '0Pz6jatsCN5DOnR3U')
      .then(
        (result) => {
          alert('ההודעה נשלחה בהצלחה!');
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            subject: 'מתמטיקה',
            age: '',
            message: ''
          });
          setErrors({});
        },
        (error) => {
          alert('אירעה שגיאה בשליחת ההודעה, נסה שוב.');
        }
      );
  };

  return (
    <div style={contactForm.formContainer}>
      <form onSubmit={handleSubmit} noValidate>
        <label style={contactForm.label}>שם מלא</label>
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          style={contactForm.input}
          required
        />
        {errors.fullName && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.fullName}</p>}

        <label style={contactForm.label}>אימייל</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          style={contactForm.input}
          required
        />
        {errors.email && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.email}</p>}

        <label style={contactForm.label}>טלפון</label>
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          style={contactForm.input}
          required
        />
        {errors.phone && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.phone}</p>}

        <label style={contactForm.label}>בחר נושא לימוד</label>
        <select
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          style={contactForm.input}
          required
        >
          <option value="מתמטיקה">מתמטיקה</option>
          <option value="מדעי המחשב">מדעי המחשב</option>
        </select>

        <label style={contactForm.label}>גיל</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          style={contactForm.input}
          required
        />
        {errors.age && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.age}</p>}

        <label style={contactForm.label}>הודעה</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          style={contactForm.textarea}
          required
        />
        {errors.message && <p style={{ color: 'red', fontSize: '0.9rem' }}>{errors.message}</p>}

        <button
          type="submit"
          style={{
            ...contactForm.button,
            ...(isHovered ? contactForm.buttonHover : {})
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          שלח
        </button>
      </form>

      <div style={contactForm.contactInfo}>
        <p>
          <strong>טלפון:</strong> 054-4396677
        </p>
        <p>
          <strong>אימייל:</strong> roniro5604@gmail.com
        </p>
        <p>
          <strong>כתובת:</strong> הרצליה, ישראל
        </p>
      </div>
    </div>
  );
};

export default ContactForm;
