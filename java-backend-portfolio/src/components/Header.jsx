import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      
      // Detectar sección activa
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 300 && window.scrollY < sectionTop + sectionHeight - 300) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about'},
    { name: 'Habilidades', href: '#skills'  },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact', icon: '📩' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-sm py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo / Título del Portafolio */}
          <motion.a 
            href="#home" 
            className="flex items-center text-xl sm:text-2xl font-bold text-black dark:text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            onClick={() => setActiveSection('home')}
          >
            <SiSpring className="text-green-500 mr-2" />
            <span className="text-red-700 dark:text-red-500">Java</span>
            <span className="hidden sm:inline text-black dark:text-white">Developer</span>
            <span className="sm:hidden text-black dark:text-white">Dev</span>
          </motion.a>

          {/* Menú de Navegación (Desktop) */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center ${
                  activeSection === item.href.substring(1)
                    ? 'bg-red-700 text-white'
                    : 'text-black dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-800'
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveSection(item.href.substring(1));
                }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </motion.a>
            ))}
            
            {/* Botón de CV */}
            <motion.a
              href="/cv-java-developer.pdf"
              download
              className="ml-4 px-4 py-2 bg-black hover:bg-red-700 text-white rounded-lg flex items-center transition-colors border-2 border-red-700"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload className="mr-2" />
              CV
            </motion.a>
          </nav>

          {/* Botón de Menú Móvil */}
          <div className="md:hidden flex items-center space-x-2">
            <button 
              className="p-2 text-black dark:text-white rounded-md focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Menú Móvil */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="md:hidden mt-2 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 w-full left-0 shadow-lg rounded-b-lg"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-2 px-4">
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-3 rounded-lg flex items-center ${
                      activeSection === item.href.substring(1)
                        ? 'bg-red-700 text-white'
                        : 'text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveSection(item.href.substring(1));
                    }}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.name}
                  </a>
                ))}
                
                {/* Botón de CV en móvil */}
                <a
                  href="/cv-java-developer.pdf"
                  download
                  className="px-4 py-3 bg-black hover:bg-red-700 text-white rounded-lg flex items-center mt-2 border-2 border-red-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <FaDownload className="mr-3" />
                  Descargar CV
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;