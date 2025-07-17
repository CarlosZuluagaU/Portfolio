// src/constants/index.js

// Array de proyectos para tu portafolio
export const projects = [
  {
    title: "API de Pagos",
    description: "Microservicio para procesamiento de transacciones financieras con alta disponibilidad y escalabilidad.",
    tags: ["Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker"], // Puedes expandir las tags
    githubUrl: "https://github.com/tu-usuario/api-pagos", // ¡Actualiza con tu URL real!
    liveDemoUrl: "https://demo.tusitio.com/api-pagos" // Opcional: URL de una demo si la tienes
  },
  {
    title: "Plataforma de E-commerce Backend",
    description: "Desarrollo del backend para una plataforma de comercio electrónico, incluyendo gestión de productos, usuarios y pedidos.",
    tags: ["Java", "Spring Cloud", "Microservicios", "MongoDB", "Kubernetes"],
    githubUrl: "https://github.com/tu-usuario/ecommerce-backend",
    liveDemoUrl: ""
  },
  {
    title: "Sistema de Gestión de Clientes (CRM)",
    description: "Aplicación para el seguimiento y gestión de interacciones con clientes, construida con foco en la usabilidad y rendimiento.",
    tags: ["Java", "Spring MVC", "Hibernate", "MySQL", "Thymeleaf"],
    githubUrl: "https://github.com/tu-usuario/crm-system",
    liveDemoUrl: ""
  },
  // ¡Añade más proyectos aquí!
  // Asegúrate de actualizar las URLs de GitHub y Demo.
];

// Si tienes otras constantes globales que no son habilidades ni proyectos, puedes añadirlas aquí.
// Ejemplo:
// export const contactEmail = "tu.email@example.com";
// export const resumeUrl = "/documents/tu-cv.pdf";