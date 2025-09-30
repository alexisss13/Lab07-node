import { motion } from "framer-motion";
import { useAuth } from "../context/AuthContext";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "../components/ui/Card";

const BoardModerator = () => {
  const { currentUser } = useAuth();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <span className="text-white font-bold text-2xl">🛡️</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Panel de Moderador</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bienvenido al panel de control de moderador. Gestiona contenido, modera discusiones y mantén los estándares de la comunidad.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">Información del Perfil</CardTitle>
                <CardDescription>
                  Detalles de tu cuenta de moderador
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
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                      Moderador
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
                <CardTitle className="text-xl">Herramientas de Moderación</CardTitle>
                <CardDescription>
                  Herramientas para moderación de contenido
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <h4 className="font-medium text-amber-900">Revisar Contenido</h4>
                    <p className="text-sm text-amber-700">Moderar contenido generado por usuarios</p>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <h4 className="font-medium text-amber-900">Reportes de Usuarios</h4>
                    <p className="text-sm text-amber-700">Manejar reportes de la comunidad</p>
                  </div>
                  <div className="p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <h4 className="font-medium text-amber-900">Gestión de Suspensiones</h4>
                    <p className="text-sm text-amber-700">Gestionar restricciones de usuarios</p>
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
                <CardTitle className="text-xl">Estadísticas</CardTitle>
                <CardDescription>
                  Tu actividad de moderación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Contenido Revisado</span>
                    <span className="text-lg font-semibold text-gray-900">1,234</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Reportes Manejados</span>
                    <span className="text-lg font-semibold text-gray-900">89</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-500">Acciones Tomadas</span>
                    <span className="text-lg font-semibold text-gray-900">45</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Actividad Reciente</CardTitle>
                <CardDescription>
                  Tus últimas acciones de moderación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Revisado post #1234</p>
                      <p className="text-xs text-gray-500">hace 2 horas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Aprobado registro de usuario</p>
                      <p className="text-xs text-gray-500">hace 4 horas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Eliminado contenido inapropiado</p>
                      <p className="text-xs text-gray-500">hace 6 horas</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Pautas de Moderación</CardTitle>
                <CardDescription>
                  Pautas importantes para la moderación
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Siempre seguir las pautas de la comunidad al moderar contenido</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Ser justo y consistente en tus decisiones de moderación</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Documentar las acciones tomadas para transparencia</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Escalar problemas complejos a administradores</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="text-amber-500 mt-1">•</span>
                      <span>Mantener comunicación profesional con usuarios</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BoardModerator;
