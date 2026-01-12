import React, { useState } from 'react';
import { faqTopicOptions, generateMockFAQ } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = ({ color = "#0ea5e9" }) => (
  <div className="flex justify-center gap-1.5 py-5">
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.32s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.16s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color }}></div>
  </div>
);

const FAQGenerator = () => {
  const [topic, setTopic] = useState('Precisión');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult(null);
    await new Promise(resolve => setTimeout(resolve, 1200));
    const response = generateMockFAQ(topic);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] border border-[#0ea5e9] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden">
      <div className="absolute top-[-30px] right-[-30px] text-[150px] opacity-10 rotate-[-15deg] select-none">
        ❓
      </div>

      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#e0f2fe] text-[#0284c7]">
          PREGUNTAS FRECUENTES
        </span>
        <h3 className="text-[32px] font-bold text-[#0369a1] mb-3">Generador de FAQs con IA</h3>
        <p className="text-[#0284c7]">Obtén respuestas rápidas a las dudas más comunes.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="mb-5">
            <label className="block text-[#0369a1] font-medium mb-2">Tema de las Preguntas</label>
            <select 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-4 border border-[#7dd3fc] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#0ea5e9] focus:ring-2 focus:ring-[rgba(14,165,233,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {faqTopicOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full bg-[#0ea5e9] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#0284c7] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-question-answer-line"></i> Generar FAQs
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#7dd3fc] shadow-[0_10px_25px_rgba(14,165,233,0.1)]">
          <h4 className="text-[#0369a1] font-bold text-sm uppercase tracking-wide mb-3">Preguntas Frecuentes Generadas:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : (
            <div className="bg-[#f0f9ff] p-4 rounded-lg border border-[#7dd3fc] min-h-[150px]">
              {result ? (
                <div className="text-[#1F2937] whitespace-pre-line animate-fadeIn text-[15px]">
                  {result}
                </div>
              ) : (
                <span className="text-gray-400 italic">Las preguntas aparecerán aquí...</span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQGenerator;
