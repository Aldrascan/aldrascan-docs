import React, { useState } from 'react';
import { specialties, aiCalculatorData, generateMockAIResponse } from '../data/mock';

const AICalculator = () => {
  const [volume, setVolume] = useState('');
  const [specialty, setSpecialty] = useState('General');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleAnalysis = async () => {
    if (!volume) {
      alert('Por favor indica el volumen');
      return;
    }

    setIsLoading(true);
    setResult(null);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 1500));

    const response = generateMockAIResponse(parseInt(volume), specialty);
    setResult(response);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-5" id="ai-tool">
      <section className="bg-white rounded-3xl p-8 md:p-16 shadow-[0_20px_40px_rgba(0,0,0,0.06)] mb-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#1F2937] mb-3">
            {aiCalculatorData.title}
          </h2>
          <p className="text-[#4B5563]">
            {aiCalculatorData.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Form Side */}
          <div>
            <div className="mb-5 text-left">
              <label className="block mb-2 font-medium text-[#1F2937]">
                Impresiones al mes
              </label>
              <input
                type="number"
                value={volume}
                onChange={(e) => setVolume(e.target.value)}
                placeholder="Ej: 30"
                className="w-full px-4 py-3 rounded-lg border border-gray-300
                           focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50
                           focus:border-[#6366f1] transition-all duration-200"
              />
            </div>

            <div className="mb-5 text-left">
              <label className="block mb-2 font-medium text-[#1F2937]">
                Especialidad
              </label>
              <select
                value={specialty}
                onChange={(e) => setSpecialty(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-gray-300
                           focus:outline-none focus:ring-2 focus:ring-[#6366f1]/50
                           focus:border-[#6366f1] transition-all duration-200
                           bg-white cursor-pointer"
              >
                {specialties.map((spec) => (
                  <option key={spec.value} value={spec.value}>
                    {spec.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={handleAnalysis}
              disabled={isLoading}
              className="w-full bg-gradient-to-br from-[#6366f1] to-[#a855f7] text-white
                         px-8 py-3 rounded-full font-bold text-sm
                         hover:opacity-90 transition-all duration-300 hover:scale-[1.02]
                         hover:shadow-lg inline-flex items-center justify-center gap-2
                         disabled:opacity-70 disabled:cursor-not-allowed"
            >
              Generar Informe <span>✨</span>
            </button>
          </div>

          {/* Result Side */}
          <div className="bg-[#f8fafc] p-6 rounded-xl border border-[#e2e8f0] min-h-[200px]">
            {isLoading ? (
              <div className="flex gap-2 justify-center items-center h-full min-h-[180px]">
                <div className="w-2 h-2 bg-[#6366f1] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-[#6366f1] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-[#6366f1] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            ) : result ? (
              <div className="text-[#4B5563] animate-fadeIn">
                <p className="mb-4">
                  <strong className="text-[#1F2937]">Análisis Estimado:</strong>
                </p>
                <p className="mb-4">
                  Con <strong>{result.volume}</strong> casos al mes, tu ahorro potencial es de{' '}
                  <strong className="text-[#6366f1] text-lg">
                    {result.savings.toLocaleString('es-ES')}€ al año
                  </strong>.
                </p>
                <p className="mb-4">
                  Para tu perfil de <strong>{result.specialty}</strong>, recomendamos{' '}
                  <strong className="text-[#243C5B]">{result.recommendation}</strong>{' '}
                  {result.reasoning}.
                </p>
                <p className="text-sm text-[#9CA3AF] mt-6 pt-4 border-t border-[#e2e8f0]">
                  Este es un análisis estimado. Contacta con nosotros para un presupuesto personalizado.
                </p>
              </div>
            ) : (
              <div className="text-[#9CA3AF] flex items-center justify-center h-full min-h-[180px]">
                {aiCalculatorData.placeholder}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICalculator;
