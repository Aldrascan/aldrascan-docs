import React from 'react';
import { trustFeatures } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const TrustSection = () => {
  return (
    <section className="py-[100px] bg-white">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#0B0F18] mb-3">Garantía AldraScan</h2>
          <p className="text-[#5B667A]">Tu inversión incluye mucho más que el equipo</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustFeatures.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-10 rounded-[20px] text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)]
                         transition-all duration-300 hover:-translate-y-2.5
                         border-b-4 border-transparent hover:border-[#007AFF]"
            >
              <div className="w-20 h-20 bg-[#EEF3FA] rounded-full flex items-center justify-center mx-auto mb-6">
                <i className={`${feature.icon} text-[#007AFF] text-4xl`}></i>
              </div>
              <h3 className="text-xl font-bold text-[#0B0F18] mb-3">{feature.title}</h3>
              <p className="text-[#5B667A]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
