import React from "react";
import { motion } from "framer-motion";

// Iconos
const SecurityIcon = () => (
  <svg className="w-12 h-12 mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const RocketIcon = () => (
  <svg className="w-12 h-12 mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="w-12 h-12 mb-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197m0 0A5.975 5.975 0 0112 13a5.975 5.975 0 013 1.803M15 21a6 6 0 00-9-5.197" />
  </svg>
);

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      className="min-h-screen text-gray-900 flex flex-col items-center justify-center p-8 text-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-4xl mx-auto">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 mb-4"
          variants={itemVariants}
        >
          Gestión de Usuarios Segura y Eficiente
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Protege y administra tus usuarios con autenticación moderna y roles personalizados. Simplifica la integración y controla el acceso con seguridad confiable.
        </motion.p>

      </div>

      <motion.div className="mt-20 pt-10 border-t border-gray-300 w-full max-w-6xl" variants={containerVariants}>
        <h2 className="text-3xl font-bold mb-12 text-gray-900">Características Principales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div className="bg-gray-100 p-8 rounded-xl border border-gray-200" variants={itemVariants}>
            <SecurityIcon />
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Seguridad Robusta con JWT</h3>
            <p className="text-gray-600">
              Protege tus rutas y datos con autenticación basada en tokens, garantizando control total sobre el acceso.
            </p>
          </motion.div>

          <motion.div className="bg-gray-100 p-8 rounded-xl border border-gray-200" variants={itemVariants}>
            <RocketIcon />
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Integración Rápida</h3>
            <p className="text-gray-600">
              Conecta nuestra API en minutos. Flujo de trabajo optimizado y documentación clara para acelerar tu desarrollo.
            </p>
          </motion.div>

          <motion.div className="bg-gray-100 p-8 rounded-xl border border-gray-200" variants={itemVariants}>
            <UsersIcon />
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Panel de Control Intuitivo</h3>
            <p className="text-gray-600">
              Administra roles, permisos y perfiles de usuario desde una interfaz limpia y fácil de usar.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
