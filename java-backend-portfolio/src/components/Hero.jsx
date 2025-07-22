import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import { SiLeetcode, SiSpring } from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

const socialLinks = [
  {
    icon: <FaGithub size={24} />,
    url: 'https://github.com/CarlosZuluagaU',
    name: 'GitHub'
  },
  {
    icon: <FaLinkedin size={24} />,
    url: 'https://www.linkedin.com/in/carlos-andres-zuluaga-699296307',
    name: 'LinkedIn'
  },
  {
    icon: <SiLeetcode size={24} />,
    url: 'https://leetcode.com/tu-usuario',
    name: 'LeetCode'
  }
];

const Hero = () => {
  const yearsOfExperience = new Date().getFullYear() - 2019;
  const projectsCompleted = 24;

  return (
    <section
      id="home"
      className="bg-[#0f0f0f] text-gray-100 min-h-screen flex items-center justify-center px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 z-10">
        {/* Text content */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-green-500 font-medium mb-2 flex items-center justify-center md:justify-start gap-2">
            <SiSpring className="inline text-green-500" /> Desarrollador Backend
          </p>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Hola, soy <span className="text-red-700">Carlos Zuluaga</span>
          </h1>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
            Estudiante proximo a gradurse de Ingenieria de Sistemas, Especializado en <span className="font-semibold text-gray-100">Spring Boot, Microservicios y APIs REST</span>. 
            Varias de mis proyectos fueron realizados con la implementación de patrones de diseño y arquitecturas modernas, y en camino de aprender IA para implementar a los futuros proyectos con Java.
          </p>

          {/* Tech stack pills */}
          <div className="flex flex-wrap gap-3 mb-8 justify-center md:justify-start">
            <span className="bg-[#1e1e1e] text-red-700 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              {/* Java icon en rojo */}
              <svg className="w-4 h-4 text-red-700" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.854 18.062c-.933.155-2.072.19-3.212.099-1.29-.107-2.348-.387-3.177-.837-.829-.45-1.428-1.077-1.797-1.882-.369-.805-.554-1.745-.554-2.822 0-1.077.185-2.017.554-2.822.369-.805.968-1.432 1.797-1.882.829-.45 1.887-.73 3.177-.837 1.14-.091 2.279-.056 3.212.099.933.155 1.758.412 2.476.772.718.36 1.282.827 1.692 1.402.41.575.615 1.25.615 2.025 0 .775-.205 1.45-.615 2.025-.41.575-.974 1.042-1.692 1.402-.718.36-1.543.617-2.476.772zm-1.146-10.062c-.66-.11-1.319-.13-1.979-.061-.733.076-1.332.275-1.797.597-.465.322-.805.733-1.02.1234-.215.501-.322 1.05-.322 1.647 0 .597.107 1.146.322 1.647.215.501.555.912 1.02 1.234.465.322 1.064.521 1.797.597.66.069 1.319.049 1.979-.061.66-.11 1.24-.319 1.74-.627.5-.308.87-.718 1.11-1.234.24-.516.36-1.08.36-1.692 0-.612-.12-1.176-.36-1.692-.24-.516-.61-0.926-1.11-1.234-.5-.308-1.08-.517-1.74-.627z"/>
              </svg>
              Java 17
            </span>
            <span className="bg-[#1e1e1e] text-green-500 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              {/* Spring Boot icon en verde */}
              <SiSpring className="inline text-green-500" />
              Spring Boot
            </span>
            <span className="bg-[#1e1e1e] text-blue-300 px-3 py-1 rounded-full text-sm font-medium">Docker</span>
            <span className="bg-[#1e1e1e] text-orange-400 px-3 py-1 rounded-full text-sm font-medium">AWS</span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <motion.a
              href="#projects"
              className="bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TbApi size={20} />
              Ver proyectos
            </motion.a>

            <motion.a
              href="/cv-java-developer.pdf"
              download
              className="border-2 border-red-700 text-red-400 hover:bg-black hover:text-white px-8 py-3 rounded-lg font-medium transition-colors flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload size={18} />
              Descargar CV
            </motion.a>
          </div>

          {/* Social links */}
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors flex flex-col items-center group"
                whileHover={{ y: -3 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                aria-label={link.name}
              >
                {link.icon}
                <span className="text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {link.name}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Profile image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-[#1a1a1a] rounded-full overflow-hidden border-4 border-blue-900 shadow-xl">
              <img
                src="/images/profile-pic.jpg"
                alt="Carlos Zuluaga - Desarrollador Java"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>

            {/* Floating tags */}
            <motion.div
              className="absolute -bottom-5 -right-5 bg-[#1a1a1a] text-blue-400 px-5 py-2 rounded-lg shadow-xl border border-blue-900 text-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
            >
              <span className="font-bold text-lg">Java</span>
              <p className="text-sm text-gray-400">Carlos Zuluaga</p>
            </motion.div>

            <motion.div
              className="absolute -top-5 -left-5 bg-[#1a1a1a] text-blue-400 px-4 py-2 rounded-lg shadow-xl border border-blue-900 text-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, type: 'spring', stiffness: 200, damping: 20 }}
            >
              <span className="font-bold text-lg">{projectsCompleted}+</span>
              <p className="text-sm text-gray-400">Proyectos</p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background blurred circles */}
      <motion.div
        className="absolute bottom-0 left-0 w-72 h-72 bg-blue-800 opacity-20 rounded-full filter blur-3xl z-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      ></motion.div>

      <motion.div
        className="absolute top-0 right-0 w-72 h-72 bg-purple-800 opacity-20 rounded-full filter blur-3xl z-0"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      ></motion.div>
    </section>
  );
};

export default Hero;
