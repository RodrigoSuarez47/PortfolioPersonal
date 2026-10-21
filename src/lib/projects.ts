import type { Locale } from "./i18n"

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
  id: ProjectId
  slug: string
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


export type ProjectId = 1 | 2 | 3 | 4
type ProjectCore = Pick<Project, "id" | "slug" | "technologies" | "demoUrl" | "githubUrl"> & { images: { src: string; captions: Record<Locale, Omit<ProjectImage, "src">> }[] }
type ProjectCopy = Omit<Project, "id" | "slug" | "technologies" | "demoUrl" | "githubUrl" | "images">

const projectCore: ProjectCore[] = [
  {
    "id": 1,
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
    "demoUrl": null,
    "githubUrl": null,
    "slug": "mayorista-javier",
    "images": [
      {
        "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Dashboard.png",
        "captions": {
          "es": {
            "alt": "Reportes",
            "description": "Dashboard interactivo con reportes y métricas clave."
          },
          "en": {
            "alt": "Mayorista Javier - sales dashboard",
            "description": "Business reports, sales metrics and KPIs."
          }
        }
      },
      {
        "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Login.png",
        "captions": {
          "es": {
            "alt": "Login",
            "description": "Pantalla de inicio de sesión."
          },
          "en": {
            "alt": "Mayorista Javier - sign-in",
            "description": "Sign-in screen for the business management system."
          }
        }
      },
      {
        "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Articles.png",
        "captions": {
          "es": {
            "alt": "Artículos",
            "description": "Gestión de artículos y stock."
          },
          "en": {
            "alt": "Mayorista Javier - products and inventory",
            "description": "Product and stock management."
          }
        }
      },
      {
        "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Suppliers.png",
        "captions": {
          "es": {
            "alt": "Proveedores",
            "description": "Administración de proveedores."
          },
          "en": {
            "alt": "Mayorista Javier - supplier management",
            "description": "Supplier administration screen."
          }
        }
      },
      {
        "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Orders.png",
        "captions": {
          "es": {
            "alt": "Pedidos",
            "description": "Módulo de pedidos con generación automática de órdenes en PDF."
          },
          "en": {
            "alt": "Mayorista Javier - order management",
            "description": "Order management and PDF order generation."
          }
        }
      },
      {
        "src": "/images/SistemaMayoristaJavier/MayoristaJavier-Users.png",
        "captions": {
          "es": {
            "alt": "Usuarios",
            "description": "Gestión de usuarios del sistema."
          },
          "en": {
            "alt": "Mayorista Javier - user management",
            "description": "User administration screen."
          }
        }
      },
      {
        "src": "/images/SistemaMayoristaJavier/favicon.svg",
        "captions": {
          "es": {
            "alt": "Carátula del Proyecto",
            "description": "Icono del sistema de gestión Mayorista Javier."
          },
          "en": {
            "alt": "Mayorista Javier - management system logo",
            "description": "Logo of the Mayorista Javier management system."
          }
        }
      }
    ]
  },
  {
    "id": 2,
    "technologies": [
      "TypeScript",
      "React",
      "Next.js",
      "PWA (Progressive Web App)",
      "SPA (Single Page App)",
      "TailwindCSS",
      "Vercel"
    ],
    "demoUrl": "https://mayoristajavier.vercel.app/",
    "githubUrl": null,
    "slug": "catalogo-mayorista-javier",
    "images": [
      {
        "src": "/images/WebClientesMayoristaJavier/PWA desktop.png",
        "captions": {
          "es": {
            "alt": "PWA Desktop",
            "description": "Vista del PWA en escritorio."
          },
          "en": {
            "alt": "Mayorista Javier - desktop product catalog",
            "description": "Customer product catalog in the desktop layout."
          }
        }
      },
      {
        "src": "/images/WebClientesMayoristaJavier/favicon.svg",
        "captions": {
          "es": {
            "alt": "Favicon del proyecto",
            "description": "Icono / carátula del PWA."
          },
          "en": {
            "alt": "Mayorista Javier - customer catalog logo",
            "description": "Logo of the customer-facing PWA."
          }
        }
      }
    ]
  },
  {
    "id": 3,
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
    "demoUrl": null,
    "githubUrl": null,
    "slug": "jaume-sere",
    "images": [
      {
        "src": "/images/GestorSalasJ&S/J&S-Calendario.png",
        "captions": {
          "es": {
            "alt": "Vista de Calendario",
            "description": "Vista de calendario con reservas de salas."
          },
          "en": {
            "alt": "Jaume & Sere - room booking calendar",
            "description": "Calendar showing meeting room reservations."
          }
        }
      },
      {
        "src": "/images/GestorSalasJ&S/J&S-ListadoMisReservas.png",
        "captions": {
          "es": {
            "alt": "Listado de Mis Reservas",
            "description": "Listado de reservas realizadas por el usuario."
          },
          "en": {
            "alt": "Jaume & Sere - my bookings",
            "description": "List of the current user's room bookings."
          }
        }
      },
      {
        "src": "/images/GestorSalasJ&S/J&S-Sedes.png",
        "captions": {
          "es": {
            "alt": "Administración de Sedes",
            "description": "Administración de sedes del sistema."
          },
          "en": {
            "alt": "Jaume & Sere - location management",
            "description": "Administration of company locations."
          }
        }
      },
      {
        "src": "/images/GestorSalasJ&S/J&S-Salas.png",
        "captions": {
          "es": {
            "alt": "Administración de Salas",
            "description": "Administración de salas de reunión."
          },
          "en": {
            "alt": "Jaume & Sere - meeting room management",
            "description": "Meeting room administration."
          }
        }
      },
      {
        "src": "/images/GestorSalasJ&S/J&S-EquipamientoSalas.png",
        "captions": {
          "es": {
            "alt": "Administración de Equipamiento",
            "description": "Administración de equipamiento disponible en las salas de reunión."
          },
          "en": {
            "alt": "Jaume & Sere - room equipment",
            "description": "Administration of equipment available in meeting rooms."
          }
        }
      },
      {
        "src": "/images/GestorSalasJ&S/J&S-ParametrosSistema.png",
        "captions": {
          "es": {
            "alt": "Administración de Parámetros del Sistema",
            "description": "Administración de parámetros del sistema."
          },
          "en": {
            "alt": "Jaume & Sere - system settings",
            "description": "Booking system configuration."
          }
        }
      },
      {
        "src": "/images/GestorSalasJ&S/J&S-Admin-usoIndebido.png",
        "captions": {
          "es": {
            "alt": "Reportes de Uso Indebido de Salas",
            "description": "Reportes de uso indebido de salas de reunión."
          },
          "en": {
            "alt": "Jaume & Sere - room misuse reports",
            "description": "Reports of meeting room misuse."
          }
        }
      },
      {
        "src": "/images/GestorSalasJ&S/J&S-VistaTablet.png",
        "captions": {
          "es": {
            "alt": "Vista en Tableta",
            "description": "Vista del sistema en tableta."
          },
          "en": {
            "alt": "Jaume & Sere - tablet layout",
            "description": "Meeting room booking interface on a tablet."
          }
        }
      },
      {
        "src": "/images/GestorSalasJ&S/JYS_TRANSP.png",
        "captions": {
          "es": {
            "alt": "Logo Jaume & Sere",
            "description": ""
          },
          "en": {
            "alt": "Jaume & Sere - company logo",
            "description": "Jaume & Sere project logo."
          }
        }
      }
    ]
  },
  {
    "id": 4,
    "technologies": [
      "Astro",
      "TypeScript",
      "Tailwind CSS",
      "Vercel"
    ],
    "demoUrl": "https://fyv-traslados.vercel.app/",
    "githubUrl": "https://github.com/RodrigoSuarez47/fyv-traslados",
    "slug": "fyv-traslados",
    "images": [
      {
        "src": "/images/FyV/fyv-home.jpg",
        "captions": {
          "es": {
            "alt": "FyV Traslados: portada, servicios y consulta por WhatsApp"
          },
          "en": {
            "alt": "FyV Traslados: homepage, services and WhatsApp inquiry"
          }
        }
      }
    ]
  }
]

