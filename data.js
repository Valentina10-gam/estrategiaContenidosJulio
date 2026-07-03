const contentPieces = [
  {
    id: 1,
    date: "Miércoles 1 de julio",
    week: "Semana 1",
    format: "Reel / trend",
    network: "Instagram + Facebook",
    pillar: "Contenido de oportunidad",
    sector: "Multisectorial B2B",
    title: "Trend: Fuera de lugar",
    objective: "Aprovechar un contenido de oportunidad ya publicado para mantener presencia activa y cercanía con la audiencia.",
    hook: "Fuera de lugar.",
    cta: "Contenido publicado.",
    content: [
      "Pieza de tendencia publicada como primera salida del mes.",
      "Mantiene actividad orgánica mientras se reorganiza la parrilla estratégica.",
      "Funciona como contenido ligero de presencia y reconocimiento."
    ],
    stories: ["No aplica."],
    material: "Contenido ya publicado.",
    status: "Publicado.",
    alternative: "No aplica.",
    tags: ["Instagram / Facebook", "Reel"]
  },
  {
    id: 2,
    date: "Viernes 3 de julio",
    week: "Semana 1",
    format: "Post nativo LinkedIn + adaptación editorial para Instagram y Facebook",
    network: "LinkedIn",
    adaptation: "Instagram + Facebook",
    pillar: "Seguimiento y trazabilidad",
    sector: "Multisectorial B2B",
    title: "¿Qué debería dejar claro una visita técnica?",
    objective: "Posicionar a TKC como un aliado técnico que deja claridad, recomendaciones y seguimiento, no solo “servicio realizado”.",
    hook: "Una visita técnica no debería terminar con “servicio realizado”.",
    cta: "¿Qué información consideras indispensable después de una visita técnica?",
    content: [
      "Qué se encontró.",
      "Qué se realizó.",
      "Qué recomendaciones quedaron.",
      "Qué debe corregirse internamente.",
      "Cuándo debe revisarse nuevamente."
    ],
    stories: [
      "Historia 1: “Después de una visita técnica, ¿te queda claro qué sigue?” Encuesta: Sí / A veces.",
      "Historia 2: “Hallazgos · Intervención · Recomendaciones · Seguimiento” CTA: Mira la publicación."
    ],
    material: "Placa corporativa o carrusel editorial gráfico.",
    status: "Listo para diseño.",
    alternative: "Post de texto para LinkedIn y estática resumen para Instagram/Facebook.",
    tags: ["LinkedIn", "Instagram / Facebook", "Autoridad"]
  },
  {
    id: 3,
    date: "Lunes 6 de julio",
    week: "Semana 2",
    format: "Reel",
    network: "Instagram, Facebook, TikTok, YouTube Shorts y LinkedIn",
    pillar: "Innovación",
    sector: "Operaciones sensibles",
    title: "TKC incorpora una nueva capacidad técnica: TÉMPANO.",
    objective: "Posicionamiento técnico.",
    hook: "Nuevo equipo. Nueva tecnología. Ahora en TKC.",
    cta: "Conoce esta nueva capacidad.",
    stories: ["Repost único del reel con texto: Nuevo equipo. Nueva tecnología. Ahora en TKC."],
    material: "Grabación de TÉMPANO.",
    status: "Pendiente de grabación.",
    alternative: "Versión gráfica con tomas disponibles.",
    note: "No debe tener contenidos derivados.",
    tags: ["Reel", "LinkedIn", "TÉMPANO", "Capacidades técnicas"]
  },
  {
    id: 4,
    date: "Miércoles 8 de julio",
    week: "Semana 2",
    format: "Carrusel",
    network: "Instagram + Facebook",
    pillar: "Riesgos por sector",
    sector: "Restaurantes y operaciones de alimentos",
    title: "Cinco zonas de una operación de alimentos que conviene revisar antes.",
    objective: "Educación preventiva.",
    hook: "En una operación de alimentos, un detalle no siempre se queda pequeño.",
    cta: "Compártelo con Calidad, Inocuidad o Administración.",
    stories: [
      "Encuesta: ¿Tu cocina tiene una rutina de revisión preventiva? Sí / Aún no.",
      "CTA: Guarda el carrusel."
    ],
    material: "Diseño gráfico.",
    status: "Listo para diseño.",
    alternative: "Estática resumen.",
    tags: ["Instagram / Facebook", "Carrusel", "Sectores"]
  },
  {
    id: 5,
    date: "Jueves 9 de julio",
    week: "Semana 2",
    format: "Reel",
    network: "Instagram, Facebook, TikTok y YouTube Shorts",
    pillar: "Riesgos por sector",
    sector: "Bodegas",
    title: "Una bodega no se revisa desde una oficina.",
    objective: "Autoridad y retención.",
    hook: "Una bodega puede verse organizada y aun así tener condiciones que requieren revisión.",
    cta: "Guarda este reel para tu próxima revisión de bodega.",
    stories: [
      "Encuesta: ¿Qué zona se revisa menos en una bodega? Accesos / Perímetro.",
      "CTA: Mira el reel."
    ],
    material: "Grabación de bodega o clips de stock realistas.",
    status: "Pendiente de grabación.",
    alternative: "Carrusel técnico.",
    tags: ["Reel", "Sectores"]
  },
  {
    id: 6,
    date: "Viernes 10 de julio",
    week: "Semana 2",
    format: "Reel",
    network: "Instagram, Facebook, TikTok y YouTube Shorts",
    pillar: "Hídriko",
    sector: "Tanques y operaciones institucionales",
    title: "Un tanque no solo debe quedar limpio. Debe quedar trazable.",
    objective: "Posicionar Hídriko como servicio técnico.",
    hook: "¿Qué debería quedar después de intervenir un tanque?",
    cta: "Revisa qué recibió tu operación en su última intervención.",
    stories: [
      "Encuesta: ¿Sabes cuándo fue la última revisión de tu tanque? Sí / No.",
      "CTA: Ve el reel."
    ],
    material: "Videos reales de tanque, técnico, informe o certificado.",
    status: "Pendiente de material.",
    alternative: "Reel gráfico con fotos existentes.",
    tags: ["Reel", "Hídriko"]
  },
  {
    id: 7,
    date: "Lunes 13 de julio",
    week: "Semana 3",
    format: "Carrusel",
    network: "Instagram + Facebook",
    pillar: "Riesgos por sector",
    sector: "Centros comerciales",
    title: "La experiencia del visitante también empieza en zonas que no ve.",
    objective: "Mostrar relevancia de TKC en operaciones de centros comerciales.",
    hook: "Cuartos de residuos, cargue, bodegas, pasillos técnicos y zonas de apoyo también afectan la operación.",
    cta: "Compártelo con Operaciones o Mantenimiento.",
    content: [
      "Cuartos de residuos.",
      "Áreas de cargue y descargue.",
      "Bodegas de locales.",
      "Pasillos técnicos.",
      "Zonas de apoyo operativo.",
      "Prevención en zonas invisibles que también protege la experiencia del visitante."
    ],
    stories: [
      "Encuesta: ¿Qué zona tiene más impacto operativo? Residuos / Cargue.",
      "CTA: Mira el carrusel."
    ],
    material: "Diseño gráfico.",
    status: "Listo para diseño.",
    alternative: "Estática con cinco zonas operativas.",
    tags: ["Instagram / Facebook", "Carrusel", "Sectores"]
  },
  {
    id: 8,
    date: "Martes 14 de julio",
    week: "Semana 3",
    format: "Carrusel",
    network: "Instagram + Facebook",
    pillar: "Capacidades técnicas",
    sector: "Multisectorial B2B",
    title: "¿Sabías que no todo control de plagas se hace con aspersión?",
    objective: "Mostrar que TKC trabaja con diferentes métodos y no con soluciones estándar.",
    hook: "Monitoreo, controles pasivos, intervención activa, exclusión o barreras físicas: cada operación puede necesitar algo distinto.",
    cta: "Guarda este post antes de solicitar una visita técnica.",
    content: [
      "Monitoreo.",
      "Controles pasivos.",
      "Controles activos.",
      "Exclusión y barreras físicas.",
      "Cada capacidad tiene un propósito distinto.",
      "El diagnóstico define la intervención."
    ],
    stories: [
      "Encuesta: ¿Creías que todo control de plagas era fumigación? Sí / No.",
      "CTA: Mira el carrusel."
    ],
    material: "Diseño editorial gráfico, íconos y esquemas técnicos. No requiere fotos ni grabación.",
    status: "Listo para diseño.",
    alternative: "No aplica; debe resolverse completamente desde diseño gráfico.",
    tags: ["Instagram / Facebook", "Carrusel", "Capacidades técnicas"]
  },
  {
    id: 9,
    date: "Miércoles 15 de julio",
    week: "Semana 3",
    format: "Carrusel",
    network: "Instagram + Facebook",
    pillar: "TKC Security",
    sector: "Empresas e instituciones",
    title: "Un plan de emergencia no puede quedarse archivado.",
    objective: "Visibilizar servicios de revisión, prevención y preparación operativa.",
    hook: "La seguridad se revisa antes de necesitarla.",
    cta: "Compártelo con SST, Mantenimiento o Administración.",
    content: [
      "Extintores accesibles e identificados.",
      "Mantenimiento vigente.",
      "Rutas despejadas.",
      "Equipo informado.",
      "Plan de contingencia revisado.",
      "La seguridad se revisa antes de necesitarla."
    ],
    stories: [
      "Encuesta: ¿Sabes dónde está el extintor más cercano? Sí / No.",
      "CTA: Guarda el carrusel."
    ],
    material: "Diseño gráfico o fotos reales de extintores, señalización y rutas.",
    status: "Pendiente de material.",
    alternative: "Carrusel editorial gráfico.",
    tags: ["Instagram / Facebook", "Carrusel", "TKC Security"]
  },
  {
    id: 10,
    date: "Jueves 16 de julio",
    week: "Semana 3",
    format: "Reel",
    network: "Instagram, Facebook, TikTok y YouTube Shorts",
    pillar: "Riesgos por sector",
    sector: "Hoteles",
    title: "En hotelería, una señal no debería llegar primero a recepción.",
    objective: "Conectar prevención con experiencia del huésped.",
    hook: "La prevención también ocurre donde el huésped no mira.",
    cta: "Compártelo con Operaciones, Mantenimiento o Administración.",
    stories: [
      "Encuesta: ¿Qué área se revisa menos en una operación hotelera? Habitaciones / Áreas de apoyo.",
      "CTA: Mira el reel."
    ],
    material: "Videos de hotel o material reutilizable.",
    status: "Pendiente de validación.",
    alternative: "Carrusel narrativo.",
    tags: ["Reel", "Sectores"]
  },
  {
    id: 11,
    date: "Viernes 17 de julio",
    week: "Semana 3",
    format: "Carrusel",
    network: "Instagram + Facebook",
    pillar: "Riesgos por sector",
    sector: "Colegios y clínicas",
    title: "En espacios de alta circulación, intervenir también exige planear.",
    objective: "Mostrar criterio técnico.",
    hook: "No todos los espacios se abordan igual.",
    cta: "Guarda este post si administras espacios de alta circulación.",
    stories: [
      "Encuesta: ¿Tu operación tiene zonas de alta circulación? Sí / No.",
      "CTA: Guarda el carrusel."
    ],
    material: "Diseño gráfico.",
    status: "Listo para diseño.",
    alternative: "Estática.",
    tags: ["Instagram / Facebook", "Carrusel", "Sectores"]
  },
  {
    id: 12,
    date: "Martes 21 de julio",
    week: "Semana 4",
    format: "Reel",
    network: "Instagram, Facebook, TikTok, YouTube Shorts y LinkedIn",
    pillar: "Respaldo y trayectoria",
    sector: "Multisectorial B2B",
    title: "Desde 2004, acompañando procesos de saneamiento ambiental.",
    objective: "Construir confianza.",
    hook: "El servicio no termina en la aplicación.",
    cta: "Conoce el enfoque que respalda a TKC.",
    stories: [
      "Desde 2004 acompañando operaciones.",
      "CTA: Mira nuestra historia."
    ],
    material: "Fotos históricas o equipo actual.",
    status: "Pendiente de validación.",
    alternative: "Reel de tipografía y material actual.",
    tags: ["Reel", "LinkedIn", "Autoridad"]
  },
  {
    id: 13,
    date: "Miércoles 22 de julio",
    week: "Semana 4",
    format: "Carrusel",
    network: "Instagram + Facebook",
    pillar: "Capacidades técnicas",
    sector: "Industria y plantas",
    title: "El control pasivo también es control técnico.",
    objective: "Educar sobre monitoreo y prevención.",
    hook: "No todo control de plagas se nota en una aplicación.",
    cta: "Compártelo con Calidad, Mantenimiento o HSEQ.",
    stories: [
      "Encuesta: ¿Todo control de plagas implica fumigación? Sí / No.",
      "CTA: Mira el carrusel."
    ],
    material: "Monitores, barreras, accesorios o diseño gráfico.",
    status: "Pendiente de validación.",
    alternative: "Carrusel ilustrado.",
    tags: ["Instagram / Facebook", "Carrusel", "Capacidades técnicas"]
  },
  {
    id: 14,
    date: "Jueves 23 de julio",
    week: "Semana 4",
    format: "Carrusel",
    network: "Instagram + Facebook",
    pillar: "Hídriko",
    sector: "Operaciones institucionales y comerciales",
    title: "Hídriko no es solo lavado de tanques.",
    objective: "Visibilizar el portafolio de Hídriko.",
    hook: "El sistema de agua también requiere seguimiento.",
    cta: "Guarda esta guía para identificar qué necesita tu operación.",
    stories: [
      "Encuesta: ¿Qué sistema de agua se revisa menos? Tanques / Trampas de grasa.",
      "CTA: Mira el carrusel."
    ],
    material: "Diseño y fotos Hídriko.",
    status: "Pendiente de validación.",
    alternative: "Carrusel gráfico.",
    tags: ["Instagram / Facebook", "Carrusel", "Hídriko"]
  },
  {
    id: 15,
    date: "Viernes 24 de julio",
    week: "Semana 4",
    format: "Carrusel",
    network: "Instagram + Facebook",
    pillar: "Riesgos por sector",
    sector: "Propiedad horizontal",
    title: "La queja llega al chat. El riesgo casi siempre empezó antes.",
    objective: "Compartidos y relevancia para administración.",
    hook: "Las zonas comunes también necesitan revisión preventiva.",
    cta: "Compártelo con Administración o Consejo.",
    stories: [
      "Caja: ¿Qué zona genera más quejas en conjuntos?",
      "CTA: Guarda el carrusel."
    ],
    material: "Diseño gráfico.",
    status: "Listo para diseño.",
    alternative: "Estática.",
    tags: ["Instagram / Facebook", "Carrusel", "Sectores"]
  },
  {
    id: 16,
    date: "Lunes 27 de julio",
    week: "Semana 5",
    format: "Post nativo",
    network: "LinkedIn",
    pillar: "Prevención y seguimiento",
    sector: "Multisectorial B2B",
    title: "Un plan preventivo no es repetir la misma acción.",
    objective: "Construir autoridad técnica.",
    hook: "La recurrencia no garantiza prevención. El seguimiento ayuda a construirla.",
    cta: "¿Tu operación trabaja con una frecuencia fija o con un plan ajustado a sus condiciones?",
    stories: ["No aplica."],
    material: "Placa gráfica simple.",
    status: "Listo para diseño.",
    alternative: "Post de texto.",
    tags: ["LinkedIn", "Autoridad"]
  },
  {
    id: 17,
    date: "Martes 28 de julio",
    week: "Semana 5",
    format: "Reel",
    network: "Instagram, Facebook, TikTok y YouTube Shorts",
    pillar: "TKC Security",
    sector: "Empresas e instituciones",
    title: "Antes de una emergencia, revisa esto.",
    objective: "Autoridad y recordación.",
    hook: "Una emergencia no empieza cuando se usa un extintor.",
    cta: "Compártelo con quien lidera SST o Mantenimiento.",
    stories: [
      "Encuesta: ¿Tu ruta de evacuación está libre hoy? Sí / Debo revisarla.",
      "CTA: Mira el reel."
    ],
    material: "Videos de extintores, rutas o técnico.",
    status: "Pendiente de material.",
    alternative: "Reel tipográfico.",
    tags: ["Reel", "TKC Security"]
  },
  {
    id: 18,
    date: "Miércoles 29 de julio",
    week: "Semana 5",
    format: "Reel",
    network: "Instagram, Facebook, TikTok y YouTube Shorts",
    pillar: "Capacidades técnicas",
    sector: "Multisectorial B2B",
    title: "Control de roedores no es poner cebos y esperar.",
    objective: "Educación técnica.",
    hook: "El control comienza entendiendo las rutas.",
    cta: "Compártelo con quien revisa almacenamiento o mantenimiento.",
    stories: [
      "Encuesta: ¿Qué define una estrategia para roedores? El cebo / El diagnóstico.",
      "CTA: Mira el reel."
    ],
    material: "Material de inspección, cajas, trampas o monitoreo.",
    status: "Pendiente de validación.",
    alternative: "Reel gráfico.",
    tags: ["Reel", "Capacidades técnicas"]
  },
  {
    id: 19,
    date: "Jueves 30 de julio",
    week: "Semana 5",
    format: "Post nativo",
    network: "LinkedIn",
    pillar: "Seguimiento y trazabilidad",
    sector: "Multisectorial B2B",
    title: "Un informe técnico debe dejar decisiones claras.",
    objective: "Autoridad y confianza.",
    hook: "Una visita técnica no debería cerrar con “servicio realizado”.",
    cta: "¿Qué información debería recibir tu operación después de una intervención?",
    stories: ["No aplica."],
    material: "Placa corporativa.",
    status: "Listo para diseño.",
    alternative: "Post de texto.",
    tags: ["LinkedIn", "Autoridad"]
  },
  {
    id: 20,
    date: "Viernes 31 de julio",
    week: "Semana 5",
    format: "Carrusel",
    network: "Instagram + Facebook",
    pillar: "Sectores y operación",
    sector: "Multisectorial B2B",
    title: "El riesgo no se ve igual en todas las operaciones.",
    objective: "Cierre estratégico del mes.",
    hook: "Insectos rastreros, voladores, roedores y aves requieren diagnósticos y estrategias distintas.",
    cta: "Guarda este carrusel para tu próxima reunión de operaciones.",
    stories: [
      "Encuesta: ¿Qué riesgo operativo requiere más atención hoy? Rastreros / Roedores.",
      "CTA: Guarda el carrusel."
    ],
    material: "Diseño gráfico.",
    status: "Listo para diseño.",
    alternative: "Estática resumen.",
    tags: ["Instagram / Facebook", "Carrusel", "Sectores"]
  }
];

const specialStories = [
  {
    date: "Lunes 20 de julio",
    title: "Historia institucional únicamente",
    text: "Hoy celebramos a Colombia. Seguimos acompañando las operaciones que mueven al país.",
    note: "Sin CTA comercial."
  }
];
