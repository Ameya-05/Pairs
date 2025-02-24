import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Vision from './Components/Vision';
import Services from './Components/Services';
import LotusScene from './Components/Lotus';
import Team from './Components/Team';
import Contact from './Components/Contact';
import pairsai from './images/pairsai.png';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 2000);
  }, []);

  return (
    <>
      {/* Main Content */}
      <CSSTransition 
        in={!loading} 
        timeout={1000} 
        classNames={{
          enter: 'opacity-0',
          enterActive: 'opacity-100 transition-opacity duration-1000',
          exit: 'opacity-100',
          exitActive: 'opacity-0 transition-opacity duration-1000'
        }} 
        unmountOnExit
      >
        <div className="w-full min-h-screen bg-cover bg-zinc-900 bg-center">
          <Navbar />
          <LotusScene />
          <About />
          <Vision />
          <Services />
          <Team />
          <Contact />
        </div>
      </CSSTransition>

      {/* Loading Screen */}
      <CSSTransition 
        in={loading} 
        timeout={1000} 
        classNames={{
          enter: 'opacity-0',
          enterActive: 'opacity-100 transition-opacity duration-1000',
          exit: 'opacity-100',
          exitActive: 'opacity-0 transition-opacity duration-1000'
        }} 
        unmountOnExit
      >
        <div className="h-screen flex flex-col gap-5 items-center justify-center bg-white text-white px-4 sm:px-6 lg:px-8">
          <div className='w-56 h-48 sm:w-72 sm:h-64'>
            <img 
              src={pairsai} 
              className='w-full h-full object-contain' 
              alt="Loading Logo" 
            />
          </div>
          <div className="w-12 h-12 sm:w-16 sm:h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <p className="mt-4 text-base sm:text-lg font-semibold text-black">Loading...</p>
        </div>
      </CSSTransition>
    </>
  );
}

export default App;