const projectCopy: Record<Locale, Record<ProjectId, ProjectCopy>> = {
  "es": {
    "1": {
      "title": "Sistema de Gestión Mayorista Javier",
      "status": "En producción",
      "description": "Sistema de gestión que reúne artículos, stock, proveedores, clientes y pedidos en una misma operación. Desarrollé una API en C# y una interfaz MVC para consultar información comercial, generar pedidos en PDF y visualizar reportes.",
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
      "caseStudy": {
        "problem": "Los pedidos se tomaban en papel y no había un registro confiable de existencias ni de precios actualizados. Sin información consolidada de ventas diarias o mensuales, las compras a proveedores podían generar sobrestock o faltantes.",
        "role": "Desarrollo del sistema de gestión y de la API que conecta inventario, compras, ventas, pedidos y reportes.",
        "decisions": "Centralizar la información en una API .NET con PostgreSQL, registrar compras y ventas para actualizar el inventario y presentar métricas y KPIs en un dashboard. Incorporar la carga de pedidos a partir del mensaje de WhatsApp generado por la web de clientes.",
        "result": "Inventario actualizado con las compras y ventas registradas, visibilidad de las ventas y datos para planificar reposiciones. Los pedidos se cargan copiando y pegando el mensaje recibido por WhatsApp y quedan listos para preparar y entregar.",
        "highlight": "≈15 minutos ahorrados por pedido",
        "evidence": "Estimación del negocio para el flujo integrado de catálogo web y sistema de gestión."
      }
    },
    "2": {
      "title": "Web de Clientes para Mayorista Javier (PWA)",
      "status": "En producción",
      "description": "Catálogo digital conectado al sistema de gestión de Mayorista Javier. Los clientes consultan productos y precios, arman su pedido y lo envían por WhatsApp para que el negocio lo cargue en segundos.",
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
      "caseStudy": {
        "problem": "Los clientes no tenían un catálogo para consultar productos y precios. La información comercial estaba dispersa y los precios podían quedar desactualizados, mientras los pedidos se transcribían manualmente.",
        "role": "Desarrollo del catálogo web de clientes y su integración con el sistema de gestión de Mayorista Javier.",
        "decisions": "Conectar el catálogo con la información del sistema de gestión y ofrecer una PWA adaptable a distintos dispositivos. Permitir armar el pedido en la web y enviarlo como un mensaje de WhatsApp que el negocio puede copiar y pegar en el sistema.",
        "result": "Los clientes pueden consultar el catálogo y preparar pedidos desde la web. El negocio recibe el mensaje por WhatsApp y carga el pedido en segundos para su preparación y entrega.",
        "highlight": "Del catálogo al pedido en segundos",
        "evidence": "El ahorro de aproximadamente 15 minutos por pedido corresponde al mismo flujo integrado descrito en el sistema de gestión."
      }
    },
    "3": {
      "title": "Gestor de Salas de Reunión — Jaume & Sere",
      "status": "En producción",
      "description": "Proyecto final de carrera para gestionar salas, sedes y reservas de reunión. Integra autenticación corporativa con Active Directory y notificaciones de Outlook mediante Microsoft Graph, con backend .NET y frontend React.",
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
      "caseStudy": {
        "problem": "La agenda de las salas se llevaba en papel. La letra podía ser difícil de interpretar y algunas reservas no se cancelaban, por lo que las salas aparecían ocupadas aunque ya no fueran a utilizarse. Además, no todos los participantes recibían la información de las reuniones o de sus cancelaciones.",
        "role": "Participación en el análisis y desarrollo del sistema de reservas como proyecto final de carrera para Jaume & Sere.",
        "decisions": "Reemplazar la agenda de papel por un calendario centralizado, con gestión de reservas y cancelaciones. Integrar Active Directory para el acceso corporativo y Outlook mediante Microsoft Graph para enviar invitaciones y notificaciones por correo a todos los participantes, incluidos los avisos de cancelación, con API .NET y frontend React.",
        "result": "Según lo informado por la organización, se eliminaron las reservas que mantenían salas ocupadas incorrectamente. Las invitaciones y notificaciones por correo resolvieron también la falta de información entre los participantes: todos reciben la convocatoria y los avisos de cancelación.",
        "highlight": "Fin de las reservas que bloqueaban salas incorrectamente",
        "evidence": "Resultado informado por la organización."
      }
    },
    "4": {
      "title": "FyV Traslados",
      "status": "En producción",
      "description": "Sitio comercial para presentar los servicios de traslado, explicar cómo contratar y facilitar consultas por WhatsApp. Construido con Astro y Tailwind CSS, con páginas de servicios y una estructura preparada para buscadores.",
      "longDescription": "Desarrollo de la presencia web de FyV Traslados: servicios, tarifas, proceso de contratación y contacto. La implementación combina componentes reutilizables, contenido orientado al servicio y SEO técnico con sitemap y datos estructurados.",
      "features": [
        "Presentación de servicios y tarifas",
        "Contacto y cotización por WhatsApp",
        "Diseño adaptable a celulares y escritorio",
        "Sitemap y datos estructurados"
      ],
      "caseStudy": {
        "problem": "FyV necesitaba ganar visibilidad y reunir la explicación de su trabajo, sus servicios y su proceso de contratación en un único lugar.",
        "role": "Diseño y desarrollo de la página web comercial de FyV Traslados a partir de las necesidades del negocio.",
        "decisions": "Organizar servicios, proceso, tarifas y contacto en una web con Astro y componentes reutilizables. Incorporar consultas por WhatsApp, diseño adaptable y SEO técnico con sitemap y datos estructurados.",
        "result": "La empresa cuenta con un sitio publicado que reúne su propuesta y facilita compartir la información y contactar por WhatsApp.",
        "highlight": "Servicios y proceso en un solo lugar",
        "evidence": "Resultado: sitio web publicado con servicios, proceso y contacto centralizados."
      }
    }
  },
  "en": {
    "1": {
      "title": "Mayorista Javier Management System",
      "status": "In production",
      "description": "Business management system connecting products, inventory, suppliers, customers and orders. A C# API and MVC interface support purchasing, sales, PDF orders and business reporting.",
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
      "caseStudy": {
        "problem": "Orders were written on paper, with no reliable inventory records or up-to-date price list. Without consolidated daily or monthly sales figures, supplier purchases could lead to excess stock or shortages.",
        "role": "Development of the management system and API connecting inventory, purchases, sales, orders and reporting.",
        "decisions": "Centralize business data in a .NET API with PostgreSQL, update inventory from recorded purchases and sales, and display business metrics and KPIs in a dashboard. Support loading orders from the WhatsApp message generated by the customer website.",
        "result": "Inventory stays current with recorded purchases and sales. Sales reports provide information for replenishment decisions. Staff copy and paste incoming WhatsApp messages to load orders ready for picking and delivery.",
        "highlight": "≈15 minutes saved per order",
        "evidence": "Business estimate for the integrated catalog and management system workflow."
      }
    },
    "2": {
      "title": "Mayorista Javier Customer Catalog (PWA)",
      "status": "In production",
      "description": "Digital catalog connected to Mayorista Javier’s management system. Customers browse products and prices, build an order and send it through WhatsApp so the business can load it in seconds.",
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
      "caseStudy": {
        "problem": "Customers had no product catalog to consult. Product and price information was scattered and could become outdated, while orders had to be transcribed manually.",
        "role": "Development of the customer catalog and its integration with Mayorista Javier’s management system.",
        "decisions": "Connect the catalog to the management system’s product information and deliver a responsive PWA. Let customers build an order online and send a WhatsApp message that staff can copy and paste into the management system.",
        "result": "Customers browse the catalog and prepare their orders online. The business receives the WhatsApp message and loads the order in seconds, ready for picking and delivery.",
        "highlight": "From catalog to order in seconds",
        "evidence": "The approximately 15 minutes saved per order refers to the same integrated workflow described in the management system."
      }
    },
    "3": {
      "title": "Meeting Room Booking — Jaume & Sere",
      "status": "In production",
      "description": "Final degree project for managing meeting rooms, locations and bookings. Integrates corporate sign-in with Active Directory and Outlook notifications through Microsoft Graph, using .NET and React.",
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
      "caseStudy": {
        "problem": "Meeting room bookings were kept on paper. Handwriting was sometimes difficult to read, and bookings were not always canceled, leaving rooms incorrectly marked as occupied. Some participants also missed meeting details or were unaware that a meeting had been canceled.",
        "role": "Contribution to the analysis and development of the booking system as a final degree project for Jaume & Sere.",
        "decisions": "Replace the paper agenda with a central calendar supporting bookings and cancellations. Integrate Active Directory for corporate access and Outlook through Microsoft Graph to send invitations and email notifications to all participants, including cancellation notices, using a .NET API and React frontend.",
        "result": "The organization reported that bookings incorrectly blocking meeting rooms were eliminated. Email invitations and notifications also resolved communication gaps: all participants receive meeting invitations and cancellation notices.",
        "highlight": "No more bookings incorrectly blocking rooms",
        "evidence": "Outcome reported by the organization."
      }
    },
    "4": {
      "title": "FyV Traslados",
      "status": "In production",
      "description": "Business website presenting transport services, the booking process and WhatsApp inquiries. Built with Astro and Tailwind CSS, with service pages and technical SEO.",
      "longDescription": "Business website presenting transport services, the booking process and WhatsApp inquiries. Built with Astro and Tailwind CSS, with service pages and technical SEO.",
      "features": [
        "Services and pricing",
        "WhatsApp inquiries and quotes",
        "Responsive mobile and desktop layout",
        "Sitemap and structured data"
      ],
      "caseStudy": {
        "problem": "FyV wanted greater visibility and a single place to explain its work, services and booking process.",
        "role": "Design and development of the FyV Traslados business website based on the company’s needs.",
        "decisions": "Organize services, process, pricing and contact in an Astro website with reusable components. Add WhatsApp inquiries, responsive layouts and technical SEO with a sitemap and structured data.",
        "result": "The company has a published website bringing its offering together and making it easier to share service information and contact the team through WhatsApp.",
        "highlight": "Services and process in one place",
        "evidence": "Delivered: a published website with services, process and contact information in one place."
      }
    }
  }
}

export function getProjects(locale: Locale): Project[] {
  return projectCore.map(({ images, ...core }) => ({
    ...core, ...projectCopy[locale][core.id],
    images: images.map(({ src, captions }) => ({ src, ...captions[locale] })),
  }))
}
export const projectPath = (project: Pick<Project, "slug">, locale: Locale) =>
  `${locale === "en" ? "/en" : "/"}#${project.slug}`
