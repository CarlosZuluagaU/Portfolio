import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { FaGlobe } from 'react-icons/fa';

const LanguageSelector = ({ className = "" }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className={`group flex items-center gap-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${language === 'en' ? 'Spanish' : 'English'}`}
    >
      <FaGlobe size={16} className="group-hover:rotate-12 transition-transform duration-300" />
      <span className="font-medium text-sm">
        {language === 'en' ? 'EN' : 'ES'}
      </span>
      <motion.div
        className="w-6 h-4 bg-gray-300 dark:bg-gray-600 rounded-full relative overflow-hidden"
        whileHover={{ scale: 1.1 }}
      >
        <motion.div
          className={`absolute top-0 w-3 h-4 rounded-full transition-all duration-300 ${
            language === 'en' 
              ? 'bg-blue-500 left-0' 
              : 'bg-red-500 left-3'
          }`}
          animate={{ 
            x: language === 'en' ? 0 : 0,
            backgroundColor: language === 'en' ? '#3b82f6' : '#ef4444'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.button>
  );
};

export default LanguageSelector;
