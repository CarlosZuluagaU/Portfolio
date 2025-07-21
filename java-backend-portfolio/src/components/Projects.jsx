import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAws, FaJava } from 'react-icons/fa';
import { SiSpring, SiDocker, SiPostgresql, SiRedis } from 'react-icons/si';

// --- MAPA DE ICONOS DE TECNOLOGÍA ---
const techIcons = {
  "Java": FaJava,
  "Spring Boot": SiSpring,
  "Spring": SiSpring,
  "PostgreSQL": SiPostgresql,
  "JWT": null,
  "MySQL": null,
  "Stripe API": null,
  "Microservicios": null,
  "Spring Cloud": SiSpring,
  "Docker": SiDocker,
  "Kafka": null,
  "AWS": FaAws,
  "Big Data": null,
  "Spring Security": SiSpring,
  "OAuth2": null,
  "Redis": SiRedis,
  "WebSockets": null,
  "RabbitMQ": null,
  "MongoDB": null
};

const projects = [
  {
    title: "Sistema de Gestión Bancaria",
    description: "Backend para sistema bancario con Spring Boot, seguridad JWT y microservicios",
    tags: ["Java", "Spring Boot", "PostgreSQL", "JWT"],
    github: "#",
    live: "#",
    image: "/images/project-bank.jpg"
  },
  {
    title: "API E-commerce",
    description: "API RESTful para plataforma de comercio electrónico con pagos integrados",
    tags: ["Java", "Spring", "MySQL", "Stripe API"],
    github: "#",
    live: "#",
    image: "/images/project-ecommerce.jpg"
  },
  {
    title: "Sistema de Reservas",
    description: "Sistema distribuido para reservas de hoteles con Spring Cloud",
    tags: ["Microservicios", "Spring Cloud", "Docker", "Kafka"],
    github: "#",
    live: "#",
    image: "/images/project-booking.jpg"
  },
  {
    title: "Plataforma de Análisis de Datos",
    description: "Backend para procesamiento de grandes volúmenes de datos financieros",
    tags: ["Java", "Spring Batch", "AWS", "Big Data"],
    github: "#",
    live: "#",
    image: "/images/project-analytics.jpg"
  },
  {
    title: "API de Autenticación",
    description: "Servicio de autenticación centralizado con OAuth2 y SSO",
    tags: ["Spring Security", "OAuth2", "JWT", "Redis"],
    github: "#",
    live: "#",
    image: "/images/project-auth.jpg"
  },
  {
    title: "Sistema de Notificaciones",
    description: "Servicio de notificaciones en tiempo real con WebSockets",
    tags: ["Spring", "WebSockets", "RabbitMQ", "MongoDB"],
    github: "#",
    live: "#",
    image: "/images/project-notifications.jpg"
  }
];

const Projects = () => {
  return (
    <section 
      id="projects" 
      className="py-20 px-4 bg-[#232323] dark:bg-[#181818] text-gray-100 transition-colors duration-300"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Sección de Título */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <div className="w-20 h-1 bg-red-700 dark:bg-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-300 dark:text-gray-300 text-lg">
            Estos son mis proyectos más relevantes donde he aplicado arquitecturas backend robustas y escalables.
          </p>
        </motion.div>

        {/* Cuadrícula de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="bg-[#181f2a] dark:bg-[#131722] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Imagen del proyecto */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-gray-700">
                {project.image ? (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <FaJava className="text-5xl text-gray-400" />
                  </div>
                )}
              </div>

              {/* Detalles del proyecto */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-100">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Tecnologías */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => {
                    const Icon = techIcons[tag];
                    return (
                      <span
                        key={i}
                        className="flex items-center gap-1 bg-[#232b3a] dark:bg-[#181f2a] text-blue-200 text-xs px-3 py-1 rounded-full"
                      >
                        {Icon && <Icon className="w-4 h-4" />} {tag}
                      </span>
                    );
                  })}
                </div>

                {/* Enlaces */}
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-red-500 hover:bg-red-600 text-black font-semibold rounded-lg transition-colors"
                    >
                      <FaGithub className="w-4 h-4 mr-2" />
                      <span className="text-sm">Código</span>
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-black hover:bg-gray-900 text-red-500 font-semibold rounded-lg transition-colors border border-red-500"
                    >
                      <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                      <span className="text-sm">Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mensaje final */}
        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-gray-800 transition-colors"
          >
            Más proyectos en desarrollo...
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
