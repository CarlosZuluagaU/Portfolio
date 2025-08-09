import { motion } from 'framer-motion';
import { 
  FaGithub, FaLinkedin, FaTwitter, FaStackOverflow, FaEnvelope, 
  FaPhone, FaMapMarkerAlt // ✅ Agregado
} from 'react-icons/fa';
import { SiLeetcode, SiHackerrank, SiSpring } from 'react-icons/si';

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
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 text-gray-300 py-14 px-4 border-t border-gray-800 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-stretch md:items-start gap-10 md:gap-8">
          {/* Logo y descripción */}
          <motion.div 
            className="flex-1 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.a 
              href="#home" 
              className="text-3xl font-extrabold text-white mb-4 flex items-center gap-2 tracking-tight drop-shadow-lg"
              whileHover={{ scale: 1.07 }}
            >
              <span className="text-red-700">Java</span>
              <span className="text-white">Developer</span>
              <SiSpring className="text-green-500 ml-2" title="Spring Boot" />
            </motion.a>
            {/* Descripción movida a la parte inferior del footer */}
            <div className="flex flex-wrap gap-3 mt-2">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${link.color} transition-colors rounded-full p-2 bg-gray-800/60 hover:bg-gray-700/80 shadow hover:shadow-lg`}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={link.name}
                  title={link.name}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter simulado */}
          <motion.div
            className="flex-1 max-w-md bg-gray-800/60 rounded-xl p-6 shadow-lg flex flex-col justify-between mb-6 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold text-red-700 mb-3">Newsletter</h3>
            <p className="text-gray-400 mb-4 text-sm">¿Quieres recibir novedades sobre mis proyectos y artículos? Suscríbete a mi newsletter.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                className="rounded-md px-3 py-2 bg-gray-900 text-gray-200 focus:outline-none focus:ring-2 focus:ring-red-700 w-full sm:w-auto"
                placeholder="Tu correo electrónico"
                disabled
              />
              <button
                type="button"
                className="bg-red-700 hover:bg-red-800 text-white font-semibold px-4 py-2 rounded-md transition-colors cursor-not-allowed opacity-70"
                disabled
              >
                Pronto disponible
              </button>
            </form>
          </motion.div>

          {/* Enlaces rápidos y contacto */}
          <div className="flex-1 flex flex-col gap-8">
            <motion.div
              className=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
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
                      className="text-gray-400 hover:text-blue-400 transition-colors font-medium"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contacto */}
            <motion.div
              className=""
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-red-700 mb-4">Contacto</h3>
              <address className="not-italic text-gray-400 space-y-2 text-sm">
                <p className="flex items-center gap-2">
                  <FaEnvelope className="text-blue-400" />
                  <a href="mailto:carloszuluagag7codinino@gmail.com" className="hover:text-blue-400 transition-colors">
                    carloszuluagag7codinino@gmail.com
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <FaPhone className="text-blue-400" />
                  <a href="tel:+573127878037" className="hover:text-blue-400 transition-colors">
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
        </div>

        {/* Descripción profesional */}
        <motion.div
          className="mt-12 mb-2 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <p className="text-gray-300 text-base md:text-lg font-medium max-w-2xl mx-auto">
            Desarrollador backend especializado en <span className="text-red-700 font-semibold">Java</span> y <span className="text-green-500 font-semibold">Spring Boot</span>, creando soluciones escalables y eficientes.
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-4 border-t border-gray-800 text-center text-gray-500 text-sm"
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

      {/* Efecto decorativo de fondo */}
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-red-900/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-900/20 rounded-full blur-3xl pointer-events-none z-0" />
    </footer>
  );
};

export default Footer;
