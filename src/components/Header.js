// src/components/Header.js
import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { headerStyles } from '../styles';

const Header = () => {
  return (
    <header style={headerStyles.container}>
      {/* לחיצה על "רוני מיכאלי מורה פרטי" תיקח אותך לראש דף הבית */}
      <HashLink smooth to="/#home-top" style={headerStyles.brand}>
        רוני מיכאלי מורה פרטי
      </HashLink>

      <nav style={headerStyles.nav}>
      <HashLink smooth to="/#contact" style={headerStyles.link}>
          יצירת קשר
        </HashLink>
        <HashLink smooth to="/#faq" style={headerStyles.link}>
          שאלות ותשובות
        </HashLink>
        <HashLink smooth to="/#testimonials" style={headerStyles.link}>
          המלצות
        </HashLink>
        <HashLink smooth to="/about#about-top" style={headerStyles.link}>
          קצת עליי
        </HashLink>
      </nav>
    </header>
  );
};

export default Header;
