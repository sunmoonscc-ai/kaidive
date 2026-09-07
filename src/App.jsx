import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import KaiDive from './pages/KaiDive';
import Programs from './pages/Programs';
import Gallery from './pages/Gallery';
import Booking from './pages/Booking';
import Admin from './pages/Admin';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        {/* Top gradient overlay for seamless header blending */}
        <div 
          className="absolute top-0 left-0 w-full h-[250px] md:h-[350px] pointer-events-none z-40" 
          style={{ 
            background: 'linear-gradient(to right, rgb(26, 57, 116) 0%, rgb(20, 38, 70) 250px, rgb(20, 38, 70) 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 70%, transparent 100%)',
            maskImage: 'linear-gradient(to bottom, black 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0.3) 70%, transparent 100%)'
          }}
        ></div>
        
        <Navbar user={user} setUser={setUser} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kaidive" element={<KaiDive />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/admin" element={<Admin user={user} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
