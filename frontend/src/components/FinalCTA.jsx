import React from 'react';
import { companyInfo } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const FinalCTA = () => {
  return (
    <section className="bg-[#0B0F18] text-white rounded-[20px] py-20 px-10 text-center relative overflow-hidden mb-16 shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10 bg-center bg-cover grayscale"
        style={{ backgroundImage: "url('https://customer-assets.emergentagent.com/job_scanner-compare/artifacts/vvnwwsxj_250701_Medit_1089_Focus_2048x%20copia.jpg')" }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto">
        <h2 className="text-4xl font-bold mb-4">¿Necesitas verlos en acción?</h2>
        <p className="text-white/80 mb-10 text-lg">
          Agenda una demostración comparativa gratuita con AldraScan.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href={`https://wa.me/${companyInfo.whatsappNumber}?text=Hola%20AldraScan%2C%20quiero%20agendar%20una%20demo%20comparativa`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white border-2 border-[#25D366]
                       px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide
                       hover:-translate-y-0.5 transition-all duration-300
                       shadow-[0_4px_14px_rgba(37,211,102,0.3)]
                       hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)]
                       inline-flex items-center gap-2"
          >
            <i className="ri-whatsapp-line"></i> Agendar Demo
          </a>
          <a
            href={`mailto:${companyInfo.email}`}
            className="bg-transparent text-white border-2 border-white
                       px-8 py-3 rounded-full font-bold text-sm uppercase tracking-wide
                       hover:bg-white hover:text-[#0B0F18] transition-all duration-300"
          >
            Solicitar Presupuesto
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
