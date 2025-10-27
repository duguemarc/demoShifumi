import React, { useState } from 'react';
import './style/GameSetup.scss';
import type {GameMode} from "../../types/GameLogicTypes.ts";

interface GameSetupProps {
  onStartGame: (mode: GameMode, player1Name: string, player2Name?: string) => void;
}

export const GameSetup: React.FC<GameSetupProps> = ({ onStartGame }) => {
  const [mode, setMode] = useState<GameMode>('pvc');
  const [player1Name, setPlayer1Name] = useState('');
  const [player2Name, setPlayer2Name] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (player1Name.trim() && (mode === 'pvc' || player2Name.trim())) {
      onStartGame(mode, player1Name.trim(), player2Name.trim());
    }
  };

  return (
    <div className="game-setup">
      <div className="game-setup__container">
        <h1 className="game-setup__title">Pierre Papier Ciseaux</h1>
        
        <form onSubmit={handleSubmit} className="game-setup__form">
          <div className="game-setup__mode-selection">
            <label className="game-setup__label">Mode de jeu :</label>
            <div className="game-setup__radio-group">
              <label className="game-setup__radio-label">
                <input
                  type="radio"
                  value="pvc"
                  checked={mode === 'pvc'}
                  onChange={(e) => setMode(e.target.value as GameMode)}
                  className="game-setup__radio"
                />
                <span className="game-setup__radio-text">🤖 Contre l'ordinateur</span>
              </label>
              <label className="game-setup__radio-label">
                <input
                  type="radio"
                  value="pvp"
                  checked={mode === 'pvp'}
                  onChange={(e) => setMode(e.target.value as GameMode)}
                  className="game-setup__radio"
                />
                <span className="game-setup__radio-text">👥 Joueur vs Joueur</span>
              </label>
            </div>
          </div>

          <div className="game-setup__player-inputs">
            <div className="game-setup__input-group">
              <label htmlFor="player1" className="game-setup__label">
                Nom du Joueur 1 :
              </label>
              <input
                id="player1"
                type="text"
                value={player1Name}
                onChange={(e) => setPlayer1Name(e.target.value)}
                placeholder="Entrez votre nom"
                className="game-setup__input"
                required
              />
            </div>

            {mode === 'pvp' && (
              <div className="game-setup__input-group">
                <label htmlFor="player2" className="game-setup__label">
                  Nom du Joueur 2 :
                </label>
                <input
                  id="player2"
                  type="text"
                  value={player2Name}
                  onChange={(e) => setPlayer2Name(e.target.value)}
                  placeholder="Entrez votre nom"
                  className="game-setup__input"
                  required={mode === 'pvp'}
                />
              </div>
            )}
          </div>

          <button
            type="submit"
            className="game-setup__start-button"
            disabled={!player1Name.trim() || (mode === 'pvp' && !player2Name.trim())}
          >Commencer la partie
          </button>
        </form>
      </div>
    </div>
  );
};
