import React, { useState } from 'react';
import { timeProcedureOptions, generateMockTimeSavings } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = ({ color = "#f59e0b" }) => (
  <div className="flex justify-center gap-1.5 py-5">
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.32s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.16s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color }}></div>
  </div>
);

const TimeSavingsCalculator = () => {
  const [procedure, setProcedure] = useState('Corona Unitaria');
  const [cases, setCases] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleCalculate = async () => {
    if (!cases) {
      alert('Por favor indica el número de casos semanales');
      return;
    }
    setIsLoading(true);
    setResult(null);
    await new Promise(resolve => setTimeout(resolve, 1200));
    const response = generateMockTimeSavings(procedure, cases);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-[#fffbeb] to-[#fef3c7] border border-[#f59e0b] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden">
      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#fef3c7] text-[#b45309]">
          EFICIENCIA
        </span>
        <h3 className="text-[32px] font-bold text-[#92400e] mb-3">Calculadora de Ahorro de Tiempo</h3>
        <p className="text-[#b45309]">El tiempo es dinero. Descubre cuánto ganarás.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="mb-5">
            <label className="block text-[#92400e] font-medium mb-2">Procedimiento Frecuente</label>
            <select 
              value={procedure}
              onChange={(e) => setProcedure(e.target.value)}
              className="w-full p-4 border border-[#fcd34d] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[rgba(245,158,11,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {timeProcedureOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-[#92400e] font-medium mb-2">Casos Semanales</label>
            <input
              type="number"
              value={cases}
              onChange={(e) => setCases(e.target.value)}
              placeholder="Ej. 5"
              className="w-full p-4 border border-[#fcd34d] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[rgba(245,158,11,0.2)]
                         transition-all duration-200"
            />
          </div>

          <button
            onClick={handleCalculate}
            disabled={isLoading}
            className="w-full bg-[#f59e0b] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#d97706] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-hourglass-line"></i> Calcular Tiempo
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#fcd34d] shadow-[0_10px_25px_rgba(245,158,11,0.1)]">
          <h4 className="text-[#92400e] font-bold text-sm uppercase tracking-wide mb-3">Tu Ahorro Estimado:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : result ? (
            <div className="text-[#1F2937] whitespace-pre-line animate-fadeIn text-[15px] leading-relaxed">
              {result}
            </div>
          ) : (
            <span className="text-gray-400 italic">Calcula tu ahorro aquí...</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default TimeSavingsCalculator;
