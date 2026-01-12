import React, { useState } from 'react';
import { 
  specialties, volumeOptions, priorityOptions, 
  generateMockAIResponse, generateMockTechResponse 
} from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = ({ color = "#63B3ED" }) => (
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
        className="bg-gradient-to-tr from-[#f8fafc] to-white border border-[#E5E7EB] rounded-3xl p-8 md:p-[60px] my-[100px] shadow-[0_20px_40px_rgba(0,0,0,0.06)]"
      >
        <div className="text-center mb-10">
          <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#f3e8ff] text-[#7e22ce]">
            IA BETA
          </span>
          <h3 className="text-[32px] font-bold text-[#243C5B] mb-3">Asistente Inteligente</h3>
          <p className="text-[#4B5563]">¿Indeciso? Nuestra IA analiza tu perfil y te recomienda la mejor opción.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Form Side */}
          <div>
            <div className="mb-5">
              <label className="block text-[#243C5B] font-medium mb-2">Especialidad Principal</label>
              <select 
                value={clinicType}
                onChange={(e) => setClinicType(e.target.value)}
                className="w-full p-4 border border-[#E5E7EB] rounded-lg bg-white text-[#1F2937]
                           focus:outline-none focus:border-[#63B3ED] focus:ring-2 focus:ring-[rgba(99,179,237,0.2)]
                           transition-all duration-200 cursor-pointer"
              >
                {specialties.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-[#243C5B] font-medium mb-2">Volumen Mensual</label>
              <select 
                value={caseVolume}
                onChange={(e) => setCaseVolume(e.target.value)}
                className="w-full p-4 border border-[#E5E7EB] rounded-lg bg-white text-[#1F2937]
                           focus:outline-none focus:border-[#63B3ED] focus:ring-2 focus:ring-[rgba(99,179,237,0.2)]
                           transition-all duration-200 cursor-pointer"
              >
                {volumeOptions.map(opt => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label className="block text-[#243C5B] font-medium mb-2">Prioridad Principal</label>
              <select 
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                className="w-full p-4 border border-[#E5E7EB] rounded-lg bg-white text-[#1F2937]
                           focus:outline-none focus:border-[#63B3ED] focus:ring-2 focus:ring-[rgba(99,179,237,0.2)]
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
              className="w-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white
                         py-4 rounded-lg font-bold text-sm
                         hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5
                         shadow-[0_4px_15px_rgba(168,85,247,0.4)]
                         disabled:opacity-70 disabled:cursor-not-allowed
                         flex items-center justify-center gap-2"
            >
              Generar Recomendación con IA <span>✨</span>
            </button>
          </div>

          {/* Result Side */}
          <div className="min-h-[280px]">
            {isLoading ? (
              <TypingIndicator color="#a855f7" />
            ) : result ? (
              <div className="animate-fadeIn">
                <h4 className="text-[#243C5B] font-bold mb-3">Análisis Personalizado:</h4>
                <div className="text-[#4B5563] whitespace-pre-line leading-relaxed">
                  {result}
                </div>
              </div>
            ) : (
              <div className="text-center text-[#9CA3AF] flex flex-col items-center justify-center h-full">
                <i className="ri-sparkling-fill text-5xl text-gray-200 mb-3"></i>
                <p>Completa los datos para ver el análisis.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Tech Chat Section */}
      <section className="bg-[#FAFAFA] rounded-3xl p-8 md:p-[60px] mb-[100px] border-l-4 border-[#243C5B]">
        <div className="text-center mb-6">
          <h3 className="text-[28px] font-bold text-[#243C5B] mb-2">Dudas Técnicas Express</h3>
          <p className="text-[#4B5563]">Respuesta instantánea sobre especificaciones.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <label className="block text-[#243C5B] font-medium mb-2">Tu pregunta:</label>
            <input
              type="text"
              value={techQuestion}
              onChange={(e) => setTechQuestion(e.target.value)}
              placeholder="Ej: ¿Escanea metal sin polvo?"
              className="w-full p-4 border border-[#E5E7EB] rounded-lg bg-white text-[#1F2937] mb-4
                         focus:outline-none focus:border-[#63B3ED] focus:ring-2 focus:ring-[rgba(99,179,237,0.2)]
                         transition-all duration-200"
              onKeyPress={(e) => e.key === 'Enter' && handleTechQuestion()}
            />
            <button
              onClick={handleTechQuestion}
              disabled={techLoading || !techQuestion.trim()}
              className="w-full py-3 px-8 rounded-full font-bold text-sm uppercase tracking-wide
                         border-2 border-[#243C5B] text-[#243C5B]
                         hover:bg-[#243C5B] hover:text-white transition-all duration-300
                         disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Consultar
            </button>
          </div>

          <div className="min-h-[120px]">
            {techLoading ? (
              <TypingIndicator color="#243C5B" />
            ) : techResult ? (
              <div className="bg-[#e0f2fe] p-5 rounded-xl text-[#243C5B] animate-fadeIn">
                {techResult}
              </div>
            ) : (
              <div className="text-center text-[#9CA3AF] text-sm">
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
