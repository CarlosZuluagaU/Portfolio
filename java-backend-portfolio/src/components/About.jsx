import { motion } from 'framer-motion';
import { FaJava, FaDocker, FaAws } from 'react-icons/fa';
import { SiSpringboot, SiKubernetes, SiPostgresql, SiMongodb } from 'react-icons/si';

const About = () => {
  const skills = [
    { 
      name: 'Java', 
      level: 95, 
      icon: <FaJava className="text-red-500" size={20} />,
      description: 'Desarrollo de aplicaciones empresariales con Java EE y Spring Framework' 
    },
    { 
      name: 'Spring Boot', 
      level: 90, 
      icon: <SiSpringboot className="text-green-500" size={20} />,
      description: 'Creación de APIs RESTful y microservicios con Spring Boot' 
    },
    { 
      name: 'Bases de Datos', 
      level: 85, 
      icon: <SiPostgresql className="text-blue-500" size={20} />,
      subskills: ['PostgreSQL', 'MySQL', 'MongoDB'],
      description: 'Diseño de esquemas relacionales y no relacionales optimizados' 
    },
    { 
      name: 'Arquitectura', 
      level: 88, 
      icon: <SiKubernetes className="text-blue-600" size={20} />,
      subskills: ['Microservicios', 'Event-Driven', 'Hexagonal'],
      description: 'Diseño de arquitecturas escalables y mantenibles' 
    },
    { 
      name: 'DevOps', 
      level: 80, 
      icon: <FaDocker className="text-blue-400" size={20} />,
      subskills: ['Docker', 'CI/CD', 'GitHub Actions'],
      description: 'Automatización de despliegues y pipelines de integración' 
    },
    { 
      name: 'Cloud', 
      level: 75, 
      icon: <FaAws className="text-orange-500" size={20} />,
      subskills: ['AWS EC2', 'S3', 'RDS'],
      description: 'Despliegue y gestión de aplicaciones en la nube' 
    }
  ];

  const experiences = [
    {
      role: "Desarrollador Backend junior",
      period: "2021 - Presente",
      achievements: [
        "Desarrollé y mantuve APIs RESTful utilizando Spring Boot para la gestión de servicios empresariales.",
        "Implementé soluciones de mensajería asíncrona con Apache Kafka para optimizar la comunicación entre microservicios.",
        "Desarrollé una apliación completo de inventarios con base de datos y frontend para negocios emergentes en el departamento de Bolívar, ciudad Cartagena."
      ]
    },
    {
      role: "Desarrollador Java",
      period: "2025",
      achievements: [
        "Gestioné equipos de proyecto para el desarrollo de aplicaciones internas del club de la UdeA.",
        "Colaboré en la implementación de seguridad con Spring Security, incluyendo autenticación basada en JWT y gestión de roles.",
        "Participé en el diseño de bases de datos relacionales (MySQL) y la integración con Spring Data JPA."
      ]
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

        {/* Content */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Experience Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#232323] dark:bg-[#181818] p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-red-700 dark:text-red-500">
                <span>Mi</span> Trayectoria
              </h3>
              
              <div className="space-y-8 relative before:absolute before:left-7 before:h-full before:w-0.5 before:bg-red-700 dark:before:bg-red-900">
                {experiences.map((exp, idx) => (
                  <motion.div
                    key={idx}
                    className="relative pl-10"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: idx * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-red-700 border-4 border-red-300 dark:border-red-900"></div>
                    <h4 className="text-xl font-medium text-gray-100">{exp.role}</h4>
                    <p className="text-red-500 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-400 mb-3">{exp.period}</p>
                    <ul className="space-y-2 text-gray-300">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-[#232323] dark:bg-[#181818] p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 text-red-700 dark:text-red-500">
                <span>Mis</span> Habilidades Técnicas
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-[#181818] dark:bg-[#232323] rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                          {skill.icon}
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-100">{skill.name}</h4>
                          {skill.subskills && (
                            <p className="text-xs text-gray-400">
                              {skill.subskills.join(' • ')}
                            </p>
                          )}
                        </div>
                      </div>
                      <span className="text-gray-300 font-mono">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 dark:bg-gray-800 rounded-full h-2.5 mb-2">
                      <motion.div
                        className="bg-gradient-to-r from-red-700 to-red-500 h-2.5 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                    
                    <p className="text-sm text-gray-400">
                      {skill.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;