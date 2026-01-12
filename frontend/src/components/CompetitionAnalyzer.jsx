import React, { useState } from 'react';
import { specialtyCompOptions, generateMockCompetitionAnalysis } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = ({ color = "#f43f5e" }) => (
  <div className="flex justify-center gap-1.5 py-5">
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.32s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.16s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color }}></div>
  </div>
);

const CompetitionAnalyzer = () => {
  const [location, setLocation] = useState('');
  const [specialty, setSpecialty] = useState('Ortodoncia Invisible');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalyze = async () => {
    if (!location) {
      alert('Por favor indica tu ubicación');
      return;
    }
    setIsLoading(true);
    setResult(null);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const response = generateMockCompetitionAnalysis(location, specialty);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-[#fef2f2] to-[#ffe4e6] border border-[#f43f5e] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden">
      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#ffe4e6] text-[#be123c]">
          ESTRATEGIA
        </span>
        <h3 className="text-[32px] font-bold text-[#9f1239] mb-3">Analizador de Competencia Local</h3>
        <p className="text-[#be123c]">Descubre cómo diferenciarte en tu zona.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="mb-5">
            <label className="block text-[#9f1239] font-medium mb-2">Código Postal / Ciudad</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Ej. 28001 Madrid"
              className="w-full p-4 border border-[#fda4af] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#f43f5e] focus:ring-2 focus:ring-[rgba(244,63,94,0.2)]
                         transition-all duration-200"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[#9f1239] font-medium mb-2">Tu Especialidad Principal</label>
            <select 
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full p-4 border border-[#fda4af] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#f43f5e] focus:ring-2 focus:ring-[rgba(244,63,94,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {specialtyCompOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleAnalyze}
            disabled={isLoading}
            className="w-full bg-[#f43f5e] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#e11d48] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-map-pin-line"></i> Analizar Estrategia
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#fda4af] shadow-[0_10px_25px_rgba(244,63,94,0.1)]">
          <h4 className="text-[#9f1239] font-bold text-sm uppercase tracking-wide mb-3">Estrategia de Diferenciación:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : result ? (
            <div className="text-[#1F2937] whitespace-pre-line animate-fadeIn text-[15px] leading-relaxed">
              {result}
            </div>
          ) : (
            <span className="text-gray-400 italic">El análisis aparecerá aquí...</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default CompetitionAnalyzer;
