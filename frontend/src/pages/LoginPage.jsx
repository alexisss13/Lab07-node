import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";

import { useAuth } from "../context/AuthContext";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../components/ui/Card";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export default function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const handleLogin = (data) => {
    setMessage("");
    login(data.username, data.password).then(
      () => {
        navigate("/");
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setMessage(resMessage);
      }
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
              className="w-12 h-12 filter brightness-0 invert"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Bienvenido de vuelta</h2>
          <p className="mt-2 text-sm text-gray-600">
            Inicia sesión en tu cuenta para continuar
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="w-full">
            <CardContent>
              <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre de usuario
                    </label>
                    <Input 
                      id="username" 
                      placeholder="Ingresa tu nombre de usuario"
                      {...register("username")} 
                    />
                    {errors.username && (
                      <p className="text-red-500 text-xs mt-1 font-medium">
                        {errors.username.message}
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
                      placeholder="Ingresa tu contraseña"
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
                  Iniciar Sesión
                </Button>
              </form>

              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  ¿No tienes una cuenta?{" "}
                  <Link 
                    to="/register" 
                    className="font-medium text-primary-600 hover:text-primary-500 transition-colors"
                  >
                    Regístrate aquí
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Demo Users Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-blue-50 border border-blue-200 rounded-lg p-4"
        >
          <h3 className="text-sm font-medium text-blue-900 mb-2">Usuarios de Prueba</h3>
          <div className="text-xs text-blue-700 space-y-1">
            <p><strong>Admin:</strong> admin / admin123</p>
            <p><strong>Moderador:</strong> mod / mod123</p>
            <p><strong>Usuario:</strong> user / user123</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
