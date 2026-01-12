import React from 'react';
import { companyInfo } from '../data/mock';

const Footer = () => {
  return (
    <footer className="bg-[#111827] text-white py-10">
      <div className="w-full max-w-[1200px] mx-auto px-5 text-center">
        <p className="text-white/50 text-sm">
          &copy; {companyInfo.year} {companyInfo.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
