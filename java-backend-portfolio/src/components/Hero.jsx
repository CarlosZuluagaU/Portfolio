import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";
import { SiLeetcode, SiSpring } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { useTranslation } from "../hooks/useTranslation";

const socialLinks = [
  {
    icon: <FaGithub size={24} />,
    url: "https://github.com/CarlosZuluagaU",
    name: "GitHub",
  },
  {
    icon: <FaLinkedin size={24} />,
    url: "https://www.linkedin.com/in/carlos-andres-zuluaga-699296307",
    name: "LinkedIn",
  },
  {
    icon: <SiLeetcode size={24} />,
    url: "https://leetcode.com/tu-usuario",
    name: "LeetCode",
  },
];

const Hero = () => {
  const { t } = useTranslation();
  const cvUrl = `${import.meta.env.BASE_URL}CV-Carlos-Zuluaga_sp.pdf`;

  const yearsOfExperience = 2;
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-red-500 font-semibold text-lg tracking-wide">
              {t("hero.badge")}
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-white">{t("hero.greeting").split(" ")[0]}</span>{" "}
            <span className="text-red-700">{t("hero.greeting").split(" ")[1]}</span>
          </h1>

          <motion.h2 
            className="text-2xl md:text-3xl font-light text-gray-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t("hero.subtitle")}{" "}
            <span className="font-semibold text-red-400">{t("hero.subtitleHighlight")}</span>
          </motion.h2>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-2xl">
            {t("hero.description")}
          </p>

          {/* Tech stack pills */}
          <motion.div 
            className="flex flex-wrap gap-3 mb-10 justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-red-900 to-red-700 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/>
              </svg>
              Java 17
            </span>
            <span className="bg-gradient-to-r from-green-600 to-green-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
              <SiSpring className="text-white w-5 h-5" />
              Spring Boot
            </span>
            <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185M9.464 8.82h2.119a.186.186 0 00.186-.186V6.748a.186.186 0 00-.186-.186H9.464a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185"/>
              </svg>
              Docker
            </span>
            <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.226 6.583c-.474-.67-1.479-.67-1.952 0L12.5 12.317 8.726 6.583c-.474-.67-1.479-.67-1.952 0-.474.67-.474 1.756 0 2.426l3.774 5.734c.474.67 1.479.67 1.952 0l3.774-5.734c.474-.67.474-1.756 0-2.426z"/>
              </svg>
              AWS
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg">
              <TbApi className="w-5 h-5" />
              Microservicios
            </span>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center md:justify-start gap-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="#projects"
              className="group bg-gradient-to-r from-red-700 to-red-600 hover:from-red-600 hover:to-red-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 transform"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <TbApi size={22} className="group-hover:rotate-12 transition-transform duration-300" />
              <span>{t("hero.exploreProjects")}</span>
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.a>

            <motion.a
              href={cvUrl}
              download="CV-Carlos-Zuluaga.pdf"
              className="group border-2 border-red-600 text-red-400 hover:bg-red-600 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-3 backdrop-blur-sm"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload size={20} className="group-hover:animate-bounce" />
              <span>{t("hero.downloadCV")}</span>
            </motion.a>
          </motion.div>

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

        {/* Code dashboard - replacing profile image */}
        <motion.div
          className="md:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative max-w-md w-full">
            {/* Main code terminal */}
            <div className="bg-[#1a1a1a] rounded-xl border border-gray-700 shadow-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="bg-[#2a2a2a] px-4 py-3 flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-gray-400 text-sm ml-4">~/portfolio/backend</span>
              </div>
              
              {/* Code content */}
              <div className="p-6 text-sm font-mono">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  <div className="text-green-400 mb-2">$ mvn spring-boot:run</div>
                  <div className="text-gray-400 mb-4">
                    <span className="text-blue-400">INFO</span> Spring Boot Application Starting...
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-red-400">@RestController</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-blue-400">public class</span>
                      <span className="text-yellow-400">ProjectController</span>
                    </div>
                    <div className="text-gray-500">// Escalable & Robusto</div>
                  </div>
                  
                  <div className="text-green-400">✓ Tests: 98% Coverage</div>
                  <div className="text-green-400">✓ API Response: &lt; 100ms</div>
                  <div className="text-green-400">✓ Deployment: Success</div>
                </motion.div>
              </div>
            </div>

            {/* Floating metrics */}
            <motion.div
              className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl shadow-xl text-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <div className="font-bold text-2xl">{projectsCompleted}+</div>
              <div className="text-sm opacity-90">{t("hero.projectsLabel")}</div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -left-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-4 rounded-xl shadow-xl text-center"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <div className="font-bold text-2xl">{yearsOfExperience}</div>
              <div className="text-sm opacity-90">{t("hero.yearsLabel")}</div>
            </motion.div>

            <motion.div
              className="absolute top-1/2 -left-8 bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-3 rounded-xl shadow-xl text-center transform -rotate-12"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                delay: 1.2,
                type: "spring",
                stiffness: 200,
                damping: 20,
              }}
            >
              <div className="font-bold text-lg">Java</div>
              <div className="text-xs opacity-90">{t("hero.expertLabel")}</div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Enhanced background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-600/20 to-pink-600/20 rounded-full filter blur-3xl"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 rounded-full filter blur-3xl"
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-emerald-600/10 to-teal-600/10 rounded-full filter blur-3xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.2, opacity: 1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-400/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            initial={{ y: 0, opacity: 0.3 }}
            animate={{ 
              y: [-20, 20, -20],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;