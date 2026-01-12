import React, { useState } from 'react';
import { 
  specialties, volumeOptions, priorityOptions, 
  generateMockAIResponse, generateMockTechResponse 
} from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = ({ color = "#007AFF" }) => (
  <div className="flex justify-center gap-1.5 py-5">
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.32s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.16s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color }}></div>
  </div>
);

const AIConsultant = () => {
  const [clinicType, setClinicType] = useState('General');
  const [caseVolume, setCaseVolume] = useState('Bajo (Iniciando)');
  const [priority, setPriority] = useState('Rentabilidad y ROI rápido');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  // Tech Chat State
  const [techQuestion, setTechQuestion] = useState('');
  const [techLoading, setTechLoading] = useState(false);
  const [techResult, setTechResult] = useState(null);

  const handleConsult = async () => {
    setIsLoading(true);
    setResult(null);
    await new Promise(resolve => setTimeout(resolve, 1500));
    const response = generateMockAIResponse(clinicType, caseVolume, priority);
    setResult(response);
    setIsLoading(false);
  };

  const handleTechQuestion = async () => {
    if (!techQuestion.trim()) return;
    setTechLoading(true);
    setTechResult(null);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = generateMockTechResponse(techQuestion);
    setTechResult(response);
    setTechLoading(false);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5">
      {/* Main AI Section */}
      <section 
        id="ai-tool"
        className="bg-white border border-[#D1D1D6] rounded-3xl p-8 md:p-[60px] my-[100px] shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
      >
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#EEF3FA] text-[#007AFF]">
            IA BETA
          </span>
          <h3 className="text-[32px] font-bold text-[#0B0F18] mb-3">Asistente Inteligente</h3>
          <p className="text-[#5B667A]">¿Indeciso? Nuestra IA analiza tu perfil y te recomienda la mejor opción.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Form Side */}
          <div>
            <div className="mb-5">
              <label className="block text-[#0B0F18] font-medium mb-2">Especialidad Principal</label>
              <select 
                value={clinicType}
                onChange={(e) => setClinicType(e.target.value)}
                className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18]
                           focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                           transition-all duration-200 cursor-pointer"
              >
                {specialties.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-[#0B0F18] font-medium mb-2">Volumen Mensual</label>
              <select 
                value={caseVolume}
                onChange={(e) => setCaseVolume(e.target.value)}
                className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18]
                           focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                           transition-all duration-200 cursor-pointer"
              >
                {volumeOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-[#0B0F18] font-medium mb-2">Prioridad Principal</label>
              <select 
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18]
                           focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                           transition-all duration-200 cursor-pointer"
              >
                {priorityOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <button
              onClick={handleConsult}
              disabled={isLoading}
              className="w-full bg-[#007AFF] text-white
                         py-4 rounded-lg font-bold text-sm
                         hover:bg-[#0066D6] transition-all duration-300 hover:-translate-y-0.5
                         shadow-[0_4px_15px_rgba(0,122,255,0.4)]
                         disabled:opacity-70 disabled:cursor-not-allowed
                         flex items-center justify-center gap-2"
            >
              Generar Recomendación con IA <span>✨</span>
            </button>
          </div>

          {/* Result Side */}
          <div className="min-h-[280px] bg-[#EEF3FA] rounded-2xl p-6">
            {isLoading ? (
              <TypingIndicator color="#007AFF" />
            ) : result ? (
              <div className="animate-fadeIn">
                <h4 className="text-[#0B0F18] font-bold mb-3">Análisis Personalizado:</h4>
                <div className="text-[#5B667A] whitespace-pre-line leading-relaxed">
                  {result}
                </div>
              </div>
            ) : (
              <div className="text-center text-[#5B667A] flex flex-col items-center justify-center h-full">
                <i className="ri-sparkling-fill text-5xl text-[#D1D1D6] mb-3"></i>
                <p>Completa los datos para ver el análisis.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tech Chat Section */}
      <section className="bg-[#EEF3FA] rounded-3xl p-8 md:p-[60px] mb-[100px] border-l-4 border-[#0B0F18]">
        <div className="text-center mb-6">
          <h3 className="text-[28px] font-bold text-[#0B0F18] mb-2">Dudas Técnicas Express</h3>
          <p className="text-[#5B667A]">Respuesta instantánea sobre especificaciones.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <label className="block text-[#0B0F18] font-medium mb-2">Tu pregunta:</label>
            <input
              type="text"
              value={techQuestion}
              onChange={(e) => setTechQuestion(e.target.value)}
              placeholder="Ej: ¿Escanea metal sin polvo?"
              className="w-full p-4 border border-[#D1D1D6] rounded-lg bg-white text-[#0B0F18] mb-4
                         focus:outline-none focus:border-[#007AFF] focus:ring-2 focus:ring-[rgba(0,122,255,0.2)]
                         transition-all duration-200"
              onKeyPress={(e) => e.key === 'Enter' && handleTechQuestion()}
            />
            <button
              onClick={handleTechQuestion}
              disabled={techLoading || !techQuestion.trim()}
              className="w-full py-3 px-8 rounded-full font-bold text-sm uppercase tracking-wide
                         border-2 border-[#0B0F18] text-[#0B0F18]
                         hover:bg-[#0B0F18] hover:text-white transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Consultar
            </button>
          </div>

          <div className="min-h-[120px]">
            {techLoading ? (
              <TypingIndicator color="#0B0F18" />
            ) : techResult ? (
              <div className="bg-white p-5 rounded-xl text-[#0B0F18] animate-fadeIn border border-[#D1D1D6]">
                {techResult}
              </div>
            ) : (
              <div className="text-center text-[#5B667A] text-sm">
                La respuesta aparecerá aquí...
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIConsultant;
