import './App.css';
import { useEffect, useRef } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query'; // Import the useMediaQuery hook
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import { gsap } from 'gsap';

function App() {

  const imageRef = useRef(null);

  useEffect(() => {
    // GSAP fade-in transition
    gsap.fromTo(
      imageRef.current, // Use the ref to access the DOM element
      { x: -100,scale:2 },
      { x: 100,scale:2, ease: "power1.inOut", duration: 0.1, repeat: -1, yoyo: true }
    );
    gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 2, onComplete: () => gsap.set('body', { clearProps: 'opacity' }) });
  }, []);

  // Use the useMediaQuery hook to get the screen size
  const isXlScreen = useMediaQuery('(min-width: 1280px)');

  // Render the appropriate component based on the screen size
  const content = isXlScreen ? (
    <div className=' xl:overflow-hidden'>
      <RouterProvider router={createBrowserRouter([
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/catalog",
          element: <Catalog />
        },
      ])} />
    </div>
  ) : (
    // Render directly the Home component for small screens
    <div className=''>
    <Home />
    <Catalog/>
    </div>
  );

  return (
    <div className='body relative font-sora border-[0.5px]  overflow-clip border-[#F5F5F5]'>
      <div  ref={imageRef} className='overlay w-screen h-screen'></div>  
      {content}
    </div>
  );
}

export default App;
