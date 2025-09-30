# 🤝 Guía de Contribución - AuthJWT

¡Gracias por tu interés en contribuir a AuthJWT! Este documento proporciona pautas para contribuir al proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Contribuir](#cómo-contribuir)
- [Configuración del Entorno](#configuración-del-entorno)
- [Convenciones de Código](#convenciones-de-código)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Reportar Issues](#reportar-issues)

## 🤝 Código de Conducta

Este proyecto sigue un código de conducta. Al participar, se espera que mantengas un ambiente respetuoso y colaborativo.

## 🚀 Cómo Contribuir

### Tipos de Contribuciones

- 🐛 **Reportar bugs**
- ✨ **Sugerir nuevas características**
- 📝 **Mejorar documentación**
- 🔧 **Arreglar bugs**
- 🎨 **Mejorar la UI/UX**
- ⚡ **Optimizar rendimiento**

### Configuración del Entorno

1. **Fork el repositorio**
   ```bash
   git clone https://github.com/alexisss13/Lab07-node.git
   cd Lab07-node
   ```

2. **Instalar dependencias**
   ```bash
   # Backend
   npm install
   
   # Frontend
   cd frontend
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   cp env.example .env
   # Editar .env con tus configuraciones
   ```

4. **Crear una rama para tu feature**
   ```bash
   git checkout -b feature/nombre-de-tu-feature
   ```

## 📝 Convenciones de Código

### Frontend (React)
- Usar **componentes funcionales** con hooks
- **TypeScript** cuando sea posible
- **ESLint** y **Prettier** para formato
- **Nombres descriptivos** para variables y funciones
- **Comentarios** para lógica compleja

### Backend (Node.js)
- **async/await** en lugar de callbacks
- **Manejo de errores** consistente
- **Validación de entrada** en todas las rutas
- **Documentación JSDoc** para funciones

### Commits
Usar el formato **Conventional Commits**:
```
feat: agregar nueva funcionalidad
fix: corregir bug
docs: actualizar documentación
style: cambios de formato
refactor: refactorizar código
test: agregar o corregir tests
chore: tareas de mantenimiento
```

## 🔄 Proceso de Pull Request

1. **Crear una rama descriptiva**
   ```bash
   git checkout -b feature/autenticacion-two-factor
   ```

2. **Hacer commits atómicos**
   ```bash
   git add .
   git commit -m "feat: implementar autenticación de dos factores"
   ```

3. **Push a tu fork**
   ```bash
   git push origin feature/autenticacion-two-factor
   ```

4. **Crear Pull Request**
   - Título descriptivo
   - Descripción detallada de los cambios
   - Referenciar issues relacionados
   - Incluir capturas de pantalla si aplica

### Template de Pull Request

```markdown
## 📝 Descripción
Breve descripción de los cambios realizados.

## 🔗 Issues Relacionados
- Closes #123
- Relates to #456

## 🧪 Testing
- [ ] Pruebas unitarias pasan
- [ ] Pruebas de integración pasan
- [ ] Pruebas manuales realizadas

## 📸 Capturas de Pantalla
(Agregar si aplica)

## ✅ Checklist
- [ ] Código sigue las convenciones del proyecto
- [ ] Documentación actualizada
- [ ] No hay conflictos de merge
- [ ] Commits atómicos y descriptivos
```

## 🐛 Reportar Issues

### Antes de Crear un Issue

1. **Buscar issues existentes**
2. **Verificar que es un bug real**
3. **Recopilar información relevante**

### Template de Bug Report

```markdown
## 🐛 Descripción del Bug
Descripción clara y concisa del problema.

## 🔄 Pasos para Reproducir
1. Ir a '...'
2. Hacer clic en '...'
3. Ver error

## 🎯 Comportamiento Esperado
Qué debería pasar en su lugar.

## 📸 Capturas de Pantalla
(Agregar si aplica)

## 🖥️ Información del Sistema
- OS: [ej. Windows 10, macOS 12]
- Navegador: [ej. Chrome 96, Firefox 94]
- Versión de Node: [ej. 16.14.0]

## 📋 Contexto Adicional
Cualquier otra información relevante.
```

## 🏷️ Etiquetas de Issues

- `bug` - Algo no funciona
- `enhancement` - Nueva funcionalidad
- `documentation` - Mejoras en documentación
- `good first issue` - Bueno para principiantes
- `help wanted` - Necesita ayuda
- `priority: high` - Alta prioridad
- `priority: low` - Baja prioridad

## 📚 Recursos Adicionales

### Documentación
- [React Docs](https://reactjs.org/docs)
- [Express.js Docs](https://expressjs.com/)
- [JWT.io](https://jwt.io/)
- [Tailwind CSS](https://tailwindcss.com/docs)

### Herramientas de Desarrollo
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/)
- [Postman](https://www.postman.com/) - Para testing de API
- [VS Code](https://code.visualstudio.com/) - Editor recomendado

## 🎉 Reconocimientos

Los contribuidores serán reconocidos en:
- README.md
- CHANGELOG.md
- Release notes

## 📞 Contacto

Si tienes preguntas sobre cómo contribuir:
- Abre un issue con la etiqueta `question`
- Contacta al mantenedor del proyecto

---

¡Gracias por contribuir a AuthJWT! 🚀
