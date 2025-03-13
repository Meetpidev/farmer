import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'; // Assuming you have a Home component
import Dashboard from './pages/Dashboard'; // Assuming you have a Dashboard component
import Marketplace from './pages/Marketplace'; // Make sure the component exists here
import Footer from './components/Footer'; // Assuming you have a Footer component
import Signup from './pages/Signup';
import Login from './pages/Login';

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