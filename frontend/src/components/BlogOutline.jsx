import React, { useState } from 'react';
import { blogTopicOptions, generateMockBlogOutline } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = ({ color = "#d946ef" }) => (
  <div className="flex justify-center gap-1.5 py-5">
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.32s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color, animationDelay: '-0.16s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: color }}></div>
  </div>
);

const BlogOutline = () => {
  const [topic, setTopic] = useState('Beneficios de la Impresión Digital');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult(null);
    await new Promise(resolve => setTimeout(resolve, 1200));
    const response = generateMockBlogOutline(topic);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <section className="bg-gradient-to-br from-[#fdf4ff] to-[#fae8ff] border border-[#d946ef] rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden">
      <div className="absolute top-[-30px] left-[-30px] text-[150px] opacity-10 rotate-[15deg] select-none">
        📝
      </div>

      <div className="text-center mb-10 relative z-10">
        <span className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4 bg-[#fae8ff] text-[#a21caf]">
          CONTENIDO
        </span>
        <h3 className="text-[32px] font-bold text-[#a21caf] mb-3">Generador de Esquemas para Blog</h3>
        <p className="text-[#c026d3]">Crea esquemas detallados para tus artículos de blog en segundos.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start relative z-10">
        <div>
          <div className="mb-5">
            <label className="block text-[#a21caf] font-medium mb-2">Tema del Artículo</label>
            <select 
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-4 border border-[#f0abfc] rounded-lg bg-white text-[#1F2937]
                         focus:outline-none focus:border-[#d946ef] focus:ring-2 focus:ring-[rgba(217,70,239,0.2)]
                         transition-all duration-200 cursor-pointer"
            >
              {blogTopicOptions.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="w-full bg-[#d946ef] text-white py-4 rounded-lg font-bold text-sm
                       hover:bg-[#c026d3] transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center justify-center gap-2"
          >
            <i className="ri-file-list-3-line"></i> Generar Esquema
          </button>
        </div>

        <div className="bg-white rounded-2xl p-8 border border-[#f0abfc] shadow-[0_10px_25px_rgba(217,70,239,0.1)]">
          <h4 className="text-[#a21caf] font-bold text-sm uppercase tracking-wide mb-3">Esquema del Blog:</h4>
          {isLoading ? (
            <TypingIndicator />
          ) : (
            <div className="bg-[#fdf4ff] p-4 rounded-lg border border-[#f0abfc] min-h-[150px]">
              {result ? (
                <div className="text-[#1F2937] whitespace-pre-line animate-fadeIn text-[15px]">
                  {result}
                </div>
              ) : (
                <span className="text-gray-400 italic">El esquema aparecerá aquí...</span>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogOutline;
