# Arpegio Frontend 🎸

Interfaz de usuario para la tienda de instrumentos musicales Arpegio.

Este proyecto está construido con **React + Vite** para ofrecer una experiencia de desarrollo ultrarrápida y un empaquetado optimizado para producción.

## 📦 Dependencias Principales

El proyecto utiliza un conjunto moderno de herramientas para agilizar el desarrollo:

*   **React 19 & Vite 8:** El núcleo de la aplicación, proporcionando un renderizado veloz y *Hot Module Replacement* (HMR).
*   **Tailwind CSS v4:** Framework de CSS utilitario para estilizar los componentes rápidamente, manteniendo un diseño limpio y moderno.
*   **React Router DOM:** Para la navegación del lado del cliente entre las distintas vistas (Catálogo, Login, etc.).
*   **React Hook Form:** Manejo eficiente del estado de los formularios y validaciones (esencial para los flujos de registro y login).
*   **Axios:** Cliente HTTP configurado para consumir la API REST del backend de forma limpia.
*   **JWT Decode:** Utilidad para decodificar el token de sesión devuelto por el backend y extraer la información y roles del usuario.
*   **React Hot Toast:** Para mostrar notificaciones (éxito, errores de validación) elegantes y no intrusivas.
*   **React Icons:** Librería que unifica íconos de múltiples paquetes para la interfaz gráfica.
*   **Oxlint:** Linter ultrarrápido configurado para mantener la calidad y consistencia del código.

## 🚀 Ejecución en Local

1. **Clonar el repositorio:**
   ```bash
   git clone <tu-url-del-repo-frontend>
   cd arpegiofrontend
2. **Instalar dependencias:**

```bash
  npm install
```
**Configurar variables de entorno:**
Crea un archivo .env en la raíz del proyecto para conectar con el backend:

_Fragmento de código:_

VITE_BACKEND_URL=http://localhost:8080/api

3. **Iniciar el servidor de desarrollo:** 

```bash
  npm run dev
```

El frontend estará disponible normalmente en 🌐

http://localhost:5173


### Por:
_Johan Yahir Villalpando Ibarra_

Ingeniero en Desarrollo y Gestión de Software
