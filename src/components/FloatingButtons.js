// src/components/FloatingButtons.js
import React, { useState } from 'react';
import { FaWhatsapp, FaPhone, FaTimes } from 'react-icons/fa';
import { floatingButtons } from '../styles';

const FloatingButtons = () => {
  const [showPhone, setShowPhone] = useState(false);

  const handlePhoneClick = () => {
    setShowPhone(prev => !prev);
  };

  return (
    <div style={floatingButtons.container}>
      <a
        href="https://api.whatsapp.com/send?phone=+972544396677"
        target="_blank"
        rel="noopener noreferrer"
        style={floatingButtons.button}
      >
        <FaWhatsapp size={30} color="#25D366" />
      </a>
      <div style={floatingButtons.phoneWrapper}>
        <div style={floatingButtons.button} onClick={handlePhoneClick}>
          <FaPhone size={30} color="#004d99" />
        </div>
        {showPhone && (
          <div style={floatingButtons.phonePopup}>
            <span style={floatingButtons.phoneText}>054-4396677</span>
            <button
              style={floatingButtons.closeButton}
              onClick={() => setShowPhone(false)}
            >
              <FaTimes size={20} color="#fff" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default FloatingButtons;
