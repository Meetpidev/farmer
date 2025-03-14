import React from 'react';
import { useState } from 'react';
import  QRCodeSVG from 'react-qr-code';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Chip,
  CardActionArea,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';

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
    description: 'Fresh, pesticide-free tomatoes grown using natural farming methods. Rich in vitamins and antioxidants.',
    harvested: '2024-03-15',
    availableQuantity: 100,
    farmingMethod: 'Natural Composting',
    season: 'Year-round',
    benefits: ['High in Lycopene', 'No Chemical Pesticides', 'Naturally Ripened'],
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
    description: 'Traditional variety rice grown without chemicals. High in nutrients and natural aroma.',
    harvested: '2024-02-20',
    availableQuantity: 500,
    farmingMethod: 'Traditional Irrigation',
    season: 'monsoon',
    benefits: ['High Fiber Content', 'Naturally Processed', 'Ancient Variety'],
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
    description: 'Nutrient-rich spinach grown using organic methods. Perfect for healthy meals.',
    harvested: '2024-03-18',
    availableQuantity: 50,
    farmingMethod: 'Drip Irrigation',
    season: 'Winter',
    benefits: ['Iron-rich', 'Zero Pesticides', 'Locally Grown'],
  },
];

export default function Marketplace() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const handleClose = () => {
    setSelectedProduct(null);
  };

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
          <div key={product.id} className="card hover:shadow-lg transition-shadow" onClick={() => handleCardClick(product)}>
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

      <Dialog
        open={Boolean(selectedProduct)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        {selectedProduct && (
          <>
            <DialogTitle>
              <Typography variant="h5" component="h2">{selectedProduct.name}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                by {selectedProduct.farmer} from {selectedProduct.location}
              </Typography>
            </DialogTitle>
            <DialogContent dividers>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    style={{ width: '100%', height: 'auto', borderRadius: 8 }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    ₹{selectedProduct.price} per {selectedProduct.unit}
                  </Typography>
                  <Typography variant="body1" paragraph>
                    {selectedProduct.description}
                  </Typography>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary">
                      Harvested: {new Date(selectedProduct.harvested).toLocaleDateString()}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Available Quantity: {selectedProduct.availableQuantity} {selectedProduct.unit}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Farming Method: {selectedProduct.farmingMethod}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                      Season: {selectedProduct.season}
                    </Typography>
                  </Box>
                  <Typography variant="subtitle1" gutterBottom>Benefits:</Typography>
                  <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 2 }}>
                    {selectedProduct.benefits.map((benefit, index) => (
                      <Chip key={index} label={benefit} size="small" />
                    ))}
                  </Box>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <QRCodeSVG
                      value={`https://naturalfarm.com/verify/${selectedProduct.id}`}
                      size={128}
                    />
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
              <Button variant="contained" color="primary">Buy Now</Button>
              <Button variant="outlined" color="primary">Contact Farmer</Button>
            </DialogActions>
          </>
        )}
      </Dialog>

    </div>
  );
}