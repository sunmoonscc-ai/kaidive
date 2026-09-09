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
import CourseDetail from './pages/CourseDetail';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">

        <Navbar user={user} setUser={setUser} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<KaiDive />} />
            <Route path="/home" element={<Home />} />
            <Route path="/kaidive" element={<KaiDive />} />
            <Route path="/kaidive/:courseId" element={<CourseDetail />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/programs/:courseId" element={<CourseDetail />} />
            <Route path="/gallery" element={<Gallery user={user} />} />
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
