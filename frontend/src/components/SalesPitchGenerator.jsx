import React, { useState } from 'react';
import { pitchAudienceOptions, generateMockSalesPitch } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = ({ color = "#8b5cf6" }) => (
  <div className="flex justify-center gap-1.5 py-5">
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.32s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.16s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color }}></div>
  </div>
);

const SalesPitchGenerator = () => {
  const [audience, setAudience] = useState('Socio Financiero');
  const [objection, setObjection] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    if (!objection) {
      alert('Por favor indica la objeción a vencer');
      return;
    }
    setIsLoading(true);
    setResult(null);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const response = generateMockSalesPitch(audience, objection);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-[#f5f3ff] to-[#ede9fe] border border-[#8b5cf6] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden">
      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#ede9fe] text-[#6d28d9]">
          NEGOCIACIÓN
        </span>
        <h3 className="text-[32px] font-bold text-[#5b21b6] mb-3">Generador de Argumentario</h3>
        <p className="text-[#6d28d9]">Convence a tus socios de la inversión.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="mb-5">
            <label className="block text-[#5b21b6] font-medium mb-2">Audiencia Objetivo</label>
            <select 
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="w-full p-4 border border-[#c4b5fd] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#8b5cf6] focus:ring-2 focus:ring-[rgba(139,92,246,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {pitchAudienceOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-[#5b21b6] font-medium mb-2">Principal Objeción a Vencer</label>
            <input
              type="text"
              value={objection}
              onChange={(e) => setObjection(e.target.value)}
              placeholder="Ej. El coste es muy alto"
              className="w-full p-4 border border-[#c4b5fd] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#8b5cf6] focus:ring-2 focus:ring-[rgba(139,92,246,0.2)]
                         transition-all duration-200"
            />
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full bg-[#8b5cf6] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#7c3aed] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-mic-line"></i> Generar Argumentos
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#c4b5fd] shadow-[0_10px_25px_rgba(139,92,246,0.1)]">
          <h4 className="text-[#5b21b6] font-bold text-sm uppercase tracking-wide mb-3">Argumentos Clave:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : result ? (
            <div className="text-[#1F2937] whitespace-pre-line animate-fadeIn text-[15px] leading-relaxed">
              {result}
            </div>
          ) : (
            <span className="text-gray-400 italic">Los argumentos aparecerán aquí...</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default SalesPitchGenerator;
