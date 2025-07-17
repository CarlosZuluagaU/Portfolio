import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

// Puedes definir las URLs de tus perfiles sociales aquí o en un archivo de constantes
const socialLinks = [
  { icon: <FaGithub size={24} />, url: 'https://github.com/tu-usuario' }, // ¡Actualiza tu usuario!
  { icon: <FaLinkedin size={24} />, url: 'https://linkedin.com/in/tu-perfil' }, // ¡Actualiza tu perfil!
  { icon: <FaStackOverflow size={24} />, url: 'https://stackoverflow.com/users/tu-id' }, // ¡Actualiza tu ID!
  { icon: <SiLeetcode size={24} />, url: 'https://leetcode.com/tu-usuario' } // ¡Actualiza tu usuario!
];

const Hero = () => {
  return (
    // La sección principal del Hero, con padding responsivo y ID para navegación
    // Mínimo de altura para ocupar al menos la pantalla completa en desktop
    <section 
      id="home" 
      className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12"> {/* Añadido gap */}
          {/* Contenido de texto y botones */}
          <motion.div 
            className="md:w-1/2 text-center md:text-left mb-12 md:mb-0 z-10" // Añadido z-10 para asegurar que esté sobre la imagen de fondo si la hay
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"> {/* Añadido leading-tight */}
              Hola, soy <span className="text-blue-600 dark:text-blue-400">Desarrollador Java</span> {/* Asegurado dark:text */}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"> {/* Añadido md:text-xl y leading-relaxed */}
              Especializado en backend con Spring Boot, microservicios y arquitecturas escalables.
              Apasionado por crear soluciones robustas y eficientes.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4"> {/* Añadido justify-center para móvil */}
              <motion.a
                href="#projects"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" // Estilos de botón más completos
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Ver proyectos
              </motion.a>
              <motion.a
                href="#contact"
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75" // Estilos de botón más completos
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contactar
              </motion.a>
            </div>
            {/* Enlaces a redes sociales */}
            <div className="mt-8 flex justify-center md:justify-start space-x-4"> {/* Añadido justify-center para móvil */}
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer" // Muy importante para seguridad al usar target="_blank"
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors transform hover:scale-110" // Añadido transform y hover:scale
                  whileHover={{ y: -3 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Contenedor de la imagen de perfil */}
          <motion.div
            className="md:w-1/2 flex justify-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-blue-100 dark:bg-blue-900 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                {/* Reemplaza esta URL por la ruta de tu imagen local */}
                <img 
                  src="/images/your-profile-pic.jpg" // CAMBIA ESTO: Asumiendo que tienes una imagen en /public/images
                  alt="Foto de perfil de desarrollador Java" // Texto alt más descriptivo
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Etiqueta flotante de experiencia */}
              <motion.div
                className="absolute -bottom-5 -right-5 bg-white dark:bg-gray-800 px-5 py-2 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 text-center" // Aumentado padding y sombra
                initial={{ scale: 0, opacity: 0 }} // Añadida animación de opacidad
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }} // Ajustados parámetros de spring
              >
                <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">5+ años</span> {/* Texto más grande y negrita */}
                <p className="text-sm text-gray-500 dark:text-gray-300">Experiencia</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Elementos decorativos de fondo (opcional, si quieres darle un toque extra) */}
      <motion.div
        className="absolute bottom-0 left-0 w-80 h-80 bg-blue-200 opacity-20 rounded-full mix-blend-multiply filter blur-xl transform translate-x-1/2 translate-y-1/2 animate-blob z-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      ></motion.div>
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-purple-200 opacity-20 rounded-full mix-blend-multiply filter blur-xl transform -translate-x-1/2 -translate-y-1/2 animate-blob animation-delay-2000 z-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      ></motion.div>
    </section>
  );
}

export default Hero;