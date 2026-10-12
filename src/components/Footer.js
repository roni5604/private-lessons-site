import React from 'react';
import { footer } from '../styles';

const Footer = () => {
  return (
    <footer style={footer.container}>
      <p>
        כל הזכויות שמורות ל
        <a href="https://ronimichaeli.com/he/" style={footer.link}>רוני מיכאלי</a>
        {' '}— מפתח תוכנה ומורה פרטי למדעי המחשב ומתמטיקה
      </p>
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
