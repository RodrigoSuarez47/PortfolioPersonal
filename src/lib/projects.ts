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
  featured: boolean
  collaborator?: { name: string; url: string }
  cover?: { eyebrow: string; subtitle: string; logo?: string }
  delivery?: { title: string; description: string; cta: string }
  summary: Pick<CaseStudy, "problem" | "role" | "result">
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


export type ProjectId = 1 | 2 | 3 | 4 | 5 | 6
type ProjectCore = Pick<Project, "id" | "slug" | "technologies" | "demoUrl" | "githubUrl"> & { images: { src: string; captions: Record<Locale, Omit<ProjectImage, "src">> }[] }
type ProjectCopy = Omit<Project, keyof ProjectCore | "featured">

const projectCore: ProjectCore[] = [
  {
    "id": 1,
    "technologies": [
      "C#",
      "React 19",
      ".NET 10",
      "PostgreSQL",
      "TypeScript",
      "Vite",
      "Entity Framework Core",
      "Npgsql",
      "QuestPDF",
      "JWT",
      "BCrypt.NET",
      "TanStack Query",
      "Zustand",
      "React Router",
      "React Hook Form",
      "Zod",
      "Recharts",
      "Tailwind CSS",
      "Docker",
      "Vitest",
      "xUnit"
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
      "Next.js",
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "PWA"
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
    "githubUrl": null,
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
  },
  {
    "id": 5,
    "slug": "ratio-espina",
    "technologies": [
      "WPF",
      "C#",
      ".NET 8",
      "MongoDB",
      "API",
      "Windows Server",
      "Linux"
    ],
    "demoUrl": null,
    "githubUrl": null,
    "images": []
  },
  {
    "id": 6,
    "slug": "pimpollo",
    "technologies": [
      "Astro",
      "React 19",
      "Vite",
      "TypeScript",
      "C#",
      ".NET 10",
      "PostgreSQL",
      "Entity Framework Core",
      "Docker",
      "Railway",
      "Vercel"
    ],
    "demoUrl": "https://pimpollo-web.vercel.app/",
    "githubUrl": null,
    "images": [
      {
        "src": "/images/PimPollo/og-image.png",
        "captions": {
          "es": {
            "alt": "PimPollo: miniatura oficial para redes con el pollito y el aviso de sitio en construcción",
            "description": "Portada para redes: identidad negra y amarilla de PimPollo con un pollito y el anuncio de la nueva web en construcción."
          },
          "en": {
            "alt": "PimPollo: official social media preview with the chick and the under-construction announcement",
            "description": "PimPollo's black-and-yellow social preview featuring the chick mascot and the upcoming website."
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
      "description": "Sistema de gestión comercial para Mayorista Javier, desarrollado desde cero con una API en C#/.NET y una interfaz en React 19. Centraliza pedidos, inventario e información del negocio y mantiene actualizado el catálogo de la web de clientes.",
      "longDescription": "API RESTful desarrollada en C# sobre .NET 10, con Entity Framework Core y Npgsql para el acceso a PostgreSQL. El frontend utiliza React 19, TypeScript y Vite, con React Router para la navegación, TanStack Query para las consultas y su caché, Zustand para el estado y React Hook Form con Zod para formularios y validación. Recharts permite visualizar los indicadores del negocio y QuestPDF genera los documentos PDF desde la API. El acceso está protegido mediante JWT y roles de usuario, con hashing de contraseñas mediante BCrypt.NET.",
      "features": [
        "API RESTful con endpoints protegidos mediante JWT y roles de usuario",
        "Hashing de contraseñas con BCrypt.NET",
        "Generación automática de órdenes de pedido en PDF con QuestPDF",
        "Frontend React 19 con TypeScript y Vite",
        "Consultas y caché con TanStack Query; gestión de estado con Zustand",
        "Formularios con React Hook Form y validación con Zod",
        "Gráficos dinámicos e indicadores de negocio con Recharts",
        "Persistencia en PostgreSQL mediante Entity Framework Core y Npgsql",
        "Dashboard de métricas, reportes y estimaciones de ventas",
        "Toma de pedidos y generación de documentos listos para imprimir",
        "Contenedores Docker y pruebas con Vitest y xUnit"
      ],
      "caseStudy": {
        "problem": "Los pedidos se registraban en papel y la empresa no contaba con información confiable sobre su stock real, sus ventas ni sus márgenes de beneficio. Esta falta de visibilidad dificultaba la planificación de compras a proveedores y aumentaba la incertidumbre sobre qué productos reponer y en qué cantidades.",
        "role": "Relevé los requerimientos del negocio y desarrollé el sistema de gestión desde cero. Me encargué de su despliegue y continúo con el mantenimiento, abarcando tanto la API como la interfaz y su integración con la web de clientes.",
        "decisions": "Separar la interfaz React 19 de la API RESTful en C#/.NET 10 y centralizar la información comercial en PostgreSQL con Entity Framework Core. Gestionar las consultas y su caché con TanStack Query, el estado con Zustand y la validación de formularios con Zod. Proteger los endpoints mediante JWT y roles de usuario, y almacenar las contraseñas con hashing mediante BCrypt.NET. Generar los PDF con QuestPDF desde la API y conectar pedidos e inventario con el catálogo web de clientes.",
        "result": "El sistema mantiene el inventario actualizado y permite registrar cada pedido con un ahorro estimado por el cliente de aproximadamente 15 minutos. Reúne KPIs de ventas mensuales, rankings de artículos más y menos vendidos, márgenes de beneficio y estimaciones de ventas del mes. Las alertas de vencimiento y la información de stock ayudan a prevenir pérdidas de mercadería y compras excesivas. Además, mantiene actualizado en tiempo real el catálogo de artículos que consultan los clientes en la web.",
        "highlight": "Inventario y catálogo actualizados; aproximadamente 15 minutos ahorrados por pedido, según estimación del cliente.",
        "evidence": "Stack contrastado con los manifiestos de dependencias y el código de los repositorios del backoffice y la API. El ahorro de aproximadamente 15 minutos por pedido es una estimación del cliente para el flujo integrado del catálogo y el sistema de gestión; no corresponde a dos ahorros independientes."
      },
      "summary": {
        "problem": "Los pedidos se registraban en papel y la empresa no contaba con información confiable sobre su stock real, sus ventas ni sus márgenes de beneficio. Esta falta de visibilidad dificultaba la planificación de compras a proveedores y aumentaba la incertidumbre sobre qué productos reponer y en qué cantidades.",
        "role": "Relevé los requerimientos del negocio y desarrollé el sistema de gestión desde cero. Me encargué de su despliegue y continúo con el mantenimiento, abarcando tanto la API como la interfaz y su integración con la web de clientes.",
        "result": "El sistema mantiene el inventario actualizado y permite registrar cada pedido con un ahorro estimado por el cliente de aproximadamente 15 minutos. Reúne KPIs de ventas mensuales, rankings de artículos más y menos vendidos, márgenes de beneficio y estimaciones de ventas del mes. Las alertas de vencimiento y la información de stock ayudan a prevenir pérdidas de mercadería y compras excesivas. Además, mantiene actualizado en tiempo real el catálogo de artículos que consultan los clientes en la web."
      }
    },
    "2": {
      "title": "Web de Clientes para Mayorista Javier (PWA)",
      "status": "En producción",
      "description": "Web de clientes de Mayorista Javier con catálogo actualizado, pedidos por WhatsApp y una sección de contacto, ubicación, cómo comprar y preguntas frecuentes. Integra la información del sistema de gestión en una PWA.",
      "longDescription": "PWA desarrollada con Next.js, React 19, TypeScript y Tailwind CSS. Integra la información del sistema de gestión para mantener actualizado el catálogo de productos y precios. Los clientes consultan artículos, preparan su pedido y lo envían por WhatsApp; la empresa utiliza ese mensaje para registrarlo en su sistema y generar la orden en PDF.",
      "features": [
        "Armado de pedidos y envío del mensaje por WhatsApp",
        "Catálogo de productos con búsqueda y filtros",
        "Consulta de productos y precios del catálogo",
        "Integración con el sistema de gestión de la empresa",
        "Desarrollo completo en TypeScript",
        "Interfaz moderna y responsive con Next.js, React 19 y Tailwind CSS",
        "Optimización para SEO y rendimiento",
        "Capacidad para manejar un creciente número de usuarios y productos",
        "Instalación nativa en dispositivos móviles y desktop",
        "Despliegue en Vercel",
        "Contacto por WhatsApp y teléfono; ubicación con enlace a indicaciones",
        "Guía de compra sin registro, con opciones de retiro o entrega",
        "Preguntas frecuentes sobre precios, disponibilidad y productos por peso",
        "Precios mayoristas y minoristas según las cantidades seleccionadas"
      ],
      "caseStudy": {
        "problem": "La empresa no contaba con un catálogo para sus clientes donde pudieran consultar los artículos disponibles y sus precios.",
        "role": "Desarrollé la PWA y su integración con el sistema de gestión para mostrar información actualizada en tiempo real. Implementé el catálogo y el armado de pedidos, además de la sección de contacto, cómo llegar, cómo comprar y preguntas frecuentes.",
        "decisions": "Conectar el catálogo con la información del sistema de gestión y ofrecer una PWA adaptable a distintos dispositivos. Permitir que el cliente arme su pedido en la web y lo envíe como un mensaje de WhatsApp que la empresa pueda copiar y pegar en su sistema. Ese flujo permite registrar el pedido y generar la orden en PDF, lista para imprimir, en menos de 10 segundos, según lo confirmado por Rodrigo. Reunir contacto, ubicación, instrucciones de compra y preguntas frecuentes en una sección accesible desde el catálogo, para acompañar al cliente durante la compra.",
        "result": "Los clientes pueden consultar el catálogo de productos, armar su pedido y enviarlo por WhatsApp. La empresa recibe un mensaje listo para copiar y pegar en su sistema, registrar el pedido y generar la orden en PDF para imprimir. El ahorro estimado por el cliente de aproximadamente 15 minutos por pedido corresponde a este flujo integrado; no es un ahorro adicional al del sistema de gestión. La web también reúne las vías de contacto, la ubicación del local y una guía para coordinar el retiro o la entrega.",
        "highlight": "Del catálogo al pedido por WhatsApp, con carga y PDF listos en menos de 10 segundos.",
        "evidence": "Integración y stack contrastados con los repositorios. El tiempo de menos de 10 segundos para registrar el pedido y generar el PDF fue confirmado por Rodrigo. El ahorro aproximado de 15 minutos por pedido es una estimación del cliente para el flujo integrado, no un ahorro adicional."
      },
      "summary": {
        "problem": "La empresa no contaba con un catálogo para sus clientes donde pudieran consultar los artículos disponibles y sus precios.",
        "role": "Desarrollé la PWA y su integración con el sistema de gestión para mostrar información actualizada en tiempo real. Implementé el catálogo y el armado de pedidos, además de la sección de contacto, cómo llegar, cómo comprar y preguntas frecuentes.",
        "result": "Los clientes pueden consultar el catálogo de productos, armar su pedido y enviarlo por WhatsApp. La empresa recibe un mensaje listo para copiar y pegar en su sistema, registrar el pedido y generar la orden en PDF para imprimir. El ahorro estimado por el cliente de aproximadamente 15 minutos por pedido corresponde a este flujo integrado; no es un ahorro adicional al del sistema de gestión. La web también reúne las vías de contacto, la ubicación del local y una guía para coordinar el retiro o la entrega."
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
      },
      "summary": {
        "problem": "Agenda en papel, reservas incorrectas y avisos que no llegaban a todos.",
        "role": "Análisis y desarrollo en equipo como proyecto final de carrera.",
        "result": "Se eliminaron las reservas incorrectas y se centralizaron los avisos."
      }
    },
    "4": {
      "title": "FyV Traslados",
      "status": "En producción",
      "description": "Sitio comercial para presentar los servicios de traslado, explicar cómo contratar y facilitar consultas por WhatsApp. Construido con Astro y Tailwind CSS, con secciones de servicios y una estructura preparada para buscadores.",
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
      },
      "summary": {
        "problem": "Servicios y proceso de contratación sin un lugar único de consulta.",
        "role": "Diseño y desarrollo de la web comercial.",
        "result": "Web publicada con servicios, proceso y contacto por WhatsApp."
      }
    },
    "5": {
      "title": "Ratio · Gestión de obras para empresa Espina",
      "status": "En construcción",
      "description": "Colaborador Full Stack con Ing. Luis Terzano en Ratio para Espina. Desarrollé el módulo de diagrama de Gantt completo, logs y seguridad, Excel e instaladores; modernicé la interfaz WPF y la identidad visual.",
      "longDescription": "Cliente de escritorio WPF en C# conectado a una API .NET 8 con persistencia en MongoDB. El módulo de diagrama de Gantt vincula las fechas de cada rubro con el presupuesto activo, distribuye los costos previstos según los días de trabajo seleccionados y ofrece escalas semanales y mensuales. La consulta y la edición respetan los permisos del usuario; los diagramas, totales y exportaciones utilizan los datos guardados, separados de los cambios pendientes. La distribución incluye instaladores y validación de conexión.",
      "features": [
        "Gestión de proyectos de obra orientada al contexto uruguayo",
        "Presupuestos con materiales, mano de obra, maquinaria, partidas y rubros",
        "Costos directos e indirectos, distribución de beneficios y ajustes de oferta",
        "Informes e importación y exportación de planillas Excel",
        "Centralización de información entre departamentos",
        "Consideración de requisitos locales, incluidas las leyes sociales",
        "Trabajo colaborativo como objetivo frente a las planillas aisladas",
        "API con instaladores para servidores Windows y Linux",
        "Cliente de escritorio con instalador para Windows",
        "Mi aporte: logs y usuarios del panel administrador",
        "Mi aporte: importación y exportación Excel de punta a punta",
        "Mi aporte: generación de instaladores con Inno Setup de punta a punta",
        "Mi aporte: módulo de diagrama de Gantt completo, vinculado al presupuesto activo",
        "Fechas por rubro; escalas semanal y mensual",
        "Calendario laboral configurable, sin descuento automático de feriados",
        "Resumen mensual y gráficos de costos previstos y acumulados",
        "Desglose de materiales, mano de obra, equipos, servicios, suministros, indirectos, imprevistos y horas hombre",
        "Búsqueda, filtro de rubros sin programar y navegación al día actual",
        "Exportación Excel e impresión paginada/PDF mediante el diálogo de impresión de Windows",
        "Permisos de consulta y edición; protección de cambios sin guardar",
        "Autenticación de endpoints, permisos por rol y protección del login",
        "Auditoría de operaciones críticas y trazabilidad de accesos",
        "Índices MongoDB para logs y usuarios",
        "Modernización WPF: navegación, estilos Fluent, iconos, marca y componentes reutilizables",
        "Instalación y actualización: servicios, MongoDB opcional y validación de conexión",
        "Previsto: nombre de empresa, logo y parámetros configurables sin modificar código"
      ],
      "cover": {
        "eyebrow": "En construcción",
        "logo": "/images/Ratio/ratio-logo.jpg",
        "subtitle": "Software libre · Contribución Full Stack"
      },
      "delivery": {
        "title": "Probá Ratio",
        "description": "Si querés evaluar la herramienta, contactame. Te proporciono los instaladores de la API para servidores Windows o Linux y del cliente de escritorio para Windows.",
        "cta": "Solicitar instaladores"
      },
      "caseStudy": {
        "problem": "Espina necesitaba una solución de gestión de obras ajustada a la realidad uruguaya, incluidas las leyes sociales. Cada departamento trabajaba con varias planillas Excel difíciles de utilizar y entender, que no facilitaban el trabajo conjunto. El desafío incluye reducir la fragmentación de información, la doble carga y las diferencias entre versiones.",
        "role": "Colaborador Full Stack junto al Ing. Luis Terzano. Implementé el módulo de diagrama de Gantt completo: lógica de planificación, API e interfaz WPF. También desarrollé funcionalidades de auditoría y logs, mejoras de seguridad y permisos, importación y exportación Excel e instaladores con Inno Setup. Modernicé pantallas, navegación, estilos Fluent, iconos, identidad visual y componentes reutilizables.",
        "decisions": "Vincular la planificación al presupuesto activo y distribuir costos proporcionalmente a los días seleccionados. Separar cambios pendientes de los datos guardados usados en diagramas, totales y exportaciones. Incorporar permisos, filtros y avisos de inconsistencias. Los importes son costos planificados, no cobros o pagos reales. Incorporé autenticación en endpoints, permisos por rol, limitación de intentos de login y trazabilidad de accesos y operaciones críticas; centralicé estilos e iconos y mejoré la instalación y actualización.",
        "result": "Módulo de diagrama de Gantt completo y en uso para planificar los tiempos de obra y consultar recursos y costos previstos, tanto mensuales como acumulados. Permite identificar rubros sin programar, visualizar la cobertura del presupuesto planificado y exportar la información a Excel o imprimirla en papel y PDF. Además, se reforzaron los permisos y la auditoría entre el cliente y la API, y se unificó la experiencia visual del sistema.",
        "highlight": "Planificación de tiempos y costos implementada; accesos y auditoría reforzados e interfaz unificada.",
        "evidence": "Contribuciones contrastadas con los commits de Rodrigo y el código local del cliente y la API, incluidas las ramas Gantt y detalles-ui. Uso del diagrama de Gantt confirmado por Rodrigo. Parametrización empresarial prevista, aún no implementada. Sin métricas de impacto cuantificadas."
      },
      "summary": {
        "problem": "Espina necesitaba una solución de gestión de obras ajustada a la realidad uruguaya, incluidas las leyes sociales. Cada departamento trabajaba con varias planillas Excel difíciles de utilizar y entender, que no facilitaban el trabajo conjunto. El desafío incluye reducir la fragmentación de información, la doble carga y las diferencias entre versiones.",
        "role": "Colaborador Full Stack junto al Ing. Luis Terzano. Implementé el módulo de diagrama de Gantt completo: lógica de planificación, API e interfaz WPF. También desarrollé funcionalidades de auditoría y logs, mejoras de seguridad y permisos, importación y exportación Excel e instaladores con Inno Setup. Modernicé pantallas, navegación, estilos Fluent, iconos, identidad visual y componentes reutilizables.",
        "result": "Módulo de diagrama de Gantt completo y en uso para planificar los tiempos de obra y consultar recursos y costos previstos, tanto mensuales como acumulados. Permite identificar rubros sin programar, visualizar la cobertura del presupuesto planificado y exportar la información a Excel o imprimirla en papel y PDF. Además, se reforzaron los permisos y la auditoría entre el cliente y la API, y se unificó la experiencia visual del sistema."
      },
      "collaborator": {
        "name": "Ing. Luis Terzano",
        "url": "https://github.com/jterzano"
      }
    },
    "6": {
      "title": "PimPollo · Web de clientes y catálogo",
      "status": "En construcción",
      "description": "Sitio comercial de PimPollo en construcción: portada móvil con información del negocio y pedidos por WhatsApp. Desarrollo Full Stack de web Astro, panel React 19 y API .NET 10 con PostgreSQL, sin pagos en línea.",
      "longDescription": "La web pública de PimPollo ya ofrece una portada moderna, responsive y animada, con información institucional, Cómo comprar, preguntas frecuentes, dirección, horarios, Instagram y WhatsApp. Los datos comerciales se administran desde la API. El sitio incorpora SEO local, metadatos para redes, HTML semántico sin JavaScript y pruebas de navegación agéntica. Desarrollé además un panel React 19 con CRUD de artículos (imagen, nombre y precio), promociones y parámetros, y una API .NET 10 por capas con EF Core y PostgreSQL en Railway. El sistema utiliza autorización, sesiones con cookies protegidas, CSRF, auditoría y respaldos cifrados programados. El catálogo público interactivo y el flujo de armado de pedidos siguen en desarrollo; no hay checkout ni pagos online.",
      "features": [
        "Publicado: landing «Sitio en construcción» con pollito, animaciones accesibles y diseño mobile-first.",
        "Publicado: Sobre nosotros, Cómo comprar, Preguntas frecuentes, dirección, horarios, Instagram y WhatsApp.",
        "Web Astro: parámetros comerciales desde la API, SEO local, JSON-LD, Open Graph y miniatura social.",
        "Navegación agéntica: recorridos semánticos por horarios, cómo comprar y contacto, comprobados con pruebas de navegador.",
        "Panel React 19: CRUD de artículos con imagen, nombre, precio y unidad, promociones y parámetros; login y cambio de contraseña.",
        "API .NET 10 + EF Core + PostgreSQL: endpoints comerciales públicos y administración protegida por autorización.",
        "Seguridad: cookies HttpOnly/Secure, CSRF, rotación de sesiones, bloqueo por intentos y logs estructurados.",
        "Infraestructura y calidad: Vercel, Railway, Docker, PostgreSQL en red privada, copias cifradas programadas y CI con pruebas reales de base y navegador.",
        "Previsto: publicar el catálogo navegable, la selección de productos y la preparación de pedidos para coordinar por WhatsApp.",
        "Alcance: sin checkout ni pasarela de pago."
      ],
      "cover": {
        "eyebrow": "En construcción",
        "logo": "/images/PimPollo/favicon.svg",
        "subtitle": "Sitio en construcción · Web y panel · API .NET"
      },
      "caseStudy": {
        "problem": "PimPollo necesitaba una web rápida, accesible desde celulares y fácil de encontrar que reuniera información comercial, productos y promociones sin incorporar pagos online. El negocio también requería un panel seguro para gestionar artículos, precios y parámetros.",
        "role": "Desarrollo Full Stack de la web pública en Astro, el panel React 19 y TypeScript, la API C#/.NET 10 y la integración con PostgreSQL, Railway y Vercel. Implementación de diseño responsive, datos comerciales, seguridad, CI y pruebas.",
        "decisions": "Separar web pública, administración y API mediante responsabilidades claras. Renderizar contacto y horarios en HTML indexable con sincronización de parámetros desde la API, metadatos sociales y navegación sin JavaScript. Proteger la gestión con autenticación, cookies seguras, CSRF, rotación de tokens y límites de intentos. Verificar contratos con PostgreSQL y pruebas automatizadas de navegador.",
        "result": "Landing publicada con identidad visual de PimPollo, contacto por WhatsApp, horarios, información del local y preguntas frecuentes. Panel administrativo y API operativos para gestionar productos, promociones y parámetros. SEO técnico, miniatura para redes y pruebas de accesibilidad y navegación implementados; el catálogo público interactivo y el armado completo de pedidos siguen en construcción.",
        "highlight": "Landing publicada · Panel y API operativos · Catálogo público en desarrollo, sin pagos online.",
        "evidence": "Contrastado con PimPollo: web/src/pages/index.astro publica la landing y web/src/pages/_home.astro contiene un catálogo preliminar. admin/ y api/ gestionan datos del negocio, y GitHub Actions ejecuta pruebas de PostgreSQL, navegador, rendimiento y navegación. Las métricas de CI no se presentan como garantía universal en producción."
      },
      "summary": {
        "problem": "Unificar información comercial, contacto, futuro catálogo y gestión del negocio desde el celular.",
        "role": "Full Stack: web Astro, panel React, API .NET 10 y PostgreSQL.",
        "result": "Landing y contacto publicados; panel y API operativos. Catálogo y armado de pedidos aún en construcción."
      }
    }
  },
  "en": {
    "1": {
      "title": "Mayorista Javier Management System",
      "status": "In production",
      "description": "Business management system for Mayorista Javier, built from the ground up with a C#/.NET API and a React 19 frontend. It brings orders, inventory and business information together and keeps the customer-facing web catalog up to date.",
      "longDescription": "A C# REST API running on .NET 10, using Entity Framework Core and Npgsql to access PostgreSQL. The frontend uses React 19, TypeScript and Vite, with React Router for navigation, TanStack Query for data fetching and caching, Zustand for state management, and React Hook Form with Zod for forms and validation. Recharts displays business performance indicators, while QuestPDF generates PDF documents in the API. Access is protected with JWT authentication and role-based permissions, with password hashing handled by BCrypt.NET.",
      "features": [
        "REST API with JWT-protected endpoints and role-based access control",
        "Password hashing with BCrypt.NET",
        "Automatic PDF order generation with QuestPDF",
        "React 19 frontend with TypeScript and Vite",
        "Data fetching and caching with TanStack Query; state management with Zustand",
        "Forms with React Hook Form and validation with Zod",
        "Interactive charts and business performance indicators with Recharts",
        "PostgreSQL persistence through Entity Framework Core and Npgsql",
        "Dashboard with performance indicators, reports and sales estimates",
        "Order entry and generation of print-ready documents",
        "Docker containers and tests with Vitest and xUnit"
      ],
      "caseStudy": {
        "problem": "Orders were recorded on paper, and the business lacked reliable information about its actual stock levels, sales and profit margins. This limited visibility made supplier purchasing difficult to plan and left uncertainty about which products to reorder and in what quantities.",
        "role": "Gathered and analyzed the business requirements and built the management system from the ground up. Handled deployment and continue to maintain the system, including its API, frontend and integration with the customer-facing website.",
        "decisions": "Separate the React 19 frontend from the C#/.NET 10 REST API and centralize business data in PostgreSQL using Entity Framework Core. Use TanStack Query for data fetching and caching, Zustand for state management and Zod for form validation. Protect endpoints with JWT authentication and role-based permissions, and hash passwords with BCrypt.NET. Generate PDFs in the API with QuestPDF and connect order and inventory management to the customer-facing web catalog.",
        "result": "The system keeps inventory up to date and saves approximately 15 minutes per order entered, according to the client’s estimate. It brings together monthly sales KPIs, best- and lowest-selling product rankings, profit margins and estimated sales for the month. Expiry alerts and stock information help prevent product losses and overbuying. It also keeps the product catalog on the customer-facing website up to date in real time.",
        "highlight": "Up-to-date inventory and catalog; approximately 15 minutes saved per order, based on the client’s estimate.",
        "evidence": "Technology stack checked against dependency manifests and code in the backoffice and API repositories. The approximately 15 minutes saved per order is a client estimate for the integrated catalog and management system workflow, not two separate savings."
      },
      "summary": {
        "problem": "Orders were recorded on paper, and the business lacked reliable information about its actual stock levels, sales and profit margins. This limited visibility made supplier purchasing difficult to plan and left uncertainty about which products to reorder and in what quantities.",
        "role": "Gathered and analyzed the business requirements and built the management system from the ground up. Handled deployment and continue to maintain the system, including its API, frontend and integration with the customer-facing website.",
        "result": "The system keeps inventory up to date and saves approximately 15 minutes per order entered, according to the client’s estimate. It brings together monthly sales KPIs, best- and lowest-selling product rankings, profit margins and estimated sales for the month. Expiry alerts and stock information help prevent product losses and overbuying. It also keeps the product catalog on the customer-facing website up to date in real time."
      }
    },
    "2": {
      "title": "Mayorista Javier Customer Catalog (PWA)",
      "status": "In production",
      "description": "Mayorista Javier’s customer website combines an up-to-date catalog and WhatsApp orders with contact information, directions, a buying guide and FAQs. The PWA integrates data from the business management system.",
      "longDescription": "A PWA built with Next.js, React 19, TypeScript and Tailwind CSS. It integrates data from the business management system to keep products and prices up to date. Customers browse products, prepare an order and send it through WhatsApp; the business uses that message to enter the order into its system and generate a PDF order document.",
      "features": [
        "Build orders and send them through WhatsApp",
        "Product catalog with search and filters",
        "Product and price lookup",
        "Integration with the business management system",
        "TypeScript implementation",
        "Responsive Next.js, React 19 and Tailwind CSS interface",
        "SEO and performance considerations",
        "Catalog designed to accommodate more products and users",
        "Installable PWA on mobile and desktop",
        "Deployment on Vercel",
        "WhatsApp and phone contact; store location with a directions link",
        "Buying guide with no account required and collection or delivery options",
        "FAQs covering pricing, availability and products sold by weight",
        "Wholesale and retail pricing based on the quantities selected"
      ],
      "caseStudy": {
        "problem": "The business did not have a customer-facing catalog where customers could browse available products and prices.",
        "role": "Built the PWA and integrated it with the business management system to display information updated in real time. Implemented the catalog and order preparation flow, along with contact information, directions, a buying guide and FAQs.",
        "decisions": "Connect the catalog to the business management system and deliver a PWA that adapts to different devices. Let customers prepare an order online and send it as a WhatsApp message that staff can copy and paste into their system. This workflow allows staff to record the order and generate a print-ready PDF in under 10 seconds, as confirmed by Rodrigo. Keep contact details, directions, buying instructions and FAQs in a section accessible from the catalog to guide customers through the ordering process.",
        "result": "Customers can browse the product catalog, prepare an order and send it through WhatsApp. The business receives a message ready to copy and paste into its system to record the order and generate a print-ready PDF. The client’s estimate of approximately 15 minutes saved per order applies to this integrated workflow; it is not an additional saving beyond the management system. The website also brings together contact options, the store location and guidance on arranging collection or delivery.",
        "highlight": "From catalog to WhatsApp order, with order entry and PDF generation in under 10 seconds.",
        "evidence": "Integration and technology stack checked against the repositories. Rodrigo confirmed that entering the order and generating the PDF takes under 10 seconds. The approximately 15 minutes saved per order is a client estimate for the integrated workflow, not an additional saving."
      },
      "summary": {
        "problem": "The business did not have a customer-facing catalog where customers could browse available products and prices.",
        "role": "Built the PWA and integrated it with the business management system to display information updated in real time. Implemented the catalog and order preparation flow, along with contact information, directions, a buying guide and FAQs.",
        "result": "Customers can browse the product catalog, prepare an order and send it through WhatsApp. The business receives a message ready to copy and paste into its system to record the order and generate a print-ready PDF. The client’s estimate of approximately 15 minutes saved per order applies to this integrated workflow; it is not an additional saving beyond the management system. The website also brings together contact options, the store location and guidance on arranging collection or delivery."
      }
    },
    "3": {
      "title": "Meeting Room Booking — Jaume & Sere",
      "status": "In production",
      "description": "Final-year project for managing meeting rooms, locations and bookings. Corporate sign-in uses Active Directory, while Microsoft Graph handles Outlook invitations and notifications. Built with .NET and React.",
      "longDescription": "A meeting room booking system developed as a final-year Information Technology Analyst project. The backend uses C#/.NET 8, Entity Framework Core and SQL Server Express, with Active Directory authentication and role-based access. The React, Vite and TypeScript interface supports bookings, cancellations, room usage reporting and change auditing. Microsoft Graph sends meeting invitations and cancellation notices through Outlook. Deployed on Azure App Service.",
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
        "role": "Contributed to requirements analysis and team development of the meeting room booking system for Jaume & Sere as a final-year project.",
        "decisions": "Replace the paper agenda with a central calendar supporting bookings and cancellations. Integrate Active Directory for corporate access and Outlook through Microsoft Graph to send invitations and email notifications to all participants, including cancellation notices, using a .NET API and React frontend.",
        "result": "The organization reported that bookings incorrectly blocking meeting rooms were eliminated. Email invitations and notifications also resolved communication gaps: all participants receive meeting invitations and cancellation notices.",
        "highlight": "No more bookings incorrectly blocking rooms",
        "evidence": "Outcome reported by the organization."
      },
      "summary": {
        "problem": "Paper bookings, incorrectly blocked rooms and missed meeting updates.",
        "role": "Requirements analysis and team development for the final-year project.",
        "result": "Incorrect bookings eliminated and meeting notifications centralized."
      }
    },
    "4": {
      "title": "FyV Traslados",
      "status": "In production",
      "description": "Business website presenting transport services, the booking process and WhatsApp inquiries. Built with Astro and Tailwind CSS, with service sections and technical SEO.",
      "longDescription": "Designed and developed the FyV Traslados business website to present transport services, pricing, the booking process and contact information. Reusable Astro components and Tailwind CSS support the responsive layout. WhatsApp links help visitors request a quote, while a sitemap and structured data support technical SEO.",
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
      },
      "summary": {
        "problem": "No single place to explain services and the booking process.",
        "role": "Designed and developed the business website.",
        "result": "Published website with services, process and WhatsApp contact."
      }
    },
    "5": {
      "title": "Ratio · Construction management for Espina",
      "status": "In development",
      "description": "Full Stack contributor to Ratio for Espina, working with engineer Luis Terzano. Delivered the complete Gantt chart module, security improvements, audit logging, Excel workflows and installers, and modernized the WPF interface and visual identity.",
      "longDescription": "A C# WPF desktop client connected to a .NET 8 API with MongoDB persistence. The Gantt chart module links work-item dates to the active budget, allocates planned costs across the selected working days, and provides weekly and monthly views. Viewing and editing follow user permissions; charts, totals and exports use saved data separately from pending changes. Distribution includes installers and connection validation.",
      "features": [
        "Construction project management for Uruguay’s local context",
        "Budgets with materials, labor, machinery, work items and cost categories",
        "Direct and indirect costs, profit allocation and bid adjustments",
        "Reports and Excel spreadsheet import and export",
        "Centralized information across departments",
        "Local requirements, including construction-sector social contributions",
        "Collaboration as a goal instead of isolated spreadsheets",
        "API installers for Windows and Linux servers",
        "Desktop client installer for Windows",
        "My contribution: admin panel logs and user management",
        "My contribution: end-to-end Excel import and export",
        "My contribution: end-to-end Inno Setup installer generation",
        "My contribution: complete Gantt chart module linked to the active budget",
        "Work-item dates; weekly and monthly scales",
        "Configurable working-day calendar, without automatic holiday exclusion",
        "Monthly summaries and planned and cumulative cost charts",
        "Materials, labor, equipment, services, supplies, indirect costs, contingencies and person-hour breakdowns",
        "Search, unscheduled-item filter and jump-to-today navigation",
        "Excel export and paginated print/PDF via the Windows print dialog",
        "Viewing/editing permissions and unsaved-change protection",
        "Endpoint authentication, role-based permissions and login protection",
        "Critical-operation auditing and access tracing",
        "MongoDB indexes for logs and users",
        "WPF modernization: navigation, Fluent styling, icons, branding and reusable components",
        "Installation and updates: services, optional MongoDB and connection validation",
        "Planned: configurable company name, logo and system settings without code changes"
      ],
      "cover": {
        "eyebrow": "In development",
        "logo": "/images/Ratio/ratio-logo.jpg",
        "subtitle": "Free software · Full Stack contribution"
      },
      "delivery": {
        "title": "Try Ratio",
        "description": "Contact me to evaluate the software. I provide installers for the API on Windows or Linux servers and for the Windows desktop client.",
        "cta": "Request installers"
      },
      "caseStudy": {
        "problem": "Espina needed construction management software adapted to Uruguay’s local context, including construction-sector social contributions (leyes sociales). Departments relied on multiple Excel spreadsheets that were difficult to use and understand and did not support effective collaboration. The challenge also includes reducing fragmented information, repeated data entry and conflicting versions.",
        "role": "Full Stack contributor working with engineer Luis Terzano. Implemented the complete Gantt chart module, including scheduling logic, the API and the WPF interface. Also developed audit logging, security and permission improvements, Excel import and export, and Inno Setup installers. Modernized screens, navigation, Fluent styling, icons, visual identity and reusable components.",
        "decisions": "Link planning to the active budget and allocate costs proportionally across selected days. Separate pending changes from saved data used by charts, totals and exports. Include permissions, filters and consistency warnings. Amounts are planned costs, not actual receipts or payments. Added endpoint authentication, role-based permissions, login rate limiting and tracing for access and critical operations; centralized styles/icons and improved installation and updates.",
        "result": "The complete Gantt chart module is in use for construction scheduling and reviewing resources and planned costs, both monthly and cumulative. It identifies unscheduled work items, shows how much of the budget has been scheduled, and supports Excel export and printing to paper or PDF. Permissions and auditing were strengthened across the client and API, and the interface was made consistent throughout the system.",
        "highlight": "Implemented scheduling and cost planning; stronger access controls and auditing, with a consistent interface.",
        "evidence": "Contributions checked against Rodrigo's commits and local client/API code, including Gantt and detalles-ui branches. Gantt chart usage confirmed by Rodrigo. Company configuration is planned, not yet implemented. No quantified impact metrics."
      },
      "summary": {
        "problem": "Espina needed construction management software adapted to Uruguay’s local context, including construction-sector social contributions (leyes sociales). Departments relied on multiple Excel spreadsheets that were difficult to use and understand and did not support effective collaboration. The challenge also includes reducing fragmented information, repeated data entry and conflicting versions.",
        "role": "Full Stack contributor working with engineer Luis Terzano. Implemented the complete Gantt chart module, including scheduling logic, the API and the WPF interface. Also developed audit logging, security and permission improvements, Excel import and export, and Inno Setup installers. Modernized screens, navigation, Fluent styling, icons, visual identity and reusable components.",
        "result": "The complete Gantt chart module is in use for construction scheduling and reviewing resources and planned costs, both monthly and cumulative. It identifies unscheduled work items, shows how much of the budget has been scheduled, and supports Excel export and printing to paper or PDF. Permissions and auditing were strengthened across the client and API, and the interface was made consistent throughout the system."
      },
      "collaborator": {
        "name": "Ing. Luis Terzano",
        "url": "https://github.com/jterzano"
      }
    },
    "6": {
      "title": "PimPollo · Customer website and product catalog",
      "status": "In development",
      "description": "PimPollo's customer site is under construction, with a mobile-first landing page, shop details and WhatsApp contact. Full Stack development spans Astro, React 19 admin and a .NET 10/PostgreSQL API; no online payments.",
      "longDescription": "PimPollo's live website already features a modern, responsive under-construction landing page with accessible animation, About us, How to buy, FAQs, location, opening hours, Instagram and WhatsApp. Business details are managed through the API. The site includes local SEO, social previews, semantic HTML that works without JavaScript and automated agent-navigation checks. I also built a React 19 admin panel with CRUD for products (image, name and price), promotions and settings, and a layered .NET 10 API using EF Core and PostgreSQL on Railway. Authentication, secure session cookies, CSRF protection, auditing and scheduled encrypted backups support the system. The interactive public catalog and order-preparation workflow remain in development, without checkout or online payments.",
      "features": [
        "Live: mobile-first under-construction landing page with chick mascot and accessible animations.",
        "Live: About us, How to buy, FAQs, location, opening hours, Instagram and WhatsApp.",
        "Astro website: API-managed business settings, local SEO, JSON-LD, Open Graph and social preview.",
        "Agent-friendly navigation: semantic hours, how-to-buy and contact journeys checked with automated browser tests.",
        "React 19 admin: products with image, name, price and unit, promotion/settings CRUD, login and password updates.",
        ".NET 10 API + EF Core + PostgreSQL: public business endpoints and protected management operations.",
        "Security: HttpOnly/Secure cookies, CSRF, rotating sessions, login lockout and structured logs.",
        "Infrastructure and quality: Vercel, Railway, Docker, private PostgreSQL, scheduled encrypted backups and CI with real database/browser tests.",
        "Planned: launch the browsable public catalog, product selection and WhatsApp order preparation.",
        "Scope: no online payment gateway or checkout."
      ],
      "cover": {
        "eyebrow": "In development",
        "logo": "/images/PimPollo/favicon.svg",
        "subtitle": "Under construction · Website & admin · .NET API"
      },
      "caseStudy": {
        "problem": "PimPollo needed a fast, mobile-accessible and discoverable website combining shop details, products and promotions without online payments, alongside a secure admin interface to manage products, prices and settings.",
        "role": "Full Stack development of the Astro public site, React 19/TypeScript admin panel, C#/.NET 10 API and PostgreSQL/Railway/Vercel integration, including responsive design, business settings, security, CI and tests.",
        "decisions": "Separate public website, admin and API concerns. Render contact details and opening hours in indexable HTML synchronized with API settings, plus social metadata and no-JavaScript navigation. Protect management operations with authentication, secure cookies, CSRF, token rotation and login throttling. Validate contracts with real PostgreSQL and automated browser tests.",
        "result": "Live PimPollo landing page with brand identity, WhatsApp contact, opening hours, shop information and FAQs. Working admin panel and API for products, promotions and business settings. Technical SEO, social preview and automated accessibility/navigation checks are implemented; the interactive public catalog and full order-preparation flow remain under construction.",
        "highlight": "Landing page live · Admin and API operational · Public catalog in development, without online payment.",
        "evidence": "Cross-checked against PimPollo: web/src/pages/index.astro serves the landing, web/src/pages/_home.astro contains a preliminary catalog, and admin/ and api/ manage business data. GitHub Actions covers PostgreSQL, browser, performance and navigation checks. CI lab results are not presented as universal production guarantees."
      },
      "summary": {
        "problem": "Unify shop information, contact, a future catalog and management in a mobile-first experience.",
        "role": "Full Stack: Astro website, React admin, .NET 10 API and PostgreSQL.",
        "result": "Landing and contact published; admin and API operational. Catalog and ordering still under construction."
      }
    }
  }
}

export function getProjects(locale: Locale): Project[] {
  return projectCore.map(({ images, ...core }) => ({
    ...core, ...projectCopy[locale][core.id],
    featured: core.id === 1 || core.id === 5,
    images: images.map(({ src, captions }) => ({ src, ...captions[locale] })),
  })).sort((a, b) => Number(b.featured) - Number(a.featured))
}
export const projectPath = (project: Pick<Project, "slug">, locale: Locale) =>
  `${locale === "en" ? "/en" : "/"}#${project.slug}`
