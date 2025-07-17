import { motion } from 'framer-motion'
// Importaciones de react-icons eliminadas y reemplazadas por SVGs en línea

// Define the skills data
const skills = [
  { name: 'Java', level: 95, icon: (
    <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.854 18.062c-.933.155-2.072.19-3.212.099-1.29-.107-2.348-.387-3.177-.837-.829-.45-1.428-1.077-1.797-1.882-.369-.805-.554-1.745-.554-2.822 0-1.077.185-2.017.554-2.822.369-.805.968-1.432 1.797-1.882.829-.45 1.887-.73 3.177-.837 1.14-.091 2.279-.056 3.212.099.933.155 1.758.412 2.476.772.718.36 1.282.827 1.692 1.402.41.575.615 1.25.615 2.025 0 .775-.205 1.45-.615 2.025-.41.575-.974 1.042-1.692 1.402-.718.36-1.543.617-2.476.772zm-1.146-10.062c-.66-.11-1.319-.13-1.979-.061-.733.076-1.332.275-1.797.597-.465.322-.805.733-1.02.1234-.215.501-.322 1.05-.322 1.647 0 .597.107 1.146.322 1.647.215.501.555.912 1.02 1.234.465.322 1.064.521 1.797.597.66.069 1.319.049 1.979-.061.66-.11 1.24-.319 1.74-.627.5-.308.87-.718 1.11-1.234.24-.516.36-1.08.36-1.692 0-.612-.12-1.176-.36-1.692-.24-.516-.61-0.926-1.11-1.234-.5-.308-1.08-.517-1.74-.627z"/>
    </svg>
  )},
  { name: 'Spring Boot', level: 90, icon: (
    <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 2.182c5.424 0 9.818 4.394 9.818 9.818S17.424 21.818 12 21.818 2.182 17.424 2.182 12 6.576 2.182 12 2.182zm0 3.273c-3.591 0-6.545 2.955-6.545 6.545s2.954 6.545 6.545 6.545 6.545-2.955 6.545-6.545-2.954-6.545-6.545-6.545zm0 1.636c2.682 0 4.909 2.227 4.909 4.909S14.682 16.909 12 16.909 7.091 14.682 7.091 12 9.318 7.091 12 7.091zM12 8.727c-1.761 0-3.273 1.512-3.273 3.273s1.512 3.273 3.273 3.273 3.273-1.512 3.273-3.273-1.512-3.273-3.273-3.273z"/>
    </svg>
  )},
  { name: 'SQL/NoSQL', level: 85, icon: (
    <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0H4V6h16v4zM22 18V14c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0H4v-4h16v4z"/>
    </svg>
  )},
  { name: 'Microservicios', level: 88, icon: (
    <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.88 6-3.88s5.97 1.89 6 3.88c-1.29 1.94-3.5 3.22-6 3.22z"/>
    </svg>
  )},
  { name: 'Docker', level: 80, icon: (
    <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.92 7.72c-.08-.34-.4-.58-.75-.58h-3.48c-.35 0-.67.24-.75.58l-1.32 5.5c-.08.34.08.7.4.87.32.17.72.1.96-.17l.84-.95c.08-.09.21-.15.35-.15h2.16c.14 0 .27.06.35.15l.84.95c.24.27.64.34.96.17.32-.17.48-.53.4-.87l-1.32-5.5zM12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10zm-2.25 14.25c-.41 0-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5zm-3.5-3.5c-.41 0-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5zM12 12.5c-.41 0-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5zm3.5-3.5c-.41 0-.75-.34-.75-.75v-1.5c0-.41.34-.75.75-.75h1.5c.41 0 .75.34.75.75v1.5c0 .41-.34.75-.75.75h-1.5z"/>
    </svg>
  )},
  { name: 'Kubernetes', level: 75, icon: (
    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.88 6-3.88s5.97 1.89 6 3.88c-1.29 1.94-3.5 3.22-6 3.22z"/>
    </svg>
  )},
  { name: 'AWS', level: 70, icon: (
    <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.854 18.062c-.933.155-2.072.19-3.212.099-1.29-.107-2.348-.387-3.177-.837-.829-.45-1.428-1.077-1.797-1.882-.369-.805-.554-1.745-.554-2.822 0-1.077.185-2.017.554-2.822.369-.805.968-1.432 1.797-1.882.829-.45 1.887-.73 3.177-.837 1.14-.091 2.279-.056 3.212.099.933.155 1.758.412 2.476.772.718.36 1.282.827 1.692 1.402.41.575.615 1.25.615 2.025 0 .775-.205 1.45-.615 2.025-.41.575-.974 1.042-1.692 1.402-.718.36-1.543.617-2.476.772zm-1.146-10.062c-.66-.11-1.319-.13-1.979-.061-.733.076-1.332.275-1.797.597-.465.322-.805.733-1.02.1234-.215.501-.322 1.05-.322 1.647 0 .597.107 1.146.322 1.647.215.501.555.912 1.02 1.234.465.322 1.064.521 1.797.597.66.069 1.319.049 1.979-.061.66-.11 1.24-.319 1.74-.627.5-.308.87-.718 1.11-1.234.24-.516.36-1.08.36-1.692 0-.612-.12-1.176-.36-1.692-.24-.516-.61-0.926-1.11-1.234-.5-.308-1.08-.517-1.74-.627z"/>
    </svg>
  )}
]

// The main About component
const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white">
      <div className="container mx-auto max-w-6xl">
        {/* Section Title and Description */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Sobre mí</h2>
          {/* Decorative underline */}
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-lg">
            Desarrollador backend especializado en el ecosistema Java con experiencia en arquitecturas escalables y sistemas distribuidos.
          </p>
        </motion.div>

        {/* Content: Experience and Skills */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Experience Section */}
          <motion.div
            className="lg:w-1/2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Mi experiencia</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
              Con más de 5 años desarrollando aplicaciones empresariales, he trabajado en proyectos que manejan altos volúmenes de datos y requieren alta disponibilidad. Mi trayectoria incluye el diseño e implementación de APIs RESTful robustas y eficientes.
            </p>
            <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
              Mi enfoque se centra en escribir código limpio, mantenible y eficiente, siguiendo las mejores prácticas como Clean Code, SOLID y patrones de diseño. Me apasiona resolver problemas complejos y optimizar el rendimiento de las aplicaciones.
            </p>
            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              Además del desarrollo, tengo experiencia en despliegue de aplicaciones en la nube (AWS, Azure), orquestación de contenedores con Docker y Kubernetes, y automatización de procesos CI/CD para garantizar entregas rápidas y fiables.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            className="lg:w-1/2 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-blue-600 dark:text-blue-400">Mis habilidades</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }} // Added slight delay for staggered animation
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3 text-lg font-medium text-gray-800 dark:text-gray-100">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-gray-600 dark:text-gray-300 text-base">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2.5">
                    <motion.div
                      className="bg-blue-600 h-2.5 rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3 }} // Adjusted delay for progress bar
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About;
