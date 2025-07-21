import React from 'react';
import PropTypes from 'prop-types'; // Para validación de props

const SkillBar = ({ skillName, proficiency, color = 'blue' }) => {
  // Asegúrate de que la proficency esté entre 0 y 100
  const normalizedProficiency = Math.max(0, Math.min(100, proficiency));

  // Clases de color para la barra de progreso
  // Puedes añadir más colores o un mapa si tienes muchos
  const barColorClass = {
    blue: 'bg-blue-600',
    purple: 'bg-purple-600',
    green: 'bg-green-600',
    red: 'bg-red-600',
    yellow: 'bg-yellow-500',
    pink: 'bg-pink-600',
    indigo: 'bg-indigo-600',
    // Añade más si necesitas
  }[color] || 'bg-blue-600'; // Color por defecto si no se especifica o no existe

  return (
    <div className="mb-6"> {/* Margen inferior para separar las barras */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
          {skillName}
        </span>
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          {normalizedProficiency}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className={`${barColorClass} h-2.5 rounded-full transition-all duration-700 ease-out`}
          style={{ width: `${normalizedProficiency}%` }}
          role="progressbar"
          aria-valuenow={normalizedProficiency}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

// Validación de PropTypes
SkillBar.propTypes = {
  skillName: PropTypes.string.isRequired,
  proficiency: PropTypes.number.isRequired,
  color: PropTypes.string, // O podrías usar PropTypes.oneOf si defines un set fijo de colores
};

export default SkillBar;