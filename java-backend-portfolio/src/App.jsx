// src/App.jsx
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
//import Skills from './components/Skills';
import { motion } from 'framer-motion';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import '@fontsource/inter/300.css';
import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@fontsource/inter/600.css';
import '@fontsource/inter/700.css';
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <main>
          <Hero />
          <About />
          {/* <Skills /> */}
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
