// SkillCard.jsx
import React from 'react';

const SkillCard = ({ skillName, icon }) => {
  return (
    <div className="group relative bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-200 dark:border-gray-700">
      {/* Icono y nombre centrados */}
      <div className="flex flex-col items-center space-y-3">
        <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h4 className="text-sm font-semibold text-gray-900 dark:text-white text-center">
          {skillName}
        </h4>
      </div>

      {/* Efecto hover sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </div>
  );
};

export default SkillCard;
