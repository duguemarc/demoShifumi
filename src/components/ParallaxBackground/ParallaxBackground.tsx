import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import './style/ParallaxBackground.scss';

// Import des assets
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
      src: Layer1,
      zIndex: 30,
      speed: 0.2,
      direction: -1, // Sens inverse
    },
    {
      id: 31,
      src: Layer2,
      zIndex: 31,
      speed: 0.2,
      direction: -1, // Sens inverse
    },
    {
      id: 32,
      src: Layer3,
      zIndex: 32,
      speed: 0.5,
      direction: -1, // Sens inverse
    },
    {
      id: 33,
      src: Layer4,
      zIndex: 33,
      speed: 0.5,
      direction: -1, // Sens inverse
    },
    {
      id: 34,
      src: Layer5,
      zIndex: 34,
      speed: 0.5,
      direction: -1, // Sens inverse
    },
    {
      id: 35,
      src: Layer6,
      zIndex: 35,
      speed: 0.7,
      direction: 1, // Sens normal
    },
    {
      id: 36,
      src: Layer7,
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