import React, { useState } from 'react';
import { labGoalOptions, generateMockLabEmail } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = ({ color = "#3b82f6" }) => (
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
    <section className="bg-gradient-to-br from-[#eff6ff] to-[#dbeafe] border border-[#3b82f6] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden">
      <div className="absolute top-[-30px] right-[-30px] text-[150px] opacity-10 rotate-[-15deg] select-none">
        📧
      </div>

      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#e0f2fe] text-[#0284c7]">
          GESTIÓN B2B
        </span>
        <h3 className="text-[32px] font-bold text-[#0369a1] mb-3">Comunicación con Laboratorios</h3>
        <p className="text-[#0284c7]">Coordina tu flujo digital con tus proveedores al instante.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="mb-5">
            <label className="block text-[#0369a1] font-medium mb-2">Nombre del Laboratorio</label>
            <input
              type="text"
              value={labName}
              onChange={(e) => setLabName(e.target.value)}
              placeholder="Ej. Laboratorio Dental Pro"
              className="w-full p-4 border border-[#93c5fd] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[rgba(59,130,246,0.2)]
                         transition-all duration-200"
            />
          </div>

          <div className="mb-5">
            <label className="block text-[#0369a1] font-medium mb-2">Objetivo del Email</label>
            <select 
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              className="w-full p-4 border border-[#93c5fd] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[rgba(59,130,246,0.2)]
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
            className="w-full bg-[#3b82f6] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#2563eb] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-mail-send-line"></i> Redactar Email
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#93c5fd] shadow-[0_10px_25px_rgba(59,130,246,0.1)]">
          <h4 className="text-[#0369a1] font-bold text-sm uppercase tracking-wide mb-3">Borrador de Email:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : (
            <div className="bg-[#f8fafc] p-4 rounded-lg border border-[#e2e8f0] min-h-[150px]">
              {result ? (
                <div className="text-[#1F2937] whitespace-pre-line animate-fadeIn text-[15px]">
                  {result}
                </div>
              ) : (
                <span className="text-gray-400 italic">Tu borrador aparecerá aquí...</span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LabEmail;
