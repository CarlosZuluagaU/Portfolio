import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';

const Header = ({ darkMode, setDarkMode }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm shadow-sm' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo / Título del Portafolio */}
          <motion.a 
            href="#home" 
            className="text-2xl font-bold text-gray-800 dark:text-white font-inter" // Añadido font-inter si lo configuraste
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-blue-600 dark:text-blue-400">Java</span>Dev {/* Consistencia de dark:text */}
          </motion.a>

          {/* Menú de Navegación (Desktop) */}
          {/* Usa <nav> para semántica */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                // Aquí aplicamos la clase 'nav-link' para el efecto de subrayado
                className="nav-link text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setMobileMenuOpen(false)} // Cierra el menú móvil si se usa en desktop (por si acaso)
              >
                {item.name}
              </motion.a>
            ))}
            {/* Botón para cambiar el modo oscuro (Desktop) */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-yellow-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
              aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
          </nav>

          {/* Botón de Menú Móvil */}
          <button 
            className="md:hidden text-gray-800 dark:text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" // Añadidos estilos focus para accesibilidad
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Menú Móvil (condicionalmente renderizado con AnimatePresence) */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav // Usa <nav> aquí también
              className="md:hidden mt-4 py-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 absolute w-full left-0 shadow-lg" // Asegurado el fondo y sombra
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col space-y-4 px-6"> {/* Añadido px-6 para padding lateral */}
                {navItems.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 text-lg py-2" // Aumentado el tamaño de texto y padding
                    onClick={() => setMobileMenuOpen(false)} // Cierra el menú al hacer clic en un enlace
                  >
                    {item.name}
                  </a>
                ))}
                {/* Botón para cambiar el modo oscuro (Móvil) */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center space-x-2 text-gray-800 dark:text-gray-200 text-lg py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" // Aumentado tamaño de texto y padding
                  aria-label={darkMode ? "Activar modo claro" : "Activar modo oscuro"}
                >
                  {darkMode ? (
                    <>
                      <FaSun size={20} /> <span>Modo claro</span>
                    </>
                  ) : (
                    <>
                      <FaMoon size={20} /> <span>Modo oscuro</span>
                    </>
                  )}
                </button>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;