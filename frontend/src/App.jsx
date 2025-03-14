import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; 
import Dashboard from './pages/Dashboard'; 
import Marketplace from './pages/Marketplace'; 
import Footer from './components/Footer'; 
import Signup from './pages/Signup';
import Login from './pages/Login';
import UploadForm from './components/UploadForm';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/add-farm" element={<UploadForm />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/marketplace" element={<Marketplace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;