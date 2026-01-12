import React, { useState } from 'react';
import { treatmentOptions, concernOptions, generateMockPatientScript } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = ({ color = "#10b981" }) => (
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

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult(null);
    await new Promise(resolve => setTimeout(resolve, 1200));
    const response = generateMockPatientScript(treatment, concern);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-[#ecfdf5] to-[#d1fae5] border border-[#10b981] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden">
      {/* Emoji Background */}
      <div className="absolute top-[-30px] left-[-30px] text-[150px] opacity-10 rotate-[15deg] select-none">
        💬
      </div>

      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#d1fae5] text-[#065f46]">
          COMUNICACIÓN
        </span>
        <h3 className="text-[32px] font-bold text-[#064e3b] mb-3">Guiones para Pacientes</h3>
        <p className="text-[#065f46]">Ayuda a tu equipo a explicar los beneficios del escaneo digital con confianza.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        {/* Inputs */}
        <div>
          <div className="mb-5">
            <label className="block text-[#064e3b] font-medium mb-2">Tratamiento Propuesto</label>
            <select 
              value={treatment}
              onChange={(e) => setTreatment(e.target.value)}
              className="w-full p-4 border border-[#a7f3d0] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#10b981] focus:ring-2 focus:ring-[rgba(16,185,129,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {treatmentOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-[#064e3b] font-medium mb-2">Perfil/Preocupación del Paciente</label>
            <select 
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
              className="w-full p-4 border border-[#a7f3d0] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#10b981] focus:ring-2 focus:ring-[rgba(16,185,129,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {concernOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full bg-[#10b981] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#059669] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-chat-smile-3-line"></i> Generar Guion
          </button>
        </div>

        {/* Output */}
        <div className="bg-white rounded-2xl p-8 border border-[#a7f3d0] shadow-[0_10px_25px_rgba(16,185,129,0.1)]">
          <h4 className="text-[#064e3b] font-bold text-sm uppercase tracking-wide mb-3">Guion Sugerido:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : result ? (
            <div className="text-[#1F2937] whitespace-pre-line animate-fadeIn leading-relaxed">
              {result}
            </div>
          ) : (
            <span className="text-gray-400 italic">Selecciona las opciones y pulsa generar...</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default PatientScripts;
