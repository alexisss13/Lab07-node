export const Card = ({ className, children, ...props }) => (
  <div
    className={`
      rounded-2xl border border-gray-200 bg-white shadow-soft hover:shadow-medium
      transition-all duration-300 backdrop-blur-sm
      ${className}
    `}
    {...props}
  >
    {children}
  </div>
);

export const CardHeader = ({ className, children }) => (
  <div className={`flex flex-col space-y-2 p-8 pb-4 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ className, children }) => (
  <h3
    className={`
      text-2xl font-semibold leading-tight tracking-tight text-gray-900
      ${className}
    `}
  >
    {children}
  </h3>
);

export const CardDescription = ({ className, children }) => (
  <p className={`text-sm font-medium text-gray-600 leading-relaxed ${className}`}>
    {children}
  </p>
);

export const CardContent = ({ className, children }) => (
  <div className={`p-8 pt-4 ${className}`}>{children}</div>
);

export const CardFooter = ({ className, children }) => (
  <div className={`flex items-center justify-between p-8 pt-4 border-t border-gray-100 ${className}`}>
    {children}
  </div>
);
