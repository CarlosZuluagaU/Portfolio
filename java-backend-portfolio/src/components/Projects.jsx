import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaAws, FaJava } from 'react-icons/fa';
import { SiSpring, SiDocker, SiPostgresql, SiRedis } from 'react-icons/si';
import { useTranslation } from '../hooks/useTranslation';

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
    title: "E-commerce Price Comparison Platform",
    description: "Plataforma inteligente que utiliza web scraping e IA para comparar precios entre múltiples tiendas online, ayudando a los usuarios a encontrar las mejores ofertas automáticamente.",
    impact: "Automatiza la búsqueda de precios para ahorrar tiempo a los compradores",
    technologies: ["Java", "Spring Boot", "Web Scraping", "IA"],
    features: [
      "Scraping automático de múltiples sitios web",
      "Algoritmos de IA para comparación de productos",
      "API RESTful para integración",
      "Sistema de notificaciones de ofertas"
    ],
    github: "https://github.com/CarlosZuluagaU/E-commerceWithScraper",
    status: "En desarrollo",
    category: "Backend & IA"
  },
  {
    title: "Sistema de Gestión de Inventarios",
    description: "Sistema completo para gestión de inventarios desarrollado para un negocio real en Cartagena. Incluye control de stock, reportes y dashboard administrativo.",
    impact: "Implementado en negocio real - Optimizó el control de inventario en 70%",
    technologies: ["React", "Node.js", "Supabase", "JavaScript"],
    features: [
      "Dashboard en tiempo real",
      "Gestión de productos y categorías",
      "Reportes de ventas y stock",
      "Sistema de alertas de stock mínimo"
    ],
    github: "https://github.com/CarlosZuluagaU/SystemInvetary",
    live: "https://CarlosZuluagaU.github.io/inventarios-v1-ready-main/",
    status: "Producción",
    category: "Full Stack"
  },
  {
    title: "CulturaMedia-UdeA API",
    description: "API RESTful robusta para plataforma de gestión de contenidos culturales universitarios. Maneja autenticación, autorización y gestión completa de contenidos multimedia.",
    impact: "Backend escalable para gestión de contenidos de toda la universidad",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Spring Security"],
    features: [
      "Autenticación JWT con Spring Security",
      "CRUD completo para contenidos multimedia",
      "Sistema de roles y permisos",
      "API documentada con Swagger"
    ],
    github: "https://github.com/CarlosZuluagaU/culturamedia-UdeA",
    status: "Completado",
    category: "Backend API"
  },
  {
    title: "Sistema de Citas UdeA",
    description: "Plataforma de agendamiento de citas académicas y administrativas para la universidad. Gestiona múltiples especialidades y horarios de manera eficiente.",
    impact: "Digitaliza el proceso de agendamiento universitario",
    technologies: ["Java", "Spring Boot", "MySQL", "JPA"],
    features: [
      "Calendario interactivo de citas",
      "Gestión de especialidades médicas",
      "Sistema de notificaciones",
      "Panel administrativo completo"
    ],
    github: "https://github.com/CarlosZuluagaX/ProyectUdeaCitas",
    status: "Completado",
    category: "Backend & DB"
  }
];

const Projects = () => {
  const { t } = useTranslation();
  
  return (
    <section 
      id="projects" 
      className="py-20 px-4 bg-gradient-to-br from-[#232323] via-[#2a183a]/80 to-[#181818] dark:bg-gradient-to-br dark:from-[#181818] dark:via-[#2a183a]/80 dark:to-[#232323] text-gray-100 transition-colors duration-300"
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("projects.title")}</h2>
          <div className="w-20 h-1 bg-red-700 dark:bg-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-300 dark:text-gray-300 text-lg">
            {t("projects.subtitle")}
          </p>
        </motion.div>

        {/* Cuadrícula de Proyectos */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#181f2a] dark:bg-[#131722] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700/50"
            >
              <div className="md:flex">
                {/* Contenido principal */}
                <div className="md:w-2/3 p-8">
                  {/* Header del proyecto */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-100">
                          {project.title}
                        </h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          project.status === 'Producción' 
                            ? 'bg-green-100 text-green-800' 
                            : project.status === 'Completado'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {project.status}
                        </span>
                      </div>
                      <p className="text-red-500 font-medium text-sm">{project.category}</p>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Impacto */}
                  <div className="bg-red-500/10 border-l-4 border-red-500 p-4 mb-6 rounded-r">
                    <p className="text-red-200 font-medium">
                      💡 <strong>{t("projects.impactLabel")}:</strong> {project.impact}
                    </p>
                  </div>

                  {/* Características principales */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-100 mb-3">{t("projects.featuresLabel")}:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">▶</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3 uppercase tracking-wide">Stack Tecnológico</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => {
                        const Icon = techIcons[tech];
                        return (
                          <span
                            key={i}
                            className="flex items-center gap-2 bg-[#232b3a] dark:bg-[#181f2a] text-blue-200 text-sm px-3 py-2 rounded-lg border border-gray-600/30"
                          >
                            {Icon && <Icon className="w-4 h-4" />} {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>

                  {/* Enlaces */}
                  <div className="flex flex-wrap gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-colors"
                      >
                        <FaGithub className="w-5 h-5 mr-2" />
                        {t("projects.buttons.viewCode")}
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
                      >
                        <FaExternalLinkAlt className="w-4 h-4 mr-2" />
                        {t("projects.buttons.liveDemo")}
                      </a>
                    )}
                  </div>
                </div>

                {/* Sidebar con métricas */}
                <div className="md:w-1/3 bg-[#1a1f2e] dark:bg-[#0f1419] p-6 border-l border-gray-700/50">
                  <div className="space-y-6">
                    {/* Icono del proyecto */}
                    <div className="flex justify-center">
                      <div className="w-20 h-20 bg-red-500/20 rounded-xl flex items-center justify-center">
                        <FaJava className="text-3xl text-red-500" />
                      </div>
                    </div>

                    {/* Métricas rápidas */}
                    <div className="space-y-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-red-500">{project.technologies.length}</p>
                        <p className="text-gray-400 text-sm">Tecnologías</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-blue-400">{project.features.length}</p>
                        <p className="text-gray-400 text-sm">Características</p>
                      </div>
                    </div>

                    {/* Call to action secundario */}
                    <div className="pt-4 border-t border-gray-700/50">
                      <p className="text-gray-400 text-sm text-center mb-3">
                        ¿Quieres saber más?
                      </p>
                      <button className="w-full px-4 py-2 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors text-sm">
                        Contactar sobre este proyecto
                      </button>
                    </div>
                  </div>
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
