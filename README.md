# Portafolio Personal - Ignacio Muñoz Oyarzo


## Tecnologías Utilizadas
* **React + Vite:** Entorno de desarrollo rápido y optimizado.
* **Ant Design (Antd):** Librería principal para la consistencia visual y componentes de interfaz (UI).
* **Hooks de React:** Uso intensivo de `useState` y `useEffect` para la lógica y validación de estado en el lado del cliente.
* **Vitest & React Testing Library:** Suite de pruebas automatizadas para garantizar la estabilidad de los componentes críticos.


##  Arquitectura
El proyecto fue construido siguiendo estrictamente la metodología **Atomic Design**, dividiendo la interfaz jerárquicamente en:
* **Átomos:** Componentes básicos e indivisibles (ej. Títulos de sección, Íconos).
* **Moléculas:** Agrupaciones simples de átomos con una responsabilidad única (ej. Tarjetas de proyectos, Tarjetas de línea de tiempo).
* **Organismos:** Secciones complejas, funcionales e independientes que agrupan moléculas (ej. Sección Personal, Sección Contacto).
* **Plantillas (Layouts):** Componentes estructurales que definen la distribución y el esqueleto general de la aplicación en la pantalla.

## Instrucciones de Instalación y Ejecución

Para instalar las dependencias y levantar el proyecto en un entorno local, se deben seguir estrictamente estos pasos:

### 1. Clonar el repositorio
Abre tu terminal y ejecuta el siguiente comando para descargar el código:
```bash
git clone [https://github.com/nashoppp/MiPortafolio.git](https://github.com/nashoppp/MiPortafolio.git)
```

### 2. Entrar a la carpeta del proyecto

```bash
cd PortafolioReact
```

### 3. Instalar las dependencias

```bash
npm install
```

### 4. Levantar el servidor local

```bash
npm run dev
```

### 5. Ver las pruebas (Testing)

```bash
npx vitest
```