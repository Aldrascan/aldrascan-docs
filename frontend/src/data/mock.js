// Mock data for AldraScan dental scanner comparison website

export const companyInfo = {
  name: "AldraScan",
  tagline: "Future is now",
  whatsappNumber: "34662078540",
  email: "info@aldrascan.com",
  year: 2025
};

export const heroData = {
  tag: "Tecnología Dental Avanzada",
  title: "Medit i900 vs Shining Elite",
  subtitle: "En AldraScan no vendemos cajas, integramos soluciones. Analizamos las dos puntas de lanza del mercado para ayudarte a elegir el sistema perfecto."
};

export const products = [
  {
    id: 1,
    name: "Medit i900",
    tagline: "El estándar de oro",
    badge: "BEST SELLER",
    badgeColor: { bg: "#B3D4FF", text: "#1A70FF" },
    accentColor: "#1A70FF",
    secondaryColor: "#B3D4FF",
    description: "La bestia del flujo digital. Ecosistema abierto, apps clínicas avanzadas y una velocidad extrema.",
    features: [
      { icon: "ri-apps-2-line", text: "Ecosistema Medit Link & Apps" },
      { icon: "ri-speed-line", text: "Velocidad Extrema (15 seg)" },
      { icon: "ri-fingerprint-line", text: "Interfaz 100% Táctil" }
    ],
    image: "https://customer-assets.emergentagent.com/job_scanner-compare/artifacts/8vfocf9c_image.png"
  },
  {
    id: 2,
    name: "Shining Elite",
    tagline: "Eficiencia pura",
    badge: "CALIDAD / PRECIO",
    badgeColor: { bg: "#E0F2FE", text: "#1174D1" },
    accentColor: "#1174D1",
    secondaryColor: "#1D242E",
    description: "La opción inteligente. Un escáner robusto, con un flujo de trabajo sencillo y validado.",
    features: [
      { icon: "ri-book-open-line", text: "Curva de aprendizaje cero" },
      { icon: "ri-money-dollar-circle-line", text: "ROI Inmediato" },
      { icon: "ri-sensor-line", text: "Motion Sensing Higiénico" }
    ],
    image: "https://customer-assets.emergentagent.com/job_scanner-compare/artifacts/w7mcvzrd_Sinss%20ti%CC%81tulo%204.png"
  }
];

export const comparisonTable = [
  { feature: "Velocidad de Escaneo", medit: "Extremadamente Rápida (70 FPS)", shining: "Muy Rápida (Estándar)" },
  { feature: "Software & Apps", medit: "Suite Completa (Smile, Ortho, Maker...)", shining: "Ortho Simulation + Reporte" },
  { feature: "Peso", medit: "Ultraligero (165g)", shining: "Ligero (198g)" },
  { feature: "Conexión", medit: "USB-C Directo", shining: "USB 3.0" },
  { feature: "Precio", medit: "Gama Alta", shining: "Gama Media / Alta" }
];

export const trustFeatures = [
  {
    icon: "ri-presentation-fill",
    title: "Formación In-Situ",
    description: "Instalamos, configuramos y formamos a todo tu equipo con pacientes reales."
  },
  {
    icon: "ri-loop-left-line",
    title: "Equipo de Sustitución",
    description: "Si falla, te enviamos uno de sustitución en 24h para que no pares."
  },
  {
    icon: "ri-customer-service-2-fill",
    title: "Soporte Directo",
    description: "Soporte técnico directo por WhatsApp con expertos en flujo digital."
  }
];

export const specialties = [
  { value: "General", label: "Odontología General" },
  { value: "Implantes y Cirugía", label: "Implantología y Cirugía" },
  { value: "Ortodoncia", label: "Ortodoncia (Alineadores)" },
  { value: "Prótesis Fija", label: "Prótesis Fija / Estética" }
];

export const volumeOptions = [
  { value: "Bajo (Iniciando)", label: "Bajo (1-10 casos/mes)" },
  { value: "Medio", label: "Medio (10-40 casos/mes)" },
  { value: "Alto (Alto flujo)", label: "Alto (40+ casos/mes)" }
];

export const priorityOptions = [
  { value: "Rentabilidad y ROI rápido", label: "Rentabilidad y ROI rápido" },
  { value: "Tecnología punta y Apps", label: "Tecnología punta y Ecosistema de Apps" },
  { value: "Facilidad de uso", label: "Facilidad de uso para el equipo" }
];

