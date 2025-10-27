import React from 'react';
import { motion } from 'framer-motion';
import './style/ParallaxBackground.scss';

// Import assets
import Layer1 from '../../assets/Layer1.svg';
import Layer2 from '../../assets/Layer2.svg';
import Layer3 from '../../assets/Layer3.svg';
import Layer4 from '../../assets/Layer4.svg';
import Layer5 from '../../assets/Layer5.svg';
import Layer6 from '../../assets/Layer6.svg';
import Layer7 from '../../assets/Layer7.svg';

interface Layer {
  id: number;
  src: string;
  zIndex: number;
  speed: number;
  direction: number; // 1 for right, -1 for left
}

interface ParallaxBackgroundProps {
  withAnimation: boolean;
}

const ANIMATION_CONFIG = {
  duration: 5,
  ease: "easeInOut" as const,
  repeat: Infinity,
  repeatType: "reverse" as const,
  delay: 0.2,
};

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ withAnimation }) => {
  // Layer configuration based on their visual depth
  const layers: Layer[] = [
    {
      id: 30,
      src: Layer1,
      zIndex: 30,
      speed: 0.2,
      direction: -1, // Reverse direction
    },
    {
      id: 31,
      src: Layer2,
      zIndex: 31,
      speed: 0.2,
      direction: -1, // Reverse direction
    },
    {
      id: 32,
      src: Layer3,
      zIndex: 32,
      speed: 0.5,
      direction: -1, // Reverse direction
    },
    {
      id: 33,
      src: Layer4,
      zIndex: 33,
      speed: 0.5,
      direction: -1, // Reverse direction
    },
    {
      id: 34,
      src: Layer5,
      zIndex: 34,
      speed: 0.5,
      direction: -1, // Reverse direction
    },
    {
      id: 35,
      src: Layer6,
      zIndex: 35,
      speed: 0.7,
      direction: 1, // Normal direction
    },
    {
      id: 36,
      src: Layer7,
      zIndex: 36,
      speed: 0.7,
      direction: 1, // Normal direction
    }
  ];

  const LayerComponent: React.FC<{ layer: Layer }> = ({ layer }) => {
    const animationDistance = layer.direction * 200 * layer.speed;

    return (
      <motion.div
        className="parallax-layer"
        style={{ zIndex: layer.zIndex }}
        animate={withAnimation ? { x: animationDistance } : { x: 0 }}
        transition={ANIMATION_CONFIG}
        initial={{ x: 0 }}
      >
        <motion.img
          src={layer.src}
          alt={`Background layer ${layer.id}`}
          className="parallax-layer__image"
        />
      </motion.div>
    );
  };

  return (
    <div className="parallax-background">
      <div className="parallax-background__container">
        {layers.map((layer) => (
          <LayerComponent key={layer.id} layer={layer} />
        ))}
      </div>
    </div>
  );
};