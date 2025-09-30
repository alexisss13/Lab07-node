# 🔐 AuthJWT - Sistema de Autenticación con JWT

<div align="center">
  <img src="https://cdn.worldvectorlogo.com/logos/jwt-3.svg" alt="JWT Logo" width="120" height="120">
  
  **Una aplicación full-stack moderna con autenticación JWT y gestión de roles**
  
  [![React](https://img.shields.io/badge/React-19.1.1-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
  [![Node.js](https://img.shields.io/badge/Node.js-Express-green?style=for-the-badge&logo=node.js)](https://nodejs.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
  [![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens)](https://jwt.io/)
</div>

---

## 📋 Descripción del Proyecto

**AuthJWT** es una aplicación web completa que demuestra un sistema de autenticación robusto con **JSON Web Tokens (JWT)** y gestión de roles dinámica. La aplicación está construida con las tecnologías más modernas del ecosistema JavaScript.

### 🎯 Características Principales

- ✅ **Autenticación JWT** completa con tokens seguros
- ✅ **Gestión de roles** (Usuario, Moderador, Administrador)
- ✅ **Validación frontend** con React Hook Form + Zod
- ✅ **Navegación dinámica** que cambia según el rol del usuario
- ✅ **Diseño moderno** con Tailwind CSS y animaciones
- ✅ **API RESTful** con Express.js y Sequelize
- ✅ **Interfaz en español** completamente traducida

---

## 🏗️ Arquitectura del Proyecto

```
📁 AuthJWT/
├── 📁 frontend/          # Aplicación React (Cliente)
│   ├── 📁 src/
│   │   ├── 📁 components/    # Componentes reutilizables
│   │   ├── 📁 pages/         # Páginas de la aplicación
│   │   ├── 📁 context/       # Context API para estado global
│   │   ├── 📁 services/      # Servicios de API
│   │   └── 📁 routes/        # Rutas protegidas
│   └── 📄 package.json
├── 📁 app/              # Backend Node.js (Servidor)
│   ├── 📁 controllers/      # Controladores de rutas
│   ├── 📁 models/          # Modelos de Sequelize
│   ├── 📁 routes/          # Definición de rutas
│   ├── 📁 middlewares/     # Middlewares de autenticación
│   └── 📁 config/          # Configuración de BD y JWT
├── 📄 server.js          # Servidor principal
└── 📄 package.json
```

---

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 19.1.1** - Biblioteca de UI
- **Vite** - Herramienta de construcción
- **Tailwind CSS 4** - Framework de CSS
- **React Hook Form** - Manejo de formularios
- **Zod** - Validación de esquemas
- **Framer Motion** - Animaciones
- **React Router DOM** - Enrutamiento

### Backend
- **Node.js** - Runtime de JavaScript
- **Express.js** - Framework web
- **Sequelize** - ORM para base de datos
- **JWT (jsonwebtoken)** - Autenticación con tokens
- **bcryptjs** - Encriptación de contraseñas

### Base de Datos
- **MySQL/PostgreSQL/SQLite** - Base de datos relacional

---

## 📦 Instalación y Configuración

### Prerrequisitos
- Node.js (v16 o superior)
- npm o yarn
- Base de datos (MySQL/PostgreSQL/SQLite)

### 1. Clonar el Repositorio
```bash
git clone https://github.com/tu-usuario/authjwt.git
cd authjwt
```

### 2. Configurar el Backend
```bash
# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env
# Editar .env con tus configuraciones de base de datos
```

### 3. Configurar Base de Datos
```bash
# Crear base de datos
# Configurar conexión en app/config/db.config.js

# Iniciar servidor backend
node server.js
```

### 4. Configurar el Frontend
```bash
# Navegar a la carpeta frontend
cd frontend

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

---

## 🎮 Uso de la Aplicación

### Usuarios de Prueba
La aplicación incluye usuarios predefinidos para testing:

| Rol | Usuario | Contraseña | Acceso |
|-----|---------|------------|--------|
| **Usuario** | `user1` | `user123` | Panel de Usuario |
| **Moderador** | `mod1` | `mod123` | Panel de Usuario + Moderador |
| **Administrador** | `admin1` | `admin123` | Todos los paneles |

### Flujo de Uso
1. **Registro/Login** - Crea una cuenta o inicia sesión
2. **Navegación Dinámica** - La barra de navegación cambia según tu rol
3. **Paneles Específicos** - Accede a funciones según tus permisos

---

## 🔐 Sistema de Roles

### Usuario Normal
- ✅ Acceso a panel personal
- ✅ Gestión de perfil
- ❌ Sin acceso a funciones administrativas

### Moderador
- ✅ Todas las funciones de Usuario
- ✅ Panel de moderación
- ✅ Gestión de contenido
- ❌ Sin acceso a configuración del sistema

### Administrador
- ✅ Todas las funciones anteriores
- ✅ Panel de administración
- ✅ Gestión de usuarios y roles
- ✅ Estadísticas del sistema

---

## 🛠️ API Endpoints

### Autenticación
```http
POST /api/auth/signup     # Registro de usuario
POST /api/auth/signin     # Inicio de sesión
```

### Rutas Protegidas
```http
GET /api/test/user        # Solo usuarios autenticados
GET /api/test/mod         # Solo moderadores
GET /api/test/admin       # Solo administradores
```

---

## 📸 Capturas de Pantalla

### Página de Login
![Login Page](screenshots/login.png)

### Panel de Usuario
![User Dashboard](screenshots/user-dashboard.png)

### Panel de Administrador
![Admin Dashboard](screenshots/admin-dashboard.png)

---

## 🧪 Testing

### Crear Usuarios con Roles Específicos
```bash
# Usuario Administrador
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"admin","email":"admin@test.com","password":"admin123","roles":["admin"]}'

# Usuario Moderador
curl -X POST http://localhost:3000/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{"username":"moderator","email":"mod@test.com","password":"mod123","roles":["moderator"]}'
```

---

## 📁 Estructura de Archivos Detallada

```
📁 src/
├── 📁 components/
│   ├── 📁 ui/                # Componentes de UI reutilizables
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── Card.jsx
│   ├── Navbar.jsx            # Barra de navegación dinámica
│   └── Layout.jsx            # Layout principal
├── 📁 pages/
│   ├── LoginPage.jsx         # Página de inicio de sesión
│   ├── RegisterPage.jsx      # Página de registro
│   ├── BoardUser.jsx         # Panel de usuario
│   ├── BoardModerator.jsx    # Panel de moderador
│   ├── BoardAdmin.jsx        # Panel de administrador
│   └── ProfilePage.jsx       # Página de perfil
├── 📁 context/
│   └── AuthContext.jsx       # Contexto de autenticación
├── 📁 services/
│   └── auth.service.js       # Servicios de API
└── 📁 routes/
    └── PrivateRoute.jsx      # Componente de ruta protegida
```

---

## 🔧 Configuración Avanzada

### Variables de Entorno
```env
# Backend (.env)
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=authjwt_db
JWT_SECRET=tu_jwt_secret_muy_seguro
PORT=3000

# Frontend
VITE_API_URL=http://localhost:3000/api
```

### Personalización de Roles
Para agregar nuevos roles, modifica:
1. `app/models/index.js` - Agregar rol a `ROLES`
2. `app/controllers/auth.controller.js` - Lógica de asignación
3. `frontend/src/components/Navbar.jsx` - Lógica de navegación

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**Tu Nombre**
- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- LinkedIn: [Tu Perfil](https://linkedin.com/in/tu-perfil)

---

## 🙏 Agradecimientos

- [JWT.io](https://jwt.io/) por la documentación de JWT
- [Tailwind CSS](https://tailwindcss.com/) por el framework de estilos
- [React](https://reactjs.org/) por la biblioteca de UI
- [Express.js](https://expressjs.com/) por el framework de backend

---

<div align="center">
  <p>Hecho con ❤️ usando React, Node.js y JWT</p>
  <p>⭐ ¡Dale una estrella si te gusta el proyecto!</p>
</div>
