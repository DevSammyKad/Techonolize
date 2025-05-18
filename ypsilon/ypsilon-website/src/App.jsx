import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Courses from './pages/Courses';
import Home from './pages/Home';
import SingleCourse from './components/SingleCourse';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className="bg-gradient-to-b from-purple-50 to-blue-100 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<SingleCourse />} />
            <Route path="*" element={<NotFoundPage />} />{' '}
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
