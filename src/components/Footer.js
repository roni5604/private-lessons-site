import React from 'react';
import { footer } from '../styles';

const Footer = () => {
  return (
    <footer style={footer.container}>
      <p>כל הזכויות שמורות לרוני מיכאלי</p>
      <p>
        <a 
          href="https://github.com/roni5604" 
          target="_blank" 
          rel="noopener noreferrer"
          style={footer.link}
        >
          GitHub של רוני
        </a>
      </p>
    </footer>
  );
};

export default Footer;
