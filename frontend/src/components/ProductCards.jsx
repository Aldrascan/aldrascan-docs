import React from 'react';
import { products } from '../data/mock';

const ProductCard = ({ product }) => {
  return (
    <div
      className="bg-white rounded-3xl p-10 border border-gray-100
                 shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{ borderTop: `5px solid ${product.accentColor}` }}
    >
      <h3 className="text-2xl font-bold text-[#1F2937] mb-3">
        {product.name}
      </h3>
      <p className="text-[#4B5563] mb-5">
        {product.tagline}
      </p>
      <ul className="text-left pl-5 space-y-2">
        {product.features.map((feature, index) => (
          <li 
            key={index} 
            className="text-[#4B5563] list-disc"
          >
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductCards = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-5" id="models">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 my-16">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
