import React, { useState } from 'react';
import axios from 'axios';
import 'remixicon/fonts/remixicon.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const TypingIndicator = ({ color = "#007AFF" }) => (
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
  const [error, setError] = useState(null);

  const handleCalculate = async () => {
    if (!volume) {
      alert('Por favor indica el volumen de impresiones');
      return;
    }
    setIsLoading(true);
    setResult(null);
    setError(null);
    
    try {
      const response = await axios.post(`${API_URL}/api/ai/roi`, {
        volume: volume,
        cost: cost || '15'
      });
      setResult(response.data.response);
    } catch (err) {
      console.error('ROI calculation error:', err);
      setError('Error al calcular el ROI. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      data-testid="roi-calculator-section"
      className="bg-[#EEF3FA] border border-[#D1D1D6] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden"
    >
      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-white text-[#007AFF]">
          RENTABILIDAD
        </span>
        <h3 className="text-[32px] font-bold text-[#0B0F18] mb-3">Calculadora de ROI</h3>
        <p className="text-[#5B667A]">Descubre cuánto puedes ahorrar digitalizando tu flujo de trabajo.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="mb-5">
            <label className="block text-[#0B0F18] font-medium mb-2">Impresiones Tradicionales al Mes</label>
            <input
              type="number"
              data-testid="roi-volume-input"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="Ej. 30"
              className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18]
                         focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                         transition-all duration-200"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[#0B0F18] font-medium mb-2">Coste Promedio por Impresión (€)</label>
            <input
              type="number"
              data-testid="roi-cost-input"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              placeholder="Ej. 15 (Material + Envío)"
              className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18]
                         focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                         transition-all duration-200"
            />
          </div>

          <button
            data-testid="calculate-roi-btn"
            onClick={handleCalculate}
            disabled={isLoading}
            className="w-full bg-[#007AFF] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#0066D6] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-calculator-line"></i> Calcular Ahorro
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#D1D1D6] shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <h4 className="text-[#0B0F18] font-bold text-sm uppercase tracking-wide mb-3">Tu Análisis de Rentabilidad:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : error ? (
            <div className="text-red-500 py-4" data-testid="roi-error">
              {error}
            </div>
          ) : result ? (
            <div className="text-[#5B667A] whitespace-pre-line animate-fadeIn text-[15px] leading-relaxed" data-testid="roi-result">
              {result}
            </div>
          ) : (
            <span className="text-[#5B667A] italic">Introduce tus datos para calcular...</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
