import React from 'react';
import { products } from '../data/mock';
import 'remixicon/fonts/remixicon.css';

const ProductCard = ({ product }) => {
  const isMetit = product.name === "Medit i900";
  
  return (
    <article
      className="bg-white rounded-3xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]
                  transition-transform duration-300 hover:-translate-y-[5px] flex flex-col"
      style={{ 
        borderTop: `6px solid ${product.accentColor}`,
        border: `1px solid ${isMetit ? '#B3D4FF' : '#E0F2FE'}`
      }}
    >
      {/* Card Header */}
      <div className="p-10 text-center border-b border-gray-100">
        <span 
          className="inline-block px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-4"
          style={{ backgroundColor: product.badgeColor.bg, color: product.badgeColor.text }}
        >
          {product.badge}
        </span>
        <h2 
          className="text-[28px] font-bold mb-2"
          style={{ color: product.accentColor }}
        >
          {product.name}
        </h2>
        <p className="text-[#5B667A] text-sm m-0">{product.tagline}</p>
      </div>

      {/* Product Image */}
      <div 
        className="h-[370px] flex items-center justify-center p-6"
        style={{ 
          background: isMetit 
            ? 'linear-gradient(180deg, #FFFFFF 0%, #B3D4FF 100%)' 
            : 'linear-gradient(180deg, #FFFFFF 0%, #E0F2FE 100%)'
        }}
      >
        <img 
          src={product.image} 
          alt={product.name}
          className="max-h-[340px] w-auto object-contain drop-shadow-xl"
          style={{ maxWidth: '100%' }}
        />
      </div>

      {/* Card Body */}
      <div className="p-10 flex-grow flex flex-col">
        <p className="text-[#5B667A] text-base text-center mb-8">
          {product.description}
        </p>
        <ul className="space-y-4 mb-auto">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center text-[#5B667A]">
              <i 
                className={`${feature.icon} mr-3 text-xl`}
                style={{ color: product.accentColor }}
              ></i>
              <span>{feature.text}</span>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <button 
            className="w-full py-3 px-8 rounded-full font-bold text-sm uppercase tracking-wide
                       border-2 transition-all duration-300"
            style={{ 
              borderColor: product.accentColor, 
              color: product.accentColor 
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = product.accentColor;
              e.target.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
              e.target.style.color = product.accentColor;
            }}
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
