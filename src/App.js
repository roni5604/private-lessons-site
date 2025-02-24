import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import { app } from './styles';
import FloatingButtons from './components/FloatingButtons';

const App = () => {
  return (
    <Router>
      <div style={app}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <FloatingButtons />
        <Footer />
      </div>
    </Router>
  );
};

export default App;
