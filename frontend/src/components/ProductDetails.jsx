import { Calendar, Box, Truck, LeafyGreen } from 'lucide-react';
import DialogTitle from '@mui/material/DialogTitle';

export default function ProductDetails({ product }) {
  return (
    <div className="max-h-[80vh] overflow-y-auto">
    
        <DialogTitle className="text-2xl font-bold">{product.name}</DialogTitle>
     
      
      <div className="mt-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      <div className="mt-6 space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">About the Product</h3>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-start space-x-2">
            <LeafyGreen className="w-5 h-5 text-green-600 mt-1" />
            <div>
              <h4 className="font-medium">Farming Method</h4>
              <p className="text-sm text-gray-600">{product.farmingMethod}</p>
            </div>
          </div>

          <div className="flex items-start space-x-2">
            <Calendar className="w-5 h-5 text-blue-600 mt-1" />
            <div>
              <h4 className="font-medium">Harvest Date</h4>
              <p className="text-sm text-gray-600">{product.harvestDate}</p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Storage Instructions</h3>
          <p className="text-gray-600">{product.storage}</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Nutritional Information</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm"><strong>Calories:</strong> {product.nutrition.calories}</p>
            <p className="text-sm mt-2"><strong>Vitamins & Minerals:</strong> {product.nutrition.vitamins}</p>
            <p className="text-sm mt-2"><strong>Health Benefits:</strong> {product.nutrition.benefits}</p>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-2">Delivery Information</h3>
          <div className="flex items-start space-x-2">
            <Truck className="w-5 h-5 text-gray-600 mt-1" />
            <div>
              <p className="text-sm text-gray-600">
                Available options: {product.delivery.options.join(', ')}
              </p>
              <p className="text-sm text-gray-600">
                Minimum order: {product.delivery.minimum}
              </p>
            </div>
          </div>
        </div>

        <div className="flex space-x-4 pt-4">
          <button className="flex-1 bg-primary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Buy Now
          </button>
          <button className="flex-1 border border-primary text-primary px-4 py-2 rounded-lg hover:bg-primary/5 transition-colors">
            Contact Farmer
          </button>
        </div>
      </div>
    </div>
  );
}
