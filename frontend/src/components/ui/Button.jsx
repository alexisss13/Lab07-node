import React from "react";
import { motion } from "framer-motion";

const Button = React.forwardRef(({ 
  className, 
  variant = "default",
  size = "default",
  children, 
  ...props 
}, ref) => {
  const variants = {
    default: "text-white shadow-soft hover:shadow-medium",
    outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 shadow-soft",
    ghost: "text-gray-600 hover:text-gray-900 hover:bg-gray-100",
    destructive: "bg-red-600 text-white hover:bg-red-700 shadow-soft hover:shadow-medium",
  };

  const sizes = {
    default: "h-10 px-4 py-2 text-sm font-medium",
    sm: "h-8 px-3 py-1 text-xs font-medium",
    lg: "h-12 px-6 py-3 text-base font-medium",
    icon: "h-10 w-10",
  };

  const getButtonStyles = () => {
    const baseStyles = {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      borderRadius: '0.5rem',
      fontWeight: '500',
      transition: 'all 0.2s ease-in-out',
      cursor: 'pointer',
      border: 'none',
    };

    if (variant === 'default') {
      return {
        ...baseStyles,
        backgroundColor: '#0284c7',
        color: 'white',
        boxShadow: '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
      };
    }

    return baseStyles;
  };

  return (
    <motion.button
      whileHover={{ 
        scale: 1.02,
        backgroundColor: variant === 'default' ? '#0369a1' : undefined,
        boxShadow: variant === 'default' ? '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : undefined
      }}
      whileTap={{ scale: 0.98 }}
      style={getButtonStyles()}
      className={`
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      ref={ref}
      {...props}
    >
      {children}
    </motion.button>
  );
});

export default Button;
