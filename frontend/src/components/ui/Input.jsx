import React from "react";

const Input = React.forwardRef(({ className, type, ...props }, ref) => (
  <input
    type={type}
    className={`
      flex h-11 w-full rounded-lg border border-gray-200 bg-white px-4 py-2.5 
      text-sm font-medium text-gray-900 placeholder:text-gray-500 
      transition-all duration-200
      focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 focus:outline-none
      disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-50
      hover:border-gray-300
      shadow-soft focus:shadow-medium
      ${className}
    `}
    ref={ref}
    {...props}
  />
));

export default Input;
