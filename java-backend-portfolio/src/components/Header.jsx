import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaSun, FaMoon, FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { useTranslation } from "../hooks/useTranslation";
import LanguageSelector from "./ui/LanguageSelector";

const Header = ({ darkMode, setDarkMode }) => {
  const { t } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const cvUrl = `${import.meta.env.BASE_URL}CV-Carlos-Zuluaga_sp.pdf`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 300 &&
          window.scrollY < sectionTop + sectionHeight - 300
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: t("nav.home"), href: "#home", icon: "" },
    { name: t("nav.experience"), href: "#about", icon: "" },
    { name: t("nav.stack"), href: "#skills", icon: "" },
    { name: t("nav.projects"), href: "#projects", icon: "" },
    { name: t("nav.contact"), href: "#contact", icon: "" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-gray-700/20 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          {/* Logo / Título del Portafolio */}
          <motion.a
            href="#home"
            className="group flex items-center text-xl sm:text-2xl font-bold text-black dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            onClick={() => setActiveSection("home")}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="bg-gradient-to-r from-green-500 to-emerald-500 p-2 rounded-xl mr-3 shadow-lg"
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <SiSpring className="text-white w-5 h-5" />
            </motion.div>
            <div className="flex flex-col">
              <div className="flex items-center">
                <span className="bg-gradient-to-r from-red-600 to-red-700 bg-clip-text text-transparent font-black">
                  Carlos
                </span>
                <span className="text-gray-600 dark:text-gray-300 font-light ml-2 hidden sm:inline">
                  Zuluaga
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wide hidden sm:block">
                Backend Developer
              </span>
            </div>
          </motion.a>

          {/* Menú de Navegación (Desktop) */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className={`group relative px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center font-medium ${
                  activeSection === item.href.substring(1)
                    ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-500/25"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50 hover:shadow-md"
                }`}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  setActiveSection(item.href.substring(1));
                }}
                whileHover={{ y: -2 }}
              >
                <span className="mr-2 text-lg">{item.icon}</span>
                <span className="relative">
                  {item.name}
                  {activeSection !== item.href.substring(1) && (
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-700 group-hover:w-full transition-all duration-300"></span>
                  )}
                </span>
              </motion.a>
            ))}

            {/* Botón de CV Premium */}
            <motion.a
              href={cvUrl}
              download="CV-Carlos-Zuluaga.pdf"
              className="group ml-6 px-6 py-2.5 bg-gradient-to-r from-gray-900 to-black hover:from-red-700 hover:to-red-600 text-white rounded-xl flex items-center transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-800 hover:border-red-500"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <FaDownload className="mr-2 group-hover:animate-bounce" />
              <span className="font-semibold">{t("nav.downloadCV")}</span>
            </motion.a>

            {/* Language Selector */}
            <LanguageSelector className="ml-4" />

            {/* Botón de Dark Mode Premium */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 p-3 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                initial={false}
                animate={{ rotate: darkMode ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
              </motion.div>
            </motion.button>
          </nav>

          {/* Botón de Menú Móvil */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Language Selector Mobile */}
            <LanguageSelector />
            
            {/* Botón de Dark Mode para móvil */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300"
              aria-label="Toggle dark mode"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </motion.button>
            
            <motion.button
              className="p-2.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {mobileMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Menú Móvil */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              className="md:hidden mt-3 py-6 border-t border-gray-200/30 dark:border-gray-700/30 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl mx-4 shadow-xl"
              initial={{ opacity: 0, height: 0, y: -20 }}
              animate={{ opacity: 1, height: "auto", y: 0 }}
              exit={{ opacity: 0, height: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="flex flex-col space-y-1 px-6">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className={`group px-5 py-4 rounded-xl flex items-center transition-all duration-300 ${
                      activeSection === item.href.substring(1)
                        ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg"
                        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800/50"
                    }`}
                    onClick={() => {
                      setMobileMenuOpen(false);
                      setActiveSection(item.href.substring(1));
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                  >
                    <span className="mr-4 text-xl">{item.icon}</span>
                    <span className="font-medium">{item.name}</span>
                  </motion.a>
                ))}

                {/* Botón de CV en móvil Premium */}
                <motion.a
                  href={cvUrl}
                  download="CV-Carlos-Zuluaga.pdf"
                  className="group px-5 py-4 bg-gradient-to-r from-gray-900 to-black hover:from-red-700 hover:to-red-600 text-white rounded-xl flex items-center mt-3 border border-gray-800 transition-all duration-300 shadow-lg"
                  onClick={() => {
                    setTimeout(() => {
                      setMobileMenuOpen(false);
                    }, 100);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <FaDownload className="mr-4 text-xl group-hover:animate-bounce" />
                  <span className="font-semibold">{t("nav.downloadCV")}</span>
                </motion.a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
