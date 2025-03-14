import QRCodeSVG from 'react-qr-code';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import ProductDetails from './ProductDetails';

export default function ProductCards({ product }) {
  return (
    <Dialog>
      <DialogActions >
        <div className="card hover:shadow-lg transition-all duration-300 cursor-pointer bg-white rounded-xl shadow">
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
                <p className="text-2xl font-bold text-primary">₹{product.price}</p>
                <p className="text-gray-500">per {product.unit}</p>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                  {product.certification}
                </span>
              </div>
              <QRCodeSVG
                value={`https://naturalfarm.com/verify/${product.id}`}
                size={64}
                className="opacity-80"
              />
            </div>
          </div>
        </div>
      </DialogActions>
      <DialogContent className="sm:max-w-[600px]">
        <ProductDetails product={product} />
      </DialogContent>
    </Dialog>
  );
}

    
