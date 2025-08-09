import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLightbulb, FaUsers } from 'react-icons/fa';

const About = () => {
  const experiences = [
    {
      role: "Desarrollador Backend Junior",
      company: "Freelance & Proyectos Académicos",
      period: "2021 - Presente",
      achievements: [
        "Desarrollé y mantuve APIs RESTful utilizando Spring Boot para la gestión de servicios empresariales.",
        "Implementé soluciones de mensajería asíncrona con Apache Kafka para optimizar la comunicación entre microservicios.",
        "Desarrollé una aplicación completa de inventarios con base de datos y frontend para negocios emergentes en Cartagena, Bolívar."
      ]
    },
    {
      role: "Desarrollador Java",
      company: "Proyectos Universitarios - UdeA",
      period: "2024 - 2025",
      achievements: [
        "Lideré equipos de proyecto para el desarrollo de aplicaciones internas del club de la UdeA.",
        "Implementé seguridad con Spring Security, incluyendo autenticación JWT y gestión de roles.",
        "Diseñé bases de datos relacionales (MySQL) y su integración con Spring Data JPA."
      ]
    }
  ];

  const highlights = [
    {
      icon: <FaGraduationCap className="text-blue-500" size={24} />,
      title: "Estudiante de Ingeniería",
      description: "Formación sólida en desarrollo de software y arquitecturas escalables"
    },
    {
      icon: <FaCode className="text-green-500" size={24} />,
      title: "Backend Specialist",
      description: "Especializado en Java, Spring Boot y arquitecturas de microservicios"
    },
    {
      icon: <FaLightbulb className="text-yellow-500" size={24} />,
      title: "Solucionador de Problemas",
      description: "Enfoque en crear soluciones eficientes y mantenibles"
    },
    {
      icon: <FaUsers className="text-purple-500" size={24} />,
      title: "Trabajo en Equipo",
      description: "Experiencia liderando equipos y colaborando en proyectos complejos"
    }
  ];

  return (
    <section id="about" className="py-20 px-4 bg-[#181818] dark:bg-[#121212] text-gray-100 dark:text-gray-200 transition-colors duration-300">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-700 dark:text-red-500">Experiencia</span> y Habilidades
          </h2>
          <div className="w-20 h-1 bg-red-700 dark:bg-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-300 dark:text-gray-400 text-lg">
            Estudiante con recorrido en desarrollo de software, especializado en Java y Spring Boot.
          </p>
        </motion.div>

        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-red-700 dark:text-red-500">Sobre</span> Mí
          </h2>
          <div className="w-20 h-1 bg-red-700 dark:bg-red-500 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-3xl mx-auto text-gray-300 dark:text-gray-400 text-lg leading-relaxed">
            Soy un desarrollador backend apasionado por crear soluciones escalables y eficientes. 
            Con experiencia en Java y Spring Boot, me especializo en el desarrollo de APIs RESTful 
            y arquitecturas de microservicios que impulsan el crecimiento empresarial.
          </p>
        </motion.div>

        {/* Personal Highlights */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-[#232323] dark:bg-[#181818] p-6 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">
                  {highlight.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-100 mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 text-sm">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-8 text-center text-red-700 dark:text-red-500">
              Mi Trayectoria Profesional
            </h3>
            
            <div className="space-y-8 relative before:absolute before:left-7 before:h-full before:w-0.5 before:bg-red-700 dark:before:bg-red-900 before:top-4">
              {experiences.map((exp, idx) => (
                <motion.div
                  key={idx}
                  className="bg-[#232323] dark:bg-[#181818] p-6 rounded-xl relative pl-16 ml-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute left-0 top-8 w-4 h-4 rounded-full bg-red-700 border-4 border-red-300 dark:border-red-900 -ml-10"></div>
                  <div className="mb-4">
                    <h4 className="text-xl font-medium text-gray-100 mb-1">{exp.role}</h4>
                    <p className="text-red-500 font-medium mb-1">{exp.company}</p>
                    <p className="text-sm text-gray-400">{exp.period}</p>
                  </div>
                  <ul className="space-y-3 text-gray-300">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-red-500 mt-1 text-sm">▶</span>
                        <span className="leading-relaxed">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;