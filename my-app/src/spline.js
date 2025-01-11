import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineComponent() {
  const [isLoaded, setIsLoaded] = useState(false); // For lazy loading the scene
  const [isVisible, setIsVisible] = useState(false); // For showing/hiding the scene based on scroll

  // Handle scroll to toggle visibility of Spline scene
  useEffect(() => {
    const handleScroll = () => {
      const rect = document.getElementById('spline-container')?.getBoundingClientRect();
      if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
        setIsVisible(true); // Show the scene when it's in view
      } else {
        setIsVisible(false); // Hide the scene when it's out of view
      }
    };

    // Initial check and event listener for scroll
    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll); // Clean up the event listener
  }, []);

  return (
    <div
      id="spline-container"
      style={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#000',
        overflow: 'hidden',
        visibility: isVisible ? 'visible' : 'hidden', // Toggle visibility on scroll
        position: 'relative',
      }}
    >
      {isVisible && (
        <Spline
          scene="https://prod.spline.design/4XAEuV-P5MuSPZcg/scene.splinecode" // Add your scene link here
          onLoad={() => setIsLoaded(true)} // Set the state when it's loaded
          onError={(error) => console.error('Error loading spline scene:', error)} // Handle error if any
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain', // Ensure the scene is scaled correctly within its container
          }}
        />
      )}
    </div>
  );
}
