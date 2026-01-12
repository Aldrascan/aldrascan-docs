import React, { useState } from 'react';
import { generateMockROI } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = ({ color = "#f97316" }) => (
  <div className="flex justify-center gap-1.5 py-5">
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.32s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.16s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color }}></div>
  </div>
);

const ROICalculator = () => {
  const [volume, setVolume] = useState('');
  const [cost, setCost] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    if (!volume) {
      alert('Por favor indica el volumen de impresiones');
      return;
    }
    setIsLoading(true);
    setResult(null);
    await new Promise(resolve => setTimeout(resolve, 1200));
    const response = generateMockROI(volume, cost);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-[#fff7ed] to-[#ffedd5] border border-[#f97316] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden">
      <div className="absolute top-[-30px] left-[-30px] text-[150px] opacity-10 rotate-[15deg] select-none">
        💰
      </div>

      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#ffedd5] text-[#c2410c]">
          RENTABILIDAD
        </span>
        <h3 className="text-[32px] font-bold text-[#c2410c] mb-3">Calculadora de ROI</h3>
        <p className="text-[#ea580c]">Descubre cuánto puedes ahorrar digitalizando tu flujo de trabajo.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="mb-5">
            <label className="block text-[#c2410c] font-medium mb-2">Impresiones Tradicionales al Mes</label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="Ej. 30"
              className="w-full p-4 border border-[#fdba74] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[rgba(249,115,22,0.2)]
                         transition-all duration-200"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[#c2410c] font-medium mb-2">Coste Promedio por Impresión (€)</label>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="Ej. 15 (Material + Envío)"
              className="w-full p-4 border border-[#fdba74] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#f97316] focus:ring-2 focus:ring-[rgba(249,115,22,0.2)]
                         transition-all duration-200"
            />
          </div>

          <button
            onClick={handleCalculate}
            disabled={isLoading}
            className="w-full bg-[#f97316] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#ea580c] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-calculator-line"></i> Calcular Ahorro
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#fdba74] shadow-[0_10px_25px_rgba(249,115,22,0.1)]">
          <h4 className="text-[#c2410c] font-bold text-sm uppercase tracking-wide mb-3">Tu Análisis de Rentabilidad:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : result ? (
            <div className="text-[#1F2937] whitespace-pre-line animate-fadeIn text-[15px] leading-relaxed">
              {result}
            </div>
          ) : (
            <span className="text-gray-400 italic">Introduce tus datos para calcular...</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
