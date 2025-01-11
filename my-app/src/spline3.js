import React, { useState, useEffect, useRef } from 'react';
import Spline from '@splinetool/react-spline';

export default function SplineComponent2() {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div ref={ref}>
      {isVisible && (
        <Spline scene="https://prod.spline.design/c2vCLqiTWv12V63q/scene.splinecode" />
      )}
    </div>
  );
}
