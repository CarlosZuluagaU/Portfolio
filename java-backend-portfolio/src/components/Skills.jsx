// Skills.jsx
import React from 'react';
import SkillCard from './SkillCard'; 
import { skillsData } from '../constants/skillsData';

const Skills = () => {
  return (
    // Sección principal de habilidades con ID para navegación y estilos Tailwind
    <section id="skills" className="py-16 bg-[#181818] dark:bg-black transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <h2 className="text-4xl font-bold text-center text-white dark:text-white mb-12">
          Mis Habilidades
        </h2>
        
        {/* Contenedor de las categorías de habilidades en cuadrícula responsiva */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Aquí se usa el skillsData importado */}
          {skillsData.map((skillCategory, index) => (
            // Tarjeta de cada categoría de habilidad
            <div 
              className="bg-[#232323] dark:bg-[#111] rounded-lg shadow-xl p-8 transform transition duration-300 hover:scale-105" 
              key={index}
            >
              {/* Título de la categoría */}
              <h3 className="text-2xl font-bold text-red-700 dark:text-red-500 mb-6 border-b-2 border-red-700 dark:border-red-500 pb-3">
                {skillCategory.category}
              </h3>
              
              {/* Grid de tarjetas de habilidades dentro de la categoría */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4"> 
                {skillCategory.items.map((skill, idx) => (
                  <SkillCard
                    key={idx}
                    skillName={skill.name}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;