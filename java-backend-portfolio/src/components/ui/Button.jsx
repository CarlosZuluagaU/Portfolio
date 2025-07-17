import React from 'react';
import PropTypes from 'prop-types'; // Para validación de props, es una buena práctica

const Button = ({
  onClick,
  children,
  type = 'button', // Default a 'button'
  variant = 'primary', // 'primary', 'secondary', 'outline', 'danger'
  size = 'md', // 'sm', 'md', 'lg'
  className = '', // Para añadir clases personalizadas desde el padre
  disabled = false,
  ...props // Para pasar cualquier otra prop HTML nativa (ej. aria-label)
}) => {
  // Definición de clases base
  const baseClasses = 'font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-75';

  // Clases por variante
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:ring-gray-400',
    outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-gray-800 focus:ring-blue-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-700',
    // Puedes añadir más variantes aquí
  };

  // Clases por tamaño
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-lg', // Default
    lg: 'px-6 py-3 text-lg rounded-xl',
  };

  // Clases para el estado deshabilitado
  const disabledClasses = disabled ? 'opacity-50 cursor-not-allowed' : '';

  // Combina todas las clases
  const combinedClasses = [
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabledClasses,
    className // Último para permitir sobrescritura fácil
  ].filter(Boolean).join(' '); // Elimina clases vacías y las une

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
      {...props} // Pasa props adicionales como aria-label, etc.
    >
      {children}
    </button>
  );
};

// Validación de PropTypes (buena práctica para desarrollo)
Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'danger']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;