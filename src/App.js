import React from 'react';
import Home from './Home';
import Header from './components/Header';
import Project from './Project';
import Certificate from './Certificate'
import Contact from './Contact';
import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import './App.css';
import {GlobalStyle} from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

function App() {

  const theme = {
    colors: {
      heading: 'rgb(25, 24, 29)',
      text: 'rgba(26, 22, 41, 0.8)',
      white: '#d9d1ed',
      black: '#232129',
      helper: '#9484ff',

      bg: '#f3f2f7',
      footer_bg: '#141121',
      btn: '#8b74e7',
      border: '#8b74e7',
      hr: '#FFFFFF',
      gradient: 'linear-gradient(0deg, rgb(148, 132, 255) 0%, rgb(129, 98, 252) 100%)',
      shadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(28, 27, 35, 0.15) 0px 0px 0px 1px',
      shadowSupport: 'rgba(0, 0, 0, 0.16) 0px 1px 4px',
    },

    media: {
      mobile: '768px',
      tab: '998px',
    },
  };

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/certificate' element={<Certificate />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;