export const treatmentOptions = [
  { value: "Corona o Puente", label: "Corona o Puente Dental" },
  { value: "Alineadores Invisibles", label: "Alineadores Invisibles (Ortodoncia)" },
  { value: "Implante Dental", label: "Implante Dental" },
  { value: "Férula de Descarga", label: "Férula de Descarga" }
];

export const concernOptions = [
  { value: "Reflejo de náusea", label: "Tiene muchas náuseas con la pasta" },
  { value: "Miedo al dolor", label: "Miedo al dolor o incomodidad" },
  { value: "Escéptico con el precio", label: "Duda del valor/coste" },
  { value: "Prisa y tiempo", label: "Tiene mucha prisa / poco tiempo" }
];

export const labGoalOptions = [
  { value: "Informar adquisición escáner", label: "Informar sobre nuevo escáner digital" },
  { value: "Solicitar tarifas digitales", label: "Solicitar tarifas de flujo digital" },
  { value: "Coordinar envío STL", label: "Coordinar protocolo de envío STL" }
];

export const faqTopicOptions = [
  { value: "Precisión", label: "Precisión y Exactitud" },
  { value: "Velocidad", label: "Velocidad de Escaneo" },
  { value: "Software", label: "Software y Aplicaciones" },
  { value: "Coste", label: "Coste y Retorno de Inversión" }
];

export const blogTopicOptions = [
  { value: "Beneficios de la Impresión Digital", label: "Beneficios de la Impresión Digital" },
  { value: "Reseña del Medit i900", label: "Reseña del Medit i900" },
  { value: "Reseña del Shining Elite", label: "Reseña del Shining Elite" },
  { value: "Comparativa Medit vs Shining", label: "Comparativa Medit i900 vs Shining Elite" }
];

export const marketingModelOptions = [
  { value: "Medit i900", label: "Medit i900 (Tecnología Punta)" },
  { value: "Shining Elite", label: "Shining Elite (Comodidad)" }
];

export const marketingFocusOptions = [
  { value: "Adiós a las pastas", label: "Adiós a las pastas (Confort)" },
  { value: "Rapidez y Precisión", label: "Rapidez y Precisión (Tiempo)" },
  { value: "Innovación 3D", label: "Innovación 3D (Modernidad)" }
];

export const specialtyCompOptions = [
  { value: "Ortodoncia Invisible", label: "Ortodoncia Invisible" },
  { value: "Implantes", label: "Implantes" },
  { value: "Estética Dental", label: "Estética Dental" },
  { value: "Odontopediatría", label: "Odontopediatría" }
];

export const caseBenefitOptions = [
  { value: "Diseño de Sonrisa Digital (DSD)", label: "Diseño de Sonrisa Digital (DSD)" },
  { value: "Mock-up motivacional", label: "Mock-up motivacional" },
  { value: "Precisión de ajuste", label: "Precisión de ajuste" },
  { value: "Rapidez de entrega", label: "Rapidez de entrega" }
];

export const timeProcedureOptions = [
  { value: "Corona Unitaria", label: "Corona Unitaria" },
  { value: "Puente de 3 Unidades", label: "Puente de 3 Unidades" },
  { value: "Arcada Completa (Ortodoncia)", label: "Arcada Completa (Ortodoncia)" },
  { value: "Implante Unitario", label: "Implante Unitario" }
];

export const pitchAudienceOptions = [
  { value: "Socio Financiero", label: "Socio Financiero (Enfoque Rentabilidad)" },
  { value: "Socio Clínico", label: "Socio Clínico (Enfoque Calidad)" },
  { value: "Gerente de Clínica", label: "Gerente de Clínica (Enfoque Eficiencia)" }
];

// Color palette
export const colors = {
  primary: "#007AFF",
  primaryDark: "#0066D6",
  navy: "#0B0F18",
  gray600: "#5B667A",
  surface: "#EEF3FA",
  white: "#FFFFFF",
  appleGray: "#D1D1D6",
  appleBlue: "#0A84FF",
  meditBlue: "#1A70FF",
  meditCyan: "#B3D4FF",
  shiningBlue: "#1174D1",
  shiningDark: "#1D242E"
};

