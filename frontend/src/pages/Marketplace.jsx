import React from 'react';
import  QRCodeSVG from 'react-qr-code';

const products = [
  {
    id: 1,
    name: 'Organic Tomatoes',
    farmer: 'Ramesh Kumar',
    location: 'Karnataka',
    price: '40',
    unit: 'kg',
    certification: 'Verified Natural',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 2,
    name: 'Natural Rice',
    farmer: 'Lakshmi Devi',
    location: 'Tamil Nadu',
    price: '60',
    unit: 'kg',
    certification: 'Verified Natural',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300',
  },
  {
    id: 3,
    name: 'Fresh Spinach',
    farmer: 'Anand Patil',
    location: 'Maharashtra',
    price: '30',
    unit: 'bundle',
    certification: 'Verified Natural',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&q=80&w=300',
  },
];

export default function Marketplace() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Natural Farming Marketplace</h1>
        <div className="flex space-x-4">
          <button className="btn-primary">Filter</button>
          <button className="btn-primary">Sort by Price</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card hover:shadow-lg transition-shadow">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded-t-xl"
            />
            <div className="p-4">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                  <p className="text-gray-600">by {product.farmer}</p>
                  <p className="text-sm text-gray-500">{product.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-primary-600">₹{product.price}</p>
                  <p className="text-gray-500">per {product.unit}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
                    {product.certification}
                  </span>
                </div>
                <QRCodeSVG
                  value={`https://naturalfarm.com/verify/${product.id}`}
                  size={64}
                  className="opacity-80"
                />
              </div>
              <div className="mt-4 flex space-x-2">
                <button className="flex-1 btn-primary">Buy Now</button>
                <button className="flex-1 border border-primary-600 text-primary-600 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors">
                  Contact Farmer
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}