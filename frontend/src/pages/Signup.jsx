import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const [userType, setUserType] = useState('consumer');
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup data:', { ...formData, userType });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-100">
      <div className="flex w-full max-w-5xl p-4 gap-8">
        {/* Form Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-3xl font-bold text-center mb-8 text-green-800">Create Account</h2>
          
          {/* User Type Toggle */}
          <div className="flex gap-4 mb-6">
            <button
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                userType === 'farmer' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-100 text-green-800'
              }`}
              onClick={() => setUserType('farmer')}
            >
              🌾 Farmer
            </button>
            <button
              className={`flex-1 py-3 rounded-lg font-medium transition-colors ${
                userType === 'consumer' 
                  ? 'bg-green-600 text-white' 
                  : 'bg-green-100 text-green-800'
              }`}
              onClick={() => setUserType('consumer')}
            >
              🛒 Consumer
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your username"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your Email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
                      </div>
                      <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Enter your Password"
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
                      </div>
                      <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="Re-enter your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
              />
                      </div>
                      <Link to='/login'>
                      <button
              type="submit"
              className="w-full py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Sign Up
            </button>
                      </Link>
                      <p className="text-center text-gray-600 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-green-600 hover:underline">
              Log In
            </Link>
          </p>
            
          </form>
        </div>

        {/* Image Section */}
        <div className="hidden lg:block w-full max-w-md">
          <div className="h-full rounded-lg overflow-hidden">
            <img
              src={userType === 'farmer' 
                ? "https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
                : "https://images.unsplash.com/photo-1542838132-92c53300491e"}
              alt={userType === 'farmer' ? "Farmer in field" : "Fresh produce"}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;