// Mock AI response generators
export const generateMockAIResponse = (specialty, volume, priority) => {
  const isHighVolume = volume.includes("Alto");
  const wantsTech = priority.includes("Tecnología");
  const recommendation = (isHighVolume || wantsTech) ? "Medit i900" : "Shining Elite";
  
  const responses = {
    "Medit i900": `📊 ANÁLISIS COMPLETO\n\nPara tu perfil de ${specialty} con ${volume}:\n\n✅ RECOMENDACIÓN: Medit i900\n\n🎯 Razones principales:\n• Ecosistema completo de aplicaciones clínicas\n• Velocidad extrema ideal para alto volumen\n• Interfaz táctil intuitiva\n• Integración perfecta con flujos digitales avanzados\n\n💡 Este escáner maximizará tu productividad y diferenciación tecnológica.`,
    "Shining Elite": `📊 ANÁLISIS COMPLETO\n\nPara tu perfil de ${specialty} con ${volume}:\n\n✅ RECOMENDACIÓN: Shining Elite\n\n🎯 Razones principales:\n• Mejor relación calidad-precio del mercado\n• Curva de aprendizaje mínima\n• ROI muy rápido\n• Sin cuotas de mantenimiento\n\n💡 Este escáner te permitirá digitalizar tu clínica con una inversión inteligente.`
  };
  
  return responses[recommendation];
};

export const generateMockTechResponse = (question) => {
  const q = question.toLowerCase();
  if (q.includes("metal") || q.includes("polvo")) {
    return "✅ Ambos escáneres (Medit i900 y Shining Elite) pueden escanear estructuras metálicas SIN necesidad de spray opacificante en la mayoría de casos. El polvo solo se recomienda para superficies muy reflectantes como oro pulido.";
  }
  if (q.includes("peso") || q.includes("ligero")) {
    return "⚖️ El Medit i900 pesa solo 165g (ultraligero). El Shining Elite pesa 198g. Ambos son muy ergonómicos para sesiones largas.";
  }
  if (q.includes("garantía") || q.includes("garantia")) {
    return "🛡️ Con AldraScan, ambos modelos incluyen 2 años de garantía del fabricante + nuestro servicio de equipo de sustitución en 24h si hay cualquier incidencia.";
  }
  return "🔍 Gracias por tu pregunta. Para una respuesta técnica detallada, te recomendamos contactar directamente con nuestro equipo de soporte técnico por WhatsApp.";
};

export const generateMockMarketingCopy = (model, focus) => {
  const copies = {
    "Adiós a las pastas": `🦷 ¡Adiós a las pastas de impresión!\n\nEn nuestra clínica hemos incorporado el ${model}, la última tecnología en escaneo dental 3D.\n\n✨ Sin náuseas\n✨ Sin sabores desagradables\n✨ Más rápido y cómodo\n\nTu sonrisa perfecta, ahora más fácil que nunca.\n\n📞 Pide tu cita`,
    "Rapidez y Precisión": `⚡ Nueva tecnología en nuestra clínica\n\nHemos incorporado el ${model} para ofrecerte:\n\n🎯 Precisión digital milimétrica\n⏱️ Escaneos en segundos\n😊 Máximo confort\n\nTu tratamiento dental, más rápido y preciso que nunca.\n\n#OdontologíaDigital #Tecnología3D`,
    "Innovación 3D": `🚀 Innovación 3D en tu sonrisa\n\nNuevo ${model} en nuestra clínica:\n\n💎 Tecnología de vanguardia\n🔬 Visualización 3D instantánea\n✅ Tratamientos más predecibles\n\nEl futuro de la odontología ya está aquí.\n\n📱 Reserva tu experiencia digital`
  };
  return copies[focus] || copies["Adiós a las pastas"];
};

export const generateMockPatientScript = (treatment, concern) => {
  return `👨‍⚕️ GUION PARA: ${treatment}\nPaciente con: ${concern}\n\n---\n\n"Entiendo perfectamente tu preocupación. Precisamente por eso hemos incorporado esta nueva tecnología.\n\nEn lugar de usar la pasta tradicional, vamos a usar un pequeño escáner digital que simplemente pasamos por tus dientes como si fuera una cámara.\n\n✅ Es completamente indoloro\n✅ Dura solo unos segundos\n✅ Podrás ver tu boca en 3D al instante\n\n¿Te parece si lo probamos? Verás que es muy diferente a lo que conocías."\n\n---\n💡 Tip: Muestra la pantalla al paciente durante el escaneo para que vea el proceso en tiempo real.`;
};

