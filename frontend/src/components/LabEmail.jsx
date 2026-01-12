import React, { useState } from 'react';
import { labGoalOptions, generateMockLabEmail } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

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

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult(null);
    await new Promise(resolve => setTimeout(resolve, 1200));
    const response = generateMockLabEmail(labName, goal);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <section className="bg-white border border-[#D1D1D6] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden">
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
          ) : (
            <div className="bg-white p-4 rounded-lg border border-[#D1D1D6] min-h-[150px]">
              {result ? (
                <div className="text-[#5B667A] whitespace-pre-line animate-fadeIn text-[15px]">
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
