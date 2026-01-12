import React, { useState } from 'react';
import { caseBenefitOptions, generateMockClinicalCase } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = ({ color = "#22c55e" }) => (
  <div className="flex justify-center gap-1.5 py-5">
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.32s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.16s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color }}></div>
  </div>
);

const ClinicalCaseGenerator = () => {
  const [treatment, setTreatment] = useState('');
  const [benefit, setBenefit] = useState('Diseño de Sonrisa Digital (DSD)');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    if (!treatment) {
      alert('Por favor indica el tipo de tratamiento');
      return;
    }
    setIsLoading(true);
    setResult(null);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const response = generateMockClinicalCase(treatment, benefit);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-[#f0fdf4] to-[#dcfce7] border border-[#22c55e] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden">
      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#dcfce7] text-[#15803d]">
          CASOS DE ÉXITO
        </span>
        <h3 className="text-[32px] font-bold text-[#166534] mb-3">Generador de Casos Clínicos</h3>
        <p className="text-[#15803d]">Estructura tus casos de éxito para presentaciones impecables.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="mb-5">
            <label className="block text-[#166534] font-medium mb-2">Tipo de Tratamiento</label>
            <input
              type="text"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              placeholder="Ej. Carillas de cerámica"
              className="w-full p-4 border border-[#86efac] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[rgba(34,197,94,0.2)]
                         transition-all duration-200"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[#166534] font-medium mb-2">Beneficio Digital Clave</label>
            <select 
              value={benefit}
              onChange={(e) => setBenefit(e.target.value)}
              className="w-full p-4 border border-[#86efac] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#22c55e] focus:ring-2 focus:ring-[rgba(34,197,94,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {caseBenefitOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full bg-[#22c55e] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#16a34a] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-article-line"></i> Crear Estructura de Caso
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#86efac] shadow-[0_10px_25px_rgba(34,197,94,0.1)]">
          <h4 className="text-[#166534] font-bold text-sm uppercase tracking-wide mb-3">Estructura del Caso:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : result ? (
            <div className="text-[#1F2937] whitespace-pre-line animate-fadeIn text-[15px] leading-relaxed">
              {result}
            </div>
          ) : (
            <span className="text-gray-400 italic">La estructura aparecerá aquí...</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClinicalCaseGenerator;