export const generateMockLabEmail = (labName, goal) => {
  const templates = {
    "Informar adquisición escáner": `Asunto: Nueva capacidad de flujo digital en nuestra clínica\n\nEstimado equipo de ${labName || "[Laboratorio]"},\n\nNos complace informarles que hemos incorporado un escáner intraoral de última generación a nuestra clínica.\n\nA partir de ahora, podremos enviarles archivos STL digitales de alta precisión, lo que nos permitirá:\n\n• Reducir tiempos de entrega\n• Eliminar errores de impresión física\n• Mejorar la comunicación de casos\n\n¿Podríamos agendar una llamada para coordinar el nuevo protocolo de trabajo?\n\nSaludos cordiales`,
    "Solicitar tarifas digitales": `Asunto: Solicitud de tarifas para flujo digital\n\nEstimado equipo de ${labName || "[Laboratorio]"},\n\nHemos digitalizado nuestro flujo de trabajo y estamos evaluando proveedores para trabajos digitales.\n\n¿Podrían enviarnos su catálogo de precios para:\n• Coronas sobre STL\n• Puentes\n• Modelos impresos\n\nGracias de antemano.`,
    "Coordinar envío STL": `Asunto: Protocolo de envío de archivos STL\n\nEstimado equipo de ${labName || "[Laboratorio]"},\n\nQueremos coordinar el protocolo para envío de archivos digitales.\n\n¿Cuál es su método preferido?\n• Email directo\n• Plataforma cloud\n• Portal del laboratorio\n\nQuedamos a la espera de sus indicaciones.`
  };
  return templates[goal] || templates["Informar adquisición escáner"];
};

export const generateMockROI = (volume, cost) => {
  const monthlyImpressions = parseInt(volume) || 30;
  const costPerImpression = parseInt(cost) || 15;
  const annualSavings = monthlyImpressions * costPerImpression * 12;
  const digitalCostPerCase = 2;
  const netSavings = annualSavings - (monthlyImpressions * digitalCostPerCase * 12);
  
  return `💰 ANÁLISIS DE ROI\n\n📊 Datos introducidos:\n• Impresiones/mes: ${monthlyImpressions}\n• Coste actual/impresión: ${costPerImpression}€\n\n💵 RESULTADOS:\n\n• Gasto anual actual: ${annualSavings.toLocaleString('es-ES')}€\n• Coste digital estimado: ${(monthlyImpressions * digitalCostPerCase * 12).toLocaleString('es-ES')}€/año\n• Ahorro neto anual: ${netSavings.toLocaleString('es-ES')}€\n\n⏱️ ROI estimado: ${Math.ceil(8000/netSavings * 12)} meses\n\n✅ Conclusión: La inversión se amortiza rápidamente con tu volumen de trabajo.`;
};

export const generateMockFAQ = (topic) => {
  const faqs = {
    "Precisión": `❓ PREGUNTAS FRECUENTES: Precisión\n\n1. ¿Qué precisión tienen los escáneres?\n→ Ambos modelos tienen precisión de 7-10 micras, superior a las impresiones tradicionales.\n\n2. ¿Son válidos para implantes?\n→ Sí, ofrecen la precisión necesaria para prótesis sobre implantes.\n\n3. ¿Hay diferencia entre marcas?\n→ Medit i900 tiene ligera ventaja en full-arch, Shining Elite excelente en cuadrantes.`,
    "Velocidad": `❓ PREGUNTAS FRECUENTES: Velocidad\n\n1. ¿Cuánto tarda un escaneo completo?\n→ Arcada completa: 30-60 segundos. Cuadrante: 15-20 segundos.\n\n2. ¿El Medit es más rápido?\n→ Sí, el i900 con 70 FPS es el más rápido del mercado.\n\n3. ¿Afecta la velocidad a la precisión?\n→ No, ambos mantienen alta precisión a máxima velocidad.`,
    "Software": `❓ PREGUNTAS FRECUENTES: Software\n\n1. ¿Qué software incluyen?\n→ Medit: Suite completa (Link, Smile Design, Ortho, etc.). Shining: DentalCloud básico.\n\n2. ¿Son compatibles con otros programas?\n→ Sí, ambos exportan a STL/PLY abiertos.\n\n3. ¿Hay cuotas mensuales?\n→ Medit: Apps opcionales de pago. Shining: Todo incluido sin cuotas.`,
    "Coste": `❓ PREGUNTAS FRECUENTES: Coste\n\n1. ¿Cuál es más económico?\n→ Shining Elite tiene mejor precio inicial y sin cuotas.\n\n2. ¿Cuánto se ahorra al digitalizar?\n→ Aproximadamente 10-15€ por caso en material y envíos.\n\n3. ¿En cuánto tiempo se amortiza?\n→ Con 20+ casos/mes, entre 12-18 meses típicamente.`
  };
  return faqs[topic] || faqs["Precisión"];
};

