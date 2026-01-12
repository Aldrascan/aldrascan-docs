import React from 'react';
import { products } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const ProductCard = ({ product }) => {
  const isMetit = product.name === "Medit i900";
  
  return (
    <article
      className={`bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                  transition-transform duration-300 hover:-translate-y-[5px] flex flex-col
                  border ${isMetit ? 'border-[#A78BFA]' : 'border-[#63B3ED]'}`}
      style={{ borderTopWidth: '6px' }}
    >
      {/* Card Header */}
      <div className="p-10 text-center border-b border-gray-100">
        <span 
          className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
          style={{ backgroundColor: product.badgeColor.bg, color: product.badgeColor.text }}
        >
          {product.badge}
        </span>
        <h2 className={`text-[28px] font-bold mb-2 ${isMetit ? 'text-[#243C5B]' : 'text-[#63B3ED]'}`}>
          {product.name}
        </h2>
        <p className="text-[#4B5563] text-sm m-0">{product.tagline}</p>
      </div>

      {/* Product Image */}
      <div 
        className="h-[350px] flex items-center justify-center p-6"
        style={{ 
          background: isMetit 
            ? 'linear-gradient(180deg, #f8f7ff 0%, #ede9fe 100%)' 
            : 'linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 100%)'
        }}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="max-h-[320px] w-auto object-contain drop-shadow-lg"
          style={{ maxWidth: '100%' }}
        />
      </div>

      {/* Card Body */}
      <div className="p-10 flex-grow flex flex-col">
        <p className="text-[#4B5563] text-base text-center mb-8">
          {product.description}
        </p>
        <ul className="space-y-4 mb-auto">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center text-[#4B5563]">
              <i className={`${feature.icon} text-[#63B3ED] mr-3 text-xl`}></i>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <button 
            className={`w-full py-3 px-8 rounded-full font-bold text-sm uppercase tracking-wide
                       border-2 transition-all duration-300
                       ${isMetit 
                         ? 'border-[#A78BFA] text-[#A78BFA] hover:bg-[#A78BFA] hover:text-white' 
                         : 'border-[#63B3ED] text-[#63B3ED] hover:bg-[#63B3ED] hover:text-white'}`}
          >
            DETALLES
          </button>
        </div>
      </div>
    </article>
  );
};

const ProductCards = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5" id="models">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-[120px] mt-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
