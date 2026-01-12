import React from 'react';
import { comparisonTable } from '../data/mock';

const ComparisonTable = () => {
  return (
    <section className="py-[100px] bg-[#F3F4F6]">
      <div className="w-full max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#243C5B] mb-3">Comparativa Técnica</h2>
          <p className="text-[#4B5563]">Datos clave para tomar su decisión</p>
        </div>

        <div className="bg-white rounded-[20px] p-8 md:p-[50px] overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr>
                <th className="p-5 text-left text-sm uppercase tracking-wide text-[#243C5B] font-bold border-b border-gray-100">
                  Característica
                </th>
                <th className="p-5 text-center text-sm uppercase tracking-wide text-[#A78BFA] font-bold border-b border-gray-100">
                  Medit i900
                </th>
                <th className="p-5 text-center text-sm uppercase tracking-wide text-[#63B3ED] font-bold border-b border-gray-100">
                  Shining Elite
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonTable.map((row, index) => (
                <tr key={index}>
                  <td className="p-5 text-left text-[#4B5563] border-b border-gray-100">
                    {row.feature}
                  </td>
                  <td className="p-5 text-center text-[#243C5B] font-bold border-b border-gray-100">
                    {row.medit}
                  </td>
                  <td className="p-5 text-center text-[#4B5563] border-b border-gray-100">
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