export const generateMockBlogOutline = (topic) => {
  return `📝 ESQUEMA DE BLOG: ${topic}\n\n1. INTRODUCCIÓN\n   • Hook: Problema que resuelve\n   • Contexto del mercado actual\n\n2. DESARROLLO\n   • Características principales\n   • Beneficios para la clínica\n   • Beneficios para el paciente\n   • Casos de uso recomendados\n\n3. ANÁLISIS PRÁCTICO\n   • Pros y contras\n   • Comparativa con alternativas\n   • Testimonios o casos de éxito\n\n4. CONCLUSIÓN\n   • Resumen de puntos clave\n   • Call-to-action\n   • Invitación a demo\n\n📊 Palabras clave sugeridas: escáner intraoral, odontología digital, impresión 3D dental`;
};

export const generateMockCompetitionAnalysis = (location, specialty) => {
  return `🎯 ESTRATEGIA DE DIFERENCIACIÓN\nZona: ${location} | Especialidad: ${specialty}\n\n1. **Posicionamiento Tecnológico**\nSé la primera clínica de tu zona en ofrecer escaneo 3D. Comunica activamente esta ventaja en redes sociales y Google My Business.\n\n2. **Experiencia del Paciente**\nDestaca el confort: "Sin pastas, sin náuseas". Los pacientes de la competencia que hayan sufrido malas experiencias vendrán a ti.\n\n3. **Contenido Educativo Local**\nCrea contenido específico para ${location} sobre odontología digital. Posiciónate como el experto local en tecnología dental.`;
};

export const generateMockClinicalCase = (treatment, benefit) => {
  return `📋 ESTRUCTURA DE CASO CLÍNICO\n\n**Título del Caso:**\n"${treatment}: Cómo el ${benefit} transformó el resultado"\n\n**Situación Inicial:**\nPaciente de X años acude a consulta con [describir situación]. Principales preocupaciones: estética, funcionalidad, tiempo.\n\n**Solución Digital:**\nGracias al escaneo intraoral, pudimos:\n• Mostrar el resultado esperado antes del tratamiento\n• Planificar con precisión milimétrica\n• Reducir el número de citas necesarias\n\n**Resultado Final:**\nPaciente 100% satisfecho. Tratamiento completado en [X] semanas. El ${benefit} fue clave para el éxito del caso.`;
};

export const generateMockTimeSavings = (procedure, cases) => {
  const casesNum = parseInt(cases) || 5;
  const savedMinutes = procedure.includes("Arcada") ? 25 : 20;
  const weeklyMinutes = savedMinutes * casesNum;
  const monthlyHours = (weeklyMinutes * 4) / 60;
  
  return `⏱️ AHORRO DE TIEMPO CALCULADO\n\nProcedimiento: ${procedure}\nCasos semanales: ${casesNum}\n\n📊 RESULTADOS:\n\n• Ahorro por caso: ~${savedMinutes} minutos\n• Ahorro semanal: ${weeklyMinutes} minutos\n• Ahorro mensual: ${monthlyHours.toFixed(1)} horas\n\n💡 IMPACTO:\nCon ${monthlyHours.toFixed(1)} horas extra al mes podrías:\n• Atender ${Math.floor(monthlyHours)} pacientes adicionales\n• Dedicar más tiempo a casos complejos\n• Mejorar tu calidad de vida laboral`;
};

export const generateMockSalesPitch = (audience, objection) => {
  return `🎤 ARGUMENTARIO PARA: ${audience}\nObjeción a vencer: "${objection}"\n\n1. **Argumento Financiero:**\nLa inversión se recupera en 12-18 meses con el ahorro en materiales y la capacidad de cobrar más por tratamientos digitales premium.\n\n2. **Argumento Clínico:**\nLa precisión digital reduce retrabajos y mejora la satisfacción del paciente. Menos ajustes = más eficiencia.\n\n3. **Argumento de Futuro:**\nLa odontología digital ya no es opcional. Quien no digitalice su clínica en los próximos 2-3 años quedará obsoleto frente a la competencia.`;
};
