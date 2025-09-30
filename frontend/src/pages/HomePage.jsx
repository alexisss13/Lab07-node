import React from "react";
import { motion } from "framer-motion";

const HomePage = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <h1 className="text-4xl font-bold">Página de Inicio</h1>
    <p className="mt-4 text-lg">Contenido público.</p>
  </motion.div>
);

export default HomePage;
