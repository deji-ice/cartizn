import './App.css';
import { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useMediaQuery } from '@react-hook/media-query'; // Import the useMediaQuery hook
import Catalog from './pages/Catalog';
import Home from './pages/Home';
import { gsap } from 'gsap';

function App() {
  useEffect(() => {
    // GSAP fade-in transition
    gsap.fromTo('body', { opacity: 0 }, { opacity: 1, duration: 1, onComplete: () => gsap.set('body', { clearProps: 'opacity' }) });
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
    <div className='body font-sora border-[0.5px]  border-[#F5F5F5]'>
      {content}
    </div>
  );
}

export default App;
