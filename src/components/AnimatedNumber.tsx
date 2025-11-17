// src/components/AnimatedNumber.js
import React, { useEffect, useState } from 'react';

const AnimatedNumber = ({ value, suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const targetValue = value;
    const increment = targetValue / 100; // Adjust increment for speed
    let currentCount = 0;
    
    const interval = setInterval(() => {
      currentCount = Math.min(currentCount + increment, targetValue);
      setCount(Math.round(currentCount)); // Round to nearest integer
      if (currentCount >= targetValue) clearInterval(interval);
    }, 70); // Adjust timing for smoother or faster counting

    return () => clearInterval(interval);
  }, [value]);

  return (
    <h3 className="impact-number">
      {count}
      {suffix} {/* Render the suffix here */}
    </h3>
  );
};

export default AnimatedNumber;