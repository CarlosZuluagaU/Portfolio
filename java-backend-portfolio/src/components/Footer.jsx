import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaStackOverflow } from 'react-icons/fa'

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub size={20} />, url: 'https://github.com' },
    { icon: <FaLinkedin size={20} />, url: 'https://linkedin.com' },
    { icon: <FaTwitter size={20} />, url: 'https://twitter.com' },
    { icon: <FaStackOverflow size={20} />, url: 'https://stackoverflow.com' }
  ]

  return (
    <footer className="bg-gray-800 text-gray-300 py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center">
          <motion.a 
            href="#home" 
            className="text-2xl font-bold text-white mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-blue-400">Java</span>Dev
          </motion.a>
          <div className="flex space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href="#home" className="hover:text-blue-400 transition-colors">Inicio</a>
            <a href="#about" className="hover:text-blue-400 transition-colors">Sobre mí</a>
            <a href="#projects" className="hover:text-blue-400 transition-colors">Proyectos</a>
            <a href="#contact" className="hover:text-blue-400 transition-colors">Contacto</a>
          </div>
          <p className="text-center text-gray-400">
            &copy; {new Date().getFullYear()} Portafolio Java Developer. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer