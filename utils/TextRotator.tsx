'use client';

import {useEffect, useState} from 'react';

const words = ['Web Design', 'SEO Services', 'App Development', 'Company Profile', 'E-Commerce'];

export default function TextRotator() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block text-5xl" style={{color: '#f75990'}}>
      {words[index]}
    </span>
  );
}
