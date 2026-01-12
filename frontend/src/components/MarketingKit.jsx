import React, { useState } from 'react';
import { marketingModelOptions, marketingFocusOptions, generateMockMarketingCopy } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TypingIndicator = () => (
  <div className="flex justify-center gap-1.5 py-5">
    <div className="w-2 h-2 rounded-full animate-bounce bg-white" style={{ animationDelay: '-0.32s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce bg-white" style={{ animationDelay: '-0.16s' }}></div>
    <div className="w-2 h-2 rounded-full animate-bounce bg-white"></div>
  </div>
);

const MarketingKit = () => {
  const [model, setModel] = useState('Medit i900');
  const [focus, setFocus] = useState('Adiós a las pastas');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleGenerate = async () => {
    setIsLoading(true);
    setResult(null);
    await new Promise(resolve => setTimeout(resolve, 1200));
    const response = generateMockMarketingCopy(model, focus);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <section className="bg-[#0B0F18] text-white rounded-3xl p-8 md:p-[60px] mb-[100px] relative overflow-hidden">
      {/* Emoji Background */}
      <div className="absolute right-[-50px] bottom-[-50px] text-[200px] opacity-5 rotate-[-20deg] select-none">
        📢
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 relative z-10">
        {/* Left Side */}
        <div className="flex-1">
          <h3 className="text-[32px] font-bold mb-4">Kit de Marketing Digital ✨</h3>
          <p className="text-white/90 mb-6 text-lg">
            Visualiza el éxito. Genera al instante el post perfecto para anunciar tu nueva tecnología a tus pacientes en Instagram o Facebook.
          </p>

          <div className="mb-5">
            <label className="block text-white font-medium mb-2">Modelo a anunciar:</label>
            <select 
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full p-4 rounded-lg bg-white/10 text-white border border-white/30
                         focus:outline-none focus:border-white/60 transition-all duration-200 cursor-pointer"
            >
              {marketingModelOptions.map(opt => (
                <option key={opt.value} value={opt.value} className="text-black">{opt.label}</option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <label className="block text-white font-medium mb-2">Enfoque del mensaje:</label>
            <select 
              value={focus}
              onChange={(e) => setFocus(e.target.value)}
              className="w-full p-4 rounded-lg bg-white/10 text-white border border-white/30
                         focus:outline-none focus:border-white/60 transition-all duration-200 cursor-pointer"
            >
              {marketingFocusOptions.map(opt => (
                <option key={opt.value} value={opt.value} className="text-black">{opt.label}</option>
              ))}
            </select>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className="bg-[#007AFF] text-white py-3 px-8 rounded-full font-bold text-sm uppercase tracking-wide
                       hover:bg-[#0066D6] hover:-translate-y-0.5 transition-all duration-300
                       disabled:opacity-70 disabled:cursor-not-allowed
                       flex items-center gap-2 mt-3"
          >
            <i className="ri-magic-line"></i> Crear Anuncio
          </button>
        </div>

        {/* Right Side - Output */}
        <div className="flex-1">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h4 className="text-sm uppercase tracking-wide opacity-80 mb-4">Borrador Generado:</h4>
            {isLoading ? (
              <TypingIndicator />
            ) : (
              <div className="bg-white text-[#0B0F18] rounded-xl p-5 min-h-[100px]">
                {result ? (
                  <div className="whitespace-pre-line animate-fadeIn">{result}</div>
                ) : (
                  <span className="text-[#5B667A] italic">Tu copy aparecerá aquí...</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingKit;
