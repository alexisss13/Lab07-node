import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import authService from "../services/auth.service";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/Card";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const schema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleRegister = (data) => {
    setMessage("");
    authService.signup(data.username, data.email, data.password).then(
      () => navigate("/login"),
      (error) => setMessage(error.response?.data?.message || "Registration failed")
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="mx-auto w-20 h-20 rounded-2xl flex items-center justify-center mb-6" style={{
            background: 'linear-gradient(135deg, #0284c7, #0369a1)',
            boxShadow: '0 4px 20px rgba(2, 132, 199, 0.3)'
          }}>
            <img 
              src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" 
              alt="JWT Logo" 
              className="w-12 h-12"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Crear cuenta</h2>
          <p className="mt-2 text-sm text-gray-600">
            Únete hoy y comienza
          </p>
        </motion.div>

        {/* Registration Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="w-full">
            <CardContent>
              <form onSubmit={handleSubmit(handleRegister)} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de usuario
                    </label>
                    <Input 
                      id="username"
                      placeholder="Elige un nombre de usuario"
                      {...register("username")} 
                    />
                    {errors.username && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.username.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Correo electrónico
                    </label>
                    <Input 
                      id="email"
                      type="email" 
                      placeholder="Ingresa tu correo electrónico"
                      {...register("email")} 
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                      Contraseña
                    </label>
                    <Input 
                      id="password"
                      type="password" 
                      placeholder="Crea una contraseña"
                      {...register("password")} 
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                {message && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-3 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <p className="text-center text-sm text-red-600 font-medium">{message}</p>
                  </motion.div>
                )}

                <Button type="submit" className="w-full btn-primary" size="lg">
                  Crear Cuenta
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  ¿Ya tienes una cuenta?{" "}
                  <Link 
                    to="/login" 
                    className="font-medium text-primary-600 hover:text-primary-500 transition-colors"
                  >
                    Inicia sesión aquí
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Note about roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-amber-50 border border-amber-200 rounded-lg p-4"
        >
          <h3 className="text-sm font-medium text-amber-900 mb-2">Nota</h3>
          <p className="text-xs text-amber-700">
            Las nuevas cuentas se crean con rol <strong>Usuario</strong> por defecto. 
            Las cuentas de Administrador y Moderador deben crearse a través de la API.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default RegisterPage;
