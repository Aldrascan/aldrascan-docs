import React, { useState } from 'react';
import axios from 'axios';
import { labGoalOptions } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const TypingIndicator = ({ color = "#007AFF" }) => (
  <div className="flex justify-center gap-1.5 py-5">
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.32s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.16s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color }}></div>
  </div>
);

const LabEmail = () => {
  const [labName, setLabName] = useState('');
  const [goal, setGoal] = useState('Informar adquisición escáner');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    
    try {
      const response = await axios.post(`${API_URL}/api/ai/lab-email`, {
        lab_name: labName,
        goal: goal
      });
      setResult(response.data.response);
    } catch (err) {
      console.error('Lab email generation error:', err);
      setError('Error al generar el email. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      data-testid="lab-email-section"
      className="bg-white border border-[#D1D1D6] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden"
    >
      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#EEF3FA] text-[#007AFF]">
          GESTIÓN B2B
        </span>
        <h3 className="text-[32px] font-bold text-[#0B0F18] mb-3">Comunicación con Laboratorios</h3>
        <p className="text-[#5B667A]">Coordina tu flujo digital con tus proveedores al instante.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="mb-5">
            <label className="block text-[#0B0F18] font-medium mb-2">Nombre del Laboratorio</label>
            <input
              type="text"
              data-testid="lab-name-input"
              value={labName}
              onChange={(e) => setLabName(e.target.value)}
              placeholder="Ej. Laboratorio Dental Pro"
              className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18]
                         focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                         transition-all duration-200"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[#0B0F18] font-medium mb-2">Objetivo del Email</label>
            <select 
              data-testid="lab-goal-select"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18]
                         focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {labGoalOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <button
            data-testid="generate-email-btn"
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full bg-[#007AFF] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#0066D6] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-mail-send-line"></i> Redactar Email
          </button>
        </div>

        <div className="bg-[#EEF3FA] rounded-2xl p-8 border border-[#D1D1D6]">
          <h4 className="text-[#0B0F18] font-bold text-sm uppercase tracking-wide mb-3">Borrador de Email:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : error ? (
            <div className="bg-white p-4 rounded-lg border border-[#D1D1D6]">
              <div className="text-red-500" data-testid="email-error">{error}</div>
            </div>
          ) : (
            <div className="bg-white p-4 rounded-lg border border-[#D1D1D6] min-h-[150px]">
              {result ? (
                <div className="text-[#5B667A] whitespace-pre-line animate-fadeIn text-[15px]" data-testid="email-result">
                  {result}
                </div>
              ) : (
                <span className="text-[#5B667A] italic">Tu borrador aparecerá aquí...</span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LabEmail;
