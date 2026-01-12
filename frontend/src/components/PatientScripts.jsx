import React, { useState } from 'react';
import axios from 'axios';
import { treatmentOptions, concernOptions } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const API_URL = process.env.REACT_APP_BACKEND_URL;

const TypingIndicator = ({ color = "#007AFF" }) => (
  <div className="flex justify-center gap-1.5 py-5">
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.32s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.16s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color }}></div>
  </div>
);

const PatientScripts = () => {
  const [treatment, setTreatment] = useState('Corona o Puente');
  const [concern, setConcern] = useState('Reflejo de náusea');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult(null);
    setError(null);
    
    try {
      const response = await axios.post(`${API_URL}/api/ai/patient-script`, {
        treatment: treatment,
        concern: concern
      });
      setResult(response.data.response);
    } catch (err) {
      console.error('Patient script generation error:', err);
      setError('Error al generar el guion. Por favor, inténtalo de nuevo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section 
      data-testid="patient-scripts-section"
      className="bg-[#EEF3FA] border border-[#D1D1D6] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden"
    >
      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-white text-[#007AFF]">
          COMUNICACIÓN
        </span>
        <h3 className="text-[32px] font-bold text-[#0B0F18] mb-3">Guiones para Pacientes</h3>
        <p className="text-[#5B667A]">Ayuda a tu equipo a explicar los beneficios del escaneo digital con confianza.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        {/* Inputs */}
        <div>
          <div className="mb-5">
            <label className="block text-[#0B0F18] font-medium mb-2">Tratamiento Propuesto</label>
            <select 
              data-testid="treatment-select"
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18]
                         focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {treatmentOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-[#0B0F18] font-medium mb-2">Perfil/Preocupación del Paciente</label>
            <select 
              data-testid="concern-select"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18]
                         focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {concernOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <button
            data-testid="generate-script-btn"
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full bg-[#007AFF] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#0066D6] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-chat-smile-3-line"></i> Generar Guion
          </button>
        </div>

        {/* Output */}
        <div className="bg-white rounded-2xl p-8 border border-[#D1D1D6] shadow-[0_10px_25px_rgba(0,0,0,0.05)]">
          <h4 className="text-[#0B0F18] font-bold text-sm uppercase tracking-wide mb-3">Guion Sugerido:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : error ? (
            <div className="text-red-500 py-4" data-testid="script-error">
              {error}
            </div>
          ) : result ? (
            <div className="text-[#5B667A] whitespace-pre-line animate-fadeIn leading-relaxed" data-testid="script-result">
              {result}
            </div>
          ) : (
            <span className="text-[#5B667A] italic">Selecciona las opciones y pulsa generar...</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default PatientScripts;
