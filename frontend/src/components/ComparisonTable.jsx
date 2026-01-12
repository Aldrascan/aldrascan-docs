import React from 'react';
import { comparisonTable } from '../data/mock';

const ComparisonTable = () => {
  return (
    <section className="py-[100px] bg-[#EEF3FA]">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#0B0F18] mb-3">Comparativa Técnica</h2>
          <p className="text-[#5B667A]">Datos clave para tomar su decisión</p>
        </div>

        <div className="bg-white rounded-[20px] p-8 md:p-[50px] overflow-x-auto shadow-[0_10px_40px_rgba(0,0,0,0.05)]">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="p-5 text-left text-sm uppercase tracking-wide text-[#0B0F18] font-bold border-b border-gray-100">
                  Característica
                </th>
                <th className="p-5 text-center text-sm uppercase tracking-wide text-[#1A70FF] font-bold border-b border-gray-100">
                  Medit i900
                </th>
                <th className="p-5 text-center text-sm uppercase tracking-wide text-[#1174D1] font-bold border-b border-gray-100">
                  Shining Elite
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, index) => (
                <tr key={index}>
                  <td className="p-5 text-left text-[#5B667A] border-b border-gray-100">
                    {row.feature}
                  </td>
                  <td className="p-5 text-center text-[#0B0F18] font-bold border-b border-gray-100">
                    {row.medit}
                  </td>
                  <td className="p-5 text-center text-[#5B667A] border-b border-gray-100">
                    {row.shining}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
