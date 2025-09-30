import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/Card";

const BoardUser = () => {
  const { currentUser } = useAuth();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">👤</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Panel de Usuario</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bienvenido a tu panel personal. Aquí puedes gestionar tu cuenta y acceder a funciones específicas de usuario.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Información del Perfil</CardTitle>
                <CardDescription>
                  Ver y gestionar tus datos personales
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Nombre de usuario</p>
                    <p className="text-lg font-semibold text-gray-900">{currentUser?.username}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Correo electrónico</p>
                    <p className="text-lg font-semibold text-gray-900">{currentUser?.email}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Rol</p>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      Usuario
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Acciones Rápidas</CardTitle>
                <CardDescription>
                  Tareas comunes que puedes realizar
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900">Actualizar Perfil</h4>
                    <p className="text-sm text-gray-600">Modificar tu información personal</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900">Cambiar Contraseña</h4>
                    <p className="text-sm text-gray-600">Asegurar tu cuenta</p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900">Ver Actividad</h4>
                    <p className="text-sm text-gray-600">Revisar tus acciones recientes</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Estado de la Cuenta</CardTitle>
                <CardDescription>
                  Información actual de tu cuenta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Estado</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Activo
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Miembro desde</span>
                    <span className="text-sm text-gray-900">Hoy</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Último acceso</span>
                    <span className="text-sm text-gray-900">Ahora</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12"
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Mensaje de Bienvenida</CardTitle>
              <CardDescription>
                Comenzando con tu cuenta de usuario
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  ¡Felicidades por unirte a nuestra plataforma! Como usuario, tienes acceso a una gama de funciones 
                  diseñadas para ayudarte a gestionar tu cuenta y aprovechar al máximo nuestros servicios. Puedes actualizar 
                  tu perfil, cambiar tu contraseña y acceder a contenido específico de usuario.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Si necesitas permisos adicionales o tienes preguntas sobre tu cuenta, contacta 
                  a un administrador que puede ayudarte con actualizaciones de rol o soporte técnico.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default BoardUser;
