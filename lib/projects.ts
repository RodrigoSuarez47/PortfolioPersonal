import type { Locale } from "@/lib/i18n"

export interface ProjectImage {
  src: string
  alt: string
  description?: string
}

export interface CaseStudy {
  problem: string
  role: string
  decisions: string
  result: string
  highlight: string
  evidence: string
}

export interface Project {
  caseStudy: CaseStudy
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

const projectsByLocale: Record<Locale, readonly Project[]> = {
  "es": [
    {
      "id": 1,
      "title": "Sistema de Gestión Mayorista Javier",
      "status": "En producción",
      "description": "Sistema de gestión que reúne artículos, stock, proveedores, clientes y pedidos en una misma operación. Desarrollé una API en C# y una interfaz MVC para consultar información comercial, generar pedidos en PDF y visualizar reportes.",
      "images": [
        {
          "src": "/images/SistemaMayoristaJavier/favicon.svg",
          "alt": "Carátula del Proyecto",
          "description": "Icono del sistema de gestión Mayorista Javier."
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Login.png",
          "alt": "Login",
          "description": "Pantalla de inicio de sesión."
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Articles.png",
          "alt": "Artículos",
          "description": "Gestión de artículos y stock."
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Suppliers.png",
          "alt": "Proveedores",
          "description": "Administración de proveedores."
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Orders.png",
          "alt": "Pedidos",
          "description": "Módulo de pedidos con generación automática de órdenes en PDF."
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Dashboard.png",
          "alt": "Reportes",
          "description": "Dashboard interactivo con reportes y métricas clave."
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Users.png",
          "alt": "Usuarios",
          "description": "Gestión de usuarios del sistema."
        }
      ],
      "technologies": [
        "C#",
        "Entity Framework Core",
        ".NET 8",
        "PostgreSQL",
        "JWT",
        "BCrypt.NET",
        "PDFSharp",
        "Razor Views",
        "Tabulator",
        "Chart.js",
        "Bootstrap",
        "Neon",
        "Somee"
      ],
      "longDescription": "Sistema integral de gestión mayorista que incluye una API RESTful desarrollada en C# con autenticación JWT, un frontend MVC con vistas Razor, tablas interactivas y visualización de datos. Aporta trazabilidad de procesos, mejor control de stock y toma de decisiones basada en métricas.",
      "features": [
        "API RESTful con endpoints protegidos mediante JWT",
        "Sistema de autenticación seguro con BCrypt.NET",
        "Generación automática de órdenes de pedido en PDF",
        "Frontend MVC con vistas Razor",
        "Tablas interactivas con Tabulator para gestión de datos",
        "Gráficos dinámicos con Chart.js para análisis",
        "Base de datos PostgreSQL alojada en Neon",
        "Hosting de la aplicación en Somee",
        "Dashboard de métricas y reportes",
        "Sistema de toma de pedidos e impresión de los mismos"
      ],
      "demoUrl": null,
      "githubUrl": null,
      "caseStudy": {
        "problem": "Los pedidos se tomaban en papel y no había un registro confiable de existencias ni de precios actualizados. Sin información consolidada de ventas diarias o mensuales, las compras a proveedores podían generar sobrestock o faltantes.",
        "role": "Desarrollo del sistema de gestión y de la API que conecta inventario, compras, ventas, pedidos y reportes.",
        "decisions": "Centralizar la información en una API .NET con PostgreSQL, registrar compras y ventas para actualizar el inventario y presentar métricas y KPIs en un dashboard. Incorporar la carga de pedidos a partir del mensaje de WhatsApp generado por la web de clientes.",
        "result": "Inventario actualizado con las compras y ventas registradas, visibilidad de las ventas y datos para planificar reposiciones. Los pedidos se cargan copiando y pegando el mensaje recibido por WhatsApp y quedan listos para preparar y entregar.",
        "highlight": "≈15 minutos ahorrados por pedido",
        "evidence": "Estimación del negocio para el flujo integrado de catálogo web y sistema de gestión."
      }
    },
    {
      "id": 2,
      "title": "Web de Clientes para Mayorista Javier (PWA)",
      "status": "En producción",
      "description": "Catálogo digital conectado al sistema de gestión de Mayorista Javier. Los clientes consultan productos y precios, arman su pedido y lo envían por WhatsApp para que el negocio lo cargue en segundos.",
      "images": [
        {
          "src": "/images/WebClientesMayoristaJavier/favicon.svg",
          "alt": "Favicon del proyecto",
          "description": "Icono / carátula del PWA."
        },
        {
          "src": "/images/WebClientesMayoristaJavier/PWA desktop.png",
          "alt": "PWA Desktop",
          "description": "Vista del PWA en escritorio."
        }
      ],
      "technologies": [
        "TypeScript",
        "React",
        "Next.js",
        "PWA (Progressive Web App)",
        "SPA (Single Page App)",
        "TailwindCSS",
        "Vercel"
      ],
      "longDescription": "Aplicación web progresiva para consultar el catálogo de Mayorista Javier desde distintos dispositivos. Conecta la experiencia de los clientes con la información del sistema de gestión y ofrece una interfaz desarrollada con React y TypeScript.",
      "features": [
        "Armado de pedidos y envío del mensaje por WhatsApp",
        "Catálogo de productos con búsqueda y filtros",
        "Consulta de productos y precios del catálogo",
        "Integración con el sistema de gestión de la empresa",
        "Desarrollo completo en TypeScript",
        "Interfaz moderna y responsive con React + TailwindCSS",
        "Optimización para SEO y rendimiento",
        "Capacidad para manejar un creciente número de usuarios y productos",
        "Instalación nativa en dispositivos móviles y desktop",
        "Despliegue en Vercel"
      ],
      "demoUrl": "https://mayoristajavier.vercel.app/",
      "githubUrl": null,
      "caseStudy": {
        "problem": "Los clientes no tenían un catálogo para consultar productos y precios. La información comercial estaba dispersa y los precios podían quedar desactualizados, mientras los pedidos se transcribían manualmente.",
        "role": "Desarrollo del catálogo web de clientes y su integración con el sistema de gestión de Mayorista Javier.",
        "decisions": "Conectar el catálogo con la información del sistema de gestión y ofrecer una PWA adaptable a distintos dispositivos. Permitir armar el pedido en la web y enviarlo como un mensaje de WhatsApp que el negocio puede copiar y pegar en el sistema.",
        "result": "Los clientes pueden consultar el catálogo y preparar pedidos desde la web. El negocio recibe el mensaje por WhatsApp y carga el pedido en segundos para su preparación y entrega.",
        "highlight": "Del catálogo al pedido en segundos",
        "evidence": "El ahorro de aproximadamente 15 minutos por pedido corresponde al mismo flujo integrado descrito en el sistema de gestión."
      }
    },
    {
      "id": 3,
      "title": "Gestor de Salas de Reunión — Jaume & Sere",
      "status": "En producción",
      "description": "Proyecto final de carrera para gestionar salas, sedes y reservas de reunión. Integra autenticación corporativa con Active Directory y notificaciones de Outlook mediante Microsoft Graph, con backend .NET y frontend React.",
      "images": [
        {
          "src": "/images/GestorSalasJ&S/JYS_TRANSP.png",
          "alt": "Logo Jaume & Sere",
          "description": ""
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-Calendario.png",
          "alt": "Vista de Calendario",
          "description": "Vista de calendario con reservas de salas."
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-ListadoMisReservas.png",
          "alt": "Listado de Mis Reservas",
          "description": "Listado de reservas realizadas por el usuario."
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-Sedes.png",
          "alt": "Administración de Sedes",
          "description": "Administración de sedes del sistema."
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-Salas.png",
          "alt": "Administración de Salas",
          "description": "Administración de salas de reunión."
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-EquipamientoSalas.png",
          "alt": "Administración de Equipamiento",
          "description": "Administración de equipamiento disponible en las salas de reunión."
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-ParametrosSistema.png",
          "alt": "Administración de Parámetros del Sistema",
          "description": "Administración de parámetros del sistema."
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-Admin-usoIndebido.png",
          "alt": "Reportes de Uso Indebido de Salas",
          "description": "Reportes de uso indebido de salas de reunión."
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-VistaTablet.png",
          "alt": "Vista en Tableta",
          "description": "Vista del sistema en tableta."
        }
      ],
      "technologies": [
        "C#",
        ".NET 8",
        "Entity Framework Core",
        "MS SQL Server Express",
        "Active Directory (Windows Server)",
        "Microsoft Graph / Outlook",
        "React",
        "Vite",
        "TypeScript",
        "TailwindCSS",
        "Azure"
      ],
      "longDescription": "Proyecto final de carrera (Analista en Tecnologías de la Información). Sistema integral para la gestión de reservas de salas de reunión. Backend desarrollado en C# con .NET 8, Entity Framework Core y SQL Server Express, con integración a Active Directory para autenticación y roles. Notificaciones automáticas mediante Outlook (Microsoft Graph). Frontend en React + Vite con diseño responsive y despliegue en Azure. Enfocado en eficiencia operativa y mejor uso de recursos compartidos.",
      "features": [
        "API RESTful en .NET 8 para manejo de salas y reservas",
        "Entity Framework Core como ORM con patrón Repository",
        "Integración con Active Directory (autenticación y autorización por roles)",
        "Notificaciones automáticas vía Outlook (Microsoft Graph)",
        "Frontend: React + Vite + TypeScript, 100% responsive",
        "Dashboard con métricas de uso de salas",
        "Historial de reservas con auditoría de cambios",
        "Deploy en Azure App Service"
      ],
      "demoUrl": null,
      "githubUrl": null,
      "caseStudy": {
        "problem": "La agenda de las salas se llevaba en papel. La letra podía ser difícil de interpretar y algunas reservas no se cancelaban, por lo que las salas aparecían ocupadas aunque ya no fueran a utilizarse.",
        "role": "Participación en el análisis y desarrollo del sistema de reservas como proyecto final de carrera para Jaume & Sere.",
        "decisions": "Reemplazar la agenda de papel por un calendario centralizado, con gestión de reservas y cancelaciones. Integrar Active Directory para el acceso corporativo y Outlook mediante Microsoft Graph para las notificaciones, con API .NET y frontend React.",
        "result": "Según lo informado por la organización, se eliminaron las reservas que mantenían salas ocupadas incorrectamente. La agenda digital permite consultar y gestionar las reservas sin depender de anotaciones manuscritas.",
        "highlight": "Fin de las reservas que bloqueaban salas incorrectamente",
        "evidence": "Resultado informado por la organización."
      }
    },
    {
      "id": 4,
      "title": "FyV Traslados",
      "status": "En producción",
      "description": "Sitio comercial para presentar los servicios de traslado, explicar cómo contratar y facilitar consultas por WhatsApp. Construido con Astro y Tailwind CSS, con páginas de servicios y una estructura preparada para buscadores.",
      "images": [],
      "technologies": [
        "Astro",
        "TypeScript",
        "Tailwind CSS",
        "Vercel"
      ],
      "longDescription": "Desarrollo de la presencia web de FyV Traslados: servicios, tarifas, proceso de contratación y contacto. La implementación combina componentes reutilizables, contenido orientado al servicio y SEO técnico con sitemap y datos estructurados.",
      "features": [
        "Presentación de servicios y tarifas",
        "Contacto y cotización por WhatsApp",
        "Diseño adaptable a celulares y escritorio",
        "Sitemap y datos estructurados"
      ],
      "demoUrl": "https://fyv-traslados.vercel.app/",
      "githubUrl": "https://github.com/RodrigoSuarez47/fyv-traslados",
      "caseStudy": {
        "problem": "FyV necesitaba ganar visibilidad y reunir la explicación de su trabajo, sus servicios y su proceso de contratación en un único lugar.",
        "role": "Diseño y desarrollo de la página web comercial de FyV Traslados a partir de las necesidades del negocio.",
        "decisions": "Organizar servicios, proceso, tarifas y contacto en una web con Astro y componentes reutilizables. Incorporar consultas por WhatsApp, diseño adaptable y SEO técnico con sitemap y datos estructurados.",
        "result": "La empresa cuenta con un sitio publicado que reúne su propuesta y facilita compartir la información y contactar por WhatsApp.",
        "highlight": "Servicios y proceso en un solo lugar",
        "evidence": "Resultado: sitio web publicado con servicios, proceso y contacto centralizados."
      }
    }
  ],
  "en": [
    {
      "id": 1,
      "title": "Mayorista Javier Management System",
      "status": "In production",
      "description": "Business management system connecting products, inventory, suppliers, customers and orders. A C# API and MVC interface support purchasing, sales, PDF orders and business reporting.",
      "images": [
        {
          "src": "/images/SistemaMayoristaJavier/favicon.svg",
          "alt": "Mayorista Javier Management System — project logo",
          "description": ""
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Login.png",
          "alt": "Mayorista Javier Management System — application screenshot 1",
          "description": "Application screenshot"
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Articles.png",
          "alt": "Mayorista Javier Management System — application screenshot 2",
          "description": "Application screenshot"
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Suppliers.png",
          "alt": "Mayorista Javier Management System — application screenshot 3",
          "description": "Application screenshot"
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Orders.png",
          "alt": "Mayorista Javier Management System — application screenshot 4",
          "description": "Application screenshot"
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Dashboard.png",
          "alt": "Mayorista Javier Management System — application screenshot 5",
          "description": "Application screenshot"
        },
        {
          "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Users.png",
          "alt": "Mayorista Javier Management System — application screenshot 6",
          "description": "Application screenshot"
        }
      ],
      "technologies": [
        "C#",
        "Entity Framework Core",
        ".NET 8",
        "PostgreSQL",
        "JWT",
        "BCrypt.NET",
        "PDFSharp",
        "Razor Views",
        "Tabulator",
        "Chart.js",
        "Bootstrap",
        "Neon",
        "Somee"
      ],
      "longDescription": "Business management system connecting products, inventory, suppliers, customers and orders. A C# API and MVC interface support purchasing, sales, PDF orders and business reporting.",
      "features": [
        "JWT-protected REST API",
        "Authentication with BCrypt.NET",
        "PDF order generation",
        "MVC frontend with Razor views",
        "Interactive data tables with Tabulator",
        "Charts and business KPIs with Chart.js",
        "PostgreSQL database on Neon",
        "Application hosted on Somee",
        "Sales and business reporting",
        "Order entry and printing"
      ],
      "demoUrl": null,
      "githubUrl": null,
      "caseStudy": {
        "problem": "Orders were written on paper, with no reliable inventory records or up-to-date price list. Without consolidated daily or monthly sales figures, supplier purchases could lead to excess stock or shortages.",
        "role": "Development of the management system and API connecting inventory, purchases, sales, orders and reporting.",
        "decisions": "Centralize business data in a .NET API with PostgreSQL, update inventory from recorded purchases and sales, and display business metrics and KPIs in a dashboard. Support loading orders from the WhatsApp message generated by the customer website.",
        "result": "Inventory stays current with recorded purchases and sales. Sales reports provide information for replenishment decisions. Staff copy and paste incoming WhatsApp messages to load orders ready for picking and delivery.",
        "highlight": "≈15 minutes saved per order",
        "evidence": "Business estimate for the integrated catalog and management system workflow."
      }
    },
    {
      "id": 2,
      "title": "Mayorista Javier Customer Catalog (PWA)",
      "status": "In production",
      "description": "Digital catalog connected to Mayorista Javier’s management system. Customers browse products and prices, build an order and send it through WhatsApp so the business can load it in seconds.",
      "images": [
        {
          "src": "/images/WebClientesMayoristaJavier/favicon.svg",
          "alt": "Mayorista Javier Customer Catalog (PWA) — project logo",
          "description": ""
        },
        {
          "src": "/images/WebClientesMayoristaJavier/PWA desktop.png",
          "alt": "Mayorista Javier Customer Catalog (PWA) — application screenshot 1",
          "description": "Application screenshot"
        }
      ],
      "technologies": [
        "TypeScript",
        "React",
        "Next.js",
        "PWA (Progressive Web App)",
        "SPA (Single Page App)",
        "TailwindCSS",
        "Vercel"
      ],
      "longDescription": "Digital catalog connected to Mayorista Javier’s management system. Customers browse products and prices, build an order and send it through WhatsApp so the business can load it in seconds.",
      "features": [
        "Build orders and send them through WhatsApp",
        "Product catalog with search and filters",
        "Product and price lookup",
        "Integration with the business management system",
        "TypeScript implementation",
        "Responsive React and Tailwind CSS interface",
        "SEO and performance considerations",
        "Catalog designed to accommodate more products and users",
        "Installable PWA on mobile and desktop",
        "Deployment on Vercel"
      ],
      "demoUrl": "https://mayoristajavier.vercel.app/",
      "githubUrl": null,
      "caseStudy": {
        "problem": "Customers had no product catalog to consult. Product and price information was scattered and could become outdated, while orders had to be transcribed manually.",
        "role": "Development of the customer catalog and its integration with Mayorista Javier’s management system.",
        "decisions": "Connect the catalog to the management system’s product information and deliver a responsive PWA. Let customers build an order online and send a WhatsApp message that staff can copy and paste into the management system.",
        "result": "Customers browse the catalog and prepare their orders online. The business receives the WhatsApp message and loads the order in seconds, ready for picking and delivery.",
        "highlight": "From catalog to order in seconds",
        "evidence": "The approximately 15 minutes saved per order refers to the same integrated workflow described in the management system."
      }
    },
    {
      "id": 3,
      "title": "Meeting Room Booking — Jaume & Sere",
      "status": "In production",
      "description": "Final degree project for managing meeting rooms, locations and bookings. Integrates corporate sign-in with Active Directory and Outlook notifications through Microsoft Graph, using .NET and React.",
      "images": [
        {
          "src": "/images/GestorSalasJ&S/JYS_TRANSP.png",
          "alt": "Meeting Room Booking — Jaume & Sere — project logo",
          "description": ""
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-Calendario.png",
          "alt": "Meeting Room Booking — Jaume & Sere — application screenshot 1",
          "description": "Application screenshot"
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-ListadoMisReservas.png",
          "alt": "Meeting Room Booking — Jaume & Sere — application screenshot 2",
          "description": "Application screenshot"
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-Sedes.png",
          "alt": "Meeting Room Booking — Jaume & Sere — application screenshot 3",
          "description": "Application screenshot"
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-Salas.png",
          "alt": "Meeting Room Booking — Jaume & Sere — application screenshot 4",
          "description": "Application screenshot"
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-EquipamientoSalas.png",
          "alt": "Meeting Room Booking — Jaume & Sere — application screenshot 5",
          "description": "Application screenshot"
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-ParametrosSistema.png",
          "alt": "Meeting Room Booking — Jaume & Sere — application screenshot 6",
          "description": "Application screenshot"
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-Admin-usoIndebido.png",
          "alt": "Meeting Room Booking — Jaume & Sere — application screenshot 7",
          "description": "Application screenshot"
        },
        {
          "src": "/images/GestorSalasJ&S/J&S-VistaTablet.png",
          "alt": "Meeting Room Booking — Jaume & Sere — application screenshot 8",
          "description": "Application screenshot"
        }
      ],
      "technologies": [
        "C#",
        ".NET 8",
        "Entity Framework Core",
        "MS SQL Server Express",
        "Active Directory (Windows Server)",
        "Microsoft Graph / Outlook",
        "React",
        "Vite",
        "TypeScript",
        "TailwindCSS",
        "Azure"
      ],
      "longDescription": "Final degree project for managing meeting rooms, locations and bookings. Integrates corporate sign-in with Active Directory and Outlook notifications through Microsoft Graph, using .NET and React.",
      "features": [
        ".NET REST API for rooms and bookings",
        "Entity Framework Core with the Repository pattern",
        "Active Directory sign-in and role-based access",
        "Outlook notifications through Microsoft Graph",
        "Responsive React, Vite and TypeScript frontend",
        "Room usage dashboard",
        "Booking history and change auditing",
        "Deployment on Azure App Service"
      ],
      "demoUrl": null,
      "githubUrl": null,
      "caseStudy": {
        "problem": "Meeting room bookings were kept on paper. Handwriting was sometimes difficult to read, and bookings were not always canceled, leaving rooms incorrectly marked as occupied.",
        "role": "Contribution to the analysis and development of the booking system as a final degree project for Jaume & Sere.",
        "decisions": "Replace the paper agenda with a central calendar supporting bookings and cancellations. Integrate Active Directory for corporate access and Outlook through Microsoft Graph for notifications, using a .NET API and React frontend.",
        "result": "The organization reported that bookings incorrectly blocking meeting rooms were eliminated. The digital calendar makes bookings readable and manageable without handwritten records.",
        "highlight": "No more bookings incorrectly blocking rooms",
        "evidence": "Outcome reported by the organization."
      }
    },
    {
      "id": 4,
      "title": "FyV Traslados",
      "status": "In production",
      "description": "Business website presenting transport services, the booking process and WhatsApp inquiries. Built with Astro and Tailwind CSS, with service pages and technical SEO.",
      "images": [],
      "technologies": [
        "Astro",
        "TypeScript",
        "Tailwind CSS",
        "Vercel"
      ],
      "longDescription": "Business website presenting transport services, the booking process and WhatsApp inquiries. Built with Astro and Tailwind CSS, with service pages and technical SEO.",
      "features": [
        "Services and pricing",
        "WhatsApp inquiries and quotes",
        "Responsive mobile and desktop layout",
        "Sitemap and structured data"
      ],
      "demoUrl": "https://fyv-traslados.vercel.app/",
      "githubUrl": "https://github.com/RodrigoSuarez47/fyv-traslados",
      "caseStudy": {
        "problem": "FyV wanted greater visibility and a single place to explain its work, services and booking process.",
        "role": "Design and development of the FyV Traslados business website based on the company’s needs.",
        "decisions": "Organize services, process, pricing and contact in an Astro website with reusable components. Add WhatsApp inquiries, responsive layouts and technical SEO with a sitemap and structured data.",
        "result": "The company has a published website bringing its offering together and making it easier to share service information and contact the team through WhatsApp.",
        "highlight": "Services and process in one place",
        "evidence": "Delivered: a published website with services, process and contact information in one place."
      }
    }
  ]
}

export const getProjects = (locale: Locale) => projectsByLocale[locale]
