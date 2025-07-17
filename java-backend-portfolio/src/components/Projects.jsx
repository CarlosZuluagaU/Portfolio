import { motion } from 'framer-motion';
// --- Importa los iconos desde react-icons ---
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'; 
// --- Importa los datos de los proyectos ---
import { projects } from '../constants/index'; // Asegúrate de que esta ruta sea correcta

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Sección de Título y Descripción */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Proyectos</h2>
          {/* Línea decorativa */}
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Algunos de mis proyectos recientes donde he aplicado mis habilidades en desarrollo backend.
          </p>
        </motion.div>

        {/* Cuadrícula de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              // Usar project.title como key si es único, o un id si tus proyectos tienen uno
              // key={project.title} 
              key={index} // 'index' como fallback si project.title no es único
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)' }} // Mejora la sombra en hover
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-lg transition-all duration-300" // Añadido transition-all
            >
              {/* Imagen del Proyecto */}
              <div className="h-48 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
              </div>

              {/* Contenido del Proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-blue-600 dark:text-blue-400">{project.title}</h3>
                <p className="text-gray-700 dark:text-gray-200 mb-4">{project.description}</p>
                
                {/* Etiquetas/Tags del Proyecto */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs px-3 py-1 rounded-full font-medium" // Añadido font-medium
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Enlaces a GitHub y Demo */}
                <div className="flex space-x-4">
                  {project.github && ( // Renderiza solo si hay URL de GitHub
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FaGithub className="w-5 h-5 mr-2" /> {/* Usando react-icons */}
                      Código
                    </a>
                  )}
                  {project.live && ( // Renderiza solo si hay URL de Demo en vivo
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-5 h-5 mr-2" /> {/* Usando react-icons */}
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;