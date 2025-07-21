# Portfolio

#Contactame 
Linkedin:
Correo: carloszuluagag7codinino@gmail.com

# Portafolio Java Backend Developer

Este es un portafolio profesional minimalista para un desarrollador backend especializado en Java y Spring Boot. El proyecto está construido con **React**, utiliza **Tailwind CSS** para estilos y es completamente responsive y moderno.

## Características

- **Secciones**: Inicio, Sobre mí, Habilidades, Proyectos, Contacto y Footer.
- **Diseño minimalista**: Paleta de colores oscuros (negro mate, azul oscuro, rojo Java).
- **Animaciones**: Uso de [Framer Motion](https://www.framer.com/motion/) para transiciones suaves.
- **Componentes reutilizables**: Skills, Projects, Contact, About, Header, Footer, Hero, etc.
- **Formulario de contacto**: Integrado con [EmailJS](https://www.emailjs.com/) y validación con [react-hook-form](https://react-hook-form.com/).
- **Responsive**: Adaptado para móviles, tablets y escritorio.
- **Iconografía profesional**: Uso de [react-icons](https://react-icons.github.io/react-icons/) para tecnologías y redes sociales.
- **Descarga de CV**: Botón para descargar el currículum en PDF.
- **Modo oscuro**: Estilos preparados para dark mode (aunque el switch fue removido para simplicidad).

## Estructura de Carpetas

```
src/
│
├── components/
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── Hero.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   └── SkillBar.jsx
│
├── constants/
│   └── skillsData.jsx
│
├── App.jsx
├── App.css
└── index.js
```

## Instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/java-backend-portfolio.git
   cd java-backend-portfolio
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno para EmailJS:**

   Crea un archivo `.env` en la raíz del proyecto con:

   ```
   REACT_APP_EMAILJS_SERVICE_ID=tu_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=tu_template_id
   REACT_APP_EMAILJS_USER_ID=tu_user_id
   ```

4. **Inicia el servidor de desarrollo:**
   ```bash
   npm start
   ```

## Personalización

- **Imágenes**: Coloca tus imágenes de perfil y proyectos en `public/images/`.
- **Datos personales**: Edita los archivos en `src/constants/` y los props de los componentes para tu información.
- **Redes sociales**: Modifica los enlaces en los componentes correspondientes.
- **CV**: Reemplaza `public/cv-java-developer.pdf` por tu propio archivo.

## Tecnologías Usadas

- React
- Tailwind CSS
- Framer Motion
- React Icons
- EmailJS
- React Hook Form

## Despliegue

Puedes desplegar este portafolio fácilmente en [Vercel](https://vercel.com/), [Netlify](https://www.netlify.com/) o cualquier servicio de hosting para aplicaciones React.


**Desarrollado por Carlos Zuluaga**
