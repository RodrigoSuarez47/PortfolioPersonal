export interface ProjectImage {
  src: string
  alt: string
  description?: string
}

export interface Project {
  id: number
  title: string
  status: string
  description: string
  images: ProjectImage[]
  technologies: string[]
  longDescription: string
  features: string[]
  demoUrl: string | null
  githubUrl: string | null
}

export const projects: readonly Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión Mayorista Javier",
    status: "En producción",
    description:
      "Sistema de gestión que reúne artículos, stock, proveedores, clientes y pedidos en una misma operación. Desarrollé una API en C# y una interfaz MVC para consultar información comercial, generar pedidos en PDF y visualizar reportes.",
    images: [
      { src: "/images/SistemaMayoristaJavier/favicon.svg", alt: "Carátula del Proyecto", description: "Icono del sistema de gestión Mayorista Javier." },
      { src: "/images/SistemaMayoristaJavier/MayoristaJavier-Login.png", alt: "Login", description: "Pantalla de inicio de sesión." },
      { src: "/images/SistemaMayoristaJavier/MayoristaJavier-Articles.png", alt: "Artículos", description: "Gestión de artículos y stock." },
      { src: "/images/SistemaMayoristaJavier/MayoristaJavier-Suppliers.png", alt: "Proveedores", description: "Administración de proveedores." },
      { src: "/images/SistemaMayoristaJavier/MayoristaJavier-Orders.png", alt: "Pedidos", description: "Módulo de pedidos con generación automática de órdenes en PDF." },
      { src: "/images/SistemaMayoristaJavier/MayoristaJavier-Dashboard.png", alt: "Reportes", description: "Dashboard interactivo con reportes y métricas clave." },
      { src: "/images/SistemaMayoristaJavier/MayoristaJavier-Users.png", alt: "Usuarios", description: "Gestión de usuarios del sistema." },
    ],
    technologies: ["C#", "Entity Framework Core", ".NET 8", "PostgreSQL", "JWT", "BCrypt.NET", "PDFSharp", "Razor Views", "Tabulator", "Chart.js", "Bootstrap", "Neon", "Somee"],
    longDescription: "Sistema integral de gestión mayorista que incluye una API RESTful desarrollada en C# con autenticación JWT, un frontend MVC con vistas Razor, tablas interactivas y visualización de datos. Aporta trazabilidad de procesos, mejor control de stock y toma de decisiones basada en métricas.",
    features: [
      "API RESTful con endpoints protegidos mediante JWT",
      "Sistema de autenticación seguro con BCrypt.NET",
      "Generación automática de órdenes de pedido en PDF",
      "Frontend MVC con vistas Razor",
      "Tablas interactivas con Tabulator para gestión de datos",
      "Gráficos dinámicos con Chart.js para análisis",
      "Base de datos PostgreSQL alojada en Neon",
      "Hosting de la aplicación en Somee",
      "Dashboard de métricas y reportes",
      "Sistema de toma de pedidos e impresión de los mismos",
    ],
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 2,
    title: "Web de Clientes para Mayorista Javier (PWA)",
    status: "En producción",
    description:
      "Catálogo digital conectado al sistema de gestión de Mayorista Javier. Permite buscar productos y consultar precios desde el celular o la computadora, con una experiencia instalable como PWA.",
    images: [
      { src: "/images/WebClientesMayoristaJavier/favicon.svg", alt: "Favicon del proyecto", description: "Icono / carátula del PWA." },
      { src: "/images/WebClientesMayoristaJavier/PWA desktop.png", alt: "PWA Desktop", description: "Vista del PWA en escritorio." },
    ],
    technologies: ["TypeScript", "React", "Next.js", "PWA (Progressive Web App)", "SPA (Single Page App)", "TailwindCSS", "Vercel"],
    longDescription: "Aplicación web progresiva para consultar el catálogo de Mayorista Javier desde distintos dispositivos. Conecta la experiencia de los clientes con la información del sistema de gestión y ofrece una interfaz desarrollada con React y TypeScript.",
    features: [
      "Catálogo de productos con búsqueda y filtros",
      "Consulta de productos y precios del catálogo",
      "Integración con el sistema de gestión de la empresa",
      "Desarrollo completo en TypeScript",
      "Interfaz moderna y responsive con React + TailwindCSS",
      "Optimización para SEO y rendimiento",
      "Capacidad para manejar un creciente número de usuarios y productos",
      "Instalación nativa en dispositivos móviles y desktop",
      "Despliegue en Vercel",
    ],
    demoUrl: "https://mayoristajavier.vercel.app/",
    githubUrl: null,
  },
  {
    id: 3,
    title: "Gestor de Salas de Reunión — Jaume & Sere",
    status: "En producción",
    description:
      "Proyecto final de carrera para gestionar salas, sedes y reservas de reunión. Integra autenticación corporativa con Active Directory y notificaciones de Outlook mediante Microsoft Graph, con backend .NET y frontend React.",
    images: [
      { src: "/images/GestorSalasJ&S/JYS_TRANSP.png", alt: "Logo Jaume & Sere", description: "" },
      { src: "/images/GestorSalasJ&S/J&S-Calendario.png", alt: "Vista de Calendario", description: "Vista de calendario con reservas de salas." },
      { src: "/images/GestorSalasJ&S/J&S-ListadoMisReservas.png", alt: "Listado de Mis Reservas", description: "Listado de reservas realizadas por el usuario." },
      { src: "/images/GestorSalasJ&S/J&S-Sedes.png", alt: "Administración de Sedes", description: "Administración de sedes del sistema." },
      { src: "/images/GestorSalasJ&S/J&S-Salas.png", alt: "Administración de Salas", description: "Administración de salas de reunión." },
      { src: "/images/GestorSalasJ&S/J&S-EquipamientoSalas.png", alt: "Administración de Equipamiento", description: "Administración de equipamiento disponible en las salas de reunión." },
      { src: "/images/GestorSalasJ&S/J&S-ParametrosSistema.png", alt: "Administración de Parámetros del Sistema", description: "Administración de parámetros del sistema." },
      { src: "/images/GestorSalasJ&S/J&S-Admin-usoIndebido.png", alt: "Reportes de Uso Indebido de Salas", description: "Reportes de uso indebido de salas de reunión." },
      { src: "/images/GestorSalasJ&S/J&S-VistaTablet.png", alt: "Vista en Tableta", description: "Vista del sistema en tableta." },
    ],
    technologies: ["C#", ".NET 8", "Entity Framework Core", "MS SQL Server Express", "Active Directory (Windows Server)", "Microsoft Graph / Outlook", "React", "Vite", "TypeScript", "TailwindCSS", "Azure"],
    longDescription: "Proyecto final de carrera (Analista en Tecnologías de la Información). Sistema integral para la gestión de reservas de salas de reunión. Backend desarrollado en C# con .NET 8, Entity Framework Core y SQL Server Express, con integración a Active Directory para autenticación y roles. Notificaciones automáticas mediante Outlook (Microsoft Graph). Frontend en React + Vite con diseño responsive y despliegue en Azure. Enfocado en eficiencia operativa y mejor uso de recursos compartidos.",
    features: [
      "API RESTful en .NET 8 para manejo de salas y reservas",
      "Entity Framework Core como ORM con patrón Repository",
      "Integración con Active Directory (autenticación y autorización por roles)",
      "Notificaciones automáticas vía Outlook (Microsoft Graph)",
      "Frontend: React + Vite + TypeScript, 100% responsive",
      "Dashboard con métricas de uso de salas",
      "Historial de reservas con auditoría de cambios",
      "Deploy en Azure App Service"
    ],
    demoUrl: null,
    githubUrl: null,
  },
  {
    id: 4,
    title: "FyV Traslados",
    status: "En producción",
    description: "Sitio comercial para presentar los servicios de traslado, explicar cómo contratar y facilitar consultas por WhatsApp. Construido con Astro y Tailwind CSS, con páginas de servicios y una estructura preparada para buscadores.",
    images: [],
    technologies: ["Astro", "TypeScript", "Tailwind CSS", "Vercel"],
    longDescription: "Desarrollo de la presencia web de FyV Traslados: servicios, tarifas, proceso de contratación y contacto. La implementación combina componentes reutilizables, contenido orientado al servicio y SEO técnico con sitemap y datos estructurados.",
    features: ["Presentación de servicios y tarifas", "Contacto y cotización por WhatsApp", "Diseño adaptable a celulares y escritorio", "Sitemap y datos estructurados"],
    demoUrl: "https://fyv-traslados.vercel.app/",
    githubUrl: "https://github.com/RodrigoSuarez47/fyv-traslados",
  },
]
