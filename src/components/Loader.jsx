import React from 'react';
import { Html } from "@react-three/drei";
import { useProgress } from '@react-three/drei';

const Loader = () => {
  const { progress } = useProgress();
  
  return (
    <Html>
      <span className='canvas-load'></span>
      <p style={{
        fontSize: 42,
        color: '#f1f1f1',
        fontWeight: 800,
        marginTop: 40, // fixed typo here, should be marginTop instead of marginTop40
      }}>
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default Loader;
