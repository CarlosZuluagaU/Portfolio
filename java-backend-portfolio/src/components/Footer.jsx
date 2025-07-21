import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaStackOverflow, FaEnvelope, 
  FaPhone, FaMapMarkerAlt // ✅ Agregado
} from 'react-icons/fa';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com/tu-usuario', name: 'GitHub', color: 'hover:text-gray-400' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com/in/tu-perfil', name: 'LinkedIn', color: 'hover:text-blue-500' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com/tu-usuario', name: 'Twitter', color: 'hover:text-blue-400' },
    { icon: <FaStackOverflow size={20} />, url: 'https://stackoverflow.com/users/tu-id', name: 'Stack Overflow', color: 'hover:text-orange-500' },
    { icon: <SiLeetcode size={20} />, url: 'https://leetcode.com/tu-usuario', name: 'LeetCode', color: 'hover:text-yellow-500' },
    { icon: <SiHackerrank size={20} />, url: 'https://hackerrank.com/tu-usuario', name: 'HackerRank', color: 'hover:text-green-500' },
    { icon: <FaEnvelope size={20} />, url: 'mailto:tu-email@ejemplo.com', name: 'Email', color: 'hover:text-red-400' }
  ];

  const navLinks = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Contacto', href: '#contact' }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4 border-t border-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo y descripción */}
          <motion.div 
            className="flex-1 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a 
              href="#home" 
              className="text-2xl font-bold text-white mb-4 flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-red-700">Java</span>
              <span className="text-white">Developer</span>
            </motion.a>
            <p className="text-gray-400 mb-4">
              Desarrollador backend especializado en Java y Spring Boot, creando soluciones escalables y eficientes.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${link.color} transition-colors`}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-red-700 mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {navLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contacto */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold text-red-700 mb-4">Contacto</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p className="flex items-center gap-2">
                <FaEnvelope className="text-blue-400" />
                <a href="mailto:tu-email@ejemplo.com" className="hover:text-blue-400 transition-colors">
                  carloszuluagag7codinino@gmail.com

                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaPhone className="text-blue-400" />
                <a href="tel:+57 3127878037" className="hover:text-blue-400 transition-colors">
                  +57 3127878037
                </a>
              </p>
              <p className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Rionegro, Colombia</span>
              </p>
            </address>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-12 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Portafolio Java Developer. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            Diseñado y desarrollado por Carlos Zuluaga.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
