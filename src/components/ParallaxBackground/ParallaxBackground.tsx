import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './style/ParallaxBackground.scss';

// Import des assets
import Layer30 from '../../assets/Layer 30.svg';
import Layer31 from '../../assets/Layer 31.svg';
import Layer32 from '../../assets/Layer 32.svg';
import Layer33 from '../../assets/Layer 33.svg';
import Layer34 from '../../assets/Layer 34.svg';
import Layer35 from '../../assets/Layer 35.svg';
import Layer36 from '../../assets/Layer 36.svg';

interface Layer {
  id: number;
  src: string;
  zIndex: number;
  speed: number;
  direction: number; // 1 pour droite, -1 pour gauche
}

interface ParallaxBackgroundProps {
  withAnimation: boolean;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ withAnimation }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Configuration des layers basée sur leur numéro
  const layers: Layer[] = [
    {
      id: 30,
      src: Layer30,
      zIndex: 30,
      speed: 0.2,
      direction: -1, // Sens inverse
    },
    {
      id: 31,
      src: Layer31,
      zIndex: 31,
      speed: 0.2,
      direction: -1, // Sens inverse
    },
    {
      id: 32,
      src: Layer32,
      zIndex: 32,
      speed: 0.5,
      direction: -1, // Sens inverse
    },
    {
      id: 33,
      src: Layer33,
      zIndex: 33,
      speed: 0.5,
      direction: -1, // Sens inverse
    },
    {
      id: 34,
      src: Layer34,
      zIndex: 34,
      speed: 0.5,
      direction: -1, // Sens inverse
    },
    {
      id: 35,
      src: Layer35,
      zIndex: 35,
      speed: 0.7,
      direction: 1, // Sens normal
    },
    {
      id: 36,
      src: Layer36,
      zIndex: 36,
      speed: 0.7,
      direction: 1, // Sens normal
    }
  ];

  // Créer les transformations pour chaque layer
  const LayerComponent: React.FC<{ layer: Layer; index: number }> = ({ layer }) => {
    return (
        <motion.div
            className="parallax-layer"
            style={{
              zIndex: layer.zIndex,
            }}
            animate={withAnimation ? {
              x: layer.direction * 200 * layer.speed // Animation uniquement en mode setup
            } : {
              x: 0 // Pas d'animation en mode jeu
            }}
            transition={{
              duration: 5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
              delay: 0.2,
            }}
            initial={{
              x: 0
            }}
        >
          <motion.img
              src={layer.src}
              alt={`Layer ${layer.id}`}
              className="parallax-layer__image"

          />
        </motion.div>
    );
  };

  return (
      <div className="parallax-background" ref={containerRef}>
        <div className="parallax-background__container">
          {layers.map((layer, index) => (
              <LayerComponent
                  key={layer.id}
                  layer={layer}
                  index={index}
              />
          ))}
        </div>


      </div>
  );
};