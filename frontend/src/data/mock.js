// Mock data for AldraScan dental scanner comparison website

export const companyInfo = {
  name: "AldraScan",
  tagline: "Tecnología para dentistas",
  whatsappNumber: "34662078540",
  year: 2026
};

export const heroData = {
  title: "Medit i900 vs Shining Elite",
  subtitle: "En AldraScan integramos soluciones. Analizamos las dos puntas de lanza del mercado para tu clínica."
};

export const products = [
  {
    id: 1,
    name: "Medit i900",
    tagline: "El estándar de oro en ecosistema y velocidad.",
    accentColor: "#A78BFA",
    features: [
      "Velocidad Extrema (15 seg)",
      "Ecosistema Medit Link",
      "165g de peso"
    ]
  },
  {
    id: 2,
    name: "Shining Elite",
    tagline: "La eficiencia pura con el mejor ROI del mercado.",
    accentColor: "#63B3ED",
    features: [
      "Curva de aprendizaje cero",
      "Sin cuotas anuales",
      "Higiene por movimiento"
    ]
  }
];

export const specialties = [
  { value: "General", label: "Odontología General" },
  { value: "Ortodoncia", label: "Ortodoncia / Alineadores" },
  { value: "Implantes", label: "Implantología" }
];

export const aiCalculatorData = {
  title: "Calculadora de ROI y Estrategia IA",
  subtitle: "Introduce tus datos para un análisis personalizado.",
  costPerImpression: 15,
  placeholder: "El resultado de tu análisis aparecerá aquí..."
};

// Mock AI response generator
export const generateMockAIResponse = (volume, specialty) => {
  const annualSavings = volume * 15 * 12;
  const recommendation = specialty === "Ortodoncia" 
    ? "Shining Elite" 
    : specialty === "Implantes" 
      ? "Medit i900" 
      : volume > 50 ? "Medit i900" : "Shining Elite";
  
  const reasoningMap = {
    "Medit i900": "por su velocidad superior y ecosistema de aplicaciones integradas",
    "Shining Elite": "por su excelente ROI y simplicidad de uso"
  };

  return {
    savings: annualSavings,
    recommendation,
    reasoning: reasoningMap[recommendation],
    specialty,
    volume
  };
};
