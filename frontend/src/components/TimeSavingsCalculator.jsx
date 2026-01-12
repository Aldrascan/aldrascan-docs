import React, { useState } from 'react';
import axios from 'axios';
import { timeProcedureOptions } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const TypingIndicator = ({ color = "#007AFF" }) => (
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
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    if (!cases) {
      alert('Por favor indica el número de casos semanales');
      return;
    }
    setIsLoading(true);
    setResult(null);
    setError(null);
    
    try {
      const response = await axios.post(`${API_URL}/api/ai/time-savings`, {
        procedure: procedure,
        cases: cases
      });
      setResult(response.data.response);
    } catch (err) {
      console.error('Time savings calculation error:', err);
      setError('Error al calcular el ahorro. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      data-testid="time-savings-section"
      className="bg-white border border-[#D1D1D6] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden"
    >
      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#EEF3FA] text-[#007AFF]">
          EFICIENCIA
        </span>
        <h3 className="text-[32px] font-bold text-[#0B0F18] mb-3">Calculadora de Ahorro de Tiempo</h3>
        <p className="text-[#5B667A]">El tiempo es dinero. Descubre cuánto ganarás.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="mb-5">
            <label className="block text-[#0B0F18] font-medium mb-2">Procedimiento Frecuente</label>
            <select 
              data-testid="time-procedure-select"
              value={procedure}
              onChange={(e) => setProcedure(e.target.value)}
              className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18]
                         focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {timeProcedureOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-[#0B0F18] font-medium mb-2">Casos Semanales</label>
            <input
              type="number"
              data-testid="time-cases-input"
              value={cases}
              onChange={(e) => setCases(e.target.value)}
              placeholder="Ej. 5"
              className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18]
                         focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                         transition-all duration-200"
            />
          </div>

          <button
            data-testid="calculate-time-btn"
            onClick={handleCalculate}
            disabled={isLoading}
            className="w-full bg-[#007AFF] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#0066D6] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-hourglass-line"></i> Calcular Tiempo
          </button>
        </div>

        <div className="bg-[#EEF3FA] rounded-2xl p-8 border border-[#D1D1D6]">
          <h4 className="text-[#0B0F18] font-bold text-sm uppercase tracking-wide mb-3">Tu Ahorro Estimado:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : error ? (
            <div className="text-red-500 py-4" data-testid="time-error">
              {error}
            </div>
          ) : result ? (
            <div className="text-[#5B667A] whitespace-pre-line animate-fadeIn text-[15px] leading-relaxed" data-testid="time-result">
              {result}
            </div>
          ) : (
            <span className="text-[#5B667A] italic">Calcula tu ahorro aquí...</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default TimeSavingsCalculator;
